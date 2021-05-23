import { CommonTokenStream, InputStream, error } from "antlr4";
import { tree, CommonToken } from "antlr4";

import { vlgLexer } from "../grammar/vlgLexer.js";
import { vlgParser } from "../grammar/vlgParser.js";
import { vlgListener } from "../grammar/vlgListener.js";

import Numeric from "./Numeric.js";
import Operation from "./Operation.js";
import TernOperation from "./TernOperation.js";
import Variable from "./Variable.js";
import Concatenation from "./Concatenation.js";

class Listener extends vlgListener {
  constructor() {
    super();
    this.modules = {};
    this.curModule = null;
    this.errors = [];
    this.expressionStack = [];
    this.valueStack = [];
    this.statementBlockStack = [];
  }

  // utils

  addSemanticError(node, msg, severity = "warning") {
    // console.log(node, msg);
    var token;
    if (node instanceof CommonToken) {
      token = node;
    } else if (node.symbol instanceof CommonToken) {
      token = node.symbol;
    } else if (node.start instanceof CommonToken) {
      token = node.start;
    } else if (node.start) {
      token = node;
    } else {
      throw new Error("node is not commontoken", node);
      // ? check if terminal node and if so use ctx.symbol.line
    }
    this.errors.push({
      startLine: token.line,
      startColumn: token.column + 1,
      endLine: token.line,
      endColumn: token.column + 2 + (token.stop - token.start), //column + token.text.length + 1,
      msg,
      severity
    });
  }

  isModule(id) {
    return this.modules[id];
  }

  isPort(id) {
    return this.curModule.ports.some(port => port.id == id);
  }

  isPortOf(portid, moduleid) {
    return this.modules[moduleid].ports.some(port => port.id == portid);
  }

  isInput(id) {
    return this.curModule.ports.some(port => (port.direction == "input") & (port.id == id));
  }

