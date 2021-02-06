// 4 bit adder behavioural model (experimental)

module Adder #(parameter N=8) (
  input [N-1:0] a, b,
  input cin,
  output reg [N-1:0] sum,
  output reg cout
);
  always @(*)
  begin
    {cout, sum} = a + b + cin;
  end
endmodule

module Main(
  input [7:0] x, y,
  input cin,
  output [7:0] SUM, COUT
); 

  Adder myAdder #(6) (
		.a(x),
		.b(y),
    .cin(cin),
		.sum(SUM),
		.cout(COUT)
  );

  test begin
    #0  { cin=0, x=0,  y=0 };
    #1  { cin=0, x=5,  y=1 };
    #2  { cin=0, x=10, y=2 };
    #3  { cin=0, x=15, y=3 };
    #4  { cin=0, x=20, y=4 };
    #5  { cin=0, x=25, y=5 };
    #6  { cin=0, x=254, y=6 };
    #8;
  end
endmodule