<template>
  <div id="app">
    <Lumino>
      <HelloWorld
        id="fileTree"
        area="sidebar"
        class="jp-FileBrowser"
        icon="fileBrowserIcon"
        msg="File Browser"
      />
      <HelloWorld
        id="ed1"
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
// import "@lumino/default-theme/style/index.css";

export default {
  name: "App",
  components: {
    Lumino,
    HelloWorld,
  },
};
</script>

<style>
body {
  margin: 0px;
  font-size: 14pt;
}
</style>
