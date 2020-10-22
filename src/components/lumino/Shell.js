// Adapted from JupyterLab shell.ts
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { classes, DockPanelSvg, LabIcon } from "@jupyterlab/ui-components";
import { ArrayExt, find, iter, toArray } from "@lumino/algorithm";
import { MessageLoop } from "@lumino/messaging";
import { Debouncer } from "@lumino/polling";
import { Signal } from "@lumino/signaling";

import {
  BoxLayout,
  BoxPanel,
  FocusTracker,
  Panel,
  SplitPanel,
  StackedPanel,
  TabBar,
  Widget
} from "@lumino/widgets";

const APPLICATION_SHELL_CLASS = "jp-LabShell";
const SIDEBAR_CLASS = "jp-SideBar";
const CURRENT_CLASS = "jp-mod-current";
const ACTIVE_CLASS = "jp-mod-active";
const DEFAULT_RANK = 900;
const ACTIVITY_CLASS = "jp-Activity";

export class LabShell extends Widget {
  constructor() {
    super();
    this.addClass(APPLICATION_SHELL_CLASS);
    this.id = "main";

    this._activeChanged = new Signal(this);
    this._cachedLayout = null;
    this._currentChanged = new Signal(this);
    this._currentPath = "";
    this._currentPathChanged = new Signal(this);
    this._modeChanged = new Signal(this);
    this._isRestored = false;
    this._layoutModified = new Signal(this);
    this._layoutDebouncer = new Debouncer(() => {
      this._layoutModified.emit(undefined);
    }, 0);
    this._tracker = new FocusTracker();
    this._mainOptionsCache = new Map();
    this._sideOptionsCache = new Map();

    const headerPanel = (this._headerPanel = new BoxPanel());
    // const titleHandler = (this._titleHandler = new Private.PanelHandler());
    const topHandler = (this._topHandler = new PanelHandler());
    const bottomPanel = (this._bottomPanel = new BoxPanel());
    const hboxPanel = new BoxPanel();
    const dockPanel = (this._dockPanel = new DockPanelSvg());
    MessageLoop.installMessageHook(dockPanel, this._dockChildHook);

    const hsplitPanel = new SplitPanel();
    const leftHandler = (this._leftHandler = new SideBarHandler());
    const rightHandler = (this._rightHandler = new SideBarHandler());
    const rootLayout = new BoxLayout();

    headerPanel.id = "jp-header-panel";
    // titleHandler.panel.id = 'jp-title-panel';
    topHandler.panel.id = "jp-top-panel";
    bottomPanel.id = "jp-bottom-panel";
    hboxPanel.id = "jp-main-content-panel";
    dockPanel.id = "jp-main-dock-panel";
    hsplitPanel.id = "jp-main-split-panel";

    leftHandler.sideBar.addClass(SIDEBAR_CLASS);
    leftHandler.sideBar.addClass("jp-mod-left");
    leftHandler.stackedPanel.id = "jp-left-stack";

    rightHandler.sideBar.addClass(SIDEBAR_CLASS);
    rightHandler.sideBar.addClass("jp-mod-right");
    rightHandler.stackedPanel.id = "jp-right-stack";

    hboxPanel.spacing = 0;
    dockPanel.spacing = 5;
    hsplitPanel.spacing = 1;

    headerPanel.direction = "top-to-bottom";
    hboxPanel.direction = "left-to-right";
    hsplitPanel.orientation = "horizontal";
    bottomPanel.direction = "bottom-to-top";

    SplitPanel.setStretch(leftHandler.stackedPanel, 0);
    SplitPanel.setStretch(dockPanel, 1);
    SplitPanel.setStretch(rightHandler.stackedPanel, 0);

    BoxPanel.setStretch(leftHandler.sideBar, 0);
    BoxPanel.setStretch(hsplitPanel, 1);
    BoxPanel.setStretch(rightHandler.sideBar, 0);

    hsplitPanel.addWidget(leftHandler.stackedPanel);
    hsplitPanel.addWidget(dockPanel);
    hsplitPanel.addWidget(rightHandler.stackedPanel);

    hboxPanel.addWidget(leftHandler.sideBar);
    hboxPanel.addWidget(hsplitPanel);
    hboxPanel.addWidget(rightHandler.sideBar);

    rootLayout.direction = "top-to-bottom";
    rootLayout.spacing = 0;

    hsplitPanel.setRelativeSizes([1, 2.5, 1]);

    BoxLayout.setStretch(headerPanel, 0);
    // BoxLayout.setStretch(titleHandler.panel, 0);
    BoxLayout.setStretch(topHandler.panel, 0);
    BoxLayout.setStretch(hboxPanel, 1);
    BoxLayout.setStretch(bottomPanel, 0);

    rootLayout.addWidget(headerPanel);
    // rootLayout.addWidget(titleHandler.panel);
    rootLayout.addWidget(topHandler.panel);
    rootLayout.addWidget(hboxPanel);
    rootLayout.addWidget(bottomPanel);

    // initially hiding header and bottom panel when no elements inside,
    // and the title panel as we only show that in single document mode.
    this._headerPanel.hide();
    this._bottomPanel.hide();

    this.layout = rootLayout;

    // Connect change listeners.
    this._tracker.currentChanged.connect(this._onCurrentChanged, this);
    this._tracker.activeChanged.connect(this._onActiveChanged, this);

    // Connect main layout change listener.
    this._dockPanel.layoutModified.connect(this._onLayoutModified, this);

    // Catch current changed events on the side handlers.
    this._leftHandler.sideBar.currentChanged.connect(
      this._onLayoutModified,
      this
    );
    this._rightHandler.sideBar.currentChanged.connect(
      this._onLayoutModified,
      this
    );
  }

