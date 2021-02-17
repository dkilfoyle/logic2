


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

module Mips (
  input clk, reset,
  input [31:0] instr,
  input [31:0] readdata,
  output [31:0] pc,
  output memwrite,
  output [31:0] aluout, writedata
);
  wire memtoreg, branch, alusrc, regdst, regwrite, jump, zero;
  wire [2:0] alucontrol;

  Controller c(
    // inputs
    .op(instr[31:26], .funct(instr[5:0]), .zero(zero), 
    // outputs
    .memtoreg(memtoreg), .memwrite(memwrite), .pcsrc(pcsrc), .alusrc(alusrc), .regdst(regdst), .regwrite(regwrite),
    .jump(jump), .alucontrol(alucontrol));

  Datapath dp(
    // inputs
    .clk(clk), .reset(reset), .memtoreg(memtoreg), .pcsrc(pcsrc), .alusrc(alusrc), .regdst(regdst), .regwrite(regwrite), 
    .jump(jump), .alucontrol(alucontrol), 
    .readdata(readdata)
    // outputs
    .zero(zero), .pc(pc), .instr(instr), .aluout(aluout), .writedata(writeddata));
endmodule

module Controller (
  input [5:0] op, funct,
  input zero,
  output memtoreg, memwrite,
  output pcsrc, alusrc,
  output regdst, regwrite,
  output jump,
  output [2:0] alucontrol)
;
  wire [1:0] aluop;
  wire branch;
  Maindec md (
    // inputs
    op,
    // outputs
    memtoreg, memwrite, branch, alusrc, regdst, regwrite, jump, aluop);
  Aludec ad (funct, aluop, alucontrol);
  assign pcsrc = branch & zero;
endmodule

module Maindec(
  input [5:0] op,
  output memtoreg, memwrite,
  output branch, alusrc,
  output regdst, regwrite,
  output jump,
  output [1:0] aluop
);
  reg [8:0] controls;
  assign {regwrite, regdst, alusrc, branch, memwrite, memtoreg, jump, aluop} = controls;
  always @ (*)
    case(op)
      6'b000000: controls = 9'b110000010; //Rtyp
      6'b100011: controls = 9'b101001000; //LW
      6'b101011: controls = 9'b001010000; //SW
      6'b000100: controls = 9'b000100001; //BEQ
      6'b001000: controls = 9'b101000000; //ADDI
      6'b000010: controls = 9'b000000100; //J
      default: controls = 9'bxxxxxxxxx; //???
    endcase
endmodule

module Aludec (
  input [5:0] funct,
  input [1:0] aluop,
  output reg [2:0] alucontrol
);
  always @ (*)
    case (aluop)
      2'b00: alucontrol = 3'b010; // add
      2'b01: alucontrol = 3'b110; // sub
      default: case(funct) // RTYPE
        6'b100000: alucontrol = 3'b010; // ADD
        6'b100010: alucontrol = 3'b110; // SUB
        6'b100100: alucontrol = 3'b000; // AND
        6'b100101: alucontrol = 3'b001; // OR
        6'b101010: alucontrol = 3'b111; // SLT
        default: alucontrol = 3'bxxx; // ???
      endcase
    endcase
endmodule


module Main (
  input [2:0] F,
  input [7:0] a, b,
  output [7:0] y,
  output cout
);




  Alu alu #(8) (.F(F), .a(a), .b(b), .y(y), .cout(cout));

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