<template>
  <div class="rows">
    <liquor-tree
      ref="tree"
      :data="$store.getters.instanceTree"
      :options="{ nodeIndent: 14 }"
      @node:selected="onInstanceTreeSelection"
    ></liquor-tree>
    <div class="control mt-2" style="align-self:center">
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
