// adapted from
// https://github.com/google/bbcpu
// https://github.com/TheSUPERCD/8bit_MicroComputer_Verilog

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

module TriBuff #(parameter WIDTH = 8) (
  input [WIDTH-1:0] data,
  input enable,
  output [WIDTH-1:0] dataOut
);
  assign dataOut = enable ? data : {WIDTH{1'bz}};
endmodule

module RAM(
  input clk,
  input [3:0] address,
  input write_enable,
  input read_enable,
  inout [7:0] data
);
  reg [7:0] Memory[15:0];
  reg [7:0] buffer;

  initial begin
    Memory[0] <= 8'b0001_1010;
    Memory[1] <= 8'b0010_1011;
    Memory[2] <= 8'b0100_0110;
    Memory[3] <= 8'b0011_1100;
    Memory[4] <= 8'b0010_1101;
    Memory[5] <= 8'b1110_0000;
    Memory[6] <= 8'b0001_1110;
    Memory[7] <= 8'b0010_1111;
    Memory[8] <= 8'b1110_0000;
    Memory[9] <= 8'b1111_0000;
    Memory[10] <= 8'b0000_0011;
    Memory[11] <= 8'b0000_0010;
    Memory[12] <= 8'b0000_0001;
    Memory[13] <= 8'b0000_0101;
    Memory[14] <= 8'b0000_1010;
    Memory[15] <= 8'b0000_1011;
  end

  always @(posedge clk)
    begin
      if(write_enable & ~read_enable)
        Memory[address] <= data;
      else
        buffer <= Memory[address];
    end

  assign data = (read_enable & ~write_enable) ? buffer : 8'bzzzzzzzz;
endmodule

module PC(
  input clk,
  input rst,
  input enable,
  input [3:0] jmploc,
  input jmp,
  output reg [3:0] count
);
  wire CLK;
  assign CLK = (clk & enable);
  
  initial
    begin
      count <= 4'b0000;
    end
  
  always @(posedge CLK)
    begin
      if (rst)
        count <= 4'b0000;
      else
        count <= count + 1;
    end

  always @(posedge clk)
    if (jmp)
      count <= jmploc;
endmodule

module Control (
  input clk, enable,
  input [3:0] instruction,
  output reg [14:0] ctrl_wrd
)
  assign CLK = (~clk & enable);
  reg [2:0] inst_stage;
  reg reset_in;

  // Op codes
  localparam NOP = 4'b0000; // No operation.
  localparam LDA = 4'b0001; // Load register A from memory.
  localparam ADD = 4'b0010; // Add specified memory pointer to register A. Store the result in register A.
  localparam SUB = 4'b0011; // Subtract specified memory from register A. Store the result in register A.
  localparam STA = 4'b0100; // Store register A to memory.
  localparam OUT = 4'b0101; // Send register A to UART port. The instruction will block until the transfer completes.
  localparam JMP = 4'b0110; // Jump at some code location
  localparam LDI = 4'b0111; // Load 4'bit immediate value in register A.
  localparam JC  = 4'b1000; // Jump if carry flag is set.
  localparam SHLA= 4'b1001; // Logical shift left of register A.
  localparam MULA= 4'b1010; // Unsigned multiplcation between two nibbles in register A. Result is stored again in register A.
  localparam HLT = 4'b1111; // Halt CPU control clock;

  // Control signals
  localparam j   = 0;  // Program counter jump
  localparam co  = 1;  // Program counter output enable
  localparam ce  = 2;  // Program counter enable
  localparam oi  = 3;  // Display/UART tx
  localparam bi  = 4;  // 
  localparam su  = 5;  // Subtract enable
  localparam so  = 6;  // 
  localparam ao  = 7;  // push RegA onto BUS
  localparam ai  = 8;  // read BUS into RegA
  localparam ii  = 9;  // Instruction register write enable
  localparam io  = 10; // push the address half of the instruction onto BUS
  localparam ro  = 11; // push RAM @ MAR onto BUS
  localparam ri  = 12; // RAM in
  localparam mi  = 13; // read BUS into Memory Address Register (MAR)
  localparam hlt = 14; // Halt
 
  initial
    begin
      inst_stage = 3'b000;
    end

  always @ (posedge CLK)
    begin
      case(inst_stage) //HLT, MI, RI, RO, IO, II, AI, AO, SO, SU, BI, OI, CE, CO, J;
          3'b000: 
            begin
              ctrl_wrd = (1 << mi) | (1 << co); // push PC onto BUS, read BUS into MAR
              inst_stage = 3'b001;
            end
          3'b001: 
            begin
              ctrl_wrd = (1 << ro) | (1 << ii) | (1 << ce); // inc PC, push RAM @ MAR onto BUS, read BUS into IR
              inst_stage = 3'b010;
            end
          3'b010:
            begin
              case(Instruction)
                LDA: ctrl_wrd = (1 << mi) | (1 << io); // LDA - push instruction address onto BUS, read BUS into MAR
                ADD: ctrl_wrd = (1 << mi) | (1 << io); // ADD - push instruction address onto BUS, read BUS into MAR
                SUB: ctrl_wrd = (1 << mi) | (1 << io); // SUB - push instruction address onto BUS, read BUS into MAR
                OUT: ctrl_wrd = (1 << ao) | (1 << oi); // OUT - push RegA onto BUS, read BUS into output buffer
                JMP: ctrl_wrd = (1 << io) | (1 << j);  // JMP - PC input j, push instruction address onto BUS
                HLT: ctrl_wrd = (1 << hlt); // HLT
                default: ctrl_wrd = 0; 
              endcase 
              inst_stage = 3'b011;
            end      
          3'b011: 
            begin
              case(Instruction)
                LDA: ctrl_wrd = (1 << ro) | (1 << ai); // LDA - push RAM @ MAR onto BUS, read BUS into RegA
                ADD: ctrl_wrd = (1 << ro) | (1 << bi); // ADD - push RAM @ MAR onto BUS, read BUS into RegB
                SUB: ctrl_wrd = (1 << ro) | (1 << bi); // SUB - push RAM @ MAR onto BUS, read BUS into RegB
                default: ctrl_wrd = 0;
              endcase
              inst_stage = 3'b100;           
            end
          3'b100:
            begin
              case(Instruction)
                ADD: ctrl_wrd = (1 << so) | (1 << ai);              // ADD - push ALU onto BUS, read BUS into Reg A
                SUB: ctrl_wrd = (1 << so) | (1 << su) | (1 << ai);  // SUB - ALU op = SU, push ALU onto BUS, read BUS into Reg A
                default: ctrl_wrd = 0;
              endcase
              inst_stage = 3'b000;
            end                  
          default: ctrl_wrd = 0;
      endcase                          
  end
endmodule

module CPU(
  input clkin,
  output [7:0] busOut, 
  output [6:0] led1,
  output [6:0] led2
);
  wire [7:0] bus;

  wire [7:0] regAOut;
  wire [7:0] regBOut;
  wire [7:0] instRegOut;
  wire [3:0] pcOut;
  wire [3:0] marOut;
  wire [7:0] dispOut;
  wire [7:0] aluOut;

  wire HLT, MI, RI, RO, IO, II, AI, AO, SO, SU, BI, OI, CE, CO, J;
  wire pcRst, flag;

  assign clk = (clkin & ~HLT);

  Register  #(8) regA(.clk(clk), .D(bus), .Q(regAOut), .EI(AI));
  TriBuff #(8) triA(.data(Aout), .dataOut(bus), .enable(AO));

  Register #(8) regB(.clk(clk), .D(bus), .Q(regBOut), .EI(BI));

  Register #(8) instReg(.clk(clk), .D(bus), .Q(instRegOut), .EI(II));
  TriBuff #(4) triInstReg(.data(Instout[3:0]), .dataOut(bus[3:0]), .enable(IO));

  ALU alu(.A(regAOut), .B(regBOut), .op(SU), .res({flag, aluOut}));
  TriBuff #(8) triAlu(.data(aluOut), .enable(SO), .dataOut(bus));

  PC pc(.clk(clk), .rst(1'b0), .enable(CE), .jmp(J), .jmploc(bus[3:0]), .count(Pcount));
  TriBuff #(4) tripc(.data(Pcount), .dataOut(bus[3:0]), .enable(co));

  Register #(4) mar(.clk(clk), .D(bus[3:0]), .Q(marOut), .EI(MI));

  RAM ram(.clk(~clk), .address(marOut), .write_enable(RI), .read_enable(RO), .data(bus));

  Control ic(.clk(clk), .enable(1'b1), .Instruction(Instout[7:4]), .ctrl_wrd({HLT, MI, RI, RO, IO, II, AI, AO, SO, SU, BI, OI, CE, CO, J}));

  Register8 res(.clk(clk), .D(bus), .Q(busOut), .EI(OI));
  // bcd2sevenseg seg0(.bcd(OutPut[3:0]), .seg(LED1));
  // bcd2sevenseg seg1(.bcd(OutPut[7:4]), .seg(LED2));
endmodule


module Main (
  input clock,
  output busOut
);

  CPU cpu(.clkin(clock), .busOut(busOut));

  test begin
    #7;
  end
endmodule