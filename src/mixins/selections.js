import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "getSelectedInstanceInput_ids",
      "getSelectedInstanceOutput_ids",
      "getSelectedInstanceGate_ids",
      "selectedInstanceID",
      "selectedGateID",
      "isCompiled",
      "getGate"
    ]),
    filteredInstanceGate_ids: function() {
      if (!this.isCompiled) return [];
      switch (this.$store.state.showWhichGates) {
        case "all":
          return this.allInstanceGate_ids;
        case "wires":
          return [...this.getSelectedInstanceGate_ids];
        case "outputs":
          return [...this.getSelectedInstanceOutput_ids];
        case "inputs":
          return [...this.getSelectedInstanceInput_ids];
        case "ports":
          return [...this.getSelectedInstanceInput_ids, ...this.getSelectedInstanceOutput_ids];
      }
      return [];
    },
    allInstanceGate_ids: function() {
      return [
        ...new Set([
          ...this.getSelectedInstanceInput_ids,
          ...this.getSelectedInstanceGate_ids,
          ...this.getSelectedInstanceOutput_ids
        ])
      ];
    }
  },
  methods: {}
};
