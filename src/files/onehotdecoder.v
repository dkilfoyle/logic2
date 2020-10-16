/* 2 to 4 one hot decoder
a b | F3 F2 F1 F0
0 0 |  0  0  0  1 
0 1 |  0  0  1  0
1 0 |  0  1  0  0
1 1 |  1  0  0  0
*/

// using bitwise assigns
module OneHotDecoderBitwise (
  input a, b,
  output F3, F2, F1, F0);

  assign F0 = ~a & ~b;
  assign F1 = ~a & b;
  assign F2 = a & ~b;
  assign F3 = a & b;
endmodule

// using standard gate statements
module OneHotDecoder (
  input a, b,
  output F3, F2, F1, F0);

  wire nota, notb;
  not(nota, a);
  not(notb, b);

  and(F0, nota, notb);
  and(F1, nota, b);
  and(F2, a, notb);
  and(F3, a, b);
endmodule

module main;

  wire a, b; // controls
  wire F3, F2, F1, F0; // response

  control(a);
  control(b);

  // OneHotDecoder ohd(
  OneHotDecoderBitwise ohd(
		.a(a),
		.b(b),
		.F3(F3),
		.F2(F2),
		.F1(F1),
		.F0(F0)
  );

  response(F3);
  response(F2);
  response(F1);
  response(F0);

  test begin
		#0  {a=0, b=0};
    #2  {a=0, b=1};
    #4  {a=1, b=0};
    #6  {a=1, b=1};
    #8;
	end
endmodule