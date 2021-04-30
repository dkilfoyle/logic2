const worker = new Worker("./vlgSimulator.js", { type: "module" });

const send = message =>
  worker.postMessage({
    message
  });

export default {
  worker,
  send
};
