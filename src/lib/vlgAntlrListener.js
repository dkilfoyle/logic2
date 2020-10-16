/* eslint-disable */

import { tree, CommonToken } from "antlr4";
import { vlgListener } from "../grammar/vlgListener.js";

class Listener extends vlgListener {
  constructor() {
    super();
    this.modules = null;
    this.curModule = null;
    this.errors = [];
    this.assign = {};
  }

  // utils

  addSemanticError(node, msg, severity = "warning") {
    if (node instanceof CommonToken) {
      const token = node;
      this.errors.push({
        startLine: token.line,
        startColumn: token.column + 1,
        endLine: token.line,
        endColumn: token.column + token.text.length + 1,
        msg,
        severity,
      });
    } else {
      throw new Error("node is not commontoken", node);
      // ? check if terminal node and if so use ctx.symbol.line
    }
  }

  getModule(id) {
    return this.modules.find((x) => x.id == id);
  }

  isModule(id) {
    return this.modules.some((x) => x.id == id);
  }

  isPort(id) {
    return this.curModule.ports.some((port) => port.id == id);
  }

  isPortOf(portid, moduleid) {
    return this.getModule(moduleid).ports.some((port) => port.id == portid);
  }

  isInput(id) {
    return this.curModule.ports.some((port) => (port.type == "input") & (port.id == id));
  }

  isOutput(id) {
    return this.curModule.ports.some((port) => (port.type == "output") & (port.id == id));
  }

  isWire(id) {
    return this.curModule.wires.some((wire) => wire == id);
  }

  isWireOrInput(id) {
    return this.isInput(id) | this.isWire(id);
  }

  isWireOrOutput(id) {
    return this.isOutput(id) | this.isWire(id);
  }

  isWireOrPort(id) {
    return this.isPort(id) | this.isWire(id);
  }

  // node listeners

  enterSource_text() {
    this.modules = [];
  }
  enterModule(ctx) {
    this.curModule = {
      id: ctx.IDENTIFIER().getText(),
      sourceLocation: {
        start: {
          line: ctx.start.line,
          column: ctx.start.column,
        },
        stop: {
          line: ctx.stop.line,
          column: ctx.stop.column,
        },
      },
      ports: [],
      wires: [],
      statements: [],
    };
  }
  exitModule() {
    this.modules.push(this.curModule);
    this.curModule = null;
  }
  enterModule_main(ctx) {
    this.curModule = {
      id: "Main",
      sourceLocation: {
        start: {
          line: ctx.start.line,
          column: ctx.start.column,
        },
        stop: {
          line: ctx.stop.line,
          column: ctx.stop.column,
        },
      },
      ports: [],
      wires: [],
      statements: [],
      clock: [],
    };
  }
  exitModule_main() {
    this.modules.push(this.curModule);
    this.curModule = null;
  }
  exitModule_ports(ctx) {
    const portDeclarations = ctx.ansi_port_declaration();
    portDeclarations.forEach((portDecCtx) => {
      const dir = portDecCtx.port_direction().getText();
      const ids = portDecCtx.identifier_list().ids;
      // this.curModule[dir + "s"].push(...ids);
      this.curModule.ports.push(...ids.map((id) => ({ id: id, type: dir })));
    });
  }

  exitIdentifier_list(ctx) {
    ctx.ids = ctx.IDENTIFIER().map((x) => x.getText());
  }

  exitNet_declaration(ctx) {
    this.curModule.wires.push(...ctx.identifier_list().ids);
  }

  // test bench =============================================

  exitTest_time(ctx) {
    const time_stamp = parseInt(ctx.time_stamp().num.text);
    const newClock = { time: time_stamp, assignments: [] };
    this.curModule.clock.push(newClock);
    ctx
      .time_assignment_list()
      .time_assignment()
      .forEach((x) => {
        newClock.assignments.push({ id: x.id.text, value: parseInt(x.val.text) });
      });
  }

  // gates ==================================================

