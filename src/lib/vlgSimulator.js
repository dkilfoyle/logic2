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

const evaluate = (components, componentLookup) => {
  const logicOperation = component => {
    let logicFn = component.logic;
    let inputs = component.inputs.map(input => componentLookup[input].state);

    if (["not", "buffer", "response", "portbuffer"].includes(logicFn)) {
      if (inputs.length > 1) {
        console.log(
          "Gate evaluation error - 1 input only valid for not and buffer gates"
        );
        return;
      }
    }

    if (logicFn == "sevenseg" && inputs.length != 7) {
      console.log("Gate evaluation error - sevenseg must have 7 inputs");
      return;
    }

    if (logicFn == "reg") return;

    component.state = inputs.some(input => input.state === "x")
      ? "x"
      : logicFunctions[logicFn](inputs);
  };

  components.forEach(component => {
    if (component.logic === "control") return;
    logicOperation(component);
  });
};

const simulate = (EVALS_PER_STEP, gates, instances, modules, logger) => {
  const newSimulation = {
    gates: {},
    clock: [],
    time: [],
    ready: false
  };

  gates.forEach(g => {
    g.state = g.initial || 0;
    newSimulation.gates[g.id] = [];
  });

  var gatesLookup = indexBy(gates, "id");
  var instancesLookup = indexBy(instances, "id");
  var modulesLookup = indexBy(modules, "id");

  const maxClock = modulesLookup.Main.clock.reduce(
    (acc, val) => Math.max(val.time, acc),
    0
  );

  if (gatesLookup["main_clock"]) gatesLookup["main_clock"].state = 1;

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

    // run gate evaluation and instance always for this time step (not t=0)
    for (let i = 0; i < EVALS_PER_STEP; i++) {
      evaluate(gates, gatesLookup);
      // run always section for each instance
      instances.forEach(instance => {
        if (!instance.always) return;

        const { sensitivities, assigns } = instance.always;

        const last = sensitivities[0].last;
        const current = gatesLookup[sensitivities[0].id].state;
        const edge =
          last == 0 && current == 1
            ? "posedge"
            : last == 1 && current == 0
            ? "negedge"
            : "same";

        if (sensitivities[0].type == edge) {
          assigns.forEach(assign => {
            gatesLookup[assign.id].state = gatesLookup[assign.val].state;
            // console.log("posedge: ", assign.id, gatesLookup[assign.id].state);
          });
        }
      });
    }

    // and store gate results in newSimulation
    gates.forEach(g => {
      newSimulation.gates[g.id].push(gatesLookup[g.id].state);
    });
    newSimulation.clock.push(clock % 2);

    // update always last
    instances.forEach(instance => {
      if (instance.always) {
        instance.always.sensitivities[0].last =
          gatesLookup[instance.always.sensitivities[0].id].state;
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
              .map(o => getLocalId(o) + "=" + gatesLookup[o].state)
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
