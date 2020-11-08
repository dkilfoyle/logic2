// import { GenericNodeRenderer } from "d3-hwschematic";

/**
 * Draw a multiplexer operator symbol
 */

function SEVENSEG_SHAPE(root) {
  // width="20" height="40"
  root
    .append("polygon")
    // .attr("fill", "#D1D3D4")
    .attr("id", d => d.id + "_segg")
    .attr("class", "sevenseg-segment")
    .attr(
      "points",
      "278.759,287.927 242.759,323.928 98.759,323.928 62.759,287.927 98.759,251.927 242.759,251.927"
    );
  root
    .append("polygon")
    .attr("id", d => d.id + "_segd")
    .attr("class", "sevenseg-segment")
    .attr(
      "points",
      "278.759,520.74 242.759,556.74 98.759,556.74 62.759,520.74 98.759,484.74 242.759,484.74"
    );
  root
    .append("polygon")
    .attr("id", d => d.id + "_segc")
    .attr("class", "sevenseg-segment")
    .attr(
      "points",
      "287.759,295.928 323.759,331.928 323.759,475.928 287.759,511.928 251.759,475.928 251.759,331.928"
    );
  root
    .append("polygon")
    .attr("id", d => d.id + "_sege")
    .attr("class", "sevenseg-segment")
    .attr(
      "points",
      "53.758,295.928 89.758,331.928 89.758,475.928 53.758,511.928 17.758,475.928 17.758,331.928"
    );
  root
    .append("polygon")
    .attr("id", d => d.id + "_sega")
    .attr("class", "sevenseg-segment")
    .attr(
      "points",
      "278.759,55.26 242.759,91.26 98.759,91.26 62.759,55.26 98.759,19.26 242.759,19.26"
    );
  root
    .append("polygon")
    .attr("id", d => d.id + "_segb")
    .attr("class", "sevenseg-segment")
    .attr(
      "points",
      "287.759,64.427 323.759,100.427 323.759,244.427 287.759,280.427 251.759,244.427 251.759,100.427"
    );
  root
    .append("polygon")
    .attr("id", d => d.id + "_segf")
    .attr("class", "sevenseg-segment")
    .attr(
      "points",
      "53.758,64.427 89.759,100.427 89.759,244.427 53.758,280.427 17.758,244.427 17.758,100.427"
    );
}

export default class SevenSegRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super(schematic);
    this.DEFULT_NODE_SIZE = [20, 40];
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
    return node.hwMeta.cls == "Operator" && node.hwMeta.name === "SEVENSEG";
  }

  /**
   * Render svg of node
   *
   * @param root root svg element where nodes should be rendered
   * @param nodeG svg g for each node with data binded
   * */
  render(root, nodeG) {
    // apply node positions
    console.log(nodeG);
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
    cont.attr("id", d => d.id + "SEVENSEG");
    cont.attr("class", "d3-hwschematic node-operator");
    SEVENSEG_SHAPE(cont);
    cont.attr("transform", "scale(0.05)");
  }
}
