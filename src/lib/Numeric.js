// Variable is a key into the gatesLookup object (which acts as 'memory')
const bitSize = x => 32 - Math.clz32(x);
const formatLookup = {
  decimal: 10,
  binary: 2,
  hex: 16,
  octal: 8
};

class Numeric {
  constructor(decimalValue, size = null, format = "decimal") {
    this.decimalValue = decimalValue;
    this.size = size || bitSize(decimalValue);
    this.format = format;
  }
  setValue(newDecimalValue) {
    if (bitSize(newDecimalValue) > this.size)
      throw new Error(
        `Numeric.setValue: ${newDecimalValue} bit size (${bitSize(
          newDecimalValue
        )}) exceeds numeric size (${this.size})`
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
