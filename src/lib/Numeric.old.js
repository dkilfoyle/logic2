/* eslint-disable no-debugger */
import Operand from "./Operand";

// const getBit = (num, bit) => {
//   return (num >> bit) % 2;
// };

// const getBitRange = (num, bitsize, range) => {
//   let k = Math.abs(range[0] - range[1]) + 1;
//   let p = Math.max(range[0], range[1]);
//   return extractBits(num, bitsize, k, p);
// };

const extractBits = (num, bitsize, k, p) => {
  return parseInt(
    num
      .toString(2)
      .padStart(bitsize, "0")
      .slice(-p - 1, k > p ? undefined : -p - 1 + k),
    2
  );
};

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
  B: "binary",
  h: "hex",
  H: "hex",
  o: "octal",
  O: "octal",
  d: "decimal",
  D: "decimal"
};

class Numeric extends Operand {
  constructor(value, bitSize = null) {
    super("numeric");
    if (Number.isInteger(value)) {
      this.bitArray = new Array(bitSize || getBitSize(value)).fill(0);
      this.format = "decimal";
      this.setValue(value);
    } else if (typeof value == "string") {
      // eg 4'b1100
      // eg 8'hff
      this.bitArray = new Array(
        parseInt(value.substring(0, value.indexOf("'")))
      );
      this.format = formatLookup[value.substr(value.indexOf("'") + 1, 1)];
      const valueString = value.substring(value.indexOf("'") + 2);

      if (valueString.includes("x") | valueString.includes("X")) {
        if (!this.format == "binary")
          throw new Error(
            `Numeric(value=${value},bitSize=${bitSize}): only binary value strings can have 'x' bits`
          );
        this.setBits(valueString.sep(""));
      } else {
        this.setValue(parseInt(valueString, radixLookup[this.format]));
      }
    } else {
      throw new Error(`Numeric constructor invalid value: ${value}`);
    }
  }

  setBit(n, bit) {
    // set bit n (counting from right) to x
    if ((n < 0) | (n > this.bits.length - 1))
      throw new Error(
        `Numeric.setBit(n=${n},bit=${bit}): n is out of range of bitsize ${this.bitArray.length}`
      );
    if (!(bit == 0 || bit == 1 || bit == "x"))
      throw new Error(
        `Numeric.setBit(n=${n},bit=${bit}): bit must be one of 0,1,x`
      );
    this.bitArray[this.bitArray.length - n - 1] = bit;
  }

  setBits(bitRange, bits) {
    // check for valid bits
    if (!Array.isArray(bits))
      throw new Error(
        `Numeric.setBits(bitRange=${bitRange},bits=${bits}): bits must be an array`
      );

    // check for valid bitRange
    if (!Array.isArray(bitRange))
      throw new Error(
        `Numeric.setBits(bitRange=${bitRange},bits=${bits}): bitRange must be an array of length 1 or 2, or null`
      );
    if (bitRange.length < 1 || bitRange.length > 2)
      throw new Error(
        `Numeric.setBits(bitRange=${bitRange},bits=${bits}}): bitRange must be an array of length 1 or 2, or null`
      );
    if (bitRange.length == 2 && bitRange[0] < bitRange[1])
      throw new Error(
        `Numeric.setBits(bitRange=${bitRange},bits=${bits}): bitRange[0] must be >= bitRange[1] eg [3:0]`
      );
    if (bitRange[bitRange.length - 1] < 0)
      throw new Error(
        `Numeric.setBits(bitRange=${bitRange},bits=${bits}): bitRange extends below 0`
      );
    if (bitRange[0] > this.bitSize - 1)
      throw new Error(
        `Numeric.setBits(bitRange=${bitRange},bits=${bits}): bitRange extends above bitSize(${this.bitSize})`
      );

    const destSize = Math.abs(bitRange[0] - bitRange[bitRange.length - 1]) + 1;
    const newSize = bits.length;

    // check that newDecimalValue will fit within bitRange
    if (destSize > this.bitSize)
      throw new Error(
        `Numeric.setBits(bitRange=${bitRange},bits=${bits}): destSize(${destSize}) exceeds numeric bitsize(${this.bitSize})`
      );
    if (newSize > destSize)
      throw new Error(
        `Numeric.setBits(bitRange=${bitRange},bits=${bits}): newSize(${newSize}) exceeds destSize(${destSize})`
      );

    bits.forEach((x, i) => this.setBit(bitRange[0] - i, x));
  }

