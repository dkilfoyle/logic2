// lw instruction example
// lw is a i type instruction
// op = 0b100011 = instr[31:26] = 35
// rs = base address storedd in source register = instr[25:21]
// rt = destination register = instr[20:16]
// imm = address offset as immediate = instr[15:0]
// eg lw $s3, 4($s4) = load 32 bit word at address $s4 + 4 into $s3
// rf[19] = { 35, 20, 19, 4 }
// 100011 10100 10011 0000000000000100

module DataMemory(
  input clk, we,
  input [31:0] a, wd,
  output [31:0] rd
);
  reg [31:0] RAM[63:0];
  initial
    begin
      RAM[12] = 999;
    end
  always @(*)
    rd = RAM[a[31:2]]; // word aligned
  always @ (posedge clk)
    if (we) RAM[a[31:2]] = wd;
endmodule

module InstructionMemory(
  input [5:0] a,
  output [31:0] rd
);
  reg [31:0] RAM[63:0];
  initial
    begin
      RAM[0] = 31'b100011_10100_10011_0000000000000100; // lw $s3, 4($s4)
    end
  always @(*)
    rd = RAM[a]; // word aligned
endmodule

module RegisterFile (
  input clk,
  input we3,
  input [4:0] ra1, ra2, wa3,
  input [31:0] wd3,
  output reg [31:0] rd1, rd2
);
  reg [31:0] rf[31:0];
  always @ (posedge clk)
    if (we3) rf[wa3] = wd3;

  always @(*)
  begin
    rd1 = (ra1 != 0) ? rf[ra1] : 0;
    rd2 = (ra2 != 0) ? rf[ra2] : 0;
  end
endmodule

module SignExtend(
  input [15:0] a,
  output [31:0] y
);
  always @(*)
    y = { { 16 { a[15] } }, a};
endmodule

module Alu #(parameter N=32) (
  input [2:0] F,
  input [N-1:0] a, b,
  output [N-1:0] y,
  output cout
); 

  wire [N-1:0] notb;
  assign notb = ~b;

  wire [N-1:0] bb;
  buffer(bb);

  Mux2 bbmux #(N) (.a(b), .b(notb), .sel(F[2]), .y(bb));
  
  wire [N-1:0] aandbb, aorbb;
  assign aandbb = a & bb;
  assign aorbb = a | bb;

  wire [N-1:0] S;
  buffer(S);
  buffer(cout);
  Add adder #(N) (.a(a), .b(bb), .cin(F[2]), .y(S), .cout(cout));

  buffer(y);
  Mux4 ymux(.a(aandbb), .b(aorbb), .c(S), .d(S[N-1]), .sel(F[1:0]), .y(y));
endmodule

module LW (
  input clk,
  output [31:0] pc,
  output [31:0] result
);
  wire regwrite;
  wire [2:0] alucontrol;
  wire [31:0] instr;

  always @(*)
    begin
      regwrite = 1;
      alucontrol = 3'b010;
    end

  // instr = im[pc];
  InstructionMemory im(.a(pc), .rd(instr))

  // srca = rf[rs]
  RegisterFile rf(
    .clk(clk)
    .regwrite(regwrite)
    .A1(instr[25:21]), // rs
    .A2(instr[20:16]), // rt
    .WE3(regwrite),
    .WD3(result),
    // outputs
    .RD1(srca));

  // signimm = sign extended i.imm
  SignExtend se(instr[15:0], signimm);
  
  // aluout = srca + signimm
  Alu alu(srca, signimm, alucontrol, aluout); 

  DataMemory dm(.clk(clk), .a(aluout), .rd(result));

endmodule

module Main (
  input [31:0] pc,
  output [31:0] result
);

  LW lw (.clk(clk), .pc(pc), .result(result));

  test begin
    #0  { clk=0; pc=0; }; 
    #1  { clk=1; pc=0; }; 
    #2  { clk=0; pc=1; }; 
    #3;
  end

endmodule