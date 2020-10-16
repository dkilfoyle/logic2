// Ripple counter

module DFF (
  input clk, dIn,
  output q, q_);

  wire not_d_in, d_nand_a, d_nand_c;

  not( not_d_in, dIn );
  nand( d_nand_a, dIn, clk );
  nand( q, d_nand_a, q_ );
  nand( d_nand_c, not_d_in, clk );
  nand( q_, d_nand_c, q);
endmodule

module main;

  wire clock, qn1, qn2;
  wire count0, count1;

  control(clock);

  response(count0);
  response(count1);
  
  buffer(qn1);
  buffer(qn2);

  DFF u1(.clk(clock), .dIn(qn1), .q(count0), .q_(qn1));
  DFF u2(.clk(qn1),   .dIn(qn2), .q(count1), .q_(qn2));

  test begin
    #20;
  end
endmodule