  get activeChanged() {
    return this._activeChanged;
  }
  get activeWidget() {
    return this._tracker.activeWidget;
  }
  get currentChanged() {
    return this._currentChanged;
  }
  get currentWidget() {
    return this._tracker.currentWidget;
  }
  get layoutModified() {
    return this._layoutModified;
  }
  get leftCollapsed() {
    return !this._leftHandler.sideBar.currentTitle;
  }
  get rightCollapsed() {
    return !this._rightHandler.sideBar.currentTitle;
  }

  activateById(id) {
    if (this._leftHandler.has(id)) {
      this._leftHandler.activate(id);
      return;
    }

    const dock = this._dockPanel;
    const widget = find(dock.widgets(), value => value.id === id);

    if (widget) {
      dock.activateWidget(widget);
    }
  }

  add(widget, area, options) {
    switch (area || "main") {
      case "main":
        return this._addToMainArea(widget, options);
      case "left":
        return this._addToLeftArea(widget, options);
      case "right":
        return this._addToRightArea(widget, options);
      case "header":
        return this._addToHeaderArea(widget, options);
      case "top":
        return this._addToTopArea(widget, options);
      case "title":
        return this._addToTitleArea(widget, options);
      case "bottom":
        return this._addToBottomArea(widget, options);
      default:
        throw new Error(`Invalid area: ${area}`);
    }
  }

  collapseLeft() {
    this._leftHandler.collapse();
    this._onLayoutModified();
  }

  collapseRight() {
    this._rightHandler.collapse();
    this._onLayoutModified();
  }

  dispose() {
    if (this.isDisposed) {
      return;
    }
    this._layoutDebouncer.dispose();
    this._titleWidget.dispose();
    super.dispose();
  }

  expandLeft() {
    this._leftHandler.expand();
    this._onLayoutModified();
  }

  expandRight() {
    this._rightHandler.expand();
    this._onLayoutModified();
  }

  closeAll() {
    // Make a copy of all the widget in the dock panel (using `toArray()`)
    // before removing them because removing them while iterating through them
    // modifies the underlying data of the iterator.
    toArray(this._dockPanel.widgets()).forEach(widget => widget.close());
  }

  isEmpty(area) {
    switch (area) {
      case "left":
        return this._leftHandler.stackedPanel.widgets.length === 0;
      case "main":
        return this._dockPanel.isEmpty;
      case "header":
        return this._headerPanel.widgets.length === 0;
      case "top":
        return this._topHandler.panel.widgets.length === 0;
      case "bottom":
        return this._bottomPanel.widgets.length === 0;
      case "right":
        return this._rightHandler.stackedPanel.widgets.length === 0;
      default:
        return true;
    }
  }

  widgets(area) {
    switch (area || "main") {
      case "main":
        return this._dockPanel.widgets();
      case "left":
        return iter(this._leftHandler.sideBar.titles.map(t => t.owner));
      case "right":
        return iter(this._rightHandler.sideBar.titles.map(t => t.owner));
      case "header":
        return this._headerPanel.children();
      case "top":
        return this._topHandler.panel.children();
      case "bottom":
        return this._bottomPanel.children();
      default:
        throw new Error(`Invalid area: ${area}`);
    }
  }

