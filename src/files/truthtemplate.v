module SumOfProducts(
  input ${this.inputNames},
  output ${this.outputName});

  assign ${this.outputName} = ${this.sumofproducts};
endmodule

${this.kmap ? "" : "\/*"}
module KMap(
  input ${this.inputNames},
  output ${this.outputName});
  
  ${this.kmap ? "" : "\/\/"} assign ${this.outputName} = ${this.kmap};
endmodule
${this.kmap ? "" : "*\/"}

module Main(
  input ${this.inputNames},
  output ${this.outputName}sop, ${this.outputName}kmap
); 

  SumOfProducts sop(${this.arguments}, .${this.outputName}(${this.outputName}sop));
  ${this.kmap ? "" : "\/\/"} KMap kmap(${this.arguments}, .${this.outputName}(${this.outputName}kmap));

  test begin
${this.testBench}
  end
endmodule