// 4 bit ripple subtractor
// subtraction = addition of twos complement of the subtrahend
// twos complement = invert each of the bits and add 1
// addding 1 can be acheived by setting carryin to 1 for the first adder

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

module Display(
  input a0, b0, a1, b1, a2, b2, a3, b3, S0, S1, S2, S3
);
  wire a,b,s;
  number(a, a0, a1, a2, a3);
  number(b, b0, b1, b2, b3);
  number(s, S0, S1, S2, S3);
endmodule

module Main(
  input c0, a0, b0, a1, b1, a2, b2, a3, b3,
  output S0, S1, S2, S3, Cout
);

  wire c1, c2, c3;
  wire b0c, b1c, b2c, b3c;
  buffer(c1);
  buffer(c2);
  buffer(c3);

  not(b0c, b0);
  not(b1c, b1);
  not(b2c, b2);
  not(b3c, b3);

  FullAdder full1(.a(a0), .b(b0c), .cin(c0), .Sum(S0), .Cout(c1));
  FullAdder full2(.a(a1), .b(b1c), .cin(c1), .Sum(S1), .Cout(c2));
  FullAdder full3(.a(a2), .b(b2c), .cin(c2), .Sum(S2), .Cout(c3));
  FullAdder full4(.a(a3), .b(b3c), .cin(c3), .Sum(S3), .Cout(Cout));

  Display display(.a0(a0), .a1(a1), .a2(a2), .a3(a3),
                  .b0(b0), .b1(b1), .b2(b2), .b3(b3),
                  .S0(S0), .S1(S1), .S2(S2), .S3(S3));
  
	test begin
		#0  {c0=1,  a3=0, a2=0, a1=0, a0=1,   b3=0, b2=0, b1=0, b0=0};  // 0001 - 0000 = 0001
		#1  {c0=1,  a3=0, a2=1, a1=1, a0=0,   b3=0, b2=0, b1=1, b0=0};  // 0011 - 0010 = 0001
		#2  {c0=1,  a3=0, a2=1, a1=0, a0=0,   b3=0, b2=0, b1=1, b0=0};  // 0100 - 0010 = 1111
		#3  {c0=1,  a3=1, a2=0, a1=0, a0=1,   b3=1, b2=0, b1=0, b0=0};  // 1001 - 1000 = 1111
    #4;
	end
endmodule