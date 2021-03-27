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

const parseVerilogNumber = x => {
  const bitSize = parseInt(x.substring(0, x.indexOf("'")));
  const format = formatLookup[x.substr(x.indexOf("'") + 1, 1)];
  const valueString = x.substring(x.indexOf("'") + 2);
  let value, binaryString;
  let hasX = false;

  if (valueString.includes("x") | valueString.includes("X")) {
    if (format != "binary")
      throw new Error(
        `parseVerilogNumber(${x}): only binary value strings can have 'x' bits`
      );
    hasX = true;
    value = valueString;
    binaryString = valueString;
    //this.setBits(valueString.split(""), [valueString.length - 1, 0]);
  } else {
    value = parseInt(valueString, radixLookup[format]);
    binaryString = value.toString(2);
  }
  return {
    value,
    bitSize,
    format,
    hasX,
    binaryString
  };
};

class Numeric extends Operand {
  constructor(value, bitSize = null) {
    super("numeric");
    if (Number.isInteger(value)) {
      this.bitArray = new Array(bitSize || getBitSize(value)).fill(0);
      this.format = "decimal";
      this.setValue(value);
    } else if (value == "x") {
      this.bitArray = new Array(bitSize || 1).fill("x");
      this.format = "binary";
    } else if (typeof value == "string") {
      // eg 4'b1100
      // eg 8'hff
      const verilog = parseVerilogNumber(value);
      this.bitArray = new Array(verilog.bitSize);
      this.format = verilog.format;
      this.setValue(value);
    } else {
      throw new Error(`Numeric constructor invalid value: ${value}`);
    }
    this.lastBitArray = new Array(bitSize || 1).fill("y");
  }

  clear(defaultValue) {
    this.setValue(defaultValue);
    this.lastBitArray = [...this.bitArray];
  }

  hasChanged() {
    return this.bitArray.some((bit, i) => bit != this.lastBitArray[i]);
  }

  checkBitRange(bitRange, msg) {
    if (!Array.isArray(bitRange))
      throw new Error(`${msg}: bitRange must be an array`);
    if (bitRange.length != 2)
      throw new Error(`${msg}: bitRange must be an array of length 2`);
    if (bitRange[0] < bitRange[1])
      throw new Error(`${msg}: bitRange[0] must be >= bitRange[1] eg [3:0]`);
    if (bitRange[1] < 0) throw new Error(`${msg}: bitRange extends below 0`);
    if (bitRange[0] > this.bitSize - 1)
      throw new Error(
        `${msg}: bitRange extends above bitSize(${this.bitSize})`
      );
  }

  setBit(bit, n) {
    // set bit n (counting from right) to x
    if ((n < 0) | (n > this.bitArray.length - 1))
      throw new Error(
        `Numeric.setBit(bit=${bit},n=${n}): n is out of range of bitsize ${this.bitArray.length}`
      );
    if (!(bit == 0 || bit == 1 || bit == "x"))
      throw new Error(
        `Numeric.setBit(bit=${bit},n=${n}): bit must be one of 0,1,x`
      );
    this.bitArray[this.bitArray.length - n - 1] = bit;
  }

  setBits(bits, bitRange) {
    // check for valid bits
    if (!Array.isArray(bits))
      throw new Error(
        `Numeric.setBits(bits=${bits},bitRange=${bitRange}): bits must be an array`
      );

    // check for valid bitRange
    this.checkBitRange(
      bitRange,
      `Numeric.setBits(bits=${bits}, bitRange=${bitRange})`
    );

    const destSize = Math.abs(bitRange[0] - bitRange[bitRange.length - 1]) + 1;
    const newSize = bits.length;

    // check that newDecimalValue will fit within bitRange
    if (destSize > this.bitSize)
      throw new Error(
        `Numeric.setBits(bits=${bits},bitRange=${bitRange}}): destSize(${destSize}) exceeds numeric bitsize(${this.bitSize})`
      );
    if (newSize > destSize)
      throw new Error(
        `Numeric.setBits(bits=${bits},bitRange=${bitRange}): newSize(${newSize}) exceeds destSize(${destSize})`
      );

    bits.forEach((x, i) => this.setBit(x, bitRange[0] - i));
  }

  setValue(value, bitRange) {
    // check for valid newDecimalValue
    if (
      !(Number.isInteger(value) | (typeof value == "string") | (value == "x"))
    )
      throw new Error(
        `Numeric.setValue(value=${value}, bitRange=${bitRange}): value must be an integer or verilog number string or 'x'`
      );
    this.lastBitArray = [...this.bitArray];

    if (value == "x") {
      this.bitArray.fill("x");
      return;
    }

    const br = this.makeRange(bitRange);
    const destSize = Math.abs(br[0] - br[1]) + 1;

    const valueString =
      typeof value == "string"
        ? parseVerilogNumber(value).binaryString
        : value.toString(2);

    this.setBits(
      valueString
        .padStart(destSize, "0")
        .split("")
        .map(x => {
          if (x == "0" || x == "1") return +x;
          if (x == "x") return x;
          throw new Error(
            `Numeric.setValue(${value}): valueString ${valueString} must contain only 0, 1, x`
          );
        }),
      br
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
  getBit(n) {
    if ((n < 0) | (n > this.bitArray.length - 1))
      throw new Error(
        `Numeric.getBit(n=${n}): n is out of range of bitsize ${this.bitArray.length}`
      );
    return this.bitArray[n];
  }
  getBits(bitRange) {
    this.checkBitRange(bitRange, `Numeric.getBits(bitRange=${bitRange})`);
    return this.bitArray.slice(
      this.bitArray.length - 1 - bitRange[0],
      this.bitArray.length - bitRange[1]
    );
  }
  getValue() {
    // getValue(gatesLookup, namespace) - gatesLookup and namespace are ignored
    return this._getValue();
  }
  _getValue(bitRange) {
    const br = this.makeRange(bitRange);
    const bitArrayString = this.getBits(br).join("");
    if (bitArrayString.includes("x") || bitArrayString.includes("X")) {
      return `${bitArrayString.length}'b${bitArrayString}`;
    } else return parseInt(bitArrayString, 2);
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
    return this.bitArray.length;
  }
  set bitSize(x) {
    throw new Error("Cannot set bitsize " + x);
  }
  makeRange(bitRange) {
    // if bitRange is undefined return full bit range [bitSize-1,0]
    // if bitRange is an integer expand to a index range [i,i]
    // else return bitRange unchanged assuming is is a range [a,b]
    return bitRange != undefined
      ? Number.isInteger(bitRange)
        ? [bitRange, bitRange]
        : bitRange
      : [this.bitSize - 1, 0];
  }
}

export default Numeric;
