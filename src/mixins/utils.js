export default {
  methods: {
    stripReactive: x => JSON.parse(JSON.stringify(x)),
    getLocalId: x => x.substr(x.lastIndexOf("_") + 1),
    getNamespace: x => x.substr(0, x.lastIndexOf("_")),
    debounce: (func, delay) => {
      let debounceTimer;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
      };
    }
  }
};
