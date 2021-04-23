// ALU
// Based on Digital Design and Computer Architecture fig 5.15
// 000 A AND B
// 001 A OR B
// 010 A + B
// 011 not used
// 100 A and ~B
// 101 A or ~B
// 110 A - B
// 111 SLT

module Add #(parameter N = 8) (
  input [N-1:0] a, b,
  input cin,
  output reg [N-1:0] y,
  output reg cout
);
  always @(*)
  begin
    {cout, y} = a + b + cin;
  end
endmodule

module Mux2 #(parameter N=8) (
  input [N-1:0] a, b,
  input sel,
  output reg [N-1:0] y
);
  always @(*)
  begin
    case(sel)
      // abcdefg
      0: y = a;
      1: y = b;
      default: y = a;
    endcase
  end
endmodule

module Mux4 #(parameter N=8) (
  input [N-1:0] a, b, c, d,
  input [1:0] sel,
  output reg [N-1:0] y
);
  always @(*)
  begin
    case(sel)
      // abcdefg
      0: y = a;
      1: y = b;
      2: y = c;
      3: y = d;
      default: y = a;
    endcase
  end
endmodule

module Alu #(parameter N=8) (
  input [2:0] F,
  input [N-1:0] a, b,
  output [N-1:0] y,
  output cout
); 

  wire [N-1:0] notb;
  assign notb = ~b;

  wire [N-1:0] bb;
  Mux2 #(N) bbmux (.a(b), .b(notb), .sel(F[2]), .y(bb));
  
  wire [N-1:0] aandbb, aorbb;
  assign aandbb = a & bb;
  assign aorbb = a | bb;

  wire [N-1:0] S;
  Add #(N) adder (.a(a), .b(bb), .cin(F[2]), .y(S), .cout(cout));

  Mux4 ymux(.a(aandbb), .b(aorbb), .c(S), .d(S[N-1]), .sel(F[1:0]), .y(y));
endmodule


module Main (
  input [2:0] F,
  input [7:0] a, b,
  output [7:0] y,
  output cout
);

  Alu #(8) alu (.F(F), .a(a), .b(b), .y(y), .cout(cout));

  test begin
    #0  { F=0, a=2, b=3 }; // AND
    #1  { F=1, a=2, b=3 }; // OR
    #2  { F=2, a=2, b=3 }; // +
    #3  { F=4, a=2, b=3 }; // A AND ~B
    #4  { F=5, a=2, b=3 }; // A OR ~B
    #5  { F=6, a=2, b=3 }; // -
    #6  { F=7, a=2, b=3 }; // SLT = A - B which is negative (N-1 bit is 1) if A < B
    #7;
  end

endmodule