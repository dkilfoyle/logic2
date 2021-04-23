class Operand {
  constructor(type) {
    if (
      type == "variable" ||
      type == "numeric" ||
      type == "operation" ||
      type == "tern" ||
      type == "concatenation"
    )
      this.type = type;
    else throw new Error(`Operand constructor supported type ${type}`);
  }
  getValue() {
    throw new Error("Operand subclasses must implement getValue");
  }
  getBitSize() {
    throw new Error("Operand subclasses must implement getBitSize");
  }
  getCompileBitSize() {
    throw new Error("Operand subclasses must implement getCompileBitSize");
  }
}

export default Operand;
