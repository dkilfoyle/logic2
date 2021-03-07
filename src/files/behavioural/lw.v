// lw instruction example
// lw is a i type instruction
// op = 0b100011 = instr[31:26] = 35
// rs = base address storedd in source register = instr[25:21]
// rt = destination register = instr[20:16]
// imm = address offset as immediate = instr[15:0]
// eg lw $s3, 4($s4) = load 32 bit word at address $s4 + 4 into $s3
// rf[19] = { 35, 20, 19, 4 }
// 100011 10100 10011 0000000000000100

module Flopr #(parameter WIDTH=32) (
  input clk, reset,
  input [WIDTH-1:0] d,
  output reg [WIDTH-1:0] q
);
  always @ (posedge clk, posedge reset)
    if (reset) q = 0;
    else q = d;
endmodule

module Add #(parameter N = 32) (
  input [N-1:0] a, b,
  output reg [N-1:0] y
);
  always @(*)
  begin
    y = a + b;
  end
endmodule

module Mux2 #(parameter N=32) (
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

module Mux4 #(parameter N=32) (
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

module SignExtend(
  input [15:0] a,
  output reg [31:0] y
);
  always @(*)
    y = { { 16 { a[15] } }, a};
endmodule

module DataMemory(
  input clk, we,
  input [31:0] a, wd, // a is address in bytes = word * 4
  output reg [31:0] rd
);
  reg [31:0] RAM[63:0];
  initial
    begin
      RAM[3] = 999;
      // word 3 (addressed as byte 12)
    end
  always @(*)
    rd = RAM[a[31:2]]; // word aligned
  always @ (posedge clk)
    if (we) RAM[a[31:2]] = wd;
endmodule

module InstructionMemory(
  input [5:0] a,
  output reg [31:0] rd
);
  reg [31:0] RAM[63:0];
  initial
    begin
      RAM[0] = 32'b100011_10100_10011_0000000000000100; 
      // lw $s3, 4($s4)
      // lw(35) rs(20) rt(19) offset(4)
      // lw reg19, reg20+4
      // load into reg 19 the contents of ram at address reg20 + 4 in BYTES
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

  initial begin
    rf[20] = 8;
  end

  always @ (posedge clk)
    if (we3) rf[wa3] = wd3;

  always @(*)
  begin
    rd1 = (ra1 != 0) ? rf[ra1] : 0;
    rd2 = (ra2 != 0) ? rf[ra2] : 0;
  end
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
  Add adder #(N) (.a(a), .b(bb),  .y(S));

  buffer(y);
  Mux4 ymux(.a(aandbb), .b(aorbb), .c(S), .d(S[N-1]), .sel(F[1:0]), .y(y));
endmodule

// Simplified Datapath with logic for lw and sw only
module Datapath (
  input clk,
  input reset,
  // inputs from memory
  input [31:0] instr,
  input [31:0] readdata,
  
  // inputs from Controller
  input regwrite,
  input [2:0] alucontrol,

  output reg [31:0] pc,
  output reg [31:0] aluout,
  output reg [31:0] writedata,
  output reg [31:0] readdata
);

  wire [31:0] srca, signimm, pcplus4;
  buffer(srca);
  buffer(signimm);
  buffer(pcplus4);

  // signimm = sign extended i.imm
  SignExtend se(instr[15:0], signimm);

  // next PC logic
  Add pcadd(pc, 32'b100, pcplus4); // pcplus4 = pc + 4
  Flopr pcreg(clk, reset, pcplus4, pc); // if clkposedge pc = pcplus4

  // srca = rf[rs]
  RegisterFile rf(
    .clk(clk),
    .we3(regwrite),
    .ra1(instr[25:21]), // rs
    .ra2(instr[20:16]), // rt
    .wa3(instr[20:16]), // rt
    .wd3(readdata),
    // outputs
    .rd1(srca),
    .rd2(writedata)
  );
  
  // aluout = srca + signimm
  Alu alu(alucontrol, srca, signimm, aluout); 
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
      default: $error("Maindec invalid op code"); // controls = 9'bxxxxxxxxx; //???
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
        default: $error("Aludec: invalid funct code"); // alucontrol = 3'bxxx; // ???
      endcase
    endcase
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
    .op(instr[31:26]),     // 0 for r type, else lw, sw, beq 
    // .zero(zero), 
    // .funct(instr[5:0]),   // add, sub, and, or, sll, srl etc

    // outputs
    .memwrite(memwrite),  // write the contents of WD into memory at address A
    .regwrite(regwrite),  // write the contents of WD3 into register specificed by A3
    .alucontrol(alucontrol)
    // .pcsrc(pcsrc),        // pcnext = pcnextbr & 0 ? pcbranch : pcplus4
    // .alusrc(alusrc),      // srcB (2nd input to ALU) = signedImm | register read data RD2
    // .memtoreg(memtoreg),  // result (input to register write data WD3) = memory read data RD | ALUResult
    // .regdst(regdst),      // writereg (input to register address A3) = regdst ? r.rd : i.rt
    // .jump(jump),          // pcnext = jump ? pcjump : pcnextbr
  );

  Datapath dp(
    // inputs
    .clk(clk), 
    .reset(reset),
    // memory inputs
    .instr(instr),
    .readdata(readdata),
    // controller inputs
    .regwrite(regwrite), 
    .alucontrol(alucontrol), 
    // .memtoreg(memtoreg),
    // .pcsrc(pcsrc),
    // .alusrc(alusrc),
    // .regdst(regdst),
    // .jump(jump),
    
    // outputs
    .pc(pc),
    .aluout(aluout),
    .writedata(writedata)
    // .zero(zero),
  );
endmodule

module Main (
  input clk,
  input reset,
  output [31:0] pc,
  output [31:0] instr,
  output [31:0] aluout,
  output [31:0] readdata,
  output memwrite,
  output [31:0] writedata
);

  Mips mips(
    .clk(clk),
    .instr(instr),
    .readdata(readdata),
    // outputs
    .pc(pc),
    .memwrite(memwrite),
    .aluout(aluout),
    .writedata(writedata)
  );

  InstructionMemory imem(pc[7:2], instr);
  DataMemory dmem(.clk(clk), .we(memwrite), .a(aluout), .wd(writedata), .rd(readdata));

  test begin
    #0  { reset=0, clk=0 }; 
    #1  { clk=1 }; 
    // #2  { clk=0, pc=1 }; 
    #3;
  end

  $display begin
    main_imem_RAM = instruction;
  end

endmodule