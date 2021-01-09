<template>
  <div class="dk-flex-col dk-pa-10 dk-gap-10">
    <h4>GLOBAL</h4>
    <b-field label="Evals per Step">
      <b-input v-model="evalsPerStep" size="is-small"></b-input>
    </b-field>
    <b-field label="Trace Height">
      <b-slider v-model="traceHeight" size="is-small"></b-slider>
    </b-field>
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
    },
    evalsPerStep: {
      get() {
        return this.$store.state.evals_per_step;
      },
      set(value) {
        this.$store.commit("setEvalsPerStep", parseInt(value, 10));
      }
    },
    traceHeight: {
      get() {
        return this.$store.state.traceHeight;
      },
      set(value) {
        this.$store.commit("setTraceHeight", parseInt(value, 10));
      }
    }
  },
  methods: {}
};
</script>

<style>
.label {
  font-size: 13px !important;
}
</style>
