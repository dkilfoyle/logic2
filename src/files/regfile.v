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

  wire [31:0] s2;
  buffer(s2, rf[18]);
endmodule

module Main (
  input clock,
  input we3,
  input [4:0] ra1, ra2, wa3,
  input [31:0] wd3,
  output reg [31:0] rd1, rd2
);

  RegisterFile regfile(clock, we3, ra1, ra2, wa3, wd3, rd1, rd2);

  test begin
    #2  { we3=1, ra1=16, ra2=17, wa3=18, wd3=255 }; // set register 18 to 255 = 0b11111111
    #4  { we3=1, ra1=16, ra2=17, wa3=19, wd3=4095 }; // set register 19 to 170 = 0b10101010
    #6  { we3=0, ra1=18, ra2=19, wa3=16, wd3=0 };    // output register 18 to rd1, register 19 to rd2
    #8;
  end

endmodule