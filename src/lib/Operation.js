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
  ne: "!=",
  assign: "assign",
  shl: "<<",
  shr: ">>"
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
    if (!this.op) throw new Error(`Operation constructor: invalid op ${op}`);
  }
  getBitSize(gatesLookup, namespace) {
    const lhs = this.lhs.getBitSize(gatesLookup, namespace);
    const rhs = this.rhs ? this.rhs.getBitSize(gatesLookup, namespace) : null;
    return Math.max(lhs, rhs);
  }
  getCompileBitSize(parameters, namespace, gateBitSizesID) {
    const lhs = this.lhs.getCompileBitSize(
      parameters,
      namespace,
      gateBitSizesID
    );
    const rhs = this.rhs
      ? this.rhs.getCompileBitSize(parameters, namespace, gateBitSizesID)
      : null;
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
      case "equals":
        return lhs;
      case "inv":
        return parseInt(
          lhs
            .toString(2)
            .split("")
            .map(x => +!+x)
            .join(""),
          2
        );
      case "and":
        return lhs & rhs;
      case "or":
        return lhs | rhs;
      case "xor":
        return lhs ^ rhs;
      case "shl":
        return lhs << rhs;
      case "shr":
        return lhs >> rhs;
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
