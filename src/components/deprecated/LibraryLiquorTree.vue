<template>
  <div class="dk-flex-col dk-gap-5 dk-pa-10 dk-h-100">
    <h4 class="dk-pt-10 dk-px-10">CIRCUIT LIBRARY</h4>
    <liquor-tree
      class="dk-h-100 skinny-scroll"
      id="codeLiquorTree"
      :data="sourceTree"
      :options="{ nodeIndent: 22 }"
      @node:selected="onCodeTreeSelection"
    >
      <span class="tree-text" slot-scope="{ node }">
        <template v-if="!node.hasChildren()">
          <template v-if="!node.data.icon">
            <ion-icon name="document-text-outline"></ion-icon>
            {{ node.text }}
          </template>

          <template v-else>
            <i :class="node.data.icon"></i>
            {{ node.text }}
          </template>
        </template>

        <template v-else>
          <i
            :class="node.expanded() ? 'fa fa-folder-open' : 'fa fa-folder-o'"
          ></i>
          <span style="margin-left: 8px">{{ node.text }}</span>
        </template>
      </span></liquor-tree
    >
  </div>
</template>

<script>
import LiquorTree from "liquor-tree";
export default {
  components: { LiquorTree },
  data() {
    return {
      sourceTree: require("../files").SourceTree
    };
  },
  methods: {
    onCodeTreeSelection(node) {
      if (node.children.length == 0)
        this.$emit("onCodeTreeSelection", node.text);
    }
  }
};
</script>

<style></style>
