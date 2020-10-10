import { Panel } from "@lumino/widgets";
import { ArrayExt } from "@lumino/algorithm";

function itemCmp(first, second) {
  return first.rank - second.rank;
}

export default class PanelHandler {
  constructor() {
    this.items = new Array();
    this.panel = new Panel();
  }

  addWidget(widget, rank) {
    widget.parent = null;
    const item = { widget, rank };
    const index = ArrayExt.upperBound(this.items, item, itemCmp);
    ArrayExt.insert(this.items, index, item);
    this.panel.insertWidget(index, widget);
  }
}
