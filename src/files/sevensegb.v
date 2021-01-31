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
  input [3:0] data,
  output [6:0] segments
);
  reg [6:0] segments;
  always @(*)
    case(data)
      // abcdefg
      0: segments = 7'b111_1110;
      1: segments = 7'b011_0000;
      2: segments = 7'b110_1101;
      3: segments = 7'b111_1001;
      4: segments = 7'b011_0011;
      5: segments = 7'b101_1011;
      6: segments = 7'b101_1111;
      7: segments = 7'b111_0000;
      8: segments = 7'b111_1111;
      9: segments = 7'b111_1011;
      default: segments = 7'b000_0000;
    endcase
endmodule

module Display(
  input [6:0] segments,
  output X);
  sevenseg (X, 
    segments[6],
    segments[5],
    segments[4],
    segments[3],
    segments[2],
    segments[1],
    segments[0]);
endmodule

module Main(
  input [3:0] num,
  output [6:0] segments
);

  Encoder encoder(.data(num), .segments(segments));
  Display display(.segments(segments));

  test begin
    #00 { num = 0 };
    #01 { num = 1 };
    #02 { num = 2 };
    #03 { num = 3 };
    #04 { num = 4 }; 
    #05 { num = 5 };
    #06 { num = 6 };
    #07 { num = 7 };
    #08 { num = 8 };
    #09 { num = 9 };
	end
endmodule