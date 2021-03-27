/* eslint-disable no-debugger */
import Numeric from "./Numeric";

// Component interface
// All components have an id, an array of inputs and a numeric state

class BaseComponent {
  constructor(namespace, name, type, bitSize, defaultValue = "x") {
    this.name = name;
    this.namespace = namespace;

    if (!type)
      throw new Error(
        `Gate.constructor(${namespace}, ${name}, ??) must specify gate type`
      );
    this.type = type;
    this.inputs = [];
    this.defaultValue = defaultValue;
    this.state = new Numeric(this.defaultValue, bitSize);
  }
  get id() {
    return this.namespace + "_" + this.name;
  }

  clear(def) {
    this.state.clear(def != undefined ? def : this.defaultValue);
  }
  update() {
    // update is called each clock and processes inputs to call this.setValue
    throw new Error("BaseComponent.update() should be implemented in child");
  }
  setValue(x, range) {
    this.state.setValue(x, range);
  }
  getValue() {
    return this.state.getValue();
  }
  getLocalId() {
    return this.id.substr(this.id.lastIndexOf("_") + 1);
  }
  getSchematicName() {
    return this.type.toUpperCase();
  }
  get bitSize() {
    return this.state.bitSize;
  }
}

export default BaseComponent;
