module Main(
  input ${this.inputNames},
  output ${this.outputName}
); 

  wire sumOfProducts;
  assign sumOfProducts = ${this.sumofproducts};

  response(${this.outputName}, sumOfProducts);

  test begin
${this.testBench}
  end
endmodule