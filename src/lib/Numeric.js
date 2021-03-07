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
      .padStart(bitsize)
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
      this.bitSize = parseInt(value.substring(0, value.indexOf("'")));
      this.format = formatLookup[value.substr(value.indexOf("'") + 1, 1)];
      this.decimalValue = parseInt(
        value.substring(value.indexOf("'") + 2),
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
        this.formatValue(op, fmt) +
        "_" +
        this.formatValue(rs, fmt) +
        "_" +
        this.formatValue(rt, fmt) +
        "_" +
        this.formatValue(rd, fmt) +
        "_" +
        this.formatValue(shamt, fmt) +
        "_" +
        this.formatValue(funct, fmt)
      );
    } else if (op == 0x02 || op == 0x03) {
      // jtype
      imm = extractBits(value, this.bitSize, 25, 25);
      return this.formatValue(op, fmt) + "_" + this.formatValue(imm, fmt);
    } else {
      // i type
      rs = extractBits(value, this.bitSize, 5, 25);
      rt = extractBits(value, this.bitSize, 5, 20);
      imm = extractBits(value, this.bitSize, 16, 15);
      return (
        this.formatValue(op, fmt) +
        "_" +
        this.formatValue(rs, fmt) +
        "_" +
        this.formatValue(rt, fmt) +
        "_" +
        this.formatValue(imm, fmt)
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
}

export default Numeric;
