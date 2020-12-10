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

      let time = this.$store.getters.currentFile.simulateResult.time;
      let clock = this.$store.getters.currentFile.simulateResult.clock;
      let gates = this.filteredInstanceGates.map(id => ({
        id,
        values: this.$store.getters.currentFile.simulateResult.gates[id]
      }));

      if (!gates.length) return;

      const d3 = window.d3;
      const svgHeight = this.height;

      const dims = {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10,
        pad: 20,
        n: gates.length + 1, // +1 for clock
        maxHeight: 50
      };

      dims.height = Math.min(
        (svgHeight - dims.top - dims.bottom - dims.n * dims.pad) / dims.n,
        dims.maxHeight
      );
      dims.width = this.width - dims.left - dims.right;
      const top = i => dims.top + i * (dims.height + dims.pad);

      var y = d3
        .scaleLinear()
        .domain([0, 1])
        .range([dims.height, 0]);

      var x = d3
        .scaleLinear()
        .domain(d3.extent(time))
        .range([0, dims.width])
        .nice();

      var brush = d3
        .brushX()
        .extent([
          [0, 0],
          [dims.width, dims.height]
        ])
        .on("brush", brushed);

      const makeGridlines = x => d3.axisBottom(x).ticks(time.length + 1);
      this.svg
        .append("g")
        .attr("class", "grid")
        .attr(
          "transform",
          `translate(${dims.left}, ${top(dims.n - 2) + dims.height})`
        )
        .call(
          makeGridlines(x)
            .tickSize(-1000) // traceHeight * gates.length - )
            .tickFormat("")
        );

      var area = (x, y) =>
        d3
          .area()
          .x((d, i) => x(i))
          .y0(dims.height)
          .y1(d => y(d))
          .curve(d3.curveStepAfter);

      var line = (x, y) =>
        d3
          .line()
          .x((d, i) => x(i))
          .y(d => y(d))
          .curve(d3.curveStepAfter);

      let that = this;
      let focus = this.svg
        .selectAll(".trace")
        .data(gates)
        .enter()
        .append("g")
        .attr("transform", (d, i) => `translate(${dims.left}, ${top(i)})`)
        .each(function(p, i) {
          var cur = d3.select(this);

          cur
            .append("path")
            .attr("class", "area")
            .attr("fill", that.traceColor(p.id, true))
            .datum(p.values)
            .attr("d", area(x, y));

          cur
            .append("path")
            .attr("class", "line")
            .attr("stroke", that.traceColor(p.id, false))
            .datum(p.values)
            .attr("d", line(x, y));

          if (i == gates.length - 1) {
            cur
              .append("g")
              .attr("class", "axisx")
              .attr("transform", "translate(0," + dims.height + ")")
              .call(d3.axisBottom(x));
          }
        });

      var context = this.svg
        .append("g")
        .attr("class", "context")
        .attr(
          "transform",
          `translate(${dims.left},${top(dims.n - 1) + dims.pad})`
        );

      context
        .append("path")
        .datum(clock)
        .attr("class", "area2")
        .attr("fill", that.traceColor("clock", true))
        .attr("d", area(x, y));

      context
        .append("path")
        .attr("class", "line2")
        .attr("stroke", that.traceColor("clock", false))
        .datum(clock)
        .attr("d", line(x, y));

      context
        .append("g")
        .attr("class", "axisx2")
        .attr("transform", `translate(0,${dims.height})`)
        .call(d3.axisBottom(x));

      context
        .append("g")
        .attr("class", "brush")
        .call(brush)
        .call(brush.move, x.range());

      function brushed({ selection }) {
        var focusX = x.copy().domain(selection.map(x.invert, x));
        var focusY = y.copy().domain([0, 1]);

        focus.selectAll(".area").attr("d", area(focusX, focusY));
        focus.selectAll(".line").attr("d", line(focusX, focusY));
        focus.select(".axisx").call(d3.axisBottom(focusX));
        that.svg.select(".grid").call(
          makeGridlines(focusX)
            .tickSize(-1000) // traceHeight * gates.length - )
            .tickFormat("")
        );
      }
    },

    traceColor: function(id, outline = true) {
      if (id == "clock") return outline ? "#e4e5e7" : "#c9cbcf";
      if (this.isOutput(this.$store.state.selectedInstanceID, id))
        return outline ? "#ffb1c188" : "#ff6384";
      if (this.isInput(this.$store.state.selectedInstanceID, id)) {
        return outline ? "#9ad0f588" : "#36a2eb";
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
.line2 {
  fill: none;
  stroke-width: 1.4;
}

.point {
  fill: none;
}

.grid line {
  stroke: lightgrey;
  stroke-opacity: 0.7;
  shape-rendering: crispEdges;
}

.grid path {
  stroke-width: 0;
}

.zoom {
  cursor: move;
  fill: none;
  pointer-events: all;
}
</style>
