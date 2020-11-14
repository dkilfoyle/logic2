// Ripple counter

module DFF (
  input clk, dIn,
  output q, qc);

  wire not_d_in, d_nand_a, d_nand_c;

  not( not_d_in, dIn );
  nand( d_nand_a, dIn, clk );
  nand( q, d_nand_a, qc );
  nand( d_nand_c, not_d_in, clk );
  nand( qc, d_nand_c, q); // todo: compiler accept output as input
endmodule

module Main(
  input clock,
  output count0, count1);

  wire qn1, qn2;
  buffer(qn1);
  buffer(qn2);

  DFF u1(.clk(clock), .dIn(qn1), .q(count0), .qc(qn1));
  DFF u2(.clk(qn1), .dIn(qn2), .q(count1), .qc(qn2));

  test begin
    #20;
  end
endmodule