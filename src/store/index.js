import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedInstanceID: "main",
    openFiles: {},
    currentFileTab: "Scratch"
  },
  getters: {
    currentFile: state =>
      state.currentFileTab != "" ? state.openFiles[state.currentFileTab] : {},
    isCompiled: (state, getters) => {
      return (
        getters.currentFile &&
        ["Compile OK", "Simulation OK"].includes(getters.currentFile.status)
      );
    },
    isSimulated: (state, getters) => {
      return (
        getters.currentFile &&
        ["Simulation OK"].includes(getters.currentFile.status) &&
        getters.currentFile.simulateResult.ready
      );
    },

    getAllInstances: (state, getters) =>
      getters.isCompiled ? getters.currentFile.compileResult.instances : [],
    getAllGates: (state, getters) =>
      getters.isCompiled ? getters.currentFile.compileResult.gates : [],
    getInstanceTree: (state, getters) => {
      const buildNode = id => {
        const instance = getters.getInstance(id); // instances.find(x => x.id == id);
        const res = {
          text:
            instance.id.slice(instance.id.lastIndexOf("_") + 1) +
            " : " +
            instance.module,
          data: { id: instance.id }
        };
        res.state = {};
        if (state.selectedInstanceID.includes(id))
          res.state = { expanded: true };
        if (id == state.selectedInstanceID)
          res.state = { ...res.state, selected: true };
        if (instance.instances.length > 0)
          res.children = instance.instances.map(ci => buildNode(ci));
        return res;
      };
      if (getters.getAllInstances.length > 0) return [buildNode("main")];
      else return [];
    },

    getGate: (state, getters) => gateid => {
      return getters.getAllGates.find(x => x.id == gateid);
    },
    getInstance: (state, getters) => instanceID => {
      const id = instanceID || state.selectedInstanceID;
      return getters.getAllInstances.find(x => x.id == id);
    },

    getInstanceInputs: (state, getters) => id => {
      if (!getters.isCompiled) return [];
      if (id == "main")
        return getters.currentFile.walkResult.modules
          .find(x => x.id == "Main")
          .ports.filter(x => x.type == "input")
          .map(x => "main_" + x.id);
      else return getters.getInstance(id).inputs;
    },
    getInstanceOutputs: (state, getters) => id => {
      if (!getters.isCompiled) return [];
      if (id == "main")
        return getters.currentFile.walkResult.modules
          .find(x => x.id == "Main")
          .ports.filter(x => x.type == "output")
          .map(x => "main_" + x.id);
      return getters
        .getInstance(id)
        .outputs.map(x => x.substr(0, x.indexOf("-out")));
    },
    getInstanceGates: (state, getters) => id => {
      if (!getters.isCompiled) return null;
      return getters
        .getInstance(id)
        .gates.filter(x => getters.getGate(x).type == "gate");
    },

    getSelectedInstanceInputs: (state, getters) =>
      getters.getInstanceInputs(state.selectedInstanceID),
    getSelectedInstanceOutputs: (state, getters) =>
      getters.getInstanceOutputs(state.selectedInstanceID),
    getSelectedInstanceGates: (state, getters) =>
      getters.getInstanceGates(state.selectedInstanceID),

    isInput: (state, getters) => (instanceid, gateid) => {
      return getters.getInstanceInputs(instanceid).some(x => x == gateid);
    },
    isOutput: (state, getters) => (instanceid, gateid) => {
      return getters.getInstanceOutputs(instanceid).some(x => x == gateid);
    },

    getGateStateAtTime: (state, getters) => (gateid, time) => {
      if (!getters.isSimulated) return 0;
      return getters.currentFile.simulateResult.gates[gateid][time];
    },
    getGateStateAtSelectedTime: (state, getters) => gateid => {
      if (!getters.isSimulated) return 0;
      return getters.getGateStateAtTime(
        gateid,
        getters.currentFile.selectedTime
      );
    },
    getGatesStateAtSelectedTime: (state, getters) => {
      if (!getters.isSimulated) return [];
      const gates = getters.currentFile.simulateResult.gates;
      let res = {};
      Object.keys(gates).forEach(
        id => (res[id] = gates[id][getters.currentFile.selectedTime])
      );
      return res;
    }
  },
  mutations: {
    setSelectedInstanceID(state, id) {
      state.selectedInstanceID = id;
    },
    setCurrentFileTab(state, payload) {
      state.currentFileTab = payload;
    },
    openFile(state, payload) {
      Vue.set(state.openFiles, payload.newSourceName, {
        name: payload.newSourceName,
        code: payload.code,
        parseResult: {},
        walkResult: {},
        compileResult: {},
        simulation: { ready: false, gates: {}, time: [], maxTime: 0 },
        status: "Parse Error",
        selectedTime: 0
      });
    },
    closeFile(state, payload) {
      Vue.delete(state.openFiles, payload);
    },
    setParseResult(state, payload) {
      state.openFiles[state.currentFileTab].parseResult = payload;
    },
    setWalkResult(state, payload) {
      state.openFiles[state.currentFileTab].walkResult = payload;
    },
    setCompileResult(state, payload) {
      state.openFiles[state.currentFileTab].compileResult = payload;
    },
    setSimulateResult(state, payload) {
      state.openFiles[state.currentFileTab].simulateResult = payload;
    },
    setStatus(state, payload) {
      state.openFiles[state.currentFileTab].status = payload;
    },
    setSelectedTime(state, payload) {
      state.openFiles[state.currentFileTab].selectedTime = payload;
    }
  },
  actions: {},
  modules: {}
});
