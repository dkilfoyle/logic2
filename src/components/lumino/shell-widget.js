import SideBarHandler from "./SideBar";
import PanelHandler from "./PanelHandler";
import {
  BoxPanel,
  DockPanel,
  BoxLayout,
  SplitPanel,
  Widget,
  FocusTracker
} from "@lumino/widgets";
import { MessageLoop } from "@lumino/messaging";
import { Signal } from "@lumino/signaling";
import { Debouncer } from "@lumino/polling";
import { StatusBar } from "./StatusBar";

export default class ShellWidget extends Widget {
  constructor() {
    super();

    this.tracker = new FocusTracker();
    this.rootLayout = new BoxLayout();
    this.topHandler = new PanelHandler();
    this.hboxPanel = new BoxPanel();
    this.leftHandler = new SideBarHandler();
    this.hsplitPanel = new SplitPanel();
    this.dockPanel = new DockPanel();
    this.bottomPanel = new BoxPanel();
    this.statusBar = new StatusBar();

    this.dockChildHook = (handler, msg) => {
      console.log("onDockChild: ", handler, msg);
      switch (msg.type) {
        case "child-added":
          msg.child.addClass("jp-Activity");
          this.tracker.add(msg.child);
          break;
        case "child-removed":
          msg.child.removeClass("jp-Activity");
          this.tracker.remove(msg.child);
          break;
        default:
          break;
      }
      return true;
    };

    MessageLoop.installMessageHook(this.dockPanel, this.dockChildHook);

    this.addClass("jp-LabShell");
    this.id = "main";

    this.activeChanged = new Signal(this);
    this.currentChanged = new Signal(this);
    this.layoutModified = new Signal(this);
    this.layoutDebouncer = new Debouncer(() => {
      this.layoutModified.emit(undefined);
    }, 0);

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

    this.hsplitPanel.setRelativeSizes([1, 3.5]);

    BoxLayout.setStretch(this.topHandler.panel, 0);
    BoxLayout.setStretch(this.hboxPanel, 1);
    BoxLayout.setStretch(this.bottomPanel, 0);

    this.layout = this.rootLayout;
    this.rootLayout.addWidget(this.topHandler.panel);
    this.rootLayout.addWidget(this.hboxPanel);
    this.rootLayout.addWidget(this.bottomPanel);

    // this.bottomPanel.hide();
    this.statusBar.id = "jp-statusbar";
    this.bottomPanel.addWidget(this.statusBar);

    this.tracker.currentChanged.connect(this.onCurrentChanged, this);
    this.tracker.activeChanged.connect(this.onActiveChanged, this);
    this.dockPanel.layoutModified.connect(this.onLayoutModified, this);
    this.leftHandler.sideBar.currentChanged.connect(
      this.onLayoutModified,
      this
    );

    console.log("finish constructor");
  }

  onCurrentChanged(sender, args) {
    console.log("onCurrentChanged: ", sender, args);
    if (args.newValue) {
      args.newValue.title.className += ` jp-mod-current`;
    }
    if (args.oldValue) {
      args.oldValue.title.className = args.oldValue.title.className.replace(
        "jp-mod-current",
        ""
      );
    }
    this.currentChanged.emit(args);
    this.onLayoutModified();
  }

  onActiveChanged(sender, args) {
    console.log("onActiveChanged: ", sender, args);
    if (args.newValue) {
      args.newValue.title.className += ` jp-mod-active`;
    }
    if (args.oldValue) {
      args.oldValue.title.className = args.oldValue.title.className.replace(
        "jp-mode-active",
        ""
      );
    }
    this.activeChanged.emit(args);
  }

  onLayoutModified() {
    this.layoutDebouncer.invoke();
  }
}
