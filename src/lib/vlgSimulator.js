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

const not = x => ~x & 1;

const logicFunctions = {
  not: ([a]) => ~a & 1,
  buffer: ([a]) => a,
  portbuffer: ([a]) => a,
  response: ([a]) => a,
  and: ([a, b, c]) => (c == undefined ? a && b : a && b && c),
  nand: ([a, b, c]) => (c == undefined ? not(a && b) : not(a && b && c)),
  or: ([a, b, c]) => (c == undefined ? a || b : a || b || c),
  nor: ([a, b, c]) => (c == undefined ? not(a || b) : not(a || b || c)),
  xor: ([a, b, c]) => (c == undefined ? a ^ b : a ^ b ^ c),
  xnor: ([a, b, c]) => (c == undefined ? not(a ^ b) : not(a ^ b ^ c)),
  sevenseg: () => 0,
  number: bits => parseInt(bits.reverse().join(""), 2),
  ledbar: bits => parseInt(bits.reverse().join(""), 2)
};

const evaluateGates = gates => {
  const logicOperation = gate => {
    let logicFn = gate.logic;
    let inputs = gate.inputs.map(input =>
      input.getValue(gate.instance, gatesLookup)
    );

    if (
      ["not", "buffer", "response", "portbuffer"].includes(logicFn) &&
      inputs.length > 1
    ) {
      console.log(
        "Gate evaluation error - 1 input only valid for not and buffer gates"
      );
      return false;
    }

    if (logicFn == "sevenseg" && inputs.length != 7) {
      console.log("Gate evaluation error - sevenseg must have 7 inputs");
      return false;
    }

    if (logicFn == "reg") return true;

    try {
      gate.state.setValue(
        inputs.some(input => input === "x")
          ? "x"
          : logicFunctions[logicFn](inputs)
      );
    } catch (e) {
      logger(chalk.cyan("└── ") + chalk.white(`${gate.id} ` + e));
      console.log(e);
      return false;
    }

    return true;
  };

  return gates.every(gate => {
    return gate.logic === "control" ? true : logicOperation(gate);
  });
};

const evaluateSensitivities = (namespace, sensitivities) => {
  return sensitivities.some(sens => {
    const current = sens.id.getValue(namespace, gatesLookup);
    const edge =
      sens.last == 0 && current == 1
        ? "posedge"
        : sens.last == 1 && current == 0
        ? "negedge"
        : "same";
    return sens.type == edge || (sens.type == "changed" && edge != "same");
  });
};

const evaluateStatementTree = (namespace, s) => {
  if (s.type == "seq_block" || s.type == "root_block") {
    return s.statements.every(ss => evaluateStatementTree(namespace, ss));
  } else if (s.type == "blocking_assignment") {
    // console.group(
    //   `eval blocking_assignment: ${s.lhs.toString()} = ${s.rhs.toString()}`
    // );
    // console.log("lhs gate: ", gatesLookup[s.lhs.id(namespace)]);
    // console.log("lhs: ", s.lhs, s.lhs.getValue(namespace, gatesLookup));
    // console.log("rhs: ", s.rhs, s.rhs.getValue(namespace, gatesLookup));
    try {
      s.lhs.setValue(
        namespace,
        gatesLookup,
        s.rhs.getValue(namespace, gatesLookup)
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
    // console.log("res: ", s.lhs.getValue(namespace, gatesLookup));
    // console.groupEnd();
  } else {
    throw new Error(`unknown statement type: ${s.type}`);
  }
};

const simulate = (EVALS_PER_STEP, gates, instances, modules, mylogger) => {
  logger = mylogger;

  const newSimulation = {
    gates: {},
    clock: [],
    time: [],
    ready: false
  };

  gatesLookup = indexBy(gates, "id");
  instancesLookup = indexBy(instances, "id");
  modulesLookup = indexBy(modules, "id");

  // reset all gates to state = 0
  // TODO: should set state to 'x'??
  gates.forEach(g => {
    g.state.setValue(0);
    newSimulation.gates[g.id] = [];
  });

  // process each instances initial section to set initial gate or register states
  console.log("initial: ");
  let initialRes = instances.every(instance => {
    return instance.initial
      ? evaluateStatementTree(instance.id, instance.initial.statementTree)
      : true;
  });
  if (!initialRes) return false;

  const maxClock = modulesLookup.Main.clock.reduce(
    (acc, val) => Math.max(val.time, acc),
    0
  );

  if (gatesLookup["main_clock"]) gatesLookup["main_clock"].state.setValue(1);

  // run the clock
  for (let clock = 0; clock <= maxClock; clock++) {
    newSimulation.time.push(clock);

    // assign control values if matching time point
    let setupRes = modulesLookup.Main.clock.every(c => {
      return c.time == clock
        ? c.assignments.every(a => {
            // can only assign values to control types
            if (!gatesLookup["main_" + a.id].logic == "control") {
              logger(
                "Can only assign simulation values to inputs of Main: " + a.id
              );
              console.log("Error: ", a.id);
              return false;
            }
            try {
              gatesLookup["main_" + a.id].state.setValue(a.value);
            } catch (e) {
              logger(`${c.time}=${a.id}: ${e}`);
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

    // store tick or tock
    if (gatesLookup["main_clock"])
      gatesLookup["main_clock"].state.setValue(
        ~gatesLookup["main_clock"].state.decimalValue & 1
      );

    // run gate evaluation and instance always for this time step (not t=0)
    for (let i = 0; i < EVALS_PER_STEP; i++) {
      let gatesRes = evaluateGates(gates);
      console.log(gatesRes);
      if (!gatesRes) return false;
      // run always section for each instance
      let alwaysRes = instances.every(instance => {
        return instance.always &&
          evaluateSensitivities(instance.id, instance.always.sensitivities)
          ? evaluateStatementTree(instance.id, instance.always.statementTree)
          : true;
      });
      if (!alwaysRes) return false;
    }

    // and store gate results in newSimulation
    gates.forEach(g => {
      newSimulation.gates[g.id].push(gatesLookup[g.id].state.decimalValue);
    });
    newSimulation.clock.push(clock % 2);

    // update always last
    instances.forEach(instance => {
      if (instance.always) {
        instance.always.sensitivities.forEach(sensitivity => {
          sensitivity.last = sensitivity.id.getValue(instance.id, gatesLookup);
        });
      }
    });

    modulesLookup.Main.clock.forEach((x, index, all) => {
      if (x.time != clock) return;

      const lineChar = index == all.length - 1 ? "└" : "├";

      logger(
        chalk.cyan(
          `${lineChar}── Time ${clock.toString().padStart(3, "0")} :`
        ) +
          shortJoin(x.assignments.map(a => a.id + "=" + a.value)) +
          chalk.cyan(" => ") +
          shortJoin(
            instancesLookup.main.gates
              .filter(gateId => gatesLookup[gateId].logic == "response")
              .map(o => getLocalId(o) + "=" + gatesLookup[o].state.decimalValue)
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
