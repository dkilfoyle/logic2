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

class Numeric {
  constructor(decimalValue, size = null, format = "decimal") {
    this.decimalValue = decimalValue;
    this.size = size || bitSize(decimalValue);
    this.format = format;
  }
  setValue(newDecimalValue) {
    if (bitSize(newDecimalValue) > this.size)
      throw new BitSizeError(
        `BitSizeMismatch: ${newDecimalValue}(${bitSize(
          newDecimalValue
        )} bits) => (${this.size} bits)`
      );
    else this.decimalValue = newDecimalValue;
  }
  getValue() {
    return this.decimalValue;
  }
  toString() {
    return this.decimalValue.toString(formatLookup[this.format]);
  }
}

export default Numeric;
