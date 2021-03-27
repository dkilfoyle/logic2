/* Full adder
Simplified instead of two half adders
*/


module FullAdder (
  input a, b, cin,
  output S, Cout);

  wire p, g;

  assign p = a ^ b;
  assign g = a & b;

  assign S = p ^ cin;
  assign Cout = g | (p & cin); // remove brackets to test operator precedence
endmodule

module Main (
  input a, b, cin,
  output Sum, Cout
);

  FullAdder full(
		.a(a),
		.b(b),
    .cin(cin),
		.S(Sum),
		.Cout(Cout)
  );

 
	test begin
		#0  {cin=0, a=0, b=0};
    #1  {cin=0, a=0, b=1};
    #2  {cin=0, a=1, b=0};
    #3  {cin=0, a=1, b=1};
		#4  {cin=1, a=0, b=0};
    #5  {cin=1, a=0, b=1};
    #6  {cin=1, a=1, b=0};
    #7  {cin=1, a=1, b=1};
    #8;
	end
endmodule