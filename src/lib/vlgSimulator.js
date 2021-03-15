/* eslint-disable no-debugger */
const Chalk = require("chalk");
let options = { enabled: true, level: 2 };
const chalk = new Chalk.Instance(options);

let gatesLookup, modulesLookup, instancesLookup;

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

const evaluateSensitivities = (sensitivities, namespace) => {
  return sensitivities.some(sens => {
    if (sens.type == "everytime") return true;
    const current = sens.id.getValue(gatesLookup, namespace);
    const edge =
      sens.last == 0 && current == 1
        ? "posedge"
        : sens.last == 1 && current == 0
        ? "negedge"
        : "same";
    return sens.type == edge || (sens.type == "changed" && edge != "same");
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
    const matchingClause = s.caseclauses.find(
      clause => clause.clauseval.getValue(gatesLookup, namespace) == caseVal
    );
    if (matchingClause) {
      return evaluateStatementTree(matchingClause.statements, namespace);
    } else {
      if (s.casedefault) return evaluateStatementTree(s.casedefault, namespace);
      else return true;
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
  modules,
  mylogger
) => {
  logger = mylogger;

  const newSimulation = {
    gates: {},
    clock: [],
    time: [],
    ready: false
  };

  gatesLookup = { ...indexBy(gates, "id"), ...parameters };
  instancesLookup = indexBy(instances, "id");
  modulesLookup = indexBy(modules, "id");

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

  const maxClock = modulesLookup.Main.clock.reduce(
    (acc, val) => Math.max(val.time, acc),
    0
  );

  if (gatesLookup["main_clock"]) gatesLookup["main_clock"].setValue(1);

  // run the clock
  for (let clock = 0; clock <= maxClock; clock++) {
    // store tick or tock
    if (gatesLookup["main_clock"])
      gatesLookup["main_clock"].state.setValue(
        ~gatesLookup["main_clock"].state.getValue() & 1
      );

    newSimulation.time.push(clock);

    // assign control values if matching time point
    let setupRes = modulesLookup.Main.clock.every(c => {
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

    // run gate evaluation and instance always for this time step (not t=0)
    for (let i = 0; i < EVALS_PER_STEP; i++) {
      try {
        gates.forEach(gate => gate.update(gatesLookup));
      } catch (e) {
        logger(chalk.red(e));
        return false;
      }

      // run each always section for each instance
      let alwaysRes = instances.every(instance => {
        return instance.always.reduce(
          (acc, curAlways) =>
            acc && evaluateSensitivities(curAlways.sensitivities, instance.id)
              ? evaluateStatementTree(curAlways.statementTree, instance.id)
              : true,
          true
        );
      });
      if (!alwaysRes) return false;
    }

    // and store gate results in newSimulation
    gates.forEach(g => {
      newSimulation.gates[g.id].push(gatesLookup[g.id].getValue());
    });
    newSimulation.clock.push(clock % 2);

    // update always last
    instances.forEach(instance => {
      instance.always.forEach(curAlways =>
        curAlways.sensitivities.forEach(sensitivity => {
          if (sensitivity.type != "everytime")
            sensitivity.last = sensitivity.id.getValue(
              gatesLookup,
              instance.id
            );
        })
      );
    });

    modulesLookup.Main.clock.forEach((x, index, all) => {
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
  return newSimulation;
};

export default simulate;
