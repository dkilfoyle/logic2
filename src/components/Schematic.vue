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
import LedBarRenderer from "./renderers/ledbar.js";
import { barData } from "./renderers/number.js";

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
  watch: {
    compileStatus(status) {
      // console.log("compileStatus watcher: ", status);
      if (status) this.buildNetlist();
    },
    getGatesStateAtSelectedTime(timestate) {
      if (Object.keys(timestate).length === 0) return;

      var COLOR_ON = "#00c853";
      var COLOR_OFF = "white";

      this.getAllGates
        .filter(gate => gate.type == "ledbar")
        .forEach(gate => {
          d3.select("#svgSchematic #" + gate.id + "_gate_LEDBAR")
            .selectAll(".bar")
            .data(gate.inputs.map(input => timestate[input]))
            .attr("id", d => d)
            .attr("fill", d => (d ? COLOR_ON : COLOR_OFF));
        });

      this.getAllGates
        .filter(gate => gate.type == "sevenseg")
        .forEach(gate => {
          let inputValues = gate.inputs.map(x => timestate[x]);
          ["a", "b", "c", "d", "e", "f", "g"].forEach((letter, i) => {
            const element = document.getElementById(
              gate.id + "_gate_seg" + letter
            );
            if (element) {
              element.classList.remove("segment-0");
              element.classList.remove("segment-1");
              element.classList.add("segment-" + inputValues[i]);
            }
          });
        });

      COLOR_ON = "#70fbfd";
      COLOR_OFF = "#181917";

      this.getAllGates
        .filter(gate => gate.type == "number")
        .forEach(gate => {
          let id = gate.id + "_gate_NUMBER";
          // let element = document.querySelector("#svgSchematic #" + id);
          // if (element) element.textContent = timestate[gate.id];
          d3.select("#svgSchematic #" + id)
            .selectAll(".digit")
            .data(
              timestate[gate.id]
                .toString()
                .padStart(3, "0")
                .split("")
                .map(x => parseInt(x))
            )
            .selectAll(".bar")
            .data(d => barData(d))
            .attr("fill", d => (d.on ? COLOR_ON : COLOR_OFF));
        });

      // animate the links, controls, and responses
      for (const [gateid, gatevalue] of Object.entries(
        this.getGatesStateAtSelectedTime
      )) {
        const querystr = "#svgSchematic ." + gateid + "_link";
        const elements = document.querySelectorAll(querystr);
        elements.forEach(element =>
          element.setAttribute("class", `${gateid}_link link-${gatevalue}`)
        );
        let gate = this.getGate(gateid);
        if (gate.type == "control" || gate.type == "response") {
          const querystr = "#svgSchematic ." + gateid + "_external";
          const element = document.querySelector(querystr);
          if (element)
            element.setAttribute(
              "class",
              `node-external-port ${gateid}_external external-${gatevalue}`
            );
        }
      }
    }
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
      return this.isSimulated && this.currentFile.simulateResult.timestamp;
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
    this.g.nodeRenderers.registerCustomRenderer(new LedBarRenderer(this.g));

    var zoom = d3.zoom();
    zoom.on("zoom", this.onZoom);
    this.svg.call(zoom).on("dblclick.zoom", null);

    this.tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "schematic-tooltip")
      .style("opacity", 0);
  },
  methods: {
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

      const filter = this.g.defs
        .append("filter")
        .attr("id", "glow")
        .attr("x", "-5000%")
        .attr("y", "-5000%")
        .attr("width", "10000%")
        .attr("height", "10000%");
      filter
        .append("feFlood")
        .attr("flood-color", "rgb(0,186,255)")
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
        .attr("radius", "1.5")
        .attr("operator", "dilate")
        .attr("result", "dilated");
      filter
        .append("feGaussianBlur")
        .attr("in", "dilated")
        .attr("stdDeviation", "1.2")
        .attr("result", "blurred");

      var feMerge = filter.append("feMerge");
      feMerge.append("feMergeNode").attr("in", "blurred");
      feMerge.append("feMergeNode").attr("in", "SourceGraphic");

      let that = this;

      this.g.bindData(this.elkData).then(() => {
        // add click handlers to all non-port gates
        // console.log("buildNetList bind data: ", this.elkData);
        this.getAllInstances.forEach(instance =>
          instance.gates.forEach(gateID => {
            const node = this.g.root.select("." + gateID + "_internal");
            node.on("click", function(ev, d) {
              const id = d.id.substr(0, d.id.indexOf("_gate"));
              const index = that.selectedGates.indexOf(id);
              if (index != -1) {
                // gate is already selected, so deselect it
                that.selectedGates.splice(index, 1);
                node.style("filter", "none");
              } else {
                // newly selected gate
                that.selectedGates.push(id);
                node.style("filter", "url(#glow)");
              }
            });
            node.on("mouseover", function(ev, d) {
              const id = d.id.substr(0, d.id.indexOf("_gate"));
              // setTimeout(() => that.g.tooltip.show(ev, id), 1000);
              that.tooltip.style("opacity", 0);

              // Note that we are also using d3.event pageX and pageY properties
              // to position the tooltip

              that.tooltip
                .html(id)
                .style("left", ev.pageX + "px")
                .style("top", ev.pageY - 25 + "px");

              that.tooltip
                .transition()
                .delay(300)
                .duration(500)
                .style("opacity", 0.9);
            });
            node.on("mouseout", function() {
              // that.g.tooltip.hide();
              that.tooltip.interrupt().transition();
              that.tooltip.style("opacity", 0);
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
                : gate.type.toUpperCase(),
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

        // single output unless response
        if (gate.type != "response") {
          // console.log("gate: ", gate);
          gateNet.ports.push({
            id: gate.id,
            hwMeta: { name: this.getLocalId(gate.id) },
            direction: "OUTPUT",
            properties: { side: "EAST", portIndex: 0 }
          });
        }

        gate.inputs.forEach((input, i) => {
          gateNet.ports.push({
            id: gate.id + "_input_" + i,
            hwMeta: { name: this.getLocalId(gate.id) },
            direction: "INPUT",
            properties: {
              side: "WEST",
              portIndex: gate.inputs.length > 1 ? i + 1 : 0
            }
          });

          let gate2gate = {
            id: input.id + "-" + gate.id + "_input_" + i,
            type: "gate2gate",
            source: this.getAllGates.some(
              x => x.type == "portbuffer" && x.id == input.id
            )
              ? this.getGate(input.id).namespace // input.namespace // if the gate input is a port then source is the instance,
              : input.id + "_gate", // else source is a gate
            sourcePort: input.id,
            target: gate.id + "_gate",
            targetPort: gate.id + "_input_" + i,
            // hwMeta: { name: null, cssClass: gate.id + "_link" }
            hwMeta: { name: null, cssClass: input.id + "_link" }
          };
          currentNet.edges.push(gate2gate);
          // console.log("-- g2g: ", gate2gate.id, this.stripReactive(gate2gate));
        });

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
          debugger;
          let port = {
            id: output, // output will be in form {this.getNamespace}_{port}-out
            hwMeta: { name: this.getLocalId(output) },
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
              name: null,
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
              name: null,
              cssClass: portGate.inputs[0].id + "_link"
            },
            source: currentInstance.inputs.some(x => x == portGate.inputs[0].id) // is the input to the port gate itself a port of the parent instance rather than a local gate
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
  fill: #d1d3d4;
}

.segment-1 {
  fill: red;
}

.d3-hwschematic {
  margin: 5px;
}
.node text {
  font-size: 8pt;
}

.d3-hwschematic .link-wrap {
  opacity: 1;
  stroke-width: 2;
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
}

.link-1 {
  stroke: rgb(237, 137, 137, 1) !important;
  stroke-opacity: 1;
  stroke-width: 3;
  fill: none;
}

.external-0 {
  fill: rgb(97, 194, 226) !important;
}

.external-1 {
  fill: rgb(237, 137, 137, 1) !important;
}
</style>
