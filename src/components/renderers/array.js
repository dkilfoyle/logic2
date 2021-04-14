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

const getLocalID = x => {
  let xx = x.includes("_gate") ? x.substr(0, x.lastIndexOf("_")) : x;
  return xx.substr(xx.lastIndexOf("_") + 1);
};

export default class ArrayRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super(schematic);
    this.node = null;
  }

  selector(node) {
    return node.hwMeta.name === "Operator" || node.hwMeta.name === "ARRAY";
  }

  getNodeLabelWidth() {
    return 0;
  }

  prepare(node) {
    node.idWidth = sizeOfText(getLocalID(node.id)).width;
    node.valWidth = sizeOfText("00   0000").width;
    node.txtHeight = sizeOfText("000").height;
    node.tableHeight = (node.txtHeight + 2) * Math.min(node.hwMeta.val, 10) + 2;
    node.width = Math.max(node.idWidth, node.valWidth) + 10;
    node.height = node.txtHeight + 4 + node.tableHeight + 15;
    this.node = node;
    // console.log(node);
  }

  render(root, nodeG) {
    console.log(root, nodeG);
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
        return d.txtHeight + 4;
      })
      .attr("class", "arrayrect");

    nodeG
      .append("text")
      .text(d => {
        return `${getLocalID(d.id)}`;
      })
      .attr("font-size", "6px")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("x", d => d.width / 2)
      .attr("y", d => (d.txtHeight + 4) / 2);

    nodeG
      .append("rect")
      .attr("y", d => d.txtHeight + 4)
      .attr("width", d => d.width)
      .attr("height", d => d.tableHeight)
      .attr("class", "arrayrect");

    const table = nodeG
      .append("foreignObject")
      .attr("x", 2)
      .attr("y", d => d.txtHeight + 4 + 2)
      .attr("width", d => d.width - 4)
      .attr("height", d => d.tableHeight - 4)
      .append("xhtml:div")
      .append("table")
      .attr("class", "arrayTable");

    table.append("tbody");

    updateTable(
      nodeG.data()[0].hwMeta.cssClass,
      new Array(this.node.hwMeta.val).fill(0).map((x, i) => [i, x])
    );

    const buttonArea = nodeG
      .append("g")
      .attr(
        "transform",
        d => `translate(0, ${d.txtHeight + 4 + d.tableHeight})`
      );

    buttonArea
      .append("rect")
      .attr("width", d => d.width)
      .attr("height", 10)
      .attr("class", "arrayrect");

    const makeButton = (x, y, title, func) => {
      buttonArea
        .append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", 8)
        .attr("height", 6)
        .attr("fill", "darkgrey")
        .attr("rx", 3)
        .attr("ry", 3)
        .on("click", func);
      buttonArea
        .append("text")
        .attr("x", x + 4)
        .attr("y", y + 3)
        .attr("font-size", "6px")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .text(title);
    };

    makeButton(4, 2, "<", () => {
      console.log("click left");
    });
    makeButton(15, 2, ">", () => {
      console.log("click right");
    });

    // todo:
    // 1. value format
    // 2. pagination buttons
    // 3. change value transition
  }
}

export const updateTable = (id, data) => {
  const table = window.d3.select("." + id).select("tbody");
  const rows = table.selectAll("tr").data(data, d => d);

  rows
    .enter()
    .append("tr")
    .transition()
    .style("background-color", "#ffcdd2")
    .transition()
    .delay(1000)
    .style("background-color", "#e6ffff");
  rows.exit().remove();

  const columns = table
    .selectAll("tr")
    .selectAll("td")
    .data(d => d);

  columns
    .enter()
    .append("td")
    .attr("class", (d, i) => "td" + i)
    .merge(columns)
    .text(d => d);
};
