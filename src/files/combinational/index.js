export const SourceFiles = {
  BitAdder: require("./1bitadder.v").default,
  OneHotDecoder: require("./onehotdecoder.v").default,
  SevenSeg: require("./sevenseg.v").default,
  Mux2_1: require("./mux.v").default,
  DeMux: require("./demux.v").default,
  HalfAdder: require("./halfadder.v").default,
  FullAdder: require("./fulladder.v").default,
  FullAdderSingle: require("./fulladdersingle.v").default,
  RippleAdder: require("./rippleadder.v").default,
  RippleSubtractor: require("./ripplesubtractor.v").default
};

export const SourceTree = {
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
};