  _addToLeftArea(widget, options) {
    if (!widget.id) {
      console.error("Widgets added to app shell must have unique id property.");
      return;
    }
    options = options || this._sideOptionsCache.get(widget) || {};
    this._sideOptionsCache.set(widget, options);
    const rank = "rank" in options ? options.rank : DEFAULT_RANK;
    this._leftHandler.addWidget(widget, rank);
    this._onLayoutModified();
  }

  _addToMainArea(widget, options) {
    if (!widget.id) {
      console.error("Widgets added to app shell must have unique id property.");
      return;
    }

    options = options || {};

    const dock = this._dockPanel;
    const mode = options.mode || "tab-after";
    let ref = this.currentWidget;

    if (options.ref) {
      ref = find(dock.widgets(), value => value.id === options.ref) || null;
    }

    const { title } = widget;
    // Add widget ID to tab so that we can get a handle on the tab's widget
    // (for context menu support)
    title.dataset = { ...title.dataset, id: widget.id };

    if (title.icon instanceof LabIcon) {
      // bind an appropriate style to the icon
      title.icon = title.icon.bindprops({
        stylesheet: "mainAreaTab"
      });
    } else if (typeof title.icon === "string" || !title.icon) {
      // add some classes to help with displaying css background imgs
      title.iconClass = classes(title.iconClass, "jp-Icon");
    }

    dock.addWidget(widget, { mode, ref });

    if (options.activate !== false) {
      dock.activateWidget(widget);
    }
  }

  _addToRightArea(widget, options) {
    if (!widget.id) {
      console.error("Widgets added to app shell must have unique id property.");
      return;
    }
    options = options || this._sideOptionsCache.get(widget) || {};

    const rank = "rank" in options ? options.rank : DEFAULT_RANK;

    this._sideOptionsCache.set(widget, options);
    this._rightHandler.addWidget(widget, rank);
    this._onLayoutModified();
  }

  _addToTopArea(widget, options) {
    if (!widget.id) {
      console.error("Widgets added to app shell must have unique id property.");
      return;
    }
    options = options || {};
    const rank = options.rank ?? DEFAULT_RANK;
    this._topHandler.addWidget(widget, rank);
    this._onLayoutModified();
    if (this._topHandler.panel.isHidden) {
      this._topHandler.panel.show();
    }
  }

  _addToHeaderArea(widget) {
    if (!widget.id) {
      console.error("Widgets added to app shell must have unique id property.");
      return;
    }
    // Temporary: widgets are added to the panel in order of insertion.
    this._headerPanel.addWidget(widget);
    this._onLayoutModified();

    if (this._headerPanel.isHidden) {
      this._headerPanel.show();
    }
  }

  _addToBottomArea(widget) {
    if (!widget.id) {
      console.error("Widgets added to app shell must have unique id property.");
      return;
    }
    // Temporary: widgets are added to the panel in order of insertion.
    this._bottomPanel.addWidget(widget);
    this._onLayoutModified();

    if (this._bottomPanel.isHidden) {
      this._bottomPanel.show();
    }
  }

  _onActiveChanged(sender, args) {
    console.log("_onActiveChanged: ", sender, args);
    if (args.newValue) {
      args.newValue.title.className += ` ${ACTIVE_CLASS}`;
    }
    if (args.oldValue) {
      args.oldValue.title.className = args.oldValue.title.className.replace(
        ACTIVE_CLASS,
        ""
      );
    }
    this._activeChanged.emit(args);
  }

  _onCurrentChanged(sender, args) {
    console.log("_onCurrenntChanged: ", sender, args);
    if (args.newValue) {
      args.newValue.title.className += ` ${CURRENT_CLASS}`;
    }
    if (args.oldValue) {
      args.oldValue.title.className = args.oldValue.title.className.replace(
        CURRENT_CLASS,
        ""
      );
    }
    this._currentChanged.emit(args);
    this._onLayoutModified();
  }

  _onLayoutModified() {
    void this._layoutDebouncer.invoke();
  }

  _dockChildHook = (handler, msg) => {
    switch (msg.type) {
      case "child-added":
        msg.child.addClass(ACTIVITY_CLASS);
        this._tracker.add(msg.child);
        break;
      case "child-removed":
        msg.child.removeClass(ACTIVITY_CLASS);
        this._tracker.remove(msg.child);
        break;
      default:
        break;
    }
    return true;
  };
}

/** A less-than comparison function for side bar rank items.*/
export function itemCmp(first, second) {
  return first.rank - second.rank;
}