  isOutput(id) {
    return this.curModule.ports.some(port => (port.direction == "output") & (port.id == id));
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

  isWireOrRegOrOutput(id) {
    return this.isWire(id) | this.isReg(id) | this.isOutput(id);
  }

  getTokenLocation(token) {
    return {
      line: token.line,
      column: token.column,
      start: token.start,
      stop: token.stop
    };
  }

  // node listeners

  enterSource_text() {
    this.modules = {};
    console.groupCollapsed("ParserListener");
  }

  exitSource_text() {
    console.groupEnd();
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
      always: [],
      ports: [],
      wires: [],
      regs: [],
      moduleParameters: {},
      instantiations: [],
      netAssignments: []
    };
    console.groupCollapsed("enterModule: ", ctx.IDENTIFIER().getText());
  }
  exitModule() {
    console.log("curModule: ", this.curModule);
    this.modules[this.curModule.id] = this.curModule;
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
      always: [],
      ports: [],
      wires: [],
      regs: [],
      moduleParameters: {},
      instantiations: [],
      netAssignments: [],
      clock: [],
      display: [],
      meta: {}
    };
    console.groupCollapsed("enterModule: Main ");
  }

  exitModule_main() {
    console.log("curModule: ", this.curModule);
    this.modules[this.curModule.id] = this.curModule;
    this.curModule = null;
    console.groupEnd();
  }

  exitModule_parameter(ctx) {
    const paramName = ctx.IDENTIFIER().getText();
    this.curModule.moduleParameters[paramName] = this.valueStack.pop();
  }

  exitModule_ports() {
    console.log("exitModule_ports: ", this.curModule.ports);
  }

  exitPort_declaration(ctx) {
    const dir = ctx.port_direction().getText();
    const ids = ctx.port_identifier_list().IDENTIFIER();
    const bitDim = ctx.bitDim ? this.valueStack.pop() : null;
    this.curModule.ports.push(
      ...ids.map(id => ({
        id: id.getText(),
        direction: dir,
        bitDim
      }))
    );
    // if the output is declared as a reg eg output reg sum
    if (dir == "output" && ctx.reg) {
      ids.forEach(id => {
        this.curModule.regs.push({
          id: id.getText(),
          bitDim
        });
      });
    }
  }

  exitLocalparam_declaration(ctx) {
    const paramName = ctx.IDENTIFIER().getText();
    this.curModule.moduleParameters[paramName] = this.expressionStack.pop();
  }

  exitNet_declaration(ctx) {
    const bitDim = ctx.bitDim ? this.valueStack.pop() : null;
    ctx.ids.IDENTIFIER().forEach(id => {
      this.curModule.wires.push({
        id: id.getText(),
        // bitSize: dim ? Math.abs(dim[1] - dim[0]) + 1 : 1,
        bitDim
      });
    });
  }

  exitReg_declaration(ctx) {
    const ids = this.valueStack.pop(); // identifier_list = array of variables
    const newRegs = [];
    ids.forEach(v => {
      if (v.offsetType == "index") throw new Error("invalid reg declaration arraydim");
      newRegs.push({
        id: v.name,
        arrayDim: v.offset
        // bitSize: bitdim ? Math.abs(bitdim[1] - bitdim[0]) + 1 : 1,
      });
    });
    const bitDim = ctx.bitDim ? this.valueStack.pop() : null;
    newRegs.forEach(x => this.curModule.regs.push({ ...x, bitDim }));
  }

  exitRegister_identifier_list(ctx) {
    this.valueStack.push(
      ctx
        .register_identifier()
        .map(() => this.valueStack.pop())
        .reverse()
    );
  }

  exitRegister_identifier(ctx) {
    this.valueStack.push(
      new Variable(null, ctx.IDENTIFIER().getText(), ctx.range() ? this.valueStack.pop() : null)
    );
  }

  enterInitial_construct() {
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

  enterAlways_construct() {
    if (this.statementBlockStack.length > 0)
      throw new Error("enterAlways: statementBlockStack should be empty");
  }

  exitAlways_construct(ctx) {
    const newAlways = {
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      statementTree: this.statementBlockStack.pop()
    };

    if (ctx.event_list().event_every() != null) {
      newAlways.sensitivities = [
        {
          type: "everytime",
          last: null
        }
      ];
    } else {
      newAlways.sensitivities = ctx
        .event_list()
        .event_primary()
        .map(e => ({
          id: this.valueStack.pop(),
          type: e.event_type() != null ? e.event_type().getText() : "changed",
          last: undefined
        }));
    }

    this.curModule.always.push(newAlways);
    console.log("always = ", this.curModule.always);
  }

  enterStatement_block() {
    this.statementBlockStack.push({ type: "block", statements: [] });
  }

  enterBlocking_assignment(ctx) {
    console.groupCollapsed(`Blocking_assignment: ${ctx.getText()}`);
    // if (this.expressionStack.length > 0)
    //   throw new Error(
    //     `enterBlocking_assignment: expressionStack should be empty, not ${this.expressionStack}`
    //   );
  }

  exitBlocking_assignment(ctx) {
    const newStatement = {
      type: "blocking_assignment",
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      rhs: this.expressionStack.pop(),
      lhs: this.valueStack.pop() // pop the ids in expressions first
    };
    // if (
    //   newStatement.lhs.type == "variable" &&
    //   !this.isReg(newStatement.lhs.name)
    // )
    //   this.addSemanticError(
    //     ctx.lhs,
    //     `${newStatement.lhs.name} is not declared as type reg`
    //   );
    // else {
    this.statementBlockStack[this.statementBlockStack.length - 1].statements.push(newStatement);
    // console.log("Statement: ", strip(newStatement));
    // }
    console.groupEnd();
  }

  exitError_statement(ctx) {
    const newStatement = {
      type: "error_statement",
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      text: ctx.string().getText()
    };
    this.statementBlockStack[this.statementBlockStack.length - 1].statements.push(newStatement);
  }

  enterConditional_statement(ctx) {
    console.groupCollapsed(`Conditional_statement: ${ctx.getText()}`);
    // if (this.expressionStack.length > 0)
    //   throw new Error(
    //     `conditional_statement: expressionStack should be empty, not ${this.expressionStack}`
    //   );
  }

  exitConditional_statement(ctx) {
    const newStatement = {
      type: "conditional_statement",
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      elseBlock: ctx.elseblock ? this.statementBlockStack.pop() : null,
      thenBlock: this.statementBlockStack.pop(),
      condition: this.expressionStack.pop()
    };
    this.statementBlockStack[this.statementBlockStack.length - 1].statements.push(newStatement);
    // console.log("Statement: ", strip(newStatement));
    console.groupEnd();
  }

  enterCase_statement(ctx) {
    console.groupCollapsed(`case_statement: ${ctx.getText()}`);
    // if (this.expressionStack.length > 0)
    //   throw new Error(
    //     `conditional_statement: expressionStack should be empty, not ${this.expressionStack}`
    //   );
  }

  exitCase_statement(ctx) {
    const newStatement = {
      type: "case_statement",
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      casedefault: ctx.defaultclause ? this.statementBlockStack.pop() : null,
      caseclauses: this.valueStack.splice(-ctx.clauses.length),
      casevar: this.valueStack.pop()
    };

    if (!this.isWireOrPortOrReg(newStatement.casevar))
      this.addSemanticError(ctx.casevar, `Unknown case test variable ${newStatement.casevar.name}`);

    this.statementBlockStack[this.statementBlockStack.length - 1].statements.push(newStatement);
    // console.log("Statement: ", strip(newStatement));
    console.groupEnd();
  }

  exitCase_clause(ctx) {
    const newItem = {
      type: "case_clause",
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
      statements: this.statementBlockStack.pop(),
      clauseval: this.expressionStack.pop()
    };
    this.valueStack.push(newItem);
  }

  // expression
  // 	: number    																	# atomExpression
  // 	| identifier    															# atomExpression
  // 	| concatenation																# atomExpression
  //  | '(' ex=expression ')'												# parensExpression
  //  | op=(PLUS | MINUS) expression                # unaryExpression
  // 	| expression op=(MUL | DIV) expression				# binaryExpression
  // 	| expression op=(PLUS | MINUS) expression			# binaryExpression
  // 	;

  exitAtomExpression() {
    //  console.log("atomExpression value stack: ", this.valueStack)
    this.expressionStack.push(this.valueStack.pop());
  }

  exitParensExpression() {
    // const lhs = this.expressionStack.pop();
    // this.expressionStack.push(new Operation(lhs, "parens", null));
  }

  exitUnaryExpression(ctx) {
    const lhs = this.expressionStack.pop();
    this.expressionStack.push(new Operation(lhs, ctx.op.text, null));
  }

  exitBinaryExpression(ctx) {
    //  console.log("binaryExpression stack: ", this.expressionStack)
    const rhs = this.expressionStack.pop();
    const lhs = this.expressionStack.pop();
    this.expressionStack.push(new Operation(lhs, ctx.op.text, rhs));
  }

  exitTernaryExpression() {
    // test ? lhs1 : lhs0
    const lhs0 = this.expressionStack.pop();
    const lhs1 = this.expressionStack.pop();
    const test = this.expressionStack.pop();
    this.expressionStack.push(new TernOperation(test, lhs1, lhs0));
  }

  // expr // gate
  // : identifier																	  # atomExpr
  // | '(' expr ')'																  # parensExpr
  // | op=unary_gate_op expr												# unaryExpr
  // | expr op=binary_gate_op expr									# binaryExpr
  // ;

  exitAtomExpr() {
    console.log("atomExp value stack: ", this.valueStack);
    this.expressionStack.push(this.valueStack.pop());
  }

  exitParensExpr() {
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

  exitTernaryExpr() {
    //  console.log("binaryExpression stack: ", this.expressionStack)
    const lhs0 = this.expressionStack.pop();
    const lhs1 = this.expressionStack.pop();
    const test = this.expressionStack.pop();
    this.expressionStack.push(new TernOperation(test, lhs1, lhs0));
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

  // multiple concatenation wraps concatenation

  exitConcatenation(ctx) {
    const components = ctx.expression().map((x, i) => {
      const comp = this.expressionStack.pop();
      if (comp.type == "variable" && !this.isWireOrPortOrReg(comp.name))
        this.addSemanticError(
          ctx.expression(ctx.expression().length - 1 - i),
          `Concatenation component ${comp.name} is not declared as type port or wire or reg`
        );
      return comp;
    });
    // .reverse();
    this.valueStack.push(new Concatenation(new Numeric(1), components));
  }

  exitMultiple_concatenation(ctx) {
    const components = ctx.comp
      .map((x, i) => {
        const comp = this.expressionStack.pop();
        if (comp.type == "variable" && !this.isWireOrPortOrReg(comp.name))
          this.addSemanticError(
            ctx.expression(ctx.comp.length - 1 - i),
            `Concatenation component ${comp.name} is not declared as type port or wire or reg`
          );
        return comp;
      })
      .reverse();
    this.valueStack.push(new Concatenation(this.expressionStack.pop(), components));
  }

  exitRange() {
    this.valueStack.push(
      this.expressionStack.splice(-2)
      // .map(dimexpr =>
      //   dimexpr.getValue(this.curModule.parameterLookup, this.curModule.id)
      // )
    );
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
    const x = ctx.getText().replace(/_/g, ""); // remove '_' which is for human benefit only
    if (x == +x) {
      // Decimal_number: Unsigned_number
      this.valueStack.push(new Numeric(parseInt(x, 10), null, "decimal"));
      return;
    }

    this.valueStack.push(new Numeric(x));
  }

  exitBinary(ctx) {
    const x = ctx.getText().replace(/_/g, "");
    this.valueStack.push(new Numeric(x));
  }

  exitOctal(ctx) {
    const x = ctx.getText().replace(/_/g, "");
    this.valueStack.push(new Numeric(x));
  }

  exitHex(ctx) {
    const x = ctx.getText().replace(/_/g, "");
    this.valueStack.push(new Numeric(x));
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
          const rhs = this.expressionStack.pop();
          const lhs = this.valueStack.pop();
          if (this.isInput(lhs.name))
            newClock.assignments.push({
              lhs,
              rhs
            });
          else this.addSemanticError(x.lhs, `'${x.lhs.text}' is not a valid main module input`);
        });
    }
    newClock.assignments.reverse();
  }

  exitDisplay_assignment(ctx) {
    this.curModule.display.push({
      id: ctx.lhs.text,
      type: ctx.rhs.text
    });
  }

  // gates ==================================================

  exitMeta_assignment(ctx) {
    const metastring = ctx.metastring.getText().slice(1, -1);
    const gateid = ctx.gateID.text;
    // semantic error if the output is not a wire or module output
    if (!this.isWireOrPort(gateid)) {
      const idctx = ctx.gateID;
      this.addSemanticError(idctx, `'${gateid}' is not defined as a wire or module port`);
    }
    let gate = null;
    if (this.isPort(gateid)) {
      gate = this.curModule.ports.find(x => x.id == gateid);
    } else if (this.isWire(gateid) || this.isReg(gateid)) {
      gate = this.curModule.instantiations.find(x => x.id == gateid);
    }
    if (!gate) {
      const idctx = ctx.gateID;
      this.addSemanticError(idctx, `'${gateid}' is not instantiated yet`);
    } else {
      try {
        gate.meta = JSON.parse(metastring);
      } catch (e) {
        console.log(e, metastring);
        const msctx = ctx.metastring;
        this.addSemanticError(msctx, `Unable to parse metastring`);
      }
    }
  }

  exitInstance_meta_assignment(ctx) {
    const metastring = ctx.metastring.getText().slice(1, -1);
    const gateid = ctx.gateID.getText().slice(1, -1);

    try {
      this.curModule.meta[gateid] = JSON.parse(metastring);
    } catch (e) {
      console.log(e, metastring);
      const msctx = ctx.metastring;
      this.addSemanticError(msctx, `Unable to parse metastring`);
    }
  }

  exitGate_instantiation(ctx) {
    const gateType = ctx.gate_type().getText();
    const gateOutput = ctx.gateID.text;
    const gateInputs = ctx.ids ? this.valueStack.pop() : [];

    // semantic error if any of the inputs are not defined
    if (gateInputs)
      gateInputs.forEach((gateInput, index) => {
        if (!this.isWireOrPortOrReg(gateInput.name)) {
          const idctx = ctx
            .identifier_list()
            .identifier(index)
            .IDENTIFIER();
          this.addSemanticError(
            idctx.symbol,
            `'${gateInput.name}' is not defined as a wire or module port`
          );
        }
      });

    // semantic error if the output is not a wire or module output
    if (!this.isWireOrOutput(gateOutput)) {
      const idctx = ctx.gateID;
      this.addSemanticError(idctx, `'${gateOutput}' is not defined as a wire or module output`);
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
    // if (this.expressionStack.length > 0)
    //   throw new Error(
    //     `enterNet_assignment: expressionStack should be empty, not ${this.expressionStack}`
    //   );
  }

  exitNet_assignment(ctx) {
    const lvalue = this.valueStack.pop();
    if (!this.isWireOrRegOrOutput(lvalue.name) && lvalue.type != "concatenation") {
      this.addSemanticError(ctx.lvalue(), `${lvalue.name} is not a wire or reg or output`);
    } else {
      const expr = this.expressionStack.pop();
      this.curModule.netAssignments.push({
        id: lvalue,
        operationTree: expr
      });
      // console.log(
      //   strip(
      //     this.curModule.netAssignments[
      //       this.curModule.netAssignments.length - 1
      //     ]
      //   )
      // );
    }
    console.groupEnd();
  }

  // instances =========================================

  // convertConstantToGateVariable(numeric) {
  //   const constid = "constant" + numeric.getValue();
  //   if (!this.curModule.instantiations.find(x => x.id == constid))
  //     this.curModule.instantiations.push({
  //       type: "gate",
  //       id: constid,
  //       gateType: "constant",
  //       defaultValue: numeric.getValue(),
  //       defaultSize: numeric.bitSize,
  //       inputs: []
  //     });
  //   this.curModule.regs.push({ id: constid, bitDim: numeric.bitSize });
  //   return new Variable(null, constid);
  // }

  // convertConcatenationToGateVariable(concat) {
  //   const concatid = "concat" + concat.components.map(c => c.name).join("");
  //   if (!this.curModule.instantiations.find(x => x.id == concatid))
  //     this.curModule.instantiations.push({
  //       type: "gate",
  //       id: concatid,
  //       gateType: "concat",
  //       defaultValue: numeric.getValue(),
  //       defaultSize: numeric.bitSize,
  //       inputs: []
  //     });
  //   this.curModule.regs.push({ id: concatid, bitDim: numeric.bitSize });
  //   return new Variable(null, concatid);
  // }

  exitNamed_module_connections_list(ctx) {
    this.valueStack.push(
      ctx
        .named_port_connection()
        .reverse() // reverse in order to pop the identifiers in the correct order
        .map(x => {
          // if the port input is a numeric constant add a constant buffer gate to instantiations
          // const valueexpr = this.expressionStack.pop();
          // const valueid =
          //   valueexpr instanceof Numeric
          //     ? this.convertConstantToGateVariable(valueexpr)
          //     : valueexpr;
          return {
            port: {
              id: x.portID.text,
              sourceLocation: this.getTokenLocation(x.portID),
              token: this.getTokenLocation(x.portID)
            },
            value: {
              expr: this.expressionStack.pop(),
              sourceLocation: this.getTokenLocation(x.value.children[0].start),
              token: this.getTokenLocation(x.value.children[0].start)
            }
          };
        })
    );
  }

  exitOrdered_module_connections_list(ctx) {
    this.valueStack.push(
      ctx.ids
        .reverse()
        .map((x, i, a) => {
          // const valueexpr = this.expressionStack.pop();
          // let valueid;
          // switch (true) {
          //   case valueexpr instanceof Numeric:
          //     valueid = this.convertConstantToGateVariable(valueexpr);
          //     break;
          //   case valueexpr instanceof Concatenation:
          //     valueid = this.convertConcatenationToGateVariable(valueexpr);
          //     break;
          //   case valueexpr instanceof Operation:
          //     this.addSemanticError(
          //       x,
          //       "Operations are not yet supported as a module parameter"
          //     );
          //     throw new Error("Operation not supported as module parameter");
          //   case valueexpr instanceof Variable:
          //     valueid = valueexpr;
          //     break;
          //   default:
          //     this.addSemanticError(x, "Not supported as a module parameter");
          //     throw new Error("invalid module connection list parameter");
          // }
          return {
            port: { index: a.length - i - 1 },
            value: {
              expr: this.expressionStack.pop(),
              token: x.start
            }
          };
        })
        .reverse()
    );
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
    const connections = this.valueStack.pop(); //ctx.module_connections_list().connections;
    const params = ctx.params ? ctx.params.params.map(() => this.expressionStack.pop()) : [];

    console.log(`Module ${moduleID} connections: `, connections);

    // check for valid connections
    connections.forEach(connection => {
      if (connection.port.index != undefined) {
        // ordered connections
        connection.port.id = this.modules[moduleID].ports[connection.port.index].id;
        return;
      }
      if (!this.isPortOf(connection.port.id, moduleID))
        this.addSemanticError(
          connection.port.sourceLocation,
          `Invalid port: '${connection.port.id}' is not defined in module '${moduleID}'`
        );

      if (
        connection.value.expr instanceof Variable &&
        !this.isWireOrPortOrReg(connection.value.expr.name)
      )
        this.addSemanticError(
          connection.value.token,
          `Invalid value: '${connection.value.expr.name}' is not a defined wire or port in module '${moduleID}
        '`
        );
    });

    const newInstance = {
      type: "instance",
      id: instanceID,
      module: moduleID,
      connections,
      instanceParameters: params
    };

    this.curModule.instantiations.push(newInstance);

    console.log("newInstance: ", newInstance);
    console.groupEnd();
  }
}

class vlgErrorListener extends error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    this.errors.push({
      startLine: line,
      endLine: line,
      startColumn: column + 1,
      endColumn: offendingSymbol
        ? column + (offendingSymbol.stop - offendingSymbol.start) + 2
        : column + 2, //Let's suppose the length of the error is only 1 char for simplicity
      msg,
      severity: "error" // This the error code you can customize them as you want
    });
    // console.log("Error: ", this.errors[this.errors.length - 1]);
  }
}

export function parseToAST(code) {
  const inputStream = new InputStream(code);
  const lexer = new vlgLexer(inputStream);

  lexer.removeErrorListeners();
  const errorListener = new vlgErrorListener();
  lexer.addErrorListener(errorListener);

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new vlgParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  const ast = parser.source_text();
  const errors = errorListener.errors;

  return { ast, errors };
}

export function walkAST(ast) {
  var listener = new Listener();
  tree.ParseTreeWalker.DEFAULT.walk(listener, ast);
  return {
    modules: listener.modules,
    errors: listener.errors,
    status: listener.errors == 0 ? "ok" : "error"
  };
}
