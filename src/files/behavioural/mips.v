


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

module flopr #(parameter WIDTH=8) (
  input clk, reset,
  input [WIDTH-1:0] d,
  output reg [WIDTH-1:0] q
);
  always @ (posedge clk, posedge reset)
    if (reset) q = 0;
    else q = d;
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

module ShiftLeft2 (
  input [31:0] a,
  output [31:0] y
);
  // shift left by 2
  always @(*)
    y = { a[29:01], 2'b00 };
endmodule

module SignExtend(
  input [15:0] a,
  output [31:0] y
);
  always @(*)
    y = { { 16 { a[15] } }, a};
endmodule

module FlopResettable #(parameter WIDTH = 8) (
  input clk, reset,
  input [WIDTH-1:0] d,
  output reg [WIDTH-1:0] q
);
  always @ (posedge clk, posedge reset)
    if (reset) q = 0; else q = d;
endmodule

module DataMemory(
  input clk, we,
  input [31:0] a, wd,
  output [31:0] rd
);
  reg [31:0] RAM[63:0];
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
      RAM[0] = 0x20020005; // addi $2, $0, 5
      RAM[1] = 0x2003000c; // addi $4, $0, 12
    end
  always @(*)
    rd = RAM[a]; // word aligned
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
    .op(instr[31:26],     // 0 for r type, else lw, sw, beq 
    .funct(instr[5:0]),   // add, sub, and, or, sll, srl etc
    .zero(zero), 
    // outputs
    .memwrite(memwrite),  // write the contents of WD into memory at address A
    .regwrite(regwrite),  // write the contents of WD3 into register specificed by A3
    .pcsrc(pcsrc),        // pcnext = pcnextbr & 0 ? pcbranch : pcplus4
    .alusrc(alusrc),      // srcB (2nd input to ALU) = signedImm | register read data RD2
    .memtoreg(memtoreg),  // result (input to register write data WD3) = memory read data RD | ALUResult
    .regdst(regdst),      // writereg (input to register address A3) = regdst ? r.rd : i.rt
    .jump(jump),          // pcnext = jump ? pcjump : pcnextbr
    .alucontrol(alucontrol)
  );

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

module Datapath (
  input clk, reset,
  input memtoreg, 
  input pcsrc,
  input alusrc,
  input regdst,
  input regwrite, 
  input jump,
  input [2:0] alucontrol,
  output zero,
  output [31:0] pc,
  input [31:0] instr,
  output [31:0] aluout, writedata,
  input [31:0] readdata
);
  wire [4:0] writereg;
  wire [31:0] pcnext, pcnextbr, pcplus4, pcbranch;
  wire [31:0] signimm, signimmsh;
  wire [31:0] srca, srcb;
  wire [31:0] result;

  // signimm = sign extended i.imm
  signext se(instr[15:0], signimm);

  // next PC logic
  flopr #(32) pcreg(clk, reset, pcnext, pc);
  adder pcadd1 (pc, 32'b100, pcplus4); // pcplus4 = pc + 4
  sl2 immsh(signimm, signimmsh); // signimmsh = signimm * 4 = pc offset
  adder pcadd2(pcplus4, signimmsh, pcbranch); // pcbranch = pcplus4 + (offset * 4)
  mux2 #(32) pcbrmux(pcplus4, pcbranch, pcsrc,  pcnextbr); // pcnextbr = pcsrc ? pcbranch : pcplus4
  mux2 #(32) pcmux(pcnextbr, {pcplus4[31:28],  instr[25:0], 2'b00}, jump, pcnext);
  // pcnext = jump ? {top4bitspc j.address word_aligning_2bits} : pcnextbr

  // register file logic
  mux2 #(5) wrmux(instr[20:16], instr[15:11],  regdst, writereg); // writereg = regdst ? r.rd : r.rt
  mux2 #(32) resmux(aluout, readdata,  memtoreg, result); // result = memtoreg ? readdata : aluout
  regfile rf(clk, regwrite, 
    .A1(instr[25:21]), // rs
    .A2(instr[20:16]), // rt
    .A3(writereg),
    .WD3(result),
    // outputs
    .RD1(srca),
    .RD2(writedata));

  // ALU logic
  mux2 #(32) srcbmux(writedata, signimm, alusrc, srcb); // srcb = alusrc ? signimm : writedata
  alu alu(srca, srcb, alucontrol, aluout, zero); // aluout = alucontrol(srca, srcb)
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