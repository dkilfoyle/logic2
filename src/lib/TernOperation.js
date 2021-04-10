/* eslint-disable no-debugger */
import Operand from "./Operand";

class TernOperation extends Operand {
  constructor(test, lhs1, lhs0) {
    super("operation");
    if (!(lhs1 instanceof Operand))
      throw new Error(`Operation constructor: invalid lhs1 ${lhs1}`);
    if (!(lhs1 instanceof Operand))
      throw new Error(`Operation constructor: invalid lhs0 ${lhs0}`);
    if (!(test instanceof Operand))
      throw new Error(`Operation constructor: invalid test ${test}`);

    this.lhs0 = lhs0;
    this.lhs1 = lhs1;
    this.test = test;
    this.op = "mux";
  }
  getBitSize(gatesLookup, namespace) {
    const testResult = this.test.getValue(gatesLookup, namespace);
    return testResult > 0
      ? this.lhs1.getBitSize(gatesLookup, namespace)
      : this.lhs0.getBitSize(gatesLookup, namespace);
  }
  getValue(gatesLookup, namespace) {
    const testResult = this.test.getValue(gatesLookup, namespace);
    return testResult > 0
      ? this.lhs1.getValue(gatesLookup, namespace)
      : this.lhs0.getValue(gatesLookup, namespace);
  }
  toString() {
    return (
      this.test.toString() +
      " ? " +
      this.lhs1.toString() +
      " : " +
      this.lhs0.toString()
    );
  }
}

export default TernOperation;
