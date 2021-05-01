import { parseToAST, walkAST } from "./vlgAntlrParser.js"; // build ast

const parse = (currentFile, filename, code) => {
  currentFile.filename = filename;
  const parseResult = parseToAST(code);
  // this.$store.commit("setParseResult", { ...parseResult });
  // if (parseResult.errors.length > 0) {
  //   // this.$store.commit("setParseState", te = "parseError";
  //   this.termWriteln(
  //     chalk.red("└── Syntax error(s): ") + parseResult.errors.length
  //   );
  //   return;
  // }
  if (parseResult.errors.length == 0) {
    const walkResult = walkAST(parseResult.ast);
    currentFile.parseResult = {
      syntaxErrors: parseResult.errors,
      semanticErrors: walkResult.errors,
      modules: walkResult.modules,
      status:
        parseResult.errors.length + walkResult.errors.length == 0
          ? "ok"
          : "fail"
    };
  }
};

export default parse;