  exitGate_declaration(ctx) {
    const gateType = ctx.gate_type().getText();
    const gateOutput = ctx.identifier_list().ids[0];
    const gateInputs = ctx.identifier_list().ids.slice(1);

    // semantic error if any of the inputs are not defined
    gateInputs.forEach((gateInput, index) => {
      if (!this.isWireOrInput(gateInput)) {
        const idctx = ctx.identifier_list().IDENTIFIER(index + 1); // because IDENTIFER(0) is the output
        this.addSemanticError(idctx.symbol, `'${gateInput}' is not defined as a wire or module input`);
      }
    });

    // semantic error if the output is not a wire or module output
    if (!this.isWireOrOutput(gateOutput)) {
      const idctx = ctx.identifier_list().IDENTIFIER(0); // because IDENTIFER(0) is the output
      this.addSemanticError(idctx.symbol, `'${gateOutput}' is not defined as a wire or module output`);
    }

    this.curModule.statements.push({
      type: "gate",
      id: gateOutput,
      gate: gateType,
      inputs: gateInputs,
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
    });
  }

  // assigns ===========================================

  enterAssignment(ctx) {
    // console.log("enterAssignment: ", ctx.IDENTIFIER().getText());
    this.assign = {
      id: ctx.IDENTIFIER().getText(),
      n: 0,
      gates: [],
      stack: [],
    };
  }

  exitAssignment(ctx) {
    this.assign.gates[this.assign.gates.length - 1].id = this.assign.id;
    this.curModule.statements.push(...this.assign.gates);
  }

  exitBinaryExpr(ctx) {
    const right = this.assign.stack.pop();
    const left = this.assign.stack.pop();
    let op = ctx.binary_operator().getText();
    switch (op) {
      case "&":
        op = "and";
        break;
      case "~&":
        op = "nand";
        break;
      case "|":
        op = "or";
        break;
      case "~|":
        op = "nor";
        break;
      case "^":
        op = "xor";
        break;
      default:
        throw new Error("invalid assign binary operator");
    }
    const id = this.assign.id + "_" + this.assign.n;
    this.curModule.wires.push(id); // intermediary gates need a wire for namespace mapping
    this.assign.gates.push({
      type: "gate",
      id,
      gate: op,
      inputs: [left, right],
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
    });
    this.assign.n = this.assign.n + 1;
    this.assign.stack.push(id);
  }

  exitIdExpr(ctx) {
    const id = ctx.IDENTIFIER().getText();
    if (!this.isWireOrPort(id)) {
      this.addSemanticError(ctx.IDENTIFIER(), `Undefined variable: '${id}'`);
    }
    this.assign.stack.push(id);
  }

  exitNegateExpr(ctx) {
    const right = this.assign.stack.pop();
    const id = this.assign.id + "_" + this.assign.n;
    // console.log("exitNegateExpr: ", id, right);
    this.curModule.wires.push(id); // intermediary gates need a wire for namespace mapping
    this.assign.gates.push({
      type: "gate",
      id,
      gate: "not",
      inputs: [right],
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
    });
    this.assign.n = this.assign.n + 1;
    this.assign.stack.push(id);
  }

  // instances =========================================

  exitModule_connections_list(ctx) {
    ctx.connections = ctx.named_port_connection().map((x) => {
      return { port: { id: x.port.text, token: x.port }, value: { id: x.value.text, token: x.value } };
    });
  }

  exitModule_instantiation(ctx) {
    const connections = ctx.module_connections_list().connections;
    const moduleid = ctx.moduleid.text;
    const instanceid = ctx.instanceid.text;

    // check to see if moduleid is defined
    if (!this.isModule(moduleid)) {
      this.addSemanticError(ctx.moduleid, `Undefined module: '${moduleid}'`);
    }

    // check for valid connections
    connections.forEach((connection) => {
      if (!this.isPortOf(connection.port.id, moduleid))
        this.addSemanticError(connection.port.token, `Invalid port: '${connection.port.id}' is not defined in module '${moduleid}'`);
      if (!this.isWireOrPort(connection.value.id))
        this.addSemanticError(
          connection.value.token,
          `Invalid value: '${connection.value.id}' is not a defined wire or port in module '${this.curModule.id}
        '`
        );
    });

    this.curModule.statements.push({
      type: "instance",
      id: instanceid,
      module: moduleid,
      connections,
    });
  }
}

export default function walk(ast) {
  var listener = new Listener();
  tree.ParseTreeWalker.DEFAULT.walk(listener, ast);
  return listener;
}
