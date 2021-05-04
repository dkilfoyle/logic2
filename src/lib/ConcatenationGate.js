/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";

class ConcatenationGate extends BaseComponent {
  constructor(namespace, name, bitSize, defaultValue = 0) {
    super(namespace, name, "concatenation", bitSize, defaultValue);
    this.inputMasks = [];
    this.copynum = 1;
    this.schematicName = "CONCATENATIONGATE";
  }
  clear() {
    this.state.setValue("x");
  }
  update(gatesLookup, namespace) {
    const concatstr = this.inputs.reduce((acc, x) => {
      const xvalue = x.getValue(gatesLookup, namespace);
      const bitstring =
        typeof xvalue == "string"
          ? xvalue.substr(xvalue.indexOf("b") + 1)
          : xvalue.toString(2);
      const padded = bitstring.padStart(
        x.getBitSize(gatesLookup, namespace),
        "0"
      );
      return acc + padded;
    }, "");

    const res =
      concatstr.length * this.copynum + "'b" + concatstr.repeat(this.copynum);
    this.state.setValue(res);
    return this.state.getValue();

    // update is called each clock and processes inputs to call this.setValue
  }
}

export default ConcatenationGate;
