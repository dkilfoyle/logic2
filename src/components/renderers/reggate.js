const DIGIT_WIDTH = 25;
const DIGIT_PADDING = 0.15 * DIGIT_WIDTH;
const BAR_HEIGHT = 0.2 * (DIGIT_WIDTH - 2 * DIGIT_PADDING);
const BAR_SPACE = 0.1 * BAR_HEIGHT;
const BAR_WIDTH = DIGIT_WIDTH - 2 * DIGIT_PADDING - BAR_HEIGHT;
const DIGIT_HEIGHT =
  2 * DIGIT_PADDING + 2 * BAR_WIDTH + BAR_HEIGHT + 4 * BAR_SPACE;

import { updateNumber } from "./number.js";

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

export default class RegGateRenderer extends window.d3.GenericNodeRenderer {
  selector(node) {
    return node.hwMeta.name === "Operator" || node.hwMeta.name === "REGGATE";
  }

  getNodeLabelWidth() {
    return 0;
  }

  prepare(node) {
    node.idWidth = sizeOfText(getLocalID(node.id)).width;
    node.valWidth = sizeOfText("000").width;
    node.txtHeight = sizeOfText("000").height;
    node.width = node.idWidth + node.valWidth + 10;
    node.height = node.txtHeight + 7;
    // console.log(node);
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

    nodeG
      .append("text")
      .text(d => {
        return `${getLocalID(d.id)}`;
      })
      .attr("font-size", "6px")
      .attr("x", 3)
      .attr("y", 8.5);

    // nodeG
    //   .append("text")
    //   .text(d => {
    //     return `${d.val || "xxx"}`;
    //   })
    //   .attr("font-size", "6px")
    //   .attr("x", d => 6 + d.idWidth)
    //   .attr("y", 8)
    //   .attr("id", "val");

    const num = nodeG
      .append("g")
      .attr("transform", d => `translate(${6 + d.idWidth} 4) scale(0.15)`);
    num
      .append("rect")
      .attr("width", 3 * DIGIT_WIDTH)
      .attr("height", DIGIT_HEIGHT)
      .attr("fill", "#000");

    var cont = num
      .append("g")
      .attr("class", "d3-hwschematic node-operator node-number2")
      .attr("transform", `translate(${DIGIT_PADDING} ${DIGIT_PADDING})`);

    updateNumber(cont, [0, 0, 0]);
  }
}
