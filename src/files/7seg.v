/* 7 segment display decoder
  a
f   b
  g
e   c
  d

A B C | Fa Fb Fc Fd Fe Ff Fg
0 0 0 |  1  1  1  1  1  1  0 
0 0 1 |  0  1  1  0  0  0  0
0 1 0 |  1  1  0  1  1  0  1
0 1 1 |  1  1  1  1  0  0  1
1 0 0 |  0  1  1  0  0  1  1 
1 0 1 |  1  0  1  1  0  1  1
1 1 0 |  1  0  1  1  1  1  1
1 1 1 |  1  1  1  0  0  0  0
*/

// using standard gate statements
module Encoder(
  input A, B, C,
  output Fa, Fb, Fc, Fd, Fe, Ff, Fg);

  assign Fa = (~A & ~C) | B        | (A & C);
  assign Fb = (~B & ~C) | ~A       | (B & C);
  assign Fc = A         | ~B       | C;
  assign Fd = (~A & ~C) | (~A & B) | (B & ~C) | (A & ~B & C);
  assign Fe = (~A & ~C) | (B & ~C);
  assign Ff = (~B & ~C) | (A & ~C) | (A & ~B);
  assign Fg = (~A & B)  | (A & ~C) | (A & ~B);
endmodule

module Display(
  input Fa, Fb, Fc, Fd, Fe, Ff, Fg,
  output X);
  sevenseg (X, Fa, Fb, Fc, Fd, Fe, Ff, Fg);
endmodule

module Main(
  input a, b, c,
  output Fa, Fb, Fc, Fd, Fe, Ff, Fg
);

  Encoder encoder(
		.A(a),
		.B(b),
		.C(c),
    .Fa(Fa),
    .Fb(Fb),
    .Fc(Fc),
    .Fd(Fd),
    .Fe(Fe),
    .Ff(Ff),
    .Fg(Fg)
  );

  Display display(
    .Fa(Fa),
    .Fb(Fb),
    .Fc(Fc),
    .Fd(Fd),
    .Fe(Fe),
    .Ff(Ff),
    .Fg(Fg)
  );

  test begin
    #00 {a=0, b=0, c=0}; // should get 1 1 1 1 1 1 0
    #02 {a=0, b=0, c=1}; // should get 0 1 1 0 0 0 0
    #04 {a=0, b=1, c=0}; // should get 1 1 0 1 1 0 1
    #06 {a=0, b=1, c=1}; // should get 1 1 1 1 0 0 1
    #08 {a=1, b=0, c=0}; // should get 0 1 1 0 0 1 1 
    #10 {a=1, b=0, c=1}; // should get 1 0 1 1 0 1 1
    #12 {a=1, b=1, c=0}; // should get 1 0 1 1 1 1 1
    #14 {a=1, b=1, c=1}; // should get 1 1 1 0 0 0 0
    #16;
	end
endmodule