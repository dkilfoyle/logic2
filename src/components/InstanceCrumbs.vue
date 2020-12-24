<template>
  <div class="dk-flex-cols dk-align-baseline">
    <nav class="breadcrumb" style="margin-bottom:0px">
      <ul>
        <li
          v-for="node in $store.getters.selectedInstanceID.split('_')"
          :key="node"
        >
          <a @click="selectBreadcrumb(node)">{{ node }}</a>
        </li>
      </ul>
    </nav>
    <button class="button is-small" @click="$emit('show-outline')">
      <span class="icon is-small">
        <i class="fa fa-ellipsis-h"></i>
      </span>
    </button>
  </div>
  <!-- <div class="row" style="height:60px">
    <nav class="breadcrumb is-centered" style="line-height:60px">
      <ul>
        <li
          v-for="node in $store.getters.selectedInstanceID.split('_')"
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
  </div> -->
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
      const x = this.$store.getters.selectedInstanceID.substring(
        0,
        this.$store.getters.selectedInstanceID.indexOf("_" + node) +
          node.length +
          1
      );
      this.$store.commit("setSelectedInstanceID", x);
    }
  }
};
</script>

<style></style>
