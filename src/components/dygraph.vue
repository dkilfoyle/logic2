<template>
  <div ref="container" class="my-dygraphs" />
</template>

<script>
// import Dygraph from "dygraphs";
// import Crosshair from "./crosshair.js";

import _DygraphRoot from "dygraphs";
window.Dygraph = _DygraphRoot;
require("dygraphs/src/extras/crosshair");

import "dygraphs/dist/dygraph.css";

export default {
  // adapted from dashblocks github.com/slanatech/dashblocks

  name: "dygraphs",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
    },
    _updated: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      graph: null,
      needUpdate: false,
      needOptionsUpdate: false,
      defaultOptions: {
        plugins: [new window.Dygraph.Plugins.Crosshair({ direction: "vertical" })],
        animatedZooms: true,
        showLabelsOnHighlight: false,
        zoomCallback: this.handleZoom,
        clickCallback: this.handleClick,
        fillGraph: true,
        fillAlpha: 0.2,
        stepPlot: true,
        showRangeSelector: true,
        rangeSelectorHeight: 20,
        axes: {
          x: {
            drawGrid: false,
          },
          y: {
            drawAxis: false,
          },
        },
      },
    };
  },
  computed: {
    // Augment passed options with defaults for Dygraphs
    graphOptions: {
      get() {
        // filter out proprietary options
        return Object.assign({}, this.defaultOptions, this.options); // todo: use lowdash merge for deep merge
      },
      set() {
        /*noop*/
      },
    },
  },
  mounted() {
    this.graph = new window.Dygraph(this.$refs.container, this.getData(), this.graphOptions);
    this.render();
    this.$emit("created", this.graph);
  },
  watch: {
    _updated: function() {
      console.log("_udpated prop changed");
      this.scheduleUpdate(false);
    },
    data: {
      handler() {
        console.log("data changed");
        this.scheduleUpdate(false);
      },
      deep: true,
    },
  },
  methods: {
    render() {
      // console.log("Rendering Dygraph ...");
    },
    getData() {
      // pre-process data if needed
      if (!Array.isArray(this.data)) {
        return this.data;
      }
      if (this.data.length <= 0) {
        return this.data;
      }
      if (Array.isArray(this.data[0])) {
        return this.data;
      }
      let idx = 0;
      return this.data.map((x) => [idx++, x]);
    },
    scheduleUpdate(optionsUpdate) {
      this.needUpdate = true;
      this.needOptionsUpdate = optionsUpdate;
      this.$nextTick(() => {
        this.update();
      });
    },
    update() {
      // Prevent multiple re-draws per single data update ( because there are redundant watches )
      if (!this.needUpdate) {
        return;
      }
      this.needUpdate = false;
      if (this.needOptionsUpdate) {
        this.graph.updateOptions(this.graphOptions);
        this.needOptionsUpdate = false;
      }
      this.graph.updateOptions({ file: this.getData() });
    },
    legendFormatter: function(data) {
      if (data.x == null) {
        // This happens when there's no selection and {legend: 'always'} is set.
        return (
          "" +
          data.series
            .map(function(series) {
              return series.dashHTML + " " + series.labelHTML;
            })
            .join(" ")
        );
      }
      let html = this.graph.getLabels()[0] + ": " + data.xHTML;
      data.series.forEach(function(series) {
        if (!series.isVisible) return;
        let labeledData = series.labelHTML + ": " + series.yHTML;
        if (series.isHighlighted) {
          labeledData = "<b>" + labeledData + "</b>";
        }
        html += "<br>" + series.dashHTML + " " + labeledData;
      });
      return html;
    },
    handleClick: function(e, x, points) {
      this.$emit("clicked", {
        x: x,
        points: points,
      });
    },
    handleZoom: function(minDate, maxDate, yRanges) {
      this.$emit("db-event", {
        type: "zoom",
        minDate: Math.floor(minDate),
        maxDate: Math.floor(maxDate),
        yRanges: yRanges,
      });
    },
  },
};
</script>
<style>
.my-dygraphs {
  width: 100%;
  height: 100px;
}
.dygraph-axis-label {
  font-size: 12px;
}
.dygraph-ylabel {
  font-size: 16px;
}
.dygraph-title {
  font-size: 16px;
  font-weight: normal;
  text-align: left;
}
</style>
