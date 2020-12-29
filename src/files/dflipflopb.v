// Master-slave d-flipflop

module DFlipFlop (
  input d, clk,
  output Q);

  reg Q;

  initial Q=1;

  always @(posedge clk)
    begin
      Q=d;
    end
endmodule


module Main(
  input d, c,
  output Qm
); 

  DFlipFlop dff(
    .d(d),
		.clk(c),
		.Q(Qm)
  );

  test begin
    #0  { d=0, c=0 };
    #1  { d=0, c=0 };
    #2  { d=0, c=1 };
    #3  { d=1, c=1 };
    #4  { d=0, c=1 };
    #5  { d=0, c=0 };
    #6  { d=1, c=1 };
    #7  { d=0, c=1 };
    #8  { d=1, c=1 };
    #9  { d=1, c=0 };
    #10 { d=1, c=0 };
    #11 { d=1, c=0 };
    #12;
  end
endmodule