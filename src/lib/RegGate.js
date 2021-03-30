/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class RegGate extends BaseComponent {
  constructor(namespace, name, bitSize = 1, defaultValue = 0) {
    super(namespace, name, "reg", bitSize, defaultValue);
  }
  update() {
    // update is called each clock and processes inputs to call this.setValue
    // registers and memory have no inputs, their values are set in expressions, not by inputs
    return this.state.getValue();
  }
}

export default RegGate;
