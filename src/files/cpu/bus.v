// adapted from
// https://github.com/google/bbcpu
// https://github.com/TheSUPERCD/8bit_MicroComputer_Verilog

module BusController #(parameter WIDTH = 8) (
  input [WIDTH-1:0] 
    ramDataIn,
    aluDataIn,
    regADataIn,
    instRegDataIn,
    pcDataIn,
  input pcEnable, instRegEnable, regAEnable, aluEnable, ramEnable,
  output [WIDTH-1:0] busOut);

  wire [WIDTH-1:0] z8;
  assign z8 = {WIDTH{1'bz}};
  wire [WIDTH-1:0] pc, instReg, regA, alu, ram;

  assign pc = pcEnable ? pcDataIn : z8;
  assign instReg = instRegEnable ? instRegDataIn : z8;
  assign regA = regAEnable ? regADataIn : z8;
  assign alu = aluEnable ? aluDataIn : z8;
  assign ram = ramEnable ? ramDataIn : z8;

  buffer(busOut, pc, instReg, regA, alu, ram, z8);
endmodule

module CPU(
  // input clkin,
  input CO, IO, AO, SO, RO,
  output [7:0] bus
  );

  // wire [7:0] bus;

  reg [7:0] regAOut;
  reg [7:0] instRegOut;
  reg [3:0] pcOut;
  reg [7:0] aluOut;
  reg [7:0] ramOut;

  initial
    begin
      pcOut = 1;
      instRegOut = 3;
      regAOut = 7;
      aluOut = 15;
      ramOut = 31;
    end

  BusController busController(
    .pcDataIn(pcOut), .pcEnable(CO),
    .instRegDataIn(instRegOut), .instRegEnable(IO),
    .regADataIn(regAOut), .regAEnable(AO),
    .aluDataIn(aluOut), .aluEnable(SO),
    .ramDataIn(ramOut), .ramEnable(RO),
    .busOut(bus));

endmodule


module Main (
  input clock,
  input CO, IO, AO, SO, RO,
  output [7:0] busOut
);

  CPU cpu(
    // .clkin(clock),
    .CO(CO),
    .IO(IO),
    .AO(AO),
    .SO(SO),
    .RO(RO),
    .bus(busOut));

  wire [7:0] busLeds;
  leds(busLeds, busOut);
  $meta(busLeds, '{"color":"green","type":"bits","labels":[7,6,5,4,3,2,1,0]}');

  test begin
    #0 {CO=0, IO=0, AO=0, SO=0, RO=0};
    #1 {CO=1, IO=0, AO=0, SO=0, RO=0};
    #2 {CO=0, IO=1, AO=0, SO=0, RO=0};
    #3 {CO=0, IO=0, AO=1, SO=0, RO=0};
    #4 {CO=0, IO=0, AO=0, SO=1, RO=0};
    #5 {CO=0, IO=0, AO=0, SO=0, RO=1};
    #6;
  end
endmodule