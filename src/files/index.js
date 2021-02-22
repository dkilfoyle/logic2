export const SourceFiles = {
  Scratch: require("./scratch.v").default,
  ...require("./theory").SourceFiles,
  ...require("./combinational").SourceFiles,
  ...require("./behavioural").SourceFiles,
  ...require("./sequential").SourceFiles,
  ...require("./fsm").SourceFiles
};

export const SourceTree = [
  {
    text: "Templates",
    children: [{ text: "Scratch" }]
  },

  require("./theory").SourceTree,
  require("./combinational").SourceTree,
  require("./sequential").SourceTree,
  require("./fsm").SourceTree,
  require("./behavioural").SourceTree
];
