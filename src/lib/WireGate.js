/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class WireGate extends BaseComponent {
  constructor(namespace, name, bitSize = 1) {
    super(namespace, name, "wiregate", bitSize);
    this.inputMasks = [];
  }
  update(gatesLookup) {
    // update is called each clock and processes inputs to call this.setValue
    let inputValues = this.inputs.map(input =>
      input.getValue(gatesLookup, input.namespace)
    );

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

export default WireGate;
