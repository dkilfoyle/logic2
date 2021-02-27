/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class BufferGate extends BaseComponent {
  constructor(namespace, name, type, bitSize = 1) {
    super(namespace, name, type, bitSize);
    if (
      ![
        "buffer",
        "portbuffer",
        "response",
        "control",
        "number",
        "ledbar",
        "sevenseg",
        "reg"
      ].includes(type)
    )
      throw new Error(
        `BufferGate.constructor(${namespace},${name},${type},${bitSize}): invalid type ${type}`
      );
    this.inputMasks = [];
  }
  update(gatesLookup) {
    // update is called each clock and processes inputs to call this.setValue
    if (this.inputs.length == 0) return; // nothing to process
    let inputValues = this.inputs.map(input =>
      input.getValue(gatesLookup, input.namespace)
    );

    // if (this.id == "main_myAdder_sum-out") debugger;

    if (this.inputMasks.length == 0) {
      inputValues.forEach((x, i) => {
        this.setValue(x, i);
      });
    } else {
      throw new Error(
        `Buffer.update() for ${this.id} inputMasks not implemented yet`
      );
    }
  }
}

export default BufferGate;
