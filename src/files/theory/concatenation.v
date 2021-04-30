module MyNum(
  input [3:0] a,
  output [3:0] res);

  assign res = a;
endmodule

module Main(
  input [3:0] x,
  output [3:0] y); 

  wire q,w,e,r;
  MyNum mynum(.a(x), .res({q,w,e,r}));

  assign y = {q,w,e,r};

  // Check to see if Qs = Qus for all combinations of a,b,c
  test begin
    #0  { x=4'b1010 };
    #2  { x=4'b1110 };
    #4  { x=4'b0001 };
    #6  { x=4'b1000 };
    #8;
  end
endmodule