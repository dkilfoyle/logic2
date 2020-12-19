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
import BinaryUp from "./binaryup.v";
import HalfAdder from "./halfadder.v";
import FullAdder from "./fulladder.v";
import RippleAdder from "./rippleadder.v";
import RippleSubtractor from "./ripplesubtractor.v";

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
      { text: "DeMorgans", value: DeMorgans },
      { text: "TruthTable", value: {} }
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
        children: [
          { text: "BitAdder", value: BitAdder },
          { text: "HalfAdder", value: HalfAdder },
          { text: "FullAdder", value: FullAdder },
          { text: "RippleAdder", value: RippleAdder },
          { text: "RippleSubtractor", value: RippleSubtractor }
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
    children: [
      { text: "WindowController", value: WindowController },
      {
        text: "Counters",
        children: [
          {
            text: "BinaryUp",
            value: BinaryUp
          }
        ]
      }
    ]
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
  ShiftRegister,
  BinaryUp,
  HalfAdder,
  FullAdder,
  RippleAdder,
  RippleSubtractor,
  TruthTable: ""
};
