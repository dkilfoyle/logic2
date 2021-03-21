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
    this.subscribers = [];
    this.subscriptions = [];
    this.defaultValue = defaultValue;
    this.state = new Numeric(this.defaultValue, bitSize);
  }
  get id() {
    return this.namespace + "_" + this.name;
  }
  clear() {
    this.state.clear(this.defaultValue);
  }
  update() {
    // update is called each clock and processes inputs to call this.setValue
    throw new Error("BaseComponent.update() should be implemented in child");
  }
  propogateChange(gatesLookup) {
    console.group(`propogateChange ${this.id}`);
    if (this.state.hasChanged()) {
      console.log(
        `..has changed from ${this.state.lastBitArray.join(
          ""
        )} to ${this.state.bitArray.join("")}, propogating to subscribers: ${
          this.subscribers
        }`
      );
      this.subscribers.forEach(subscriber => {
        gatesLookup[subscriber].update(gatesLookup);
      });
    } else {
      console.log(
        `..hasn't changed: ${this.state.bitArray.toString("binary")}`
      );
    }
    console.groupEnd();
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
