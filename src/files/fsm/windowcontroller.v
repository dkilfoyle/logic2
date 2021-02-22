// Window Controller from Chapter 7 of Introduction to Logic Circuits and Logic Design LaMeres

// Current State     | Input |     Next State     |      Outputs        |
//          |  Qcur | Press |            | Qnxt | OpenCW | CloseCCW |
// wclosed |   0    |   0   | wclosed   |   0   |    0    |     0     |
// wclosed |   0    |   1   | wopen     |   1   |    1    |     0     |
// wopen   |   1    |   0   | wopen     |   1   |    0    |     0     |
// wopen   |   1    |   1   | wclosed   |   0   |    0    |     1     |

// Next state logic
// Qcur  Press   |  Qnxt
//    0     0     |    0
//    0     1     |    1
//    1     0     |    1
//    1     1     |    0

// Kmap for Qnxt
//       \  Qcur
// Press  \   0  1
//         -------
//       0 |  0  1 
//       1 |  1  0
// Qnxt = (~Press & Qcur) | (Press & ~Qcur)

// Kmap for OpenCW
//       \  Qcur
// Press  \   0  1
//         -------
//       0 |  0  0 
//       1 |  1  0
// OpenCW = Press & ~Qcur

// Kmap for OpenCCW
//       \  Qcur
// Press  \   0  1
//         -------
//       0 |  0  0 
//       1 |  0  1
// OpenCCW = Press & Qcur

module DLatch (
  input d, c,
  output Qd);

  wire dn;
  not(dn, d);

  wire u1, u2, Qn;
  assign u1 = d ~& c;
  assign u2 = dn ~& c;
  assign Qd = u1 ~& Qn;
  assign Qn = Qd ~& u2;
endmodule

module DFlipFlop (
  input d, c,
  output Qff);

  wire cn, cnn;
  not(cn, c);
  not(cnn, cn);

  wire Qdl1;
  buffer(Qff);
  buffer(Qdl1);

  DLatch dl1(.d(d), .c(cn), .Qd(Qdl1));
  DLatch dl2(.d(Qdl1), .c(cnn), .Qd(Qff));
endmodule

module NextState (
  input Press, Qcur,
  output Qnxt);
  assign Qnxt = (~Press & Qcur) | (Press & ~Qcur);
endmodule

module OutputLogic (
  input Press, Qcur,
  output Out1, Out2);
  assign Out1 = Press & ~Qcur;
  assign Out2 = Press & Qcur;
endmodule

module Main(
  input Press, clock,
  output OpenCW, OpenCCW
); 

  wire Qnxt, Qcur;
  buffer(Qnxt);
  buffer(Qcur);  

  NextState nextState(
    .Press(Press),
    .Qcur(Qcur),
    .Qnxt(Qnxt)
  );

  DFlipFlop dff(
    .d(Qnxt),
		.c(clock),
		.Qff(Qcur)
  );

  OutputLogic outputLogic(
    .Press(Press),
    .Qcur(Qcur),
    .Out1(OpenCW),
    .Out2(OpenCCW)
  );

  test begin
    #0  { Press=0 };
    #1  { Press=1 };
    #2  { Press=0 };
    #3  { Press=0 };
    #4  { Press=0 };
    #5  { Press=1 };
    #6  { Press=0 };
    #7  { Press=0 };
    #8  { Press=0 };
    #9  { Press=1 };
    #10 { Press=0 };
    #11 { Press=0 };
    #12;
  end
endmodule