<template>
  <div id="app">
    <Lumino @resize="onLuminoResize" @activated="onLuminoActivated">
      <liquor-tree
        id="fileTree"
        area="sidebar"
        class="jp-FileBrowser"
        icon="ion-md-folder-open"
        msg="File Browser"
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
        />
      </template>

      <HelloWorld
        id="terminal"
        area="dock"
        title="Terminal"
        dock-ref="ed1"
        dock-mode="split-bottom"
        msg="Term 1"
      />

      <span id="statusbar-edpos" area="statusbar" align="right">
        Ln {{ cursorPosition.lineNumber }}, Col {{ cursorPosition.column }}
      </span>
      <span id="statusbar-filename" area="statusbar" align="right">{{
        $store.state.currentFileTab
      }}</span>
      <span id="statusbar-compile" area="statusbar">{{
        $store.getters.currentFile.state
      }}</span>
    </Lumino>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import Lumino from "./components/lumino/Lumino";
import HelloWorld from "./components/HelloWorld.vue";
import Editor from "./components/Editor.vue";
import LiquorTree from "liquor-tree";

// import vlgParse from "./lib/vlgAntlrParser.js"; // build ast
// import vlgWalk from "./lib/vlgAntlrListener.js"; // convert ast into module definitions
import vlgCompile from "./lib/vlgModuleCompiler.js"; // compiled modul definitions into instances and gates
// import evaluateGates from "./lib/simulation.js";

export default {
  name: "App",
  components: {
    Lumino,
    HelloWorld,
    Editor,
    LiquorTree
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
    updateOutline() {
      //this.$nextTick(() => this.$refs.outline.setModel(this.instanceTree));
    },

    onCodeTreeSelection(node) {
      if (node.children.length == 0) this.addFileTab(node.text);
    },
    onLuminoResize() {
      // console.log("onLuminoResize: ", e);
      // resize all editors
      Object.keys(this.$store.state.openFiles).forEach(name => {
        let ref = `${name}_editor`;
        this.$refs[ref][0].onResize();
      });
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
    onPassLint(e) {
      this.currentFile.parseResult = { ...e.parseResult };
      this.currentFile.walkResult = { ...e.walkResult };

      // compile turns [modules] into instances and gates
      // needed for updating of gates table and schematic

      this.currentFile.compileResult = vlgCompile(
        this.currentFile.walkResult.modules
      );
      this.currentFile.instances = [
        ...this.currentFile.compileResult.instances
      ];
      this.currentFile.gates = [...this.currentFile.compileResult.gates];
      this.currentFile.state = "compiled " + Date.now();
      console.log("app: onPassLint: ", this.currentFile);
    }
  }
};
</script>

<style>
html {
  background: var(--jp-layout-color3);
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

.fileBrowserIcon::before {
  content: "\f07b";
  font-family: FontAwesome;
}

.jp-SideBar .lm-TabBar-tabIcon {
  align-self: center;
  font-size: 18pt;
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
