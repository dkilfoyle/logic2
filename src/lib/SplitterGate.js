/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class SplitterGate extends BaseComponent {
  constructor(namespace, name, bitSize, defaultValue = 0) {
    super(namespace, name, "splitter", bitSize, defaultValue);
    this.inputMasks = [];
    this.copynum = 1;
  }
  clear() {
    this.state.setValue("x");
  }
  update(gatesLookup, namespace) {
    if (this.inputs.length != 1)
      throw new Error("SplitterGate invalid number of inputs");
    this.state.setValue(this.inputs[0].getValue(gatesLookup, namespace));
    // update is called each clock and processes inputs to call this.setValue
  }
  getSchematicName() {
    return "SPLITTERGATE";
  }
}

export default SplitterGate;
