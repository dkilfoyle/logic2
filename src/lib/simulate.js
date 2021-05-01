/* eslint-disable no-debugger */

const shortJoin = strs => {
  const x = strs.join(", ");
  if (x.length < 21) return x;
  else return x.slice(0, 40) + "...";
};

const getLocalId = x => x.substr(x.lastIndexOf("_") + 1);
const logger = () => {};

const evaluateSensitivities = (gates, always, namespace) => {
  return always.sensitivities.some(sens => {
    if (sens.type == "everytime") return true;

    const current = sens.id.getValue(gates, namespace);
    const last = sens.lastValue;
    let edge = "";

    if (last == current) edge = "same";
    else if (current > last) edge = "posedge";
    else edge = "negedge";

    const res = sens.type == edge || (sens.type == "changed" && edge != "same");
    sens.lastValue = current;
    return res;
  });
};

const evaluateStatementTree = (gates, s, namespace) => {
  if (s.type == "block") {
    return s.statements.every(ss =>
      evaluateStatementTree(gates, ss, namespace)
    );
  } else if (s.type == "blocking_assignment") {
    try {
      s.lhs.setValue(gates, s.rhs.getValue(gates, namespace), namespace);
    } catch (e) {
      logger(`${s.lhs.toString()}=${s.rhs.toString()}: ` + e);
      console.log(e);
      return false;
    }
    return true;
  } else if (s.type == "conditional_statement") {
    let pass = false;
    switch (s.condition.type) {
      case "variable":
      case "numeric":
      case "operation":
        pass = s.condition.getValue(gates, namespace) != 0;
        break;
      default:
        throw new Error(
          `evaluateStatementTree: invalid condition type ${s.condition}`
        );
    }
    if (pass) {
      return evaluateStatementTree(gates, s.thenBlock, namespace);
    } else {
      if (s.elseBlock)
        return evaluateStatementTree(gates, s.elseBlock, namespace);
      else return true;
    }
  } else if (s.type == "case_statement") {
    const caseVal = s.casevar.getValue(gates, namespace); // todo: caseval could be expression rather than just variable
    const matchingClause = s.caseclauses.find(clause => {
      const matchVal = clause.clauseval.getValue(gates, namespace);
      // if (s.casevar.name == "aluop" && namespace == "main_mips_c_ad") {
      //   console.log(s.casevar.name, caseVal, matchVal, caseVal == matchVal);
      // }
      return matchVal == caseVal;
    });
    if (matchingClause) {
      return evaluateStatementTree(gates, matchingClause.statements, namespace);
    } else {
      if (s.casedefault) {
        return evaluateStatementTree(gates, s.casedefault, namespace);
      } else return true;
    }
  } else if (s.type == "error_statement") {
    throw new Error(s.text);
  } else {
    throw new Error(`unknown statement type: ${s.type}`);
  }
};

