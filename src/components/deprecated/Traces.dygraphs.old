<template>
  <div class="dkcontainer mx-4 my-4" ref="container" style="height:100%">
    <div
      v-if="isSimulated"
      class="columns"
      style="overflow-y: auto;height:100%"
    >
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
        <div class="control is-centered is-small mb-4">
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

        <template v-for="g in filteredInstanceGates">
          <dygraph
            class="dygraphtrace"
            :key="g"
            :id="'dygraph' + getLocalId(g)"
            :data="tracedata(g)"
            :options="traceOptions(g)"
            @clicked="onClicked"
            @highlighted="onHighlighted"
            ref="traces"
          ></dygraph>
        </template>

        <dygraph
          :data="clock"
          id="dygraphclock"
          :options="{
            height: 50,
            xRangePad: 5,
            showRangeSelector: true,
            rangeSelectorHeight: 40,
            axes: { y: { axisLabelWidth: 5 } }
          }"
          ref="clock"
        ></dygraph>
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
        // this.resize(this.$refs.container.$el.clientWidth);
      });
    }
  },
  methods: {
    syncTraces() {
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
        legend: "always",
        labels: ["T", id],
        showRangeSelector: false,
        xRangePad: 5,
        gridLinePattern: [2, 2],
        axes: {
          x: {
            drawAxis: false,
            drawGrid: true
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
          [id]: { color: this.traceColor(id) }
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
    },
    resize(width) {
      const graphwidth = width - 40;
      const graphheight = 50;

      if (this.$refs.traces)
        this.$refs.traces.forEach(x => {
          x.resize(graphwidth, graphheight);
        });
      if (this.$refs.clock) this.$refs.clock.resize(graphwidth, graphheight);
    },
    onClicked(e) {
      this.$store.commit("setSelectedTime", e.x);
    },
    onHighlighted(e) {
      // console.log(e);
      this.$store.commit("setSelectedTime", e.x);
    }
  }
};
</script>

<style>
.dygraphtrace {
  margin-bottom: 20px;
}
</style>
