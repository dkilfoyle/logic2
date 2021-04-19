/* eslint-disable no-debugger */
import Operand from "./Operand";

// Variable is a key into the gatesLookup object (which acts as 'memory')
// namespace_name will be the id of a gate
// offset will subset the bits of gatesLookup[namespace_name].state
// offset can be null (return the entire value) or a single number (bit index) or a 2 value array (bit range)

class Concatenation extends Operand {
  constructor(copynum, components) {
    super("concatenation");
    this.copynum = copynum;
    this.components = components.reverse();
  }
  toString() {
    return `{${this.components
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
    [...this.components].reverse().forEach(curVar => {
      const curVarBitSize = curVar.getBitSize(gatesLookup, namespace);
      curVar.setValue(
        gatesLookup,
        this.getBitRange(val, [curVarBitSize - 1 + nextStart, nextStart]),
        namespace
      );

      nextStart = nextStart + curVarBitSize;
    });
  }
  getValue(gatesLookup, namespace = null) {
    const concatstr = this.components.reduce((acc, x) => {
      return (
        acc +
        x
          .getValue(gatesLookup, namespace)
          .toString(2)
          .padStart(x.getBitSize(gatesLookup, namespace), "0")
      );
    }, "");
    return parseInt(
      concatstr.repeat(
        this.copynum ? this.copynum.getValue(gatesLookup, namespace) : 1
      ),
      2
    );
  }
  getBitSize(gatesLookup, namespace = null) {
    const copynum = this.copynum
      ? this.copynum.getValue(gatesLookup, namespace)
      : 1;

    this.components.forEach(x =>
      console.log(x.getBitSize(gatesLookup, namespace))
    );
    const bitsizes = this.components.reduce(
      (acc, x) => acc + x.getBitSize(gatesLookup, namespace),
      0
    );
    return bitsizes * copynum;
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
