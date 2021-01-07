class GateOperation {
  constructor(lhs, op, rhs = null) {
    this.lhs = lhs;
    this.rhs = rhs;
    switch (op) {
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
        throw new Error("invalid assign binary operator");
    }
  }
  toString() {
    return `${this.lhs.toString()} ${this.op} ${this.rhs.toString()}`;
  }
}

export default GateOperation;
