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

  Adder #(4) myAdder  (
		.a(x),
		.b(y),
    .cin(cin),
		.sum(SUM),
		.cout(COUT)
  );

  test begin
    #0  { cin=0, x=0, y=0 };
    #1  { cin=0, x=1, y=8 };
    #2  { cin=0, x=3, y=7 };
    #3  { cin=0, x=5, y=6 };
    #4  { cin=0, x=7, y=5 };
    #5  { cin=0, x=8, y=8 };
    #6;
  end
endmodule