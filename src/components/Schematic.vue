/* eslint-disable no-debugger */ /* eslint-disable no-debugger */
<template>
  <div class="dk-flex-row dk-h-100 dk-align-center">
    <svg ref="svgSchematic" id="svgSchematic" />
  </div>
</template>

<script>
/* eslint-disable no-undef */
// the following are imported from local copies in public in index.html
// import * as d3 from "d3";
// import "elkjs/lib/elk.bundled.js";
// import "d3-hwschematic/dist/d3-hwschematic.js";
import "d3-hwschematic/dist/d3-hwschematic.css";

import UtilsMixin from "../mixins/utils";
import { mapGetters } from "vuex";

import SevenSegRenderer from "./renderers/sevenseg.js";
import NumberRenderer from "./renderers/number.js";
import BufferRenderer from "./renderers/buffer.js";
import ConcatRenderer from "./renderers/concat.js";
import LedBarRenderer from "./renderers/ledbar.js";
import LedRenderer from "./renderers/led.js";
import LedsRenderer from "./renderers/leds.js";
import WireGateRenderer from "./renderers/wiregate.js";
import RegGateRenderer from "./renderers/reggate.js";
import ConstantGateRenderer from "./renderers/constantgate.js";
import ArrayRenderer from "./renderers/array.js";
import Numeric from "../lib/Numeric";

import { updateTable } from "./renderers/array.js";
import { updateLeds } from "./renderers/leds.js";
import { updateNumber } from "./renderers/number.js";

// import workerInterface from "../lib/workerInterface.js";

class Tooltip {
  constructor(root, getTextFn) {
    var t = (this.tooltip = document.createElement("div"));
    t.className = "d3-hwschematic-tooltip";
    t.style.display = "none";
    t.style.position = "absolute";
    root.appendChild(t);
    this.getTextFn = getTextFn;
  }

  show(evt, text) {
    // todo: setSelectedNode in stroe
    // gates.vue - use selected node to show at top the inputs and output value of the selected node
    var t = this.tooltip;
    t.style.display = "block";
    t.innerHTML = this.getTextFn(text);
    t.style.left = evt.pageX + 10 + "px";
    t.style.top = evt.pageY + 10 + "px";
  }

  hide() {
    this.tooltip.style.display = "none";
  }
}

