<template>
  <div class="dk-flex-col dk-grow-1 dk-gap-10 dk-py-10">
    <h4 class="dk-px-10">INSTANCES</h4>
    <liquor-tree
      class="skinny-scroll"
      style="margin-top: -10px"
      ref="tree"
      :data="$store.getters.instanceTree"
      :options="{ nodeIndent: 14 }"
      @node:selected="onInstanceTreeSelection"
    ></liquor-tree>
    <h4 class="dk-px-10">GATE FILTER</h4>
    <div class="dk-flex-col dk-gap-10 dk-px-10">
      <b-radio v-model="showWhichGates" name="showWhichGates" native-value="all"
        >All</b-radio
      >
      <b-radio
        v-model="showWhichGates"
        name="showWhichGates"
        native-value="inputs"
        >Inputs</b-radio
      >
      <b-radio
        v-model="showWhichGates"
        name="showWhichGates"
        native-value="outputs"
        >Outputs</b-radio
      >
      <b-radio
        v-model="showWhichGates"
        name="showWhichGates"
        native-value="ports"
        >Ports</b-radio
      >
      <b-radio
        v-model="showWhichGates"
        name="showWhichGates"
        native-value="wires"
        >Wires</b-radio
      >
    </div>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import LiquorTree from "liquor-tree";
import "buefy/dist/buefy.css";

import { mapGetters } from "vuex";

export default {
  components: {
    LiquorTree
  },
  mixins: [UtilsMixin, SelectionsMixin],
  computed: {
    ...mapGetters(["getInstanceTree"]),
    showWhichGates: {
      get() {
        return this.$store.state.showWhichGates;
      },
      set(value) {
        this.$store.commit("setShowWhichGates", value);
      }
    }
  },
  watch: {
    getInstanceTree(tree) {
      this.$nextTick(() => this.$refs.tree.setModel(tree));
    }
  },

  methods: {
    onInstanceTreeSelection(node) {
      this.$store.commit("setSelectedInstanceID", node.data.id);
    }
  }
};
</script>

<style scoped></style>
