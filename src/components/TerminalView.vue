<template>
  <div id="terminal" ref="render" class="xterm-container"></div>
</template>

<script>
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
import { WebLinksAddon } from "xterm-addon-web-links";
// import { FitAddon } from "xterm-addon-fit";
// const stripAnsi = require("strip-ansi");

const defaultTheme = {
  foreground: "#2c3e50",
  background: "#fff",
  cursor: "rgba(0, 0, 0, .4)",
  selection: "rgba(0, 0, 0, 0.3)",
  black: "#000000",
  red: "#e83030",
  brightRed: "#e83030",
  green: "#42b983",
  brightGreen: "#42b983",
  brightYellow: "#ea6e00",
  yellow: "#ea6e00",
  magenta: "#e83030",
  brightMagenta: "#e83030",
  cyan: "#03c2e6",
  brightBlue: "#03c2e6",
  brightCyan: "#03c2e6",
  blue: "#03c2e6",
  white: "#d0d0d0",
  brightBlack: "#808080",
  brightWhite: "#ffffff"
};

const darkTheme = {
  ...defaultTheme,
  foreground: "#fff",
  background: "#1e1e1e",
  cursor: "rgba(255, 255, 255, .4)",
  selection: "rgba(255, 255, 255, 0.3)",
  magenta: "#e83030",
  brightMagenta: "#e83030"
};

