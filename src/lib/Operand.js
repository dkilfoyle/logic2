class Operand {
  constructor(type) {
    if (type == "variable" || type == "numeric" || type == "operation")
      this.type = type;
    else throw new Error(`Operand constructor supported type ${type}`);
  }
  getValue() {
    throw new Error("Operand subclasses must implement getValue");
  }
}

export default Operand;
