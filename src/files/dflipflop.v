// SR Latch with Enable with data line instead of separate set and reset lines
// the clock signals the latch to follow the data line
// when clock is 0 the latch holds the last Q

module DLatch (
  input d, c,
  output Qd);

  wire dn;
  not(dn, d);

  wire u1, u2, Qn;
  assign u1 = d ~& c;
  assign u2 = dn ~& c;
  assign Qd = u1 ~& Qn;
  assign Qn = Qd ~& u2;
endmodule

module DFlipFlop (
  input d, c,
  output Qff);

  wire cn, cnn;
  not(cn, c);
  not(cnn, cn);

  wire Qdl1;
  buffer(Qff);
  buffer(Qdl1);

  DLatch dl1(.d(d), .c(cn), .Qd(Qdl1));
  DLatch dl2(.d(Qdl1), .c(cnn), .Qd(Qff));

endmodule


module Main(
  input d, c,
  output Qm
); 

  DFlipFlop dff(
    .d(d),
		.c(c),
		.Qff(Qm)
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