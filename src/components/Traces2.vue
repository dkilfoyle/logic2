<template>
  <div class="dkcontainer mx-4 my-4" ref="container" style="height:100%">
    <div class="columns">
      <div class="column">
        <div class="traces" id="mytraces" ref="traces"></div>
      </div>
    </div>
    <div id="clock" ref="clock"></div>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import { mapGetters } from "vuex";

export default {
  mixins: [UtilsMixin, SelectionsMixin],
  components: {},
  data() {
    return { showWhichGates: "all", svg: null };
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
    filteredInstanceGates: function(gates) {
      if (!this.$store.getters.isSimulated) return;
      this.$nextTick(() => {
        console.log("filteredInstanceGates watcher: ", gates);
        this.drawTraces();
      });
    }
  },
  mounted() {
    this.svg = window.d3
      .select("#mytraces")
      .append("svg")
      .attr("height", "100%") //this.height)
      .attr("width", "100%"); //this.width);
    console.log("mounted: ", this.svg);
  },
  methods: {
    drawTraces() {
      if (!this.$store.getters.isSimulated) return;

      // let time = this.$store.getters.currentFile.simulateResult.time;
      let gates = this.filteredInstanceGates.map(id => ({
        id,
        values: this.$store.getters.currentFile.simulateResult.gates[id]
      }));

      if (!gates.length) return;
      const d3 = window.d3;

      // this.svg
      //   .append("g")
      //   .attr("transform", `translate(0, ${this.height - 20})`)
      //   .call(d3.axisBottom(scaleX).ticks(5));

      const tracePad = 20;
      const marginY = 20;

      const traceHeight = Math.min(
        (this.height - marginY * 2) / gates.length -
          (gates.length - 1) * tracePad,
        50
      );

      const top = i => marginY + i * (traceHeight + tracePad);

      var y = d3
        .scaleLinear()
        .domain([0, 1])
        .range([traceHeight, 0]);

      var x = d3
        .scaleLinear()
        .domain(d3.extent(this.$store.getters.currentFile.simulateResult.time))
        .range([0, this.width])
        .nice();

      let that = this;
      this.svg
        .selectAll(".trace")
        .data(gates)
        .enter()
        .append("g")
        .attr("transform", (d, i) => `translate(0, ${top(i)})`)
        .each(function(p) {
          var cur = d3.select(this);

          console.log(p);

          var area = d3
            .area()
            .x((d, i) => x(i))
            .y0(traceHeight)
            .y1(d => y(d))
            .curve(d3.curveStepAfter);

          var line = d3
            .line()
            .x((d, i) => x(i))
            .y(d => y(d))
            .curve(d3.curveStepAfter);

          cur
            .append("path")
            .attr("class", "area")
            .attr("fill", that.traceColor(p.id, true))
            .attr("d", area(p.values));

          cur
            .append("path")
            .attr("class", "line")
            .attr("stroke", that.traceColor(p.id, false))
            .attr("d", line(p.values));

          // cur
          //   .selectAll(".points")
          //   .data(p.values)
          //   .enter()
          //   .append("circle")
          //   .attr("cx", (d, i) => x(time[i]))
          //   .attr("cy", d => y(d))
          //   .attr("r", 2);
        });

      // graph
      //   .append("path")
      //   .attr("fill", d => this.traceColor(d.id))
      //   .datum(d => d.values)
      //   .attr("d", area);

      // graph
      //   .append("path")
      //   .attr("stroke", d => this.traceColor(d.id))
      //   .attr("stroke-width", 1.5)
      //   .datum(d => d.values)
      //   .attr("d", d => {
      //     console.log("path: ", d);
      //     return line(d);
      //   });

      // graph.selectAll(".points").each(d => {
      //   console.log("points each: ", d);
      // });

      // .attr("stroke", d => this.traceColor(d.id))
      // .data(d => d.values)
      // .enter()
      // .append("circle")
      // .attr("cx", (d, i) => scaleX(time[i]))
      // .attr("cy", d => scaleY(d))
      // .attr("r", 4);

      // graph.call(d3.axisLeft(scaleY).ticks(5));
    },

    traceColor: function(id, outline = true) {
      if (this.isOutput(this.$store.state.selectedInstanceID, id))
        return "rgb(255,99,132)";
      if (this.isInput(this.$store.state.selectedInstanceID, id)) {
        return outline ? "lightsteelblue" : "steelblue";
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
    resize(width, height) {
      console.log("Traces2 resize: ", width, height);
      this.width = width * 0.9;
      this.height = height * 0.9;
      this.svg.attr("width", this.width);
      this.svg.attr("height", this.height);
      this.drawTraces();
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
.line {
  fill: none;
  stroke-width: 1.4;
}
.point {
  fill: none;
}
</style>
