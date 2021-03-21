/* eslint-disable no-debugger */
import BaseComponent from "./BaseComponent";
import Numeric from "./Numeric";

class ParameterGate extends BaseComponent {
  constructor(namespace, name, value) {
    super(namespace, name, "parameter");
    this.state = new Numeric(value);
  }
  update() {
    throw new Error("ParamaterGate.update should never be called");
  }
  propogateChange() {
    throw new Error("ParamaterGate.propgateChange should never be called");
  }
  setValue() {
    throw new Error("ParamaterGate.setValue should never be called");
  }
  getValue() {
    return this.state.getValue();
  }
}

export default ParameterGate;
