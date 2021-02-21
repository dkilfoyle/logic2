/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";
import Numeric from "./Numeric";

class MemoryGate extends BaseComponent {
  constructor(namespace, name, bitSize = 1, arraySize = 1) {
    super(namespace, name, arraySize == 1 ? "reg" : "memory", bitSize);
    this.arraySize = arraySize;
  }
  clear() {
    this.state = new Array(this.arraySize)
      .fill()
      .map(() => new Numeric(0, this.bitSize));
  }
  update() {
    // update is called each clock and processes inputs to call this.setValue
    // registers and memory have no inputs, their values are set in expressions, not by inputs
  }
  setValue(x, index = 0) {
    if (index > this.state.length)
      throw new Error(
        "MemoryGate.setValue " + this.name + " invalid index " + index
      );
    this.state[index].setValue(x);
  }
  getValue(index = 0) {
    if (index > this.state.length)
      throw new Error(
        "MemoryGate.getValue " + this.name + " invalid index " + index
      );
    return this.state[index].getValue();
  }
}

export default MemoryGate;
