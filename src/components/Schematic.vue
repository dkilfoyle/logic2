<template>
  <div class="dkcontainer">
    <div class="level my-4" v-if="isSimulated">
      <div class="level-item has-text-centered">
        t = {{ $store.getters.currentFile.selectedTime }}
      </div>
    </div>
    <div class="mx-4 my-2" v-if="!isCompiled">Compile File First</div>
    <div class="columns">
      <div class="column">
        <svg ref="svgSchematic" id="svgSchematic" />
      </div>
    </div>
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
import BufferRenderer from "./renderers/buffer.js";

export default {
  // name: 'ComponentName',
  mixins: [UtilsMixin],

  data() {
    return {
      elkData: {},
      g: {},
      svg: null,
      selectedGates: [],
      width: null,
      height: null
    };
  },
  watch: {
    compileStatus() {
      // console.log("compileStatusWatcher: ");
      this.$nextTick(() => this.buildNetlist());
    },
    getGatesStateAtSelectedTime(timestate) {
      this.getAllGates
        .filter(gate => gate.logic == "sevenseg")
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

      for (const [gateid, gatevalue] of Object.entries(
        this.getGatesStateAtSelectedTime
      )) {
        const querystr = "#svgSchematic ." + gateid + "_link";
        const elements = document.querySelectorAll(querystr);
        elements.forEach(element =>
          element.setAttribute("class", `${gateid}_link link-${gatevalue}`)
        );
        let gate = this.getGate(gateid);
        if (gate.logic == "control" || gate.logic == "response") {
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
    this.g.nodeRenderers.registerCustomRenderer(new BufferRenderer(this.g));

    var zoom = d3.zoom();
    zoom.on("zoom", this.onZoom);
    this.svg.call(zoom).on("dblclick.zoom", null);
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
      this.width = width;
      this.height = height;
      this.svg.attr("width", width);
      this.svg.attr("height", height);
      this.buildNetlist();
    },
    buildNetlist() {
      if (this.width == null || !this.getAllGates) return; // prevent building before properly sized
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
      // console.log("elkData: ", this.elkData);

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

      this.g.bindData(this.elkData).then(() => {
        // add click handlers to all non-port gates
        // console.log("buildNetList bind data: ", this.elkData);
        this.getAllInstances.forEach(instance =>
          instance.gates.forEach(gateId => {
            const node = this.g.root.select("#node-id-" + gateId + "_gate");
            node.on("click", d => {
              const id = d.id.substr(0, d.id.indexOf("_gate"));
              const index = this.selectedGates.indexOf(id);
              if (index != -1) {
                // gate is already selected, so deselect it
                this.selectedGates.splice(index, 1);
                node.style("filter", "none");
              } else {
                // newly selected gate
                this.selectedGates.push(id);
                node.style("filter", "url(#glow)");
              }
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
              gate.logic == "control" || gate.logic == "response"
                ? gate.id + "_external"
                : "",
            name:
              gate.logic == "control" ||
              gate.logic == "portbuffer" ||
              gate.logic == "response"
                ? this.getLocalId(gate.id)
                : gate.logic.toUpperCase(),
            isExternalPort: gate.logic == "control" || gate.logic == "response"
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
        if (gate.logic != "response") {
          console.log("gate: ", gate);
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
            id: input + "-" + gate.id + "_input_" + i,
            type: "gate2gate",
            source: this.getAllGates.some(
              x => x.type == "port" && x.id == gate.inputs[i]
            )
              ? this.getNamespace(gate.inputs[i]) // if the gate input is a port then source is the instance,
              : gate.inputs[i] + "_gate", // else source is a gate
            sourcePort: gate.inputs[i],
            target: gate.id + "_gate",
            targetPort: gate.id + "_input_" + i,
            // hwMeta: { name: null, cssClass: gate.id + "_link" }
            hwMeta: { name: null, cssClass: input + "_link" }
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
            name: childInstanceID,
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
          let port = {
            id: output, // output will be in form {this.getNamespace}_{port}-out
            hwMeta: { name: this.getLocalId(output) },
            direction: "OUTPUT",
            properties: { side: "EAST", portIndex: 0 }
          };
          childNet.ports.push(port);

          // get the buffer gate for the output port = output-out
          const portGate = this.getGate(output);
          // const feederGate = this.getGate(
          //   output.substr(0, output.indexOf("-out"))
          // );

          let gate2output = {
            id: output + "_" + portGate.inputs[0],
            type: "gate2output",
            source: portGate.inputs[0] + "_gate",
            sourcePort: portGate.inputs[0],
            target: this.getNamespace(output),
            targetPort: output,
            hwMeta: {
              name: null,
              cssClass: portGate.inputs[0] + "_link"
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
            id: portGate.inputs[0] + "-" + input,
            type: "parent2input",
            hwMeta: {
              name: null,
              cssClass: portGate.inputs[0] + "_link"
            },
            source: currentInstance.inputs.some(x => x == portGate.inputs[0]) // is the input to the port gate itself a port of the parent instance rather than a local gate
              ? currentInstance.id
              : portGate.inputs[0] + "_gate", // TODO: source might be a gate or a port - ie a pass through, is this handled??
            sourcePort: portGate.inputs[0],
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

.hwschematic-tooltip {
  background: cornsilk;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  position: fixed;
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
