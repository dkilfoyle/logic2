export default class ConcatNodeRenderer extends window.d3.GenericNodeRenderer {
  selector(node) {
    return node.hwMeta.name === "CONCATENATIONGATE";
  }

  getNodeLabelWidth() {
    return 0;
  }

  prepare(node) {
    node.width = 3;
    node.height = node.ports.length * 3.5;
  }

  render(root, nodeG) {
    nodeG
      .attr("class", d => d.hwMeta.cssClass)
      .attr("style", d => d.hwMeta.cssStyle);

    // black thick line
    nodeG
      .append("rect")
      .attr("x", 0)
      .attr("width", "3")
      .attr("height", function(d) {
        return d.height;
      })
      .attr("style", "fill:black;");

    // apply node positions
    nodeG.attr("transform", function(d) {
      if (typeof d.x === "undefined" || typeof d.x === "undefined") {
        throw new Error("Node with undefined position", d);
      }
      return "translate(" + d.x + " " + d.y + ")";
    });

    // this.renderPorts(nodeG);
  }
}
