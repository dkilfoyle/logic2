<template>
  <div id="app">
    <Lumino @resize="onLuminoResize" @activated="onLuminoActivated">
      <liquor-tree
        id="fileTree"
        area="sidebar"
        class="jp-FileBrowser"
        icon="ion-md-folder-open"
        :data="sourceTree"
        :options="{ nodeIndent: 14 }"
        @node:selected="onCodeTreeSelection"
      >
        <span class="tree-text" slot-scope="{ node }">
          <template v-if="!node.hasChildren()">
            <ion-icon name="document-text-outline"></ion-icon>
            {{ node.text }}
          </template>

          <template v-else>
            <i
              :class="[
                node.expanded()
                  ? 'ion-android-folder-open'
                  : 'ion-android-folder'
              ]"
            ></i>
            {{ node.text }}
          </template>
        </span></liquor-tree
      >

      <liquor-tree
        id="outline"
        ref="outline"
        area="sidebar"
        class="jp-FileBrowser"
        icon="ion-md-menu"
        :data="$store.getters.instanceTree"
        :options="{ nodeIndent: 14 }"
        @node:selected="onInstanceTreeSelection"
      ></liquor-tree>

      <template v-for="openFile in $store.state.openFiles">
        <Editor
          :id="openFile.name + '_editor'"
          :key="openFile.name"
          area="dock"
          :closable="openFile.name !== 'Scratch'"
          :title="openFile.name"
          :ref="openFile.name + '_editor'"
          v-model="openFile.code"
          @passLint="onPassLint"
          @onDidChangeCursorPosition="onChangeCursorPosition"
          @onDidChangeModelContent="onChangeEditorModelContent"
          @compile="compile"
          @simulate="simulate"
        />
      </template>

      <TerminalView
        id="terminalview"
        class="console"
        ref="terminal"
        area="dock"
        title="Terminal"
        dock-ref="Scratch_editor"
        dock-mode="split-bottom"
        :options="{
          scrollback: 5000,
          disableStdin: true,
          useFlowControl: true
        }"
        dark-mode
      />

      <gates
        id="gates"
        area="dock"
        ref="gates"
        title="Gate Table"
        dock-ref="Scratch_editor"
        dock-mode="split-right"
      />

      <span id="statusbar-edpos" area="statusbar" align="right">
        Ln {{ cursorPosition.lineNumber }}, Col {{ cursorPosition.column }}
      </span>
      <span id="statusbar-filename" area="statusbar" align="right">{{
        $store.state.currentFileTab
      }}</span>
      <span id="statusbar-compile" area="statusbar">{{
        $store.getters.currentFile.status
      }}</span>
    </Lumino>
  </div>
</template>

<script>
// import "bulma/css/bulma.css";
import Lumino from "./components/lumino/Lumino";
import Editor from "./components/Editor.vue";
import Gates from "./components/Gates.vue";
import LiquorTree from "liquor-tree";
import TerminalView from "./components/TerminalView";

import { mapGetters } from "vuex";

const Chalk = require("chalk");
let options = { enabled: true, level: 2 };
const chalk = new Chalk.Instance(options);

const shortJoin = strs => {
  const x = strs.join(", ");
  if (x.length < 21) return x;
  else return x.slice(0, 40) + "...";
};

const indexBy = (array, prop) =>
  array.reduce((output, item) => {
    output[item[prop]] = item;
    return output;
  }, {});

const stripReactive = x => JSON.parse(JSON.stringify(x));

import vlgParse from "./lib/vlgAntlrParser.js"; // build ast
import vlgWalk from "./lib/vlgAntlrListener.js"; // convert ast into module definitions
import vlgCompile from "./lib/vlgModuleCompiler.js"; // compiled modul definitions into instances and gates
import evaluateGates from "./lib/simulation.js";

