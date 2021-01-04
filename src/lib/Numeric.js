// Variable is a key into the gatesLookup object (which acts as 'memory')
const bitSize = x => 32 - Math.clz32(x);

class Numeric {
  constructor(decimalValue, size = 1, format = "decimal") {
    this.decimalValue = decimalValue;
    this.size = size;
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
}

export default Numeric;
