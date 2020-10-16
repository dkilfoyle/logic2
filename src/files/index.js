import BitAdder from "./1bitadder.v";
import DFF from "./dff.v";
import Scratch from "./scratch.v";
import OneHotDecoder from "./onehotdecoder.v";
import SevenSeg from "./7seg.v";
import Mux2_1 from "./mux.v";
import DeMux from "./demux.v";
import RippleCounter from "./ripplecounter.v";

export const SourceTree = [
  {
    text: "Templates",
    children: [{ text: "Scratch", value: Scratch }],
  },
  {
    text: "Mux",
    children: [
      { text: "Mux2_1", value: Mux2_1 },
      { text: "DeMux", value: DeMux },
    ],
  },
  {
    text: "Decoders",
    children: [{ text: "OneHot", value: OneHotDecoder }],
  },
  {
    text: "Encoders",
    children: [{ text: "SevenSeg", value: SevenSeg }],
  },
  {
    text: "Memory",
    children: [{ text: "DFF", covaluede: DFF }],
  },
  {
    text: "Math",
    children: [
      { text: "BitAdder", value: BitAdder },
      { text: "RippleCounter", value: RippleCounter },
    ],
  },
];

export const SourceFiles = {
  BitAdder,
  DFF,
  Scratch,
  OneHotDecoder,
  SevenSeg,
  Mux2_1,
  DeMux,
  RippleCounter,
};
