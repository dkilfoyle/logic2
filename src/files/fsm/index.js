export const SourceFiles = {
  WindowController: require("./windowcontroller.v").default,
  BinaryUp: require("./binaryup.v").default,
  BinaryUpDown: require("./binaryupdown.v").default,
  OneHotUpCounter: require("./onehotupcounter.v").default
};

export const SourceTree = {
  text: "Finite State Machine",
  children: [
    { text: "WindowController" },
    {
      text: "Counters",
      children: [
        { text: "BinaryUp" },
        { text: "BinaryUpDown" },
        { text: "OneHotUpCounter" }
      ]
    }
  ]
};