const simulate = currentFile => {
  const gates = currentFile.gates;
  const instances = currentFile.instances;

  currentFile.simulateResult = {
    gates: {},
    clock: [],
    time: [],
    ready: false
  };

  // modulesLookup = indexBy(modules, "id");

  // reset all gates to state = 0
  // TODO: should set state to 'x'??
  gates.values().forEach(g => {
    g.clear();
    currentFile.simulateResult.gates[g.id] = [];
  });

  // process each instances initial section to set initial gate or register states
  let initialRes = instances.every(instance => {
    return instance.initial
      ? evaluateStatementTree(
          gates,
          instance.initial.statementTree,
          instance.id
        )
      : true;
  });
  if (!initialRes) return false;

  const maxClock = currentFile.moduleDefinitions.Main.clock.reduce(
    (acc, val) => Math.max(val.time, acc),
    0
  );

  if (gates["main_clock"]) gates["main_clock"].setValue(1);

  // run the clock
  for (let clock = 0; clock <= maxClock; clock++) {
    // store tick or tock
    if (gates["main_clock"])
      gates["main_clock"].state.setValue(
        ~gates["main_clock"].state.getValue() & 1
      );

    currentFile.simulateResult.time.push(clock);

    // TODO: Progressbar message
    // if (clock % Math.floor(maxClock / 20) == 0) logger(".", false);

    // assign control values if matching time point
    let setupRes = currentFile.moduleDefinitions.Main.clock.every(c => {
      return c.time == clock
        ? c.assignments.every(a => {
            // can only assign values to control types
            if (!gates["main_" + a.lhs.name].type == "control") {
              logger(
                "Can only assign simulation values to inputs of Main: " +
                  a.lhs.name
              );
              console.log("Error: ", a.lhs.name);
              return false;
            }
            try {
              a.lhs.setValue(gates, a.rhs.getValue(gates, "main"), "main");
            } catch (e) {
              logger(`${c.time}=${a.lhs.name}: ${e}`);
              console.log(e);
              return false;
            }
            return true;
          })
        : true;
    });
    if (!setupRes) {
      console.log("setupres false");
      return false;
    }

    // todo: sequence of runs should be:
    // 1. One pass through only positive clock edge always using inputs based on state at end of the previous cycle
    // 2. Multiple runs through all gates and all always(*)

    // TODO: Different simulation algorithms for each time cycle
    // 1. current
    //      setcontrols iterateuntilnochange(always, gates)
    // 2. setcontrols iterate(gates) always iterate(gates)
    // 3. simulateInstance(instance) iterate(instancegates) always simulateInstance(childinstances) iterate(instancegates)

    // run each always section for each instance
    // need to process gates before (to set always inputs) and after (to propogate always effects)

    const updateGates = () => {
      let anyChanges = false;
      gates.forEach(gate => {
        const oldValue = gate.getValue();
        let newValue;
        try {
          newValue = gate.update(gates);
        } catch (e) {
          const msg = `Simulation Exception. Unable to update gate ${gate.id}: ${e}`;
          console.log("Simulation update error: ", e);
          logger(msg);
          throw new Error(msg);
        }
        if (newValue != oldValue) {
          anyChanges = true;
          // console.log(`${gate.id} changed from ${oldValue} to ${newValue}`);
        }
      });
      return anyChanges;
    };

    // const updateGatesUntilNoChanges = () => {
    //   let i = 0;
    //   while (updateGates() && i < 15) {
    //     i++;
    //   }
    //   return true;
    // };

    const evaluateAlways = () => {
      instances.forEach(instance => {
        instance.always.forEach(curAlways => {
          const sensitivityTest = evaluateSensitivities(
            gates,
            curAlways,
            instance.id
          );

          if (sensitivityTest) {
            const evalutateSuccess = evaluateStatementTree(
              curAlways.statementTree,
              instance.id
            );
            if (!evalutateSuccess) {
              const msg = `Error evaluating always block in instance ${instance.id}`;
              console.log(msg, curAlways);
              throw new Error(msg);
            }
          }
        });
      });
    };

    let anyChanges = true;
    var i = 0;
    while (anyChanges && i < 15) {
      updateGates();
      evaluateAlways();
      // anyChanges = updateGates();
      updateGates();
      i++;
    }

    // // simulation cycle
    // if (!updateGatesUntilNoChanges()) return false;
    // if (!evaluateAlways()) return false;
    // if (!updateGatesUntilNoChanges()) return false;

    // console.log(`Clock = ${clock}, iterations = ${i}`);

    // and store gate results in currentFile.simulateResult
    gates.forEach(g => {
      currentFile.simulateResult.gates[g.id].push(
        g.type == "array" ? g.getValues() : g.getValue()
      );
    });
    currentFile.simulateResult.clock.push(clock % 2);

    currentFile.moduleDefinitions.Main.clock.forEach((x, index, all) => {
      if (x.time != clock) return;

      const lineChar = index == all.length - 1 ? "└" : "├";

      logger(`${lineChar}── Time ${clock.toString().padStart(3, "0")}: `) +
        shortJoin(
          x.assignments.map(a => a.lhs.toString() + "=" + a.rhs.toString())
        ) +
        " => " +
        shortJoin(
          instances.main.gates
            .filter(gateId => gates[gateId].type == "response")
            .map(o => getLocalId(o) + "=" + gates[o].state.getValue())
        );
    });
  }

  // iterate through all instances and apply always statements

  currentFile.simulateResult.maxTime =
    currentFile.simulateResult.time[currentFile.simulateResult.time.length - 1];
  currentFile.simulateResult.timestamp = Date.now();
  currentFile.simulateResult.ready = true;
};

export default simulate;
