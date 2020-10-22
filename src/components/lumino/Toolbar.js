// Adapted from:
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { find, map, some } from "@lumino/algorithm";
import { MessageLoop } from "@lumino/messaging";
import { PanelLayout, Widget } from "@lumino/widgets";
import { AttachedProperty } from "@lumino/properties";

const TOOLBAR_CLASS = "jp-Toolbar";
const TOOLBAR_ITEM_CLASS = "jp-Toolbar-item";
const TOOLBAR_SPACER_CLASS = "jp-Toolbar-spacer";

class ToolbarLayout extends PanelLayout {
  constructor() {
    super();
    this._dirty = false;
  }
  onFitRequest(msg) {
    super.onFitRequest(msg);
    if (this.parent.isAttached) {
      // If there are any widgets not explicitly hidden, expand the toolbar to
      // accommodate them.
      if (some(this.widgets, w => !w.isHidden)) {
        this.parent.node.style.minHeight = "var(--jp-private-toolbar-height)";
        this.parent.removeClass("jp-Toolbar-micro");
      } else {
        this.parent.node.style.minHeight = "";
        this.parent.addClass("jp-Toolbar-micro");
      }
    }

    // Set the dirty flag to ensure only a single update occurs.
    this._dirty = true;

    // Notify the ancestor that it should fit immediately. This may
    // cause a resize of the parent, fulfilling the required update.
    if (this.parent.parent) {
      MessageLoop.sendMessage(this.parent.parent, Widget.Msg.FitRequest);
    }

    // If the dirty flag is still set, the parent was not resized.
    // Trigger the required update on the parent widget immediately.
    if (this._dirty) {
      MessageLoop.sendMessage(this.parent, Widget.Msg.UpdateRequest);
    }
  }

  onUpdateRequest(msg) {
    super.onUpdateRequest(msg);
    if (this.parent.isVisible) {
      this._dirty = false;
    }
  }

  onChildShown(msg) {
    super.onChildShown(msg);

    // Post a fit request for the parent widget.
    this.parent.fit();
  }

  onChildHidden(msg) {
    super.onChildHidden(msg);

    // Post a fit request for the parent widget.
    this.parent.fit();
  }

  onBeforeAttach(msg) {
    super.onBeforeAttach(msg);

    // Post a fit request for the parent widget.
    this.parent.fit();
  }

  attachWidget(index, widget) {
    super.attachWidget(index, widget);

    // Post a fit request for the parent widget.
    this.parent.fit();
  }

  detachWidget(index, widget) {
    super.detachWidget(index, widget);

    // Post a fit request for the parent widget.
    this.parent.fit();
  }
}

export class Toolbar extends Widget {
  constructor() {
    super();
    this.addClass(TOOLBAR_CLASS);
    this.addClass("jp-scrollbar-tiny");
    this.layout = new ToolbarLayout();
  }

  names() {
    const layout = this.layout;
    return map(layout.widgets, widget => {
      return nameProperty.get(widget);
    });
  }

  addItem(name, widget) {
    const layout = this.layout;
    return this.insertItem(layout.widgets.length, name, widget);
  }

  insertItem(index, name, widget) {
    const existing = find(this.names(), value => value === name);
    if (existing) {
      return false;
    }
    widget.addClass(TOOLBAR_ITEM_CLASS);
    const layout = this.layout;
    layout.insertWidget(index, widget);
    nameProperty.set(widget, name);
    return true;
  }

  insertAfter(at, name, widget) {
    return this._insertRelative(at, 1, name, widget);
  }

  insertBefore(at, name, widget) {
    return this._insertRelative(at, 0, name, widget);
  }

  _insertRelative(at, offset, name, widget) {
    const nameWithIndex = map(this.names(), (name, i) => {
      return { name: name, index: i };
    });
    const target = find(nameWithIndex, x => x.name === at);
    if (target) {
      return this.insertItem(target.index + offset, name, widget);
    }
    return false;
  }

  /**
   * Handle the DOM events for the widget.
   *
   * @param event - The DOM event sent to the widget.
   *
   * #### Notes
   * This method implements the DOM `EventListener` interface and is
   * called in response to events on the dock panel's node. It should
   * not be called directly by user code.
   */
  handleEvent(event) {
    switch (event.type) {
      case "click":
        this.handleClick(event);
        break;
      default:
        break;
    }
  }

  handleClick(event) {
    // Clicking a label focuses the corresponding control
    // that is linked with `for` attribute, so let it be.
    if (event.target instanceof HTMLLabelElement) {
      const forId = event.target.getAttribute("for");
      if (forId && this.node.querySelector(`#${forId}`)) {
        return;
      }
    }

    // If this click already focused a control, let it be.
    if (this.node.contains(document.activeElement)) {
      return;
    }

    // Otherwise, activate the parent widget, which may take focus if desired.
    if (this.parent) {
      this.parent.activate();
    }
  }

  /**
   * Handle `after-attach` messages for the widget.
   */
  onAfterAttach() {
    this.node.addEventListener("click", this);
  }

  /**
   * Handle `before-detach` messages for the widget.
   */
  onBeforeDetach() {
    this.node.removeEventListener("click", this);
  }
}

// new ToolbarButton({
//   icon: stopIcon,
//   onClick: () => {
//     void sessionContext.session?.kernel?.interrupt();
//   },
// });

export function createSpacerItem() {
  return new Spacer();
}

export class Spacer extends Widget {
  constructor() {
    super();
    this.addClass(TOOLBAR_SPACER_CLASS);
  }
}

export const nameProperty = new AttachedProperty({
  name: "name",
  create: () => ""
});
