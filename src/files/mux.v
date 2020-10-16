/* 2 to 1 Multiplexer
Sel selects which input to pass to output
sel a b | F
 0  0 0 | 0 
 0  0 1 | 0 
 0  1 0 | 1 
 0  1 1 | 1 
----------- 
 1  0 0 | 0
 1  0 1 | 1
 1  1 0 | 0
 1  1 1 | 1
 */

module Mux2_1 (
	input sel,
	input a, b,
	output F);

	assign F = (~sel & a) | (sel & b);
endmodule

module main;
  wire a, b, sel;
  wire F;

  control(a);
  control(b);
  control(sel);

  Mux2_1 mux(.a(a), .b(b), .sel(sel), .F(F));
  response(F);

  test begin
    #01 {sel=0, a=0, b=0}; // expect 0 
    #02 {sel=0, a=0, b=1}; // expect 0 
    #03 {sel=0, a=1, b=0}; // expect 1 
    #04 {sel=0, a=1, b=1}; // expect 1 
    #05 {sel=1, a=0, b=0}; // expect 0
    #06 {sel=1, a=0, b=1}; // expect 1
    #07 {sel=1, a=1, b=0}; // expect 0
    #08 {sel=1, a=1, b=1}; // expect 1
    #09;
  end
endmodule