/* eslint-disable no-debugger */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// const getLocalId = x => x.substr(x.lastIndexOf("_") + 1);
const getNamespace = x => x.substr(0, x.lastIndexOf("_"));
const newFileObject = (type, name, code) => {
  return {
    type,
    name,
    code,
    parseResult: {},
    compileResult: {},
    simulateResult: {},
    circuitResult: {},
    selectedTime: 0,
    selectedInstanceID: "main",
    selectedGateID: null,
    autoCompile: true,
    autoDraw: true
  };
};

export default new Vuex.Store({
  state: {
    openFiles: {},
    currentFileTab: "Scratch",
    showWhichGates: "all",
    stateFormat: "logic",
    evals_per_step: 15,
    traceHeight: 30,
    tableFollowsSchematic: true,
    memoryDumpHideZeros: true,
    memoryDumpCompact: false
  },
  getters: {
    currentFile: state => (state.currentFileTab != "" ? state.openFiles[state.currentFileTab] : {}),

    openEditorFiles: state => Object.values(state.openFiles).filter(file => file.type == "editor"),
    openTruthTables: state =>
      Object.values(state.openFiles).filter(file => file.type == "truthtable"),

    isParsed: (state, getters) => {
      return getters.currentFile && getters.currentFile.parseResult.status == "pass";
    },
    isCompiled: (state, getters) => {
      return getters.isParsed && getters.currentFile.compileResult.status == "pass";
    },
    isSimulated: (state, getters) => {
      return getters.isCompiled && getters.currentFile.simulateResult.status == "pass";
    },
    isCircuited: (state, getters) => {
      return getters.isCompiled && getters.currentFile.circuitResult.status == "pass";
    },

    parseStatus: (state, getters) => {
      return getters.currentFile && getters.currentFile.parseResult
        ? getters.currentFile.parseResult.status
        : null;
    },
    compileStatus: (state, getters) => {
      return getters.currentFile && getters.currentFile.compileResult
        ? getters.currentFile.compileResult.status
        : null;
    },
    simulateStatus: (state, getters) => {
      return getters.currentFile && getters.currentFile.simulateResult
        ? getters.currentFile.simulateResult.status
        : null;
    },

    parseTimestamp: (state, getters) => {
      return getters.currentFile && getters.currentFile.parseResult
        ? getters.currentFile.parseResult.timestamp
        : null;
    },
    compileTimestamp: (state, getters) => {
      return getters.currentFile && getters.currentFile.compileResult
        ? getters.currentFile.compileResult.timestamp
        : null;
    },
    simulateTimestamp: (state, getters) => {
      return getters.currentFile && getters.currentFile.simulateResult
        ? getters.currentFile.simulateResult.timestamp
        : null;
    },

    selectedInstanceID: (state, getters) => getters.currentFile.selectedInstanceID,
    selectedGateID: (state, getters) => getters.currentFile.selectedGateID,

    getAllInstances: (state, getters) =>
      getters.isCompiled ? getters.currentFile.compileResult.instances : {},
    getAllGates: (state, getters) =>
      getters.isCompiled ? getters.currentFile.compileResult.gates : {},
    getInstanceTree: (state, getters) => {
      let maxid = 0;
      const buildNode = id => {
        const instance = getters.getInstance(id); // instances.find(x => x.id == id);
        const res = {
          text: instance.id.slice(instance.id.lastIndexOf("_") + 1) + "_" + instance.module + maxid,
          data: { id: instance.id }
        };
        maxid = maxid + 1;
        res.state = {};
        if (getters.currentFile.selectedInstanceID.includes(id)) res.state = { expanded: true };
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
      const gate = getters.getAllGates[gateid];
      if (!gate) throw new Error(`store.getGate: ${gateid} does not exist`);
      else return gate;
    },
    getInstance: (state, getters) => instanceID => {
      const id = instanceID || getters.currentFile.selectedInstanceID;
      return getters.getAllInstances[id]; //.find(x => x.id == id);
    },

    getInstanceInput_ids: (state, getters) => id => {
      if (!getters.isCompiled) return [];
      if (id == "main")
        return getters.currentFile.parseResult.modules.Main.ports
          .filter(x => x.direction == "input")
          .map(x => "main_" + x.id);
      else return getters.getInstance(id).input_ids;
    },
    getInstanceOutput_ids: (state, getters) => id => {
      if (!getters.isCompiled) return [];
      if (id == "main")
        return getters.currentFile.parseResult.modules.Main.ports
          .filter(x => x.direction == "output")
          .map(x => "main_" + x.id);
      return getters.getInstance(id).output_ids.map(x => x.substr(0, x.indexOf("-out")));
    },
    getInstanceGate_ids: (state, getters) => id => {
      if (!getters.isCompiled) return null;
      return getters.getInstance(id).gate_ids; //.filter(x => getters.getGate(x).type != "portbuffer");
    },

    getSelectedInstanceInput_ids: (state, getters) =>
      getters.getInstanceInput_ids(getters.currentFile.selectedInstanceID),
    getSelectedInstanceOutput_ids: (state, getters) =>
      getters.getInstanceOutput_ids(getters.currentFile.selectedInstanceID),
    getSelectedInstanceGate_ids: (state, getters) =>
      getters.getInstanceGate_ids(getters.currentFile.selectedInstanceID),

    isInput: (state, getters) => (instanceid, gateid) => {
      return getters.getInstanceInput_ids(instanceid).some(x => x == gateid);
    },
    isOutput: (state, getters) => (instanceid, gateid) => {
      return getters.getInstanceOutput_ids(instanceid).some(x => x == gateid);
    },

    getGateStateAtTime: (state, getters) => (gateid, time) => {
      if (!getters.isSimulated) return 0;
      return getters.currentFile.simulateResult.gates[gateid][time];
    },
    getGateStateAtSelectedTime: (state, getters) => gateid => {
      if (!getters.isSimulated) return getters.getGate(gateid).getValue();
      return getters.getGateStateAtTime(gateid, getters.currentFile.selectedTime);
    },
    getGatesStateAtSelectedTime: (state, getters) => {
      if (!getters.isSimulated) return {};
      const gates = getters.currentFile.simulateResult.gates;
      let res = {};
      Object.keys(gates).forEach(id => (res[id] = gates[id][getters.currentFile.selectedTime]));
      return res;
    }
  },
  mutations: {
    setAutoCompile(state, payload) {
      state.openFiles[state.currentFileTab].autoCompile = payload;
    },
    setAutoDraw(state, payload) {
      state.openFiles[state.currentFileTab].autoDraw = payload;
    },
    setEvalsPerStep(state, payload) {
      state.evals_per_step = payload;
    },
    setTraceHeight(state, payload) {
      state.traceHeight = payload;
    },
    setTableFollowsSchematic(state, payload) {
      state.tableFollowsSchematic = payload;
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
    setSelectedGateID(state, id) {
      state.openFiles[state.currentFileTab].selectedInstanceID = id ? getNamespace(id) : "main";
      state.openFiles[state.currentFileTab].selectedGateID = id;
    },
    setCurrentFileTab(state, payload) {
      state.currentFileTab = payload;
    },
    setSelectedGate(state, payload) {
      state.selectedGate = payload;
    },

    openFile(state, payload) {
      Vue.set(
        state.openFiles,
        payload.newSourceName,
        newFileObject("editor", payload.newSourceName, payload.code)
      );
    },
    openTruthTable(state, payload) {
      Vue.set(
        state.openFiles,
        payload.newSourceName,
        newFileObject("truthtable", payload.newSourceName, payload.code)
      );
    },

    closeFile(state, payload) {
      Vue.delete(state.openFiles, payload);
    },

    setParseResult(state, payload) {
      state.openFiles[state.currentFileTab].parseResult = payload;
    },
    setCompileResult(state, payload) {
      state.openFiles[state.currentFileTab].compileResult = payload;
    },
    setSimulateResult(state, payload) {
      state.openFiles[state.currentFileTab].simulateResult = payload;
    },
    setCircuitResult(state, payload) {
      state.openFiles[state.currentFileTab].circuitResult = payload;
    },

    setSelectedTime(state, payload) {
      state.openFiles[state.currentFileTab].selectedTime = payload;
    }
  },
  actions: {},
  modules: {}
});
