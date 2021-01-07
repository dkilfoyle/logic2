import Numeric from "./Numeric";
import Variable from "./Variable";

const opLookup = {
  add: "+",
  sub: "-",
  mul: "*",
  div: "/",
  and: "&",
  nand: "~&",
  or: "|",
  nor: "~|",
  xor: "^"
};

class Operation {
  constructor(lhs, op, rhs = null) {
    if (!(lhs instanceof Numeric || lhs instanceof Variable))
      throw new Error(`Operation constructor: invalid lhs ${lhs}`);
    if (rhs != null)
      if (!(rhs instanceof Numeric || rhs instanceof Variable))
        throw new Error(`Operation constructor: invalid rhs ${rhs}`);

    this.lhs = lhs;
    this.rhs = rhs;

    switch (op) {
      case "+":
        this.op = "add";
        break;
      case "-":
        this.op = "sub";
        break;
      case "*":
        this.op = "mul";
        break;
      case "/":
        this.op = "div";
        break;
      case "&":
        this.op = "and";
        break;
      case "~&":
        this.op = "nand";
        break;
      case "|":
        this.op = "or";
        break;
      case "~|":
        this.op = "nor";
        break;
      case "^":
        this.op = "xor";
        break;
      default:
        throw new Error(`Operation constructor: invalid op ${op}`);
    }
  }
  getValue(namespace, gatesLookup) {
    switch (this.op) {
      case "add":
        return this.rhs == null // unary +
          ? this.lhs.getValue(namespace, gatesLookup)
          : this.lhs.getValue(namespace, gatesLookup) +
              this.rhs.getValue(namespace, gatesLookup);
      case "sub":
        return this.rhs == null // unary -(
          ? this.lhs.getValue(namespace, gatesLookup) * -1
          : this.lhs.getValue(namespace, gatesLookup) -
              this.rhs.getValue(namespace, gatesLookup);
      case "mul":
        return (
          this.lhs.getValue(namespace, gatesLookup) *
          this.rhs.getValue(namespace, gatesLookup)
        );
      case "div":
        return (
          this.lhs.getValue(namespace, gatesLookup) /
          this.rhs.getValue(namespace, gatesLookup)
        );
      default:
        throw new Error(`Operation getValue: invalid op ${this.op}`);
    }
  }
  toString() {
    return `${this.lhs.toString()}${opLookup[this.op]}${this.rhs.toString()}`;
  }
}

export default Operation;
