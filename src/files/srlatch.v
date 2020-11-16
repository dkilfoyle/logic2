// SR Latch
// s=1, r=0 = set Q to 1
// s=0, r=1 = reset Q to 0
// s=0, r=0 = hold/store current value of Q
// s=1, r=1 = not allowed

module SRLatch (
  input r, s,
  output Q );

  wire Qn;
  assign Q = r ~| Qn;
  assign Qn = Q ~| s;
  
endmodule

module Main(
  input r, s,
  output Q
); 

  SRLatch latch(
		.r(r),
		.s(s),
		.Q(Q)
  );

  test begin
    #0  {r=0, s=0};
    #2  {s=1, r=0};
    // #4  {s=1, r=1}; do not do this
    #4  {s=0, r=0};
    #8  {s=0, r=1};
    #10 {s=0, r=0};
    #12;
  end
endmodule