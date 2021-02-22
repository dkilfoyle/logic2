/*
From Chapter 4 of LaMeres Introduction to Logic Circuits and Logic Design with VHDL

DeMorgan's Theorem: An OR operation with both inputs inverted is equivalent to an AND operation
with the output inverted. The dual: An AND operation with both inputs inverted is equivalent to an OR
operation with the output inverted.

~A | ~B = ~(A & B)
~A & ~B = ~(A | B)

eg F = AB + CD

1. place double inverters (neutral) after each AND gate: F = ~~(A&B) + ~~(C&D)
2. separate the invertors: F = ~(~(A&B)) | ~(~(C&D))
3. ~(A&B) is a NAND gate, ~X|~Y is by duality an AND gate with output inverted = NAND gate: F = (A ~& B) ~& (C ~& D)

*/

module Example(
  input a, b, c, d,
  output F);
  assign F = (a & b) | (c & d);
endmodule

module DeMorgan(
  input a, b, c, d,
  output F);
  assign F = (a ~& b) ~& (c ~& d);
endmodule

module Main(
  input a, b, c, d,
  output F, Fdm
); 

  Example example(.a(a), .b(b), .c(c), .d(d), .F(F));
  DeMorgan demorgan(.a(a), .b(b), .c(c), .d(d), .F(Fdm));

  test begin
    #0  {a=0, b=0, c=0, d=0};
    #1  {a=0, b=0, c=0, d=1};
    #2  {a=0, b=0, c=1, d=0};
    #3  {a=0, b=0, c=1, d=1};
    #4  {a=0, b=1, c=0, d=0};
    #5  {a=0, b=1, c=0, d=1};
    #6  {a=0, b=1, c=1, d=0};
    #7  {a=0, b=1, c=1, d=1};
    #8  {a=1, b=0, c=0, d=0};
    #9  {a=1, b=0, c=0, d=1};
    #10 {a=1, b=0, c=1, d=0};
    #11 {a=1, b=0, c=1, d=1};
    #12 {a=1, b=1, c=0, d=0};
    #13 {a=1, b=1, c=0, d=1};
    #14 {a=1, b=1, c=1, d=0};
    #15 {a=1, b=1, c=1, d=1};
    #16;
  end
endmodule