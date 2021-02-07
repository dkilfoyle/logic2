// ALU

module Add #(parameter width = 8) (
  input [width-1:0] a, b,
  input cin,
  output reg [width-1:0] y,
  output reg cout
);
  always @(*)
  begin
    {cout, y} = a + b + cin;
  end
endmodule

module Sub #(parameter width = 8) (
  input [width-1:0] a, b,
  output reg [width-1:0] y
);
  always @(*)
  begin
    y = a - b;
  end
endmodule

module Comparator # (parameter width = 8) (
  input [width-1:0] a, b,
  output reg eq, neq, lt, lte, gt, gte
);
  always @(*)
  begin
    eq  = (a == b);
    neq = (a != b);
    lt  = (a < b);
    lte = (a <= b);
    gt  = (a > b);
    gte = (a >= b);
  end
endmodule

module Main(
  input [7:0] x, y,
  output eq, neq, lt, lte, gt, gte
); 

  Comparator compare #(4) (
		.a(x),
		.b(y), 
		.eq(eq), 
		.neq(neq), 
		.lt(lt), 
		.lte(lte), 
		.gt(gt), 
		.gte(gte)
  );

  test begin
    #0  { x=1, y=1 };
    #1  { x=1, y=2 };
    #2  { x=2, y=1 };
    #3;
  end
endmodule