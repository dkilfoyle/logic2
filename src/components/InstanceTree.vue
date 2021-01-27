<template>
  <div class="dk-flex-col dk-grow-1 dk-gap-10 dk-pa-10">
    <tree-menu
      @selected="node => $store.commit('setSelectedInstanceID', node.data.id)"
      :node="{ text: 'INSTANCES', children: getInstanceTree }"
      :depth="0"
      :can-select-branch="true"
    ></tree-menu>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import TreeMenu from "./TreeMenu";

import { mapGetters } from "vuex";

export default {
  components: {
    TreeMenu
  },
  mixins: [UtilsMixin, SelectionsMixin],
  computed: {
    ...mapGetters(["getInstanceTree"])
  },
  methods: {
    onInstanceTreeSelection(x) {
      this.$store.commit("setSelectedInstanceID", x);
    }
  }
};
</script>

<style scoped></style>
