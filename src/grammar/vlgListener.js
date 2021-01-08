// Generated from c:\c\logic2\src\grammar\vlg.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by vlgParser.
function vlgListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

vlgListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
vlgListener.prototype.constructor = vlgListener;

// Enter a parse tree produced by vlgParser#source_text.
vlgListener.prototype.enterSource_text = function(ctx) {
};

// Exit a parse tree produced by vlgParser#source_text.
vlgListener.prototype.exitSource_text = function(ctx) {
};


// Enter a parse tree produced by vlgParser#modules.
vlgListener.prototype.enterModules = function(ctx) {
};

// Exit a parse tree produced by vlgParser#modules.
vlgListener.prototype.exitModules = function(ctx) {
};


// Enter a parse tree produced by vlgParser#module_main.
vlgListener.prototype.enterModule_main = function(ctx) {
};

// Exit a parse tree produced by vlgParser#module_main.
vlgListener.prototype.exitModule_main = function(ctx) {
};


// Enter a parse tree produced by vlgParser#module.
vlgListener.prototype.enterModule = function(ctx) {
};

// Exit a parse tree produced by vlgParser#module.
vlgListener.prototype.exitModule = function(ctx) {
};


// Enter a parse tree produced by vlgParser#module_ports.
vlgListener.prototype.enterModule_ports = function(ctx) {
};

// Exit a parse tree produced by vlgParser#module_ports.
vlgListener.prototype.exitModule_ports = function(ctx) {
};


// Enter a parse tree produced by vlgParser#port_declaration.
vlgListener.prototype.enterPort_declaration = function(ctx) {
};

// Exit a parse tree produced by vlgParser#port_declaration.
vlgListener.prototype.exitPort_declaration = function(ctx) {
};


// Enter a parse tree produced by vlgParser#port_identifier_list.
vlgListener.prototype.enterPort_identifier_list = function(ctx) {
};

// Exit a parse tree produced by vlgParser#port_identifier_list.
vlgListener.prototype.exitPort_identifier_list = function(ctx) {
};


// Enter a parse tree produced by vlgParser#port_direction.
vlgListener.prototype.enterPort_direction = function(ctx) {
};

// Exit a parse tree produced by vlgParser#port_direction.
vlgListener.prototype.exitPort_direction = function(ctx) {
};


// Enter a parse tree produced by vlgParser#net.
vlgListener.prototype.enterNet = function(ctx) {
};

// Exit a parse tree produced by vlgParser#net.
vlgListener.prototype.exitNet = function(ctx) {
};


// Enter a parse tree produced by vlgParser#reg.
vlgListener.prototype.enterReg = function(ctx) {
};

// Exit a parse tree produced by vlgParser#reg.
vlgListener.prototype.exitReg = function(ctx) {
};


// Enter a parse tree produced by vlgParser#assign.
vlgListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by vlgParser#assign.
vlgListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by vlgParser#gate.
vlgListener.prototype.enterGate = function(ctx) {
};

// Exit a parse tree produced by vlgParser#gate.
vlgListener.prototype.exitGate = function(ctx) {
};


// Enter a parse tree produced by vlgParser#instance.
vlgListener.prototype.enterInstance = function(ctx) {
};

// Exit a parse tree produced by vlgParser#instance.
vlgListener.prototype.exitInstance = function(ctx) {
};


// Enter a parse tree produced by vlgParser#initial.
vlgListener.prototype.enterInitial = function(ctx) {
};

// Exit a parse tree produced by vlgParser#initial.
vlgListener.prototype.exitInitial = function(ctx) {
};


// Enter a parse tree produced by vlgParser#always.
vlgListener.prototype.enterAlways = function(ctx) {
};

// Exit a parse tree produced by vlgParser#always.
vlgListener.prototype.exitAlways = function(ctx) {
};


// Enter a parse tree produced by vlgParser#test_bench.
vlgListener.prototype.enterTest_bench = function(ctx) {
};

// Exit a parse tree produced by vlgParser#test_bench.
vlgListener.prototype.exitTest_bench = function(ctx) {
};


// Enter a parse tree produced by vlgParser#test_time.
vlgListener.prototype.enterTest_time = function(ctx) {
};

