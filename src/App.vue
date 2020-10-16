<template>
  <div id="app">
    <Lumino @resize="onLuminoResize">
      <HelloWorld
        id="fileTree"
        area="sidebar"
        class="jp-FileBrowser"
        icon="fileBrowserIcon"
        msg="File Browser"
      />
      <Editor
        id="ed1"
        ref="ed1"
        area="dock"
        title="Editor1"
        closable
        msg="Editor 1"
      />
      <HelloWorld
        id="ed2"
        area="dock"
        title="Editor2"
        closable
        msg="Editor 2"
      />
      <HelloWorld
        id="terminal"
        area="dock"
        title="Terminal"
        dock-ref="ed1"
        dock-mode="split-bottom"
        msg="Term 1"
      />
    </Lumino>
  </div>
</template>

<script>
import Lumino from "./components/Lumino";
import HelloWorld from "./components/HelloWorld.vue";
import Editor from "./components/Editor.vue"
// import "@lumino/default-theme/style/index.css";

export default {
  name: "App",
  components: {
    Lumino,
    HelloWorld,
    Editor
  },
  methods: {
    onLuminoResize(e) {
      console.log("onLuminoResize: ", e);
      this.$refs.ed1.onResize();
    }
  }
};
</script>

<style>
body {
  margin: 0px;
  font-size: 14pt;
}
.editor {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
