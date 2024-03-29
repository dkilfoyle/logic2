// 4 bit Ripple adder

module FullAdder (
  input a, b, cin,
  output Sum, Cout);

  wire p, g;

  assign p = a ^ b;
  assign g = a & b;

  assign Sum = p ^ cin;
  assign Cout = g | (p & cin); // remove brackets to test operator precedence
endmodule

module Display(
  input a0, b0, a1, b1, a2, b2, a3, b3, S0, S1, S2, S3
);
  wire [3:0] a,b,s;
  number(a, a0, a1, a2, a3);
  number(b, b0, b1, b2, b3);
  number(s, S0, S1, S2, S3);
endmodule

module Main(
  input c0, a0, b0, a1, b1, a2, b2, a3, b3,
  output S0, S1, S2, S3, Cout
);

  wire c1, c2, c3;

  FullAdder full1(.a(a0), .b(b0), .cin(c0), .Sum(S0), .Cout(c1));
  FullAdder full2(.a(a1), .b(b1), .cin(c1), .Sum(S1), .Cout(c2));
  FullAdder full3(.a(a2), .b(b2), .cin(c2), .Sum(S2), .Cout(c3));
  FullAdder full4(.a(a3), .b(b3), .cin(c3), .Sum(S3), .Cout(Cout));

  Display display(.a0(a0), .a1(a1), .a2(a2), .a3(a3),
                  .b0(b0), .b1(b1), .b2(b2), .b3(b3),
                  .S0(S0), .S1(S1), .S2(S2), .S3(S3));
  
	test begin
		#0  {c0=0,  a3=0, a2=0, a1=0, a0=0,   b3=0, b2=0, b1=0, b0=0};  // 0000 + 0000 = 0000
		#1  {c0=0,  a3=0, a2=0, a1=0, a0=1,   b3=0, b2=0, b1=1, b0=0};  // 0001 + 0010 = 0011
		#2  {c0=0,  a3=0, a2=0, a1=1, a0=1,   b3=0, b2=1, b1=0, b0=0};  // 0011 + 0100 = 1111
		#3  {c0=0,  a3=0, a2=1, a1=1, a0=1,   b3=1, b2=0, b1=0, b0=0};  // 0111 + 1000 = 1111
    #4;
	end
endmodule