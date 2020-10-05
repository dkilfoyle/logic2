<!--Adapted from vue-lumino Copyright 2020 Bruno P. Kinoshita -->

<template>
  <div>
    <div ref="screen"></div>
    <div id="workflow-panel">
      <div ref="main" id="main" class="pa-4 fill-height"></div>
      <div v-show="false">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { CommandRegistry } from "@lumino/commands";
import LuminoWidget from "@/components/lumino-widget";
import { BoxPanel, DockPanel, Widget, Menu, MenuBar } from "@lumino/widgets";

export default {
  name: "Lumino",

  props: {
    tabTitleProp: {
      type: String,
      default: "name",
    },
  },

  data() {
    return {
      // create a box panel, which holds the dock panel, and controls its layout
      main: new BoxPanel({ direction: "left-to-right", spacing: 0 }),
      // create dock panel, which holds the widgets
      dock: new DockPanel(),
      widgets: [],
      commands: new CommandRegistry(),
    };
  },

  created() {
    this.dock.id = "dock";
    this.main.id = "main";
    this.main.addWidget(this.dock);
    window.onresize = () => {
      this.main.update();
    };
    BoxPanel.setStretch(this.dock, 1);

    this.createCommands();
    let menu1 = this.createMenu();
    menu1.title.label = "File";
    menu1.title.mnemonic = 0;

    let menu2 = this.createMenu();
    menu2.title.label = "Edit";
    menu2.title.mnemonic = 0;

    let menu3 = this.createMenu();
    menu3.title.label = "View";
    menu3.title.mnemonic = 0;

    let bar = new MenuBar();
    bar.addMenu(menu1);
    bar.addMenu(menu2);
    bar.addMenu(menu3);
    bar.id = "menuBar";

    const vm = this;
    this.$nextTick(() => {
      Widget.attach(bar, vm.$refs.screen);
      Widget.attach(vm.main, vm.$refs.main);
      this.syncWidgets();
    });
  },

  updated() {
    this.syncWidgets();
  },

  methods: {
    createMenu() {
      let sub1 = new Menu({ commands: this.commands });
      sub1.title.label = "More...";
      sub1.title.mnemonic = 0;
      sub1.addItem({ command: "example:one" });
      sub1.addItem({ command: "example:two" });
      sub1.addItem({ command: "example:three" });
      sub1.addItem({ command: "example:four" });

      let sub2 = new Menu({ commands: this.commands });
      sub2.title.label = "More...";
      sub2.title.mnemonic = 0;
      sub2.addItem({ command: "example:one" });
      sub2.addItem({ command: "example:two" });
      sub2.addItem({ command: "example:three" });
      sub2.addItem({ command: "example:four" });
      sub2.addItem({ type: "submenu", submenu: sub1 });

      let root = new Menu({ commands: this.commands });
      root.addItem({ command: "example:copy" });
      root.addItem({ command: "example:cut" });
      root.addItem({ command: "example:paste" });
      root.addItem({ type: "separator" });
      root.addItem({ command: "example:new-tab" });
      root.addItem({ command: "example:close-tab" });
      root.addItem({ command: "example:save-on-exit" });
      root.addItem({ type: "separator" });
      root.addItem({ command: "example:open-task-manager" });
      root.addItem({ type: "separator" });
      root.addItem({ type: "submenu", submenu: sub2 });
      root.addItem({ type: "separator" });
      root.addItem({ command: "example:close" });

      return root;
    },

    createCommands() {
      this.commands.addCommand("example:cut", {
        label: "Cut",
        mnemonic: 1,
        iconClass: "fa fa-cut",
        execute: () => {
          console.log("Cut");
        },
      });

      this.commands.addCommand("example:copy", {
        label: "Copy File",
        mnemonic: 0,
        iconClass: "fa fa-copy",
        execute: () => {
          console.log("Copy");
        },
      });

      this.commands.addCommand("example:paste", {
        label: "Paste",
        mnemonic: 0,
        iconClass: "fa fa-paste",
        execute: () => {
          console.log("Paste");
        },
      });

      this.commands.addCommand("example:new-tab", {
        label: "New Tab",
        mnemonic: 0,
        caption: "Open a new tab",
        execute: () => {
          console.log("New Tab");
        },
      });

      this.commands.addCommand("example:close-tab", {
        label: "Close Tab",
        mnemonic: 2,
        caption: "Close the current tab",
        execute: () => {
          console.log("Close Tab");
        },
      });

      this.commands.addCommand("example:save-on-exit", {
        label: "Save on Exit",
        mnemonic: 0,
        caption: "Toggle the save on exit flag",
        execute: () => {
          console.log("Save on Exit");
        },
      });

      this.commands.addCommand("example:open-task-manager", {
        label: "Task Manager",
        mnemonic: 5,
        isEnabled: () => false,
        execute: () => {},
      });

      this.commands.addCommand("example:close", {
        label: "Close",
        mnemonic: 0,
        iconClass: "fa fa-close",
        execute: () => {
          console.log("Close");
        },
      });

      this.commands.addCommand("example:one", {
        label: "One",
        execute: () => {
          console.log("One");
        },
      });

      this.commands.addCommand("example:two", {
        label: "Two",
        execute: () => {
          console.log("Two");
        },
      });

      this.commands.addCommand("example:three", {
        label: "Three",
        execute: () => {
          console.log("Three");
        },
      });

      this.commands.addCommand("example:four", {
        label: "Four",
        execute: () => {
          console.log("Four");
        },
      });

      this.commands.addCommand("example:black", {
        label: "Black",
        execute: () => {
          console.log("Black");
        },
      });

      this.commands.addCommand("example:clear-cell", {
        label: "Clear Cell",
        execute: () => {
          console.log("Clear Cell");
        },
      });

      this.commands.addCommand("example:cut-cells", {
        label: "Cut Cell(s)",
        execute: () => {
          console.log("Cut Cell(s)");
        },
      });

      this.commands.addCommand("example:run-cell", {
        label: "Run Cell",
        execute: () => {
          console.log("Run Cell");
        },
      });

      this.commands.addCommand("example:cell-test", {
        label: "Cell Test",
        execute: () => {
          console.log("Cell Test");
        },
      });

      this.commands.addCommand("notebook:new", {
        label: "New Notebook",
        execute: () => {
          console.log("New Notebook");
        },
      });

      this.commands.addKeyBinding({
        keys: ["Accel X"],
        selector: "body",
        command: "example:cut",
      });

      this.commands.addKeyBinding({
        keys: ["Accel C"],
        selector: "body",
        command: "example:copy",
      });

      this.commands.addKeyBinding({
        keys: ["Accel V"],
        selector: "body",
        command: "example:paste",
      });

      this.commands.addKeyBinding({
        keys: ["Accel J", "Accel J"],
        selector: "body",
        command: "example:new-tab",
      });

      this.commands.addKeyBinding({
        keys: ["Accel M"],
        selector: "body",
        command: "example:open-task-manager",
      });
    },

    syncWidgets() {
      const tabTitleProp = this.$props.tabTitleProp;
      this.$children
        .filter((child) => !this.widgets.includes(child.$attrs.id))
        .forEach((newChild) => {
          const id = `${newChild.$attrs.id}`;
          const name = newChild.$attrs[tabTitleProp] ? newChild.$attrs[tabTitleProp] : newChild.$options.name;
          this.addWidget(id, name);
          this.$nextTick(() => {
            document.getElementById(id).appendChild(newChild.$el);
          });
        });
    },

    addWidget(id, name, dockOptions) {
      this.widgets.push(id);
      const luminoWidget = new LuminoWidget(id, name, /* closable */ true);
      this.dock.addWidget(luminoWidget, dockOptions);
      // give time for Lumino's widget DOM element to be created
      this.$nextTick(() => {
        document.getElementById(id).addEventListener("lumino:activated", this.onWidgetActivated);
        document.getElementById(id).addEventListener("lumino:deleted", this.onWidgetDeleted);
      });
    },

    /**
     * React to a deleted event.
     *
     * @param customEvent {
     *   detail: {
     *     id: string,
     *     name: string,
     *     closable: boolean
     *   }
     * }}
     */
    onWidgetActivated(customEvent) {
      this.$emit("lumino:activated", customEvent.detail);
    },

    /**
     * React to a deleted event.
     *
     * @param customEvent {
     *   detail: {
     *     id: string,
     *     name: string,
     *     closable: boolean
     *   }
     * }}
     */
    onWidgetDeleted(customEvent) {
      const id = customEvent.detail.id;
      this.widgets.splice(this.widgets.indexOf(id), 1);
      document.getElementById(id).removeEventListener("lumino:deleted", this.onWidgetDeleted);
      document.getElementById(id).removeEventListener("lumino:activated", this.onWidgetActivated);
      this.$emit("lumino:deleted", customEvent.detail);
    },
  },
};
</script>

<style lang="scss">
$font-size-root: 16px;
#workflow-panel {
  #main {
    display: flex;
    min-height: calc(100vh - 40px);
    padding: 4px;
    .content {
      min-width: 300px;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      padding: 8px;
      border: 1px solid #c0c0c0;
      border-top: none;
      background: white;
      position: relative;
      overflow: auto;
    }
    .p-BoxPanel {
      flex: 1 1 auto;
    }
  }
}
</style>
