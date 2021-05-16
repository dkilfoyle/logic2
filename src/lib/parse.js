import { parseToAST, walkAST } from "./vlgAntlrParser.js"; // build ast

const parse = (currentFile, code, silent = true) => {
  const parseResult = parseToAST(code);
  const walkResult = walkAST(parseResult.ast);
  const errors = parseResult.errors.length + walkResult.errors.length;

  currentFile.parseResult = {
    syntaxErrors: parseResult.errors,
    semanticErrors: walkResult.errors,
    modules: walkResult.modules,
    timestamp: errors == 0 ? Date.now() : null,
    status: errors == 0 ? "pass" : "fail",
    silent
  };
};

export default parse;