// Exit a parse tree produced by vlgParser#test_time.
vlgListener.prototype.exitTest_time = function(ctx) {
};


// Enter a parse tree produced by vlgParser#time_stamp.
vlgListener.prototype.enterTime_stamp = function(ctx) {
};

// Exit a parse tree produced by vlgParser#time_stamp.
vlgListener.prototype.exitTime_stamp = function(ctx) {
};


// Enter a parse tree produced by vlgParser#time_assignment_list.
vlgListener.prototype.enterTime_assignment_list = function(ctx) {
};

// Exit a parse tree produced by vlgParser#time_assignment_list.
vlgListener.prototype.exitTime_assignment_list = function(ctx) {
};


// Enter a parse tree produced by vlgParser#time_assignment.
vlgListener.prototype.enterTime_assignment = function(ctx) {
};

// Exit a parse tree produced by vlgParser#time_assignment.
vlgListener.prototype.exitTime_assignment = function(ctx) {
};


// Enter a parse tree produced by vlgParser#net_declaration.
vlgListener.prototype.enterNet_declaration = function(ctx) {
};

// Exit a parse tree produced by vlgParser#net_declaration.
vlgListener.prototype.exitNet_declaration = function(ctx) {
};


// Enter a parse tree produced by vlgParser#reg_declaration.
vlgListener.prototype.enterReg_declaration = function(ctx) {
};

// Exit a parse tree produced by vlgParser#reg_declaration.
vlgListener.prototype.exitReg_declaration = function(ctx) {
};


// Enter a parse tree produced by vlgParser#simple_identifier_list.
vlgListener.prototype.enterSimple_identifier_list = function(ctx) {
};

// Exit a parse tree produced by vlgParser#simple_identifier_list.
vlgListener.prototype.exitSimple_identifier_list = function(ctx) {
};


// Enter a parse tree produced by vlgParser#module_instantiation.
vlgListener.prototype.enterModule_instantiation = function(ctx) {
};

// Exit a parse tree produced by vlgParser#module_instantiation.
vlgListener.prototype.exitModule_instantiation = function(ctx) {
};


// Enter a parse tree produced by vlgParser#module_connections_list.
vlgListener.prototype.enterModule_connections_list = function(ctx) {
};

// Exit a parse tree produced by vlgParser#module_connections_list.
vlgListener.prototype.exitModule_connections_list = function(ctx) {
};


// Enter a parse tree produced by vlgParser#named_port_connection.
vlgListener.prototype.enterNamed_port_connection = function(ctx) {
};

// Exit a parse tree produced by vlgParser#named_port_connection.
vlgListener.prototype.exitNamed_port_connection = function(ctx) {
};


// Enter a parse tree produced by vlgParser#gate_instantiation.
vlgListener.prototype.enterGate_instantiation = function(ctx) {
};

// Exit a parse tree produced by vlgParser#gate_instantiation.
vlgListener.prototype.exitGate_instantiation = function(ctx) {
};


// Enter a parse tree produced by vlgParser#gate_type.
vlgListener.prototype.enterGate_type = function(ctx) {
};

// Exit a parse tree produced by vlgParser#gate_type.
vlgListener.prototype.exitGate_type = function(ctx) {
};


// Enter a parse tree produced by vlgParser#net_assignment.
vlgListener.prototype.enterNet_assignment = function(ctx) {
};

// Exit a parse tree produced by vlgParser#net_assignment.
vlgListener.prototype.exitNet_assignment = function(ctx) {
};


// Enter a parse tree produced by vlgParser#initial_construct.
vlgListener.prototype.enterInitial_construct = function(ctx) {
};

// Exit a parse tree produced by vlgParser#initial_construct.
vlgListener.prototype.exitInitial_construct = function(ctx) {
};


// Enter a parse tree produced by vlgParser#always_construct.
vlgListener.prototype.enterAlways_construct = function(ctx) {
};

// Exit a parse tree produced by vlgParser#always_construct.
vlgListener.prototype.exitAlways_construct = function(ctx) {
};


// Enter a parse tree produced by vlgParser#event_list.
vlgListener.prototype.enterEvent_list = function(ctx) {
};

// Exit a parse tree produced by vlgParser#event_list.
vlgListener.prototype.exitEvent_list = function(ctx) {
};


