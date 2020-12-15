<template>
  <div class="row" style="height:60px">
    <nav class="breadcrumb is-centered" style="line-height:60px">
      <ul>
        <li
          v-for="node in $store.state.selectedInstanceID.split('_')"
          :key="node"
        >
          <a @click="selectBreadcrumb(node)">{{ node }}</a>
        </li>
        <button
          class="button is-small"
          style="margin-top:auto;margin-bottom:auto"
          @click="$emit('show-outline')"
        >
          <span class="icon is-small">
            <i class="fa fa-ellipsis-h"></i>
          </span>
        </button>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    selectBreadcrumb(node) {
      if (node == "main") {
        this.$store.commit("setSelectedInstanceID", "main");
        return;
      }
      const x = this.$store.state.selectedInstanceID.substring(
        0,
        this.$store.state.selectedInstanceID.indexOf("_" + node) +
          node.length +
          1
      );
      this.$store.commit("setSelectedInstanceID", x);
    }
  }
};
</script>

<style></style>
