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

const compileAndSimulate = sourceName => {
  const sourceCode = getSource(sourceName);
  const parseResult = vlgParse(sourceCode);
  const walkResult = vlgWalk(parseResult.ast);
  const compileResult = vlgCompile(walkResult.modules);
  const simulateResult = vlgSimulate(
    15,
    compileResult.gates,
    compileResult.parameters,
    compileResult.instances,
    walkResult.modules,
    jest.fn()
  );
  return { parseResult, walkResult, compileResult, simulateResult };
};

describe("Register", () => {
  const numInstances = 2;
  const numGates = 10;
  const testGate = "main_Q";
  const testOutput = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0];

  const {
    parseResult,
    walkResult,
    compileResult,
    simulateResult
  } = compileAndSimulate("cpu/Register");

  test("Can parse", () => {
    expect(parseResult.errors.length).toBe(0);
  });

  test("Can walk", () => {
    expect(walkResult.errors.length).toBe(0);
  });

  test("Can compile", () => {
    expect(compileResult.instances.length).toBe(numInstances);
    expect(compileResult.gates.length).toBe(numGates);
  });

  test("Can simulate", () => {
    expect(simulateResult).toBeTruthy();
  });

  test(`Simulate output is correct`, () => {
    expect(simulateResult.gates[testGate]).toEqual(testOutput);
  });
});
