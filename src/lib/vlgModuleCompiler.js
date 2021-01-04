import Variable from "./Variable";
import Numeric from "./Numeric";

var modules, instances, gates;

// const stripReactive = x => JSON.parse(JSON.stringify(x));

const createInstance = (parentNamespace, instanceDeclaration) => {
  console.group(
    "createInstance: ",
    parentNamespace,
    instanceDeclaration.module
  );
  console.log("instanceDeclaration: ", instanceDeclaration);
  var namespace;
  if (parentNamespace == "") namespace = "main";
  else namespace = parentNamespace + "_" + instanceDeclaration.id;
  const instanceModule = modules[instanceDeclaration.module];
  console.log("instanceModule: ", instanceModule);

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
    varMap[wire.id] = `${namespace}_${wire.id}`;
  });
  instanceModule.regs.forEach(reg => {
    varMap[reg.id] = `${namespace}_${reg.id}`;
  });
  instanceModule.ports.forEach(port => {
    varMap[port.id] = `${namespace}_${port.id}`;
  });

  console.log("varMap: ", varMap);

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
        inputs: gateDeclaration.inputs.map(
          input => new Variable(namespace, input.name, input.offset)
        ),
        instance: namespace,
        state: new Numeric(0),
        type: "gate"
      };
      console.log("gates: newGate: ", gateDeclaration.id, newGate);
      gates.push(newGate);
      newInstance.gates.push(newGate.id);
    });

  instanceModule.regs.forEach(reg => {
    const newGate = {
      id: varMap[reg.id],
      logic: "reg",
      inputs: [],
      instance: namespace,
      state: new Numeric(0, reg.bitSize),
      type: "gate"
    };
    console.log("gates: newReg: ", reg.id, newGate);
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
      const portType = port.direction == "input" ? "control" : "response";

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
          state: new Numeric(0, port.bitSize),
          type: "gate"
        };

        console.log("gates: main: newport: ", port.id, newGate);
        gates.push(newGate);
        newInstance.gates.push(newGate.id);
      }
      return;
    }

    const portGate = {
      id:
        `${namespace}_${port.id}` + (port.direction == "output" ? "-out" : ""),
      logic: "portbuffer",
      instance: namespace,
      inputs: [],
      state: new Numeric(0, port.bitSize),
      type: "port"
    };

    // console.log("-- port: ", port.id, ", gate: ", portGate.id);

    // connect the input port buffer gate's input to the mapped parent value in the instanceDeclaration parameters
    /*
                           |           |
      param.value.id ----->| input     | 
                           |           | 
    */
    if (port.direction == "input") {
      const connection = instanceDeclaration.connections.find(
        connection => connection.port.id == port.id
      );
      if (connection) {
        // if the input port is connected
        // portGate.inputs.push(`${parentNamespace}_${connection.value.id}`);
        let newInput = new Variable(
          parentNamespace,
          connection.value.id.name,
          connection.value.id.offset
        );
        portGate.inputs.push(newInput);
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
    if (port.direction == "output") {
      const connection = instanceDeclaration.connections.find(
        connection => connection.port.id == port.id
      );
      if (connection) {
        // if the output port is connected
        // console.log("---- connection: ", connection);

        // push the output gate (output-out) to the mapped parent gate's inputs
        // output-out ------> parentGate = {parentNamespace}_{param.value.id}
        let parentGate = gates.find(
          gate => gate.id == `${parentNamespace}_${connection.value.id.name}`
        );
        if (!parentGate) {
          console.log(instanceDeclaration, port, connection);
          throw new Error(
            `${connection.value.id.name} is not a gate in ${parentNamespace}`
          );
        }
        // console.log(
        //   `---- parentGate: ${parentGate.id} will get input from ${portGate.id}`
        // );
        parentGate.inputs.push(new Variable(namespace, port.id + "-out")); // portGate.id already has -out appended

        //  push the gate with the same name as the output into the output port buffer gate's inputs
        // const sameNameGate = gates.find(gate => gate.id == varMap[port.id]);
        // if (sameNameGate)
        portGate.inputs.push(new Variable(namespace, port.id));

        // console.log(
        //   `---- sameNameGate: ${sameNameGate.id}. ${portGate.id} will get this as input`
        // );

        newInstance.outputs.push(portGate.id);
      }
    }
    console.log("portGate: ", port.id, port.direction, portGate);

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
    if (s.type == "seq_block" || s.type == "root_block")
      s.statements.forEach(ss => varMapStatement(ss));
    else if (s.type == "blocking_assignment") {
      if (s.lhs.type == "identifier")
        s.lhs = new Variable(namespace, s.lhs.name, s.lhs.offset);
      else if (s.lhs.type == "concatenation")
        throw new Error("concatenations not imlemented yet");
      else throw new Error(`statement lhs is invalid type (${s.lhs.type})`);

      if (s.rhs.type == "identifier")
        s.rhs = new Variable(namespace, s.rhs.name, s.rhs.offset);
      else if (s.rhs.type == "number")
        s.rhs = new Numeric(s.rhs.decimalValue, s.rhs.size, s.rhs.format);
      else throw new Error(`statemeent rhs is invalid type (${s.rhs.type})`);
    }
  };

  if (instanceModule.initial) {
    newInstance.initial = { ...instanceModule.initial };
    varMapStatement(newInstance.initial.statementTree);
  }

  if (instanceModule.always) {
    newInstance.always = { ...instanceModule.always };
    newInstance.always.sensitivities.forEach(sensitivity => {
      if (sensitivity.type != "everytime") {
        sensitivity.id = new Variable(
          namespace,
          sensitivity.id.name,
          sensitivity.id.offset
        );
        sensitivity.last = "x";
      }
    });
    varMapStatement(newInstance.always.statementTree);
  }

  newInstance.varMap = varMap;
  instances.push(newInstance);

  console.log("Instance: ", newInstance);
  console.groupEnd();

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
