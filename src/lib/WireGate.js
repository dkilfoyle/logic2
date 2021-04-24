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
      // wire gate with multiple inputs = select one with non z value
      else {
        let nonz = inputValues.filter(x => !x.toString().includes("z"));
        if (nonz.length != 1) this.setValue("z");
        else this.setValue(nonz[0]);
        if (nonz.length > 1)
          //throw new Error("Wire gate with more than 1 non-z input");
          console.log(
            `warning: ${this.id} wiregate has more than input non-z input`
          );
      }
    } else {
      throw new Error(
        `Buffer.update() for ${this.id} inputMasks not implemented yet`
      );
    }
    return this.state.getValue();
  }
}

export default WireGate;
