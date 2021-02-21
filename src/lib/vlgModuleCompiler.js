/* eslint-disable no-debugger */
import Variable from "./Variable";
import Numeric from "./Numeric";
import Operation from "./Operation";
import LogicGate from "./LogicGate";
import BufferGate from "./BufferGate";
import MemoryGate from "./MemoryGate";
import ParameterGate from "./ParameterGate";

var modules, instances, gates, parameters;

const stripReactive = x => JSON.parse(JSON.stringify(x));

const isLogicGate = x => ["and", "nand", "or", "xor", "nor", "not"].includes(x);
const isBuffer = x =>
  [
    "buffer",
    "portbuffer",
    "response",
    "control",
    "number",
    "ledbar",
    "sevenseg",
    "reg"
  ].includes(x);

const createInstance = (parentNamespace, instanceDeclaration) => {
  console.group(
    "createInstance: ",
    parentNamespace,
    instanceDeclaration.module
  );
  console.log("instanceDeclaration: ", { ...instanceDeclaration });
  var namespace;
  if (parentNamespace == "") namespace = "main";
  else namespace = parentNamespace + "_" + instanceDeclaration.id;
  const instanceModule = modules[instanceDeclaration.module];
  console.log("instanceModule: ", { ...instanceModule });

  var newInstance = {
    id: namespace,
    module: instanceDeclaration.module,
    inputs: [], // input port gate ids
    outputs: [], // output port gate ids
    instances: [], // child instance ids
    gates: [], // non port gate ids
    parameters: []
  };
  instances.push(newInstance);

  // combine moduleParameters and instanceParameters and evaluate any expressions to get constant value
  Object.entries(instanceModule.moduleParameters).forEach((entry, i) => {
    if (i < instanceDeclaration.instanceParameters.length) {
      // overwrite module defined parameters eg module Adder #(parameter N=8) with instance defined eg Adder myAdder #(8)
      // module defined are named, instance defined by order
      parameters[namespace + "_" + entry[0]] = new ParameterGate(
        namespace,
        entry[0],
        instanceDeclaration.instanceParameters[i].getValue(
          parameters,
          parentNamespace
        )
      );
    } else
      parameters[namespace + "_" + entry[0]] = new ParameterGate(
        namespace,
        entry[0],
        entry[1]
      );
    newInstance.parameters.push(namespace + "_" + entry[0]);
  });
  console.log("parameters: ", stripReactive(newInstance.parameters));

  const gateBitSizesType = {
    number: 10,
    sevenseg: 4
  };

  // calculate bitsize for wires and ports and regs which may include calculated parameters constants
  const gateBitSizesID = [
    ...instanceModule.wires,
    ...instanceModule.ports,
    ...instanceModule.regs
  ].reduce((acc, x) => {
    const dim = x.bitDim
      ? x.bitDim.map(x => x.getValue(parameters, newInstance.id))
      : null;
    return { ...acc, [x.id]: dim ? Math.abs(dim[1] - dim[0]) + 1 : 1 };
  }, {});

  console.log("gateBitSizes: ", gateBitSizesID);

  // console.log("createInstance: ", newInstance.id);
  // console.log("-- instance connections: ", instanceDeclaration.connections);
  // instanceDeclaration is generated from module statement Mymodule foo(.a(user1), .b(user2), .X(o1))
  // => { id: "foo", module: "Mymodule", connections: [{port: {id: "a"}, value: {id: "user1", index: 0}}, ...]}

  // console.log("varMap: ", varMap);

  // create all the gates defined in the instance's module statements
  // gate declaration has the form { id: "X", gate: "and", inputs: ["a", "b"], type: "gate"}
  // if the gate has the same id as an output port then map that id to id.gate and set the output ports input to id.gate

  instanceModule.instantiations
    .filter(statement => statement.type == "gate")
    .forEach(gateDef => {
      const newGate = isLogicGate(gateDef.gateType)
        ? new LogicGate(
            namespace,
            gateDef.id,
            gateDef.gateType,
            gateBitSizesID[gateDef.id]
          )
        : isBuffer(gateDef.gateType)
        ? new BufferGate(
            namespace,
            gateDef.id,
            gateDef.gateType,
            gateBitSizesID[gateDef.id]
          )
        : null;
      if (!newGate)
        throw new Error(
          `Invalid gate type ${gateDef.gateType} in id ${gateDef.id}`
        );
      newGate.inputs = gateDef.inputs.map(x => x.instance(namespace));
      newGate.state = new Numeric(
        0,
        gateBitSizesType[gateDef.gate] || gateBitSizesID[gateDef.id] || 1
      );
      gates.push(newGate);
      newInstance.gates.push(newGate.id);
    });

  // ~a & b | c
  // op(op(op(a, not) & b) | c)

  let counter;

  // walk the operation tree until both lhs and rhs are variables
  // then make a new gate namespace.idx which is op(lhs, rhs)
  const walkOperationTree = (namespace, id, op, netBitSize) => {
    let gateID = id + (counter == 0 ? "" : counter);
    counter = counter + 1;

    if (op instanceof Variable) {
      return op;
    }

    const newGate =
      op.op == "assign"
        ? new BufferGate(namespace, gateID, "buffer", netBitSize) // TODO: if gateID is an output newGate = gates.get(gateID+"-out")??
        : new LogicGate(namespace, gateID, op.op, netBitSize);

    console.log("newGate: ", newGate);

    newGate.inputs = op.rhs
      ? [
          walkOperationTree(namespace, id, op.lhs, netBitSize).instance(
            namespace
          ),
          walkOperationTree(namespace, id, op.rhs, netBitSize).instance(
            namespace
          )
        ]
      : [
          walkOperationTree(namespace, id, op.lhs, netBitSize).instance(
            namespace
          )
        ];

    gates.push(newGate);
    newInstance.gates.push(newGate.id);
    return new Variable(namespace, gateID, null);
  };

  instanceModule.netAssignments.forEach(net => {
    console.group("netAsssigment: ", net.id.name);
    counter = 0;
    let netBitSize = gateBitSizesID[net.id.name]; // intermediary gates will be same bitsize as the assign lhs
    if (net.operationTree instanceof Variable)
      walkOperationTree(
        namespace,
        net.id,
        new Operation(net.operationTree, "assign", null),
        netBitSize
      );
    else walkOperationTree(namespace, net.id, net.operationTree, netBitSize);
    console.groupEnd();
  });

  instanceModule.regs.forEach(reg => {
    let arrayDim = reg.arrayDim
      ? reg.arrayDim.map(x => x.getValue(parameters, newInstance.id))
      : null;
    const newGate = new MemoryGate(
      namespace,
      reg.id,
      gateBitSizesID[reg.id],
      arrayDim ? Math.abs(arrayDim[1] - arrayDim[0]) + 1 : 1
    );
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
        const newGate = new BufferGate(
          "main",
          port.id,
          portType,
          gateBitSizesID[port.id]
        );
        gates.push(newGate);
        newInstance.gates.push(newGate.id);
      }
      return;
    }

    const portGate = new BufferGate(
      namespace,
      port.id + (port.direction == "output" ? "-out" : ""),
      "portbuffer",
      gateBitSizesID[port.id]
    );
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
        newInstance.inputs.push(portGate.id);
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
        parentGate.inputs.push(new Variable(namespace, port.id + "-out", null)); // portGate.id already has -out appended

        //  push the gate with the same name as the output into the output port buffer gate's inputs
        // const sameNameGate = gates.find(gate => gate.id == varMap[port.id]);
        // if (sameNameGate)
        portGate.inputs.push(new Variable(namespace, port.id, null));

        // console.log(
        //   `---- sameNameGate: ${sameNameGate.id}. ${portGate.id} will get this as input`
        // );

        newInstance.outputs.push(portGate.id);
      }
    }

    // console.log("portGate: ", port.id, port.direction, portGate);

    gates.push(portGate);
  });

  // instantiate a module
  instanceModule.instantiations
    .filter(x => x.type == "instance")
    .forEach(statement => {
      var childInstance = createInstance(namespace, statement);
      newInstance.instances.push(childInstance.id);
    });

  if (instanceModule.initial) {
    // no need to instantiate statements because statements are always evaluated in local (module instance) namespace
    // using optional namespace overide to setvalue and getvalue for Variable and Operation
    newInstance.initial = instanceModule.initial;
  }

  if (instanceModule.always) {
    newInstance.always = [...instanceModule.always];
  }

  console.log("Instance: ", stripReactive(newInstance));
  console.groupEnd();

  return newInstance;
};

const compile = moduleArray => {
  modules = moduleArray.reduce((modules, module) => {
    modules[module.id] = module;
    return modules;
  }, {});

  gates = []; // todo ? change to lookup object instead of array?
  instances = []; // todo ditto
  parameters = {};

  // create an instance of main module
  const mainInstantiation = {
    id: "main",
    module: "Main",
    connections: [] // instead of instance connections directly convert inputs to control, outputs to response gates
  };

  createInstance("", mainInstantiation);

  console.group("Compilation result:");
  console.log("Instances: ", stripReactive(instances));
  console.log("Gates: ", stripReactive(gates));
  console.groupEnd();

  return { instances, gates, parameters, timestamp: Date.now() };
};

export default compile;
