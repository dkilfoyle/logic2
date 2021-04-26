// import { GenericNodeRenderer } from "d3-hwschematic";

// d3 digital output adapted from https://www.essycode.com/posts/create-digital-clock-javascript-d3/

import { path as d3_path } from "d3";

const DIGIT_WIDTH = 25;
const DIGIT_PADDING = 0.15 * DIGIT_WIDTH;
const BAR_HEIGHT = 0.2 * (DIGIT_WIDTH - 2 * DIGIT_PADDING);
const BAR_SPACE = 0.1 * BAR_HEIGHT;
const BAR_WIDTH = DIGIT_WIDTH - 2 * DIGIT_PADDING - BAR_HEIGHT;
const DIGIT_HEIGHT =
  2 * DIGIT_PADDING + 2 * BAR_WIDTH + BAR_HEIGHT + 4 * BAR_SPACE;
const COLOR_ON = "#70fbfd";
const COLOR_OFF = "#181917";

// Path string for bars.
const barPath = (() => {
  const p = d3_path();
  p.moveTo(0, BAR_HEIGHT / 2);
  p.lineTo(BAR_HEIGHT / 2, 0);
  p.lineTo(BAR_WIDTH - BAR_HEIGHT / 2, 0);
  p.lineTo(BAR_WIDTH, BAR_HEIGHT / 2);
  p.lineTo(BAR_WIDTH - BAR_HEIGHT / 2, BAR_HEIGHT);
  p.lineTo(BAR_HEIGHT / 2, BAR_HEIGHT);
  p.closePath();
  return p.toString();
})();

// Returns data for bars within digit, passed numerical value.
export function barData(v) {
  return [
    {
      // top
      x: BAR_HEIGHT / 2,
      y: 0,
      rot: 0,
      on: [0, 2, 3, 5, 6, 7, 8, 9].indexOf(v) > -1
    },
    {
      // top left
      x: BAR_HEIGHT - BAR_SPACE,
      y: BAR_HEIGHT / 2 + BAR_SPACE,
      rot: 90,
      on: [0, 4, 5, 6, 8, 9].indexOf(v) > -1
    },
    {
      // top right
      x: BAR_WIDTH + BAR_HEIGHT + BAR_SPACE,
      y: BAR_HEIGHT / 2 + BAR_SPACE,
      rot: 90,
      on: [0, 1, 2, 3, 4, 7, 8, 9].indexOf(v) > -1
    },
    {
      // middle
      x: BAR_HEIGHT / 2,
      y: BAR_WIDTH + 2 * BAR_SPACE,
      rot: 0,
      on: [2, 3, 4, 5, 6, 8, 9, "-"].indexOf(v) > -1
    },
    {
      // bottom left
      x: BAR_HEIGHT - BAR_SPACE,
      y: BAR_WIDTH + BAR_HEIGHT / 2 + 3 * BAR_SPACE,
      rot: 90,
      on: [0, 2, 6, 8].indexOf(v) > -1
    },
    {
      // bottom right
      x: BAR_WIDTH + BAR_HEIGHT + BAR_SPACE,
      y: BAR_WIDTH + BAR_HEIGHT / 2 + 3 * BAR_SPACE,
      rot: 90,
      on: [0, 1, 3, 4, 5, 6, 7, 8, 9].indexOf(v) > -1
    },
    {
      // bottom
      x: BAR_HEIGHT / 2,
      y: 2 * BAR_WIDTH + 4 * BAR_SPACE,
      rot: 0,
      on: [0, 2, 3, 5, 6, 8, 9].indexOf(v) > -1
    }
  ];
}

export default class NumberRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super(schematic);
    this.DEFULT_NODE_SIZE = [75, 25];
    this._defsAdded = false;
  }

  prepare(node) {
    // if (!this._defsAdded) {
    //   var defs = this.schematic.defs;
    //   this.addShapeToDefs(defs);
    //   this._defsAdded = true;
    // }
    node.numDigits = parseInt(
      "1".repeat(node.hwMeta.bitSize),
      2
    ).toString().length;
    node.width = this.DEFULT_NODE_SIZE[0] * node.numDigits;
    node.height = this.DEFULT_NODE_SIZE[1];
  }

  selector(node) {
    return node.hwMeta.cls == "Operator" && node.hwMeta.name === "NUMBER";
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
      .attr("style", d => d.hwMeta.cssStyle)
      .attr("id", d => d.id + "_NUMBER");

    nodeG
      .append("rect")
      .attr("width", d => d.numDigits * DIGIT_WIDTH)
      .attr("height", DIGIT_HEIGHT)
      .attr("fill", "#000");

    var cont = nodeG
      .append("g")
      .attr("class", "d3-hwschematic node-operator node-number2")
      .attr("transform", `translate(${DIGIT_PADDING} ${DIGIT_PADDING})`);

    // NUMBER_SHAPE(cont);
    updateNumber(cont, 0);
  }
}

export const updateNumber = (root, x) => {
  // Create digits.
  const digits = root.selectAll(".digit").data(d => {
    const str = x.toString().padStart(d.numDigits, " ");
    if (str.length > d.numDigits) return new Array(d.numDigits).fill("-");
    return str
      .split("")
      .map(y => ([" ", "-", "x", "z", "b"].includes(y) ? y : +y));
  });

  digits
    .enter()
    .append("g")
    .attr("class", "digit")
    .attr("transform", (d, i) => "translate(" + i * DIGIT_WIDTH + ",0)");

  // Create bars for each digit.
  const bars = root
    .selectAll(".digit")
    .selectAll(".bar")
    .data(d => barData(d));

  bars
    .enter()
    .append("path")
    .attr("class", "bar")
    .attr("d", barPath)
    .attr(
      "transform",
      d => "translate(" + d.x + "," + d.y + ") rotate(" + d.rot + ")"
    )
    .merge(bars)
    .attr("fill", d => (d.on ? COLOR_ON : COLOR_OFF));
};
