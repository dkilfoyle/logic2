/* eslint-disable no-debugger */
import Operand from "./Operand";

// Variable is a key into the gatesLookup object (which acts as 'memory')
const getBitSize = x => (x == 0 ? 1 : 32 - Math.clz32(x));
const radixLookup = {
  decimal: 10,
  binary: 2,
  hex: 16,
  octal: 8
};
const formatLookup = {
  b: "binary",
  h: "hex",
  o: "octal"
};

class BitSizeError {
  constructor(msg) {
    this.msg = msg;
    this.type = "BitSizeError";
  }
  toString() {
    return this.msg;
  }
}

class Numeric extends Operand {
  constructor(value, bitSize = null) {
    super("numeric");
    if (Number.isInteger(value)) {
      this.decimalValue = value;
      this.bitSize = bitSize || getBitSize(value);
      this.format = "decimal";
    } else {
      this.bitSize = value.substring(0, value.indexOf("'"));
      this.format = this.formatLookup[value.substr(value.indexOf("'") + 1, 1)];
      this.decimalValue = parseInt(
        value.substring(value.indexOf("'" + 2)),
        radixLookup[this.format]
      );
    }
  }
  setValue(newDecimalValue, bitRange = null) {
    const destSize = bitRange
      ? Math.abs(bitRange[0] - bitRange[bitRange.length - 1]) + 1
      : this.bitSize;
    if (getBitSize(newDecimalValue) > destSize) {
      throw new BitSizeError(
        `BitSizeMismatch: ${newDecimalValue}(${getBitSize(
          newDecimalValue
        )} bits) => (${destSize}) bits)`
      );
    }
    if (bitRange == null || bitRange == 0) this.decimalValue = newDecimalValue;
    else {
      // set only specific bits
      let numBits = bitRange.length
        ? Math.abs(bitRange[1] - bitRange[0]) + 1
        : 1;
      let shift = bitRange.length ? Math.min(...bitRange) : bitRange;
      let mask = ((1 << numBits) - 1) << shift; // eg bitrange[4:2] mask = 0b11100
      // first set all the masked bits to 0 then | in the new bits
      this.decimalValue = this.decimalValue & ~mask;
      this.decimalValue |= newDecimalValue << shift;
    }
  }
  getBitSize() {
    return this.bitSize;
  }
  getValue() {
    return this.decimalValue;
  }
  toString() {
    return this.decimalValue.toString(formatLookup[this.format]);
  }
}

export default Numeric;
