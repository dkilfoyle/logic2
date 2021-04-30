/* eslint-disable no-debugger */
const Chalk = require("chalk");
let options = { enabled: true, level: 2 };
const chalk = new Chalk.Instance(options);

let gatesLookup, instancesLookup;

let logger;

const shortJoin = strs => {
  const x = strs.join(", ");
  if (x.length < 21) return x;
  else return x.slice(0, 40) + "...";
};

const indexBy = (array, prop) =>
  array.reduce((output, item) => {
    output[item[prop]] = item;
    return output;
  }, {});

const getLocalId = x => x.substr(x.lastIndexOf("_") + 1);

const evaluateSensitivities = (always, namespace) => {
  return always.sensitivities.some(sens => {
    if (sens.type == "everytime") return true;

    const current = sens.id.getValue(gatesLookup, namespace);
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

const evaluateStatementTree = (s, namespace) => {
  if (s.type == "block") {
    return s.statements.every(ss => evaluateStatementTree(ss, namespace));
  } else if (s.type == "blocking_assignment") {
    try {
      s.lhs.setValue(
        gatesLookup,
        s.rhs.getValue(gatesLookup, namespace),
        namespace
      );
    } catch (e) {
      logger(
        chalk.cyan("└── ") +
          chalk.white(`${s.lhs.toString()}=${s.rhs.toString()}: `) +
          e
      );
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
        pass = s.condition.getValue(gatesLookup, namespace) != 0;
        break;
      default:
        throw new Error(
          `evaluateStatementTree: invalid condition type ${s.condition}`
        );
    }
    if (pass) {
      return evaluateStatementTree(s.thenBlock, namespace);
    } else {
      if (s.elseBlock) return evaluateStatementTree(s.elseBlock, namespace);
      else return true;
    }
  } else if (s.type == "case_statement") {
    const caseVal = s.casevar.getValue(gatesLookup, namespace); // todo: caseval could be expression rather than just variable
    const matchingClause = s.caseclauses.find(clause => {
      const matchVal = clause.clauseval.getValue(gatesLookup, namespace);
      // if (s.casevar.name == "aluop" && namespace == "main_mips_c_ad") {
      //   console.log(s.casevar.name, caseVal, matchVal, caseVal == matchVal);
      // }
      return matchVal == caseVal;
    });
    if (matchingClause) {
      return evaluateStatementTree(matchingClause.statements, namespace);
    } else {
      if (s.casedefault) {
        return evaluateStatementTree(s.casedefault, namespace);
      } else return true;
    }
  } else if (s.type == "error_statement") {
    throw new Error(s.text);
  } else {
    throw new Error(`unknown statement type: ${s.type}`);
  }
};

const simulate = (
  EVALS_PER_STEP,
  gates,
  parameters,
  instances,
  testClock,
  mylogger
) => {
  return new Promise(resolve => {
    logger = mylogger;

    const newSimulation = {
      gates: {},
      clock: [],
      time: [],
      ready: false
    };

    gatesLookup = { ...indexBy(gates, "id"), ...parameters };
    instancesLookup = indexBy(instances, "id");
    // modulesLookup = indexBy(modules, "id");

    // reset all gates to state = 0
    // TODO: should set state to 'x'??
    gates.forEach(g => {
      g.clear();
      newSimulation.gates[g.id] = [];
    });

    // process each instances initial section to set initial gate or register states
    let initialRes = instances.every(instance => {
      return instance.initial
        ? evaluateStatementTree(instance.initial.statementTree, instance.id)
        : true;
    });
    if (!initialRes) return false;

    const maxClock = testClock.reduce((acc, val) => Math.max(val.time, acc), 0);

    if (gatesLookup["main_clock"]) gatesLookup["main_clock"].setValue(1);

    // run the clock
    for (let clock = 0; clock <= maxClock; clock++) {
      // store tick or tock
      if (gatesLookup["main_clock"])
        gatesLookup["main_clock"].state.setValue(
          ~gatesLookup["main_clock"].state.getValue() & 1
        );

      newSimulation.time.push(clock);

      // TODO: Progressbar message
      // if (clock % Math.floor(maxClock / 20) == 0) logger(".", false);

      // assign control values if matching time point
      let setupRes = testClock.every(c => {
        return c.time == clock
          ? c.assignments.every(a => {
              // can only assign values to control types
              if (!gatesLookup["main_" + a.lhs.name].type == "control") {
                logger(
                  "Can only assign simulation values to inputs of Main: " +
                    a.lhs.name
                );
                console.log("Error: ", a.lhs.name);
                return false;
              }
              try {
                a.lhs.setValue(
                  gatesLookup,
                  a.rhs.getValue(gatesLookup, "main"),
                  "main"
                );
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
            newValue = gate.update(gatesLookup);
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

      // and store gate results in newSimulation
      gates.forEach(g => {
        newSimulation.gates[g.id].push(
          g.type == "array" ? g.getValues() : g.getValue()
        );
      });
      newSimulation.clock.push(clock % 2);

      testClock.forEach((x, index, all) => {
        if (x.time != clock) return;

        const lineChar = index == all.length - 1 ? "└" : "├";

        logger(
          chalk.cyan(
            `${lineChar}── Time ${clock.toString().padStart(3, "0")}: `
          ) +
            shortJoin(
              x.assignments.map(a => a.lhs.toString() + "=" + a.rhs.toString())
            ) +
            chalk.cyan(" => ") +
            shortJoin(
              instancesLookup.main.gates
                .filter(gateId => gatesLookup[gateId].type == "response")
                .map(o => getLocalId(o) + "=" + gatesLookup[o].state.getValue())
            )
        );
      });
    }

    // iterate through all instances and apply always statements

    newSimulation.maxTime = newSimulation.time[newSimulation.time.length - 1];
    newSimulation.timestamp = Date.now();
    newSimulation.ready = true;
    resolve(newSimulation);
  });
};

addEventListener("message", async event => {
  // Sleep
  console.log(event.data.message);
  var simulateResult = await simulate(
    event.data.message.store.state.evals_per_step,
    event.data.message.store.getters.currentFile.compileResult.gates,
    event.data.message.store.getters.currentFile.compileResult.parameters,
    event.data.message.store.getters.currentFile.compileResult.instances,
    event.data.message.store.getters.currentFile.walkResult.modules.find(
      m => m.id == "Main"
    ).clock
  );
  //   event.data.message.EVALS_PER_STEP,
  //   event.data.message.gates,
  //   event.data.message.parameters,
  //   event.data.message.instances,
  //   event.data.message.testClock,
  //   event.data.message.logger
  // );
  // Send the reversed array
  postMessage(simulateResult);
});
