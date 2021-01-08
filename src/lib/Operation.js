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
  xor: "^",
  not: "!",
  inv: "~"
};

class Operation {
  constructor(lhs, op, rhs = null) {
    if (
      !(
        lhs instanceof Numeric ||
        lhs instanceof Variable ||
        lhs instanceof Operation
      )
    )
      throw new Error(`Operation constructor: invalid lhs ${lhs}`);
    if (rhs != null)
      if (
        !(
          rhs instanceof Numeric ||
          rhs instanceof Variable ||
          rhs instanceof Operation
        )
      )
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
      case "!":
        this.op = "not";
        break;
      case "~":
        this.op = "not";
        break;
      default:
        throw new Error(`Operation constructor: invalid op ${op}`);
    }
  }
  getValue(gatesLookup, namespace) {
    switch (this.op) {
      case "add":
        return this.rhs == null // unary +
          ? this.lhs.getValue(gatesLookup, namespace)
          : this.lhs.getValue(gatesLookup, namespace) +
              this.rhs.getValue(gatesLookup, namespace);
      case "sub":
        return this.rhs == null // unary -(
          ? this.lhs.getValue(gatesLookup, namespace) * -1
          : this.lhs.getValue(gatesLookup, namespace) -
              this.rhs.getValue(gatesLookup, namespace);
      case "mul":
        return (
          this.lhs.getValue(gatesLookup, namespace) *
          this.rhs.getValue(gatesLookup, namespace)
        );
      case "div":
        return (
          this.lhs.getValue(gatesLookup, namespace) /
          this.rhs.getValue(gatesLookup, namespace)
        );
      default:
        throw new Error(`Operation getValue: invalid op ${this.op}`);
    }
  }
  toString() {
    return this.rhs
      ? `${this.lhs.toString()}${opLookup[this.op]}${this.rhs.toString()}`
      : `${opLookup[this.op]}${this.lhs.toString()}`;
  }
}

export default Operation;
