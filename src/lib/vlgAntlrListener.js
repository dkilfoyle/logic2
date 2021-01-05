/* eslint-disable */

import { tree, CommonToken, TerminalNode } from "antlr4";
import { vlgListener } from "../grammar/vlgListener.js";
import { vlgParser } from "../grammar/vlgParser.js";
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
  }

  // utils

  addSemanticError(node, msg, severity = "warning") {
    console.log(node, msg);
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
    return this.curModule.ports.some((port) => (port.direction == "input") & (port.id == id));
  }

  isOutput(id) {
    return this.curModule.ports.some((port) => (port.direction == "output") & (port.id == id));
  }

  isWire(id) {
    return this.curModule.wires.some((wire) => wire.id == id);
  }

  isReg(id) {
    return this.curModule.regs.some(reg => reg.id == id );
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
    console.group("enterModule: ", ctx.IDENTIFIER().getText())
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
    console.group("enterModule: Main ")
  }

  exitModule_main() {
    console.log("curModule: ", this.curModule);
    this.modules.push(this.curModule);
    this.curModule = null;
    console.groupEnd();
  }

  exitModule_ports(ctx) {
    const portDeclarations = ctx.port_declaration();
    portDeclarations.forEach((portDecCtx) => {
      const dir = portDecCtx.port_direction().getText();
      const ids = portDecCtx.port_identifier_list().IDENTIFIER();
      const dim = ctx.portdim ? ctx.portdim.value : null;
      this.curModule.ports.push(...ids.map((id) => ({
        id: id.getText(),
        direction: dir,
        bitSize: dim ? dim[1]-dim[0] + 1 : 1,
        dim
      })));
    });
    console.log("exitModule_ports: ", this.curModule.ports)
  }

  exitNet_declaration(ctx) {
    const dim = ctx.netdim ? ctx.netdim.value : null;
    ctx.ids.IDENTIFIER().forEach(id => {
      this.curModule.wires.push({
        id: id.getText(),
        bitSize: dim ? dim[1]-dim[0] + 1 : 1,
        dim
      })
    })
  }

  exitReg_declaration(ctx) {
    const dim = ctx.regdim ? ctx.regdim.value : null;
    ctx.ids.IDENTIFIER().forEach(id => {
      this.curModule.regs.push({
        id: id.getText(),
        dim,
        bitSize: dim ? dim[1]-dim[0] + 1 : 1,
      })
    })
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
    }
    console.log("initial = ", this.curModule.initial)
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
    }

    if (ctx.event_list().event_every() != null) {
      this.curModule.always.sensitivities = [{
        type: "everytime",
        last: null
      }]
    } else {
      this.curModule.always.sensitivities = ctx.event_list().event_primary().map(e => ({
        id: e.identifier().value,
        type: e.event_type() != null ? e.event_type().getText() : "changed",
        last: undefined
      }))
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
    console.group(`Blocking_assignment: ${ctx.getText()}`);
  }

  exitBlocking_assignment(ctx) {
    const newStatement = {
      type: "blocking_assignment",
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      lhs: {...ctx.lhs.value},
      rhs: {...ctx.rhs.value}
    }
    this.statementCurrent.statements.push(newStatement);
    console.log("exitBlocking: ", newStatement);
    console.groupEnd();
  }

  enterSeq_block(ctx) {
    console.group(`Seq_block: ", ${ctx.getText()}`);
    const newSeqBlock = {
      type: "seq_block",
      parent: this.statementCurrent,
      statements: []
    }
    this.statementCurrent.statements.push(newSeqBlock);
    this.statementCurrent = newSeqBlock;
  }

  exitSeq_block(ctx) {
    console.log("Statements: ", this.statementCurrent.statements)
    console.groupEnd();
    this.statementCurrent = this.statementCurrent.parent;
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

  /*
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
  */

 /* ===========================

expression 
  : factor
  | expression op=(MUL | DIV) expression				# binaryExpression
  | expression op=(PLUS | MINUS) expression			# binaryExpression
  ;

factor
 : op=(PLUS | MINUS) factor										# unaryExpression
 | '(' expression ')'													# parenExpression
 | atom																				# atomExpression
 ;

atom
 : number               
 | identifier
 | concatenation
 ;
 */


 exitNumberAtomExpression(ctx) {
   this.expression.stack.push(ctx.value)
 }


  // identifier
	// : IDENTIFIER																			#idPlain
	// | IDENTIFIER '[' expression ']'									#idOffset
	// | IDENTIFIER '[' expression ':' expression ']'		#idRange
  
  exitIdPlain(ctx) {
    ctx.value = new Variable(ctx.IDENTIFIER().getText(), null)
  }
  exitIdOffset(ctx) {
    ctx.value = new Variable(ctx.IDENTIFIER().getText(), parseInt(ctx.expression().getText(),10))
  }
  exitIdRange(ctx) {
    ctx.value = new Variable(ctx.IDENTIFIER().getText(), [parseInt(ctx.expression(0).getText(),10), parseInt(ctx.expression(1).getText(),10)])
  }

  exitIdentifier_list(ctx) {
    ctx.ids = ctx.identifier().map((x) => x.value);
  }

  exitRange(ctx) {
    ctx.value = [parseInt(ctx.rangestart.text, 10), parseInt(ctx.rangeend.text, 10)];
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
      case vlgParser.RULE_Decimal_number:
        ctx.value.format = "decimal";
        let x = parseInt(childCtx.getText(),10);
        ctx.value.size = childCtx.Size 
          ? parseInt(childCtx.Size().getText(), 10)
          : parseInt(x).toString(2).length;
        ctx.value.decimalValue = x; //parseInt(childCtx.Decimal_value().getText(), 10);
        break;
      case vlgParser.RULE_Binary_number:
        ctx.value.format = "binary";
        ctx.value.size = parseInt(childCtx.Size().getText(), 10);
        ctx.value.decimalValue = parseInt(childCtx.Binary_value().getText(), 2);
        break;
      case vlgParser.RULE_Octal_number:
        ctx.value.format = "octal";
        ctx.value.size = parseInt(childCtx.Size().getText(), 10);
        ctx.value.decimalValue = parseInt(childCtx.Octal_value().getText(), 8);
        break;
      case vlgParser.RULE_Hex_number:
        ctx.value.format = "hex";
        ctx.value.size = parseInt(childCtx.Size().getText(), 10);
        ctx.value.decimalValue = parseInt(childCtx.Hex_value().getText(), 16);
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

  exitGate_instantiation(ctx) {
    const gateType = ctx.gate_type().getText();
    const gateOutput = ctx.gateID.text; 
    const gateInputs = ctx.identifier_list().ids;

    // semantic error if any of the inputs are not defined
    gateInputs.forEach((gateInput, index) => {
      if (!this.isWireOrPort(gateInput.name)) {
        const idctx = ctx.identifier_list().identifier(index); 
        this.addSemanticError(idctx.symbol, `'${gateInput.name}' is not defined as a wire or module port`);
      }
    });

    // semantic error if the output is not a wire or module output
    if (!this.isWireOrOutput(gateOutput)) {
      const idctx = ctx.gateID; 
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
    this.curModule.wires.push({id, bitSize: 1}); // intermediary gates need a wire for namespace mapping
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
      return { port: { id: x.portID.text, token: x.portID }, value: { id: x.value.value, token: x.value } };
    });
  }

  enterModule_instantiation(ctx) {
    console.group("enterModule_instantiation: ", ctx.moduleID.text)
  }

  exitModule_instantiation(ctx) {
    const connections = ctx.module_connections_list().connections;
    const moduleID = ctx.moduleID.text;
    const instanceID = ctx.instanceID.text;

    // check to see if moduleid is defined
    if (!this.isModule(moduleID)) {
      this.addSemanticError(ctx.moduleID, `Undefined module: '${moduleID}'`);
    }

    console.log(`Module ${moduleID} connections: `, connections)

    // check for valid connections
    connections.forEach((connection) => {
      if (!this.isPortOf(connection.port.id, moduleID))
        this.addSemanticError(connection.port.token, `Invalid port: '${connection.port.id}' is not defined in module '${moduleID}'`);
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
      connections,
    }

    this.curModule.instantiations.push(newInstance);

    console.log("newInstance: ", newInstance)
    console.groupEnd();
  }
}

export default function walk(ast) {
  var listener = new Listener();
  tree.ParseTreeWalker.DEFAULT.walk(listener, ast);
  return listener;
}
