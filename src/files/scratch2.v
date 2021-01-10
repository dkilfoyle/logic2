// Template to show basic syntax
// Example circuit is a half-adder

module HalfAdder (
  input a, b, c,
  output SUM );

  assign SUM  = ~a & b | c;
endmodule

// Every program must have a module Main as the last defined module
// The compiler will automatically instantiate main as an instance of Main
// Values of main's inputs are set in the testbench
module Main(
  input x, y,
  output sum
); 

  // declare myAdder as an instance (copy) of HalfAdder
  // map the input/output parameters of HalfAdder to the calling namespace
  // .moduleParameter(callingNamespaceVariable)
  HalfAdder myAdder(
		.a(x),
		.b(y),
		.c(y),
		.SUM(sum)
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