export default {
  name: "App",
  components: {
    Lumino,
    TerminalView,
    Editor,
    LiquorTree,
    Gates
  },
  data() {
    return {
      sourceFiles: require("./files").SourceFiles,
      sourceTree: require("./files").SourceTree,
      sourceCounter: 0,
      cursorPosition: { lineNumber: "", column: "" }
    };
  },
  created() {
    this.addFileTab("Scratch");
  },
  computed: {
    ...mapGetters(["instanceTree"])
  },
  watch: {
    instanceTree() {
      this.$nextTick(() => this.$refs.outline.setModel(this.instanceTree));
    },
    currentFileTab() {
      this.$store.commit("setSelectedInstanceID", "main");
    }
  },
  methods: {
    onChangeCursorPosition(pos) {
      this.cursorPosition = pos;
    },
    addFileTab(sourceName) {
      const newSourceName = Object.keys(this.$store.state.openFiles).includes(
        sourceName
      )
        ? newSourceName + this.sourceCounter++
        : sourceName;
      this.$store.commit("openFile", {
        newSourceName,
        code: this.sourceFiles[newSourceName]
      });
      this.$store.commit("setCurrentFileTab", newSourceName);
      // this.currentFileTab = newSourceName;
    },

    onChangeEditorModelContent() {
      this.updateOutline();
    },

    onCodeTreeSelection(node) {
      if (node.children.length == 0) this.addFileTab(node.text);
    },

    onInstanceTreeSelection(node) {
      this.$store.commit("setSelectedInstanceID", node.data.id);
    },
    onLuminoResize() {
      // console.log("onLuminoResize: ", e);
      // resize all editors
      Object.keys(this.$store.state.openFiles).forEach(name => {
        let ref = `${name}_editor`;
        this.$refs[ref][0].onResize();
      });

      this.$refs.terminal.fit();
    },
    onLuminoActivated(e) {
      console.log("onLuminoActivated: ", e);
      if (e.id.endsWith("_editor_wrapper")) {
        const editorid = e.id.replace("_wrapper", ""); //substring(0, e.id.indexOf("_wrapper"));
        console.log(this.$refs[editorid][0]);
        this.$refs[editorid][0].onResize();
        this.$refs[editorid][0].editor.focus();
        this.$store.commit(
          "setCurrentFileTab",
          e.id.substring(0, e.id.indexOf("_editor"))
        );
      }
    },
    termWriteln(str) {
      this.$refs.terminal.setContent(str);
    },
    onPassLint(e) {
      // if simulate on pass lint
      this.$store.commit("setParseResult", { ...e.parseResult });
      this.$store.commit("setWalkResult", { ...e.walkResult });

      // compile turns [modules] into instances and gates
      // needed for updating of gates table and schematic

      const compileResult = vlgCompile(e.walkResult.modules);
      this.$store.commit("setCompileResult", { ...compileResult });
      this.$store.commit("setStatus", "compiled");

      console.log("app: onPassLint: ", this.$store.getters.currentFile);
    },
    compile() {
      this.termWriteln(
        chalk.bold.green("• Compiling: ") +
          chalk.yellow(this.$store.state.currentFileTab)
      );

      const parseResult = vlgParse(this.$store.getters.currentFile.code);
      this.$store.commit("setParseResult", { ...parseResult });
      if (parseResult.errors.length > 0) {
        // this.$store.commit("setParseState", te = "parseError";
        this.termWriteln(
          chalk.red("└── Syntax error(s): ") + parseResult.errors.length
        );
        return;
      }

      const walkResult = vlgWalk(parseResult.ast);
      this.$store.commit("setWalkResult", { ...walkResult });
      if (walkResult.errors.length > 0) {
        // this.currentFile.state = "walkError";
        this.termWriteln(
          chalk.red("└── Semantic error(s): ") + walkResult.errors.length
        );
        return;
      }

      this.termWriteln(
        chalk.green(
          `├── Parsed ${walkResult.modules.length} modules: ${chalk.white(
            walkResult.modules.map(x => x.id).join(", ")
          )}`
        )
      );

      const compileResult = vlgCompile(walkResult.modules);
      this.$store.commit("setCompileResult", { ...compileResult });
      this.$store.commit("setStatus", "compiled");
      console.log("Compiled: ", stripReactive(compileResult));

      this.termWriteln(
        chalk.green(
          `├── Generated ${
            compileResult.instances.length
          } instances: ${chalk.white(
            shortJoin(compileResult.instances.map(x => x.id))
          )}`
        )
      );
      this.termWriteln(
        chalk.green(
          `└── Generated ${compileResult.gates.length} gates: ${chalk.white(
            shortJoin(compileResult.gates.map(x => x.id))
          )}`
        )
      );

      this.termWriteln(
        chalk.green.inverse(" DONE ") + "  Compiled successfully"
      );

      // this.currentFile.timestamp = Date.now();
      // this.currentFile.simulation = { ready: false };
    },
    simulate() {
      this.showTerminal = true;
      this.termWriteln(
        chalk.bold.cyan("• Simulating: ") + chalk.yellow(this.currentFile.name)
      );

      const newSimulation = {
        gates: {},
        clock: [],
        time: [],
        ready: false
      };

      this.currentFile.gates.forEach(g => {
        g.state = 0;
        newSimulation.gates[g.id] = [];
      });

      var gatesLookup = indexBy(this.currentFile.gates, "id");
      var instancesLookup = indexBy(this.currentFile.instances, "id");
      var modulesLookup = indexBy(this.currentFile.walkResult.modules, "id");

      const maxClock = modulesLookup.Main.clock.reduce(
        (acc, val) => Math.max(val.time, acc),
        0
      );

      if (gatesLookup["main_clock"]) gatesLookup["main_clock"].state = 0;

      for (let clock = 0; clock <= maxClock; clock++) {
        newSimulation.time.push(clock);
        modulesLookup.Main.clock.forEach(c => {
          if (c.time == clock) {
            c.assignments.forEach(a => {
              // can only assign values to control types
              if (gatesLookup["main_" + a.id].logic == "control")
                gatesLookup["main_" + a.id].state = a.value;
            });
          }
        });

        if (gatesLookup["main_clock"])
          gatesLookup["main_clock"].state =
            ~gatesLookup["main_clock"].state & 1; // tick-tock

        for (let i = 0; i < this.EVALS_PER_STEP; i++) {
          evaluateGates(this.currentFile.gates, gatesLookup);
        }
        this.currentFile.gates.forEach(g => {
          newSimulation.gates[g.id].push(gatesLookup[g.id].state);
        });

        newSimulation.clock.push(clock % 2);

        modulesLookup.Main.clock.forEach((x, index, all) => {
          if (x.time != clock) return;

          const lineChar = index == all.length - 1 ? "└" : "├";

          this.termWriteln(
            chalk.cyan(
              `${lineChar}── Time ${clock.toString().padStart(3, "0")} :`
            ) +
              shortJoin(x.assignments.map(a => a.id + "=" + a.value)) +
              chalk.cyan(" => ") +
              shortJoin(
                instancesLookup.main.gates
                  .filter(gateId => gatesLookup[gateId].logic == "response")
                  .map(o => this.getLocalId(o) + "=" + gatesLookup[o].state)
              )
          );
        });
      }
      this.termWriteln(
        chalk.cyan.inverse(" DONE ") + "  Simulated successfully"
      );
      newSimulation.maxTime = newSimulation.time[newSimulation.time.length - 1];
      newSimulation.timestamp = Date.now();
      newSimulation.ready = true;
      this.currentFile.simulation = newSimulation;
      console.log("Simulation: ", stripReactive(this.currentFile.simulation));
    }
  }
};
</script>

<style>
html {
  background: var(--jp-layout-color3) !important;
}
body {
  margin: 0px;
  font-size: 14pt;
}
.editor {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.console {
}

.fileBrowserIcon::before {
  content: "\f07b";
  font-family: FontAwesome;
}

.jp-SideBar .lm-TabBar-tabIcon {
  align-self: center;
  font-size: 18pt;
}

.lm-DockPanel-tabBar .lm-TabBar-tab.jp-mod-current:before {
  height: 3px;
}

.jp-FileBrowser {
  display: flex;
  flex-direction: column;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size1);
  height: 100%;
}

.tree-root {
  margin-top: 4px;
}
</style>
