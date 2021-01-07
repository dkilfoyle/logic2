/* eslint-disable no-unused-vars */

// TODO: Reimplement as visitor so don't need to use stacks

import { tree, CommonToken, TerminalNode } from "antlr4";
import { vlgListener } from "../grammar/vlgListener.js";
import { vlgParser } from "../grammar/vlgParser.js";
import Numeric from "./Numeric.js";
import Operation from "./Operation.js";
import Variable from "./Variable.js";

class Listener extends vlgListener {
  constructor() {
    super();
    this.modules = null;
    this.curModule = null;
    this.errors = [];
    this.assign = {};
    this.statementRoot = null;
    this.statementCurrent = null;
    this.expressionStack = null;
    this.valueStack = [];
  }

  // utils

  addSemanticError(node, msg, severity = "warning") {
    console.log(node, msg);
    var token;
    if (node instanceof CommonToken) {
      token = node;
    } else if (node.symbol instanceof CommonToken) {
      token = node.symbol;
    } else {
      throw new Error("node is not commontoken", node);
      // ? check if terminal node and if so use ctx.symbol.line
    }
    this.errors.push({
      startLine: token.line,
      startColumn: token.column + 1,
      endLine: token.line,
      endColumn: token.column + token.text.length + 1,
      msg,
      severity
    });
  }

  getModule(id) {
    return this.modules.find(x => x.id == id);
  }

  isModule(id) {
    return this.modules.some(x => x.id == id);
  }

  isPort(id) {
    return this.curModule.ports.some(port => port.id == id);
  }

  isPortOf(portid, moduleid) {
    return this.getModule(moduleid).ports.some(port => port.id == portid);
  }

  isInput(id) {
    return this.curModule.ports.some(
      port => (port.direction == "input") & (port.id == id)
    );
  }

  isOutput(id) {
    return this.curModule.ports.some(
      port => (port.direction == "output") & (port.id == id)
    );
  }

  isWire(id) {
    return this.curModule.wires.some(wire => wire.id == id);
  }

