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

describe.each([
  // sourceName, numInstances, numGates, testGate, testOutput
  ["Scratch", 2, 10, "main_sum", [0, 0, 1, 1, 1, 1, 0, 0, 0]],
  ["Simplify", 3, 20, "main_Qus", [0, 0, 0, 1, 0, 0, 1, 1, 1]],
  ["SumProducts", 1, 8, "main_F", [0, 0, 1, 1, 1, 1, 0, 0, 0]],
  ["Mux", 2, 12, "main_F", [0, 0, 0, 1, 1, 0, 1, 0, 1, 1]],
  [
    "DeMux",
    2,
    11,
    "main_Z",
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
  ],
  ["OneHotDecoder", 2, 20, "main_F3", [0, 0, 0, 0, 0, 0, 1, 1, 1]],
  [
    "SevenSeg",
    3,
    81,
    "main_Fa",
    [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
  ],
  ["RippleAdder", 14, 128, "main_S0", [0, 1, 1, 1, 1]],
  ["DFlipFlop", 4, 30, "main_Qm", [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]],
  [
    "RippleCounter",
    10,
    89,
    "main_Count0",
    [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]
  ],
  ["ShiftRegister", 13, 114, "main_Out2", [1, 1, 1, 1, 1, 0, 0, 0, 0]],
  [
    "BinaryUp",
    8,
    70,
    "main_Q1cur",
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
  ],
  ["DFlipFlopB", 2, 9, "main_Qm", [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]],
  ["Alu", 5, 36, "main_y", [2, 3, 5, 0, 2, 3, 1, 1]],
  ["NBitAdder", 2, 12, "main_SUM", [0, 9, 10, 11, 12, 0, 0]]
])("Compile %s", (sourceName, numInstances, numGates, testGate, testOutput) => {
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
