/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */

// TODO: Reimplement as visitor so don't need to use stacks

import { tree, CommonToken, TerminalNode } from "antlr4";
import { vlgListener } from "../grammar/vlgListener.js";
import { vlgParser } from "../grammar/vlgParser.js";
import Numeric from "./Numeric.js";
import Operation from "./Operation.js";
import Variable from "./Variable.js";

const strip = x => JSON.parse(JSON.stringify(x));

class Listener extends vlgListener {
  constructor() {
    super();
    this.modules = null;
    this.curModule = null;
    this.errors = [];
    this.expressionStack = [];
    this.valueStack = [];
    this.statementBlockStack = [];
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
      instantiations: [],
      netAssignments: []
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
      netAssignments: [],
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
      const dim = portDecCtx.portdim ? this.valueStack.pop() : null;
      this.curModule.ports.push(
        ...ids.map(id => ({
          id: id.getText(),
          direction: dir,
          bitSize: dim ? Math.abs(dim[1] - dim[0]) + 1 : 1,
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
        bitSize: dim ? Math.abs(dim[1] - dim[0]) + 1 : 1,
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
    if (this.statementBlockStack.length > 0)
      throw new Error("enterInitial: statementBlockStack should be empty");
  }

  exitInitial_construct(ctx) {
    this.curModule.initial = {
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      statementTree: this.statementBlockStack.pop()
    };
    console.log("initial = ", this.curModule.initial);
  }

  enterAlways_construct(ctx) {
    if (this.statementBlockStack.length > 0)
      throw new Error("enterAlways: statementBlockStack should be empty");
  }

  exitAlways_construct(ctx) {
    this.curModule.always = {
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      statementTree: this.statementBlockStack.pop()
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

  enterStatement_block(ctx) {
    this.statementBlockStack.push({ type: "block", statements: [] });
  }

  enterBlocking_assignment(ctx) {
    console.groupCollapsed(`Blocking_assignment: ${ctx.getText()}`);
    if (this.expressionStack.length > 0)
      throw new Error(
        `enterBlocking_assignment: expressionStack should be empty, not ${this.expressionStack}`
      );
  }

  exitBlocking_assignment(ctx) {
    const newStatement = {
      type: "blocking_assignment",
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      rhs: this.expressionStack.pop(),
      lhs: this.valueStack.pop() // pop the ids in expressions first
    };
    this.statementBlockStack[
      this.statementBlockStack.length - 1
    ].statements.push(newStatement);
    console.log("Statement: ", strip(newStatement));
    console.groupEnd();
  }

  // Expressions ============================================

  // expression
  // 	: number    																	# atomExpression
  // 	| identifier    															# atomExpression
  // 	| concatenation																# atomExpression
  //  | '(' ex=expression ')'												# parensExpression
  //  | op=(PLUS | MINUS) expression                # unaryExpression
  // 	| expression op=(MUL | DIV) expression				# binaryExpression
  // 	| expression op=(PLUS | MINUS) expression			# binaryExpression
  // 	;

  exitAtomExpression(ctx) {
    //  console.log("atomExpression value stack: ", this.valueStack)
    this.expressionStack.push(this.valueStack.pop());
  }

  exitParensExpression(ctx) {
    const lhs = this.expressionStack.pop();
    this.expressionStack.push(new Operation(lhs, "parens", null));
  }

  exitUnaryExpression(ctx) {
    const lhs = this.expression.stack.pop();
    this.expressionStack.push(new Operation(lhs, ctx.op.text, null));
  }

  exitBinaryExpression(ctx) {
    //  console.log("binaryExpression stack: ", this.expressionStack)
    const rhs = this.expressionStack.pop();
    const lhs = this.expressionStack.pop();
    this.expressionStack.push(new Operation(lhs, ctx.op.text, rhs));
  }

  // expr // gate
  // : identifier																	  # atomExpr
  // | '(' expr ')'																  # parensExpr
  // | op=unary_gate_op expr												# unaryExpr
  // | expr op=binary_gate_op expr									# binaryExpr
  // ;

  exitAtomExpr(ctx) {
    //  console.log("atomExpression value stack: ", this.valueStack)
    this.expressionStack.push(this.valueStack.pop());
  }

  exitParensExpr(ctx) {
    // const lhs = this.expressionStack.pop();
    // this.expressionStack.push(new Operation(lhs, "parens", null));
  }

  exitUnaryExpr(ctx) {
    const lhs = this.expressionStack.pop();
    this.expressionStack.push(new Operation(lhs, ctx.op.getText(), null));
  }

  exitBinaryExpr(ctx) {
    //  console.log("binaryExpression stack: ", this.expressionStack)
    const rhs = this.expressionStack.pop();
    const lhs = this.expressionStack.pop();
    this.expressionStack.push(new Operation(lhs, ctx.op.getText(), rhs));
  }

  // identifier
  // : IDENTIFIER																			#idPlain
  // | IDENTIFIER '[' expression ']'									#idOffset
  // | IDENTIFIER '[' expression ':' expression ']'		#idRange

  exitIdPlain(ctx) {
    this.valueStack.push(new Variable(null, ctx.IDENTIFIER().getText(), null));
  }

  exitIdOffset(ctx) {
    this.valueStack.push(
      new Variable(
        null,
        ctx.IDENTIFIER().getText(),
        this.expressionStack.pop()
        // parseInt(ctx.expression().getText(), 10)
      )
    );
  }

  exitIdRange(ctx) {
    let rend = this.expressionStack.pop();
    let rstart = this.expressionStack.pop();
    this.valueStack.push(
      new Variable(null, ctx.IDENTIFIER().getText(), [rstart, rend])
      // parseInt(ctx.expression(0).getText(), 10),
      // parseInt(ctx.expression(1).getText(), 10)
      // ])
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
    const gateInputs = ctx.ids ? this.valueStack.pop() : [];

    // semantic error if any of the inputs are not defined
    if (gateInputs)
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
      gateType: gateType,
      inputs: gateInputs,
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line }
    });
  }

  // assigns ===========================================

  enterNet_assignment(ctx) {
    console.groupCollapsed(`netAssignment: ${ctx.getText()}`);
    if (this.expressionStack.length > 0)
      throw new Error(
        `enterNet_assignment: expressionStack should be empty, not ${this.expressionStack}`
      );
  }

  exitNet_assignment(ctx) {
    const lvalue = this.valueStack.pop();
    const expr = this.expressionStack.pop();
    this.curModule.netAssignments.push({
      id: lvalue,
      operationTree: expr
    });
    console.log(
      strip(
        this.curModule.netAssignments[this.curModule.netAssignments.length - 1]
      )
    );
    console.groupEnd();
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
    const moduleID = ctx.moduleID.text;
    // check to see if moduleid is defined
    if (!this.isModule(moduleID)) {
      this.addSemanticError(ctx.moduleID, `Undefined module: '${moduleID}'`);
      console.groupEnd();
      return;
    }

    const instanceID = ctx.instanceID.text;
    const connections = ctx.module_connections_list().connections;

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
