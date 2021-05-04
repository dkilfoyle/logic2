/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class SplitterGate extends BaseComponent {
  constructor(namespace, name, bitSize, defaultValue = 0) {
    super(namespace, name, "splitter", bitSize, defaultValue);
    this.inputMasks = [];
    this.copynum = 1;
    this.splitterTargets = [];
    this.splitterSources = [];
    this.schematicName = "SPLITTERGATE";
  }
  clear() {
    this.state.setValue("x");
  }
  update(gatesLookup, namespace) {
    if (this.inputs.length != 1)
      throw new Error("SplitterGate invalid number of inputs");
    const newValue = this.inputs[0].getValue(gatesLookup, namespace);
    this.state.setValue(newValue);
    return newValue;
    // update is called each clock and processes inputs to call this.setValue
  }
}

export default SplitterGate;
