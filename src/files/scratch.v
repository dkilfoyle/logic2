// template to show basic syntax

module MyModule (
  input a, b,
  output X, Y );

  // wires act as local variables/gates
  // wire nand1;

  // gate format: logicFn(id, input1, input2)
  and  ( X, a, b );
  or   ( Y, a, b );

  // alternative bitwise format
  // assign X = a & b;
  // assign Y = A | b;
endmodule



// Every program must have a module Main as the last defined module
// The compiler will automatically instantiate main as an instance of Main
// Values of main's inputs are set in the testbench
module Main(
  input user1, user2,
  output o1, o2
); 

  // declare foo as an instance (copy) of MyModule
  // map the input/output parameters of MyModule to the calling namespace
  // .moduleParameter(callingNamespaceVariable)
  MyModule foo(
		.a(user1),
		.b(user2),
		.X(o1),
		.Y(o2)
  );

  // main module should have a testbench to set control states
  // format: #time {controlVar=val,...}
  test begin
    #0  {user1=0, user2=0};
    #2  {user1=0, user2=1};
    #4  {user1=1, user2=0};
    #6  {user1=1, user2=1};
  end
endmodule