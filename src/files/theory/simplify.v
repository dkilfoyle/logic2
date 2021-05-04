// Example of simplification
// From: https://www.allaboutcircuits.com/textbook/digital/chpt-7/circuit-simplification-examples/

bla!!

module Unsimplified (
  input a, b, c,
  output Q );

  assign Q = a & b | ((b & c) & (b | c));
endmodule

module Simplified (
  input a, b, c,
  output Q );

  // a & b | ((b & c) & (b | c))
  // &=*, |=+               AB + BC(B+C)
  // Distribute             AB + BBC + BCC 
  // Simplify AA = A        AB + BC + BC
  // Simplify A + A = A     AB + BC
  // Factor                 B(A+C) 

  assign Q = b & (a | c);
endmodule

module Main(
  input a, b, c,
  output Qus, Qs
); 

  Unsimplified unsimplified(
		.a(a),
		.b(b),
		.c(c),
		.Q(Qus)
  );

  Simplified simplified(
		.a(a),
		.b(b),
		.c(c),
		.Q(Qs)
  );

  // Check to see if Qs = Qus for all combinations of a,b,c
  test begin
    #0  {a=0, b=0, c=0};
    #1  {a=0, b=0, c=1};
    #2  {a=0, b=1, c=0};
    #3  {a=0, b=1, c=1};
    #4  {a=1, b=0, c=0};
    #5  {a=1, b=0, c=1};
    #6  {a=1, b=1, c=0};
    #7  {a=1, b=1, c=1};
    #8;
  end
endmodule