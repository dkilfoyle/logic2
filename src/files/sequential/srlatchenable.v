// SR Latch with Enable

module SRLatchComplement (
  input s, r,
  output Q );

  wire Qn;
  assign Q = s ~& Qn;
  assign Qn = Q ~& r;
endmodule

module SRLatchEnable (
  input r, s, c,
  output Q );

  wire u1, u2, Qn;
  buffer(Q);

  assign u1 = s ~& c;
  assign u2 = r ~& c;

  SRLatchComplement latchC(.s(u1), .r(u2), .Q(Q));
 endmodule

module Main(
  input r, s, c,
  output Q
); 

  SRLatchEnable latchE(
    .r(r),
		.s(s),
		.c(c),
		.Q(Q)
  );

  test begin
    #0  {c=1, s=0, r=0};
    #2  {c=1, s=1, r=0};
    #4  {c=1, s=0, r=0};
    #8  {c=1, s=0, r=1};
    #10 {c=1, s=0, r=0};
    #12 {c=0, s=1, r=0}; // no effect
    #14;
  end
endmodule