/** Removes widgets that have been disposed from an area config, mutates area.*/
export function normalizeAreaConfig(parent, area) {
  if (!area) {
    return;
  }
  if (area.type === "tab-area") {
    area.widgets = area.widgets.filter(
      widget => !widget.isDisposed && widget.parent === parent
    );
    return;
  }
  area.children.forEach(child => {
    normalizeAreaConfig(parent, child);
  });
}

/** A class which manages a panel and sorts its widgets by rank.*/
export class PanelHandler {
  constructor() {
    this._items = new Array();
    this._panel = new Panel();
  }
  get panel() {
    return this._panel;
  }
  addWidget(widget, rank) {
    widget.parent = null;
    const item = { widget, rank };
    const index = ArrayExt.upperBound(this._items, item, itemCmp);
    ArrayExt.insert(this._items, index, item);
    this._panel.insertWidget(index, widget);
  }
}

/** A class which manages a side bar and related stacked panel. */
export class SideBarHandler {
  constructor() {
    this._items = new Array();

    this._sideBar = new TabBar({
      insertBehavior: "none",
      removeBehavior: "none",
      allowDeselect: true
    });
    this._stackedPanel = new StackedPanel();
    this._sideBar.hide();
    this._stackedPanel.hide();
    this._lastCurrent = null;
    this._sideBar.currentChanged.connect(this._onCurrentChanged, this);
    this._sideBar.tabActivateRequested.connect(
      this._onTabActivateRequested,
      this
    );
    this._stackedPanel.widgetRemoved.connect(this._onWidgetRemoved, this);
  }

  get sideBar() {
    return this._sideBar;
  }

  get stackedPanel() {
    return this._stackedPanel;
  }

  expand() {
    const previous =
      this._lastCurrent || (this._items.length > 0 && this._items[0].widget);
    if (previous) {
      this.activate(previous.id);
    }
  }

  activate(id) {
    const widget = this._findWidgetByID(id);
    if (widget) {
      this._sideBar.currentTitle = widget.title;
      widget.activate();
    }
  }

  has(id) {
    return this._findWidgetByID(id) !== null;
  }

  collapse() {
    this._sideBar.currentTitle = null;
  }

  addWidget(widget, rank) {
    widget.parent = null;
    widget.hide();
    const item = { widget, rank };
    const index = this._findInsertIndex(item);
    ArrayExt.insert(this._items, index, item);
    this._stackedPanel.insertWidget(index, widget);
    const title = this._sideBar.insertTab(index, widget.title);
    // Store the parent id in the title dataset
    // in order to dispatch click events to the right widget.
    title.dataset = { id: widget.id };

    if (title.icon instanceof LabIcon) {
      // bind an appropriate style to the icon
      title.icon = title.icon.bindprops({
        stylesheet: "sideBar"
      });
    } else if (typeof title.icon === "string" || !title.icon) {
      // add some classes to help with displaying css background imgs
      title.iconClass = classes(title.iconClass, "jp-Icon", "jp-Icon-20");
    }

    this._refreshVisibility();
  }

  _findInsertIndex(item) {
    return ArrayExt.upperBound(this._items, item, itemCmp);
  }

  _findWidgetIndex(widget) {
    return ArrayExt.findFirstIndex(this._items, i => i.widget === widget);
  }

  _findWidgetByTitle(title) {
    const item = find(this._items, value => value.widget.title === title);
    return item ? item.widget : null;
  }

  _findWidgetByID(id) {
    const item = find(this._items, value => value.widget.id === id);
    return item ? item.widget : null;
  }

  _refreshVisibility() {
    this._sideBar.setHidden(this._sideBar.titles.length === 0);
    this._stackedPanel.setHidden(this._sideBar.currentTitle === null);
  }

  _onCurrentChanged(sender, args) {
    const oldWidget = args.previousTitle
      ? this._findWidgetByTitle(args.previousTitle)
      : null;
    const newWidget = args.currentTitle
      ? this._findWidgetByTitle(args.currentTitle)
      : null;
    if (oldWidget) {
      oldWidget.hide();
    }
    if (newWidget) {
      newWidget.show();
    }
    this._lastCurrent = newWidget || oldWidget;
    this._refreshVisibility();
  }

  _onTabActivateRequested(sender, args) {
    args.title.owner.activate();
  }

  _onWidgetRemoved(sender, widget) {
    if (widget === this._lastCurrent) {
      this._lastCurrent = null;
    }
    ArrayExt.removeAt(this._items, this._findWidgetIndex(widget));
    this._sideBar.removeTab(widget.title);
    this._refreshVisibility();
  }
}