export default {
  // name: 'ComponentName',
  mixins: [UtilsMixin],

  data() {
    return {
      elkData: {
        id: "main",
        hwMeta: { name: "main", maxId: 200 },
        properties: {
          "org.eclipse.elk.portConstraints": "FIXED_ORDER",
          "org.eclipse.elk.layered.mergeEdges": 1
        },
        hideChildren: false,
        ports: null,
        children: [],
        edges: []
      },
      g: {},
      svg: null,
      tooltip: null,
      selectedGates: [],
      width: null,
      height: null
    };
  },
  computed: {
    ...mapGetters([
      "getAllInstances",
      "getAllGates",
      "getInstance",
      "getGate",
      "currentFile",
      "isCompiled",
      "isSimulated",
      "isCircuited",
      "getGatesStateAtSelectedTime"
    ]),
    compileStatus() {
      return this.isCompiled && this.currentFile.compileResult.timestamp;
    },
    circuitStatus() {
      return this.isCircuited && this.currentFile.circuitResult.timestamp;
    },
    simulateStatus() {
      return (
        this.isSimulated &&
        this.currentFile.simulateResult.timestamp + this.currentFile.selectedTime
      );
    }
  },
  watch: {
    // compileStatus(status) {
    //   console.log("Schematic compileStatusWatch ", status);
    //   if (status)
    //     workerInterface.send({
    //       command: "circuit"
    //     });
    // },
    circuitStatus(status) {
      if (status) {
        this.elkData = this.currentFile.circuitResult;
        this.draw();
      }
    },
    simulateStatus(status) {
      if (status) this.animateGates();
    }
  },
  mounted() {
    this.resize = this.debounce(this.resize, 1000);
    this.svg = window.d3
      .select("#svgSchematic")
      .attr("width", 100)
      .attr("height", 100);
    this.g = new window.d3.HwSchematic(this.svg);
    this.g.nodeRenderers.registerCustomRenderer(new SevenSegRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new NumberRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new BufferRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new ConcatRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new LedBarRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new LedRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new LedsRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new WireGateRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new RegGateRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new ArrayRenderer(this.g));
    this.g.nodeRenderers.registerCustomRenderer(new ConstantGateRenderer(this.g));

    var zoom = d3.zoom();
    zoom.on("zoom", this.onZoom);
    this.svg.call(zoom).on("dblclick.zoom", null);

    // replace d3hwschematic default tooltip
    this.g.tooltip = new Tooltip(document.getElementsByTagName("body")[0], this.getEdgeTooltip);

    this.tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "schematic-tooltip")
      .style("opacity", 0);
  },
  methods: {
    animateGates() {
      const timestate = this.getGatesStateAtSelectedTime;
      if (Object.keys(timestate).length === 0) return;

      var COLOR_ON = "#00c853";
      var COLOR_OFF = "white";

      Object.values(this.getAllGates).forEach(gate => {
        switch (gate.type) {
          case "leds":
            updateLeds(
              d3.select(`#svgSchematic .${gate.id}_internal`),
              timestate[gate.id],
              gate.bitSize,
              gate.meta
            );
            break;
          case "ledbar":
            d3.select("#svgSchematic #" + gate.id + "_gate_LEDBAR")
              .selectAll(".bar")
              .data(
                gate.inputs.length == 1
                  ? timestate[gate.inputs[0].id]
                      .toString(2)
                      .split("")
                      .map(x => +x)
                  : gate.inputs.map(input => timestate[input.id])
              )
              .attr("id", d => d)
              .attr("fill", d => (d ? COLOR_ON : COLOR_OFF));
            break;
          case "sevenseg":
            // TODO: refactor in a d3 centric way
            ["a", "b", "c", "d", "e", "f", "g"].forEach((letter, i) => {
              const element = document.getElementById(gate.id + "_gate_seg" + letter);
              if (element) {
                element.classList.remove("segment-0");
                element.classList.remove("segment-1");
                element.classList.add("segment-" + ((timestate[gate.id] >> i) % 2));
              }
            });
            break;
          case "number":
            updateNumber(d3.select(`#svgSchematic #${gate.id}_gate_NUMBER`), timestate[gate.id]);
            break;
          case "array":
            updateTable(
              `${gate.id}_internal`,
              timestate[gate.id].map((x, i) => [i, x])
            );
            break;
          case "reg":
            updateNumber(d3.select(`.${gate.id}_internal`), timestate[gate.id]);
            break;
          case "control":
          case "response":
            d3.select(`#svgSchematic .${gate.id}_external`).attr(
              "class",
              `node-external-port ${gate.id}_external external-${timestate[gate.id] == 0 ? 0 : 1}`
            );
            break;
        }
        if (gate.type == "splitter") {
          // animate splitter edges
          d3.selectAll(`#svgSchematic .${gate.id}_link`).attr("class", (d, i) => {
            let val = new Numeric(timestate[gate.id], 16)._getValue(
              gate.splitterSources[gate.splitterSources.length - 1 - i].offset
            );
            return `${gate.id}_link link-${val === 0 ? 0 : typeof val == "string" ? "x" : 1}`;
          });
        }
        // animate edges
        else
          d3.selectAll(`#svgSchematic .${gate.id}_link`).attr(
            "class",
            `${gate.id}_link link-${
              timestate[gate.id] === 0 ? 0 : typeof timestate[gate.id] == "string" ? "x" : 1
            }`
          );
      });
    },

    getEdgeTooltip(id) {
      // id will be in form of name or name[range] where range might be [a], [a:b]

      const hasRange = id.includes("[");
      const name = hasRange ? id.substr(0, id.indexOf("[")) : id;
      const range = hasRange
        ? id
            .substring(id.indexOf("[") + 1, id.indexOf("]"))
            .split(":")
            .map(x => +x)
        : null;
      let num;
      if (this.isSimulated) {
        const value = this.getGatesStateAtSelectedTime[name];
        const bitsize = this.getGate(name).state.bitArray.length;
        num = new Numeric(value, bitsize);
        // eslint-disable-next-line no-debugger
        // debugger;
      }
      if (hasRange && range.length == 1) range.push(range[0]);

      return id + (this.isSimulated ? " = " + num._getValue(range) : "");
    },
    onZoom(ev) {
      this.g.root.attr("transform", ev.transform);
    },
    onSelect() {
      console.log(this.g.root);
    },
    resize(width, height) {
      // console.log("Schematic onResize: ", width, height);
      let dx = Math.abs(width - 10 - (this.width || 0));
      let dy = Math.abs(height - 65 - (this.height || 0));

      if (dx > 2 || dy > 2) {
        // // stop resize if lumino has sent a fractional change in dimensions
        this.width = width - 10;
        this.height = height - 70;
        this.draw();
      }
    },
    makeGlowFilter(id, color) {
      const filter = this.g.defs
        .append("filter")
        .attr("id", id)
        .attr("x", "-5000%")
        .attr("y", "-5000%")
        .attr("width", "10000%")
        .attr("height", "10000%");
      filter
        .append("feFlood")
        .attr("flood-color", color)
        .attr("flood-opacity", "1")
        .attr("result", "flood");
      filter
        .append("feComposite")
        .attr("in", "flood")
        .attr("in2", "SourceGraphic")
        .attr("operator", "in")
        .attr("result", "mask");
      filter
        .append("feMorphology")
        .attr("in", "mask")
        .attr("radius", "0.5")
        .attr("operator", "dilate")
        .attr("result", "dilated");
      filter
        .append("feGaussianBlur")
        .attr("in", "dilated")
        .attr("stdDeviation", "2")
        .attr("result", "blurred");

      var feMerge = filter.append("feMerge");
      feMerge.append("feMergeNode").attr("in", "blurred");
      feMerge.append("feMergeNode").attr("in", "SourceGraphic");
    },

    draw() {
      // console.log(this.width, this.getAllGates, this.isCompiled);
      if (this.width == null || !this.getAllGates) return; // prevent building before properly sized
      if (!this.isCompiled) return;
      // console.log("Schematic buildNetList: ", this.width, this.height);

      this.svg.attr("width", this.width);
      this.svg.attr("height", this.height);

      this.makeGlowFilter("glow-blue", "rgb(0,186,255)"); //rgb(0,186,255)
      this.makeGlowFilter("glow-red", "#da5c5c");

      let that = this;

      this.g.bindData(this.elkData).then(() => {
        // add click handlers to all non-port gates
        // console.log("buildNetList bind data: ", this.elkData);
        Object.values(that.getAllInstances).forEach(instance =>
          instance.gate_ids.forEach(gateID => {
            const node = this.g.root.select(`.${gateID}_internal, .${gateID}_external`);
            node.on("mouseover", function(ev, d) {
              const id = d.id.substr(0, d.id.indexOf("_gate"));
              that.$store.commit("setSelectedGateID", id);
              node.style("filter", "url(#glow-red)");
              that.getGate(id).inputs.forEach(input => {
                that.g.root.select(`.${input.id}_internal`).style("filter", "url(#glow-blue)");
              });
            });
            node.on("mouseout", function(ev, d) {
              const id = d.id.substr(0, d.id.indexOf("_gate"));
              that.$store.commit("setSelectedGateID", null);
              node.style("filter", "none");
              that.getGate(id).inputs.forEach(input => {
                that.g.root.select(`.${input.id}_internal`).style("filter", "none");
              });
            });
          })
        );
      });
    }
  }
};
</script>

