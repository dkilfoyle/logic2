/* Full adder

Cin a b | S Cout |  
  0 0 0 | 0    0 |
  0 0 1 | 1    0 |
  0 1 0 | 1    0 |
  0 1 1 | 0    1 |
  1 0 0 | 1    0 |
  1 0 1 | 0    1 |
  1 1 0 | 0    1 |
  1 1 1 | 1    1 |

*/


module HalfAdder (
  input a, b, cin,
  output S, Cout);

  assign S = a ^ b;
  assign Cout = a & b;
endmodule

module Main (
  input a, b, cin,
  output Sum, Cout
);

  wire S1, Cout1, Cout2, Cout3;
  
  buffer(S1);
  buffer(Cout1);
  buffer(Cout2);

  HalfAdder half1(
		.a(a),
		.b(b),
		.S(S1),
		.Cout(Cout1)
  );

  HalfAdder half2(
		.a(S1),
		.b(cin),
		.S(Sum),
		.Cout(Cout2)
  );

  assign Cout3 = Cout2 | Cout1;
  response(Cout, Cout3);
  
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