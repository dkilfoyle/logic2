import Numeric from "../../src/lib/Numeric.js";

test("Construct from integer", () => {
  const x = new Numeric(15);
  expect(x.getValue()).toBe(15);
  expect(x.getBitSize()).toBe(4);
});

test("Construct from verilog binary string", () => {
  const x = new Numeric("8'b10101010");
  expect(x.getValue()).toBe(170);
  expect(x.getBitSize()).toBe(8);
});

test("Construct with specified size", () => {
  const x = new Numeric(1, 8);
  expect(x.getBitSize()).toBe(8);
});

// test("getValue bitindex", () => {
//   const x = new Numeric("8'b00111100");
//   expect(x.getValue(7)).toBe(0);
//   expect(x.getValue(6)).toBe(0);
//   expect(x.getValue(5)).toBe(1);
//   expect(x.getValue(4)).toBe(1);
//   expect(x.getValue(3)).toBe(1);
//   expect(x.getValue(2)).toBe(1);
//   expect(x.getValue(1)).toBe(0);
//   expect(x.getValue(0)).toBe(0);
// });

// test("getValue bitRange", () => {
//   const x = new Numeric("8'b00111100");
//   expect(x.getValue([5, 2])).toBe(0b1111);
//   expect(x.getValue([2, 0])).toBe(0b100);
//   expect(x.getValue([7, 5])).toBe(0b1);
// });
