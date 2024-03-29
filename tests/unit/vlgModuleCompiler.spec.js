import vlgParse from "../../src/lib/vlgAntlrParser.js"; // build ast
import vlgWalk from "../../src/lib/vlgAntlrListener.js"; // convert ast into module definitions
import vlgCompile from "../../src/lib/vlgModuleCompiler.js"; // compile module definitions into instances and gates
import vlgSimulate from "../../src/lib/vlgSimulator.js"; // run simulation over gate array

import fs from "fs";
import path from "path";

const getSource = src =>
  fs.readFileSync(path.resolve(__dirname, `../../src/files/${src}.v`), "utf8");

console.log = jest.fn();
console.group = jest.fn();
console.groupEnd = jest.fn();
console.groupCollapsed = jest.fn();

// const compileAndSimulate = sourceName => {
//   const sourceCode = getSource(sourceName);
//   const parseResult = vlgParse(sourceCode);
//   const walkResult = vlgWalk(parseResult.ast);
//   const compileResult = vlgCompile(walkResult.modules);
//   const simulateResult = vlgSimulate(
//     15,
//     compileResult.gates,
//     compileResult.parameters,
//     compileResult.instances,
//     walkResult.modules,
//     jest.fn()
//   );
//   return { parseResult, walkResult, compileResult, simulateResult };
// };

describe.each([
  // sourceName, numInstances, numGates, testGate, testOutput
  ["Scratch", 2, 10, "main_sum", [0, 0, 1, 1, 1, 1, 0, 0, 0]],
  ["theory/Simplify", 3, 20, "main_Qus", [0, 0, 0, 1, 0, 0, 1, 1, 1]],
  ["theory/SumProducts", 1, 8, "main_F", [0, 0, 1, 1, 1, 1, 0, 0, 0]],
  ["combinational/Mux", 2, 12, "main_F", [0, 0, 0, 1, 1, 0, 1, 0, 1, 1]],
  [
    "combinational/DeMux",
    2,
    11,
    "main_Z",
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
  ],
  [
    "combinational/OneHotDecoder",
    2,
    20,
    "main_F3",
    [0, 0, 0, 0, 0, 0, 1, 1, 1]
  ],
  [
    "combinational/SevenSeg",
    3,
    81,
    "main_Fa",
    [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
  ],
  ["combinational/RippleAdder", 6, 72, "main_S0", [0, 1, 1, 1, 1]],
  // [
  //   "sequential/DFlipFlop",
  //   4,
  //   30,
  //   "main_Qm",
  //   [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
  // ]
  [
    "sequential/RippleCounter",
    10,
    89,
    "main_Count0",
    [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0]
  ],
  [
    "sequential/ShiftRegister",
    13,
    114,
    "main_Out2",
    [1, 1, 1, 1, 1, 0, 0, 0, 0]
  ],
  [
    "fsm/BinaryUp",
    8,
    70,
    "main_Q1cur",
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
  ],
  [
    "behavioural/DFlipFlopB",
    2,
    9,
    "main_Qm",
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
  ],
  ["behavioural/Alu", 5, 36, "main_y", [2, 3, 5, 0, 254, 255, 1, 1]],
  ["behavioural/NBitAdder", 2, 12, "main_SUM", [0, 9, 10, 11, 12, 0, 0]],
  [
    "behavioural/SignExtend",
    2,
    5,
    "main_y",
    [4294945450, 21845, 4294934528, 4294934528]
  ]
])("Compile %s", (sourceName, numInstances, numGates, testGate, testOutput) => {
  console.log(sourceName, numInstances, numGates, testGate, testOutput);
  const sourceCode = getSource(sourceName);
  const parseResult = vlgParse(sourceCode);
  test("Can parse", () => {
    expect(parseResult.errors.length).toBe(0);
  });

  const walkResult = vlgWalk(parseResult.ast);
  test("Can walk", () => {
    expect(walkResult.errors.length).toBe(0);
  });

  const compileResult = vlgCompile(walkResult.modules);
  test("Can compile", () => {
    expect(compileResult.instances.length).toBe(numInstances);
    expect(compileResult.gates.length).toBe(numGates);
  });

  const simulateResult = vlgSimulate(
    15,
    compileResult.gates,
    compileResult.parameters,
    compileResult.instances,
    walkResult.modules,
    jest.fn()
  );
  test("Can simulate", () => {
    expect(simulateResult).toBeTruthy();
  });

  test(`Simulate output for ${testGate} is correct`, () => {
    expect(simulateResult.gates[testGate]).toEqual(testOutput);
  });
});

// describe("Scratch", () => {
//   const numInstances = 2;
//   const numGates = 10;
//   const testGate = "main_sum";
//   const testOutput = [0, 0, 1, 1, 1, 1, 0, 0, 0];

//   const {
//     parseResult,
//     walkResult,
//     compileResult,
//     simulateResult
//   } = compileAndSimulate("Scratch");

//   test("Can parse", () => {
//     expect(parseResult.errors.length).toBe(0);
//   });

//   test("Can walk", () => {
//     expect(walkResult.errors.length).toBe(0);
//   });

//   test("Can compile", () => {
//     expect(compileResult.instances.length).toBe(numInstances);
//     expect(compileResult.gates.length).toBe(numGates);
//   });

//   test("Can simulate", () => {
//     expect(simulateResult).toBeTruthy();
//   });

//   test(`Simulate output is correct`, () => {
//     expect(simulateResult.gates[testGate]).toEqual(testOutput);
//   });
// });