// Enter a parse tree produced by vlgParser#event_every.
vlgListener.prototype.enterEvent_every = function(ctx) {
};

// Exit a parse tree produced by vlgParser#event_every.
vlgListener.prototype.exitEvent_every = function(ctx) {
};


// Enter a parse tree produced by vlgParser#event_primary.
vlgListener.prototype.enterEvent_primary = function(ctx) {
};

// Exit a parse tree produced by vlgParser#event_primary.
vlgListener.prototype.exitEvent_primary = function(ctx) {
};


// Enter a parse tree produced by vlgParser#event_type.
vlgListener.prototype.enterEvent_type = function(ctx) {
};

// Exit a parse tree produced by vlgParser#event_type.
vlgListener.prototype.exitEvent_type = function(ctx) {
};


// Enter a parse tree produced by vlgParser#seq_block.
vlgListener.prototype.enterSeq_block = function(ctx) {
};

// Exit a parse tree produced by vlgParser#seq_block.
vlgListener.prototype.exitSeq_block = function(ctx) {
};


// Enter a parse tree produced by vlgParser#statement.
vlgListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by vlgParser#statement.
vlgListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by vlgParser#blocking_assignment.
vlgListener.prototype.enterBlocking_assignment = function(ctx) {
};

// Exit a parse tree produced by vlgParser#blocking_assignment.
vlgListener.prototype.exitBlocking_assignment = function(ctx) {
};


// Enter a parse tree produced by vlgParser#conditional_statement.
vlgListener.prototype.enterConditional_statement = function(ctx) {
};

// Exit a parse tree produced by vlgParser#conditional_statement.
vlgListener.prototype.exitConditional_statement = function(ctx) {
};


// Enter a parse tree produced by vlgParser#statement_block.
vlgListener.prototype.enterStatement_block = function(ctx) {
};

// Exit a parse tree produced by vlgParser#statement_block.
vlgListener.prototype.exitStatement_block = function(ctx) {
};


// Enter a parse tree produced by vlgParser#concatenation.
vlgListener.prototype.enterConcatenation = function(ctx) {
};

// Exit a parse tree produced by vlgParser#concatenation.
vlgListener.prototype.exitConcatenation = function(ctx) {
};


// Enter a parse tree produced by vlgParser#binaryExpression.
vlgListener.prototype.enterBinaryExpression = function(ctx) {
};

// Exit a parse tree produced by vlgParser#binaryExpression.
vlgListener.prototype.exitBinaryExpression = function(ctx) {
};


// Enter a parse tree produced by vlgParser#atomExpression.
vlgListener.prototype.enterAtomExpression = function(ctx) {
};

// Exit a parse tree produced by vlgParser#atomExpression.
vlgListener.prototype.exitAtomExpression = function(ctx) {
};


// Enter a parse tree produced by vlgParser#parensExpression.
vlgListener.prototype.enterParensExpression = function(ctx) {
};

// Exit a parse tree produced by vlgParser#parensExpression.
vlgListener.prototype.exitParensExpression = function(ctx) {
};


// Enter a parse tree produced by vlgParser#unaryExpression.
vlgListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by vlgParser#unaryExpression.
vlgListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by vlgParser#unaryExpr.
vlgListener.prototype.enterUnaryExpr = function(ctx) {
};

// Exit a parse tree produced by vlgParser#unaryExpr.
vlgListener.prototype.exitUnaryExpr = function(ctx) {
};


// Enter a parse tree produced by vlgParser#atomExpr.
vlgListener.prototype.enterAtomExpr = function(ctx) {
};

// Exit a parse tree produced by vlgParser#atomExpr.
vlgListener.prototype.exitAtomExpr = function(ctx) {
};


// Enter a parse tree produced by vlgParser#binaryExpr.
vlgListener.prototype.enterBinaryExpr = function(ctx) {
};

// Exit a parse tree produced by vlgParser#binaryExpr.
vlgListener.prototype.exitBinaryExpr = function(ctx) {
};


// Enter a parse tree produced by vlgParser#parensExpr.
vlgListener.prototype.enterParensExpr = function(ctx) {
};

