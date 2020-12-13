import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "getSelectedInstanceInputs",
      "getSelectedInstanceOutputs",
      "getSelectedInstanceGates",
      "isCompiled",
      "getGate"
    ]),
    filteredInstanceGates: function() {
      if (!this.isCompiled) return [];
      switch (this.$store.state.showWhichGates) {
        case "all":
          return this.allInstanceGates;
        case "wires":
          return [...this.getSelectedInstanceGates];
        case "outputs":
          return [...this.getSelectedInstanceOutputs];
        case "inputs":
          return [...this.getSelectedInstanceInputs];
        case "ports":
          return [
            ...this.getSelectedInstanceInputs,
            ...this.getSelectedInstanceOutputs
          ];
      }
      return [];
    },
    allInstanceGates: function() {
      return [
        ...new Set([
          ...this.getSelectedInstanceInputs,
          ...this.getSelectedInstanceGates,
          ...this.getSelectedInstanceOutputs
        ])
      ];
    }
  },
  methods: {}
};
