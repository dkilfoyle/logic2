<!--Adapted from vue-lumino Copyright 2020 Bruno P. Kinoshita -->

<template>
  <div>
    <div ref="shell"></div>
    <div v-show="false">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { CommandRegistry } from "@lumino/commands";
import { Widget, Menu, MenuBar } from "@lumino/widgets";
import LuminoWidget from "@/components/lumino/lumino-widget";
// import ShellWidget from "@/components/lumino/shell-widget";
import { LabShell } from "@/components/lumino/Shell.js";
import { StatusBar } from "@/components/lumino/StatusBar.js";

export default {
  name: "Lumino",

  props: {
    tabTitleProp: {
      type: String,
      default: "name"
    }
  },

  data() {
    return {
      widgets: [],
      widgetIDs: [],
      commands: new CommandRegistry(),
      mainMenu: new MenuBar(),
      shellWidget: null,
      statusBar: null
    };
  },

  // rootLayout
  // -- topHandler.panel (jp-top-panel)
  // -- hboxPanel (jp-main-content-panel)
  // ------ leftHandler.sideBar
  // ------ hsplitPanel (jp-main-split-panel)
  // ---------- lefHandler.stackedPanel (jp-left-stack)
  // ---------- dockPanel (jp-main-dock-panel)
  // -- bottomPanel (jp-bottom-panel)

  created() {
    // this.shellWidget = new ShellWidget();
    this.shellWidget = new LabShell();
    this.statusBar = new StatusBar();
    this.statusBar.id = "jp-statusbar";
    this.shellWidget.add(this.statusBar, "bottom");

    window.onresize = () => {
      this.shellWidget.update();
    };

    this.createCommands();
    this.createMainMenu();

    this.$nextTick(() => {
      // Widget.attach(bar, this.$refs.screen);
      Widget.attach(this.shellWidget, this.$refs.shell);
      this.syncWidgets();
    });
  },

  updated() {
    this.syncWidgets();
  },

  methods: {
    createMainMenu() {
      let fileMenu = new Menu({ commands: this.commands });
      fileMenu.title.label = "File";
      fileMenu.addItem({ command: "file:new-tab" });
      fileMenu.addItem({ type: "separator" });
      fileMenu.addItem({ command: "file:compile" });
      fileMenu.addItem({ command: "file:simulate" });

      let editMenu = new Menu({ commands: this.commands });
      editMenu.title.label = "Edit";
      editMenu.addItem({ command: "edit:undo" });
      editMenu.addItem({ command: "edit:redo" });
      editMenu.addItem({ type: "separator" });
      editMenu.addItem({ command: "edit:cut" });
      editMenu.addItem({ command: "edit:copy" });
      editMenu.addItem({ command: "edit:paste" });
      editMenu.addItem({ type: "separator" });
      editMenu.addItem({ command: "edit:find" });
      editMenu.addItem({ command: "edit:replace" });
      editMenu.addItem({ type: "separator" });
      editMenu.addItem({ command: "edit:toggle-comment" });

      let viewMenu = new Menu({ commands: this.commands });
      viewMenu.title.label = "View";
      viewMenu.addItem({ command: "view:gates" });
      viewMenu.addItem({ command: "view:schematic" });
      viewMenu.addItem({ command: "view:terminal" });

      this.mainMenu.addMenu(fileMenu);
      this.mainMenu.addMenu(editMenu);
      this.mainMenu.addMenu(viewMenu);

      this.mainMenu.id = "jp-MainMenu";
      this.mainMenu.addClass("jp-scrollbar-tiny");
      // this.shellWidget.topHandler.addWidget(this.mainMenu);
      this.shellWidget.add(this.mainMenu, "top");
    },

    createCommands() {
      this.commands.addCommand("file:new-tab", {
        label: "New Tab",
        mnemonic: 0,
        caption: "Open a new tab",
        execute: () => {
          console.log("New Tab");
        }
      });
      this.commands.addCommand("file:compile", {
        label: "Compile",
        mnemonic: 0,
        caption: "Compile current file",
        execute: () => {
          console.log("Compile");
        }
      });
      this.commands.addCommand("file:simulate", {
        label: "Simulate",
        mnemonic: 0,
        caption: "Simulate current file",
        execute: () => {
          console.log("Simulate");
        }
      });

      this.commands.addCommand("edit:cut", {
        label: "Cut",
        mnemonic: 1,
        iconClass: "fa fa-cut",
        execute: () => {
          console.log("Cut");
        }
      });

      this.commands.addCommand("edit:copy", {
        label: "Copy",
        mnemonic: 0,
        iconClass: "fa fa-copy",
        execute: () => {
          console.log("Copy");
        }
      });

      this.commands.addCommand("edit:paste", {
        label: "Paste",
        mnemonic: 0,
        iconClass: "fa fa-paste",
        execute: () => {
          console.log("Paste");
        }
      });

      this.commands.addCommand("edit:find", {
        label: "Find",
        mnemonic: 1,
        iconClass: "fa fa-cut",
        execute: () => {
          console.log("find");
        }
      });

      this.commands.addCommand("edit:replace", {
        label: "Replace",
        mnemonic: 0,
        iconClass: "fa fa-copy",
        execute: () => {
          console.log("replace");
        }
      });

      this.commands.addCommand("edit:toggle-comment", {
        label: "Toggle Comment",
        mnemonic: 0,
        iconClass: "fa fa-paste",
        execute: () => {
          console.log("Paste");
        }
      });

      this.commands.addCommand("view:gates", {
        label: "View Gates",
        mnemonic: 2,
        caption: "View Gates",
        execute: () => {
          console.log("view gates");
        }
      });
      this.commands.addCommand("view:schematic", {
        label: "View Schematic",
        mnemonic: 2,
        caption: "View Schematic",
        execute: () => {
          console.log("view schematic");
        }
      });
      this.commands.addCommand("view:terminal", {
        label: "View Terminal",
        mnemonic: 2,
        caption: "View Terminal",
        execute: () => {
          console.log("view terminal");
        }
      });

      this.commands.addKeyBinding({
        keys: ["Accel X"],
        selector: "body",
        command: "edit:cut"
      });

      this.commands.addKeyBinding({
        keys: ["Accel C"],
        selector: "body",
        command: "edit:copy"
      });

      this.commands.addKeyBinding({
        keys: ["Accel V"],
        selector: "body",
        command: "edit:paste"
      });
    },

    syncWidgets() {
      this.$slots.default
        .filter(child => !this.widgetIDs.includes(child.data.attrs.id))
        .forEach(newChild => {
          const id = `${newChild.data.attrs.id}`;
          const title = newChild.data.attrs.title || undefined;
          const icon = newChild.data.attrs.icon || undefined;
          const area = newChild.data.attrs.area || "dock";
          const closable =
            ("closable" in newChild.data.attrs &&
              newChild.data.attrs.closable) ||
            false;
          const refName = newChild.data.attrs["dock-ref"] || undefined;
          const mode = newChild.data.attrs["dock-mode"] || undefined;
          const align = newChild.data.attrs["align"] || undefined;
          const rank = newChild.data.attrs["rank"] || undefined;
          const activate = newChild.data.attrs["activate"] || undefined;
          const ref = this.widgets.find(x => x.id == refName);

          this.addWidget(id, area, {
            title,
            icon,
            closable,
            ref,
            mode,
            align,
            rank,
            activate
          });
          this.$nextTick(() => {
            document.getElementById(id).appendChild(newChild.elm); //newChild.$el);
          });
        });
    },

    addWidget(id, area, options) {
      console.log("Lumino.vue addWidget: ", id, area, options);
      let luminoWidget = new LuminoWidget(id, options);
      this.widgets.push(luminoWidget);
      this.widgetIDs.push(id);

      switch (area) {
        case "main":
          this.shellWidget.add(luminoWidget, "main", options);
          break;
        case "statusbar":
          this.statusBar.registerStatusItem(id, {
            item: luminoWidget,
            ...options
          });
          break;
        case "left":
          this.shellWidget.add(luminoWidget, "left", options);
          break;
        case "right":
          this.shellWidget.add(luminoWidget, "right", options);
          break;
        default:
          console.log("addWidget: invalid area option = ", area);
          return;
      }

      // give time for Lumino's widget DOM element to be created
      this.$nextTick(() => {
        document
          .getElementById(id)
          .addEventListener("lumino:activated", this.onWidgetActivated);
        document
          .getElementById(id)
          .addEventListener("lumino:deleted", this.onWidgetDeleted);
        document
          .getElementById(id)
          .addEventListener("lumino:resize", this.onWidgetResize);
      });
    },

    onWidgetResize(customEvent) {
      // console.log("widget resize: ", customEvent);
      this.$emit("resize", customEvent.detail);
    },

    onWidgetActivated(customEvent) {
      // console.log("Lumino.vue: onWidgetActivated: ", customEvent);
      this.$emit("activated", customEvent.detail);
    },

    onWidgetDeleted(customEvent) {
      const id = customEvent.detail.id;
      const index = this.widgetIDs.indexOf(id);
      this.widgets.splice(index, 1);
      this.widgetIDs.splice(index, 1);
      document
        .getElementById(id)
        .removeEventListener("lumino:deleted", this.onWidgetDeleted);
      document
        .getElementById(id)
        .removeEventListener("lumino:activated", this.onWidgetActivated);
      this.$emit("lumino:deleted", customEvent.detail);
    }
  }
};
</script>

<style>
@import url("~@lumino/widgets/style/index.css");
@import "../../assets/materialcolors.css";
@import "../../assets/variables.css";
@import "../../assets/base.css";

/* .lm-TabBar-tabIcon,
.lm-TabBar-tabLabel,
.lm-TabBar-tabCloseIcon {
  display: inline-block;
}

.lm-TabBar-tab.lm-mod-closable > .lm-TabBar-tabCloseIcon {
  margin-left: 4px;
} */

.lm-TabBar-tab.lm-mod-closable > .lm-TabBar-tabCloseIcon:before {
  content: "\f00d";
  font-family: FontAwesome;
}

.jp-statusbar {
  background: var(--jp-layout-color2);
  min-height: 24px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
}

.jp-statusbar-side {
  display: flex;
  align-items: center;
}

.jp-statusbar-left {
  flex-direction: row;
}

.jp-statusbar-right {
  flex-direction: row-reverse;
}

.jp-statusbar-item {
  max-height: 24px;
  margin-left: 2px;
  margin-right: 2px;
  height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 6px;
  padding-right: 6px;
  font-family: var(--jp-ui-font-family);
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  line-height: 24px;
}
</style>
