export const SourceFiles = {
  Simplify: require("./simplify.v").default,
  SumProducts: require("./sumproducts.v").default,
  DeMorgans: require("./demorgan.v").default,
  TruthTable: require("./truthtemplate.v").default,
  Concatenation: require("./concatenation.v").default
};

export const SourceTree = {
  text: "Theory",
  children: [
    { text: "Simplify" },
    { text: "SumProducts" },
    { text: "DeMorgans" },
    { text: "TruthTable" },
    { text: "Concatenation" }
  ]
};
