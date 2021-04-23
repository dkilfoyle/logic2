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

module Alu (
  input op,
  input [7:0] A,
  input [7:0] B,
  output [8:0] res);

  wire [7:0] sum;
  wire co;

  // reg one;
  // initial
  //   one <= 1'b1;

  wire [7:0] b2c;
  assign b2c = {
      B[7] ^ op,
      B[6] ^ op,
      B[5] ^ op,
      B[4] ^ op,
      B[3] ^ op,
      B[2] ^ op,
      B[1] ^ op,
      B[0] ^ op
    };
  
  Adder add(.a(A), .b(b2c), .cin(op), .sum(sum), .cout(co));
  assign res = {co, sum};
endmodule

module Main(
  input op,
  input [7:0] A,
  input [7:0] B,
  output [8:0] res);

  Alu alu(.op(op), .A(A), .B(B), .res(res));

  test begin
    #0   { op=1, A=3, B=2 }; // Q=0
    #4   { op=0, A=3, B=2 }; // Q=0 
    #6; // Q = 0
  end
endmodule