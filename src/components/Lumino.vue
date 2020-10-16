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
    createMainMenu() {
      let fileMenu = new Menu({commands: this.commands});
      fileMenu.title.label = "File"
      fileMenu.addItem({command: "file:new-tab"})
      fileMenu.addItem({type: "separator"})
      fileMenu.addItem({command: "file:compile"})
      fileMenu.addItem({command: "file:simulate"})

      let editMenu = new Menu({commands: this.commands});
      editMenu.title.label = "Edit"
      editMenu.addItem({command: "edit:undo"})
      editMenu.addItem({command: "edit:redo"})
      editMenu.addItem({type: "separator"})
      editMenu.addItem({command: "edit:cut"})
      editMenu.addItem({command: "edit:copy"})
      editMenu.addItem({command: "edit:paste"})
      editMenu.addItem({type: "separator"})
      editMenu.addItem({command: "edit:find"})
      editMenu.addItem({command: "edit:replace"})
      editMenu.addItem({type: "separator"})
      editMenu.addItem({command: "edit:toggle-comment"})

      let viewMenu = new Menu({commands: this.commands})
      viewMenu.title.label = "View"
      viewMenu.addItem({command: "view:gates"})
      viewMenu.addItem({command: "view:schematic"})
      viewMenu.addItem({command: "view:terminal"})

      this.mainMenu.addMenu(fileMenu);
      this.mainMenu.addMenu(editMenu);
      this.mainMenu.addMenu(viewMenu);

      this.mainMenu.id = "jp-MainMenu";
      this.mainMenu.addClass("jp-scrollbar-tiny");
      this.topHandler.addWidget(this.mainMenu);
    },

    createCommands() {

      this.commands.addCommand("file:new-tab", {
        label: "New Tab",
        mnemonic: 0,
        caption: "Open a new tab",
        execute: () => {
          console.log("New Tab");
        },
      });
      this.commands.addCommand("file:compile", {
        label: "Compile",
        mnemonic: 0,
        caption: "Compile current file",
        execute: () => {
          console.log("Compile");
        },
      });
      this.commands.addCommand("file:simulate", {
        label: "Simulate",
        mnemonic: 0,
        caption: "Simulate current file",
        execute: () => {
          console.log("Simulate");
        },
      });


      this.commands.addCommand("edit:cut", {
        label: "Cut",
        mnemonic: 1,
        iconClass: "fa fa-cut",
        execute: () => {
          console.log("Cut");
        },
      });

      this.commands.addCommand("edit:copy", {
        label: "Copy",
        mnemonic: 0,
        iconClass: "fa fa-copy",
        execute: () => {
          console.log("Copy");
        },
      });

      this.commands.addCommand("edit:paste", {
        label: "Paste",
        mnemonic: 0,
        iconClass: "fa fa-paste",
        execute: () => {
          console.log("Paste");
        },
      });

      this.commands.addCommand("edit:find", {
        label: "Find",
        mnemonic: 1,
        iconClass: "fa fa-cut",
        execute: () => {
          console.log("find");
        },
      });

      this.commands.addCommand("edit:replace", {
        label: "Replace",
        mnemonic: 0,
        iconClass: "fa fa-copy",
        execute: () => {
          console.log("replace");
        },
      });

      this.commands.addCommand("edit:toggle-comment", {
        label: "Toggle Comment",
        mnemonic: 0,
        iconClass: "fa fa-paste",
        execute: () => {
          console.log("Paste");
        },
      });



      this.commands.addCommand("view:gates", {
        label: "View Gates",
        mnemonic: 2,
        caption: "View Gates",
        execute: () => {
          console.log("view gates");
        },
      });
      this.commands.addCommand("view:schematic", {
        label: "View Schematic",
        mnemonic: 2,
        caption: "View Schematic",
        execute: () => {
          console.log("view schematic");
        },
      });
      this.commands.addCommand("view:terminal", {
        label: "View Terminal",
        mnemonic: 2,
        caption: "View Terminal",
        execute: () => {
          console.log("view terminal");
        },
      });


      this.commands.addKeyBinding({
        keys: ["Accel X"],
        selector: "body",
        command: "edit:cut",
      });

      this.commands.addKeyBinding({
        keys: ["Accel C"],
        selector: "body",
        command: "edit:copy",
      });

      this.commands.addKeyBinding({
        keys: ["Accel V"],
        selector: "body",
        command: "edit:paste",
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
      this.$emit("resize", customEvent)
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
