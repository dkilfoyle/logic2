var modules, instances, gates;

// const stripReactive = x => JSON.parse(JSON.stringify(x));

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
    gates: [] // non port gate ids
  };

  // console.log("createInstance: ", newInstance.id);
  // console.log("-- instance connections: ", instanceDeclaration.connections);
  // instanceDeclaration is generated from module statement Mymodule foo(.a(user1), .b(user2), .X(o1))
  // => { id: "foo", module: "Mymodule", connections: [{port: {id: "a"}, value: {id: "user1", index: 0}}, ...]}

  // Build varMap - do it now because gates may be referred to before declaration
  instanceModule.wires.forEach(wire => {
    varMap[wire] = `${namespace}_${wire}`;
  });
  instanceModule.regs.forEach(reg => {
    varMap[reg] = `${namespace}_${reg}`;
  });
  instanceModule.ports.forEach(port => {
    varMap[port.id] = `${namespace}_${port.id}`;
  });

  // console.log("-- instance varMap: ", varMap);

  // create all the gates defined in the instance's module statements
  // gate declaration has the form { id: "X", gate: "and", inputs: ["a", "b"], type: "gate"}
  // if the gate has the same id as an output port then map that id to id.gate and set the output ports input to id.gate
  instanceModule.instantiations
    .filter(statement => statement.type == "gate")
    .forEach(gateDeclaration => {
      // if this gate shares an output id, ie is connected to an output port then add ! to indicate last gate before output
      const newGate = {
        id: varMap[gateDeclaration.id],
        logic: gateDeclaration.gate,
        inputs: gateDeclaration.inputs.map(input => varMap[input]),
        instance: namespace,
        state: 0,
        type: "gate"
      };
      gates.push(newGate);
      newInstance.gates.push(newGate.id);
    });

  instanceModule.regs.forEach(reg => {
    const newGate = {
      id: varMap[reg],
      logic: "reg",
      inputs: [],
      instance: namespace,
      state: 0,
      type: "gate"
    };
    gates.push(newGate);
    newInstance.gates.push(newGate.id);
  });

  // console.log("-- instance gates: ", newInstance.gates);
  // create a buffer gate for each port in the instance's module definition
  // each port is mapped to {parentNamespace}_{connection.value.id}
  // input port buffers:
  //  - have the same name as the port
  //  - port.input = parentGate
  // output port buffers:
  //  - are named port-out
  //  - port.input = port
  //  - push port-out to parentGate.inputs

  instanceModule.ports.forEach(port => {
    if (namespace == "main") {
      const portType = port.type == "input" ? "control" : "response";

      // output ports may already be defined as a buffer eg buffer(F, Fe);
      // if main_port.id already exists then just change it's logic to responsebuffer

      if (gates.some(x => x.id == "main_" + port.id)) {
        // console.log("main_" + port.id);
      } else {
        const newGate = {
          id: "main_" + port.id,
          logic: portType,
          inputs: [],
          instance: "main",
          state: 0,
          type: "gate"
        };

        // console.log("main port ", port);
        gates.push(newGate);
        newInstance.gates.push(newGate.id);
      }
      return;
    }

    const portGate = {
      id: `${namespace}_${port.id}` + (port.type == "output" ? "-out" : ""),
      logic: "portbuffer",
      instance: namespace,
      inputs: [],
      state: 0,
      type: "port"
    };

    // console.log("-- port: ", port.id, ", gate: ", portGate.id);

    // connect the input port buffer gate's input to the mapped parent value in the instanceDeclaration parameters
    /*
                           |           |
      param.value.id ----->| input     | 
                           |           | 
    */
    if (port.type == "input") {
      const connection = instanceDeclaration.connections.find(
        connection => connection.port.id == port.id
      );
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
      const connection = instanceDeclaration.connections.find(
        connection => connection.port.id == port.id
      );
      if (connection) {
        // if the output port is connected
        // console.log("---- connection: ", connection);

        // push the output gate (output-out) to the mapped parent gate's inputs
        // output-out ------> parentGate = {parentNamespace}_{param.value.id}
        let parentGate = gates.find(
          gate => gate.id == `${parentNamespace}_${connection.value.id}`
        );
        if (!parentGate) {
          console.log(instanceDeclaration, port, connection);
          throw new Error(
            `${connection.value.id} is not a gate in ${parentNamespace}`
          );
        }
        // console.log(
        //   `---- parentGate: ${parentGate.id} will get input from ${portGate.id}`
        // );
        parentGate.inputs.push(portGate.id); // portGate.id already has -out appended

        //  push the gate with the same name as the output into the output port buffer gate's inputs
        const sameNameGate = gates.find(gate => gate.id == varMap[port.id]);
        if (sameNameGate) portGate.inputs.push(sameNameGate.id);

        // console.log(
        //   `---- sameNameGate: ${sameNameGate.id}. ${portGate.id} will get this as input`
        // );

        newInstance.outputs.push(portGate.id);
      }
    }
    gates.push(portGate);
  });

  // instantiate a module
  instanceModule.instantiations
    .filter(x => x.type == "instance")
    .forEach(statement => {
      var childInstance = createInstance(namespace, statement);
      newInstance.instances.push(childInstance.id);
    });

  const varMapStatement = s => {
    if (s.statement_type == "seq_block")
      s.statements.forEach(ss => varMapStatement(ss));
    else if (s.statement_type == "blocking_assignment") {
      s.lhs = varMap[s.lhs];
      if (s.rhs != +s.rhs) s.rhs = varMap[s.rhs]; // varMap rhs if it is not a number
    }
  };

  if (instanceModule.initial) {
    newInstance.initial = { ...instanceModule.initial };
    varMapStatement(newInstance.initial.statement);
  }

  if (instanceModule.always) {
    newInstance.always = { ...instanceModule.always };
    newInstance.always.sensitivities.forEach(sensitivity => {
      sensitivity.id = varMap[sensitivity.id];
    });
    varMapStatement(newInstance.always.statement);
  }

  newInstance.varMap = varMap;
  instances.push(newInstance);

  return newInstance;
};

const compile = moduleArray => {
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
    connections: [] // instead of instance connections directly convert inputs to control, outputs to response gates
  };

  createInstance("", mainInstantiation);

  return { instances, gates, timestamp: Date.now() };
};

export default compile;
