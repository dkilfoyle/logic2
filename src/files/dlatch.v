// SR Latch with Enable with data line instead of separate set and reset lines
// the clock signals the latch to follow the data line
// when clock is 0 the latch holds the last Q

module SRLatchEnable (
  input s, r, c,
  output Q );

  wire u1, u2, Qn;
  assign u1 = s ~& c;
  assign u2 = r ~& c;
  assign Q = u1 ~& Qn;
  assign Qn = Q ~& u2;
endmodule

module DLatch (
  input d, c,
  output Qd);

  wire dn;
  not(dn, d);

  buffer(Qd);

  SRLatchEnable srlatch (
    .s(d),
    .r(dn),
    .c(c),
    .Q(Qd)
  );
endmodule

module Main(
  input d, c,
  output Qm
); 

  DLatch latch(
    .d(d),
		.c(c),
		.Qd(Qm)
  );

  test begin
    #0  {c=0, d=0};
    #1  {c=0, d=1};
    #2  {c=0, d=0};
    #3  {c=0, d=1};
    #4  {c=1, d=0};
    #5  {c=1, d=1};
    #6  {c=1, d=0};
    #7  {c=1, d=1};
    #8  {c=0, d=0};
    #9  {c=0, d=1};
    #10  {c=0, d=0};
    #11  {c=0, d=1};
    #12;
  end
endmodule