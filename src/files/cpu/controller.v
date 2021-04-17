module Controller (
  input clk, enable,
  input [3:0] instruction,
  output reg [14:0] ctrlwrd
);
  wire CLK;
  assign CLK = (~clk & enable);
  reg [2:0] inststage;
  reg resetstage;

  wire [4:0] inststageled;
  leds(inststageled, inststage);
  $meta(inststageled, '{"color":"green","type":"counter","labels":[0,1,2,3,4,5]}');

  wire [14:0] ctrlwrdled;
  leds(ctrlwrdled, ctrlwrd);
  $meta(ctrlwrdled, '{"color":"blue","type":"bits","labels":["HLT","MI", "RI", "RO", "IO", "II", "AI", "AO", "SO", "SU", "BI", "OI", "CE", "CO", "J"]}');

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
      inststage = 3'b000;
      resetstage = 1'b1;
    end

  always @(posedge CLK)
    begin
      inststage = resetstage ? 3'b000 : inststage + 1;
      resetstage = 1'b0;
      case(inststage) //HLT, MI, RI, RO, IO, II, AI, AO, SO, SU, BI, OI, CE, CO, J;
          3'b000: 
            begin
              ctrlwrd = (1 << mi) | (1 << co); // push PC onto BUS, read BUS into MAR
            end
          3'b001: 
            begin
              ctrlwrd = (1 << ro) | (1 << ii) | (1 << ce); // inc PC, push RAM @ MAR onto BUS, read BUS into IR
            end
          3'b010:
            begin
              case(instruction)
                LDA: ctrlwrd = (1 << mi) | (1 << io); // LDA - push instruction address onto BUS, read BUS into MAR
                ADD: ctrlwrd = (1 << mi) | (1 << io); // ADD - push instruction address onto BUS, read BUS into MAR
                SUB: ctrlwrd = (1 << mi) | (1 << io); // SUB - push instruction address onto BUS, read BUS into MAR
                OUT: ctrlwrd = (1 << ao) | (1 << oi); // OUT - push RegA onto BUS, read BUS into output buffer
                JMP: ctrlwrd = (1 << io) | (1 << j);  // JMP - PC input j, push instruction address onto BUS
                HLT: ctrlwrd = (1 << hlt); // HLT
                default: ctrlwrd = 0; 
              endcase 
            end      
          3'b011: 
            begin
              case(instruction)
                LDA: ctrlwrd = (1 << ro) | (1 << ai); // LDA - push RAM @ MAR onto BUS, read BUS into RegA
                ADD: ctrlwrd = (1 << ro) | (1 << bi); // ADD - push RAM @ MAR onto BUS, read BUS into RegB
                SUB: ctrlwrd = (1 << ro) | (1 << bi); // SUB - push RAM @ MAR onto BUS, read BUS into RegB
                default: ctrlwrd = 0;
              endcase
            end
          3'b100:
            begin
              case(instruction)
                ADD: ctrlwrd = (1 << so) | (1 << ai);              // ADD - push ALU onto BUS, read BUS into Reg A
                SUB: ctrlwrd = (1 << so) | (1 << su) | (1 << ai);  // SUB - ALU op = SU, push ALU onto BUS, read BUS into Reg A
                default: ctrlwrd = 0;
              endcase
              resetstage = 1'b1;
            end                  
          default: ctrlwrd = 0;
      endcase                          
  end
endmodule

module Main(
  input clock,
  input enable,
  input [3:0] instruction,
  output [14:0] ctrlwrd
);

  // todo: parser - no "_" in variable names 

  Controller controller (
    .clk(clock),
    .enable(enable),
    .instruction(instruction),
    .ctrlwrd(ctrlwrd)
  );

  // wire [14:0] ctrlwrdled;
  // ledbar(ctrlwrdled, ctrlwrd);

  test begin
    #0    { enable=0, instruction=4'b0000 }; // NOP
    #2    { enable=0, instruction=4'b0001 }; // LDA
    #10   { enable=1, instruction=4'b0010 }; // ADD
    #18   { enable=1, instruction=4'b0011 }; // SUB
    #26   { enable=1, instruction=4'b0101 }; // OUT
    #34   { enable=1, instruction=4'b0110 }; // JMP
    #42   { enable=1, instruction=4'b0000 }; // NOP
    #50   { enable=0, instruction=4'b0000 }; // 
    #58   { enable=0, instruction=4'b0001 }; // 
    #70;
  end
endmodule