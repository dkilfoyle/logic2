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

// const getLocalID = x => x.substr(x.lastIndexOf("_") + 1);

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
// import { barData } from "./renderers/number.js";
import Numeric from "../lib/Numeric";

import { updateTable } from "./renderers/array.js";
import { updateLeds } from "./renderers/leds.js";
import { updateNumber } from "./renderers/number.js";

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
      elkData: {},
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
      "getGatesStateAtSelectedTime"
    ]),
    compileStatus() {
      return this.isCompiled && this.currentFile.compileResult.timestamp;
    },
    simulateStatus() {
      return (
        this.isSimulated &&
        this.currentFile.simulateResult.timestamp +
          this.currentFile.selectedTime
      );
    }
  },
  watch: {
    compileStatus(status) {
      if (status) this.buildNetlist();
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
    this.g.nodeRenderers.registerCustomRenderer(
      new ConstantGateRenderer(this.g)
    );

    var zoom = d3.zoom();
    zoom.on("zoom", this.onZoom);
    this.svg.call(zoom).on("dblclick.zoom", null);

    // replace d3hwschematic default tooltip
    this.g.tooltip = new Tooltip(
      document.getElementsByTagName("body")[0],
      this.getEdgeTooltip
    );

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

      this.getAllGates.forEach(gate => {
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
              const element = document.getElementById(
                gate.id + "_gate_seg" + letter
              );
              if (element) {
                element.classList.remove("segment-0");
                element.classList.remove("segment-1");
                element.classList.add(
                  "segment-" + ((timestate[gate.id] >> i) % 2)
                );
              }
            });
            break;
          case "number":
            updateNumber(
              d3.select(`#svgSchematic #${gate.id}_gate_NUMBER`),
              timestate[gate.id]
            );
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
              `node-external-port ${gate.id}_external external-${
                timestate[gate.id] == 0 ? 0 : 1
              }`
            );
            break;
        }
        if (gate.type == "splitter") {
          // animate splitter edges
          d3.selectAll(`#svgSchematic .${gate.id}_link`).attr(
            "class",
            (d, i) => {
              let val = new Numeric(timestate[gate.id], 16)._getValue(
                gate.splitterSources[gate.splitterSources.length - 1 - i].offset
              );
              return `${gate.id}_link link-${
                val === 0 ? 0 : typeof val == "string" ? "x" : 1
              }`;
            }
          );
        }
        // animate edges
        else
          d3.selectAll(`#svgSchematic .${gate.id}_link`).attr(
            "class",
            `${gate.id}_link link-${
              timestate[gate.id] === 0
                ? 0
                : typeof timestate[gate.id] == "string"
                ? "x"
                : 1
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
        const bitsize = this.getGate(name).state.bitSize;
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
        this.buildNetlist();
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

    buildNetlist() {
      // console.log(this.width, this.getAllGates, this.isCompiled);
      if (this.width == null || !this.getAllGates) return; // prevent building before properly sized
      if (!this.isCompiled) return;
      // console.log("Schematic buildNetList: ", this.width, this.height);

      this.svg.attr("width", this.width);
      this.svg.attr("height", this.height);

      this.elkData = {
        id: "main",
        hwMeta: { name: "main", maxId: 200 },
        properties: {
          "org.eclipse.elk.portConstraints": "FIXED_ORDER",
          // "org.eclipse.elk.randomSeed": 0,
          "org.eclipse.elk.layered.mergeEdges": 1
        },
        hideChildren: false,
        ports: null,
        children: [],
        edges: []
      };

      // await here
      this.buildInstance(this.elkData);
      console.log("elkData: ", this.stripReactive(this.elkData));

      this.makeGlowFilter("glow-blue", "rgb(0,186,255)"); //rgb(0,186,255)
      this.makeGlowFilter("glow-red", "#da5c5c");

      let that = this;

      this.g.bindData(this.elkData).then(() => {
        // add click handlers to all non-port gates
        // console.log("buildNetList bind data: ", this.elkData);
        this.getAllInstances.forEach(instance =>
          instance.gates.forEach(gateID => {
            const node = this.g.root.select(
              `.${gateID}_internal, .${gateID}_external`
            );
            node.on("mouseover", function(ev, d) {
              const id = d.id.substr(0, d.id.indexOf("_gate"));
              that.$store.commit("setSelectedGateID", id);
              node.style("filter", "url(#glow-red)");
              that.getGate(id).inputs.forEach(input => {
                that.g.root
                  .select(`.${input.id}_internal`)
                  .style("filter", "url(#glow-blue)");
              });
            });
            node.on("mouseout", function(ev, d) {
              const id = d.id.substr(0, d.id.indexOf("_gate"));
              that.$store.commit("setSelectedGateID", null);
              node.style("filter", "none");
              that.getGate(id).inputs.forEach(input => {
                that.g.root
                  .select(`.${input.id}_internal`)
                  .style("filter", "none");
              });
            });
          })
        );
      });
    },
    async buildInstance(currentNet) {
      const currentInstance = this.getInstance(currentNet.id);
      // console.log(
      //   "Building ",
      //   currentInstance.id,
      //   this.stripReactive(currentInstance)
      // );

      // build gates of this instance and edges for each of the gates inputs
      // gate inputs might be another gate or an input port
      currentInstance.gates.forEach((gateId, gateCount) => {
        const gate = this.getGate(gateId);

        let metaVal;
        switch (gate.type) {
          case "array":
            metaVal = gate.arraySize;
            break;
          case "concatenation":
            metaVal = { copynum: gate.copynum, bitSize: gate.state.bitSize };
            break;
          default:
            metaVal = gate.getValue();
        }

        const gateNet = {
          id: gate.id + "_gate",
          hwMeta: {
            maxId: currentNet.hwMeta.maxId + 50 + gateCount,
            cls: "Operator",
            cssClass:
              gate.type == "control" || gate.type == "response"
                ? gate.id + "_external"
                : gate.id + "_internal",
            name:
              gate.type == "control" ||
              gate.type == "portbuffer" ||
              gate.type == "response"
                ? this.getLocalId(gate.id)
                : gate.getSchematicName(),
            val: metaVal, //currentInstance.parameters, currentInstance.id),
            bitSize: gate.bitSize, //currentInstance.parameters, currentInstance.id),
            meta: gate.meta,
            isExternalPort: gate.type == "control" || gate.type == "response"
          },
          properties: {
            "org.eclipse.elk.portConstraints": "FIXED_ORDER",
            // "org.eclipse.elk.randomSeed": 0,
            "org.eclipse.elk.layered.mergeEdges": 1
          },
          hideChildren: true,
          ports: []
        };

        // single output port unless response or splitter
        if (["response", "splitter"].includes(gate.type) == false) {
          // console.log("gate: ", gate);
          gateNet.ports.push({
            direction: "OUTPUT",
            id: gate.id,
            hwMeta: {
              name: this.getLocalId(gate.id)
            },
            properties: { side: "EAST", portIndex: 0 }
          });
        }

        const getInputPortDescription = (type, i) => {
          if (type == "mux" && i == 0) return { side: "SOUTH", portIndex: 0 };
          if ((type == "reg") | (gate.type == "array"))
            return { side: "NORTH", portIndex: i };
          if (type == "led") return { side: "SOUTH", portIndex: i };
          if (type == "splitter") return { side: "WEST", portIndex: 20 };
          if (type == "concatenation") return { side: "WEST", portIndex: 20 };
          return { side: "WEST", portIndex: i };
        };

        // build input ports for this gate and the edges that connect from source to each input
        gate.inputs.forEach((input, i) => {
          let inputGate = this.getGate(input.id);

          // let ports = null;
          // if (gate.type == "concatenation")
          //   ports = [...gateNet.ports].reverse();
          // else ports = gateNet.ports;

          gateNet.ports.push({
            direction: "INPUT",
            id: gate.id + "_input_" + i,
            hwMeta: {
              name: this.getLocalId(gate.id)
            },
            properties: getInputPortDescription(gate.type, i)
          });

          let inputSource, inputSourcePort;
          switch (inputGate.type) {
            case "portbuffer":
              inputSource = inputGate.namespace;
              inputSourcePort = input.id;
              break;
            case "splitter":
              inputSource = input.id + "_gate";
              inputSourcePort = input.id + "_splitPort_" + gate.name;
              break;
            default:
              inputSource = input.id + "_gate";
              inputSourcePort = input.id;
          }

          let gate2gate = {
            id: input.id + "-" + gate.id + "_input_" + i,
            type: "gate2gate",
            source: inputSource,
            sourcePort: inputSourcePort,
            target: gate.id + "_gate",
            targetPort: gate.id + "_input_" + i,
            // hwMeta: { name: null, cssClass: gate.id + "_link" }
            hwMeta: {
              name:
                input.id +
                input.getOffsetString(
                  this.currentFile.compileResult.parameters,
                  currentInstance.id
                ),
              cssClass: input.id + "_link"
            }
          };
          currentNet.edges.push(gate2gate);
          // console.log("-- g2g: ", gate2gate.id, this.stripReactive(gate2gate));
        });

        if (gate.type == "concatenation") {
          gateNet.ports.reverse();
        }

        // splitter gate has multiple output ports of form gateid_splitPort_targetid
        if (gate.type == "splitter") {
          gate.splitterTargets.forEach((output, i) => {
            gateNet.ports.push({
              direction: "OUTPUT",
              id: gate.id + "_splitPort_" + output.id,
              hwMeta: {
                name: this.getLocalId(gate.id)
              },
              properties: { side: "WEST", portIndex: i } // TODO: Why wrong height if side EAST
            });
          });
        }

        currentNet.children.push(gateNet);
        // console.log("-- Gate: ", gate.id, this.stripReactive(gateNet));
      });

      // build any sub-instances
      // build edges to connect currentNet mapped values to the sub-instance input ports
      currentInstance.instances.forEach(childInstanceID => {
        const childInstance = this.getInstance(childInstanceID);
        // console.log("-- childInstance: ", childInstanceID, childInstance);
        const childNet = {
          id: childInstanceID,
          hwMeta: {
            name: childInstanceID.slice(5), // remove the main_ from name
            maxID: currentNet.hwMeta.maxId + 100
          },
          properties: {
            // "org.eclipse.elk.portConstraints": "FREE"
            "org.eclipse.elk.portConstraints": "FIXED_ORDER",
            // "org.eclipse.elk.randomSeed": 0,
            "org.eclipse.elk.layered.mergeEdges": 1
          },
          hideChildren: false,
          ports: [],
          children: [],
          edges: []
        };

        childInstance.outputs.forEach(output => {
          // console.log(`---- Port Output: ${this.getLocalId(output)} = ${output}`);
          // eslint-disable-next-line no-debugger
          let port = {
            id: output, // output will be in form {this.getNamespace}_{port}-out
            hwMeta: { name: this.getLocalId(output).replace("-out", "") },
            direction: "OUTPUT",
            properties: { side: "EAST", portIndex: 0 }
          };
          childNet.ports.push(port);

          // get the portbuffer gate for the output gate = output-out
          const portGate = this.getGate(output);

          let gate2output = {
            id: output + "_" + portGate.inputs[0].id,
            type: "gate2output",
            source: portGate.inputs[0].id + "_gate",
            sourcePort: portGate.inputs[0].id,
            target: this.getNamespace(output),
            targetPort: output,
            hwMeta: {
              name:
                portGate.inputs[0].id +
                portGate.inputs[0].getOffsetString(
                  this.currentFile.compileResult.parameters,
                  currentInstance.id
                ),
              cssClass: portGate.inputs[0].id + "_link"
            }
          };
          childNet.edges.push(gate2output);
          // console.log("gate2output: ", gate2output.id, gate2output);
        });

        // Build ports for childinstance and connect to currentinstance gates
        childInstance.inputs.forEach((input, i) => {
          // console.log(`---- Port Input: ${this.getLocalId(input)} = ${input}`);
          let port = {
            id: input,
            hwMeta: { name: this.getLocalId(input), level: 0 },
            direction: "INPUT",
            properties: { side: "WEST", portIndex: i + 1 }
          };
          childNet.ports.push(port);

          // get the buffer gate for this port
          const portGate = this.getGate(input);
          const parent2input = {
            id: portGate.inputs[0].id + "-" + input,
            type: "parent2input",
            hwMeta: {
              name:
                portGate.inputs[0].id +
                portGate.inputs[0].getOffsetString(
                  this.currentFile.compileResult.parameters,
                  currentInstance.id
                ),
              cssClass: portGate.inputs[0].id + "_link"
            },
            source: currentInstance.inputs.includes(portGate.inputs[0].id) // is the input to the port gate itself a port of the parent instance rather than a local gate
              ? currentInstance.id
              : portGate.inputs[0].id + "_gate", // TODO: source might be a gate or a port - ie a pass through, is this handled??
            sourcePort: portGate.inputs[0].id,
            target: this.getNamespace(input),
            targetPort: input
          };
          currentNet.edges.push(parent2input);
          // console.log("parent2input: ", parent2input.id, parent2input);
        });

        this.buildInstance(childNet); // add any child instances of this child
        currentNet.children.push(childNet);
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
