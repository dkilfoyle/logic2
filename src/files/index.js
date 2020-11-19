import BitAdder from "./1bitadder.v";
import DFF from "./dff.v";
import Scratch from "./scratch.v";
import OneHotDecoder from "./onehotdecoder.v";
import SevenSeg from "./7seg.v";
import Mux2_1 from "./mux.v";
import DeMux from "./demux.v";
import RippleCounter from "./ripplecounter.v";
import Simplify from "./simplify.v";
import SumProducts from "./sumproducts.v";
import DeMorgans from "./demorgan.v";
import SRLatch from "./srlatch.v";
import SRLatchComplement from "./srlatchcomplement.v";
import SRLatchEnable from "./srlatchenable.v";
import DLatch from "./dlatch.v";
import DFlipFlop from "./dflipflop.v";
import WindowController from "./windowcontroller.v";
import ToggleFlopDivider from "./toggleflopdivider.v";
import ShiftRegister from "./shiftregister.v";

export const SourceTree = [
  {
    text: "Templates",
    children: [{ text: "Scratch", value: Scratch }]
  },
  {
    text: "Theory",
    children: [
      { text: "Simplify", value: Simplify },
      { text: "SumProducts", value: SumProducts },
      { text: "DeMorgans", value: DeMorgans }
    ]
  },
  {
    text: "Combinational",
    children: [
      {
        text: "Multiplexers",
        children: [
          { text: "Mux2_1", value: Mux2_1 },
          { text: "DeMux", value: DeMux }
        ]
      },
      {
        text: "En/Decoders",
        children: [
          { text: "OneHotDecoder", value: OneHotDecoder },
          { text: "SevenSeg", value: SevenSeg }
        ]
      },
      {
        text: "Math",
        children: [{ text: "BitAdder", value: BitAdder }]
      }
    ]
  },

  {
    text: "Sequential",
    children: [
      {
        text: "Latches",
        children: [
          { text: "SRLatch", value: SRLatch },
          { text: "SRLatchComplement", value: SRLatchComplement },
          { text: "SRLatchEnable", value: SRLatchEnable },
          { text: "DLatch", value: DLatch },
          { text: "DFlipFlop", value: DFlipFlop },
          { text: "DFF", value: DFF }
        ]
      },
      {
        text: "Circuits",
        children: [
          { text: "ToggleFlopDivider", value: ToggleFlopDivider },
          { text: "RippleCounter", value: RippleCounter },
          { text: "ShiftRegister", value: ShiftRegister }
        ]
      }
    ]
  },
  {
    text: "Finite State Machine",
    children: [{ text: "WindowController", value: WindowController }]
  }
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
  Simplify,
  SumProducts,
  DeMorgans,
  SRLatch,
  SRLatchComplement,
  SRLatchEnable,
  DLatch,
  DFlipFlop,
  WindowController,
  ToggleFlopDivider,
  ShiftRegister
};
