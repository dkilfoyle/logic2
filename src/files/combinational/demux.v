/* 1 to 2 DeMultiplexer
Sel selects which output to send the input to
sel a | Y Z
 0  0 | 0 0 
 0  1 | 1 0 
 1  0 | 0 0 
 1  1 | 0 1 
 */

module DeMux (
	input sel,
	input a,
	output Y, Z);

	assign Y = ~sel & a;
  assign Z = sel & a;
endmodule

module Main (
  input sel, clock,
  output Y, Z);

  // "clock" is an automatic wire in main
  DeMux demux(.a(clock), .sel(sel), .Y(Y), .Z(Z));

  test begin
    #001 {sel=0};  
    #010 {sel=1}; 
    #020;
  end
endmodule