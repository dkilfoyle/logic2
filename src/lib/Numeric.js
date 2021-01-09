import Operand from "./Operand";

// Variable is a key into the gatesLookup object (which acts as 'memory')
const bitSize = x => (x == 0 ? 1 : 32 - Math.clz32(x));
const formatLookup = {
  decimal: 10,
  binary: 2,
  hex: 16,
  octal: 8
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
  constructor(decimalValue, size = null, format = "decimal") {
    super("numeric");
    this.decimalValue = decimalValue;
    this.size = size || bitSize(decimalValue);
    this.format = format;
  }
  setValue(newDecimalValue, bitRange = null) {
    const destSize = bitRange
      ? Math.abs(bitRange[0] - bitRange[bitRange.length - 1]) + 1
      : this.size;
    if (bitSize(newDecimalValue) != destSize) {
      throw new BitSizeError(
        `BitSizeMismatch: ${newDecimalValue}(${bitSize(
          newDecimalValue
        )} bits) => (${destSize}) bits)`
      );
    }
    if (bitRange == null) this.decimalValue = newDecimalValue;
    else {
      // set only specific bits
      this.decimalValue |= newDecimalValue << Math.min(...bitRange);
    }
  }
  getValue() {
    return this.decimalValue;
  }
  toString() {
    return this.decimalValue.toString(formatLookup[this.format]);
  }
}

export default Numeric;
