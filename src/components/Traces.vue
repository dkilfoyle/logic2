<template>
  <div ref="container" style="height:100%">
    <div class="rows" v-show="isSimulated">
      <instance-crumbs @show-outline="$emit('show-outline')"></instance-crumbs>
      <div class="row">
        <div class="traces" id="mytraces" ref="traces"></div>
      </div>
    </div>
    <div
      class="rows"
      style="align-items:center; justify-content:center; height:100%"
      v-show="!isSimulated"
    >
      <div class="row"><h4>Simulate to show traces</h4></div>
    </div>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import { mapGetters } from "vuex";
import InstanceCrumbs from "./InstanceCrumbs";

const d3 = window.d3;

export default {
  mixins: [UtilsMixin, SelectionsMixin],
  components: { InstanceCrumbs },
  data() {
    return {
      showWhichGates: "all",
      svg: null,
      chart: null,
      grid: null,
      margins: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        pad: 20
      },
      maxTraceHeight: 50
    };
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
        // console.log("filteredInstanceGates watcher: ", gates);
        this.drawTraces();
      });
    }
  },
  mounted() {
    this.svg = d3.select("#mytraces").append("svg");

    this.svg
      .append("defs")
      .append("clipPath")
      .attr("id", "clip")
      .append("rect");

    const chart = this.svg
      .append("g")
      .attr("class", "chart")
      .attr(
        "transform",
        `translate(${this.margins.left}, ${this.margins.top})`
      );

    chart
      .append("g")
      .attr("class", "grid")
      .style("stroke-dasharray", "3, 3");

    chart.append("g").attr("class", "focus");
    chart.append("g").attr("class", "context");
    // context.append("g").attr("class", "trace");
    // context.append("g").attr("class", "brush");

    const crosshair = chart.append("g").attr("class", "crosshair");
    crosshair
      .append("g")
      .attr("class", "line")
      .append("line")
      .attr("id", "crosshairX")
      .attr("class", "crosshairX");
    crosshair.append("rect").attr("class", "overlay");
  },
  methods: {
    drawTraces() {
      if (!this.$store.getters.isSimulated) return;

      let time = this.$store.getters.currentFile.simulateResult.time;
      let clock = {
        id: "clock",
        values: this.$store.getters.currentFile.simulateResult.clock,
        options: { xAxis: true }
      };
      let gates = this.filteredInstanceGates.map(id => ({
        id,
        values: this.$store.getters.currentFile.simulateResult.gates[id],
        options: { xAxis: false }
      }));
      gates[gates.length - 1].options.xAxis = true;

      if (!gates.length) return;

      const chartHeight = this.height - this.margins.top - this.margins.bottom;
      const chartWidth = this.width - this.margins.left - this.margins.right;
      const traceN = this.filteredInstanceGates.length + 1; // + 1 for clock
      const traceHeight = Math.min(
        chartHeight - (traceN * this.margins.pad) / traceN,
        this.maxTraceHeight
      );
      const traceTop = i => i * (traceHeight + this.margins.pad);

      let that = this;

      var y = d3
        .scaleLinear()
        .domain([0, 1])
        .range([traceHeight, 2]); // dont draw up to y=0 to avoid line width clipping

      var x = d3
        .scaleLinear()
        .domain(d3.extent(time))
        .range([0, chartWidth])
        .nice();

      var area = (x, y) =>
        d3
          .area()
          .x((d, i) => x(i))
          .y0(traceHeight)
          .y1(d => y(d))
          .curve(d3.curveStepAfter);

      var line = (x, y) =>
        d3
          .line()
          .x((d, i) => x(i))
          .y(d => y(d))
          .curve(d3.curveStepAfter);

      function enterFilledPlot() {
        d3.select(this)
          .append("path")
          .attr("class", "area");
        d3.select(this)
          .append("path")
          .attr("class", "line");
        d3.select(this)
          .append("text")
          .attr("class", "label")
          .attr("x", 10);
      }

      function positionFocusFilledPlot(d, i) {
        d3.select(this)
          .transition()
          .duration(1000)
          .attr("transform", `translate(0, ${traceTop(i)})`);
      }

      function updateFilledPlot(d) {
        d3.select(this)
          .select(".axisx")
          .remove();
        d3.select(this)
          .select(".area")
          .attr("fill", d => that.traceColor(d.id, true))
          .datum(d => d.values)
          .attr("d", area(x, y));
        d3.select(this)
          .select(".line")
          .attr("stroke", d => that.traceColor(d.id, false))
          .datum(d => d.values)
          .attr("d", line(x, y));
        d3.select(this)
          .select(".label")
          .attr("y", traceHeight / 2)
          .text(d => that.getLocalId(d.id));
        if (d.options.xAxis)
          d3.select(this)
            .append("g")
            .attr("class", "axisx")
            .attr("transform", "translate(0," + traceHeight + ")")
            .call(d3.axisBottom(x));
      }

      const makeGridlines = x =>
        d3
          .axisBottom(x)
          .ticks(time.length + 1)
          .tickSize(-traceTop(traceN - 1) + 5)
          .tickFormat("");

      function updateGrid() {
        d3.select(".grid")
          .attr(
            "transform",
            `translate(0, ${traceTop(traceN - 2) + traceHeight})`
          )
          .call(makeGridlines(x));
      }

      function updateClip() {
        d3.select("#clip rect")
          .attr("width", that.width - that.margins.left - that.margins.right)
          .attr("height", that.height - that.margins.top - that.margins.bottom);
      }

      function updateFocus(data) {
        let focus = d3
          .select(".focus")
          .selectAll(".trace")
          .data(data);

        focus
          .exit()
          .transition()
          .duration(1000)
          .style("opacity", 0)
          .remove();
        focus
          .enter()
          .append("g")
          .attr("class", "trace")

          .each(enterFilledPlot)
          .merge(focus)
          .each(positionFocusFilledPlot)
          .each(updateFilledPlot);
      }

      var brush = d3
        .brushX()
        .extent([
          [0, traceHeight],
          [chartWidth, traceHeight + 25]
        ])
        .on("brush", brushed);

      function brushed({ selection }) {
        var focusX = x.copy().domain(selection.map(x.invert, x));
        var focusY = y.copy().domain([0, 1]);

        d3.selectAll(".focus .trace .area").attr("d", area(focusX, focusY));
        d3.selectAll(".focus .trace .line").attr("d", line(focusX, focusY));
        d3.select(".focus .axisx").call(d3.axisBottom(focusX));
        d3.select(".grid").call(makeGridlines(focusX));
      }

      function updateContext(data) {
        var context = d3
          .select(".context")
          .selectAll(".trace")
          .data(data);

        context.exit().remove();
        context
          .enter()
          .append("g")
          .attr("class", "trace")
          .each(enterFilledPlot)
          .merge(context)
          .each(updateFilledPlot);

        var brush2 = d3
          .select(".context")
          .selectAll(".brush")
          .data(data);

        brush2
          .enter()
          .append("g")
          .attr("class", "brush")
          .merge(brush2)
          .call(brush)
          .call(brush.move, x.range());

        d3.select(".context")
          .transition()
          .duration(1000)
          .attr(
            "transform",
            `translate(0, ${traceTop(traceN - 1) + that.margins.pad})`
          );
      }

      function updateCrosshair() {
        d3.select(".crosshair")
          .select(".overlay")
          .attr("width", chartWidth)
          .attr("height", traceTop(traceN - 1))
          .on("mouseover", function() {
            d3.select(".crosshair")
              .select(".line")
              .style("display", null);
          })
          .on("mouseout", function() {
            d3.select(".crosshair")
              .select(".line")
              .style("display", "none");
          })
          .on("mousemove", function(event) {
            var mouse = d3.pointer(event);
            d3.select(".crosshair")
              .select("#crosshairX")
              .attr("x1", mouse[0])
              .attr("y1", 0)
              .attr("x2", mouse[0])
              .attr("y2", traceTop(traceN - 1));

            console.log();

            that.$store.commit(
              "setSelectedTime",
              Math.max(0, Math.floor(x.invert(mouse[0])))
            );
          })
          .on("click", function() {
            console.log(d3.mouse(this));
          });
      }

      updateClip();
      updateGrid();
      updateFocus(gates);
      updateContext([clock]);
      updateCrosshair();
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
    onBreadcrumbEllipsis() {},
    selectBreadcrumb(node) {
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
      // const container = d3.select(this.svg.node().parentNode);
      // this.width = container.style("width");
      // this.height = container.style("height");
      this.width = width;
      this.height = height - 60;
      this.svg.attr("width", this.width);
      this.svg.attr("height", this.height);
      this.drawTraces();
    }
  }
};
</script>

<style>
.line {
  fill: none;
  stroke-width: 1.4;
  clip-path: url(#clip);
}

.area {
  clip-path: url(#clip);
}

.grid line {
  stroke: lightgrey;
  stroke-opacity: 0.7;
  shape-rendering: crispEdges;
}

.grid path {
  stroke-width: 0;
}

.line #crosshairX {
  stroke: red;
  fill: none;
  stroke-width: 1px;
}

.overlay {
  fill: none;
  stroke: #00000000;
  pointer-events: all;
}
</style>
