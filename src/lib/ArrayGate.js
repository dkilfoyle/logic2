/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";
import Numeric from "./Numeric";

class ArrayGate extends BaseComponent {
  constructor(namespace, name, bitSize = 1, defaultValue = 0, arraySize = 1) {
    super(namespace, name, "array", bitSize, defaultValue);
    this.arraySize = arraySize;
    this.state = new Array(this.arraySize)
      .fill()
      .map(() => new Numeric(this.defaultValue, this.bitSize));
  }
  clear() {
    this.state.forEach(x => x.setValue(this.defaultValue));
  }
  update() {
    // update is called each clock and processes inputs to call this.setValue
    // registers and memory have no inputs, their values are set in expressions, not by inputs
    return this.getValue();
  }
  setValue(x, index = 0) {
    this.checkIndex(index, "setValue");
    this.state[index].setValue(x);
  }
  getValue(index = 0) {
    this.checkIndex(index, "getValue");
    return this.state[index].getValue();
  }
  getValues() {
    return this.state.map(s => s.getValue());
  }
  checkIndex(index, msg) {
    if (index > this.state.length)
      throw new Error(`MemoryGate.${msg}: ${this.name} invalid index ${index}`);
  }
}

export default ArrayGate;
