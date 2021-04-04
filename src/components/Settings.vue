<template>
  <div class="dk-flex-col dk-pa-10 dk-gap-5">
    <div class="dk-heading">GLOBAL</div>

    <div class="dk-label">Evals per Step</div>
    <div class="dk-flex-col dk-gap-8 dk-pl-5">
      <b-input v-model="evalsPerStep" size="is-small"></b-input>
    </div>

    <div class="dk-label">Trace Height</div>
    <div class="dk-flex-col dk-gap-8 dk-pl-5">
      <b-slider v-model="traceHeight" size="is-small"></b-slider>
    </div>

    <div class="dk-label">Memory Dump</div>
    <div class="dk-flex-col dk-gap-8 dk-pl-5">
      <b-checkbox v-model="memoryDumpHideZeros">Hide 0s</b-checkbox>
      <b-checkbox v-model="memoryDumpCompact">Compact Display</b-checkbox>
    </div>

    <div class="dk-label">Schematic</div>
    <div class="dk-flex-col dk-gap-8 dk-pl-5">
      <b-checkbox v-model="tableFollowsSchematic">Hover Select</b-checkbox>
    </div>

    <div class="dk-heading dk-pt-10">CURRENT FILE</div>

    <div class="dk-label">Options</div>
    <div class="dk-flex-col dk-gap-8 dk-pl-5">
      <b-checkbox v-model="autoCompile">Auto Compile</b-checkbox>
    </div>

    <div class="dk-label">Gate Filter</div>
    <div class="dk-flex-col dk-gap-8 dk-pl-5">
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
    <div class="dk-label">State Format</div>
    <div class="dk-flex-col dk-gap-8 dk-pl-5">
      <b-radio v-model="stateFormat" name="stateFormat" native-value="logic"
        >Logic</b-radio
      >
      <b-radio v-model="stateFormat" name="stateFormat" native-value="decimal"
        >Decimal</b-radio
      >
      <b-radio v-model="stateFormat" name="stateFormat" native-value="binary"
        >Binary</b-radio
      >
    </div>
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
    tableFollowsSchematic: {
      get() {
        return this.$store.state.tableFollowsSchematic;
      },
      set(value) {
        this.$store.commit("setTableFollowsSchematic", value);
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
    },
    memoryDumpHideZeros: {
      get() {
        return this.$store.state.memoryDumpHideZeros;
      },
      set(value) {
        this.$store.commit("memoryDumpHideZeros", value);
      }
    },
    memoryDumpCompact: {
      get() {
        return this.$store.state.memoryDumpCompact;
      },
      set(value) {
        this.$store.commit("memoryDumpCompact", value);
      }
    },
    showWhichGates: {
      get() {
        return this.$store.state.showWhichGates;
      },
      set(value) {
        this.$store.commit("setShowWhichGates", value);
      }
    },
    stateFormat: {
      get() {
        return this.$store.state.stateFormat;
      },
      set(value) {
        this.$store.commit("setStateFormat", value);
      }
    }
  },
  methods: {}
};
</script>

<style>
.label {
  font-size: 13px !important;
  font-weight: 500;
}
.dk-label {
  font-size: 13px !important;
  font-weight: 500;
  margin-top: 10px;
}
.dk-heading {
  border-bottom: 1px solid darkgray;
  padding-bottom: 5px;
}
</style>