export default {
  clientState: true,

  props: {
    content: {
      type: String,
      default: undefined
    },
    autoSize: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => ({})
    },
    darkMode: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      term: {},
      fitAddon: {},
      openedYet: false
    };
  },

  computed: {
    theme() {
      if (this.darkMode) {
        return darkTheme;
      } else {
        return defaultTheme;
      }
    }
  },

  watch: {
    content: "setContent",

    darkMode(value, oldValue) {
      if (typeof oldValue === "undefined") {
        // console.log("darkmode watch");
        // this.initTerminal();
      } else if (this.terminal) {
        this.terminal.setOption("theme", this.theme);
      }
    }
  },

  beforeDestroy() {
    this.terminal.dispose();
  },

  // updated() {
  //   this.open();
  // },

  methods: {
    open() {
      this.terminal = new Terminal({
        // cols: this.cols,
        // rows: this.rows,
        theme: this.theme
        // ...this.options,
      });
      this.terminal.loadAddon(new WebLinksAddon());
      // this.fitAddon = new FitAddon();
      // this.terminal.loadAddon(this.fitAddon);
      this.terminal.open(this.$el); //$refs.render);

      this.terminal._core.viewport.scrollBarWidth = 14;

      this.terminal.onblur = () => this.$emit("blur");
      this.terminal.onfocus = () => this.$emit("focus");

      this.mountedYet = true;
      if (this.autoSize) {
        this.$nextTick(this.fit);
      }
    },

    filterAnsi(str, len) {
      if (!len || len < 10) return str; // probably not a valid console -- send back the whole line
      var count = 0, // number of visible chars on line so far
        esc = false, // in an escape sequence
        longesc = false; // in a multi-character escape sequence
      var outp = true; // should output this character
      return str
        .split("")
        .filter(function(c) {
          // filter characters...
          if (esc && !longesc && c == "[") longesc = true; // have seen an escape, now '[', start multi-char escape
          if (c == "\x1b") esc = true; // start of escape sequence

          outp = count < len || esc; // if length exceeded, don't output non-escape chars
          if (!esc && !longesc) count++; // if not in escape, count visible char

          if (esc && !longesc && c != "\x1b") esc = false; // out of single char escape
          if (longesc && c != "[" && c >= "@" && c <= "~") {
            esc = false;
            longesc = false;
          } // end of multi-char escape

          return outp; // result for filter
        })
        .join(""); // glue chars back into string
    },

    truncate(x) {
      var full = this.filterAnsi(x, 1000);
      var trunc = this.filterAnsi(x, this.terminal.cols - 4);

      return trunc.length === full.length ? trunc : trunc + "...";
    },

    setContent(value, ln = true) {
      if (!this.openedYet) {
        this.open();
        this.openedYet = true;
      }
      if (value.indexOf("\n") !== -1) {
        value.split("\n").forEach(t => this.setContent(t));
        return;
      }
      if (typeof value === "string") {
        this.terminal[ln ? "writeln" : "write"](this.truncate(value));
      } else {
        this.terminal.writeln("");
      }
    },

    addLog(log) {
      this.setContent(log.text, log.type === "stdout");
    },

    clear() {
      this.terminal.clear();
    },

    scrollToBottom() {
      this.terminal.scrollToBottom();
    },

    copyContent() {
      const textarea = this.terminal.textarea;
      if (!textarea) {
        return;
      }
      const textValue = textarea.value;
      const emptySelection = !this.terminal.hasSelection();
      try {
        if (emptySelection) {
          this.terminal.selectAll();
        }
        var selection = this.terminal.getSelection();
        textarea.value = selection;
        textarea.select();
        document.execCommand("copy");
      } finally {
        textarea.value = textValue;
        if (emptySelection) {
          this.terminal.clearSelection();
        }
      }
    },

    async fit() {
      if (!this.terminal) return;
      this.terminal.element.style.display = "none";
      await this.$nextTick();
      // this.fitAddon.fit();
      const dims = this.proposeDimensions();
      this.terminal._core._renderService.clear();
      this.terminal.resize(dims.cols, dims.rows);
      this.terminal.element.style.display = "";
      this.terminal.refresh(0, this.terminal.rows - 1);
    },

    proposeDimensions() {
      // TODO: Remove reliance on private API
      const core = this.terminal._core;
      core._renderService._fullRefresh();

      // console.log(this.terminal);

      const parentElementStyle = window.getComputedStyle(
        this.terminal.element.parentElement
      );
      const parentElementHeight = parseInt(
        parentElementStyle.getPropertyValue("height")
      );
      const parentElementWidth = Math.max(
        0,
        parseInt(parentElementStyle.getPropertyValue("width"))
      );
      const elementStyle = window.getComputedStyle(this.terminal.element);
      const elementPadding = {
        top: parseInt(elementStyle.getPropertyValue("padding-top")),
        bottom: parseInt(elementStyle.getPropertyValue("padding-bottom")),
        right: parseInt(elementStyle.getPropertyValue("padding-right")),
        left: parseInt(elementStyle.getPropertyValue("padding-left"))
      };
      const elementPaddingVer = elementPadding.top + elementPadding.bottom;
      const elementPaddingHor = elementPadding.right + elementPadding.left;
      const availableHeight = parentElementHeight - elementPaddingVer;
      const availableWidth =
        parentElementWidth - elementPaddingHor - core.viewport.scrollBarWidth;

      // console.log({
      //   parentElementHeight,
      //   parentElementWidth,
      //   availableHeight,
      //   availableWidth,
      //   elementPaddingVer,
      //   elementPaddingHor,
      //   cellWidth: core._renderService.dimensions.actualCellWidth,
      //   cellHeight: core._renderService.dimensions.actualCellHeight
      // });

      const geometry = {
        cols: Math.max(
          2,
          Math.floor(
            availableWidth / core._renderService.dimensions.actualCellWidth
          ) - 1
        ),
        rows: Math.max(
          1,
          Math.floor(
            availableHeight / core._renderService.dimensions.actualCellHeight
          )
        )
      };
      return geometry;
    },

    focus() {
      this.terminal.focus();
    },

    blur() {
      this.terminal.blur();
    }
  }
};
</script>

<style>
.xterm-container {
  height: 100%;
  width: 100%;

  background-color: #1e1e1e;
}
.xterm {
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
}

.xterm-viewport::-webkit-scrollbar {
  width: 14px;
  border-left: #4a4a4a 1px solid;
}

.xterm-viewport::-webkit-scrollbar-thumb {
  background-color: #414141;
  border-left: #4a4a4a 1px solid;
}
</style>
