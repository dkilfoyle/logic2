 
/*
Sum of products from truth table. 
Find minterm (contains all inputs and is true) for each true result
Sum the minterm products

A B | F | minterm
0 0 | 0 | -
0 1 | 1 | A` * B
1 0 | 1 | A * B`
1 1 | 0 | -

F = (A` * B) + (A * B`)

*/

module Main(
  input A, B,
  output F
); 

  wire Fe;
  assign Fe = (~A & B) | (A & ~B);

  response(F, Fe); // buffer Fe gate to output F

  test begin
    #0  {A=0, B=0};
    #2  {A=0, B=1};
    #4  {A=1, B=0};
    #6  {A=1, B=1};
    #8;
  end
endmodule