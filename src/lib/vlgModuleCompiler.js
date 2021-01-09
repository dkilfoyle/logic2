/* eslint-disable no-debugger */
import Variable from "./Variable";
import Numeric from "./Numeric";
import Operation from "./Operation";

var modules, instances, gates;

const stripReactive = x => JSON.parse(JSON.stringify(x));

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

  // console.log("varMap: ", varMap);

  // create all the gates defined in the instance's module statements
  // gate declaration has the form { id: "X", gate: "and", inputs: ["a", "b"], type: "gate"}
  // if the gate has the same id as an output port then map that id to id.gate and set the output ports input to id.gate
  instanceModule.instantiations
    .filter(statement => statement.type == "gate")
    .forEach(gateDeclaration => {
      // debugger;

      /*


gateids and portids should be of type identifer not IDENTIFIER to allow
assign myEntity[1] = a & b 
and(myEntity[1], a, b)

if gateDeclaration.id.name already exists then curGate = existinggate else curGate = gates.push({id})
curGate.operations.push({
  logic: gateDeclaration.logicFn,
  inputs: gateDeclaration.inputs
  targetBits: gateDeclaration.id.offset
})

OR
assign lhs '=' rhs => assignOp = operation(lhs, "=", rhs)
and(lhs, ids) => assignOp = operation(lhs, "=", operationTree(and, ids))
module.netAssignments.push(assignOp)


do same for output gates
myadder(.cout(COUT[1])) means parent_COUT[1] = myadder_cout
*/

      const newGate = {
        id: varMap[gateDeclaration.id],
        logic: gateDeclaration.gate,
        inputs: gateDeclaration.inputs.map(x => x.instance(namespace)),
        instance: namespace,
        state: new Numeric(0),
        type: "gate"
      };
      gates.push(newGate);
      newInstance.gates.push(newGate.id);
    });

  // ~a & b | c
  // op(op(op(a, not) & b) | c)

  const walkOperationTree = (namespace, id, counter, op) => {
    let newGate;
    let gateID = id + (counter == 0 ? "" : counter);
    if (op.lhs instanceof Variable) {
      newGate = {
        id: namespace + "_" + gateID,
        logic: op.op,
        inputs: op.rhs
          ? [op.lhs.instance(namespace), op.rhs.instance(namespace)]
          : [op.lhs.instance(namespace)],
        state: new Numeric(0),
        type: "gate"
      };
      gates.push(newGate);
      newInstance.gates.push(newGate.id);
      return new Variable(gateID, null, namespace);
    } else {
      let lhs = walkOperationTree(namespace, id, counter + 1, op.lhs);
      newGate = {
        id: namespace + "_" + gateID,
        logic: op.op,
        inputs: op.rhs
          ? [lhs.instance(namespace), op.rhs.instance(namespace)]
          : [lhs.instance(namespace)],
        state: new Numeric(0),
        type: "gate"
      };
      console.log(newGate);
      gates.push(newGate);
      newInstance.gates.push(newGate.id);
      return new Variable(gateID, null, namespace);
    }
  };

  instanceModule.netAssignments.forEach(net => {
    if (net.operationTree instanceof Variable)
      walkOperationTree(
        namespace,
        net.id,
        0,
        new Operation(net.OperationTree, "buffer", null)
      );
    else walkOperationTree(namespace, net.id, 0, net.operationTree);
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
          connection.value.id.name,
          connection.value.id.offset,
          parentNamespace
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
        parentGate.inputs.push(new Variable(port.id + "-out", null, namespace)); // portGate.id already has -out appended

        //  push the gate with the same name as the output into the output port buffer gate's inputs
        // const sameNameGate = gates.find(gate => gate.id == varMap[port.id]);
        // if (sameNameGate)
        portGate.inputs.push(new Variable(port.id, null, namespace));

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
    newInstance.always = instanceModule.always;
  }

  newInstance.varMap = varMap;
  instances.push(newInstance);

  console.log("Instance: ", stripReactive(newInstance));
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
