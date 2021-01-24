<template>
  <div class="dk-flex-col dk-gap-5 dk-pa-10 dk-h-100">
    <tree-menu
      @selected="x => $emit('onCodeTreeSelection', x.text)"
      :node="{ text: 'CIRCUIT LIBRARY', children: sourceTree }"
      :depth="0"
    ></tree-menu>
  </div>
</template>

<script>
import TreeMenu from "./TreeMenu";
export default {
  components: { TreeMenu },
  data() {
    return {
      sourceTree: require("../files").SourceTree
    };
  }
};
</script>

<style></style>
