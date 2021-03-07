// SR Latch with Enable with data line instead of separate set and reset lines
// the clock signals the latch to follow the data line
// when clock is 0 the latch holds the last Q

module DLatch (
  input d, c,
  output Q, Qn);

  wire dn;
  not(dn, d);

  wire u1, u2, Qn;
  assign u1 = d ~& c;
  assign u2 = dn ~& c;
  assign Q = u1 ~& Qn;
  assign Qn = Q ~& u2;
endmodule

module DFlipFlop (
  input d, c,
  output Q, Qn);

  wire cn, cnn;
  not(cn, c);
  not(cnn, cn);

  wire Qmaster;

  DLatch master(.d(d), .c(cn), .Q(Qmaster));
  DLatch slave(.d(Qmaster), .c(cnn), .Q(Q), .Qn(Qn));
endmodule

module Main(
  input clock, din,
  output Out1, Out2, Out3, Out4
); 

  DFlipFlop dff1(
    .d(din),
		.c(clock),
		.Q(Out1)
  );

  DFlipFlop dff2(
    .d(Out1),
		.c(clock),
		.Q(Out2)
  );

  DFlipFlop dff3(
    .d(Out2),
		.c(clock),
		.Q(Out3)
  );

  DFlipFlop dff4(
    .d(Out3),
		.c(clock),
		.Q(Out4)
  );

  test begin
    #0 { din = 1 };
    #2 { din = 0 };
    #4 { din = 0 };
    #6 { din = 0 };
    #8;
  end
endmodule