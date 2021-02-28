// sign extend
// extend a 16 bit number to 32 bits
// copy the sign bit (most significant bit) into the upper 16 bits

module SignExtend(
  input [15:0] a,
  output reg [31:0] y
);
  always @(*)
    y = { { 16 { a[15] } }, a};
endmodule

module Main (
  input [15:0] a,
  output [31:0] y
);

  SignExtend se(a,y);

  test begin
    #0  { a=15'b1010101010101010 }; 
    #1  { a=15'b0101010101010101 }; 
    #2  { a=15'b1000000000000000 }; 
    #3;
  end

endmodule