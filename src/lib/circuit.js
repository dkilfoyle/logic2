import Numeric from "./Numeric";
import Variable from "./Variable.js";

const getLocalID = x => x.substr(x.lastIndexOf("_") + 1);
const getNamespace = x => x.substr(0, x.lastIndexOf("_"));

const buildNetInstance = (compileResult, currentNet) => {
  const currentInstance = compileResult.instances[currentNet.id];
  // console.log(
  //   "Building ",
  //   currentInstance.id,
  //   this.stripReactive(currentInstance)
  // );

  // build gates of this instance and edges for each of the gates inputs
  // gate inputs might be another gate or an input port
  currentInstance.gate_ids.forEach((gateId, gateCount) => {
    const gate = compileResult.gates[gateId];

    let metaVal;
    switch (gate.type) {
      case "array":
        metaVal = gate.arraySize;
        break;
      case "concatenation":
        metaVal = {
          copynum: gate.copynum,
          bitSize: gate.state.bitArray.length
        };
        break;
      default:
        metaVal = Object.assign(new Numeric(0, 0), gate.state).getValue();
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
          gate.type == "control" || gate.type == "portbuffer" || gate.type == "response"
            ? getLocalID(gate.id)
            : gate.schematicName,
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
          name: getLocalID(gate.id)
        },
        properties: { side: "EAST", portIndex: 0 }
      });
    }

    const getInputPortDescription = (type, i) => {
      if (type == "mux" && i == 0) return { side: "SOUTH", portIndex: 0 };
      if ((type == "reg") | (gate.type == "array")) return { side: "NORTH", portIndex: i };
      if (type == "led") return { side: "SOUTH", portIndex: i };
      if (type == "splitter") return { side: "WEST", portIndex: 20 };
      if (type == "concatenation") return { side: "WEST", portIndex: 20 };
      return { side: "WEST", portIndex: i };
    };

    // build input ports for this gate and the edges that connect from source to each input
    gate.inputs.forEach((input, i) => {
      let inputGate = compileResult.gates[input.id];

      // let ports = null;
      // if (gate.type == "concatenation")
      //   ports = [...gateNet.ports].reverse();
      // else ports = gateNet.ports;

      gateNet.ports.push({
        direction: "INPUT",
        id: gate.id + "_input_" + i,
        hwMeta: {
          name: getLocalID(gate.id)
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
            Object.assign(new Variable("", ""), input).getOffsetString(
              compileResult.parameters,
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
            name: getLocalID(gate.id)
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
  currentInstance.instance_ids.forEach(childInstanceID => {
    const childInstance = compileResult.instances[childInstanceID];
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

    childInstance.output_ids.forEach(output => {
      // console.log(`---- Port Output: ${this.getLocalId(output)} = ${output}`);
      // eslint-disable-next-line no-debugger
      let port = {
        id: output, // output will be in form {this.getNamespace}_{port}-out
        hwMeta: { name: getLocalID(output).replace("-out", "") },
        direction: "OUTPUT",
        properties: { side: "EAST", portIndex: 0 }
      };
      childNet.ports.push(port);

      // get the portbuffer gate for the output gate = output-out
      const portGate = compileResult.gates[output];

      let gate2output = {
        id: output + "_" + portGate.inputs[0].id,
        type: "gate2output",
        source: portGate.inputs[0].id + "_gate",
        sourcePort: portGate.inputs[0].id,
        target: getNamespace(output),
        targetPort: output,
        hwMeta: {
          name:
            portGate.inputs[0].id +
            Object.assign(new Variable("", ""), portGate.inputs[0]).getOffsetString(
              compileResult.parameters,
              currentInstance.id
            ),
          cssClass: portGate.inputs[0].id + "_link"
        }
      };
      childNet.edges.push(gate2output);
      // console.log("gate2output: ", gate2output.id, gate2output);
    });

    // Build ports for childinstance and connect to currentinstance gates
    childInstance.input_ids.forEach((input, i) => {
      // console.log(`---- Port Input: ${this.getLocalId(input)} = ${input}`);
      let port = {
        id: input,
        hwMeta: { name: getLocalID(input), level: 0 },
        direction: "INPUT",
        properties: { side: "WEST", portIndex: i + 1 }
      };
      childNet.ports.push(port);

      // get the buffer gate for this port
      const portGate = compileResult.gates[input];
      const parent2input = {
        id: portGate.inputs[0].id + "-" + input,
        type: "parent2input",
        hwMeta: {
          name:
            portGate.inputs[0].id +
            Object.assign(new Variable("", ""), portGate.inputs[0]).getOffsetString(
              compileResult.parameters,
              currentInstance.id
            ),
          cssClass: portGate.inputs[0].id + "_link"
        },
        source: currentInstance.input_ids.includes(portGate.inputs[0].id) // is the input to the port gate itself a port of the parent instance rather than a local gate
          ? currentInstance.id
          : portGate.inputs[0].id + "_gate", // TODO: source might be a gate or a port - ie a pass through, is this handled??
        sourcePort: portGate.inputs[0].id,
        target: getNamespace(input),
        targetPort: input
      };
      currentNet.edges.push(parent2input);
      // console.log("parent2input: ", parent2input.id, parent2input);
    });

    buildNetInstance(compileResult, childNet); // add any child instances of this child
    currentNet.children.push(childNet);
  });
};

const circuit = currentFile => {
  currentFile.circuitResult = {
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
  try {
    buildNetInstance(currentFile.compileResult, currentFile.circuitResult);
    currentFile.circuitResult.timestamp = Date.now();
    currentFile.circuitResult.status = "pass";
  } catch (e) {
    console.log("circuit error: ", e);
    currentFile.circuitResult.status = "fail";
  }
};

export default circuit;
