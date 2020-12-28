// SR Latch with Enable with data line instead of separate set and reset lines
// the clock signals the latch to follow the data line
// when clock is 0 the latch holds the last Q

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

module Main(
  input d, c,
  output Q, Qn
); 

  DLatch latch(
    .d(d),
		.c(c),
		.Q(Q)
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