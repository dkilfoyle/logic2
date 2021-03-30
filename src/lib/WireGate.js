/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class WireGate extends BaseComponent {
  constructor(namespace, name, bitSize = 1, defaultValue = 0) {
    super(namespace, name, "wiregate", bitSize, defaultValue);
    this.inputMasks = [];
  }
  update(gatesLookup) {
    // update is called each clock and processes inputs to call this.setValue
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
              "Multiple input wiregate - each input must be 1 bit wide"
            );
          this.setValue(x, i);
        });
    } else {
      throw new Error(
        `Buffer.update() for ${this.id} inputMasks not implemented yet`
      );
    }
    return this.state.getValue();
  }
}

export default WireGate;
