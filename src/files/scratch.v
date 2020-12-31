// Template to show basic syntax
// Example circuit is a half-adder

module HalfAdder (
  input a, b,
  output SUM, COUT );

  // wires act as local variables/gates
  // wire nand1;

  // gate format: logicFn(id, input1, input2)
  xor ( SUM, a, b );
  and ( COUT, a, b );

  // alternative bitwise format
  // assign SUM  = a ^ b;
  // assign COUT = a & b;
endmodule

// Every program must have a module Main as the last defined module
// The compiler will automatically instantiate main as an instance of Main
// Values of main's inputs are set in the testbench
module Main(
  input x, y,
  output sum, cout
); 

  // declare myAdder as an instance (copy) of HalfAdder
  // map the input/output parameters of HalfAdder to the calling namespace
  // .moduleParameter(callingNamespaceVariable)
  HalfAdder myAdder(
		.a(x),
		.b(y),
		.SUM(sum),
		.COUT(cout)
  );

  // main module should have a testbench to set control states
  // format: #time {controlVar=val,...}
  test begin
    #0  { x=0, y=0 };
    #2  { x=0, y=1 };
    #4  { x=1, y=0 };
    #6  { x=1, y=1 };
    #8;
  end
endmodule