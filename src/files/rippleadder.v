// Ripple counter

module HalfAdder (
  input a, b, cin,
  output S, Cout);

  assign S = a ^ b;
  assign Cout = a & b;
endmodule

module FullAdder (
  input a, b, cin,
  output Sum, Cout
);

  wire S1, Cout1, Cout2, Cout3;
  buffer(Sum);
  
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

  assign Cout = Cout2 | Cout1;
endmodule

module Main(
  input c0, a0, b0, a1, b1, a2, b2, a3, b3,
  output S0, S1, S2, S3, Cout
);

  wire c1, c2, c3;
  buffer(c1);
  buffer(c2);
  buffer(c3);

  FullAdder full1(.a(a0), .b(b0), .cin(c0), .Sum(S0), .Cout(c1));
  FullAdder full2(.a(a1), .b(b1), .cin(c1), .Sum(S1), .Cout(c2));
  FullAdder full3(.a(a2), .b(b2), .cin(c2), .Sum(S2), .Cout(c3));
  FullAdder full4(.a(a3), .b(b3), .cin(c3), .Sum(S3), .Cout(Cout));
  
	test begin
		#0  {c0=0, a0=0, a1=0, a2=0, a3=0, b0=0, b1=0, b2=0, b3=0}; // 0000 + 0000 = 0000
		#1  {c0=0, a0=0, a1=1, a2=0, a3=1, b0=1, b1=0, b2=1, b3=0}; // 0101 + 1010 = 1111
    #2;
	end
endmodule