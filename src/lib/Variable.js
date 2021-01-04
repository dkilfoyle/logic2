// Variable is a key into the gatesLookup object (which acts as 'memory')
// namespace_name will be the id of a gate
// offset will subset the bits of gatesLookup[namespace_name].state
// offset can be null (return the entire value) or a single number (bit index) or a 2 value array (bit range)

class Variable {
  constructor(namespace, name, offset = null) {
    this.namespace = namespace;
    this.name = name;
    // valid offset checking
    if (offset != null) {
      if (Array.isArray(offset)) {
        if (offset.length != 2)
          throw new Error("Variable: offset array must be length 2");
        if (!(Number.isInteger(offset[0]) && Number.isInteger(offset[1])))
          throw new Error("Variable: offset range must be integers");
        this.offsetType = "range";
      } else {
        if (!Number.isInteger(offset))
          throw new Error(
            `Variable: offset (${this.offset}) must be null or array or integer`
          );
        this.offsetType = "index";
      }
    } else {
      this.offsetType = "none";
    }
    this.offset = offset;
  }
  get id() {
    return this.namespace + "_" + this.name;
  }
  setValue(gatesLookup, val) {
    const gate = gatesLookup[this.id];
    if (!gate)
      throw new Error(`Variable.setValue cannot find gate with id ${this.id}`);
    gate.state.setValue(val);
  }
  getValue(gatesLookup) {
    const gate = gatesLookup[this.id];
    if (!gate)
      throw new Error(`Variable.getValue cannot find gate with id ${this.id}`);

    switch (this.offsetType) {
      case "none":
        return gate.state.decimalValue;
      case "index":
        if (this.offset > gate.bitSize - 1)
          throw new Error(
            `Variable.getValue: offset (${this.offset}) is larger than gate (${gate.id}) state size (${gate.bitSize})`
          );
        return this.getBit(gate.state.decimalValue, this.offset);
      case "range":
        if (this.offset[0] > gate.bitSize - 1)
          throw new Error(
            `Variable.getValue: offset[0] (${this.offset[0]}) is larger than gate (${gate.id}) state size (${gate.bitSize})`
          );
        if (this.offset[1] > gate.bitSize - 1)
          throw new Error(
            `Variable.getValue: offset[1] (${this.offset[1]}) is larger than gate (${gate.id}) state size (${gate.bitSize})`
          );
        return this.getBitRange(gate.state.decimalValue, this.offset);
      default:
        throw new Error(
          `Variable.getValue invalid offsetType (${this.offsetType})`
        );
    }
  }
  getBit(num, bit) {
    return (num >> bit) % 2;
  }
  getBitRange(num, range) {
    // TODO: dont use lazy string method
    const numstr = num.toString(2);
    // 100111

    if (range[0] > range[1])
      // eg [3:0]
      return parseInt(
        numstr.slice(numstr.length - range[0], numstr.length - range[1]),
        2
      );
    else
      return parseInt(
        numstr
          .slice(numstr.length - range[1], numstr.length - range[0])
          .split("")
          .reverse()
          .join(""),
        2
      );
  }
}

export default Variable;