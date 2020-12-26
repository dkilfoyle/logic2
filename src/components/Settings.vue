<template>
  <div class="dk-flex-col dk-pad-10 dk-gap-10">
    <h4>GLOBAL</h4>
    <h4>CURRENT FILE</h4>
    <b-checkbox v-model="autoCompile">Auto Compile</b-checkbox>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import "buefy/dist/buefy.css";

// import { mapGetters } from "vuex";

export default {
  mixins: [UtilsMixin, SelectionsMixin],
  computed: {
    autoCompile: {
      get() {
        return this.$store.getters.currentFile.autoCompile;
      },
      set(value) {
        this.$store.commit("toggleAutoCompile", value);
      }
    }
  },
  methods: {}
};
</script>

<style scoped></style>
