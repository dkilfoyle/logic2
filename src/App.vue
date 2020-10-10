<template>
  <div id="app">
    <Lumino>
      <FileTree
        id="sidebar-hello"
        class="jp-FileBrowser"
        area="sidebar"
        :options="{titleLabel:undefined, titleIconClass: 'fileBrowserIcon', closable: false}"
      />
      <HelloWorld id="home-test2" area="dock" />
      <HelloWorld id="home-test3" area="dock" />
    </Lumino>
  </div>
</template>

<script>
import Lumino from "./components/Lumino";
import FileTree from "./components/FileTree.vue";
import HelloWorld from "./components/HelloWorld.vue";
// import "@lumino/default-theme/style/index.css";

export default {
  name: "App",
  components: {
    Lumino,
    FileTree,
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
