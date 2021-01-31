// 4 bit adder behavioural model (experimental)

module Addder #(parameter N=8) (
  input [N-1:0] a, b,
  input cin,
  output [N-1:0] s,
  output cout
);
  assign {cout, s} = a + b + cin;
endmodule

module Main(
  input [7:0] x, y,
  input ci,
  output [7:0] SUM, COUT
); 

  Adder myAdder(
		.a(x),
		.b(y),
    .ci(ci),
		.sum(SUM),
		.cout(COUT)
  );

  test begin
    #0  { ci=0, x=0,  y=0 };
    #1  { ci=0, x=5,  y=1 };
    #2  { ci=0, x=10, y=2 };
    #3  { ci=0, x=15, y=3 };
    #4  { ci=0, x=20, y=4 };
    #5  { ci=0, x=25, y=5 };
    #6  { ci=0, x=40, y=6 };
    #8;
  end
endmodule