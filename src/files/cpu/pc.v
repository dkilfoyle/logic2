module PC(
  input clk,
  input rst,
  input enable,
  input [3:0] jmploc,
  input jmp,
  output reg [3:0] count
);
  wire CLK;
  assign CLK = (clk & enable);
  
  initial
    count <= 4'b0000;
  
  always @(posedge CLK)
    if (rst)
      count <= 4'b0000;
    else
      count <= count + 1;

  always @(posedge clk)
    if (jmp)
      count <= jmploc;
endmodule

module Main(
  input clock,
  input rst,
  input enable,
  input [3:0] jmploc,
  input jmp,
  output [3:0] count
);
  PC pc(
    .clk(clock),
    .rst(rst),
    .enable(enable),
    .jmploc(jmploc),
    .jmp(jmp),
    .count(count)
  );

  test begin
    #0   { rst=0, enable=0, jmploc=10, jmp=0 }; // dont increment
    #2   { rst=0, enable=0, jmploc=10, jmp=0 }; // dont increment
    #4   { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #6   { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #8   { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #10  { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #12  { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #14  { rst=0, enable=1, jmploc=10, jmp=1 }; // jmp to 10
    #16  { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #18  { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #20  { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #22  { rst=1, enable=1, jmploc=10, jmp=0 }; // reset back to 0
    #24  { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
    #26  { rst=0, enable=1, jmploc=10, jmp=0 }; // increment
  end
endmodule