import { ArrayExt } from "@lumino/algorithm";
import { Widget, Panel, PanelLayout } from "@lumino/widgets";

export class StatusBar extends Widget {
  constructor() {
    super();
    this.addClass("jp-statusbar");

    this._leftRankItems = [];
    this._rightRankItems = [];
    this._statusItems = {};
    this._statusItemDefaults = {
      align: "left",
      rank: 0,
      isActive: () => true,
      activeStateChanged: undefined
    };

    const rootLayout = (this.layout = new PanelLayout());

    const leftPanel = (this._leftSide = new Panel());
    const middlePanel = (this._middlePanel = new Panel());
    const rightPanel = (this._rightSide = new Panel());

    leftPanel.addClass("jp-statusbar-side");
    leftPanel.addClass("jp-statusbar-left");

    middlePanel.addClass("jp-statusbar-side");

    rightPanel.addClass("jp-statusbar-side");
    rightPanel.addClass("jp-statusbar-right");

    rootLayout.addWidget(leftPanel);
    rootLayout.addWidget(middlePanel);
    rootLayout.addWidget(rightPanel);
  }

  registerStatusItem(id, statusItem) {
    if (id in this._statusItems) {
      throw new Error(`Status item ${id} already registered.`);
    }

    // Populate defaults for the optional properties of the status item.
    const fullStatusItem = {
      ...this._statusItemDefaults,
      ...statusItem
    };
    const { align, item, rank } = fullStatusItem;

    // console.log("registerStatusItem: ", id, statusItem, fullStatusItem);

    // Connect the activeStateChanged signal to refreshing the status item,
    // if the signal was provided.
    const onActiveStateChanged = () => {
      this._refreshItem(id);
    };
    if (fullStatusItem.activeStateChanged) {
      fullStatusItem.activeStateChanged.connect(onActiveStateChanged);
    }

    const rankItem = { id, rank };

    fullStatusItem.item.addClass("jp-statusbar-item");
    this._statusItems[id] = fullStatusItem;

    if (align === "left") {
      const insertIndex = this._findInsertIndex(this._leftRankItems, rankItem);
      if (insertIndex === -1) {
        this._leftSide.addWidget(item);
        this._leftRankItems.push(rankItem);
      } else {
        ArrayExt.insert(this._leftRankItems, insertIndex, rankItem);
        this._leftSide.insertWidget(insertIndex, item);
      }
    } else if (align === "right") {
      const insertIndex = this._findInsertIndex(this._rightRankItems, rankItem);
      if (insertIndex === -1) {
        this._rightSide.addWidget(item);
        this._rightRankItems.push(rankItem);
      } else {
        ArrayExt.insert(this._rightRankItems, insertIndex, rankItem);
        this._rightSide.insertWidget(insertIndex, item);
      }
    } else {
      this._middlePanel.addWidget(item);
    }
    this._refreshItem(id); // Initially refresh the status item.
  }

  onUpdateRequest(msg) {
    this._refreshAll();
    super.onUpdateRequest(msg);
  }

  _findInsertIndex(side, newItem) {
    return ArrayExt.findFirstIndex(side, item => item.rank > newItem.rank);
  }

  _refreshItem(id) {
    const statusItem = this._statusItems[id];
    if (statusItem.isActive()) {
      statusItem.item.show();
      statusItem.item.update();
    } else {
      statusItem.item.hide();
    }
  }

  _refreshAll() {
    Object.keys(this._statusItems).forEach(id => {
      this._refreshItem(id);
    });
  }
}
