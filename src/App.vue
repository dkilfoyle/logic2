<template>
  <div id="app">
    <Lumino
      ref="lumino"
      @resize="onLuminoResize"
      @activated="onLuminoActivated"
      @deleted="onLuminoDeleted"
      @newFile="addFileTab('Scratch')"
      @openLibrary="$refs.lumino.shellWidget.activateById('fileTree')"
      @compile="compile"
      @simulate="simulate"
      @about="about"
    >
      <library
        id="fileTree"
        area="left"
        class="dk-SideBarPanel"
        icon="ion-md-folder-open"
        @onCodeTreeSelection="onCodeTreeSelection"
      ></library>

      <instance-tree
        id="outline"
        ref="outline"
        area="left"
        icon="ion-md-menu"
        class="dk-SideBarPanel"
      ></instance-tree>

      <settings
        id="settings"
        class="dk-SideBarPanel"
        area="left"
        icon="fa fa-wrench"
      ></settings>

      <template v-for="openFile in $store.getters.openEditorFiles">
        <Editor
          :id="openFile.name + '_editor'"
          :name="openFile.name"
          :key="openFile.name"
          area="main"
          dock-ref="truthtable"
          dock-mode="tab-after"
          :closable="openFile.name !== 'Scratch'"
          :label="openFile.name"
          icon="ion-md-document"
          :ref="openFile.name + '_editor'"
          v-model="openFile.code"
          @passLint="onPassLint"
          @failLint="onFailLint"
          @onDidChangeCursorPosition="onChangeCursorPosition"
          @onDidChangeModelContent="onChangeEditorModelContent"
          @compile="compile"
          @simulate="simulate"
        />
      </template>

      <template v-for="openFile in $store.getters.openTruthTables">
        <TruthTable
          :id="openFile.name + '_truthtable'"
          :name="openFile.name"
          :key="openFile.name"
          area="main"
          :closable="true"
          label="Truth Table"
          icon="ion-md-document"
          :ref="openFile.name + '_truthtable'"
          @passLint="onPassLint"
          @failLint="onFailLint"
          @compile="compile"
          @simulate="simulate"
        ></TruthTable>
      </template>

      <TerminalView
        id="terminalview"
        class="console"
        ref="terminal"
        area="main"
        label="Console"
        icon="fa fa-tab-bar fa-terminal"
        dock-ref=""
        dock-mode="split-bottom"
        split-ratio="0.8"
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
        label="Gates"
        icon="fa fa-tab-bar fa-table"
        dock-ref=""
        dock-mode="split-right"
        @show-outline="$refs.lumino.shellWidget.activateById('outline')"
        @compile="compile"
        @simulate="simulate"
      />

      <schematic
        id="schematic"
        area="main"
        ref="schematic"
        label="Schematic"
        icon="ion-md-git-branch"
        dock-ref="gates"
        dock-mode="tab-after"
      />

      <traces
        id="traces"
        area="main"
        ref="traces"
        label="Traces"
        icon="fa fa-tab-bar fa-line-chart"
        dock-ref="gates"
        dock-mode="split-bottom"
        @show-outline="$refs.lumino.shellWidget.activateById('outline')"
        @compile="compile"
        @simulate="simulate"
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
import Library from "./components/Library.vue";
import TerminalView from "./components/TerminalView";
import InstanceTree from "./components/InstanceTree";
import Settings from "./components/Settings";
import TruthTable from "./components/TruthTable";

const Chalk = require("chalk");
let options = { enabled: true, level: 2 };
const chalk = new Chalk.Instance(options);

import UtilsMixin from "./mixins/utils";

import vlgParse from "./lib/vlgAntlrParser.js"; // build ast
import vlgWalk from "./lib/vlgAntlrListener.js"; // convert ast into module definitions
import vlgCompile from "./lib/vlgModuleCompiler.js"; // compile module definitions into instances and gates
import vlgSimulator from "./lib/worker"; // run simulation over gate array

