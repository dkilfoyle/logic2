// S`R` Latch
// complement of SR Latch using nand gates
// function of s and r are reversed
// s=1, r=0 = reset Q to 0
// s=0, r=1 = set Q to 1
// s=1, r=1 = hold/store current value of Q
// s=0, r=0 = not allowed

module SRLatchComplement (
  input r, s,
  output Q );

  wire Qn;
  assign Q = s ~& Qn;
  assign Qn = Q ~& r;
endmodule

module Main(
  input r, s,
  output Q
); 

  SRLatchComplement latch(
    .r(r),
		.s(s),
		.Q(Q)
  );

  test begin
    #0  {r=1, s=1};
    #2  {s=1, r=0};
    // #4  {s=1, r=1}; do not do this
    #4  {s=1, r=1};
    #8  {s=0, r=1};
    #10 {s=1, r=1};
    #12;
  end
endmodule