// Master-slave d-flipflop

module DFlipFlop (
  input clk, reset, d,
  output reg Q);

  initial Q=1;

  always @(posedge clk)
    begin
      if (reset) Q=0;
      else Q=d;
    end
endmodule


module Main(
  input c, reset, d,
  output Qm
); 

  DFlipFlop dff(
		.clk(c),
		.reset(reset),
    .d(d),
		.Q(Qm)
  );

  test begin
    #0  { d=0, c=0, reset=0 };
    #1  { d=0, c=0, reset=0 };
    #2  { d=0, c=1, reset=0 };
    #3  { d=1, c=1, reset=0 };
    #4  { d=0, c=1, reset=0 };
    #5  { d=0, c=0, reset=0 };
    #6  { d=1, c=1, reset=0 };
    #7  { d=0, c=1, reset=0 };
    #8  { d=1, c=1, reset=0 };
    #9  { d=1, c=0, reset=0 };
    #10 { d=1, c=1, reset=1 };
    #12;
  end
endmodule