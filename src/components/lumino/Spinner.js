import { Widget } from "@lumino/widgets";

export class Spinner extends Widget {
  constructor() {
    super();
    this.addClass("jp-Spinner");
    this.node.tabIndex = -1;
    const content = document.createElement("div");
    content.className = "jp-SpinnerContent";
    this.node.appendChild(content);
  }

  onActivateRequest() {
    this.node.focus();
  }
}
