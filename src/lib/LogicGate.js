/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

// const not = a => ~a & 1;

const not = (a, bitSize) => {
  return parseInt(
    a
      .toString(2)
      .padStart(bitSize, "0")
      .split("")
      .map(x => (x == "1" ? "0" : "1"))
      .join(""),
    2
  );
};

class LogicGate extends BaseComponent {
  constructor(namespace, name, type, bitSize = 1, defaultValue = "x") {
    if (defaultValue != "x") debugger;
    super(namespace, name, type, bitSize, defaultValue);
    if (
      !["and", "nand", "or", "xor", "xnor", "nor", "inv", "not"].includes(type)
    )
      throw new Error(
        `LogicGate.constructor(${namespace},${name},${type},${bitSize}): invalid type ${type}`
      );
    if (type == "inv") this.type = "not";
  }
  update(gatesLookup) {
    // update is called each clock and processes inputs to call this.setValue

    if (this.inputs.length == 0) return; // nothing to process
    if (this.inputs.length > 1 && this.type == "not")
      throw new Error(`Logic gate ${this.id} is a NOT gate with > 1 input`);
    if (this.inputs.length > 3)
      throw new Error(
        `Logic gate ${this.id} has more than 3 inputs (${this.inputs.length})`
      );

    let [a, b, c] = this.inputs.map(input =>
      input.getValue(gatesLookup, input.namespace)
    );

    switch (this.type) {
      case "and":
        this.setValue(c ? a & b & c : a & b);
        break;
      case "nand":
        this.setValue(not(c ? a & b & c : a & b, this.bitSize));
        break;
      case "or":
        this.setValue(c ? a | b | c : a | b);
        break;
      case "nor":
        this.setValue(not(c ? a | b | c : a | b, this.bitSize));
        break;
      case "xor":
        this.setValue(c ? a ^ b ^ c : a ^ b);
        break;
      case "nxor":
        this.setValue(not(c ? a ^ b ^ c : a ^ b, this.bitSize));
        break;
      case "not":
        this.setValue(not(a, this.bitSize));
        break;
      default:
        throw new Error(
          `Logic gate ${this.id} has invalid logicfn (${this.type})`
        );
    }
    this.propogateChange(gatesLookup);
  }
}

export default LogicGate;