// Exit a parse tree produced by vlgParser#parensExpr.
vlgListener.prototype.exitParensExpr = function(ctx) {
};


// Enter a parse tree produced by vlgParser#binary_gate_op.
vlgListener.prototype.enterBinary_gate_op = function(ctx) {
};

// Exit a parse tree produced by vlgParser#binary_gate_op.
vlgListener.prototype.exitBinary_gate_op = function(ctx) {
};


// Enter a parse tree produced by vlgParser#unary_gate_op.
vlgListener.prototype.enterUnary_gate_op = function(ctx) {
};

// Exit a parse tree produced by vlgParser#unary_gate_op.
vlgListener.prototype.exitUnary_gate_op = function(ctx) {
};


// Enter a parse tree produced by vlgParser#lvalue.
vlgListener.prototype.enterLvalue = function(ctx) {
};

// Exit a parse tree produced by vlgParser#lvalue.
vlgListener.prototype.exitLvalue = function(ctx) {
};


// Enter a parse tree produced by vlgParser#unary_operator.
vlgListener.prototype.enterUnary_operator = function(ctx) {
};

// Exit a parse tree produced by vlgParser#unary_operator.
vlgListener.prototype.exitUnary_operator = function(ctx) {
};


// Enter a parse tree produced by vlgParser#binary_operator.
vlgListener.prototype.enterBinary_operator = function(ctx) {
};

// Exit a parse tree produced by vlgParser#binary_operator.
vlgListener.prototype.exitBinary_operator = function(ctx) {
};


// Enter a parse tree produced by vlgParser#decimal.
vlgListener.prototype.enterDecimal = function(ctx) {
};

// Exit a parse tree produced by vlgParser#decimal.
vlgListener.prototype.exitDecimal = function(ctx) {
};


// Enter a parse tree produced by vlgParser#octal.
vlgListener.prototype.enterOctal = function(ctx) {
};

// Exit a parse tree produced by vlgParser#octal.
vlgListener.prototype.exitOctal = function(ctx) {
};


// Enter a parse tree produced by vlgParser#binary.
vlgListener.prototype.enterBinary = function(ctx) {
};

// Exit a parse tree produced by vlgParser#binary.
vlgListener.prototype.exitBinary = function(ctx) {
};


// Enter a parse tree produced by vlgParser#hex.
vlgListener.prototype.enterHex = function(ctx) {
};

// Exit a parse tree produced by vlgParser#hex.
vlgListener.prototype.exitHex = function(ctx) {
};


// Enter a parse tree produced by vlgParser#defined_connection_id.
vlgListener.prototype.enterDefined_connection_id = function(ctx) {
};

// Exit a parse tree produced by vlgParser#defined_connection_id.
vlgListener.prototype.exitDefined_connection_id = function(ctx) {
};


// Enter a parse tree produced by vlgParser#defined_connection_id_list.
vlgListener.prototype.enterDefined_connection_id_list = function(ctx) {
};

// Exit a parse tree produced by vlgParser#defined_connection_id_list.
vlgListener.prototype.exitDefined_connection_id_list = function(ctx) {
};


// Enter a parse tree produced by vlgParser#identifier_list.
vlgListener.prototype.enterIdentifier_list = function(ctx) {
};

// Exit a parse tree produced by vlgParser#identifier_list.
vlgListener.prototype.exitIdentifier_list = function(ctx) {
};


// Enter a parse tree produced by vlgParser#range.
vlgListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by vlgParser#range.
vlgListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by vlgParser#idPlain.
vlgListener.prototype.enterIdPlain = function(ctx) {
};

// Exit a parse tree produced by vlgParser#idPlain.
vlgListener.prototype.exitIdPlain = function(ctx) {
};


// Enter a parse tree produced by vlgParser#idOffset.
vlgListener.prototype.enterIdOffset = function(ctx) {
};

// Exit a parse tree produced by vlgParser#idOffset.
vlgListener.prototype.exitIdOffset = function(ctx) {
};


// Enter a parse tree produced by vlgParser#idRange.
vlgListener.prototype.enterIdRange = function(ctx) {
};

// Exit a parse tree produced by vlgParser#idRange.
vlgListener.prototype.exitIdRange = function(ctx) {
};



exports.vlgListener = vlgListener;