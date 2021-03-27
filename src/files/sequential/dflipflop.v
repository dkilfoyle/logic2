// Master-slave d-flipflop

module DLatch (
  input d, c,
  output Q, Qn);

  initial
    begin
      Q = 0;
      Qn = 1;
    end

  wire u3, u4;
  assign u3 = d ~& c;
  assign u4 = ~d ~& c;

  assign Q = u3 ~& Qn;
  assign Qn = u4 ~& Q;
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
  input d, c,
  output Qm
); 

  DFlipFlop dff(
    .d(d),
		.c(c),
		.Q(Qm)
  );

  test begin
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