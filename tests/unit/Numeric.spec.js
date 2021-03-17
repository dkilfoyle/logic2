import Numeric from "../../src/lib/Numeric.js";

describe("Numeric constructor with valid input", () => {
  test("Construct from integer", () => {
    const x = new Numeric(123);
    expect(x._getValue()).toEqual(123);
    expect(x.bitSize).toEqual(7);
  });

  test("Construct from integer with specified bitsize", () => {
    const x = new Numeric(4, 8);
    expect(x._getValue()).toEqual(4);
    expect(x.bitSize).toEqual(8);
  });

  test("Construct from binary Verilog string", () => {
    const x = new Numeric("8'b10101010");
    expect(x._getValue()).toEqual(170);
    expect(x.bitSize).toEqual(8);
    expect(x.format).toEqual("binary");
  });

  test("Construct from binary Verilog string with don't cares", () => {
    const x = new Numeric("8'b11xxxx11");
    expect(x._getValue()).toEqual("8'b11xxxx11");
    expect(x.bitSize).toEqual(8);
    expect(x.format).toEqual("binary");
  });

  test("Construct from hex Verilog string", () => {
    const x = new Numeric("8'hff");
    expect(x._getValue()).toEqual(255);
    expect(x.bitSize).toEqual(8);
    expect(x.format).toEqual("hex");
  });
});

describe("Numeric constructor with invalid input", () => {
  test("Construct from invalid number", () => {
    expect(() => new Numeric(123.5)).toThrow(
      "Numeric constructor invalid value"
    );
  });

  test("Construct from number with insufficient bitsize", () => {
    expect(() => new Numeric(4, 1)).toThrow("exceeds destSize");
  });
});

describe("Numeric _getValue with valid offset", () => {
  test("index offset", () => {
    const x = new Numeric("8'b11110000");
    expect(x._getValue(7)).toEqual(1);
  });

  test("range offset", () => {
    const x = new Numeric("8'b11110000");
    expect(x._getValue([7, 4])).toEqual(15);
  });
});

describe("Numeric.getBits with valid offset", () => {
  test("index offset", () => {
    const x = new Numeric("8'b11110000");
    expect(x.getBits([7, 7])).toEqual([1]);
  });

  test("range offset", () => {
    const x = new Numeric("8'b11110000");
    expect(x.getBits([7, 4])).toEqual([1, 1, 1, 1]);
  });
});

describe("Numeric._getValue with invalid offset", () => {
  test("Index offset too large", () => {
    const x = new Numeric("8'b11110000");
    expect(() => x._getValue(8)).toThrow();
  });

  test("Range offset too large", () => {
    const x = new Numeric("8'b11110000");
    expect(() => x._getValue([9, 4])).toThrow();
  });
});

describe("Numeric.setValue", () => {
  test("can set new valid value", () => {
    const x = new Numeric("4'b0000");
    x.setValue(3);
    expect(x._getValue()).toEqual(3);
  });

  test("cannot set new invalid value", () => {
    const x = new Numeric("4'b0000");
    expect(() => x.setValue(33)).toThrow();
  });
});
