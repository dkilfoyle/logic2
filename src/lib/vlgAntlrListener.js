/* eslint-disable */

import { tree, CommonToken, TerminalNode } from "antlr4";
import { vlgListener } from "../grammar/vlgListener.js";
import { vlgParser } from "../grammar/vlgParser.js";

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
    // console.log(node, msg);
    var token;
    if (node instanceof CommonToken) {
      token = node;
    }
    else if (node.symbol instanceof CommonToken) {
      token = node.symbol;
    }
    else {
      throw new Error("node is not commontoken", node);
      // ? check if terminal node and if so use ctx.symbol.line
    }
    this.errors.push({
      startLine: token.line,
      startColumn: token.column + 1,
      endLine: token.line,
      endColumn: token.column + token.text.length + 1,
      msg,
      severity,
    });
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

  isReg(id) {
    return this.curModule.regs.some(reg => reg == id );
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
    return this.isWireOrPort(id) | this.isReg(id)
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
      regs: [],
      instantiations: []
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
      regs: [],
      instantiations: [],
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

  exitReg_declaration(ctx) {
    this.curModule.regs.push(...ctx.identifier_list().ids)
  }

  exitInitial_statement(ctx) {
    this.curModule.initial = {
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      statement: ctx.statement().children[0].statementDescription
    }
    console.log("initial = ", this.curModule.initial)
  }

  // always =================================================

  enterStatement(ctx) {
    console.group(`statement: ${ctx.getText()}`);
  }
  exitStatement(ctx) {
    const childCtx = ctx.getChild(0);
    if (!childCtx.statementDescription) throw new Error("Not implemented yet")
    ctx.statementDescription =childCtx.statementDescription;
    console.log("description: ", ctx.statementDescription);
    console.groupEnd();
  }

  exitAlways_statement(ctx) {
    this.curModule.always = {
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
    }

    if (ctx.event_list().event_every() != null) {
      this.curModule.always.sensitivities = [{
        type: "everytime",
        last: undefined
      }]
    } else {
      this.curModule.always.sensitivities = ctx.event_list().event_primary().map(e => ({
        id: e.IDENTIFIER().getText(),
        type: e.event_type() != null ? e.event_type().getText() : "changed",
        last: undefined
      }))
    }

    this.curModule.always.statement = ctx.statement().children[0].statementDescription;
    console.log("always = ", this.curModule.always);
  }

  enterBlocking_assignment(ctx) {
    console.group(`Blocking_assignment: ${ctx.getText()}`);
  }

  exitBlocking_assignment(ctx) {
    ctx.statementDescription = {
      statement_type: "blocking_assignment",
      lhs: JSON.stringify(ctx.lhs.value),
      rhs: JSON.stringify(ctx.rhs.value)
    };;
    console.log("statementDescription: ", ctx.statementDescription.lhs, ctx.statementDescription.rhs);
    console.groupEnd();
  }

  exitSeq_block(ctx) {
    ctx.statementDescription = {
      statement_type: "seq_block",
      statements: ctx.statement().map(s => JSON.stringify(s.children[0].statementDescription))
    }
  }

  // Expressions ============================================

  // lvalue
	// : identifier
  // | concatenation

  enterLvalue(ctx) {
    console.group(`lValue: ${ctx.getText()}`);
  }
  
  exitLvalue(ctx) {
    const childCtx = ctx.getChild(0);
    if (!childCtx.value) throw new Error("Not implemented yet")
    ctx.value = childCtx.value;
    console.log("value: ", ctx.value);
    console.groupEnd();
  }

  // expression // for general expresions, provides ctx.value
  // : primary																	# primaryExpression
  // | UNARY_OPERATOR primaryExpression         # unaryPrimaryExpression
  // | expression BINARY_OPERATOR expression		# binaryExpression

  enterExpression(ctx) {
    console.group(`expression: ${ctx.getText()}`);
  }

  exitExpression(ctx) {
    const childCtx = ctx.getChild(0);
    if (!childCtx.value) throw new Error("Not implemented yet")
    ctx.value = childCtx.value;
    console.log("value: ", ctx.value);
    console.groupEnd()
  }

  enterPrimary(ctx) {
    console.group(`primary: ${ctx.getText()}`);
  }

  exitPrimary(ctx) {
    const childCtx = ctx.getChild(0);
    if (!childCtx.value) throw new Error("Not implemented yet")
    ctx.value = childCtx.value;
    console.log("value: ", ctx.value);
    console.groupEnd();
  }

  exitUnaryPrimaryExpression(ctx) {
    ctx.value = {
      type: "unary_expression",
      operator: ctx.UNARY_OPERATOR().getText(),
      operand: ctx.primaryExpression().value
    }
  }

  enterBinaryExpression(ctx) {
    console.group(`binaryExpression: ${ctx.getText()}`);
  }

  exitBinaryExpression(ctx) {
    ctx.value = {
      type: "binary_expression",
      operator: ctx.BINARY_OPERATOR().getText(),
      operand1: ctx.primaryExpression(0).value,
      operand2: ctx.primaryExpression(1).value
    }
    console.log("value: ", ctx.value);
    console.groupEnd();
  }

  // primary <-- primaryExpression
	// : number
	// | identifier
	// | concatenation
  // | parens_expression
  
  enterPrimaryExpression(ctx) {
    console.group(`primaryExpression: ${ctx.getText()}`);
  }
  
  exitPrimaryExpression(ctx) {
    const childCtx = ctx.getChild(0);
    if (!childCtx.value) throw new Error("Not implemented yet")
    ctx.value = childCtx.value;
    console.log("value: ", ctx.value);
    console.groupEnd();
  }

  // identifier
	// : IDENTIFIER																			#idPlain
	// | IDENTIFIER '[' expression ']'									#idOffset
	// | IDENTIFIER '[' expression ':' expression ']'		#idRange
  
  exitIdPlain(ctx) {
    ctx.value = {
      type: "identifier",
      value: ctx.IDENTIFIER().getText(),
    }
  }
  exitIdOffset(ctx) {
    ctx.value = {
      type: "identifier",
      value: ctx.IDENTIFIER().getText(),
      offset: parseInt(ctx.expression().getText(),10)
    }
  }
  exitIdRange(ctx) {
    ctx.value = {
      type: "identifier",
      value: ctx.IDENTIFIER().getText(),
      range: [,parseInt(ctx.expression(0).getText(),10),parseInt(ctx.expression(1).getText(),10)]
    }
  }

  // number
	// : decimal_number
	// | binary_number
	// | octal_number
	// | hex_number
  
  exitNumber(ctx) {
    var childCtx = ctx.getChild(0);
    // childCtx is a child of Number and will contain named tokens size and x
    ctx.value = {
      type: "number",
    };
    switch (childCtx.ruleIndex) {
      case vlgParser.RULE_decimal_number:
        ctx.value.format = "decimal";
        ctx.value.size = childCtx.size ? childCtx.size : parseInt(childCtx.x.text,10).toString(2).length;
        ctx.value.decimalValue = parseInt(childCtx.x.text,10);
        break;
      case vlgParser.RULE_binary_number:
        ctx.value.format = "binary";
        ctx.value.size = childCtx.size;
        ctx.value.decimalValue = parseInt(childCtx.x.text,2);
        break;
      case vlgParser.RULE_octal_number:
        ctx.value.format = "octal";
        ctx.value.size = childCtx.size;
        ctx.value.decimalValue = parseInt(childCtx.x.text,8);
        break;
      case vlgParser.RULE_binary_number:
        ctx.value.format = "hex";
        ctx.value.size = childCtx.size;
        ctx.value.decimalValue = parseInt(childCtx.x.text,16);
        break;
      default:
        throw new Error("invalid number format")
    }
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
      .forEach((x) => {
        if (this.isInput(x.id.text))
          newClock.assignments.push({ id: x.id.text, value: parseInt(x.val.text) });
        else
          this.addSemanticError(x.id, `'${x.id.text}' is not a valid main module input`);
      });
    }
  }

  // gates ==================================================

  exitGate_declaration(ctx) {
    const gateType = ctx.gate_type().getText();
    const gateOutput = ctx.identifier_list().ids[0];
    const gateInputs = ctx.identifier_list().ids.slice(1);

    // semantic error if any of the inputs are not defined
    gateInputs.forEach((gateInput, index) => {
      if (!this.isWireOrPort(gateInput)) {
        const idctx = ctx.identifier_list().IDENTIFIER(index + 1); // because IDENTIFER(0) is the output
        this.addSemanticError(idctx.symbol, `'${gateInput}' is not defined as a wire or module port`);
      }
    });

    // semantic error if the output is not a wire or module output
    if (!this.isWireOrOutput(gateOutput)) {
      const idctx = ctx.identifier_list().IDENTIFIER(0); // because IDENTIFER(0) is the output
      this.addSemanticError(idctx.symbol, `'${gateOutput}' is not defined as a wire or module output`);
    }

    this.curModule.instantiations.push({
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

    this.curModule.instantiations.push({
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
