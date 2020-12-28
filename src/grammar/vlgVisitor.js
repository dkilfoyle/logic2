// Generated from c:\c\logic2\src\grammar\vlg.g4 by ANTLR 4.8
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


// Visit a parse tree produced by vlgParser#module_ports.
vlgVisitor.prototype.visitModule_ports = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#ansi_port_declaration.
vlgVisitor.prototype.visitAnsi_port_declaration = function(ctx) {
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


// Visit a parse tree produced by vlgParser#gate.
vlgVisitor.prototype.visitGate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#assign.
vlgVisitor.prototype.visitAssign = function(ctx) {
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


// Visit a parse tree produced by vlgParser#net_declaration.
vlgVisitor.prototype.visitNet_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#initial_statement.
vlgVisitor.prototype.visitInitial_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#gate_declaration.
vlgVisitor.prototype.visitGate_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#gate_type.
vlgVisitor.prototype.visitGate_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#continuous_assign.
vlgVisitor.prototype.visitContinuous_assign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#list_of_assignments.
vlgVisitor.prototype.visitList_of_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#assignment.
vlgVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#module_instantiation.
vlgVisitor.prototype.visitModule_instantiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#module_connections_list.
vlgVisitor.prototype.visitModule_connections_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#named_port_connection.
vlgVisitor.prototype.visitNamed_port_connection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#negateExpr.
vlgVisitor.prototype.visitNegateExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#binaryExpr.
vlgVisitor.prototype.visitBinaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#parenExpr.
vlgVisitor.prototype.visitParenExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#idExpr.
vlgVisitor.prototype.visitIdExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by vlgParser#binary_operator.
vlgVisitor.prototype.visitBinary_operator = function(ctx) {
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


// Visit a parse tree produced by vlgParser#number.
vlgVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.vlgVisitor = vlgVisitor;