<style>
text {
  font-family: monospace;
}

tspan {
  white-space: pre;
}

body {
  margin: 0;
}

.schematic-tooltip {
  /* background: cornsilk; */
  background: cornsilk;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  display: block;
}

.sevenseg-segment {
  fill: #d1d3d4;
  stroke: #000000;
  stroke-width: 4;
  stroke-miterlimit: 10;
}

.segment-0 {
  fill: #e4e4e4;
}

.segment-1 {
  fill: rgb(55, 151, 10);
}

.d3-hwschematic {
  margin: 5px;
}
.node text {
  font-size: 8pt;
}

.port .wiregate text {
  font-size: 6px;
  stroke: none;
}

.port text {
  stroke: none;
}

.wiregaterect {
  fill: #e6ffff;
  stroke: darkgrey;
}

.arrayrect {
  fill: #e6ffff;
  stroke: darkgrey;
}

.arrayTable {
  font-size: 6px;
}

.arrayTable th {
  font-size: 6px;
}

.td0 {
  padding-right: 4px;
  text-align: right !important;
  border-right: 1px solid darkgrey;
  width: 30%;
}

.td1 {
  padding-right: 2px;
  text-align: right !important;
}

.d3-hwschematic .link-wrap {
  opacity: 0.4;
  stroke-width: 6;
}

.d3-hwschematic .node-external-port text {
  font-size: 8pt;
}

.d3-hwschematic .node-operator text {
  font-size: 8pt;
}
.d3-hwschematic .node {
  fill: #81d4fa2a;
}

.d3-hwschematic .node-number text {
  font-size: 12pt;
}

.link-0 {
  stroke: rgb(97, 194, 226) !important;
  stroke-opacity: 1;
  stroke-width: 3;
  fill: none;
  stroke-linejoin: bevel;
  stroke-linecap: unset;
}

.link-1 {
  stroke: rgb(237, 137, 137, 1) !important;
  stroke-opacity: 1;
  stroke-width: 3;
  fill: none;
  stroke-linejoin: bevel;
  stroke-linecap: unset;
}

.link-x {
  stroke: rgb(182, 176, 176) !important;
  stroke-opacity: 1;
  stroke-width: 3;
  fill: none;
  stroke-linejoin: bevel;
  stroke-linecap: unset;
}

.external-0 {
  fill: rgb(97, 194, 226) !important;
}

.external-1 {
  fill: rgb(237, 137, 137, 1) !important;
}

.d3-hwschematic-tooltip {
  font-size: 6pt;
}
/* .ledGlowOn {
  filter: url(#gaussian-blur-filter-0);
  fill-opacity: 0.66;
  mix-blend-mode: hard-light;
}
.ledGlowOff {
  fill-opacity: 0;
  stroke-opacity: 0;
}

.ledRedOn {
  fill-rule: evenodd;
  mix-blend-mode: darken;
  fill: url(#gradient-0);
}
.ledRedOff {
  fill: #911e15d1;
}

.led {
  stroke: rgb(0, 0, 0);
  stroke-width: 1;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-opacity: 1;
} */

.ledlabel {
  font-size: 6px;
  text-anchor: middle;
}
</style>
