/* 4 to 1 Multiplexer using 2 bit select vector
Sel selects which input to pass to output
sel  | F
 00  | a 
 01  | b 
 10  | c 
 11  | d 
*/

module Mux4_1 (
  input [1:0] sel,
  input a, b, c, d
  output F);

	assign F = (
        (((a & ~sel[0]) & ~sel[1]) | ((b & ~sel[0]) &  sel[1])) |
        (((c &  sel[0]) & ~sel[1]) | ((d &  sel[0]) &  sel[1]))
  )
endmodule

module main(output F);

  wire a, b, c, d;
  wire [1:0] sel;

  control(a);
  control(b);
  control(c);
  control(d);
  control(sel);

  Mux2_1 mux(.a(a), .b(b), .sel(sel), .F(F));

  buffer(F);

  test begin
    #02 {sel=2'b00, a=0, b=1, c=0, d=1}; // expect a = 0 
    #03 {sel=2'b01, a=0, b=1, c=0, d=1}; // expect b = 1 
    #04 {sel=2'b10, a=0, b=1, c=0, d=1}; // expect c = 0 
    #05 {sel=2'b11, a=0, b=1, c=0, d=1}; // expect d = 1 
    #06;
  end
endmodule