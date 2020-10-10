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
import LuminoWidget from "@/components/lumino-widget";
import SideBarHandler from "./SideBar";
import PanelHandler from "./PanelHandler";
import {
  BoxPanel,
  DockPanel,
  BoxLayout,
  SplitPanel,
  Widget,
  Menu,
  MenuBar,
} from "@lumino/widgets";

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
      shellWidget: new Widget(),
      rootLayout: new BoxLayout(),
      topHandler: new PanelHandler(),
      hboxPanel: new BoxPanel(),
      leftHandler: new SideBarHandler(),
      hsplitPanel: new SplitPanel(),
      dockPanel: new DockPanel(),
      bottomPanel: new BoxPanel(),
      widgets: [],
      commands: new CommandRegistry(),
      mainMenu: new MenuBar(),
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
    this.shellWidget.addClass("jp-LabShell");
    this.shellWidget.id = "main";

    this.topHandler.panel.id = "jp-top-panel";
    this.hboxPanel.id = "jp-main-content-panel";
    this.dockPanel.id = "jp-main-dock-panel";
    this.hsplitPanel.id = "jp-main-split-panel";
    this.bottomPanel.id = "jp-bottom-panel";

    this.leftHandler.sideBar.addClass("jp-SideBar");
    this.leftHandler.sideBar.addClass("jp-mod-left");
    this.leftHandler.stackedPanel.id = "jp-left-stack";

    this.hboxPanel.spacing = 0;
    this.dockPanel.spacing = 5;
    this.hsplitPanel.spacing = 1;

    this.hboxPanel.direction = "left-to-right";
    this.hsplitPanel.orientation = "horizontal";
    this.bottomPanel.direction = "bottom-to-top";

    SplitPanel.setStretch(this.leftHandler.stackedPanel, 0);
    SplitPanel.setStretch(this.dockPanel, 1);

    BoxPanel.setStretch(this.leftHandler.sideBar, 0);
    BoxPanel.setStretch(this.hsplitPanel, 1);

    this.hsplitPanel.addWidget(this.leftHandler.stackedPanel);
    this.hsplitPanel.addWidget(this.dockPanel);

    this.hboxPanel.addWidget(this.leftHandler.sideBar);
    this.hboxPanel.addWidget(this.hsplitPanel);

    this.rootLayout.direction = "top-to-bottom";
    this.rootLayout.spacing = 0;

    this.hsplitPanel.setRelativeSizes([1, 2.5]);

    BoxLayout.setStretch(this.topHandler.panel, 0);
    BoxLayout.setStretch(this.hboxPanel, 1);
    BoxLayout.setStretch(this.bottomPanel, 0);

    this.shellWidget.layout = this.rootLayout;
    this.rootLayout.addWidget(this.topHandler.panel);
    this.rootLayout.addWidget(this.hboxPanel);
    this.rootLayout.addWidget(this.bottomPanel);

    this.bottomPanel.hide();

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

    createMainMenu() {
      let menu1 = this.createMenu();
      menu1.title.label = "File";
      menu1.title.mnemonic = 0;

      let menu2 = this.createMenu();
      menu2.title.label = "Edit";
      menu2.title.mnemonic = 0;

      let menu3 = this.createMenu();
      menu3.title.label = "View";
      menu3.title.mnemonic = 0;

      this.mainMenu.addMenu(menu1);
      this.mainMenu.addMenu(menu2);
      this.mainMenu.addMenu(menu3);

      this.mainMenu.id = "jp-MainMenu";
      this.mainMenu.addClass("jp-scrollbar-tiny");
      this.topHandler.addWidget(this.mainMenu);
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
      this.$children
        .filter((child) => !this.widgets.includes(child.$attrs.id))
        .forEach((newChild) => {
          console.log(newChild.$attrs);
          const id = `${newChild.$attrs.id}`;
          const title = newChild.$attrs.title || undefined;
          const icon = newChild.$attrs.icon || undefined;
          const area = newChild.$attrs.area || "dock";
          const closable = "closable" in newChild.$attrs || false;
          const refName = newChild.$attrs["dock-ref"] || undefined;
          const mode = newChild.$attrs["dock-mode"] || undefined;
          const ref = this.widgets.find((x) => x.id == refName);

          this.addWidget(id, area, { title, icon, closable, ref, mode });
          this.$nextTick(() => {
            document.getElementById(id).appendChild(newChild.$el);
          });
        });
    },

    addWidget(id, area, options) {
      const luminoWidget = new LuminoWidget(id, options);
      this.widgets.push(luminoWidget);
      if (area == "dock") {
        this.dockPanel.addWidget(luminoWidget, options);
      } else {
        this.leftHandler.addWidget(luminoWidget, options);
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
      console.log("widget resize: ", customEvent);
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
      document
        .getElementById(id)
        .removeEventListener("lumino:deleted", this.onWidgetDeleted);
      document
        .getElementById(id)
        .removeEventListener("lumino:activated", this.onWidgetActivated);
      this.$emit("lumino:deleted", customEvent.detail);
    },
  },
};
</script>

<style>
@import url("~@lumino/widgets/style/index.css");
@import "../assets/materialcolors.css";
@import "../assets/variables.css";
@import "../assets/base.css";

.lm-TabBar-tabIcon,
.lm-TabBar-tabLabel,
.lm-TabBar-tabCloseIcon {
  display: inline-block;
}

.lm-TabBar-tab.lm-mod-closable > .lm-TabBar-tabCloseIcon {
  margin-left: 4px;
}

.lm-TabBar-tab.lm-mod-closable > .lm-TabBar-tabCloseIcon:before {
  content: "\f00d";
  font-family: FontAwesome;
}

.fileBrowserIcon {
  align-self: center;
}

.fileBrowserIcon:before {
  content: "\f00d";
  font-family: FontAwesome;
}

.jp-FileBrowser {
  display: flex;
  flex-direction: column;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}
</style>
