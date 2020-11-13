// import { GenericNodeRenderer } from "d3-hwschematic";

function BUFFER(root) {
  // width="30" height="20"
  root.append("path").attr("d", "M0,2.5 L0,22.5 L20,12.5 Z");
}

export default class BufferRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super(schematic);
    this.DEFULT_NODE_SIZE = [22, 25];
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
    return node.hwMeta.cls == "Operator" && node.hwMeta.name === "BUFFER";
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
    cont.attr("id", d => d.id + "BUFFER");
    cont.attr("class", "d3-hwschematic node-operator");
    BUFFER(cont);
  }
}
