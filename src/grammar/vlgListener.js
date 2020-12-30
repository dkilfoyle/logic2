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


// Enter a parse tree produced by vlgParser#ansi_port_declaration.
vlgListener.prototype.enterAnsi_port_declaration = function(ctx) {
};

// Exit a parse tree produced by vlgParser#ansi_port_declaration.
vlgListener.prototype.exitAnsi_port_declaration = function(ctx) {
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


// Enter a parse tree produced by vlgParser#gate.
vlgListener.prototype.enterGate = function(ctx) {
};

// Exit a parse tree produced by vlgParser#gate.
vlgListener.prototype.exitGate = function(ctx) {
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


// Enter a parse tree produced by vlgParser#initial_statement.
vlgListener.prototype.enterInitial_statement = function(ctx) {
};

// Exit a parse tree produced by vlgParser#initial_statement.
vlgListener.prototype.exitInitial_statement = function(ctx) {
};


// Enter a parse tree produced by vlgParser#gate_declaration.
vlgListener.prototype.enterGate_declaration = function(ctx) {
};

// Exit a parse tree produced by vlgParser#gate_declaration.
vlgListener.prototype.exitGate_declaration = function(ctx) {
};


// Enter a parse tree produced by vlgParser#gate_type.
vlgListener.prototype.enterGate_type = function(ctx) {
};

// Exit a parse tree produced by vlgParser#gate_type.
vlgListener.prototype.exitGate_type = function(ctx) {
};


// Enter a parse tree produced by vlgParser#continuous_assign.
vlgListener.prototype.enterContinuous_assign = function(ctx) {
};

// Exit a parse tree produced by vlgParser#continuous_assign.
vlgListener.prototype.exitContinuous_assign = function(ctx) {
};


// Enter a parse tree produced by vlgParser#list_of_assignments.
vlgListener.prototype.enterList_of_assignments = function(ctx) {
};

// Exit a parse tree produced by vlgParser#list_of_assignments.
vlgListener.prototype.exitList_of_assignments = function(ctx) {
};


// Enter a parse tree produced by vlgParser#assignment.
vlgListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by vlgParser#assignment.
vlgListener.prototype.exitAssignment = function(ctx) {
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


// Enter a parse tree produced by vlgParser#negateExpr.
vlgListener.prototype.enterNegateExpr = function(ctx) {
};

// Exit a parse tree produced by vlgParser#negateExpr.
vlgListener.prototype.exitNegateExpr = function(ctx) {
};


// Enter a parse tree produced by vlgParser#binaryExpr.
vlgListener.prototype.enterBinaryExpr = function(ctx) {
};

// Exit a parse tree produced by vlgParser#binaryExpr.
vlgListener.prototype.exitBinaryExpr = function(ctx) {
};


// Enter a parse tree produced by vlgParser#parenExpr.
vlgListener.prototype.enterParenExpr = function(ctx) {
};

// Exit a parse tree produced by vlgParser#parenExpr.
vlgListener.prototype.exitParenExpr = function(ctx) {
};


// Enter a parse tree produced by vlgParser#idExpr.
vlgListener.prototype.enterIdExpr = function(ctx) {
};

// Exit a parse tree produced by vlgParser#idExpr.
vlgListener.prototype.exitIdExpr = function(ctx) {
};


// Enter a parse tree produced by vlgParser#binary_operator.
vlgListener.prototype.enterBinary_operator = function(ctx) {
};

// Exit a parse tree produced by vlgParser#binary_operator.
vlgListener.prototype.exitBinary_operator = function(ctx) {
};


// Enter a parse tree produced by vlgParser#always_section.
vlgListener.prototype.enterAlways_section = function(ctx) {
};

// Exit a parse tree produced by vlgParser#always_section.
vlgListener.prototype.exitAlways_section = function(ctx) {
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


// Enter a parse tree produced by vlgParser#seq_block.
vlgListener.prototype.enterSeq_block = function(ctx) {
};

// Exit a parse tree produced by vlgParser#seq_block.
vlgListener.prototype.exitSeq_block = function(ctx) {
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


// Enter a parse tree produced by vlgParser#number.
vlgListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by vlgParser#number.
vlgListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by vlgParser#range.
vlgListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by vlgParser#range.
vlgListener.prototype.exitRange = function(ctx) {
};



exports.vlgListener = vlgListener;