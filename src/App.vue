<template>
  <div id="app">
    <Lumino
      ref="lumino"
      @resize="onLuminoResize"
      @activated="onLuminoActivated"
    >
      <liquor-tree
        id="fileTree"
        area="left"
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
        area="right"
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
          area="main"
          :closable="openFile.name !== 'Scratch'"
          :title="openFile.name"
          icon="ion-md-document"
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
        area="main"
        title="Console"
        icon="fa fa-tab-bar fa-terminal"
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
        area="main"
        ref="gates"
        title="Gates"
        icon="fa fa-tab-bar fa-table"
        dock-ref="terminal"
        dock-mode="split-right"
      />

      <schematic
        id="schematic"
        area="main"
        ref="schematic"
        title="Schematic"
        icon="ion-md-git-branch"
        dock-ref="gates"
        dock-mode="tab-after"
      />

      <traces
        id="traces"
        area="main"
        ref="traces"
        title="Traces"
        icon="fa fa-tab-bar fa-line-chart"
        dock-ref="gates"
        dock-mode="split-bottom"
      ></traces>

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
import Traces from "./components/Traces.vue";
import Schematic from "./components/Schematic.vue";
import LiquorTree from "liquor-tree";
import TerminalView from "./components/TerminalView";

import { mapGetters } from "vuex";

const Chalk = require("chalk");
let options = { enabled: true, level: 2 };
const chalk = new Chalk.Instance(options);

import UtilsMixin from "./mixins/utils";

import vlgParse from "./lib/vlgAntlrParser.js"; // build ast
import vlgWalk from "./lib/vlgAntlrListener.js"; // convert ast into module definitions
import vlgCompile from "./lib/vlgModuleCompiler.js"; // compile module definitions into instances and gates
import vlgSimulate from "./lib/vlgSimulator.js"; // run simulation over gate array

export default {
  name: "App",
  components: {
    Lumino,
    TerminalView,
    Editor,
    LiquorTree,
    Gates,
    Traces,
    Schematic
  },
  mixins: [UtilsMixin],
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
    ...mapGetters(["getInstanceTree"])
  },
  watch: {
    getInstanceTree(tree) {
      this.$nextTick(() => this.$refs.outline.setModel(tree));
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
    onLuminoResize(e) {
      // console.log("onLuminoResize: ", e);
      if (e.id.endsWith("_editor")) {
        this.$refs[e.id][0].resize();
      }

      if (e.id == "terminalView") this.$refs.terminal.fit();
      if (e.id == "traces") {
        this.$refs.traces.resize(e.msg.width, e.msg.height);
      }
      if (e.id == "schematic")
        this.$refs.schematic.resize(e.msg.width, e.msg.height);

      console.log(this.$refs.lumino.shellWidget._dockPanel.saveLayout());
    },
    onLuminoActivated(e) {
      // console.log("onLuminoActivated: ", e);
      if (e.id.endsWith("_editor")) {
        this.$refs[e.id][0].resize();
        this.$refs[e.id][0].editor.focus();
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
      this.$store.commit("setStatus", "Compile OK");

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
      this.$store.commit("setStatus", "Compile OK");
      console.log("Compiled: ", compileResult);

      this.termWriteln(
        chalk.green(
          `├── Generated ${
            compileResult.instances.length
          } instances: ${chalk.white(
            compileResult.instances.map(x => x.id).join(", ")
          )}`
        )
      );
      this.termWriteln(
        chalk.green(
          `└── Generated ${compileResult.gates.length} gates: ${chalk.white(
            compileResult.gates.map(x => x.id).join(", ")
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
        chalk.bold.cyan("• Simulating: ") +
          chalk.yellow(this.$store.getters.currentFile.name)
      );

      const simulateResult = vlgSimulate(
        this.$store.getters.currentFile.compileResult.gates,
        this.$store.getters.currentFile.compileResult.instances,
        this.$store.getters.currentFile.walkResult.modules,
        this.termWriteln
      );

      this.termWriteln(
        chalk.cyan.inverse(" DONE ") + "  Simulated successfully"
      );

      this.$store.commit("setSimulateResult", simulateResult);
      this.$store.commit("setStatus", "Simulation OK");
      console.log("Simulation: ", simulateResult);
    }
  }
};
</script>

<style>
html {
  background: var(--jp-layout-color3) !important;
  overflow: hidden !important;
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

.dkcontainer {
}

.fa-tab-bar {
  line-height: var(--jp-private-horixontal-tab-height);
}
</style>
