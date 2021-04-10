/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class ConstantGate extends BaseComponent {
  constructor(namespace, name, bitSize = 1, defaultValue = 0) {
    super(namespace, name, "constant", bitSize, defaultValue);
    this.inputMasks = [];
  }
  update() {
    // update is called each clock and processes inputs to call this.setValue
    // constant gates have no inputs so nothing to update
    return this.state.getValue();
  }
  getSchematicName() {
    return "CONSTANTGATE";
  }
}

export default ConstantGate;
