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
      (getters.currentFile && getters.currentFile.instances) || [],
    gates: (state, getters) =>
      (getters.currentFile && getters.currentFile.gates) || []
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
        instances: [],
        gates: [],
        parseResult: {},
        walkResult: {},
        compileResult: {},
        simulation: { ready: false, gates: {}, time: [], maxTime: 0 },
        state: "uncompiled"
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
    }
  },
  actions: {},
  modules: {}
});
