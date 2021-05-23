// Generated from c:\code\logic2\src\grammar\vlg.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by vlgParser.

function vlgVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

vlgVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
vlgVisitor.prototype.constructor = vlgVisitor;

// Visit a parse tree produced by vlgParser#source_text.
vlgVisitor.prototype.visitSource_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#modules.
vlgVisitor.prototype.visitModules = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#module_main.
vlgVisitor.prototype.visitModule_main = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#module.
vlgVisitor.prototype.visitModule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#module_parameter.
vlgVisitor.prototype.visitModule_parameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#module_ports.
vlgVisitor.prototype.visitModule_ports = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#port_declaration.
vlgVisitor.prototype.visitPort_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#port_identifier_list.
vlgVisitor.prototype.visitPort_identifier_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#port_direction.
vlgVisitor.prototype.visitPort_direction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#net.
vlgVisitor.prototype.visitNet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#reg.
vlgVisitor.prototype.visitReg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#localparam.
vlgVisitor.prototype.visitLocalparam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#meta.
vlgVisitor.prototype.visitMeta = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#assign.
vlgVisitor.prototype.visitAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#gate.
vlgVisitor.prototype.visitGate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#instance.
vlgVisitor.prototype.visitInstance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#initial.
vlgVisitor.prototype.visitInitial = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#always.
vlgVisitor.prototype.visitAlways = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#test_bench.
vlgVisitor.prototype.visitTest_bench = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#test_time.
vlgVisitor.prototype.visitTest_time = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#time_stamp.
vlgVisitor.prototype.visitTime_stamp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#time_assignment_list.
vlgVisitor.prototype.visitTime_assignment_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#time_assignment.
vlgVisitor.prototype.visitTime_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#display_bench.
vlgVisitor.prototype.visitDisplay_bench = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#display_assignment.
vlgVisitor.prototype.visitDisplay_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#localparam_declaration.
vlgVisitor.prototype.visitLocalparam_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#net_declaration.
vlgVisitor.prototype.visitNet_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#reg_declaration.
vlgVisitor.prototype.visitReg_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#register_identifier_list.
vlgVisitor.prototype.visitRegister_identifier_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#register_identifier.
vlgVisitor.prototype.visitRegister_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#simple_identifier_list.
vlgVisitor.prototype.visitSimple_identifier_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#module_instantiation.
vlgVisitor.prototype.visitModule_instantiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#parameter_value_assignment.
vlgVisitor.prototype.visitParameter_value_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#named_module_connections_list.
vlgVisitor.prototype.visitNamed_module_connections_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#named_port_connection.
vlgVisitor.prototype.visitNamed_port_connection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#ordered_module_connections_list.
vlgVisitor.prototype.visitOrdered_module_connections_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#gate_instantiation.
vlgVisitor.prototype.visitGate_instantiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#gate_type.
vlgVisitor.prototype.visitGate_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#net_assignment.
vlgVisitor.prototype.visitNet_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#meta_assignment.
vlgVisitor.prototype.visitMeta_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#instance_meta_assignment.
vlgVisitor.prototype.visitInstance_meta_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#initial_construct.
vlgVisitor.prototype.visitInitial_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#always_construct.
vlgVisitor.prototype.visitAlways_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#event_list.
vlgVisitor.prototype.visitEvent_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#event_every.
vlgVisitor.prototype.visitEvent_every = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#event_primary.
vlgVisitor.prototype.visitEvent_primary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#event_type.
vlgVisitor.prototype.visitEvent_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#statement_block.
vlgVisitor.prototype.visitStatement_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#seq_block.
vlgVisitor.prototype.visitSeq_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#statement.
vlgVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#blocking_assignment.
vlgVisitor.prototype.visitBlocking_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#conditional_statement.
vlgVisitor.prototype.visitConditional_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#case_statement.
vlgVisitor.prototype.visitCase_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#case_clause.
vlgVisitor.prototype.visitCase_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#case_default.
vlgVisitor.prototype.visitCase_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#error_statement.
vlgVisitor.prototype.visitError_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#concatenation.
vlgVisitor.prototype.visitConcatenation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#multiple_concatenation.
vlgVisitor.prototype.visitMultiple_concatenation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#binaryExpression.
vlgVisitor.prototype.visitBinaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#atomExpression.
vlgVisitor.prototype.visitAtomExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#parensExpression.
vlgVisitor.prototype.visitParensExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#unaryExpression.
vlgVisitor.prototype.visitUnaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#ternaryExpression.
vlgVisitor.prototype.visitTernaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#unaryExpr.
vlgVisitor.prototype.visitUnaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#ternaryExpr.
vlgVisitor.prototype.visitTernaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#atomExpr.
vlgVisitor.prototype.visitAtomExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#binaryExpr.
vlgVisitor.prototype.visitBinaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#parensExpr.
vlgVisitor.prototype.visitParensExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#binary_gate_op.
vlgVisitor.prototype.visitBinary_gate_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#unary_gate_op.
vlgVisitor.prototype.visitUnary_gate_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#lvalue.
vlgVisitor.prototype.visitLvalue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#unary_operator.
vlgVisitor.prototype.visitUnary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#binary_operator.
vlgVisitor.prototype.visitBinary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#decimal.
vlgVisitor.prototype.visitDecimal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#octal.
vlgVisitor.prototype.visitOctal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#binary.
vlgVisitor.prototype.visitBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#hex.
vlgVisitor.prototype.visitHex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#defined_connection_id.
vlgVisitor.prototype.visitDefined_connection_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#defined_connection_id_list.
vlgVisitor.prototype.visitDefined_connection_id_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#identifier_list.
vlgVisitor.prototype.visitIdentifier_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#range.
vlgVisitor.prototype.visitRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#idPlain.
vlgVisitor.prototype.visitIdPlain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#idOffset.
vlgVisitor.prototype.visitIdOffset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#idRange.
vlgVisitor.prototype.visitIdRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#string.
vlgVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};



exports.vlgVisitor = vlgVisitor;