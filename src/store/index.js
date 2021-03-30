import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openFiles: {},
    currentFileTab: "Scratch",
    showWhichGates: "all",
    stateFormat: "logic",
    evals_per_step: 15,
    traceHeight: 30,
    memoryDumpHideZeros: true,
    memoryDumpCompact: false
  },
  getters: {
    currentFile: state =>
      state.currentFileTab != "" ? state.openFiles[state.currentFileTab] : {},

    openEditorFiles: state =>
      Object.values(state.openFiles).filter(file => file.type == "editor"),
    openTruthTables: state =>
      Object.values(state.openFiles).filter(file => file.type == "truthtable"),

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

    selectedInstanceID: (state, getters) =>
      getters.currentFile.selectedInstanceID,
    getAllInstances: (state, getters) =>
      getters.isCompiled ? getters.currentFile.compileResult.instances : [],
    getAllGates: (state, getters) =>
      getters.isCompiled ? getters.currentFile.compileResult.gates : [],
    getInstanceTree: (state, getters) => {
      let maxid = 0;
      const buildNode = id => {
        const instance = getters.getInstance(id); // instances.find(x => x.id == id);
        const res = {
          text:
            instance.id.slice(instance.id.lastIndexOf("_") + 1) +
            "_" +
            instance.module +
            maxid,
          data: { id: instance.id }
        };
        maxid = maxid + 1;
        res.state = {};
        if (getters.currentFile.selectedInstanceID.includes(id))
          res.state = { expanded: true };
        if (id == getters.currentFile.selectedInstanceID)
          res.state = { ...res.state, selected: true };
        if (instance.instances.length > 0)
          res.children = instance.instances.map(ci => buildNode(ci));
        return res;
      };
      if (getters.getAllInstances.length > 0) return [buildNode("main")];
      else return [];
    },

    getGate: (state, getters) => gateid => {
      const result = getters.getAllGates.find(x => x.id == gateid);
      if (result != undefined)
        return getters.getAllGates.find(x => x.id == gateid);
      else throw new Error(`store.getGate: ${gateid} does not exist`);
    },
    getInstance: (state, getters) => instanceID => {
      const id = instanceID || getters.currentFile.selectedInstanceID;
      return getters.getAllInstances.find(x => x.id == id);
    },

    getInstanceInputs: (state, getters) => id => {
      if (!getters.isCompiled) return [];
      if (id == "main")
        return getters.currentFile.walkResult.modules
          .find(x => x.id == "Main")
          .ports.filter(x => x.direction == "input")
          .map(x => "main_" + x.id);
      else return getters.getInstance(id).inputs;
    },
    getInstanceOutputs: (state, getters) => id => {
      if (!getters.isCompiled) return [];
      if (id == "main")
        return getters.currentFile.walkResult.modules
          .find(x => x.id == "Main")
          .ports.filter(x => x.direction == "output")
          .map(x => "main_" + x.id);
      return getters
        .getInstance(id)
        .outputs.map(x => x.substr(0, x.indexOf("-out")));
    },
    getInstanceGates: (state, getters) => id => {
      if (!getters.isCompiled) return null;
      return getters.getInstance(id).gates; //.filter(x => getters.getGate(x).type != "portbuffer");
    },

    getSelectedInstanceInputs: (state, getters) =>
      getters.getInstanceInputs(getters.currentFile.selectedInstanceID),
    getSelectedInstanceOutputs: (state, getters) =>
      getters.getInstanceOutputs(getters.currentFile.selectedInstanceID),
    getSelectedInstanceGates: (state, getters) =>
      getters.getInstanceGates(getters.currentFile.selectedInstanceID),

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
      if (!getters.isSimulated) return getters.getGate(gateid).getValue();
      return getters.getGateStateAtTime(
        gateid,
        getters.currentFile.selectedTime
      );
    },
    getGatesStateAtSelectedTime: (state, getters) => {
      if (!getters.isSimulated) return {};
      const gates = getters.currentFile.simulateResult.gates;
      let res = {};
      Object.keys(gates).forEach(
        id => (res[id] = gates[id][getters.currentFile.selectedTime])
      );
      return res;
    }
  },
  mutations: {
    toggleAutoCompile(state) {
      state.openFiles[state.currentFileTab].autoCompile = !state.openFiles[
        state.currentFileTab
      ].autoCompile;
    },
    setEvalsPerStep(state, payload) {
      state.evals_per_step = payload;
    },
    setTraceHeight(state, payload) {
      state.traceHeight = payload;
    },
    setShowWhichGates(state, payload) {
      state.showWhichGates = payload;
    },
    setMemoryDumpCompact(state, payload) {
      state.memoryDumpCompact = payload;
    },
    setMemoryDumpHideZeros(state, payload) {
      state.memoryDumpHideZeros = payload;
    },
    setStateFormat(state, payload) {
      state.stateFormat = payload;
    },
    toggleStateFormat(state) {
      const formats = ["logic", "binary", "decimal", "hex"];
      let cur = formats.indexOf(state.stateFormat);
      cur = (cur + 1) % formats.length;
      state.stateFormat = formats[cur];
    },
    setSelectedInstanceID(state, id) {
      state.openFiles[state.currentFileTab].selectedInstanceID = id;
    },
    setCurrentFileTab(state, payload) {
      state.currentFileTab = payload;
    },
    setSelectedGate(state, payload) {
      state.selectedGate = payload;
    },
    openFile(state, payload) {
      Vue.set(state.openFiles, payload.newSourceName, {
        type: "editor",
        name: payload.newSourceName,
        code: payload.code,
        parseResult: {},
        walkResult: {},
        compileResult: {},
        simulation: { ready: false, gates: {}, time: [], maxTime: 0 },
        status: "Parse Error",
        selectedTime: 0,
        selectedInstanceID: "main",
        selectedGate: null,
        autoCompile: true
      });
    },
    openTruthTable(state, payload) {
      Vue.set(state.openFiles, payload.newSourceName, {
        type: "truthtable",
        name: payload.newSourceName,
        code: payload.code,
        parseResult: {},
        walkResult: {},
        compileResult: {},
        simulation: { ready: false, gates: {}, time: [], maxTime: 0 },
        status: "Parse Error",
        selectedTime: 0,
        selectedInstanceID: "main",
        selectedGate: null,
        autoCompile: true
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
