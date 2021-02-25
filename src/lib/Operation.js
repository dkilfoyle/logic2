import Operand from "./Operand";

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
  inv: "~",
  lt: "<",
  lte: "<=",
  gt: ">",
  gte: ">=",
  equality: "==",
  ne: "!="
};

class Operation extends Operand {
  constructor(lhs, op, rhs = null) {
    super("operation");
    if (!(lhs instanceof Operand))
      throw new Error(`Operation constructor: invalid lhs ${lhs}`);
    if (rhs != null)
      if (!(rhs instanceof Operand))
        throw new Error(`Operation constructor: invalid rhs ${rhs}`);

    this.lhs = lhs;
    this.rhs = rhs;

    this.op = Object.entries(opLookup).find(x => x[1] == op)[0];
  }
  getBitSize(gatesLookup, namespace) {
    const lhs = this.lhs.getBitSize(gatesLookup, namespace);
    const rhs = this.rhs ? this.rhs.getBitSize(gatesLookup, namespace) : null;
    return Math.max(lhs, rhs);
  }
  getValue(gatesLookup, namespace) {
    const lhs = this.lhs.getValue(gatesLookup, namespace);
    const rhs = this.rhs ? this.rhs.getValue(gatesLookup, namespace) : null;
    switch (this.op) {
      case "parens":
        return lhs;
      case "add":
        return rhs ? lhs + rhs : lhs; // sum or unary +
      case "sub":
        return rhs ? lhs - rhs : lhs * -1; // sub or unary -
      case "mul":
        return lhs * rhs;
      case "div":
        return lhs / rhs;
      case "lt":
        return lhs < rhs ? 1 : 0;
      case "lte":
        return lhs <= rhs ? 1 : 0;
      case "gt":
        return lhs > rhs ? 1 : 0;
      case "gte":
        return lhs >= rhs ? 1 : 0;
      case "equality":
        return lhs == rhs ? 1 : 0;
      case "ne":
        return lhs != rhs ? 1 : 0;
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
