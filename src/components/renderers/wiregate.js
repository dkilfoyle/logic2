/* eslint-disable no-debugger */
// import { GenericNodeRenderer } from "d3-hwschematic";

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

function portLevel(port) {
  if (!port.parent) return 0;
  else {
    return portLevel(port.parent) + 1;
  }
}

export default class WireGateRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super({ ...schematic });
    this.schematic.PORT_PIN_SIZE = [2, 2];
    this.schematic.PORT_HEIGHT = this.schematic.PORT_PIN_SIZE[1];
    this.schematic.NODE_MIDDLE_PORT_SPACING = 7;
    this.schematic.CHAR_WIDTH = sizeOfText("x").width;
    this.schematic.CHAR_HEIGHT = sizeOfText("X").height;
  }

  prepare(d) {
    var schematic = this.schematic;
    var max = Math.max;
    // {PortSide: (portCnt, portWidth)}
    var portDim = {
      WEST: [0, 0],
      EAST: [0, 0],
      SOUTH: [0, 0],
      NORTH: [0, 0]
    };
    var PORT_PIN_SIZE_x = schematic.PORT_PIN_SIZE[0],
      PORT_PIN_SIZE_y = schematic.PORT_PIN_SIZE[1];
    var CHAR_WIDTH = schematic.CHAR_WIDTH;
    if (d.ports != null)
      d.ports.forEach(function(p) {
        var t = p.properties.side;
        var indent = 0;
        if (portLevel(p) > 0) indent = (portLevel(p) + 1) * CHAR_WIDTH;
        var portW = sizeOfText(p.hwMeta.name).width + indent;
        var pDim = portDim[t];
        if (pDim === undefined) throw new Error(t);
        pDim[0]++;
        pDim[1] = max(pDim[1], portW);

        // dimension of connection pin
        p.width = PORT_PIN_SIZE_x;
        p.height = PORT_PIN_SIZE_y;
      });

    var west = portDim["WEST"],
      east = portDim["EAST"],
      south = portDim["SOUTH"],
      north = portDim["NORTH"];

    var portColums = 0;
    if (west[0] && west[1] > 0) portColums += 1;
    if (east[0] && east[1] > 0) portColums += 1;

    var middleSpacing = 0;
    if (portColums == 2) middleSpacing = schematic.NODE_MIDDLE_PORT_SPACING;
    // var portW = max(west[1], east[1]);

    d.portLabelWidth = [west[1], east[1]];
    d.width = west[1] + east[1] + middleSpacing;
    d.height = max(
      max(west[0], east[0]) * schematic.PORT_HEIGHT,
      max(south[1], north[1]) * CHAR_WIDTH
    );
  }

  getNodeLabelWidth() {
    return 0;
    // var schematic = this.schematic;
    // var widthOfText = schematic.widthOfText.bind(schematic);
    // return widthOfText(d.id);
  }

  selector(node) {
    return node.hwMeta.cls == "Operator" && node.hwMeta.name === "WIREGATE";
  }

  render(root, nodeG) {
    console.log("render: ", nodeG);
    nodeG
      .attr("class", d => d.hwMeta.cssClass + " WIREGATE")
      .attr("style", d => d.hwMeta.cssStyle);

    // black thick line
    nodeG
      .append("rect")
      .attr("x", d => d.portLabelWidth[0] + 3)
      .attr("width", "1")
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

    this.renderPorts(nodeG);
  }
}
