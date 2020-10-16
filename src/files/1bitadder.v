// One bit full adder

module SingleStage (
  input a,
  input b,
  input cin,
  output s,
  output cout );

  wire w1, w2, w3;

  and( w1, a, b );
  and( w2, a, cin );
  and( w3, b, cin );
  or( cout, w1, w2, w3 );

  xor( s, a, b, cin );

endmodule

module main;

  wire a, b, cin;
  wire sum, cout;

  control(a);
  control(b);
  control(cin);

  SingleStage uut(
		.a(a),
		.b(b),
		.cin(cin),
		.s(sum),
		.cout(cout)
  );

  response(sum);
  response(cout);

	test begin
		#0  {a=0, b=0, cin=0};
    #2  {a=0, b=0, cin=0};
    #4  {a=0, b=0, cin=1};
    #6  {a=0, b=1, cin=0};
    #8  {a=0, b=1, cin=1};
    #10 {a=1, b=0, cin=0};
    #12 {a=1, b=0, cin=1};
    #14 {a=1, b=1, cin=0};
    #16 {a=1, b=1, cin=1};
    #18;
	end
endmodule