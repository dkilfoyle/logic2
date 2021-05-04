<template>
  <div class="grid-container">
    <div class="toolbar">
      <nav class="level dktoolbar">
        <div class="level-left">
          <div class="level-item dkbuttongroup">
            <button class="button is-small editButton">
              <span class="icon is-small">
                <i class="fa fa-cut"></i>
              </span>
            </button>
            <button class="button is-small editButton">
              <span class="icon is-small">
                <i class="fa fa-copy"></i>
              </span>
            </button>
            <button class="button is-small editButton">
              <span class="icon is-small">
                <i class="fa fa-paste"></i>
              </span>
            </button>
          </div>
        </div>
        <div class="level-item">
          <button :class="statusButton.buttonClass">
            <span class="icon is-small">
              <i :class="statusButton.iconClass"></i>
            </span>
            <span>{{ statusButton.text }}</span>
          </button>
        </div>
        <div class="level-right">
          <div class="level-item dkbuttongroup">
            <button
              class="button is-primary is-small is-info"
              @click="$emit('compile')"
              title="Compile"
            >
              <span class="icon is-small">
                <i class="fa fa-refresh"></i>
              </span>
            </button>
            <button
              class="button is-primary is-small"
              @click="$emit('simulate')"
              title="Simulate"
            >
              <span class="icon is-small">
                <i class="fa fa-play"></i>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
    <MonacoEditor
      ref="editor"
      :value="value"
      :options="monacoOptions"
      @change="onChange"
      @editorWillMount="onEditorWillMount"
      @editorDidMount="onEditorDidMount"
      language="miniVerilog"
      theme="myCoolTheme"
      class="editor"
    />
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";
import UtilsMixin from "../mixins/utils";
import { mapGetters } from "vuex";
import workerInterface from "../lib/workerInterface.js";

String.prototype.regexIndexOf = function(regex, startpos) {
  var indexOf = this.substring(startpos || 0).search(regex);
  return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
};

