// 4 bit adder behavioural model
// not implemented yet, needs multibit wire support
// so that .cout(cob[1]) can perfom myadder_cob[1] = fa1_cout-out

module FullAdder (
  input a, b, ci,
  output sum, cout );

  wire [1:0] res;
  buffer(res);

  always @(*)
    begin
      res = a + b;
    end

  assign sum = res[0];
  assign cout = res[1];
endmodule

module Add4 (
  input [3:0] a, b,
  input ci,
  output [3:0] sum,
  output cout );

  wire [2:0] cob;
  buffer(cob);

  FullAdder fa0(.a(a[0]), .b(b[0]), .ci(ci),     .sum(sum[0]), .cout(cob[0]));
  FullAdder fa1(.a(a[1]), .b(b[1]), .ci(cob[0]), .sum(sum[1]), .cout(cob[1]));
  FullAdder fa2(.a(a[2]), .b(b[2]), .ci(cob[1]), .sum(sum[2]), .cout(cob[2]));
  FullAdder fa3(.a(a[3]), .b(b[3]), .ci(cob[2]), .sum(sum[3]), .cout(cout));
endmodule


module Main(
  input [3:0] x, y,
  output [3:0] SUM, COUT
); 

  Add4 myAdder(
		.a(x),
		.b(y),
		.sum(SUM),
		.cout(COUT)
  );

  test begin
    #0  { x=0, y=0 };
    #1  { x=0, y=1 };
    #2  { x=1, y=1 };
    #3  { x=1, y=2 };
    #4  { x=1, y=2 };
    #5  { x=1, y=2 };
    #6  { x=2, y=2 };
    #8;
  end
endmodule