// D Flip Flop

module DFF (
	input clk,
	input dIn,
	output q3);

	wire not_d_in, d_nand_a, d_nand_c, q_;

	not( not_d_in, dIn );
	nand( d_nand_a, dIn, clk );
	nand( q3, d_nand_a, q_ );
	nand( d_nand_c, not_d_in, clk );
  nand( q_, d_nand_c, q3);
endmodule

module DFFE (
  input clk,
  input dIn,
  input dEnable,
  output q2);

  wire gatedClk;
  and(gatedClk, clk, dEnable);
  
  DFF dff(.clk(gatedClk), .dIn(dIn), .q3(q2));


endmodule

module main;

  wire A, E, clock, q1;

  control(A);
  control(E);
  control(clock);

  DFFE dffe(.clk(clock), .dIn(A), .dEnable(E), .q2(q1));

  response(q1);

  test begin
    #0  { E=1 };
    #1  { A=1, E=0 };
    #7  { E=1 };
    #9  { A=0, E=0 };
    #12;
  end
endmodule