  isReg(id) {
    return this.curModule.regs.some(reg => reg.id == id);
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

  isWireOrPortOrReg(id) {
    return this.isWireOrPort(id) | this.isReg(id);
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
          column: ctx.start.column
        },
        stop: {
          line: ctx.stop.line,
          column: ctx.stop.column
        }
      },
      ports: [],
      wires: [],
      regs: [],
      instantiations: []
    };
    console.group("enterModule: ", ctx.IDENTIFIER().getText());
  }
  exitModule() {
    console.log("curModule: ", this.curModule);
    this.modules.push(this.curModule);
    this.curModule = null;
    console.groupEnd();
  }
  enterModule_main(ctx) {
    this.curModule = {
      id: "Main",
      sourceLocation: {
        start: {
          line: ctx.start.line,
          column: ctx.start.column
        },
        stop: {
          line: ctx.stop.line,
          column: ctx.stop.column
        }
      },
      ports: [],
      wires: [],
      regs: [],
      instantiations: [],
      clock: []
    };
    console.group("enterModule: Main ");
  }

  exitModule_main() {
    console.log("curModule: ", this.curModule);
    this.modules.push(this.curModule);
    this.curModule = null;
    console.groupEnd();
  }

  exitModule_ports(ctx) {
    const portDeclarations = ctx.port_declaration();
    portDeclarations.forEach(portDecCtx => {
      const dir = portDecCtx.port_direction().getText();
      const ids = portDecCtx.port_identifier_list().IDENTIFIER();
      const dim = ctx.portdim ? this.valueStack.pop() : null;
      this.curModule.ports.push(
        ...ids.map(id => ({
          id: id.getText(),
          direction: dir,
          bitSize: dim ? dim[1] - dim[0] + 1 : 1,
          dim
        }))
      );
    });
    console.log("exitModule_ports: ", this.curModule.ports);
  }

  exitNet_declaration(ctx) {
    const dim = ctx.netdim ? this.valueStack.pop() : null;
    ctx.ids.IDENTIFIER().forEach(id => {
      this.curModule.wires.push({
        id: id.getText(),
        bitSize: dim ? dim[1] - dim[0] + 1 : 1,
        dim
      });
    });
  }

  exitReg_declaration(ctx) {
    const dim = ctx.regdim ? this.valueStack.pop() : null;
    ctx.ids.IDENTIFIER().forEach(id => {
      this.curModule.regs.push({
        id: id.getText(),
        dim,
        bitSize: dim ? Math.abs(dim[1] - dim[0]) + 1 : 1
      });
    });
  }

  enterInitial_construct(ctx) {
    this.statementRoot = {
      type: "root_block",
      parent: null,
      statements: []
    };
    this.statementCurrent = this.statementRoot;
  }

  exitInitial_construct(ctx) {
    this.curModule.initial = {
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      statementTree: this.statementRoot
    };
    console.log("initial = ", this.curModule.initial);
  }

  enterAlways_construct(ctx) {
    this.statementRoot = {
      type: "root_block",
      parent: null,
      statements: []
    };
    this.statementCurrent = this.statementRoot;
  }

  exitAlways_construct(ctx) {
    this.curModule.always = {
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      statementTree: this.statementRoot
    };

    if (ctx.event_list().event_every() != null) {
      this.curModule.always.sensitivities = [
        {
          type: "everytime",
          last: null
        }
      ];
    } else {
      this.curModule.always.sensitivities = ctx
        .event_list()
        .event_primary()
        .map(e => ({
          id: this.valueStack.pop(),
          type: e.event_type() != null ? e.event_type().getText() : "changed",
          last: undefined
        }));
    }

    console.log("always = ", this.curModule.always);
  }

  enterStatement(ctx) {
    console.group(`statement: ${ctx.getText()}`);
  }

  exitStatement(ctx) {
    console.log("exitStatement: description: ", this.statementCurrent);
    console.groupEnd();
    // this.statementCurrent = this.statementCurrent.parent;
  }

  enterBlocking_assignment(ctx) {
    console.groupCollapsed(`Blocking_assignment: ${ctx.getText()}`);
    if (!this.expressionStack == null)
      throw new Error(
        `enterBlocking_assignment: expressionStack should be null, not ${this.expressionStack}`
      );
    this.expressionStack = [];
  }

  exitBlocking_assignment(ctx) {
    const newStatement = {
      type: "blocking_assignment",
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      rhs: this.expressionStack.pop(),
      lhs: this.valueStack.pop() // pop the ids in expressions first
    };
    this.statementCurrent.statements.push(newStatement);
    console.log("Statement: ", newStatement);
    console.groupEnd();
  }

  enterSeq_block(ctx) {
    console.group(`Seq_block: ", ${ctx.getText()}`);
    const newSeqBlock = {
      type: "seq_block",
      parent: this.statementCurrent,
      statements: []
    };
    this.statementCurrent.statements.push(newSeqBlock);
    this.statementCurrent = newSeqBlock;
  }

  exitSeq_block(ctx) {
    console.log("Statements: ", this.statementCurrent.statements);
    console.groupEnd();
    this.statementCurrent = this.statementCurrent.parent;
  }

  // Expressions ============================================

  // expression
  // 	: numberStack																	# atomExpression
  // 	| identifierStack															# atomExpression
  // 	| concatenation																# atomExpression
  //   | '(' expression ')'													# parensExpression
  //   | op=(PLUS | MINUS) expression                # unaryExpression
  // 	| expression op=(MUL | DIV) expression				# binaryExpression
  // 	| expression op=(PLUS | MINUS) expression			# binaryExpression
  // 	;

  exitAtomExpression(ctx) {
    //  console.log("atomExpression value stack: ", this.valueStack)
    this.expressionStack.push(this.valueStack.pop());
  }

  exitUnaryExpression(ctx) {
    const lhs = this.expression.stack.pop();
    const op = this.op.ruleIndex == vlgParser.RULE_PLUS ? "add" : "sub";
    this.expressionStack.push(new Operation(lhs, op, null));
  }

  exitBinaryExpression(ctx) {
    //  console.log("binaryExpression stack: ", this.expressionStack)
    const rhs = this.expressionStack.pop();
    const lhs = this.expressionStack.pop();
    let op;
    switch (ctx.op.text) {
      case "+":
        op = "add";
        break;
      case "-":
        op = "sub";
        break;
      case "*":
        op = "mul";
        break;
      case "/":
        op = "div";
        break;
    }
    this.expressionStack.push(new Operation(lhs, op, rhs));
  }

  // identifier
  // : IDENTIFIER																			#idPlain
  // | IDENTIFIER '[' expression ']'									#idOffset
  // | IDENTIFIER '[' expression ':' expression ']'		#idRange

  exitIdPlain(ctx) {
    this.valueStack.push(new Variable(ctx.IDENTIFIER().getText(), null));
  }

  exitIdOffset(ctx) {
    this.valueStack.push(
      new Variable(
        ctx.IDENTIFIER().getText(),
        parseInt(ctx.expression().getText(), 10)
      )
    );
  }

  exitIdRange(ctx) {
    this.valueStack.push(
      new Variable(ctx.IDENTIFIER().getText(), [
        parseInt(ctx.expression(0).getText(), 10),
        parseInt(ctx.expression(1).getText(), 10)
      ])
    );
  }

  exitIdentifier_list(ctx) {
    this.valueStack.push(
      ctx
        .identifier()
        .map(() => this.valueStack.pop())
        .reverse()
    );
  }

  exitRange(ctx) {
    this.valueStack.push([
      parseInt(ctx.rangestart.text, 10),
      parseInt(ctx.rangeend.text, 10)
    ]);
  }

  // number
  // : Decimal_number		#decimal
  // | Octal_number			#octal
  // | Binary_number		#binary
  // | Hex_number				#hex
  // ;

  // Decimal_number
  //  : Unsigned_number
  //  | Size? Decimal_base)? Unsigned_number
  //  ;

  exitDecimal(ctx) {
    const x = ctx.getText();
    if (x == +x) {
      // Decimal_number: Unsigned_number
      this.valueStack.push(new Numeric(parseInt(x, 10), null, "decimal"));
      return;
    }

    let sizeStr = x.substring(0, x.indexOf("'"));
    let size = sizeStr != "" ? parseInt(sizeStr) : null;

    const valueStart = Math.max(x.indexOf("D", x.indexOf("d")));
    if (valueStart == -1) throw new Error("exitDecimal: shouldn't be here");

    this.valueStack.push(
      new Numeric(parseInt(x.substring(valueStart), 10), size, "decimal")
    );
  }

  exitBinary(ctx) {
    const x = ctx.getText();

    let sizeStr = x.substring(0, x.indexOf("'"));
    let size = sizeStr != "" ? parseInt(sizeStr) : null;

    const valueStart = Math.max(x.indexOf("B", x.indexOf("b")));
    if (valueStart == -1) throw new Error("exitBinary: shouldn't be here");

    this.valueStack.push(
      new Numeric(parseInt(x.substring(valueStart), 2), size, "binary")
    );
  }

  exitOctal(ctx) {
    const x = ctx.getText();

    let sizeStr = x.substring(0, x.indexOf("'"));
    let size = sizeStr != "" ? parseInt(sizeStr) : null;

    const valueStart = Math.max(x.indexOf("O", x.indexOf("o")));
    if (valueStart == -1) throw new Error("exitOctal: shouldn't be here");

    this.valueStack.push(
      new Numeric(parseInt(x.substring(valueStart), 8), size, "octal")
    );
  }

  exitHex(ctx) {
    const x = ctx.getText();

    let sizeStr = x.substring(0, x.indexOf("'"));
    let size = sizeStr != "" ? parseInt(sizeStr) : null;

    const valueStart = Math.max(x.indexOf("H", x.indexOf("h")));
    if (valueStart == -1) throw new Error("exitHex: shouldn't be here");

    this.valueStack.push(
      new Numeric(parseInt(x.substring(valueStart), 16), size, "hex")
    );
  }

  // test bench =============================================

  exitTest_time(ctx) {
    const time_stamp = parseInt(ctx.time_stamp().num.text);
    const newClock = { time: time_stamp, assignments: [] };
    this.curModule.clock.push(newClock);
    if (ctx.time_assignment_list()) {
      ctx
        .time_assignment_list()
        .time_assignment()
        .forEach(x => {
          if (this.isInput(x.id.text))
            newClock.assignments.push({
              id: x.id.text,
              value: parseInt(x.val.text)
            });
          else
            this.addSemanticError(
              x.id,
              `'${x.id.text}' is not a valid main module input`
            );
        });
    }
  }

  // gates ==================================================

  exitGate_instantiation(ctx) {
    const gateType = ctx.gate_type().getText();
    const gateOutput = ctx.gateID.text;
    const gateInputs = this.valueStack.pop();

    // semantic error if any of the inputs are not defined
    gateInputs.forEach((gateInput, index) => {
      if (!this.isWireOrPort(gateInput.name)) {
        const idctx = ctx.identifier_list().identifier(index);
        this.addSemanticError(
          idctx.symbol,
          `'${gateInput.name}' is not defined as a wire or module port`
        );
      }
    });

    // semantic error if the output is not a wire or module output
    if (!this.isWireOrOutput(gateOutput)) {
      const idctx = ctx.gateID;
      this.addSemanticError(
        idctx.symbol,
        `'${gateOutput}' is not defined as a wire or module output`
      );
    }

    this.curModule.instantiations.push({
      type: "gate",
      id: gateOutput,
      gate: gateType,
      inputs: gateInputs,
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line }
    });
  }

  // assigns ===========================================

  enterAssignment(ctx) {
    // console.log("enterAssignment: ", ctx.IDENTIFIER().getText());
    this.assign = {
      id: ctx.IDENTIFIER().getText(),
      n: 0,
      gates: [],
      stack: []
    };
  }

  exitAssignment(ctx) {
    this.assign.gates[this.assign.gates.length - 1].id = this.assign.id;
    this.curModule.instantiations.push(...this.assign.gates);
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
    const id = this.assign.id + this.assign.n;
    this.curModule.wires.push(id); // intermediary gates need a wire for namespace mapping
    this.assign.gates.push({
      type: "gate",
      id,
      gate: op,
      inputs: [left, right],
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line }
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
    this.curModule.wires.push({ id, bitSize: 1 }); // intermediary gates need a wire for namespace mapping
    this.assign.gates.push({
      type: "gate",
      id,
      gate: "not",
      inputs: [right],
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line }
    });
    this.assign.n = this.assign.n + 1;
    this.assign.stack.push(id);
  }

  // instances =========================================

  exitModule_connections_list(ctx) {
    ctx.connections = ctx
      .named_port_connection()
      .reverse() // reverse in order to pop the identifiers in the correct order
      .map(x => {
        return {
          port: { id: x.portID.text, token: x.portID },
          value: { id: this.valueStack.pop(), token: x.value }
        };
      });
  }

  enterModule_instantiation(ctx) {
    console.groupCollapsed("enterModule_instantiation: ", ctx.moduleID.text);
  }

  exitModule_instantiation(ctx) {
    const connections = ctx.module_connections_list().connections;
    const moduleID = ctx.moduleID.text;
    const instanceID = ctx.instanceID.text;

    // check to see if moduleid is defined
    if (!this.isModule(moduleID)) {
      this.addSemanticError(ctx.moduleID, `Undefined module: '${moduleID}'`);
    }

    console.log(`Module ${moduleID} connections: `, connections);

    // check for valid connections
    connections.forEach(connection => {
      if (!this.isPortOf(connection.port.id, moduleID))
        this.addSemanticError(
          connection.port.token,
          `Invalid port: '${connection.port.id}' is not defined in module '${moduleID}'`
        );
      if (!this.isWireOrPort(connection.value.id.name))
        this.addSemanticError(
          connection.value.token,
          `Invalid value: '${connection.value.id.name}' is not a defined wire or port in module '${moduleID}
        '`
        );
    });

    const newInstance = {
      type: "instance",
      id: instanceID,
      module: moduleID,
      connections
    };

    this.curModule.instantiations.push(newInstance);

    console.log("newInstance: ", newInstance);
    console.groupEnd();
  }
}

export default function walk(ast) {
  var listener = new Listener();
  tree.ParseTreeWalker.DEFAULT.walk(listener, ast);
  return listener;
}
