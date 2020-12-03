// One bit half adder

module HalfAdder (
  input a, b,
  output S, Cout);

  assign S = a ^ b;
  assign Cout = a & b;
endmodule

module Main (
  input a, b,
  output Sum, Cout
);

  HalfAdder half(
		.a(a),
		.b(b),
		.S(Sum),
		.Cout(Cout)
  );

	test begin
		#0  {a=0, b=0};
    #2  {a=0, b=1};
    #4  {a=1, b=0};
    #6  {a=1, b=1};
    #8;
	end
endmodule