  setValue(value, bitRange = [this.bitSize - 1, 0]) {
    // check for valid newDecimalValue
    if (!Number.isInteger(value))
      throw new Error(
        `Numeric.setValue(value=${value}, bitRange=${bitRange}): value must be an Integer`
      );

    const destSize = Math.abs(bitRange[0] - bitRange[bitRange.length - 1]) + 1;

    this.setBits(
      bitRange,
      value
        .toString(2)
        .padStart(destSize, "0")
        .split("")
        .map(x => +x)
    );

    // if (bitRange == null || bitRange == 0) this.decimalValue = newDecimalValue;
    // else {
    //   // set only specific bits
    //   let numBits = bitRange.length
    //     ? Math.abs(bitRange[1] - bitRange[0]) + 1
    //     : 1;
    //   let shift = bitRange.length ? Math.min(...bitRange) : bitRange;
    //   let mask = ((1 << numBits) - 1) << shift; // eg bitrange[4:2] mask = 0b11100
    //   // first set all the masked bits to 0 then | in the new bits
    //   this.decimalValue = this.decimalValue & ~mask;
    //   this.decimalValue |= newDecimalValue << shift;
    // }
    // if (!Number.isInteger(this.decimalValue))
    //   throw new Error("Invalid Numeric.setValue: " + newDecimalValue);
  }

  getBitSize() {
    return this.bitArray.length;
  }
  getBit(n) {}
  getBits(range) {}
  getValue() {}

  formatValue(value, format) {
    switch (format) {
      case "logic":
        return value.toString(2);
      case "binary":
        return (
          value
            .toString(2)
            // .padStart(this.bitSize, "0")
            .split("")
            .reverse()
            .reduce(
              (acc, x, i) =>
                (i % 4 == 0) & (i != 0) ? acc + "_" + x : acc + x,
              ""
            )
            .split("")
            .reverse()
            .join("")
        );
      case "decimal":
        return value;
      case "hex":
        return value.toString(16);
      default:
        throw new Error("Unknown format " + format);
    }
  }

  formatValue2(value, format, bitSize) {
    switch (format) {
      case "logic":
      case "binary":
        return value.toString(2).padStart(bitSize, "0");
      case "decimal":
        return value;
      case "hex":
        return value.toString(16);
      default:
        throw new Error("Unknown format " + format);
    }
  }

  formatInstruction(value, format) {
    const fmt = format == "binary" ? "logic" : format;
    const op = extractBits(value, this.bitSize, 6, 31);
    let rs, rt, rd, shamt, funct, imm;
    if (op == 0) {
      // r type
      rs = extractBits(value, this.bitSize, 5, 25);
      rt = extractBits(value, this.bitSize, 5, 20);
      rd = extractBits(value, this.bitSize, 5, 15);
      shamt = extractBits(value, this.bitSize, 5, 10);
      funct = extractBits(value, this.bitSize, 6, 5);
      return (
        this.formatValue2(op, fmt, 6) +
        "_" +
        this.formatValue2(rs, fmt, 5) +
        "_" +
        this.formatValue2(rt, fmt, 5) +
        "_" +
        this.formatValue2(rd, fmt, 5) +
        "_" +
        this.formatValue2(shamt, fmt, 5) +
        "_" +
        this.formatValue2(funct, fmt, 6)
      );
    } else if (op == 0x02 || op == 0x03) {
      // jtype
      imm = extractBits(value, this.bitSize, 25, 25);
      return this.formatValue(op, fmt) + "_" + this.formatValue2(imm, fmt, 25);
    } else {
      // i type
      rs = extractBits(value, this.bitSize, 5, 25);
      rt = extractBits(value, this.bitSize, 5, 20);
      imm = extractBits(value, this.bitSize, 16, 15);
      return (
        this.formatValue2(op, fmt, 6) +
        "_" +
        this.formatValue2(rs, fmt, 5) +
        "_" +
        this.formatValue2(rt, fmt, 5) +
        "_" +
        this.formatValue2(imm, fmt, 16)
      );
    }
  }
  toString(myFormat, specialFormat = "none") {
    let format = myFormat || this.format;
    switch (specialFormat) {
      case "none":
        return this.formatValue(this.getValue(), format);
      case "instruction":
        return this.formatInstruction(this.getValue(), format);
      default:
        throw new Error("Unknown specialFormat " + specialFormat);
    }
  }
  get decimalValue() {
    throw new Error(
      `Numeric.decimalValue(${this.getValue()}) no longer supported`
    );
  }
  set decimalValue(x) {
    throw new Error(`Numeric.decimalValue(${x}) no longer supported`);
  }
  get bitSize() {
    return this.bits.length;
  }
  set bitSize(x) {
    throw new Error("Cannot set bitsize " + x);
  }
}

export default Numeric;
