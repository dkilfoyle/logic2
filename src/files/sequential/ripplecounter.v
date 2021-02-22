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
  output Count0, Count1, Count2
); 

  wire Qntf1, Qntf2, Qntf3;
  buffer(Qntf1);
  buffer(Qntf2);
  buffer(Qntf3);

  DFlipFlop tf1(
    .d(Qntf1),
		.c(clock),
		.Q(Count0),
    .Qn(Qntf1)
  );

  DFlipFlop tf2(
    .d(Qntf2),
		.c(Qntf1),
		.Q(Count1),
    .Qn(Qntf2)
  );

  DFlipFlop tf3(
    .d(Qntf3),
		.c(Qntf2),
		.Q(Count2),
    .Qn(Qntf3)
  );

  wire dec;
  number(dec, Count0, Count1, Count2);

  test begin
    #20;
  end
endmodule