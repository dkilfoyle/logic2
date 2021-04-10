export const SourceFiles = {
  // Behavioural models
  BenEater: require("./beneater.v").default,
  Register: require("./register.v").default,
  TriBuff: require("./tribuff.v").default
};

export const SourceTree = {
  text: "CPU",
  children: [
    { text: "Tests", children: [{ text: "Register" }, { text: "TriBuff" }] },
    { text: "BenEater" }
  ]
};
