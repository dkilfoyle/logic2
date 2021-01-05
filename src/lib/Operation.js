import Numeric from "./Numeric";
import Variable from "./Variable";

const opLookup = {
  add: "+",
  sub: "-",
  mul: "*",
  div: "/"
};

class Operation {
  constructor(lhs, op, rhs = null) {
    if (!(lhs instanceof Numeric || lhs instanceof Variable))
      throw new Error(`Operation constructor: invalid lhs ${lhs}`);
    if (rhs != null) {
      if (!(rhs instanceof Numeric || rhs instanceof Variable))
        throw new Error(`Operation constructor: invalid rhs ${rhs}`);
    }
    if (!["add", "sub", "mul", "div"].includes(op))
      throw new Error(`Operation constructor: invalid op ${op}`);
    this.lhs = lhs;
    this.rhs = rhs;
    this.op = op;
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
    return `${this.lhs.toString()} ${opLookup[this.op]} ${this.rhs.toString()}`;
  }
}

export default Operation;
