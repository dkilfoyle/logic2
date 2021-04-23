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

// const extractBits = (num, bitsize, k, p) => {
//   return parseInt(
//     num
//       .toString(2)
//       .padStart(bitsize, "0")
//       .slice(-p - 1, k > p ? undefined : -p - 1 + k),
//     2
//   );
// };

// Variable is a key into the gatesLookup object (which acts as 'memory')
// namespace_name will be the id of a gate
// offset will subset the bits of gatesLookup[namespace_name].state
// offset can be null (return the entire value) or a single number (bit index) or a 2 value array (bit range)

class Variable extends Operand {
  constructor(namespace, name, offset = null) {
    super("variable");
    this.namespace = namespace;
    this.name = name;
    // valid offset checking
    if (offset != null) {
      if (Array.isArray(offset)) {
        if (offset.length != 2)
          throw new Error(
            `Variable: offset array must be length 2 not ${offset.length}`
          );
        if (!(offset[0] instanceof Operand && offset[1] instanceof Operand))
          throw new Error(`Variable: offset range must be array of operands`);
        this.offsetType = "range";
      } else {
        if (!(offset instanceof Operand))
          throw new Error(
            `Variable: offset (${offset}) must be null or array or operand`
          );
        this.offsetType = "index";
      }
    } else {
      this.offsetType = "none";
    }
    this.offset = offset;
  }
  instance(namespace) {
    return new Variable(namespace, this.name, this.offset);
  }
  get id() {
    if (this.namespace === null)
      throw new Error(`Variable.id ${this.name} missing namespace`);
    return this.namespace + "_" + this.name;
  }
  getOffsetString(gatesLookup, namespace = null) {
    return this.offsetType == "index"
      ? "[" + this.getRange(gatesLookup, namespace) + "]"
      : this.offsetType == "range"
      ? "[" + this.getRange(gatesLookup, namespace).join(":") + "]"
      : "";
  }
  toString() {
    return (
      this.name +
      (this.offsetType == "index"
        ? "[" + this.offset + "]"
        : this.offsetType == "range"
        ? "[" + this.offset.join(":") + "]"
        : "")
    );
  }
  toHtmlString(namespace) {
    return `<span style="font-size:6pt">${this.namespace ||
      namespace}_</span><span>${this.toString()}</span>`;
  }
  setValue(gatesLookup, val, namespace = null) {
    let id = namespace ? namespace + "_" + this.name : this.id;
    const gate = gatesLookup[id];
    if (!gate)
      throw new Error(`Variable.setValue cannot find gate with id ${id}`);
    if (gate.state.length && this.offsetType == "index") {
      const index = this.offset.getValue(gatesLookup, namespace);
      // if target gate is an array gate and this variable has an index offset
      gate.setValue(val, index);
    } else gate.setValue(val);
  }
  getBitSize(gatesLookup, namespace = null) {
    let id = namespace ? namespace + "_" + this.name : this.id;
    const gate = gatesLookup[id];
    if (!gate)
      throw new Error(`Variable.getValue cannot find gate with id ${id}`);

    let range;

    switch (this.offsetType) {
      case "none":
        return gate.bitSize;
      case "index":
        return gate.type == "array" ? gate.bitSize : 1;
      case "range":
        range = this.getRange(gatesLookup, namespace);
        if (range[0] > gate.state.bitSize - 1)
          throw new Error(
            `Variable.getValue: offset[0] (${range[0]}) is larger than gate (${gate.id}) state size (${gate.state.size})`
          );
        if (range[1] > gate.state.bitSize - 1)
          throw new Error(
            `Variable.getValue: offset[1] (${range[1]}) is larger than gate (${gate.id}) state size (${gate.state.size})`
          );
        return Math.abs(range[0] - range[1]) + 1;
      default:
        throw new Error(
          `Variable.getValue invalid offsetType (${this.offsetType})`
        );
    }
  }
  getCompileBitSize(parameters, namespace, gateBitSizesID) {
    let o0, o1;
    let myBitSize = gateBitSizesID[this.name];
    switch (this.offsetType) {
      case "none":
        return myBitSize;
      case "index":
        return 1; // TODO: how to handle arrays?
      case "range":
        o0 = this.offset[0].getValue(parameters, namespace);
        o1 = this.offset[1].getValue(parameters, namespace);
        if (o0 > myBitSize)
          throw new Error(
            `Variable.getValue: offset[0] (${o0}) is larger than gate (${this.name}) state size (${myBitSize})`
          );
        if (o1 > myBitSize)
          throw new Error(
            `Variable.getValue: offset[1] (${o1}) is larger than gate (${this.name}) state size (${myBitSize})`
          );
        return Math.abs(o0 - o1) + 1;
      default:
        throw new Error(
          `Variable.getValue invalid offsetType (${this.offsetType})`
        );
    }
  }
  getValue(gatesLookup, namespace = null) {
    let id = namespace ? namespace + "_" + this.name : this.id;
    const gate = gatesLookup[id];
    if (!gate)
      throw new Error(
        `Variable[${this.name}].getValue cannot find gate with id ${id}`
      );
    let range = this.getRange(gatesLookup, namespace);

    if (gate.type == "array") {
      if (!Number.isInteger(range))
        throw new Error("Array gate must have integer index");
      else return gate.getValue(range);
    }

    return gate.state._getValue(range);
    // if (range == null) return gate.getValue();
    // else if (Array.isArray(range))
    //   return getBitRange(gate.getValue(), gate.bitSize, range);
    // else if (Number.isInteger(range)) return getBit(gate.getValue(), range);
    // else throw new Error("Invalid range");
  }
  getRange(gatesLookup, namespace = null) {
    switch (this.offsetType) {
      case "none":
        return null;
      case "index":
        return this.offset.getValue(gatesLookup, namespace);
      case "range":
        return [
          this.offset[0].getValue(gatesLookup, namespace),
          this.offset[1].getValue(gatesLookup, namespace)
        ];
      default:
        throw new Error(
          `Variable.getRange invalid offsetType (${this.offsetType})`
        );
    }
  }
}

export default Variable;
