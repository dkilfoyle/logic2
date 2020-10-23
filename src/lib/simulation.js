const not = x => ~x & 1;

const logicFunctions = {
  not: a => ~a & 1,
  buffer: a => a,
  response: a => a,
  and2: (a, b) => a && b,
  nand2: (a, b) => not(a && b),
  or2: (a, b) => a || b,
  nor2: (a, b) => not(a || b),
  xor2: (a, b) => a ^ b,
  xnor2: (a, b) => not(a ^ b),
  and3: (a, b, c) => a && b && c,
  nand3: (a, b, c) => not(a && b && c),
  or3: (a, b, c) => a || b || c,
  nor3: (a, b, c) => not(a || b || c),
  xor3: (a, b, c) => a ^ b ^ c,
  xnor3: (a, b, c) => not(a ^ b ^ c)
};

const evaluate = (components, componentLookup) => {
  const logicOperation = component => {
    let logicFn = component.logic;
    if (component.inputs.length == 1) {
      if (!(logicFn == "not" || logicFn == "buffer" || logicFn == "response")) {
        console.log(
          "Gate evaluation error - 1 input only valid for not and buffer gates"
        );
        return;
      }
      const aOut = componentLookup[component.inputs[0]];
      if (!aOut) {
        console.log(component.inputs[0]);
        throw new Error("component not found");
      }
      component.state =
        aOut === "x" ? "x" : logicFunctions[logicFn](aOut.state);
      return;
    }

    const aOut = componentLookup[component.inputs[0]];
    const bOut = componentLookup[component.inputs[1]];

    if (component.inputs.length == 2) {
      component.state =
        aOut === "x" || bOut === "x"
          ? "x"
          : logicFunctions[logicFn + "2"](aOut.state, bOut.state);
      return;
    }

    if (component.inputs.length == 3) {
      const cOut = componentLookup[component.inputs[2]];
      component.state =
        aOut === "x" || bOut === "x" || cOut === "x"
          ? "x"
          : logicFunctions[logicFn + "3"](aOut.state, bOut.state, cOut.state);
      return;
    }
  };

  components.forEach(component => {
    if (component.logic === "control") return;

    return logicOperation(component);
  });
};

export default evaluate;
