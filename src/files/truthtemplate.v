module Main(
  input ${this.inputNames},
  output ${this.outputName}sop, ${this.outputName}kmap
); 

  wire sumOfProducts;
  assign sumOfProducts = ${this.sumofproducts};

  wire kmap;
  assign kmap = ${this.kmap};

  response(${this.outputName}sop, sumOfProducts);
  response(${this.outputName}kmap, kmap);

  test begin
${this.testBench}
  end
endmodule