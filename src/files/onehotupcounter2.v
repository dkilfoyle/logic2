// One-hot up counter from Chapter 7.5.5 of Introduction to Logic Circuits and Logic Design LaMeres

module DLatch (
  input d, c,
  output Q, Qn);

  initial Q = 0;
  initial Qn = 1;

  wire u3, u4;
  assign u3 = d ~& c;
  assign u4 = ~d ~& c;

  assign Q = u3 ~& Qn;
  assign Qn = u4 ~& Q;
endmodule

module DLatchPreset (
  input d, c,
  output Q, Qn);

  initial Q = 1;
  initial Qn = 0;

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
  buffer(Qmaster);

  buffer(Q);
  buffer(Qn);

  DLatch master(.d(d), .c(cn), .Q(Qmaster));
  DLatch slave(.d(Qmaster), .c(cnn), .Q(Q), .Qn(Qn));
endmodule

module DFlipFlopPreset (
  input d, c,
  output Q, Qn);

  wire cn, cnn;
  not(cn, c);
  not(cnn, cn);

  wire Qmaster;
  buffer(Qmaster);

  buffer(Q);
  buffer(Qn);

  DLatchPreset master(.d(d), .c(cn), .Q(Qmaster));
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

  DFlipFlopPreset Q0dff(
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