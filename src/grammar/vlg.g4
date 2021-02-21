grammar vlg;

@header { /* eslint-disable */ }

// Adapted from: https://github.com/Nic30/hdlConvertor/blob/master/grammars/sv2017Parser.g4 and
// https://www.verilog.com/VerilogBNF.html
// https://github.com/antlr/grammars-v4/blob/master/verilog/verilog/Verilog2001.g4

/* start  ========================================================== */

source_text: modules EOF;
modules: module* module_main EOF;

/* Module declaration ============================================== */

module_main:
	'module' MAIN module_parameter? (module_ports)? ';' module_item* test_bench? 'endmodule';

MAIN: 'Main';

module:
	'module' IDENTIFIER module_parameter? (module_ports)? ';' module_item* 'endmodule';

module_parameter: '#' '(' 'parameter' IDENTIFIER '=' number ')';

module_ports: '(' port_declaration (',' port_declaration)* ')';

port_declaration:
	port_direction (reg = 'reg')? (bitDim = range)? port_identifier_list;

port_identifier_list: IDENTIFIER (',' IDENTIFIER)*;

port_direction: 'input' | 'output';

module_item:
	net_declaration			# net
	| reg_declaration		# reg
	| net_assignment		# assign
	| gate_instantiation	# gate
	| module_instantiation	# instance
	| initial_construct		# initial
	| always_construct		# always;

/* Test bench ====================================================== */

test_bench: 'test' 'begin' test_time* 'end';

test_time: time_stamp time_assignment_list? ';';

time_stamp: '#' num = Decimal_number;

time_assignment_list:
	'{' time_assignment (',' time_assignment)* '}';

time_assignment: id = IDENTIFIER '=' val = Decimal_number;

// 2. Declarations

net_declaration:
	'wire' (bitDim = range)? ids = simple_identifier_list ';';
reg_declaration:
	'reg' (bitDim = range)? ids = register_identifier_list ';';
	
register_identifier_list: register_identifier (','  register_identifier)*;

register_identifier: 
	IDENTIFIER
	| IDENTIFIER range;

simple_identifier_list: IDENTIFIER (',' IDENTIFIER)*;

// TODO Add dimension to net and reg

// 3. Instantiations ==============================================  

module_instantiation:
	moduleID = IDENTIFIER instanceID = IDENTIFIER (
		params = parameter_value_assignment
	)? (
		named_module_connections_list
		| ordered_module_connections_list
	) ';';

parameter_value_assignment:
	'#' '(' params += expression (',' params += expression)* ')';

named_module_connections_list:
	'(' named_port_connection (',' named_port_connection)* ')';

named_port_connection:
	'.' portID = IDENTIFIER '(' value = identifier ')';

ordered_module_connections_list:
	'(' ids += identifier (',' ids += identifier)* ')';

gate_instantiation:
	gate_type '(' gateID = IDENTIFIER (',' ids = identifier_list)? ')' ';';

gate_type:
	'and'
	| 'or'
	| 'xor'
	| 'nand'
	| 'nor'
	| 'xnor'
	| 'not'
	| 'control'
	| 'response'
	| 'buffer'
	| 'sevenseg'
	| 'number'
	| 'ledbar';

net_assignment: 'assign' lvalue '=' expr ';';

// expr // For gate assign only : NEG expr # negateExpr | expr binary_gate_op expr # binaryExpr |
// '(' expr ')' # parenExpr | IDENTIFIER # idExpr;

// binary_gate_op: AND | NAND | OR | NOR | XOR;	

/* 6.2 Procedural Blocks ============================================= */

initial_construct: 'initial' statement_block;

always_construct:
	'always' '@' '(' event_list ')' statement_block;

event_list:
	event_every
	| event_primary ('or' event_primary | ',' event_primary)*;

event_every: '*';

event_primary: event_type? identifier;

event_type: 'posedge' | 'negedge';

/* 6.3 Sequential blocks ============================================= */

statement_block: seq_block | statement;
seq_block: 'begin' statement* 'end';

/* 6.4 Statements ==================================================== */

statement:
	blocking_assignment ';'
	| conditional_statement
	| case_statement;

blocking_assignment: lhs = lvalue '=' rhs = expression;

conditional_statement:
	'if' '(' cond = expression ')' thenblock = statement_block (
		'else' elseblock = statement_block
	)?;

