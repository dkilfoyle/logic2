<template>
  <div id="sideBarParent"></div>
</template>

<script>
import { TabBar, StackedPanel } from "@lumino/widgets";

export default {
  name: "SideBar",
  props: ["parentPanel"],
  data() {
    return {
      sideBar: new TabBar({
        insertBehaviour: "none",
        removeBehaviour: "none",
        allowDeselect: true
      }),
      stackedPanel: new StackedPanel(),
      lastCurrent: null,
      items: []
    };
  },
  created() {
    this.sideBar.hide();
    this.stackedPanel.hide();
    this.sideBar.currentChanged.connect(this.onCurrentChanged, this);
    this.sideBar.tabActivateRequested.connect(
      this.onTabActivateRequested,
      this
    );
    this.stackedPanel.widgetRemoved.connect(this.onWidgetRemoved, this);
    this.parentPanel.addWidget(this.sideBar);
    this.parentPanel.addWidget(this.stackedPanel);
  },
  methods: {
    expand() {
      const previous =
        this.lastCurrent || (this.items.length > 0 && this.items[0].widget);
      if (previous) {
        this.activate(previous.id);
      }
    },
    activate(id) {
      const widget = this.findWidgetByID(id);
      if (widget) {
        this.sideBar.currentTitle = widget.title;
        widget.activate();
      }
    },
    collapse() {
      this.sideBar.currentTitle = null;
    },
    addWidget(widget, rank) {
      widget.parent = null;
      widget.hide();
      const item = { widget, rank };
      this.items.push(item);
      this.stackedPanel.addWidget(widget);
      const title = this.sideBar.addTab(widget.title);
      title.dataset = { id: widget.id };
      // TODO: ? add icon stuff
      this.refreshVisibility();
    },
    refreshVisibility() {
      this.sideBar.setHidden(this.sideBar.titles.length === 0);
      this.stackedPanel.setHidden(this.sideBar.currentTitle === null);
    },
    onCurrentChanged(sender, args) {
      console.log("SideBar.onCurrentChanged: ", sender, args);
      const oldWidget = args.previousTitle
        ? this.findWidgetByTitle(args.previousTitle)
        : null;
      const newWidget = args.currentTitle
        ? this.findWidgetByTitle(args.currentTitle)
        : null;
      if (oldWidget) {
        oldWidget.hide();
      }
      if (newWidget) {
        newWidget.show();
      }
      this.lastCurrent = newWidget || oldWidget;
      this.refreshVisibility();
    },
    onTabActivateRequested(sender, args) {
      console.log("SideBar.onTabActivateRequested: ", sender, args);
      args.title.owner.activate();
    },
    onWidgetRemoved(sender, widget) {
      if (widget === this.lastCurrent) {
        this.lastCurrent = null;
      }
      const index = this.findWidgetIndex(widget);
      this.items.splice(index, index);
      this.sideBar.removeTab(widget.title);
      this.refreshVisibility();
    },
    findWidgetIndex(widget) {
      return this.items.findIndex(x => x.widget === widget);
    },
    findWidgetByTitle(title) {
      const item = this.items.find(x => x.widget.title === title);
      return item ? item.widget : null;
    },
    findWidgetByID(id) {
      const item = this.tems.find(x => x.widget.id === id);
      return item ? item.widget : null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
