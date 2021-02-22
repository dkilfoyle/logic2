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
  buffer(Qmaster);

  buffer(Q);
  buffer(Qn);

  DLatch master(.d(d), .c(cn), .Q(Qmaster));
  DLatch slave(.d(Qmaster), .c(cnn), .Q(Q), .Qn(Qn));
endmodule

module Main(
  input clock,
  output Q, Qn
); 

  DFlipFlop dff(
    .d(Qn),
		.c(clock),
		.Q(Q),
    .Qn(Qn)
  );

  test begin
    #0 ;
    #1 ;
    #2 ;
    #3 ;
    #4 ;
    #5 ;
    #6 ;
    #7 ;
    #8 ;
    #9 ;
    #10;
    #11;
    #12;
  end
endmodule