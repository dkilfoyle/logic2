export const SourceFiles = {
  // Behavioural models
  Add4: require("./add4.v").default,
  DFlipFlopB: require("./dflipflopb.v").default,
  NBitAdder: require("./nbitadder.v").default,
  Comparator: require("./comparator.v").default,
  Alu: require("./alu.v").default,
  MIPS: require("./mips.v").default,
  RegFile: require("./regfile.v").default,
  SevenSegB: require("./sevensegb.v").default,
  LW: require("./lw.v").default,
  SignExtend: require("./signextend.v").default
};

export const SourceTree = {
  text: "Behavioural Models",
  children: [
    { text: "DFlipFlopB" },
    { text: "SevenSegB" },
    {
      text: "Maths",
      children: [
        { text: "Add4" },
        { text: "NBitAdder" },
        { text: "Comparator" },
        { text: "Alu" }
      ]
    },
    {
      text: "Architecture",
      children: [
        { text: "RegFile" },
        { text: "LW" },
        { text: "SignExtend" },
        { text: "MIPS" }
      ]
    }
  ]
};
