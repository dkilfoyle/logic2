<template>
  <div id="app">
    <Lumino>
      <HelloWorld id="home-test1" msg="A" />
      <HelloWorld id="home-test2" msg="B" />
      <HelloWorld id="home-test3" msg="C" />
    </Lumino>
  </div>
</template>

<script>
import Lumino from "./components/Lumino";
import HelloWorld from "./components/HelloWorld.vue";
import "@lumino/default-theme/style/index.css";

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
