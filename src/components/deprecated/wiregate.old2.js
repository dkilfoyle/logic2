/* eslint-disable no-debugger */
// import { GenericNodeRenderer } from "d3-hwschematic";

var PORT_MARKERS = {
  WEST: {
    INPUT: "#westInPortMarker",
    OUTPUT: "#westOutPortMarker"
  },
  EAST: {
    INPUT: "#eastInPortMarker",
    OUTPUT: "#eastOutPortMarker"
  },
  NORTH: {
    INPUT: "#northInPortMarker",
    OUTPUT: "#northOutPortMarker"
  },
  SOUTH: {
    INPUT: "#southInPortMarker",
    OUTPUT: "#southOutPortMarker"
  }
};

function getIOMarker(d) {
  var side = d.properties.side;
  var portType = d.direction;
  var marker = PORT_MARKERS[side][portType];
  if (marker === undefined) {
    throw new Error("Wrong side, portType", side, portType);
  }
  return marker;
}

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
  selector(node) {
    return node.hwMeta.name === "Operator" || node.hwMeta.name === "WIREGATE";
  }

  getNodeLabelWidth() {
    return 0;
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
    var PORT_PIN_SIZE_x = schematic.PORT_PIN_SIZE[0];
    var PORT_PIN_SIZE_y = schematic.PORT_PIN_SIZE[1];
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

    // var portColums = 0;
    // if (west[0] && west[1] > 0) portColums += 1;
    // if (east[0] && east[1] > 0) portColums += 1;

    // var middleSpacing = 0;
    // if (portColums == 2) middleSpacing = schematic.NODE_MIDDLE_PORT_SPACING;
    // var portW = max(west[1], east[1]);

    d.portLabelWidth = [west[1], east[1]];
    d.width = west[1] + east[1] + 10;
    d.height = max(
      max(west[0], east[0]) * schematic.PORT_HEIGHT,
      max(south[1], north[1]) * CHAR_WIDTH
    );
  }

  render(root, nodeG) {
    nodeG
      .attr("class", d => d.hwMeta.cssClass)
      .attr("style", d => d.hwMeta.cssStyle);

    // spot node main body and set dimensions and style of node
    nodeG
      .append("rect")
      .attr("width", function(d) {
        return d.width;
      })
      .attr("height", function(d) {
        return d.height;
      })
      .attr("class", "node")
      .attr("rx", 5) // rounded corners
      .attr("ry", 5);

    // black thick line
    nodeG
      .append("rect")
      .attr("x", d => d.portLabelWidth[0] + 2)
      .attr("width", "2")
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

  renderPorts(node) {
    var schematic = this.schematic;
    var PORT_HEIGHT = schematic.PORT_HEIGHT;
    var CHAR_WIDTH = schematic.CHAR_WIDTH;
    var portG = node
      .selectAll(".port")
      .data(function(d) {
        return d.ports || [];
      })
      .enter()
      .append("g")
      .attr("style", d => d.hwMeta.cssStyle)
      .attr("class", d => {
        if (d.hwMeta.cssStyle) {
          return "port " + d.hwMeta.cssClass + "wiregate";
        } else {
          return "port wiregate";
        }
      });

    // apply port positions
    portG.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

    node.each(function(d) {
      var ignorePortLabel = typeof d.children !== "undefined";
      if (d.ports != null) {
        d.ports.forEach(function(p) {
          p.ignoreLabel = ignorePortLabel;
        });
      }
    });

    // portG.append("path").attr("d", "M0,0 L3,0");

    // spot port name
    portG
      .append("text")
      .text(function(d) {
        if (d.ignoreLabel) return "";
        else if (d.parent) {
          var indent = "-".repeat(portLevel(d));
          var side = d.properties.side;
          if (side == "WEST") {
            return indent + d.hwMeta.name;
          } else if (side == "EAST") {
            return d.hwMeta.name + indent;
          } else {
            throw new Error(side);
          }
        } else return d.hwMeta.name;
      })
      .attr("font-size", "6px")
      .attr("x", function(d) {
        var side = d.properties.side;
        if (side == "WEST") {
          return 7;
        } else if (side == "EAST") {
          if (typeof this.getBBox == "undefined") {
            // JSDOM under nodejs
            return -this.textContent.length * CHAR_WIDTH - CHAR_WIDTH / 2;
          }
          return -this.getBBox().width - CHAR_WIDTH / 2;
        } else if (side == "NORTH") {
          return 0;
        } else if (side == "SOUTH") {
          return 0;
        } else {
          throw new Error(side);
        }
      })
      // .attr("alignment-baseline", "middle");
      .attr("y", PORT_HEIGHT * 0.65);

    // spot input/output marker
    portG.append("use").attr("href", getIOMarker);
  }
}
