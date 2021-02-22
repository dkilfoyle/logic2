export const SourceFiles = {
  // Sequential codes
  DFF: require("./dff.v").default,
  SRLatch: require("./srlatch.v").default,
  SRLatchComplement: require("./srlatchcomplement.v").default,
  SRLatchEnable: require("./srlatchenable.v").default,
  DLatch: require("./dlatch.v").default,
  DFlipFlop: require("./dflipflop.v").default,
  DFlipFlopPC: require("./dflipflopPC.v").default,
  ShiftRegister: require("./shiftregister.v").default,
  ToggleFlopDivider: require("./toggleflopdivider.v").default,
  RippleCounter: require("./ripplecounter.v").default
};

export const SourceTree = {
  text: "Sequential",
  children: [
    {
      text: "Latches",
      children: [
        { text: "SRLatch" },
        { text: "SRLatchComplement" },
        { text: "SRLatchEnable" },
        { text: "DLatch" },
        { text: "DFlipFlop" },
        { text: "DFlipFlopPC" },
        { text: "DFF" }
      ]
    },
    {
      text: "Circuits",
      children: [
        { text: "ToggleFlopDivider" },
        { text: "RippleCounter" },
        { text: "ShiftRegister" }
      ]
    }
  ]
};
