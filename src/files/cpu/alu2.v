module Register #(parameter WIDTH = 8) (
  input clk,
  input [WIDTH-1:0] D,
  input EI,
  output reg [WIDTH-1:0] Q)
;
  wire CLK;
  assign CLK=(clk & EI);
  always @(posedge CLK)
    begin
      Q <= D;
    end
endmodule

module Adder #(parameter N=8) (
  input [N-1:0] a, b,
  input cin,
  output reg [N-1:0] sum,
  output reg cout);
  
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

module Bus(
  input [7:0] aluIn,
  output [7:0] out1, out2
);
  buffer(out1, aluIn);
  buffer(out2, aluIn);
endmodule

module Main(
  input clk, op, AI, BI,
  output [7:0] sum,
  output co);

  wire [7:0] regA2alu, regB2alu, alu2bus;
  wire [7:0] bus2regA, bus2regB;

  Bus bus(
    .aluIn(alu2bus),
    .out1(bus2regA),
    .out2(bus2regB)
  );

  Register #(8) regA(.clk(clk), .D(bus2regA), .Q(regA2alu), .EI(AI));
  Register #(8) regB(.clk(clk), .D(bus2regB), .Q(regB2alu), .EI(BI));
  
  Alu alu(.op(op), .A(regA2alu), .B(regB2alu), .res({co,alu2bus}));

  $imeta('main_alu_A',   '{"port":"NORTH"}' );
  $imeta('main_alu_B',   '{"port":"SOUTH"}' );
  $imeta('main_alu_res', '{"port":"WEST"}'  );
  $imeta('main_regA_Q-out',  '{"port":"SOUTH"}' );
  $imeta('main_regB_Q-out',  '{"port":"NORTH"}' );

  test begin
    #0   { op=1, AI=0, BI=0 }; // Q=0
    #6; // Q = 0
  end
endmodule