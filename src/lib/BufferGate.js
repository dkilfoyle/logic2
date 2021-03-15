/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class BufferGate extends BaseComponent {
  constructor(namespace, name, type, bitSize = 1, defaultValue = 0) {
    super(namespace, name, type, bitSize, defaultValue);
    if (
      ![
        "buffer",
        "portbuffer",
        "response",
        "control",
        "number",
        "ledbar",
        "sevenseg",
        "reg",
        "constant"
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

    if (this.inputMasks.length == 0) {
      if (inputValues.length == 1) {
        this.setValue(inputValues[0]);
      }
      // buffer gate with multiple inputs = concatenation of 1 bits
      else
        inputValues.forEach((x, i) => {
          if (x > 1)
            throw new Error(
              "Multiple input buffer - each input must be 1 bit wide"
            );
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