export default {
  name: "Editor",
  props: {
    value: {
      type: String,
      default: () => "// source code\n"
    },
    size: {
      type: Object,
      default: () => ({ width: 100, height: 100 })
    },
    name: {
      type: String
    }
  },
  components: {
    MonacoEditor
  },
  mixins: [UtilsMixin],
  data() {
    return {
      monacoOptions: {
        glyphMargin: true,
        fontSize: 14
      }
    };
  },
  computed: {
    ...mapGetters(["currentFile", "isParsed", "parseStatus", "isCompiled"]),
    editor() {
      return this.$refs["editor"].getEditor();
    },
    monaco() {
      return this.$refs["editor"].monaco;
    },
    statusButton() {
      switch (true) {
        case this.isCompiled:
          return {
            buttonClass: "button is-small is-success-dark",
            iconClass: "fa fa-check",
            text: "Compiled"
          };
        case this.isParsed && !this.isCompiled:
          return {
            buttonClass: "button is-small is-danger",
            iconClass: "fa fa-times",
            text: "Compile Error"
          };
        case this.isParsed:
          return {
            buttonClass: "button is-small is-success",
            iconClass: "fa fa-check",
            text: "Parsed"
          };
        default:
          return {
            buttonClass: "button is-small is-danger",
            iconClass: "fa fa-times",
            text: `${this.syntaxErrors.length +
              this.semanticErrors.length} Errors`
          };
      }
    },
    syntaxErrors() {
      if (!this.parseStatus) return [];
      return this.currentFile.parseResult.syntaxErrors.map(e => ({
        severity: this.monaco.MarkerSeverity.Error,
        startLineNumber: e.startLine,
        startColumn: e.startColumn,
        endLineNumber: e.endLineNumber,
        endColumn: e.endColumn,
        message: e.msg
      }));
    },
    semanticErrors() {
      if (!this.parseStatus) return [];
      return this.currentFile.parseResult.semanticErrors.map(e => ({
        severity: this.monaco.MarkerSeverity.Error,
        startLineNumber: e.startLine,
        startColumn: e.startColumn,
        endLineNumber: e.endLineNumber,
        endColumn: e.endColumn,
        message: e.msg
      }));
    },
    errors() {
      return [...this.syntaxErrors, ...this.semanticErrors];
    }
  },
  watch: {
    errors() {
      // eslint-disable-next-line no-debugger
      this.monaco.editor.setModelMarkers(
        this.editor.getModel(),
        "miniVerilog",
        [...this.syntaxErrors, ...this.semanticErrors]
      );
    }
  },
  mounted() {
    // this.lint = this.debounce(this.lint, 1000);
  },
  methods: {
    resize() {
      this.editor.layout();
    },
    onChange(val) {
      this.$emit("input", val);
    },
    onEditorDidMount(editor) {
      editor.onDidChangeCursorPosition(e =>
        this.$emit("onDidChangeCursorPosition", e.position)
      );
    },
    onEditorWillMount() {
      const monaco = this.monaco;
      // const that = this;

      monaco.editor.onDidCreateModel(model => {
        const validate = () => {
          const text = model.getValue();
          workerInterface.send({
            command: "parse",
            filename: "", //that.currentFile.filename,
            code: text
          });
        };

        var handle = null;
        model.onDidChangeContent(() => {
          clearTimeout(handle);
          handle = setTimeout(() => validate(), 500);
        });

        validate(); // call once on first onDidCreateModel
      });

      monaco.languages.register({ id: "miniVerilog" });

      const miniVerilogConfig = {
        surroundingPairs: [
          { open: "(", close: ")" },
          { open: "[", close: "]" },
          { open: "{", close: "}" }
        ],
        autoClosingPairs: [
          { open: "(", close: ")" },
          { open: "[", close: "]" },
          { open: "{", close: "}" }
        ],
        brackets: [
          ["(", ")"],
          ["{", "}"],
          ["begin", "end"],
          ["case", "endcase"],
          ["module", "endmodule"]
        ],
        comments: {
          lineComment: "//",
          blockComment: ["/*", "*/"]
        },
        folding: {
          offSide: false,
          syntaxMarkers: {
            start: new RegExp(
              "^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|module|case)\\b"
            ),
            end: new RegExp(
              "^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endmodule|endcase)\\b"
            )
          }
        }
      };
      monaco.languages.setLanguageConfiguration(
        "miniVerilog",
        miniVerilogConfig
      );

      // Register a tokens provider for the language
      monaco.languages.setMonarchTokensProvider("miniVerilog", {
        declarations: ["module"],
        brackets: [
          { token: "delimiter.curly", open: "{", close: "}" },
          { token: "delimiter.parenthesis", open: "(", close: ")" },
          { token: "delimiter.square", open: "[", close: "]" }
        ],
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
          "always",
          "initial",
          "parameter",
          "case",
          "endcase",
          "$meta"
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
          "reg",
          "posedge",
          "negedge",
          "localparam"
        ],
        operators: ["=", "&", "|", "~", "^", "+", "-", "*", "/"],
        symbols: /[=><!~?:&|+\-*/^%]+/,
        // C# style strings
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        tokenizer: {
          root: [
            // identifiers and keywords
            [
              /[a-zA-Z_$][\w$]*/,
              {
                cases: {
                  endmodule: { token: "keyword.decl", bracket: "@close" },
                  "@declarations": { token: "keyword.decl", bracket: "@open" },
                  "@typeKeywords": "type.identifier",
                  "@keywords": "keyword",
                  "@default": "identifier"
                }
              }
            ],

            // whitespace
            { include: "@whitespace" },

            // delimiters and operators
            // eslint-disable-next-line no-useless-escape
            [/[{}()\[\]]/, "@brackets"],
            [
              /@symbols/,
              { cases: { "@operators": "operator", "@default": "" } }
            ],

            // @ annotations.
            // As an example, we emit a debugging log message on these tokens.
            // Note: message are supressed during the first load -- change some lines to see them.
            [
              /@\s*[a-zA-Z_$][\w$]*/,
              { token: "annotation", log: "annotation token: $0" }
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
            [/'/, "string.invalid"]
          ],

          comment: [
            [/[^/*]+/, "comment"],
            [/\/\*/, "comment", "@push"], // nested comment
            ["\\*/", "comment", "@pop"],
            [/[/*]/, "comment"]
          ],

          string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
          ],

          whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"]
          ]
        }
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
          { token: "number", foreground: "#b5cea8" },
          { token: "operator", foreground: "#CE9178" },
          { token: "brackets", foreground: "#DCDCAA" },
          { token: "delimiter", foreground: "#DCDCAA" }
        ]
      });

      // Register a completion item provider for the new language
      monaco.languages.registerCompletionItemProvider("miniVerilog", {
        provideCompletionItems: () => {
          var suggestions = [
            {
              label: "simpleText",
              kind: monaco.languages.CompletionItemKind.Text,
              insertText: "simpleText"
            },
            {
              label: "testing",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "testing(${1:condition})",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
            },
            {
              label: "beginend",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: ["begin", "\t$0", "end"].join("\n"),
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "begin end section"
            },
            {
              label: "test",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: ["test begin", "\t#${1:time} { $0 };", "end"].join(
                "\n"
              ),
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "test section"
            },
            {
              label: "case",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: ["case(${1:condition})", "\t$0", "endcase"].join(
                "\n"
              ),
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "case statement"
            },
            {
              label: "ifelse",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: ["if (${1:condition})", "\t$0", "else", "\t"].join(
                "\n"
              ),
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "If-Else Statement"
            },
            {
              label: "module",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: [
                "module \t$0 (",
                "\tinput \t$1,",
                "\toutput \t$2);",
                "\t",
                "end module"
              ].join("\n"),
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "Module declaration"
            }
          ];
          return { suggestions: suggestions };
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.editorContainer {
  width: 100%;
}
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
  background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23f48771'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")
    repeat-x bottom left;
}

.dktoolbar {
  background: #333333;
  padding: 5px;
  margin-bottom: 0px !important;
}

.editButton {
  background-color: #777777 !important;
  border-color: #777777 !important;
  color: #d4d4d4 !important;
}

.is-success-dark {
  background-color: #358651 !important;
  border-color: transparent !important;
  color: #ffffff !important;
}

.dkbuttongroup {
  display: inline-flex;
  gap: 5px;
}

.grid-container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "toolbar"
    "editor";
}
.toolbar {
  grid-area: toolbar;
}
.editor {
  grid-area: editor;
}
</style>
