/* eslint-disable no-debugger */

import parse from "./parse.js";
import compile from "./compile.js";
import simulate from "./simulate.js";

const currentFile = {};
// const log = (msg, data) => postMessage({ type: "log", msg, data });

addEventListener("message", event => {
  console.log("Worker received message", event.data);
  switch (event.data.command) {
    case "parse":
      parse(currentFile, event.data.filename, event.data.code);
      console.log("Worker Parse result", currentFile.parseResult);
      postMessage({ type: "parseResult", payload: currentFile.parseResult });
      break;
    case "compile":
      compile(currentFile);
      console.log("Worker Compile result", currentFile.compileResult);
      postMessage({
        type: "compileResult",
        payload: currentFile.compileResult
      });
      break;
    case "simulate":
      simulate(currentFile);
      console.log("Worker Simulate result", currentFile.simulateResult);
      postMessage({
        type: "simulateResult",
        payload: currentFile.simulateResult
      });

      break;
    default:
      console.log("Unknown command", event.data);
  }
});
