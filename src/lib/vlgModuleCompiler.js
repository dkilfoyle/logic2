var modules, instances, gates;

const createInstance = (parentNamespace, instanceDeclaration) => {
  var namespace;
  if (parentNamespace == "") namespace = "main";
  else namespace = parentNamespace + "_" + instanceDeclaration.id;
  const instanceModule = modules[instanceDeclaration.module];
  const varMap = {};

  var newInstance = {
    id: namespace,
    module: instanceDeclaration.module,
    inputs: [], // input port gate ids
    outputs: [], // output port gate ids
    instances: [], // child instance ids
    gates: [], // non port gate ids
  };

  // instanceDeclaration is generated from module statement Mymodule foo(.a(user1), .b(user2), .X(o1))
  // => { id: "foo", module: "Mymodule", connections: [{port: {id: "a"}, value: {id: "user1", index: 0}}, ...]}

  // Build varMap - do it now because gates may be referred to before declaration
  instanceModule.wires.forEach((wire) => {
    varMap[wire] = `${namespace}_${wire}`;
  });
  instanceModule.ports.forEach((port) => {
    varMap[port.id] = `${namespace}_${port.id}`;
  });

  // create all the gates defined in the instance's module statements
  // gate declaration has the form { id: "X", gate: "and", inputs: ["a", "b"], type: "gate"}
  // if the gate has the same id as an output port then map that id to id.gate and set the output ports input to id.gate
  instanceModule.statements
    .filter((statement) => statement.type == "gate")
    .forEach((gateDeclaration) => {
      // if this gate shares an output id, ie is connected to an output port then add ! to indicate last gate before output
      const newGate = {
        id: varMap[gateDeclaration.id],
        logic: gateDeclaration.gate,
        inputs: gateDeclaration.inputs.map((input) => varMap[input]),
        instance: namespace,
        state: 0,
        type: "gate",
      };
      gates.push(newGate);
      newInstance.gates.push(newGate.id);
    });

  // create a buffer gate for each port in the instance's module definition
  // each port is mapped to {parentNamespace}_{connection.value.id}
  // input port buffers:
  //  - have the same name as the port
  //  - port.input = parentGate
  // output port buffers:
  //  - are named port-out
  //  - port.input = port
  //  - push port-out to parentGate.inputs

  instanceModule.ports.forEach((port) => {
    if (namespace == "main") {
      const portType = port.type == "input" ? "control" : "response";
      const newGate = {
        id: "main_" + port.id,
        logic: portType,
        inputs: [],
        instance: "main",
        state: 0,
        type: "gate",
      };
      // console.log("main port ", port);
      gates.push(newGate);
      newInstance.gates.push(newGate.id);
      return;
    }

    const portGate = {
      id: `${namespace}_${port.id}` + (port.type == "output" ? "-out" : ""),
      logic: "buffer",
      instance: namespace,
      inputs: [],
      state: 0,
      type: "port",
    };

    // connect the input port buffer gate's input to the mapped parent value in the instanceDeclaration parameters
    /*
                           |           |
      param.value.id ----->| input     | 
                           |           | 
    */
    if (port.type == "input") {
      const connection = instanceDeclaration.connections.find((connection) => connection.port.id == port.id);
      if (connection) {
        // if the input port is connected
        portGate.inputs.push(`${parentNamespace}_${connection.value.id}`);
        newInstance.inputs.push(varMap[port.id]);
      }
    }

    /*
        | input           | output-out ------> parentGate
        |          output | output-out ------> parentGate = param.value.id
        |             ^   | 
        |             |   |
        | varMap[port.id] |
    */
    if (port.type == "output") {
      const connection = instanceDeclaration.connections.find((connection) => connection.port.id == port.id);
      if (connection) {
        // if the output port is connected

        // push the output gate (output-out) to the mapped parent gate's inputs
        // output-out ------> parentGate = {parentNamespace}_{param.value.id}
        const parentGate = gates.find((gate) => gate.id == `${parentNamespace}_${connection.value.id}`);
        if (!parentGate) throw new Error(`${connection.value.id} is not a gate in ${parentNamespace}`);
        parentGate.inputs.push(portGate.id); // portGate.id already has -out appended

        //  push the gate with the same name as the output into the output port buffer gate's inputs
        const sameNameGate = gates.find((gate) => gate.id == varMap[port.id]);
        if (sameNameGate) portGate.inputs.push(varMap[port.id]);

        newInstance.outputs.push(portGate.id);
      }
    }
    gates.push(portGate);
  });

  // instantiate a module
  instanceModule.statements
    .filter((x) => x.type == "instance")
    .forEach((statement) => {
      var childInstance = createInstance(namespace, statement);
      newInstance.instances.push(childInstance.id);
    });

  newInstance.varMap = varMap;
  instances.push(newInstance);
  return newInstance;
};

const compile = (moduleArray) => {
  modules = moduleArray.reduce((modules, module) => {
    modules[module.id] = module;
    return modules;
  }, {});

  gates = [];
  instances = [];

  // create an instance of main module
  const mainInstantiation = {
    id: "main",
    module: "Main",
    connections: [], // instead of instance connections directly convert inputs to control, outputs to response gates
  };

  createInstance("", mainInstantiation);

  return { instances, gates };
};

export default compile;
