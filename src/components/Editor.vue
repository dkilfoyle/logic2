<template>
  <MonacoEditor
    ref="editor"
    :value="value"
    :options="monacoOptions"
    @change="onChange"
    @editorWillMount="onEditorWillMount"
    @editorDidMount="onEditorDidMount"
    class="editor"
    language="miniVerilog"
    theme="myCoolTheme"
  />
</template>

<script>
import MonacoEditor from "vue-monaco";
// var lineColumn = require("line-column");
// import vlgParser from "../lib/vlgParser.js"; // parsec parser
import parse from "../lib/vlgAntlrParser.js"; // parsec parser
import walk from "../lib/vlgAntlrListener.js"; // parsec parser

String.prototype.regexIndexOf = function (regex, startpos) {
  var indexOf = this.substring(startpos || 0).search(regex);
  return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
};

export default {
  name: "Editor",
  props: {
    value: {
      type: String,
      default: () => "// source code",
    },
  },
  components: {
    MonacoEditor,
  },
  data() {
    return {
      lintDecorations: [],
      monacoOptions: {
        glyphMargin: true,
        fontSize: 14,
      },
    };
  },
  computed: {
    editor() {
      return this.$refs["editor"].getEditor();
    },
    monaco() {
      return this.$refs["editor"].monaco;
    },
  },
  methods: {
    onChange(val) {
      // console.log("onChange");
      this.lint(val);
      this.$emit("input", val);
    },
    onResize() {
      this.editor.layout();
    },
    onEditorDidMount(editor) {
      // console.log("editorDidMount");
      this.lint(editor.getValue());
      // this.onChange(editor.getValue());
    },
    onEditorWillMount() {
      const monaco = this.monaco;
      monaco.languages.register({ id: "miniVerilog" });

      const miniVerilogConfig = {
        surroundingPairs: [{ open: "(", close: ")" }],
        autoClosingPairs: [{ open: "(", close: ")" }],
        brackets: [
          ["(", ")"],
          ["begin", "end"],
          ["module", "endmodule"],
        ],
        comments: {
          lineComment: "//",
        },
        folding: {
          offSide: false,
          markers: {
            start: new RegExp(
              "^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|module)\\b"
            ),
            end: new RegExp(
              "^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endmodule)\\b"
            ),
          },
        },
      };
      monaco.languages.setLanguageConfiguration(
        "miniVerilog",
        miniVerilogConfig
      );

      // Register a tokens provider for the language
      monaco.languages.setMonarchTokensProvider("miniVerilog", {
        declarations: ["module"],
        keywords: [
          "module",
          "endmodule",
          "begin",
          "end",
          "input",
          "output",
          "endmodule",
          "test",
          "assign",
        ],
        typeKeywords: [
          "and",
          "nand",
          "or",
          "nor",
          "xor",
          "not",
          "buffer",
          "wire",
          "control",
          "response",
        ],
        operators: ["=", "&", "|", "~", "^"],
        symbols: /[=><!~?:&|+\-*/^%]+/,
        // C# style strings
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        tokenizer: {
          root: [
            // identifiers and keywords
            [
              /[a-z_$][\w$]*/,
              {
                cases: {
                  endmodule: { token: "keyword.decl", bracket: "@close" },
                  "@declarations": { token: "keyword.decl", bracket: "@open" },
                  "@typeKeywords": "type.identifier",
                  "@keywords": "keyword",
                  "@default": "identifier",
                },
              },
            ],

            // whitespace
            { include: "@whitespace" },

            // delimiters and operators
            [/[{}()]/, "@brackets"],
            [
              /@symbols/,
              { cases: { "@operators": "operator", "@default": "" } },
            ],

            // @ annotations.
            // As an example, we emit a debugging log message on these tokens.
            // Note: message are supressed during the first load -- change some lines to see them.
            [
              /@\s*[a-zA-Z_$][\w$]*/,
              { token: "annotation", log: "annotation token: $0" },
            ],

            // numbers
            [/\d*\.\d+([eE][-+]?\d+)?/, "number.float"],
            [/0[xX][0-9a-fA-F]+/, "number.hex"],
            [/\d+/, "number"],

            // delimiter: after number because of .\d floats
            [/[;,.]/, "delimiter"],

            // strings
            [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
            [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],

            // characters
            [/'[^\\']'/, "string"],
            [/(')(@escapes)(')/, ["string", "string.escape", "string"]],
            [/'/, "string.invalid"],
          ],

          comment: [
            [/[^/*]+/, "comment"],
            [/\/\*/, "comment", "@push"], // nested comment
            ["\\*/", "comment", "@pop"],
            [/[/*]/, "comment"],
          ],

          string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }],
          ],

          whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"],
          ],
        },
      });

      // Define a new theme that contains only rules that match this language
      monaco.editor.defineTheme("myCoolTheme", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "custom-info", foreground: "808080" },
          { token: "custom-error", foreground: "ff0000", fontStyle: "bold" },
          { token: "custom-notice", foreground: "FFA500" },
          { token: "custom-date", foreground: "008800" },
        ],
      });

      // Register a completion item provider for the new language
      monaco.languages.registerCompletionItemProvider("miniVerilog", {
        provideCompletionItems: () => {
          var suggestions = [
            {
              label: "simpleText",
              kind: monaco.languages.CompletionItemKind.Text,
              insertText: "simpleText",
            },
            {
              label: "testing",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "testing(${1:condition})",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "ifelse",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: [
                "if (${1:condition}) {",
                "\t$0",
                "} else {",
                "\t",
                "}",
              ].join("\n"),
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "If-Else Statement",
            },
          ];
          return { suggestions: suggestions };
        },
      });
    },
    lint(text) {
      // console.log("lint");
      if (text.length == 0) return [];
      const parseResult = parse(text);

      let newDecorations = parseResult.errors.map((e) => ({
        range: new this.monaco.Range(
          e.startLine,
          e.startColumn,
          e.endLine,
          e.endColumn
        ),
        options: {
          inlineClassName: "lintErrorUnderline",
          glyphMarginClassName:
            e.severity == "error"
              ? "fas fa-exclamation-triangle marginError"
              : "fas fa-exclamation-circle marginWarning",
          glyphMarginHoverMessage: { value: e.msg },
        },
      }));

      let walkResult = { errors: [] };
      if (parseResult.errors.length == 0) {
        walkResult = walk(parseResult.ast);
        newDecorations = newDecorations.concat(
          walkResult.errors.map((e) => ({
            range: new this.monaco.Range(
              e.startLine,
              e.startColumn,
              e.endLine,
              e.endColumn
            ),
            options: {
              inlineClassName: "lintErrorUnderline",
              glyphMarginClassName:
                e.severity == "error"
                  ? "fas fa-exclamation-triangle marginError"
                  : "fas fa-exclamation-circle marginWarning",
              glyphMarginHoverMessage: { value: e.msg },
            },
          }))
        );

        // TODO: convert walkResult.errors to add to newdecorations
      }

      console.log("lint result: ", parseResult, walkResult);
      this.lintDecorations = this.editor.deltaDecorations(
        this.lintDecorations,
        newDecorations
      );

      if (parseResult.errors.length == 0 && walkResult.errors.length == 0) {
        this.$nextTick(() =>
          this.$emit("passLint", { parseResult, walkResult })
        );
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.marginError {
  color: indianred;
  margin-left: 5px;
  width: 14px !important;
}

.marginWarning {
  color: orange;
  margin-left: 5px;
  width: 14px !important;
}

.lintErrorUnderline {
  color: indianred !important;
  /* cursor: pointer; */
  text-decoration: darksalmon underline wavy;
}
</style>
