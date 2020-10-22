// Adapted from:
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { MessageLoop } from "@lumino/messaging";
import { BoxLayout, Widget } from "@lumino/widgets";

import { Spinner } from "./Spinner";
import { Toolbar } from "./Toolbar";
import { UUID } from "@lumino/coreutils";

function createDomID() {
  return `id-${UUID.uuid4()}`;
}

export class MainAreaWidget extends Widget {
  constructor(id, options) {
    super(options);
    this.addClass("jp-MainAreaWidget");
    this.id = id;

    this._changeGuard = false;
    this._spinner = new Spinner();

    this._isRevealed = false;

    const content = (this._content = options.content);
    const toolbar = (this._toolbar = options.toolbar || new Toolbar());
    const spinner = this._spinner;

    const layout = (this.layout = new BoxLayout({ spacing: 0 }));
    layout.direction = "top-to-bottom";
    BoxLayout.setStretch(toolbar, 0);
    BoxLayout.setStretch(content, 1);
    layout.addWidget(toolbar);
    layout.addWidget(content);

    if (!content.id) {
      content.id = createDomID();
    }
    content.node.tabIndex = -1;

    this._updateTitle();
    content.title.changed.connect(this._updateTitle, this);
    this.title.closable = true;
    this.title.changed.connect(this._updateContentTitle, this);

    if (options.reveal) {
      this.node.appendChild(spinner.node);
      this._revealed = options.reveal
        .then(() => {
          if (content.isDisposed) {
            this.dispose();
            return;
          }
          content.disposed.connect(() => this.dispose());
          const active = document.activeElement === spinner.node;
          this.node.removeChild(spinner.node);
          spinner.dispose();
          this._isRevealed = true;
          if (active) {
            this._focusContent();
          }
        })
        .catch(e => {
          // Show a revealed promise error.
          const error = new Widget();
          // Show the error to the user.
          const pre = document.createElement("pre");
          pre.textContent = String(e);
          error.node.appendChild(pre);
          BoxLayout.setStretch(error, 1);
          this.node.removeChild(spinner.node);
          spinner.dispose();
          content.dispose();
          this._content = null;
          toolbar.dispose();
          this._toolbar = null;
          layout.addWidget(error);
          this._isRevealed = true;
          throw error;
        });
    } else {
      // Handle no reveal promise.
      spinner.dispose();
      content.disposed.connect(() => this.dispose());
      this._isRevealed = true;
      this._revealed = Promise.resolve(undefined);
    }
  }

  get content() {
    return this._content;
  }

  get toolbar() {
    return this._toolbar;
  }

  get isRevealed() {
    return this._isRevealed;
  }

  get revealed() {
    return this._revealed;
  }

  onActivateRequest() {
    if (this._isRevealed) {
      if (this._content) {
        this._focusContent();
      }
    } else {
      this._spinner.node.focus();
    }
  }

  onCloseRequest() {
    this.dispose();
  }

  onUpdateRequest(msg) {
    if (this._content) {
      MessageLoop.sendMessage(this._content, msg);
    }
  }

  _updateTitle() {
    if (this._changeGuard || !this.content) {
      return;
    }
    this._changeGuard = true;
    const content = this.content;
    this.title.label = content.title.label;
    this.title.mnemonic = content.title.mnemonic;
    this.title.icon = content.title.icon;
    this.title.iconClass = content.title.iconClass;
    this.title.iconLabel = content.title.iconLabel;
    this.title.caption = content.title.caption;
    this.title.className = content.title.className;
    this.title.dataset = content.title.dataset;
    this._changeGuard = false;
  }

  _updateContentTitle() {
    if (this._changeGuard || !this.content) {
      return;
    }
    this._changeGuard = true;
    const content = this.content;
    content.title.label = this.title.label;
    content.title.mnemonic = this.title.mnemonic;
    content.title.icon = this.title.icon;
    content.title.iconClass = this.title.iconClass;
    content.title.iconLabel = this.title.iconLabel;
    content.title.caption = this.title.caption;
    content.title.className = this.title.className;
    content.title.dataset = this.title.dataset;
    this._changeGuard = false;
  }

  _focusContent() {
    if (!this.content) {
      return;
    }
    // Focus the content node if we aren't already focused on it or a
    // descendent.
    if (!this.content.node.contains(document.activeElement)) {
      this.content.node.focus();
    }

    // Activate the content asynchronously (which may change the focus).
    this.content.activate();
  }
}
