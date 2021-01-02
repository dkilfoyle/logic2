grammar vlg;

@header { /* eslint-disable */ }

// Adapted from:
// https://github.com/Nic30/hdlConvertor/blob/master/grammars/sv2017Parser.g4 and
// https://www.verilog.com/VerilogBNF.html
// https://github.com/antlr/grammars-v4/blob/master/verilog/verilog/Verilog2001.g4

/* start  ========================================================== */

source_text: modules EOF;
modules: module* module_main EOF;

/* Module declaration ============================================== */

module_main
	:	'module' MAIN (module_ports)? ';' module_item* test_bench? 'endmodule'
	;

MAIN: 'Main';

module
	:	'module' IDENTIFIER (module_ports)? ';' module_item* 'endmodule'
	;

module_ports
	:	'(' port_declaration (',' port_declaration)* ')'
	;

port_declaration
	: port_direction identifier_list
	;

port_direction: 'input' | 'output';

module_item
	:	net_declaration				# net
	| reg_declaration 			# reg
	| continuous_assign			# assign
	| gate_instantiation		# gate
	| module_instantiation	# instance
	| initial_construct 		# initial
	| always_construct 			# always
	;

/* Test bench ====================================================== */

test_bench
	: 'test' 'begin' test_time* 'end'
	;

test_time
	: time_stamp time_assignment_list? ';'
	;

time_stamp
	: '#' num=Decimal_number
	;

time_assignment_list
	:	'{' time_assignment (',' time_assignment)* '}'
	;

time_assignment
	: id = IDENTIFIER '=' val=Decimal_number
	;

// 2. Declarations

net_declaration: 'wire' identifier_list ';';
reg_declaration: 'reg' identifier_list ';';

// 3. Instantiations ==============================================  

module_instantiation
	:	moduleid = IDENTIFIER instanceid = IDENTIFIER module_connections_list ';'
	;

module_connections_list
	: '(' named_port_connection (',' named_port_connection)* ')'
	;

named_port_connection
	:	'.' port = identifier '(' value = identifier ')'
	;

gate_instantiation
	:	gate_type (instanceid = IDENTIFIER)? '(' ids = identifier_list ')' ';'
	;

gate_type
	:	'and'
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
	| 'ledbar'
	;

continuous_assign
	: 'assign' list_of_net_assignments ';'
	;

list_of_net_assignments
	: net_assignment (',' net_assignment)*
	;

net_assignment
	: lvalue '=' expr
	;

expr // For gate assign only
	: NEG expr										# negateExpr
	| expr binary_gate_op expr		# binaryExpr
	| '(' expr ')'								# parenExpr
	| IDENTIFIER									# idExpr;

binary_gate_op: AND | NAND | OR | NOR | XOR;	

/* 6.2 Procedural Blocks ============================================= */

initial_construct
	: 'initial' statement
	;

always_construct
	: 'always' '@' '(' event_list ')' statement
	;

event_list
	: event_every
	| event_primary ('or' event_primary | ',' event_primary)*
  ;

event_every
	: '*'
	;

event_primary
	: event_type? identifier
	;

event_type
	: 'posedge' 
	| 'negedge' 
  ;

/* 6.3 Sequential blocks ============================================= */

seq_block
	: 'begin' statement* 'end'
	;

/* 6.4 Statements ==================================================== */

statement
	: blocking_assignment ';'
	| conditional_statement
	| seq_block
	;

blocking_assignment
	: lhs = lvalue '=' rhs = expression
	;

conditional_statement
	: 'if' '(' expression ')' statement ('else' statement)?
	;

/* 8.1 Concatenations============================================ */

concatenation
	: '{' expression (',' expression)* '}'
	;

/* 8.3 Expressions ============================================== */

expression // for general expresions, provides ctx.value
	: term (binary_operator term)*
	;

term
	: unary_operator primary										# unaryPrimaryExpression
	| primary																		# primaryExpression
	;

/* 8.4 Primaries =============================================== */

primary
	: number
	| identifier
	| concatenation
	| parens_expression
	;

parens_expression
	: '(' expression ')'
	;

/* 8.5 l values ================================================= */

lvalue
	: identifier
	| concatenation
	;

/* 8.6 Operators ================================================= */

unary_operator
	: PLUS | MINUS | NOT
	;

binary_operator
	: PLUS | MINUS | MUL | DIV | EQUAL | NOTEQUAL
	;

/* 8.7 Numbers  */

number
   : Decimal_number
   | Octal_number
   | Binary_number
   | Hex_number
   ;

Decimal_number
   : Unsigned_number | (Size)? Decimal_base Unsigned_number | (Size)? Decimal_base X_digit ('_')* | (Size)? Decimal_base Z_digit ('_')*
   ;

Binary_number
   : (Size)? Binary_base Binary_value
   ;

Octal_number
   : (Size)? Octal_base Octal_value
   ;

Hex_number
   : (Size)? Hex_base Hex_value
   ;

fragment Sign
   : [+-]
   ;

fragment Size
   : Non_zero_unsigned_number
   ;

fragment Non_zero_unsigned_number
   : Non_zero_decimal_digit ('_' | Decimal_digit)*
   ;

fragment Unsigned_number
   : Decimal_digit ('_' | Decimal_digit)*
   ;

fragment Binary_value
   : Binary_digit ('_' | Binary_digit)*
   ;

fragment Octal_value
   : Octal_digit ('_' | Octal_digit)*
   ;

fragment Hex_value
   : Hex_digit ('_' | Hex_digit)*
   ;

fragment Decimal_base
   : '\'' [sS]? [dD]
   ;

fragment Binary_base
   : '\'' [sS]? [bB]
   ;

fragment Octal_base
   : '\'' [sS]? [oO]
   ;

fragment Hex_base
   : '\'' [sS]? [hH]
   ;

fragment Non_zero_decimal_digit
   : [1-9]
   ;

fragment Decimal_digit
   : [0-9]
   ;

fragment Binary_digit
   : X_digit | Z_digit | [01]
   ;

fragment Octal_digit
   : X_digit | Z_digit | [0-7]
   ;

fragment Hex_digit
   : X_digit | Z_digit | [0-9a-fA-F]
   ;

fragment X_digit
   : [xX]
   ;

fragment Z_digit
   : [zZ?]
   ;


/* Token groups ============================================== */

defined_connection_id: IDENTIFIER;
defined_connection_id_list:	defined_connection_id (',' defined_connection_id)*;
identifier_list: identifier (',' identifier)*;
range: '[' start = Unsigned_number ':' end = Unsigned_number ']';

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
GT: '>';
EQUAL: '==';
NOTEQUAL: '!=';

/* 9.2 Comments  ============================================== */

One_line_comment
   : '//' .*? '\r'? '\n' -> channel (HIDDEN)
   ;

Block_comment
   : '/*' .*? '*/' -> channel (HIDDEN)
   ;

/* 9.3 Identifiers ============================================ */

IDENTIFIER: [a-zA-Z_] ( [a-zA-Z0-9_$])*;

identifier
	: IDENTIFIER																			#idPlain
	| IDENTIFIER '[' expression ']'										#idOffset
	| IDENTIFIER '[' expression ':' expression ']'		#idRange
	;

/* 9.5 Whitespace ============================================= */

White_space
   : [ \t\n\r] + -> channel (HIDDEN)
   ;