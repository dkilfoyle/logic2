<template>
  <div class="dkcontainer">
    <div v-if="isSimulated" class="columns">
      <div class="column">
        <nav class="breadcrumb is-centered">
          <ul>
            <li
              v-for="node in $store.state.selectedInstanceID.split('_')"
              :key="node"
            >
              <a @click="selectBreadcumb(node)">{{ node }}</a>
            </li>
          </ul>
        </nav>
        <div class="control is-centered is-small">
          <b-radio
            v-model="showWhichGates"
            name="showWhichGates"
            native-value="all"
            size="is-small"
            >All</b-radio
          >
          <b-radio
            v-model="showWhichGates"
            name="showWhichGates"
            native-value="inputs"
            size="is-small"
            >Inputs</b-radio
          >
          <b-radio
            v-model="showWhichGates"
            name="showWhichGates"
            native-value="outputs"
            size="is-small"
            >Outputs</b-radio
          >
        </div>

        <div class="columns mt-1" v-for="g in filteredInstanceGates" :key="g">
          <div class="column is-1">
            <div class="text-caption">{{ getLocalId(g) }}</div>
          </div>
          <div class="column">
            <dygraph
              :data="tracedata(g)"
              :options="traceOptions(g)"
              ref="traces"
            ></dygraph>
          </div>
        </div>
        <div class="columns">
          <div class="column is-1">
            <div class="text-caption">Clock</div>
          </div>
          <div class="column">
            <dygraph
              :data="clock"
              :options="{
                showRangeSelector: true,
                rangeSelectorHeight: 80,
                axes: { y: { axisLabelWidth: 5 } }
              }"
              ref="clock"
            ></dygraph>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!isSimulated"><h5>Run Simulation First</h5></div>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import { mapGetters } from "vuex";

import dygraph from "./dygraph";
import _DygraphRoot from "dygraphs";
window.Dygraph = _DygraphRoot;
require("dygraphs/src/extras/synchronizer");

export default {
  mixins: [UtilsMixin, SelectionsMixin],
  components: { dygraph },
  data() {
    return { showWhichGates: "all" };
  },
  computed: {
    ...mapGetters(["isInput", "isOutput", "isSimulated"]),
    clock: function() {
      if (!this.isSimulated) return [0];
      return this.$store.getters.currentFile.simulateResult.clock.map(
        (x, i) => [i, x]
      );
    }
  },
  watch: {
    filteredInstanceGates: function() {
      if (!this.$store.getters.isSimulated) return;
      this.$nextTick(() => {
        this.syncTraces();
      });
    }
  },
  methods: {
    syncTraces() {
      console.log("synTRraces");
      console.log(this.$refs.traces);
      if (this.$refs.traces.length == 0) return;
      let traces = this.$refs.traces.map(x => x.graph);
      traces.push(this.$refs.clock.graph);
      window.Dygraph.synchronize(traces);
    },
    tracedata: function(id) {
      let data = [];
      for (
        let i = 0;
        i < this.$store.getters.currentFile.simulateResult.time.length;
        i++
      ) {
        data.push([
          this.$store.getters.currentFile.simulateResult.time[i],
          this.$store.getters.currentFile.simulateResult.gates[id][i]
        ]);
      }
      return data;
    },
    traceOptions: function(id) {
      return {
        height: 50,
        showRangeSelector: false,
        xRangePad: 5,
        axes: {
          x: {
            drawAxis: false,
            drawGrid: false
            // axisLabelWidth: 0,
            // axisLabelFontSize: 0,
          },
          y: {
            drawAxis: true,
            drawGrid: false,
            axisLabelWidth: 5,
            axisLineColor: "white",
            axisLabelFormatter: () => {
              return null;
            }
          }
        },
        series: {
          Y1: { color: this.traceColor(id) }
        }
      };
    },
    traceColor: function(id) {
      if (this.isOutput(this.$store.state.selectedInstanceID, id))
        return "rgb(255,99,132)";
      if (this.isInput(this.$store.state.selectedInstanceID, id)) {
        return "steelblue";
      }

      return "darkgrey";
    },
    selectBreadcumb(node) {
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
  },
  mounted() {
    // this.syncTraces();
  }
};
</script>

<style></style>
