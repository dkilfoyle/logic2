/* eslint-disable no-debugger */
import Variable from "./Variable";
import Numeric from "./Numeric";
import Operation from "./Operation";
import LogicGate from "./LogicGate";
import BufferGate from "./BufferGate";
import ConstantGate from "./ConstantGate";
import WireGate from "./WireGate";
import ArrayGate from "./ArrayGate";
import RegGate from "./RegGate";
import ParameterGate from "./ParameterGate";
import Concatenation from "./Concatenation";
import ConcatenationGate from "./ConcatenationGate";
import SplitterGate from "./SplitterGate";
import TernOperation from "./TernOperation";

const isLogicGate = x => ["and", "nand", "or", "xor", "nor", "not"].includes(x);
const isBuffer = x =>
  [
    "buffer",
    "portbuffer",
    "response",
    "control",
    "number",
    "ledbar",
    "led",
    "leds",
    "sevenseg",
    "reg",
    "constant"
  ].includes(x);

const createInstance = (moduleDefinitions, compileResult, parentNamespace, instanceDeclaration) => {
  let { gates, instances, parameters } = compileResult;
  // console.groupCollapsed(
  //   "createInstance: ",
  //   parentNamespace,
  //   instanceDeclaration.module
  // );
  // console.log("instanceDeclaration: ", { ...instanceDeclaration });
  const namespace = parentNamespace == "" ? "main" : parentNamespace + "_" + instanceDeclaration.id;
  const instanceModule = moduleDefinitions[instanceDeclaration.module];
  // console.log("instanceModule: ", { ...instanceModule });

  var newInstance = {
    id: namespace,
    module: instanceDeclaration.module,
    input_ids: [], // input port gate ids
    output_ids: [], // output port gate ids
    instance_ids: [], // child instance ids
    gate_ids: [], // non port gate ids
    parameter_ids: [], // parameter ids
    constants: []
  };
  instances[newInstance.id] = newInstance;

  const inputGates = {};
  const outputGates = {};
  const logicGates = {};

  // combine moduleParameters and instanceParameters and evaluate any expressions to get constant value
  Object.entries(instanceModule.moduleParameters).forEach((entry, i) => {
    if (i < instanceDeclaration.instanceParameters.length) {
      // overwrite module defined parameters eg module Adder #(parameter N=8) with instance defined eg Adder myAdder #(8)
      // module defined are named, instance defined by order
      parameters[namespace + "_" + entry[0]] = new ParameterGate(
        namespace,
        entry[0],
        instanceDeclaration.instanceParameters[i].getValue(parameters, parentNamespace)
      );
    } else
      parameters[namespace + "_" + entry[0]] = new ParameterGate(
        namespace,
        entry[0],
        entry[1].getValue(parameters, parentNamespace)
      );
    newInstance.parameter_ids.push(namespace + "_" + entry[0]);
  });
  // console.log("parameters: ", stripReactive(newInstance.parameters));

  const gateBitSizesType = {
    ledbar: 10,
    sevenseg: 7
    // led: 1
  };

  const gateDefaultValueType = {
    number: 0,
    ledbar: 0
  };

  const getGateDefaultValue = gateDef => {
    const byType = gateDefaultValueType[gateDef.gateType];
    if (byType != undefined) return byType;
    if (gateDef.defaultValue != undefined) return gateDef.defaultValue;
    return 0;
  };

  // calculate bitsize for wires and ports and regs which may include calculated parameters constants
  const gateBitSizesID = [
    ...instanceModule.wires,
    ...instanceModule.ports,
    ...instanceModule.regs
  ].reduce((acc, x) => {
    const dim = x.bitDim ? x.bitDim.map(y => y.getValue(parameters, newInstance.id)) : null;
    return { ...acc, [x.id]: dim ? Math.abs(dim[1] - dim[0]) + 1 : 1 };
  }, {});

  // console.log("gateBitSizes: ", gateBitSizesID);

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
      const newGate = new BufferGate(
        "main",
        port.id,
        port.direction == "input" ? "control" : "response",
        gateBitSizesID[port.id]
      );
      if (port.direction == "input") inputGates[newGate.id] = newGate;
      else outputGates[newGate.id] = newGate;
      newInstance.gate_ids.push(newGate.id);
      return;
    }

    // if (namespace == "main_mips_dp_pcadd" && port.id == "b") debugger;

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

        portGate.inputs.push(connection.value.gateVariable);
        newInstance.input_ids.push(portGate.id);
      }
      inputGates[portGate.id] = portGate;
    }
    /*
        | input           | output-out ------> parentGate
        |          output | output-out ------> parentGate = param.value.id
        |             ^   | 
        |             |   |
        | varMap[port.id] |
    */
    if (port.direction == "output") {
      const connection = instanceDeclaration.connections.find(x => x.port.id == port.id);
      if (connection) {
        // portGate.id already has -out appended
        // port.id -----> port.id-out
        portGate.inputs.push(new Variable(namespace, port.id, null, gateBitSizesID[port.id]));

        newInstance.output_ids.push(portGate.id);
      }
      outputGates[portGate.id] = portGate;
    }

    // console.log("portGate: ", port.id, port.direction, portGate);
  });

  // console.log("createInstance: ", newInstance.id);
  // console.log("-- instance connections: ", instanceDeclaration.connections);
  // instanceDeclaration is generated from module statement Mymodule foo(.a(user1), .b(user2), .X(o1))
  // => { id: "foo", module: "Mymodule", connections: [{port: {id: "a"}, value: {id: "user1", index: 0}}, ...]}

  // create all the gates defined in the instance's module statements
  // gate declaration has the form { id: "X", gate: "and", inputs: ["a", "b"], type: "gate"}
  // if the gate has the same id as an output port then map that id to id.gate and set the output ports input to id.gate

  instanceModule.instantiations
    .filter(statement => statement.type == "gate")
    .forEach(gateDef => {
      let newGate = null;
      if (gateDef.gateType == "response") {
        newGate = outputGates[gateDef.id];
        newGate.inputs = gateDef.inputs.map(x => x.instance(namespace));
        return;
      }
      newGate = isLogicGate(gateDef.gateType)
        ? new LogicGate(
            namespace,
            gateDef.id,
            gateDef.gateType,
            gateBitSizesType[gateDef.gateType] ||
              gateBitSizesID[gateDef.id] ||
              gateDef.defaultSize ||
              null,
            getGateDefaultValue(gateDef)
          )
        : isBuffer(gateDef.gateType)
        ? new BufferGate(
            namespace,
            gateDef.id,
            gateDef.gateType,
            gateBitSizesType[gateDef.gateType] ||
              gateBitSizesID[gateDef.id] ||
              gateDef.defaultSize ||
              null,
            getGateDefaultValue(gateDef)
          )
        : null;
      if (!newGate) throw new Error(`Invalid gate type ${gateDef.gateType} in id ${gateDef.id}`);
      newGate.inputs = gateDef.inputs.map(x => x.instance(namespace));
      if (gateDef.meta) newGate.meta = gateDef.meta;
      logicGates[newGate.id] = newGate;
      newInstance.gate_ids.push(newGate.id);
    });

  // ~a & b | c
  // op(op(op(a, not) & b) | c)

  let counter;

  // walk the operation tree until both lhs and rhs are variables
  // then make a new gate namespace.idx which is op(lhs, rhs)
  const walkOperationTree = (namespace, id, op, netBitSize) => {
    // debugger;

    if (op instanceof Variable) {
      return op.instance(namespace);
    }

    if (id instanceof Concatenation) {
      debugger;
      return; // concatenations are handled later
    }

    let gateID = id + (counter == 0 ? "" : counter);
    counter = counter + 1;

    if (op instanceof Concatenation) {
      const walkedComponents = op.components.map(
        component => walkOperationTree(namespace, id, component, null)
        // send null instead of netBitSize so that child gates calculate minimum bit size
      );
      const copyNum = op.copynum.getValue(parameters, namespace);
      const bitSize = walkedComponents.reduce((acc, comp) => {
        const compBitSize = comp.getCompileBitSize(parameters, namespace, gateBitSizesID) * copyNum;
        // console.log("compBitSize: ", op, comp, compBitSize);
        return acc + compBitSize;
      }, 0);
      const newGate = new ConcatenationGate(namespace, gateID, bitSize);
      gateBitSizesID[gateID] = bitSize;
      newGate.copynum = copyNum;
      newGate.inputs = walkedComponents;

      newInstance.gate_ids.push(newGate.id);
      logicGates[newGate.id] = newGate;
      return new Variable(namespace, gateID, null);
    }

    if (op instanceof Numeric) {
      const newGate = new ConstantGate(namespace, gateID, netBitSize, op.getValue());
      newInstance.gate_ids.push(newGate.id);
      logicGates[newGate.id] = newGate;
      gateBitSizesID[gateID] = newGate.bitSize;
      return new Variable(namespace, gateID, null);
    }

    if (op instanceof Operation || op instanceof TernOperation) {
      let newGateOp = null;
      if (namespace == "main" && instanceModule.ports.some(p => gateID == p.id)) {
        newGateOp = Object.values(outputGates).find(g => g.name == gateID);
      } else
        newGateOp =
          op.op == "assign"
            ? new BufferGate(namespace, gateID, "buffer", netBitSize) // TODO: if gateID is an output newGate = gates.get(gateID+"-out")??
            : new LogicGate(
                namespace,
                gateID,
                op.op,
                netBitSize || op.getCompileBitSize(parameters, namespace, gateBitSizesID)
              );

      // console.log("newGate: ", newGate);
      gateBitSizesID[gateID] = newGateOp.bitSize;

      if (op.op == "mux")
        newGateOp.inputs = [
          walkOperationTree(namespace, id, op.test, netBitSize),
          walkOperationTree(namespace, id, op.lhs1, netBitSize),
          walkOperationTree(namespace, id, op.lhs0, netBitSize)
        ];
      else
        newGateOp.inputs = op.rhs
          ? [
              walkOperationTree(namespace, id, op.lhs, netBitSize),
              walkOperationTree(namespace, id, op.rhs, netBitSize)
            ]
          : [walkOperationTree(namespace, id, op.lhs, netBitSize)];

      if (newGateOp.type != "response") {
        logicGates[newGateOp.id] = newGateOp;
        newInstance.gate_ids.push(newGateOp.id);
      }
      return new Variable(namespace, gateID, null);
    }
    throw new Error("Unknown expression type - not variable, numeric, concatenation or operation");
  };

  instanceModule.netAssignments.forEach(net => {
    // console.groupCollapsed("netAsssigment: ", net.id.name);
    counter = 0;

    let netBitSize = gateBitSizesID[net.id.name];
    // intermediary gates will be same bitsize as the assign lhs
    // except for new gate instantiations inside a concatenation

    if (net.operationTree instanceof Variable || net.operationTree instanceof Concatenation)
      walkOperationTree(
        namespace,
        net.id,
        new Operation(net.operationTree, "assign", null),
        netBitSize
      );
    else walkOperationTree(namespace, net.id, net.operationTree, netBitSize);
    // console.groupEnd();
  });

  instanceModule.regs.forEach(reg => {
    var newGate;
    if (reg.arrayDim) {
      // array of regs = memory
      let arrayDim = reg.arrayDim.map(x => x.getValue(parameters, newInstance.id));
      newGate = new ArrayGate(
        namespace,
        reg.id,
        gateBitSizesID[reg.id],
        0,
        Math.abs(arrayDim[1] - arrayDim[0]) + 1
      );
    } else {
      newGate = new RegGate(namespace, reg.id, gateBitSizesID[reg.id]);
    }

    logicGates[newGate.id] = newGate;
    newInstance.gate_ids.push(newGate.id);
  });

  // silently instantiate a WireGate for any outputs or wires that have not been declared as as gate (LogicGate, BufferGate or Reg)
  [...instanceModule.wires, ...instanceModule.ports.filter(p => p.direction == "output")].forEach(
    wire => {
      if (newInstance.gate_ids.some(gid => gid == `${namespace}_${wire.id}`) == false) {
        // wire has not been declared as a gate
        const newWireGate = new WireGate(namespace, wire.id, gateBitSizesID[wire.id]);
        // console.log("newGate: ", newWireGate);
        // inputs will be set in child instance
        logicGates[newWireGate.id] = newWireGate;
        newInstance.gate_ids.push(newWireGate.id);
      }
    }
  );

  const createSplitterGate = (concatenation, sourceGateVariable, counter) => {
    //  eg assign {a,b,c} = sourceGate
    //                                   | -------> concat.component[0]
    //   sourceGate -----> splitterGate  | -------> concat.component[1]
    //                                   | -------> concat.component[2]
    let startBit = 0;
    const splitGateID = "split" + counter;
    const newSplitterGate = new SplitterGate(namespace, splitGateID, 0);
    newSplitterGate.inputs.push(sourceGateVariable);

    [...concatenation.components].reverse().forEach(component => {
      const componentGate = Object.values({
        ...logicGates,
        ...outputGates
      }).find(g => g.namespace == namespace && g.name == component.name);
      if (!componentGate) throw new Error("unable to build concatenation");
      const newSplitterSource = new Variable(namespace, splitGateID, [
        new Numeric(startBit + componentGate.bitSize - 1),
        new Numeric(startBit)
      ]);
      componentGate.inputs.push(newSplitterSource);
      newSplitterGate.splitterSources.push(newSplitterSource);
      newSplitterGate.splitterTargets.push(new Variable(namespace, component.name));

      startBit += componentGate.bitSize;
      if (componentGate.inputs > 1) throw new Error("Invalid number of inputs");
    });

    newSplitterGate.state = new Numeric(0, startBit);

    // console.log("new splitter gate: ", newSplitterGate);
    return newSplitterGate;
  };

  // look for any concatenation assigns: assign {wirea, wireb, wirec} = multibitgate
  instanceModule.netAssignments.forEach(net => {
    let counter = 0;
    if (net.id instanceof Concatenation) {
      if (!(net.operationTree instanceof Variable))
        throw new Error("concatenation assign rhs must be variable");
      // net.id = concatenation
      // net.operationTree = variable to multibitgate
      const newGate = createSplitterGate(net.id, net.operationTree, counter);
      counter = counter + 1;
      logicGates[newGate.id] = newGate;
      newInstance.gate_ids.push(newGate.id);
    }
  });

  // gates = compileResult.gates;
  // TODO: ? move pushing outputGatse to after module instantiation

  const isPortDirection = (portid, direction, moduleid) => {
    return moduleDefinitions[moduleid].ports.some(p => p.id == portid && p.direction == direction);
  };

  // process input connection expressions to generate any necessary gates
  // eg mymodule(.input1(~clk))
  // will generate iconnect0 gate and return variable to it
  instanceModule.instantiations
    .filter(x => x.type == "instance")
    .forEach(instDef => {
      instDef.connections
        .filter(connection => isPortDirection(connection.port.id, "input", instDef.module))
        .forEach(connection => {
          connection.value.gateVariable = walkOperationTree(
            namespace, // connection sources are in the parent namespace
            "inconnect",
            connection.value.expr,
            null
          );
        });
    });

  compileResult.gates = {
    ...gates,
    ...logicGates,
    ...inputGates,
    ...outputGates
  }; // for feedback loops need to process logic gates before inputs

  // instantiate a module
  instanceModule.instantiations
    .filter(x => x.type == "instance")
    .forEach(instDef => {
      // recursively create the instance - generating all child isntance gates
      var childInstance = createInstance(moduleDefinitions, compileResult, namespace, instDef);
      newInstance.instance_ids.push(childInstance.id);

      let counter = 0;

      // for each output connection process expression to find the target gate in parent namespace
      // and then add the connection output port to the target gate's inputs
      // this is the same as "assign targetgate = outputport-out"
      instDef.connections
        .filter(connection => isPortDirection(connection.port.id, "output", instDef.module))
        .forEach(connection => {
          if (connection.value.expr instanceof Variable) {
            const targetGate = Object.values({
              ...logicGates,
              ...outputGates
            }).find(g => g.name == connection.value.expr.name);
            if (!targetGate) {
              throw new Error("shouldnt be here - unable to find target gate");
            }
            targetGate.inputs.push(
              new Variable(namespace + "_" + instDef.id, connection.port.id + "-out", null)
            );
          } else if (connection.value.expr instanceof Concatenation) {
            const newGate = createSplitterGate(
              connection.value.expr,
              new Variable(namespace + "_" + instDef.id, connection.port.id + "-out", null),
              counter
            );
            compileResult.gates[newGate.id] = newGate; // push directly to gates as already had gates.push[...logicGates]
            counter = counter + 1;
            newInstance.gate_ids.push(newGate.id);
          } else throw new Error("invalid output connection type");
        });
    });

  // console.log(Object.keys(gates), Object.keys(compileResult.gates));

  // TODO: ? not necessary
  // if (logicGateCount != Object.keys(logicGates).length) throw new Error();

  // gates.push(...logicGates.slice(logicGateCount));

  if (instanceModule.initial) {
    // no need to instantiate statements because statements are always evaluated in local (module instance) namespace
    // using optional namespace overide to setvalue and getvalue for Variable and Operation
    newInstance.initial = instanceModule.initial;
  }

  // set reggate inputs by inspecting always blocks statements
  // reggates ignore inputs when simulating, the inputs are used only by the schematic to illustrate the dependency
  // TODO: Render in different line style
  const blockingAssignments = [];
  let rhsCondition = null;
  const findBlockingAssignments = statements => {
    statements.forEach(s => {
      // debugger;
      if (s.type == "conditional_statement") {
        findBlockingAssignments(s.thenBlock.statements);
        if (s.elseBlock) findBlockingAssignments(s.elseBlock.statements);
      }
      if (s.type == "case_statement") {
        rhsCondition = s.casevar;
        s.caseclauses.forEach(clause => findBlockingAssignments(clause.statements.statements));
        rhsCondition = null;
      }
      if (s.type == "blocking_assignment")
        if (s.lhs.type != "concatenation") {
          blockingAssignments.push(s);
          if (rhsCondition)
            blockingAssignments.push({
              lhs: s.lhs,
              rhs: rhsCondition,
              type: "conditionaldependency"
            });
        }
    });
  };

  const rhsVars = [];
  const findRhsVars = operand => {
    if (operand instanceof Operation) {
      findRhsVars(operand.lhs);
      if (operand.rhs) findRhsVars(operand.rhs);
    }
    if (operand instanceof Variable && !parameters[namespace + "_" + operand.name])
      rhsVars.push(operand);
  };

  if (instanceModule.always) {
    // copy always template in module definition, create an instance specific lastValues for evaluteSensitivites
    // newInstance.always = [...instanceModule.always];
    newInstance.always = instanceModule.always.map(moduleAlways => {
      return {
        sensitivities: moduleAlways.sensitivities.map(moduleSens => {
          return {
            id: moduleSens.id,
            type: moduleSens.type,
            lastValue: null
          };
        }),
        statementTree: moduleAlways.statementTree
      };
    });

    instanceModule.always.forEach(a => {
      // debugger;
      findBlockingAssignments(a.statementTree.statements);
      blockingAssignments.forEach(assign => {
        let lhsGate = Object.values({ ...logicGates, ...inputGates }).find(
          g => g.name == assign.lhs.name
        );

        if ((lhsGate.type != "reg") & (lhsGate.type != "array"))
          throw new Error("blocking assignment lhs should be reg");
        rhsVars.length = 0;
        findRhsVars(assign.rhs);
        a.sensitivities.forEach(sensitivity => {
          if (
            sensitivity.type != "everytime" &&
            !lhsGate.inputs.some(input => input.name == sensitivity.id.name)
          )
            lhsGate.inputs.push(new Variable(namespace, sensitivity.id.name));
        });
        rhsVars
          .filter(x => x.name != lhsGate.name)
          .forEach(x => {
            if (!lhsGate.inputs.some(i => i.name == x.name))
              lhsGate.inputs.push(new Variable(namespace, x.name));
          });
        // lhsGate.inputs.push(
        //   ...rhsVars
        //     .filter(x => x.name != lhsGate.name)
        //     .map(x => new Variable(namespace, x.name))
        // );
        // console.log(lhsGate);
      });
    });
  }

  // console.log("Instance: ", stripReactive(newInstance));
  // console.groupEnd();

  return newInstance;
};

const compile = (currentFile, silent = true) => {
  currentFile.compileResult = {
    gates: {},
    instances: {},
    parameters: {},
    status: "",
    timestamp: null,
    silent
  };

  // create an instance of main module
  const mainInstantiation = {
    id: "main",
    module: "Main",
    connections: [] // instead of instance connections directly convert inputs to control, outputs to response gates
  };

  try {
    createInstance(
      currentFile.parseResult.modules,
      currentFile.compileResult,
      "",
      mainInstantiation
    );
    currentFile.compileResult.status = "pass";
    currentFile.compileResult.timestamp = Date.now();
  } catch (e) {
    currentFile.compileResult.status = "fail";
    currentFile.compileResult.e = e;
    currentFile.compileResult.timestamp = null;
  }

  currentFile.parseResult.modules["Main"].display.forEach(d => {
    currentFile.compileResult.gates[d.id].displayType = d.type;
  });

  // console.log("Instances: ", currentFile.instances);
  // console.log("Gates: ", currentFile.gates);
};

export default compile;
