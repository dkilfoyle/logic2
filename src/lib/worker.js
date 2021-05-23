/* eslint-disable no-debugger */

import parse from "./parse.js";
import compile from "./compile.js";
import simulate from "./simulate.js";
import circuit from "./circuit.js";

const loadedFiles = {};
// const log = (msg, data) => postMessage({ type: "log", msg, data });

addEventListener("message", event => {
  // console.log("Worker received message", event.data);
  const filename = event.data.filename;
  if (!filename) throw new Error("worker message listener needs filename");
  if (!loadedFiles[filename]) loadedFiles[filename] = { filename };
  const currentFile = loadedFiles[filename];
  switch (event.data.command) {
    case "parse":
      parse(currentFile, event.data.code, event.data.silent);
      console.log("Worker Parse result", currentFile.parseResult);
      postMessage({ type: "parseResult", payload: currentFile.parseResult });
      break;
    case "compile":
      compile(currentFile, event.data.silent);
      console.log("Worker Compile result", currentFile.compileResult);
      postMessage({
        type: "compileResult",
        payload: currentFile.compileResult
      });
      break;
    case "parseAndCompile":
      parse(currentFile, event.data.code, event.data.silent);
      console.log("Worker Parse result", currentFile.parseResult);
      postMessage({ type: "parseResult", payload: currentFile.parseResult });
      compile(currentFile, event.data.silent);
      console.log("Worker Compile result", currentFile.compileResult);
      postMessage({
        type: "compileResult",
        payload: currentFile.compileResult
      });
      break;
    case "simulate":
      simulate(currentFile);
      console.log("Worker Simulate result", currentFile.simulateResult, event.data.silent);
      postMessage({
        type: "simulateResult",
        payload: currentFile.simulateResult
      });

      break;
    case "circuit":
      circuit(currentFile);
      console.log("Worker circuit result", currentFile.circuitResult);
      postMessage({
        type: "circuitResult",
        payload: currentFile.circuitResult
      });
      break;
    default:
      console.log("Unknown command", event.data);
  }
});