case_statement:
	'case' '(' casevar = identifier ')' clauses += case_clause+ defaultclause = case_default?
		'endcase';

case_clause: number ':' statement_block;
case_default: 'default' ':' statement_block;

/* 8.1 Concatenations============================================ */

concatenation: '{' identifier_list '}';

/* 8.3 Expressions ============================================== */

expression: // behavioural
	number																	# atomExpression
	| identifier															# atomExpression
	| concatenation															# atomExpression
	| '(' expression ')'													# parensExpression
	| op = (PLUS | MINUS) expression										# unaryExpression
	| expression op = (MUL | DIV) expression								# binaryExpression
	| expression op = (PLUS | MINUS) expression								# binaryExpression
	| expression op = (LT | LTE | GT | GTE | EQUAL | NOTEQUAL) expression	# binaryExpression
	| expression '?' expression ':' expression #ternaryExpression
	;

expr: // gate
	identifier						# atomExpr
	| '(' expr ')'					# parensExpr
	| op = unary_gate_op expr		# unaryExpr
	| expr op = binary_gate_op expr	# binaryExpr;

binary_gate_op: AND | NAND | OR | NOR | XOR;
unary_gate_op: NOT | NEG;

/* 8.5 l values ================================================= */

lvalue: identifier | concatenation;

/* 8.6 Operators ================================================= */

unary_operator: PLUS | MINUS | NOT;

binary_operator: PLUS | MINUS | MUL | DIV | EQUAL | NOTEQUAL;

/* 8.7 Numbers  */

number:
	Decimal_number	# decimal
	| Octal_number	# octal
	| Binary_number	# binary
	| Hex_number	# hex;

Decimal_number:
	Unsigned_number
	| (Size Decimal_base)? Unsigned_number;

Binary_number: (Size)? Binary_base Binary_value;

Octal_number: (Size)? Octal_base Octal_value;

Hex_number: (Size)? Hex_base Hex_value;

fragment Sign: [+-];

fragment Size: Non_zero_unsigned_number;

fragment Non_zero_unsigned_number:
	Non_zero_decimal_digit ('_' | Decimal_digit)*;

fragment Unsigned_number: Decimal_digit ('_' | Decimal_digit)*;

fragment Binary_value: Binary_digit ('_' | Binary_digit)*;

fragment Octal_value: Octal_digit ('_' | Octal_digit)*;

fragment Hex_value: Hex_digit ('_' | Hex_digit)*;

fragment Decimal_base: '\'' [sS]? [dD];

fragment Binary_base: '\'' [sS]? [bB];

fragment Octal_base: '\'' [sS]? [oO];

fragment Hex_base: '\'' [sS]? [hH];

fragment Non_zero_decimal_digit: [1-9];

fragment Decimal_digit: [0-9];

fragment Binary_digit: X_digit | Z_digit | [01];

fragment Octal_digit: X_digit | Z_digit | [0-7];

fragment Hex_digit: X_digit | Z_digit | [0-9a-fA-F];

fragment X_digit: [xX];

fragment Z_digit: [zZ?];

/* Token groups ============================================== */

defined_connection_id: IDENTIFIER;
defined_connection_id_list:
	defined_connection_id (',' defined_connection_id)*;
identifier_list: identifier (',' identifier)*;
range:
	'[' rangestart = expression ':' rangeend = expression ']';

/* Tokens ===================================================== */

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
MUL: '*';
DIV: '/';
LT: '<';
LTE: '<=';
GT: '>';
GTE: '>=';
EQUAL: '==';
NOTEQUAL: '!=';

/* 9.2 Comments  ============================================== */

One_line_comment: '//' .*? '\r'? '\n' -> channel (HIDDEN);

Block_comment: '/*' .*? '*/' -> channel (HIDDEN);

/* 9.3 Identifiers ============================================ */

IDENTIFIER: [a-zA-Z_] ( [a-zA-Z0-9_$])*;

identifier:
	IDENTIFIER										# idPlain
	| IDENTIFIER '[' expression ']'					# idOffset
	| IDENTIFIER '[' expression ':' expression ']'	# idRange;

/* 9.5 Whitespace ============================================= */

White_space: [ \t\n\r]+ -> channel (HIDDEN);