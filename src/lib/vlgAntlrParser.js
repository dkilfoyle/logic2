import { CommonTokenStream, InputStream, error } from "antlr4";

// eslint-disable no-useless-escape
import { vlgLexer } from "../grammar/vlgLexer.js";
import { vlgParser } from "../grammar/vlgParser.js";

class vlgErrorListener extends error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    this.errors.push({
      startLine: line,
      endLine: line,
      startColumn: column,
      endColumn: column + (offendingSymbol.stop - offendingSymbol.start) + 2, //Let's suppose the length of the error is only 1 char for simplicity
      msg,
      severity: "error", // This the error code you can customize them as you want
    });
    console.log("Error: ", this.errors[this.errors.length - 1]);
  }
}

export default function parse(code) {
  const inputStream = new InputStream(code);
  const lexer = new vlgLexer(inputStream);

  lexer.removeErrorListeners();
  const errorListener = new vlgErrorListener();
  lexer.addErrorListener(errorListener);

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new vlgParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  const ast = parser.source_text();
  const errors = errorListener.errors;

  return { ast, errors };
}