export default {
  name: "App",
  components: {
    Lumino,
    TerminalView,
    Editor,
    Library,
    Gates,
    Traces,
    Schematic,
    TruthTable,
    InstanceTree,
    Settings
  },
  mixins: [UtilsMixin],
  data() {
    return {
      sourceFiles: require("./files").SourceFiles,
      sourceCounter: 0,
      cursorPosition: { lineNumber: "", column: "" }
    };
  },
  created() {
    // this.addFileTab("Scratch");
    // this.addFileTab("LW");
    // this.addFileTab("Mux2_1");
    // this.addFileTab("DFlipFlop");
    // this.addFileTab("RippleCounter");
    // this.addFileTab("SumProducts");
    // this.addFileTab("RegFile");
    // this.addFileTab("BenEater");
    // this.addFileTab("TriBuff");
    // this.addFileTab("RAM");
    // this.addFileTab("PC");
    this.addFileTab("Controller");
    // this.addFileTab("Concatenation");
    // this.addFileTab("Bus");
    // this.addFileTab("ALU");
    // this.addFileTab("Register");
    // this.addFileTab("DFlipFlopPC");
  },
  mounted() {
    setTimeout(() => this.about(), 1500);
    vlgSimulator.worker.onmessage = event => {
      var simulateResult = event.data;
      this.termWriteln(
        chalk.cyan.inverse(" DONE ") + "  Simulated successfully"
      );

      this.$store.commit("setSimulateResult", simulateResult);
      this.$store.commit("setStatus", "Simulation OK");
      console.log("Simulation: ", simulateResult);
    };
  },
  watch: {
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
        ? sourceName + this.sourceCounter++
        : sourceName;
      if (sourceName.startsWith("TruthTable")) {
        this.$store.commit("openTruthTable", {
          newSourceName,
          code: this.sourceFiles[sourceName]
        });
      } else {
        this.$store.commit("openFile", {
          newSourceName,
          code: this.sourceFiles[sourceName]
        });
      }
      this.$store.commit("setCurrentFileTab", newSourceName);
      // this.currentFileTab = newSourceName;
    },

    onChangeEditorModelContent() {
      this.updateOutline();
    },

    onCodeTreeSelection(file) {
      this.addFileTab(file);
    },

    onLuminoResize(e) {
      // console.log("onLuminoResize: ", e);
      if (e.id.endsWith("_editor")) {
        this.$refs[e.id][0].resize();
      }

      if (e.id == "truthTable") this.$refs.truthTable.resize();

      if (e.id == "terminalview") this.$refs.terminal.fit();
      if (e.id == "traces") {
        this.$refs.traces.resize(e.msg.width, e.msg.height);
      }
      if (e.id == "traces2") {
        this.$refs.traces2.resize(e.msg.width, e.msg.height);
      }
      if (e.id == "schematic")
        this.$refs.schematic.resize(e.msg.width, e.msg.height);

      // console.log(this.$refs.lumino.shellWidget._dockPanel.saveLayout());
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
      if (e.id.endsWith("_truthtable")) {
        this.$refs[e.id][0].resize();
        this.$refs[e.id][0].focus();
        this.$store.commit(
          "setCurrentFileTab",
          e.id.substring(0, e.id.indexOf("_truthtable"))
        );
      }
    },
    onLuminoDeleted(e) {
      // console.log("Lumino deleted: ", e);
      this.$store.commit("closeFile", e.name);
      // this.onLuminoActivated({ id: "Scratch_editor" });
      this.$store.commit("setCurrentFileTab", "Scratch"); // unnecessary because luminoActivated is called?
    },
    termWriteln(str, ln = true) {
      this.$refs.terminal.setContent(str, ln);
    },
    onFailLint() {
      // console.log("onFailLint: ", e);
      this.$store.commit("setStatus", "Parse Error");
    },
    onPassLint(e) {
      // console.log("onPassLint: ", e);

      // if simulate on pass lint
      this.$store.commit("setParseResult", { ...e.parseResult });
      this.$store.commit("setWalkResult", { ...e.walkResult });

      // compile turns [modules] into instances and gates
      // needed for updating of gates table and schematic

      if (this.$store.getters.currentFile.autoCompile) {
        let compileResult = null;
        try {
          compileResult = vlgCompile(e.walkResult.modules);
        } catch (e) {
          // this.termWriteln(chalk.red("Compile exception: ") + e);
          console.log("lint exception: ", e);
          this.$store.commit("setStatus", "Compile Error");
          this.$store.commit("setCompileResult", { ...compileResult });
          return;
        }
        this.$store.commit("setStatus", "Compile OK");
        this.$store.commit("setCompileResult", { ...compileResult });
      } else {
        this.$store.commit("setStatus", "Parse OK");
      }

      // console.log("app onPassLint: walkResult = ", e.walkResult);
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

      let compileResult = null;
      try {
        compileResult = vlgCompile(walkResult.modules);
      } catch (e) {
        // eslint-disable-next-line no-debugger
        debugger;
        console.log(e, compileResult);
        this.$store.commit("setStatus", "Compile Error");
        this.termWriteln(chalk.red("└── Compile exception: ") + e.msg);
        return;
      }
      this.$store.commit("setCompileResult", { ...compileResult });
      this.$store.commit("setStatus", "Compile OK");
      console.log("Compiled: ", this.stripReactive(compileResult));

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

      vlgSimulator.send({ store: this.$store });

      // vlgSimulator.send([
      //   this.$store.state.evals_per_step,
      //   this.$store.getters.currentFile.compileResult.gates,
      //   this.$store.getters.currentFile.compileResult.parameters,
      //   this.$store.getters.currentFile.compileResult.instances,
      //   this.$store.getters.currentFile.walkResult.modules.find(
      //     m => m.id == "Main"
      //   ).clock
      // ]);

      // {        EVALS_PER_STEP: this.$store.state.evals_per_step,
      // gates: this.$store.getters.currentFile.compileResult.gates,
      // parameters: this.$store.getters.currentFile.compileResult.parameters,
      // instances: this.$store.getters.currentFile.compileResult.instances,
      // testClock: this.$store.getters.currentFile.walkResult.modules.find(
      //   m => m.id == "Main"
      // ).clock
      // logger: this.termWriteln

      // if (simulateResult) {
      //   this.termWriteln(
      //     chalk.cyan.inverse(" DONE ") + "  Simulated successfully"
      //   );

      //   this.$store.commit("setSimulateResult", simulateResult);
      //   this.$store.commit("setStatus", "Simulation OK");
      //   console.log("Simulation: ", simulateResult);
      // } else this.termWriteln(chalk.bgRed(" ERROR ") + "  Simulation aborted");
    },
    about() {
      this.termWriteln(chalk.bold.cyan("Logic2: A logic circuit simulator"));
      this.termWriteln(chalk.yellow("https://github.com/dkilfoyle/logic2"));
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

.skinny-scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;

  /* border-left: #4a4a4a 1px solid; */
}

.skinny-scroll::-webkit-scrollbar-thumb {
  background-color: #808080;
  /* border-left: #4a4a4a 1px solid; */
  border-radius: 6px;
  fill-opacity: 0.5;
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

.dk-SideBarPanel {
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size1);
  height: 100%;
  overflow: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 2px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dk-SideBarPanel::-webkit-scrollbar {
  width: 6px;
  height: 6px;

  /* border-left: #4a4a4a 1px solid; */
}

.dk-SideBarPanel::-webkit-scrollbar-thumb {
  background-color: #80808081;
  /* border-left: #4a4a4a 1px solid; */
  fill-opacity: 0.5;
  border-radius: 6px;
  /* border-right: 4px solid var(--jp-layout-color1); */
}

.tree-root {
  margin-top: 4px;
}

.dkcontainer {
}

.fa-tab-bar {
  line-height: var(--jp-private-horixontal-tab-height);
}

.rows {
  display: flex;
  flex-direction: column;
}

.dk-flex-row {
  display: flex;
  flex-direction: row;
}

.dk-flex-col {
  display: flex;
  flex-direction: column;
}

.dk-justify-end {
  justify-content: flex-end;
}

.dk-justify-center {
  justify-content: center;
}

.dk-justify-between {
  justify-content: space-between;
}

.dk-align-start {
  align-items: flex-start;
}

.dk-align-center {
  align-items: center;
}

.dk-align-baseline {
  align-items: baseline;
}

.dk-push-right {
  margin-left: auto;
}

.dk-push-down {
  margin-top: auto;
}

.dk-grow-0 {
  flex-grow: 0;
}
.dk-grow-1 {
  flex-grow: 1;
}
.dk-grow-2 {
  flex-grow: 2;
}
.dk-grow-3 {
  flex-grow: 3;
}
.dk-grow-4 {
  flex-grow: 4;
}

.dk-h-100 {
  height: 100%;
}

.dk-pa-5 {
  padding: 5px;
}
.dk-pa-10 {
  padding: 10px;
}
.dk-pl-5 {
  padding-left: 5px;
}
.dk-pl-10 {
  padding-left: 10px;
}
.dk-pa-20 {
  padding: 20px;
}
.dk-pt-5 {
  padding-top: 5px;
}
.dk-pt-10 {
  padding-top: 10px;
}
.dk-pt-20 {
  padding-top: 20px;
}
.dk-pb-5 {
  padding-bottom: 5px;
}
.dk-pb-10 {
  padding-bottom: 10px;
}
.dk-pb-20 {
  padding-bottom: 20px;
}
.dk-px-5 {
  padding-left: 5px;
  padding-right: 5px;
}
.dk-px-10 {
  padding-left: 10px;
  padding-right: 10px;
}
.dk-px-20 {
  padding-left: 20px;
  padding-right: 20px;
}
.dk-py-5 {
  padding-top: 5px;
  padding-bottom: 5px;
}
.dk-py-10 {
  padding-top: 10px;
  padding-bottom: 10px;
}
.dk-py-20 {
  padding-top: 20px;
  padding-bottom: 20px;
}
.dk-gap-5 {
  gap: 5px;
}
.dk-gap-8 {
  gap: 8px;
}
.dk-gap-10 {
  gap: 10px;
}
.dk-gap-20 {
  gap: 20px;
}
</style>
