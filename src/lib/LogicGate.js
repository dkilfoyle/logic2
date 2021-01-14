import BaseComponent from "./BaseComponent";

const not = a => ~a & 1;

class LogicGate extends BaseComponent {
  constructor(namespace, name, type, bitSize = 1) {
    super(namespace, name, type, bitSize);
    if (!["and", "nand", "or", "xor", "xnor", "nor", "not"].includes(type))
      throw new Error(
        `LogicGate.constructor(${namespace},${name},${type},${bitSize}): invalid type ${type}`
      );
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

    let [a, b, c] = this.inputs.map(input => input.getValue(gatesLookup));

    switch (this.type) {
      case "and":
        this.setValue(c ? a && b && c : a && b);
        break;
      case "nand":
        this.setValue(not(c ? a && b && c : a && b));
        break;
      case "or":
        this.setValue(c ? a || b || c : a || b);
        break;
      case "nor":
        this.setValue(not(c ? a || b || c : a || b));
        break;
      case "xor":
        this.setValue(c ? a ^ b ^ c : a ^ b);
        break;
      case "nxor":
        this.setValue(not(c ? a ^ b ^ c : a ^ b));
        break;
      case "not":
        this.setValue(not(a));
        break;
      default:
        throw new Error(
          `Logic gate ${this.id} has invalid logicfn (${this.type})`
        );
    }
  }
  setValue(x) {
    this.state.setValue(x);
  }
  getValue() {
    return this.state.getValue();
  }
}

export default LogicGate;
