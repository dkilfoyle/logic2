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
        "led",
        "leds",
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
    if (this.inputs.length == 0) {
      return this.state.getValue();
    }

    let inputValues = this.inputs.map(input =>
      input.getValue(gatesLookup, input.namespace)
    );

    if (this.inputMasks.length != 0)
      throw new Error(
        `Buffer.update() for ${this.id} inputMasks not implemented yet`
      );
    if (inputValues.length == 1) {
      this.setValue(inputValues[0]);
    } else {
      if (["number", "ledbar", "led", "leds", "sevenseg"].includes(this.type)) {
        // display gate with multiple inputs = concatenation of 1 bits
        inputValues.forEach((x, i) => {
          if (x > 1)
            throw new Error(
              "Multiple input buffer - each input must be 1 bit wide"
            );
          this.setValue(x, i);
        });
      } else {
        // buffer gate - if multiple inputs select the first non z
        const nonz = inputValues.filter(x => !x.toString().includes("z"));
        if (nonz.length == 1) this.setValue(nonz[0]);
        else if (nonz.length == 0) this.setValue("z");
        else {
          this.setValue(nonz[0]);
          // TODO: ? change default gate value to "x" and test for "x" or "z"
          // throw new Error(
          //   "buffer gate should not have more than 1 non-z value"
          // );
        }
      }
    }
    return this.state.getValue();
  }
}

export default BufferGate;
