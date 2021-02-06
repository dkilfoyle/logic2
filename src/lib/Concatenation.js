/* eslint-disable no-debugger */
import Operand from "./Operand";

// Variable is a key into the gatesLookup object (which acts as 'memory')
// namespace_name will be the id of a gate
// offset will subset the bits of gatesLookup[namespace_name].state
// offset can be null (return the entire value) or a single number (bit index) or a 2 value array (bit range)

class Concatenation extends Operand {
  constructor(variables) {
    super("concatenation");
    this.variables = variables.reverse();
  }
  toString() {
    return `{${this.variables
      .map(x => x.name)
      .reverse()
      .join(",")}}`;
  }
  setValue(gatesLookup, val, namespace = null) {
    // {a,b} = 8`b01101100
    // assume a and b are variable of size 4 bits
    // nextBit = 0;
    // b = 1100 = val[b.size-1+nextBit:nextBit]
    // nextBit = nextBit = b.size
    // a = 0110 = val[a.size-1+nextBit:nextBit]
    let nextStart = 0;
    this.variables.forEach(curVar => {
      const gate = gatesLookup[namespace + "_" + curVar.name];
      if (!gate)
        throw new Error(
          `Variable.setValue cannot find gate with id ${curVar.name}`
        );
      gate.state.setValue(
        this.getBitRange(val, [gate.state.bitSize - 1 + nextStart, nextStart])
      );
      nextStart = nextStart + gate.state.bitSize;
    });
  }
  getValue(gatesLookup, namespace = null) {
    throw new Error(
      "Concatenation getValue not implemented" + gatesLookup + namespace
    );
  }
  getBit(num, bit) {
    return (num >> bit) % 2;
  }
  getBitRange(num, range) {
    let ans = [];
    if (range[0] <= range[1]) {
      for (let i = range[0]; i <= range[1]; i++) ans.push(this.getBit(num, i));
    } else {
      for (let i = range[0]; i >= range[1]; i--) ans.push(this.getBit(num, i));
    }
    return parseInt(ans.join(""), 2);
  }
}

export default Concatenation;
