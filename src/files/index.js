export const SourceFiles = {
  BitAdder: require("./1bitadder.v").default,
  DFF: require("./dff.v").default,
  Scratch: require("./scratch.v").default,
  // Scratch: require("./dflipflopb.v").default,
  OneHotDecoder: require("./onehotdecoder.v").default,
  SevenSeg: require("./sevenseg.v").default,
  SevenSegB: require("./sevensegb.v").default,
  Mux2_1: require("./mux.v").default,
  DeMux: require("./demux.v").default,
  RippleCounter: require("./ripplecounter.v").default,
  Simplify: require("./simplify.v").default,
  SumProducts: require("./sumproducts.v").default,
  DeMorgans: require("./demorgan.v").default,
  SRLatch: require("./srlatch.v").default,
  SRLatchComplement: require("./srlatchcomplement.v").default,
  SRLatchEnable: require("./srlatchenable.v").default,
  DLatch: require("./dlatch.v").default,
  DFlipFlop: require("./dflipflop.v").default,
  DFlipFlopPC: require("./dflipflopPC.v").default,
  WindowController: require("./windowcontroller.v").default,
  ToggleFlopDivider: require("./toggleflopdivider.v").default,
  ShiftRegister: require("./shiftregister.v").default,
  BinaryUp: require("./binaryup.v").default,
  BinaryUpDown: require("./binaryupdown.v").default,
  OneHotUpCounter: require("./onehotupcounter.v").default,
  HalfAdder: require("./halfadder.v").default,
  FullAdder: require("./fulladder.v").default,
  FullAdderSingle: require("./fulladdersingle.v").default,
  // Scratch: require("./fulladder.v").default,
  RippleAdder: require("./rippleadder.v").default,
  RippleSubtractor: require("./ripplesubtractor.v").default,
  // Behavioural models
  Add4: require("./add4.v").default,
  DFlipFlopB: require("./dflipflopb.v").default,
  NBitAdder: require("./nbitadder.v").default,
  Comparator: require("./comparator.v").default,
  Alu: require("./alu.v").default,
  MIPS: require("./mips.v").default
};

export const SourceTree = [
  {
    text: "Templates",
    children: [{ text: "Scratch" }]
  },
  {
    text: "Theory",
    children: [
      { text: "Simplify" },
      { text: "SumProducts" },
      { text: "DeMorgans" },
      { text: "TruthTable" }
    ]
  },
  {
    text: "Combinational",
    children: [
      {
        text: "Multiplexers",
        children: [{ text: "Mux2_1" }, { text: "DeMux" }]
      },
      {
        text: "En/Decoders",
        children: [{ text: "OneHotDecoder" }, { text: "SevenSeg" }]
      },
      {
        text: "Math",
        children: [
          { text: "BitAdder" },
          { text: "HalfAdder" },
          { text: "FullAdder" },
          { text: "FullAdderSingle" },
          { text: "RippleAdder" },
          { text: "RippleSubtractor" }
        ]
      }
    ]
  },

  {
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
  },
  {
    text: "Finite State Machine",
    children: [
      { text: "WindowController" },
      {
        text: "Counters",
        children: [
          { text: "BinaryUp" },
          { text: "BinaryUpDown" },
          { text: "OneHotUpCounter" }
        ]
      }
    ]
  },
  {
    text: "Behavioural Models",
    children: [
      {
        text: "Maths",
        children: [
          { text: "Add4" },
          { text: "NBitAdder" },
          { text: "Comparator" },
          { text: "Alu" }
        ]
      },
      { text: "DFlipFlopB" },
      { text: "SevenSegB" },
      {
        text: "Architecture",
        children: [
          {
            text: "MIPS"
          }
        ]
      }
    ]
  }
];
