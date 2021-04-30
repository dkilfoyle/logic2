// Master-slave d-flipflop with active low preset and clear

// TODO: Not working ? simulator issue

module DFlipFlop (
  input d, c, clear, preset,
  output Q, Qn);

  initial Q=0;
  initial Qn=0;
  initial u5=0;

  wire notd, notc;
  not(notd, d);
  not(notc, c);

  wire u1, u2, u3, u4, u5, u6, u7, u8;

  // master
  nand(u3, d, notc, clear);
  nand(u4, notd, notc, preset);
  nand(u5, u3, u6, preset);
  nand(u6, u4, u5, clear);

  // slave
  nand(u7, u5, c);
  nand(u8, u6, c);
  nand(Q,  u7, Qn, preset);
  nand(Qn, u8, Q, clear);
endmodule


module Main(
  input d, c, clear, preset,
  output Q, Qn
); 

  DFlipFlop dff(
    .d(d),
		.c(c),
		.clear(clear),
		.preset(preset),
		.Q(Q),
    .Qn(Qn)
  );

  test begin
    #0  { d=0, c=0, clear=0, preset=1 };
    #1  { d=0, c=0, clear=1, preset=0 };
    #2  { d=0, c=1, clear=1, preset=1 };
    #3  { d=1, c=1, clear=1, preset=1 };
    #4  { d=0, c=1, clear=1, preset=1 };
    #5  { d=0, c=0, clear=1, preset=1 };
    #6  { d=1, c=1, clear=1, preset=1 };
    #7  { d=0, c=1, clear=1, preset=1 };
    #8  { d=1, c=1, clear=1, preset=1 };
    #9  { d=1, c=0, clear=1, preset=1 };
    #10 { d=1, c=0, clear=1, preset=1 };
    #11 { d=1, c=0, clear=1, preset=1 };
    #12;
  end
endmodule