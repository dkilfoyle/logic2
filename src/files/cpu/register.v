module Register #(parameter WIDTH = 8) (
  input clk,
  input [WIDTH-1:0] D,
  input EI,
  output reg [WIDTH-1:0] Q)
;
  wire CLK;
  assign CLK=(clk & EI);
  always @(posedge CLK)
    begin
      Q <= D;
    end
endmodule

module Main(
  input clock, D, EI,
  output Q);
  Register regA(.clk(clock), .D(D), .Q(Q), .EI(EI));
  test begin
    #0  { D=0, EI=1 }; // Q=0
    #4  { D=1, EI=1 }; // Q=0 
    #6  { D=0, EI=0 }; // Q=1  
    #8  { D=1, EI=0 }; // Q=1   
    #10  { D=1, EI=1 }; // Q=1   
    #12  { D=0, EI=1 }; // Q=1   
    #14; // Q = 0
  end
endmodule