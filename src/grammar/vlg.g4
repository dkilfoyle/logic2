grammar vlg;

@header { /* eslint-disable */ }

// Adapted from https://github.com/Nic30/hdlConvertor/blob/master/grammars/sv2017Parser.g4 and
// https://www.verilog.com/VerilogBNF.html

/* The start rule */
source_text: modules EOF;

modules: (module)+ module_main EOF;

/* Module declaration ============================================== */

module_main:
	'module' 'Main' (module_ports)? ';' module_item* test_bench? 'endmodule';

module:
	'module' IDENTIFIER (module_ports)? ';' module_item* 'endmodule';

module_ports:
	'(' ansi_port_declaration (',' ansi_port_declaration)* ')';

ansi_port_declaration: port_direction identifier_list;
port_direction: 'input' | 'output';

module_item:
	net_declaration			# net
	| gate_declaration		# gate
	| continuous_assign		# assign
	| module_instantiation	# instance;

/* Test bench ====================================================== */

test_bench: 'test' 'begin' test_time* 'end';

test_time: time_stamp time_assignment_list? ';';

time_stamp: '#' num = UNSIGNED_NUMBER;

time_assignment_list:
	'{' time_assignment (',' time_assignment)* '}';

time_assignment: id = IDENTIFIER '=' val = UNSIGNED_NUMBER;

// module statements ==============================================  

net_declaration: 'wire' identifier_list ';';

gate_declaration:
	gate_type (instanceid = IDENTIFIER)? '(' ids = identifier_list ')' ';';
gate_type:
	'and'
	| 'or'
	| 'nand'
	| 'nor'
	| 'xnor'
	| 'not'
	| 'control'
	| 'response';

continuous_assign: 'assign' list_of_assignments ';';
list_of_assignments: assignment (',' assignment)*;
assignment: IDENTIFIER '=' expr;

module_instantiation:
	moduleid = IDENTIFIER instanceid = IDENTIFIER module_connections_list ';';
module_connections_list:
	'(' named_port_connection (',' named_port_connection)* ')';
named_port_connection:
	'.' port = IDENTIFIER '(' value = IDENTIFIER ')';

/* Expressions ======================================================= */

// expression: primary | unary_operator primary | expression binary_operator expression;

// primary: number | IDENTIFIER | '(' expression ')';

// unary_operator: NOT | NEG | AMPERSAND | NAND | BAR | NOR | XOR; binary_operator: AMPERSAND | BAR
// | XOR;

expr:
	NEG expr					# negateExpr
	| expr binary_operator expr	# binaryExpr
	| '(' expr ')'				# parenExpr
	| IDENTIFIER				# idExpr;

binary_operator: AND | NAND | OR | NOR | XOR;

/* Token groups ====================================================== */

defined_connection_id: IDENTIFIER;
defined_connection_id_list:
	defined_connection_id (',' defined_connection_id)*;
identifier_list: IDENTIFIER (',' IDENTIFIER)*;
number: UNSIGNED_NUMBER | BINARY_NUMBER;

/* Tokens ============================================================= */

NOT: '!';
NEG: '~';
NAND: '~&';
NOR: '~|';
XOR: '^';
ASSIGN: '=';
PLUS: '+';
MINUS: '-';
AND: '&';
OR: '|';

ONE_LINE_COMMENT:
	'//' .*? ('\r')? (EOF | '\n') -> channel(HIDDEN);
BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);
WHITE_SPACE: [ \t\n\r\f]+ -> channel(HIDDEN);

IDENTIFIER: [a-zA-Z_] ( [a-zA-Z0-9_$])*;

UNSIGNED_NUMBER: DECIMAL_DIGIT+;

fragment BINARY_NUMBER: BINARY_BASE BINARY_VALUE;
fragment BINARY_BASE: '`b';
fragment BINARY_VALUE: BINARY_DIGIT+;

fragment BINARY_DIGIT: 'x' | 'z' | [01];
fragment DECIMAL_DIGIT: [0-9];