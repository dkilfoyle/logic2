/* eslint-disable no-debugger */
import Operand from "./Operand";

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
        if (!(offset[0] instanceof Operand) && offset[1] instanceof Operand)
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
    gate.setValue(val);
  }
  getValue(gatesLookup, namespace = null) {
    let id = namespace ? namespace + "_" + this.name : this.id;
    const gate = gatesLookup[id];
    if (!gate)
      throw new Error(`Variable.getValue cannot find gate with id ${id}`);

    let range;

    switch (this.offsetType) {
      case "none":
        return gate.getValue();
      case "index":
        range = this.offset.getValue(gatesLookup, namespace);
        if (["reg", "memory"].includes(gate.type)) return gate.getValue(range);
        if (range > gate.state.size - 1)
          throw new Error(
            `Variable.getValue: offset (${this.offset}) is larger than gate (${gate.id}) state size (${gate.state.size})`
          );
        return this.getBit(gate.state.decimalValue, this.offset);
      case "range":
        range = [
          this.offset[0].getValue(gatesLookup, namespace),
          this.offset[1].getValue(gatesLookup, namespace)
        ];
        if (range[0] > gate.state.bitSize - 1)
          throw new Error(
            `Variable.getValue: offset[0] (${range[0]}) is larger than gate (${gate.id}) state size (${gate.state.size})`
          );
        if (range[1] > gate.state.bitSize - 1)
          throw new Error(
            `Variable.getValue: offset[1] (${range[1]}) is larger than gate (${gate.id}) state size (${gate.state.size})`
          );
        return this.getBitRange(gate.state.decimalValue, range);
      default:
        throw new Error(
          `Variable.getValue invalid offsetType (${this.offsetType})`
        );
    }
  }
  getBit(num, bit) {
    return (num >> bit) % 2;
  }
  extract(num, k, p) {
    // extract k bits from position p to right
    let mask = (1 << k) - 1;
    let numFromP = num >> p;
    return mask & numFromP;
  }
  getBitRange(num, range) {
    let k = Math.abs(range[0] - range[1]) + 1;
    let p = Math.min(range[0], range[1]);
    return this.extract(num, k, p);
  }
}

export default Variable;
