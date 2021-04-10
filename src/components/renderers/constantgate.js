/* eslint-disable no-debugger */
function sizeOfText(text) {
  if (!window.d3) return;
  var container = window.d3.select("body").append("svg");
  const x = container.append("text");
  x.attr("font-family", "monospace")
    .attr("font-size", "6px")
    .text(text);
  var size = container.node().getBBox();
  container.remove();
  return { width: size.width, height: size.height };
}

// const getLocalID = x => {
//   let xx = x.includes("_gate") ? x.substr(0, x.lastIndexOf("_")) : x;
//   return xx.substr(xx.lastIndexOf("_") + 1);
// };

export default class ConstantGateRenderer extends window.d3
  .GenericNodeRenderer {
  selector(node) {
    return (
      node.hwMeta.name === "Operator" || node.hwMeta.name === "CONSTANTGATE"
    );
  }

  getNodeLabelWidth() {
    return 0;
  }

  prepare(node) {
    node.valWidth = sizeOfText(node.hwMeta.val).width;
    node.txtHeight = sizeOfText(node.hwMeta.val).height;
    node.width = node.valWidth + 10;
    node.height = node.txtHeight + 7;
    console.log(node);
  }

  render(root, nodeG) {
    nodeG
      .attr("class", d => d.hwMeta.cssClass)
      .attr("style", d => d.hwMeta.cssStyle)
      .attr("transform", function(d) {
        if (typeof d.x === "undefined" || typeof d.x === "undefined") {
          throw new Error("Node with undefined position", d);
        }
        return "translate(" + d.x + " " + d.y + ")";
      });

    // spot node main body and set dimensions and style of node
    nodeG
      .append("rect")
      .attr("width", function(d) {
        return d.width;
      })
      .attr("height", function(d) {
        return d.height;
      })
      .attr("class", "wiregaterect");

    // nodeG
    //   .append("text")
    //   .text(d => {
    //     return `${getLocalID(d.id)}`;
    //   })
    //   .attr("font-size", "6px")
    //   .attr("x", 3)
    //   .attr("y", 8);

    nodeG
      .append("text")
      .text(d => {
        return `${d.hwMeta.val || "xxx"}`;
      })
      .attr("font-size", "6px")
      .attr("x", 3)
      .attr("y", 8)
      .attr("id", "val");
  }
}
