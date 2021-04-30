// Binary Up Controller from Chapter 7.5.1 of Introduction to Logic Circuits and Logic Design LaMeres

// states
// C0 00
// C1 01
// C2 10
// C3 11 then back to C0

//   Current State    |       Next State   |
//    | Q1cur | Q0Cur |    | Q1nxt | Q0nxt |
// C0 |   0   |   0   | C1 |   0   |   1   |
// C1 |   0   |   1   | C2 |   1   |   0   |
// C2 |   1   |   0   | C3 |   1   |   1   |
// C3 |   1   |   1   | C0 |   0   |   0   |

// Kmap for Q1nxt
//       \  Q1cur
// Q0cur  \   0  1
//         -------
//       0 |  0  1 
//       1 |  1  0
// Q1nxt = (~Q1cur & Q0cur) | (Q1cur & ~Q0cur)

// Kmap for Q0nxt
//       \  Q1cur
// Q0cur  \   0  1
//         -------
//       0 |  1  1 
//       1 |  0  0
// Q0nxt = ~Q0cur

module DLatch (
  input d, c,
  output Q, Qn);

  initial
    begin
      Q = 0;
      Qn = 0;
    end

  wire dn;
  not(dn, d);

  wire u1, u2, Qn;
  assign u1 = d ~& c;
  assign u2 = dn ~& c;
  assign Q = u1 ~& Qn;
  assign Qn = Q ~& u2;
endmodule

module DFlipFlop (
  input d, c,
  output Q, Qn);

  wire cn, cnn;
  not(cn, c);
  not(cnn, cn);

  wire Qmaster;
  buffer(Qmaster);

  buffer(Q);
  buffer(Qn);

  DLatch master(.d(d), .c(cn), .Q(Qmaster));
  DLatch slave(.d(Qmaster), .c(cnn), .Q(Q), .Qn(Qn));
endmodule

module NextState (
  input Q1cur, Q0cur,
  output Q1nxt, Q0nxt);

  assign Q1nxt = (~Q1cur & Q0cur) | (Q1cur & ~Q0cur);
  assign Q0nxt = ~Q0cur;

endmodule

module Main(
  input clock,
  output Q1cur, Q0cur
); 

  wire Q1nxt, Q0nxt;
  buffer(Q1nxt);
  buffer(Q0nxt);

  NextState nextState(
    .Q1cur(Q1cur),
    .Q0cur(Q0cur),
    .Q1nxt(Q1nxt),
    .Q0nxt(Q0nxt)
  );

  DFlipFlop Q1dff(
    .d(Q1nxt),
		.c(clock),
		.Q(Q1cur)
  );

  DFlipFlop Q0dff(
    .d(Q0nxt),
		.c(clock),
		.Q(Q0cur)
  );

  wire [1:0] dec;
  number(dec, Q0cur, Q1cur);

  test begin
    #20;
  end
endmodule