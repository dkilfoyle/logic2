export const SourceFiles = {
  // Behavioural models
  BenEater: require("./beneater.v").default,
  Register: require("./register.v").default,
  TriBuff: require("./tribuff.v").default,
  RAM: require("./ram.v").default,
  PC: require("./pc.v").default,
  Controller: require("./controller.v").default,
  ALU: require("./alu.v").default,
  ALU2: require("./alu2.v").default,
  Bus: require("./bus.v").default
};

export const SourceTree = {
  text: "CPU",
  children: [
    {
      text: "Tests",
      children: [
        { text: "Register" },
        { text: "TriBuff" },
        { text: "RAM" },
        { text: "PC" },
        { text: "ALU" },
        { text: "ALU2" },
        { text: "Controller" },
        { text: "Bus" }
      ]
    },
    { text: "BenEater" }
  ]
};
