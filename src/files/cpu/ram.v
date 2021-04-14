module RAM(
  input clk,
  input [3:0] address,
  input we, // writeEnable
  input re, // readEnable
  input [7:0] dataIn,
  output [7:0] dataOut
);
  reg [7:0] Memory[15:0];
  reg [7:0] memBuffer;

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
      if(we & ~re) 
        Memory[address] <= dataIn;
      else
        memBuffer <= Memory[address];
    end

  assign dataOut = (re & ~we) ? memBuffer : 8'bzzzzzzzz;
endmodule

module Main(
  input clock,
  input [3:0] address,
  input we,
  input re,
  input [7:0] dataIn,
  output [7:0] dataOut
);
  RAM ram(
    .clk(clock),
    .address(address),
    .we(we),
    .re(re),
    .dataIn(dataIn),
    .dataOut(dataOut)
  );

  // wire out0;
  // led(out0, dataOut[0]);

  test begin
    #0   { address=0, we=0, re=1, dataIn=8'b10101010 }; // read address 0 : dataOut = 8'b0001_1010
    #2   { address=1, we=0, re=1, dataIn=8'b10101010 }; // read address 1 : dataOut = 8'b0010_1011
    #4   { address=2, we=0, re=1, dataIn=8'b10101010 }; // read address 2 : dataOut = 8'b0100_0110
    #6   { address=0, we=1, re=0, dataIn=8'b10101010 }; // write address 0 : dataOut = z
    #8   { address=1, we=1, re=0, dataIn=8'b11111111 }; // write address 1 : dataOut = z
    #10  { address=0, we=0, re=1, dataIn=8'b11111111 }; // read address 1 : dataOut = 10101010
    #12  { address=1, we=0, re=1, dataIn=8'b11111111 }; // read address 1 : dataOut = 11111111
    #14;
  end
endmodule