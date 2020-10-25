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
    instances: (state, getters) =>
      (getters.currentFile &&
        getters.currentFile.status == "compiled" &&
        getters.currentFile.compileResult.instances) ||
      [],
    gates: (state, getters) =>
      (getters.currentFile &&
        getters.currentFile.status == "compiled" &&
        getters.currentFile.compileResult.gates) ||
      [],
    instanceTree: (state, getters) => {
      const buildNode = id => {
        const instance = getters.instances.find(x => x.id == id);
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
      if (getters.instances.length > 0) return [buildNode("main")];
      else return [];
    },
    getGate: (state, getters) => id => {
      return getters.gates.find(x => x.id == id);
    },
    getInstance: (state, getters) => instanceID => {
      const id = instanceID || state.selectedInstanceID;
      return getters.instances.find(x => x.id == id);
    },
    getInputs: (state, getters) => instanceID => {
      const id = instanceID || state.selectedInstanceID;
      if (id == "main")
        return getters.currentFile.walkResult.modules
          .find(x => x.id == "Main")
          .ports.filter(x => x.type == "input")
          .map(x => "main_" + x.id);
      else return getters.getInstance(id).inputs;
    },
    getOutputs: (state, getters) => instanceID => {
      const id = instanceID || state.selectedInstanceID;
      if (id == "main")
        return getters.currentFile.walkResult.modules
          .find(x => x.id == "Main")
          .ports.filter(x => x.type == "output")
          .map(x => "main_" + x.id);
      return getters
        .getInstance(id)
        .outputs.map(x => x.substr(0, x.indexOf("-out")));
    },
    getGates: (state, getters) => instanceID => {
      const id = instanceID || state.selectedInstanceID;
      return getters
        .getInstance(id)
        .gates.filter(x => getters.getGate(x).type == "gate");
    },
    allInstanceGates: (state, getters) => {
      return [
        ...new Set([
          ...getters.getInputs(),
          ...getters.getGates(),
          ...getters.getOutputs()
        ])
      ];
    },
    // isInput: function(instanceId, id) {
    //   return (
    //     this.getInputs(instanceId).some(x => x == id) ||
    //     this.getGate(id).logic == "control"
    //   );
    // },
    // isOutput: function(instanceId, id) {
    //   return (
    //     this.getOutputs(instanceId).some(x => x == id) ||
    //     this.getGate(id).logic == "response"
    //   );
    // },
    selectedGates: (state, getters) => showWhichGates => {
      if (!getters.instances.length) return [];
      switch (showWhichGates) {
        case "all":
          return getters.allInstanceGates;
        case "wires":
          return [...getters.getGates(state.selectedInstanceID)];
        case "outputs":
          return [...getters.getOutputs(state.selectedInstanceID)];
        case "inputs":
          return [...getters.getInputs(state.selectedInstanceID)];
        case "ports":
          return [
            ...getters.getInputs(state.selectedInstanceID),
            ...getters.getOutputs(state.selectedInstanceID)
          ];
      }
      return [];
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
        status: "uncompiled"
      });
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
    setStatus(state, payload) {
      state.openFiles[state.currentFileTab].status = payload;
    }
  },
  actions: {},
  modules: {}
});
