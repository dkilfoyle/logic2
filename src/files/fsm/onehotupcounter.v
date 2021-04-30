// One-hot up counter from Chapter 7.5.5 of Introduction to Logic Circuits and Logic Design LaMeres

// TODO: Not working. Need to fix flip flop ? simulator issue

module DFlipFlop (
  input d, c, clear, preset,
  output Q, Qn);

  wire notd, notc;
  not(notd, d);
  not(notc, c);

  wire u1, u2, u3, u4, u5, u6, u7, u8;

  // master
  nand(u3, d, c, clear);
  nand(u4, notd, c, preset);
  nand(u5, u3, u6, preset);
  nand(u6, u4, u5, clear);

  // slave
  nand(u7, u5, notc);
  nand(u8, u6, notc);
  nand(Q,  u7, Qn, preset);
  nand(Qn, u8, Q, clear);
endmodule

module NextState (
  input Q0cur, Q1cur, Q2cur,
  output Q0nxt, Q1nxt, Q2nxt);

  buffer(Q0nxt, Q2cur);
  buffer(Q1nxt, Q0cur);
  buffer(Q2nxt, Q1cur);

endmodule

module Main(
  input clock, preset, reset,
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
    .preset(preset),
    .clear(reset),
		.Q(Q0cur)
  );
  
  DFlipFlop Q1dff(
    .d(Q1nxt),
		.c(clock),
		.Q(Q1cur),
    .preset(reset),
    .clear(reset)
  );

  DFlipFlop Q2dff(
    .d(Q2nxt),
		.c(clock),
		.Q(Q2cur),
    .preset(reset),
    .clear(reset)
  );

  wire bar3;
  ledbar(bar3, Q0cur, Q1cur, Q2cur);

  test begin
    #0 {preset = 0, reset = 1};
    #1 {preset = 1, reset = 1};
    #20;
  end
endmodule