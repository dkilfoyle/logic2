const Chalk = require("chalk");
let options = { enabled: true, level: 2 };
const chalk = new Chalk.Instance(options);

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

const EVALS_PER_STEP = 15;

const not = x => ~x & 1;

const logicFunctions = {
  not: a => ~a & 1,
  buffer: a => a,
  portbuffer: a => a,
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
  xnor3: (a, b, c) => not(a ^ b ^ c),
  sevenseg2: () => 0,
  sevenseg7: () => 0
};

const evaluate = (components, componentLookup) => {
  const logicOperation = component => {
    let logicFn = component.logic;
    if (component.inputs.length == 1) {
      if (
        !(
          logicFn == "not" ||
          logicFn == "buffer" ||
          logicFn == "response" ||
          logicFn == "portbuffer"
        )
      ) {
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
      // console.log(component.id, logicFn, aOut.state, component.state);
      return;
    }

    const aOut = componentLookup[component.inputs[0]];
    const bOut = componentLookup[component.inputs[1]];

    if (component.inputs.length == 2) {
      component.state =
        aOut === "x" || bOut === "x"
          ? "x"
          : logicFunctions[logicFn + "2"](aOut.state, bOut.state);
      // console.log(
      //   component.id,
      //   logicFn,
      //   aOut.state,
      //   bOut.state,
      //   component.state
      // );
      return;
    }

    if (component.inputs.length == 7) {
      const cOut = componentLookup[component.inputs[2]];
      const dOut = componentLookup[component.inputs[3]];
      const eOut = componentLookup[component.inputs[4]];
      const fOut = componentLookup[component.inputs[5]];
      const gOut = componentLookup[component.inputs[6]];
      component.state =
        aOut === "x" ||
        bOut === "x" ||
        cOut === "x" ||
        dOut === "x" ||
        eOut === "x" ||
        fOut === "x" ||
        gOut === "x"
          ? "x"
          : logicFunctions[logicFn + "7"](
              aOut.state,
              bOut.state,
              cOut.state,
              dOut.state,
              eOut.state,
              fOut.state,
              gOut.state
            );
      return;
    }
  };

  components.forEach(component => {
    if (component.logic === "control") return;
    logicOperation(component);
  });
};

const simulate = (gates, instances, modules, logger) => {
  const newSimulation = {
    gates: {},
    clock: [],
    time: [],
    ready: false
  };

  gates.forEach(g => {
    g.state = 0;
    newSimulation.gates[g.id] = [];
  });

  var gatesLookup = indexBy(gates, "id");
  var instancesLookup = indexBy(instances, "id");
  var modulesLookup = indexBy(modules, "id");

  const maxClock = modulesLookup.Main.clock.reduce(
    (acc, val) => Math.max(val.time, acc),
    0
  );

  if (gatesLookup["main_clock"]) gatesLookup["main_clock"].state = 0;

  // run the clock
  for (let clock = 0; clock <= maxClock; clock++) {
    newSimulation.time.push(clock);

    // assign control values if matching time point
    modulesLookup.Main.clock.forEach(c => {
      if (c.time == clock) {
        c.assignments.forEach(a => {
          // can only assign values to control types
          if (gatesLookup["main_" + a.id].logic == "control")
            gatesLookup["main_" + a.id].state = a.value;
        });
      }
    });

    // store tick or tock
    if (gatesLookup["main_clock"])
      gatesLookup["main_clock"].state = ~gatesLookup["main_clock"].state & 1;

    // run gate evaluation for this time step (not t=0)
    for (let i = 0; i < EVALS_PER_STEP; i++) {
      evaluate(gates, gatesLookup);
    }

    // and store gate results in newSimulation
    gates.forEach(g => {
      newSimulation.gates[g.id].push(gatesLookup[g.id].state);
    });
    newSimulation.clock.push(clock % 2);

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
              .map(o => getLocalId(o) + "=" + gatesLookup[o].state)
          )
      );
    });
  }
  newSimulation.maxTime = newSimulation.time[newSimulation.time.length - 1];
  newSimulation.timestamp = Date.now();
  newSimulation.ready = true;
  return newSimulation;
};

export default simulate;
