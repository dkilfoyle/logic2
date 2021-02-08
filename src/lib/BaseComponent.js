import Numeric from "./Numeric";

// Component interface
// All components have an id, an array of inputs and a numeric state

class BaseComponent {
  constructor(namespace, name, type, bitSize) {
    this.name = name;
    this.namespace = namespace;

    if (!type)
      throw new Error(
        `Gate.constructor(${namespace}, ${name}, ??) must specify gate type`
      );
    this.type = type;
    this.inputs = [];
    this.state = new Numeric(0, bitSize);
  }
  get id() {
    return this.namespace + "_" + this.name;
  }
  update() {
    // update is called each clock and processes inputs to call this.setValue
    throw new Error("BaseComponent.update() should be implemented in child");
  }
  setValue() {
    throw new Error("BaseComponent.setValue() should be implemented in child");
  }
  getValue() {
    throw new Error("BaseComponent.getValue() should be implemented in child");
  }
  getLocalId() {
    return this.id.substr(this.id.lastIndexOf("_") + 1);
  }
}

export default BaseComponent;
