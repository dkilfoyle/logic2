// import { GenericNodeRenderer } from "d3-hwschematic";

const BAR_WIDTH = 5;
const BAR_HEIGHT = 15;
const BAR_PADDING = 3;
const COLOR_ON = "#00e676";
const COLOR_OFF = "white";

function LEDBAR(root) {
  root
    .append("rect")
    .attr("width", 10 * BAR_WIDTH + 11 * BAR_PADDING)
    .attr("height", BAR_HEIGHT + BAR_PADDING * 2)
    .attr("fill", "#000");

  // Create graph.
  const graph = root
    .append("g")
    .attr("class", "ledbar")
    .attr("transform", `translate(${BAR_PADDING}, ${BAR_PADDING})`);

  // Create digits.
  const bar = graph.selectAll(".bar").data([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  bar
    .enter()
    .append("g")
    .attr(
      "transform",
      (d, i) => `translate(${i * (BAR_WIDTH + BAR_PADDING)}, 0)`
    )
    .append("rect")
    .attr("class", "bar")
    .attr("height", BAR_HEIGHT)
    .attr("width", BAR_WIDTH)
    .attr("id", d => d)
    .attr("fill", d => (d ? COLOR_ON : COLOR_OFF));
}

export default class LedBarRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super(schematic);
    this.DEFULT_NODE_SIZE = [100, 25];
    this._defsAdded = false;
  }

  prepare(node) {
    // if (!this._defsAdded) {
    //   var defs = this.schematic.defs;
    //   this.addShapeToDefs(defs);
    //   this._defsAdded = true;
    // }
    node.width = this.DEFULT_NODE_SIZE[0];
    node.height = this.DEFULT_NODE_SIZE[1];
  }

  selector(node) {
    return node.hwMeta.cls == "Operator" && node.hwMeta.name === "LEDBAR";
  }

  /**
   * Render svg of node
   *
   * @param root root svg element where nodes should be rendered
   * @param nodeG svg g for each node with data binded
   * */
  render(root, nodeG) {
    // apply node positions
    nodeG
      .attr("transform", function(d) {
        if (typeof d.x === "undefined" || typeof d.x === "undefined") {
          throw new Error("Node with undefined position", d);
        }
        return "translate(" + d.x + " " + d.y + ")";
      })
      .attr("class", d => d.hwMeta.cssClass)
      .attr("style", d => d.hwMeta.cssStyle);
    // .attr("id", d => d.id);
    var cont = nodeG.append("g");
    cont.attr("id", d => d.id + "_LEDBAR");
    cont.attr("class", "d3-hwschematic node-operator");
    LEDBAR(cont);
  }
}
