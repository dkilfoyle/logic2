module TriBuff #(parameter WIDTH = 8) (
  input [WIDTH-1:0] data,
  input enable,
  output [WIDTH-1:0] dataOut
);
  assign dataOut = enable ? data : {WIDTH{1'bz}};
endmodule

module Main(
  input [7:0] dataIn,
  input enable,
  output [7:0] dataOut
);
  TriBuff buff(.data(dataIn), .enable(enable), .dataOut(dataOut));
  test begin
    #0  { dataIn=8'b10101010, enable=1 }; // Q=0
    #4  { dataIn=8'b10101010, enable=0 }; // Q=0 
    #6  { dataIn=8'b11111111, enable=1 }; // Q=1  
    #8  { dataIn=8'b11111111, enable=0 }; // Q=1   
    #10;
  end
endmodule