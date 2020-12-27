// One-hot up counter from Chapter 7.5.5 of Introduction to Logic Circuits and Logic Design LaMeres

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

module NextState (
  input Q0cur, Q1cur, Q2cur,
  output Q0nxt, Q1nxt, Q2nxt);

  buffer(Q0nxt, Q2cur);
  buffer(Q1nxt, Q0cur);
  buffer(Q2nxt, Q1cur);

endmodule

module Main(
  input clock,
  output Q2cur, Q1cur, Q0cur
); 

  wire Q0nxt, Q1nxt, Q2nxt;
  buffer(Q0nxt);
  buffer(Q1nxt);
  buffer(Q2nxt);

  NextState nextState(
    .Q0cur(Q0cur),
    .Q1cur(Q1cur),
    .Q2cur(Q2cur),
    .Q0nxt(Q0nxt),
    .Q1nxt(Q1nxt),
    .Q2nxt(Q2nxt)
  );

  DFlipFlop Q0dff(
    .d(Q0nxt),
		.c(clock),
		.Q(Q0cur)
  );
  
  DFlipFlop Q1dff(
    .d(Q1nxt),
		.c(clock),
		.Q(Q1cur)
  );

  DFlipFlop Q2dff(
    .d(Q2nxt),
		.c(clock),
		.Q(Q2cur)
  );

  wire bar3;
  ledbar(bar3, Q0cur, Q1cur, Q2cur);

  test begin
    #20;
  end
endmodule