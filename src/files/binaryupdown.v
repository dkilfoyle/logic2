// Binary UpDown Controller from Chapter 7.5.2 of Introduction to Logic Circuits and Logic Design LaMeres
// TODO: Why is up = 1 counting down and vice versa

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
  input up, Q1cur, Q0cur,
  output Q1nxt, Q0nxt);

  assign Q1nxt = Q1cur ^| Q0cur ^| up;
  assign Q0nxt = ~Q0cur;

endmodule

module Main(
  input clock, up,
  output Q1cur, Q0cur
); 

  wire Q1nxt, Q0nxt;
  buffer(Q1nxt);
  buffer(Q0nxt);

  NextState nextState(
    .up(up),
    .Q1cur(Q1cur),
    .Q0cur(Q0cur),
    .Q1nxt(Q1nxt),
    .Q0nxt(Q0nxt)
  );

  DFlipFlop Q1dff(
    .d(Q1nxt),
		.c(clock),
		.Q(Q1cur)
  );

  DFlipFlop Q0dff(
    .d(Q0nxt),
		.c(clock),
		.Q(Q0cur)
  );

  wire dec;
  number(dec, Q0cur, Q1cur);

  test begin
    #0  { up = 1 };
    #20 { up = 0 };
    #40;
  end
endmodule