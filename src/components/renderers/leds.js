// import { GenericNodeRenderer } from "d3-hwschematic";
// import "d3-selection-multi";

function LED(root) {
  // width="30" height="20"
  root
    .append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("class", "ledlabel")
    .text(d => d.label);
  root
    .append("circle")
    .attr("cy", DEFAULT_NODE_SIZE[1] / 2)
    .attr("r", 4);
}

function makeRadial(defs, id, c1, c2) {
  const radial = defs.append("radialGradient").attr("id", id);
  radial
    .append("stop")
    .attr("offset", "10%")
    .attr("stop-color", c1);
  radial
    .append("stop")
    .attr("offset", "95%")
    .attr("stop-color", c2);
}

function makeGlow(defs, id, c1, stddev = 0.5) {
  const glow = defs.append("filter").attr("id", id);
  glow
    .append("feDropShadow")
    .attr("dx", "0")
    .attr("dy", "0")
    .attr("width", "1000%")
    .attr("height", "1000%")
    .attr("stdDeviation", stddev)
    .attr("flood-color", c1)
    .attr("flood-opacity", 0.8);
  // glow
  //   .append("filter")
  //   .attr("id", "gaussian-blur-filter-0")
  //   .attr("color-interpolation-filters", "sRGB")
  //   .attr("x", "-500%")
  //   .attr("y", "-500%")
  //   .attr("width", "1000%")
  //   .attr("height", "1000%")
  //   .attr("bx:preset", "gaussian-blur 1 10");
  // glow
  //   .append("feGaussianBlur")
  //   .attr("stdDeviation", "10 10")
  //   .attr("edgeMode", "none");
}

const DEFAULT_NODE_SIZE = [10, 10];

export default class LedsRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super(schematic);
    this._defsAdded = false;
  }

  prepare(node) {
    if (!this._defsAdded) {
      const defs = this.schematic.defs;
      makeRadial(defs, "redradialon", "gold", "red");
      makeRadial(defs, "redradialoff", "red", "darkred");
      makeGlow(defs, "redglow", "red");
      makeRadial(defs, "greenradialon", "#ABFF00", "green");
      makeRadial(defs, "greenradialoff", "green", "darkgreen");
      makeGlow(defs, "greenglow", "green");
      makeRadial(defs, "blueradialon", "#24E0FF", "blue");
      makeRadial(defs, "blueradialoff", "blue", "darkblue");
      makeGlow(defs, "blueglow", "blue");
    }
    node.width = DEFAULT_NODE_SIZE[0] * node.hwMeta.bitSize;
    node.height =
      DEFAULT_NODE_SIZE[1] + Array.isArray(node.hwMeta.meta.labels) ? 10 : 5;
  }

  selector(node) {
    return node.hwMeta.cls == "Operator" && node.hwMeta.name === "LEDS";
  }

  render(root, nodeG) {
    // apply node positions
    nodeG
      .attr("transform", d => {
        if (typeof d.x === "undefined" || typeof d.x === "undefined") {
          throw new Error("Node with undefined position", d);
        }
        return "translate(" + d.x + " " + d.y + ")";
      })
      .attr("class", d => d.hwMeta.cssClass)
      .attr("style", d => d.hwMeta.cssStyle)
      .each((d, i, nodes) => {
        updateLeds(
          window.d3.select(nodes[i]),
          d.hwMeta.val,
          d.hwMeta.bitSize,
          d.hwMeta.meta
        );
      });

    // const hwMeta = nodeG.data()[0].hwMeta;
    // updateLeds(nodeG, hwMeta.val, hwMeta.bitSize, hwMeta.meta);
  }
}

export const updateLeds = (node, value, bitSize, meta = {}) => {
  const _meta = {};
  _meta.color = meta.color || "red";
  _meta.type = meta.type || "bits";
  _meta.labels = meta.labels || null;
  const leddata = new Array(bitSize).fill(0).map((x, i) => ({
    val:
      meta.type == "counter"
        ? value == i
          ? 1
          : 0
        : value
            .toString(2)
            .padStart(bitSize, "0")
            .split("")
            .map(x => +x)[i],
    color: _meta.color || "red",
    label:
      Array.isArray(_meta.labels) && typeof _meta.labels[i] != "undefined"
        ? _meta.labels[i]
        : null
  }));

  console.log("leddata: ", node, value, bitSize, meta, leddata);
  const leds = node.selectAll(".led").data(leddata);

  leds
    .enter()
    .append("g")
    .attr("class", "led")
    .attr("transform", (d, i) => `translate(${5 + i * DEFAULT_NODE_SIZE[0]} 0)`)
    .call(LED);

  node
    .selectAll("circle")
    .data(leddata)
    .attr("stroke-width", "0")
    .attr("style", d => {
      return d.val >= 1
        ? `fill:url(#${d.color}radialon);filter:url(#${d.color}glow);`
        : `fill:url(#${d.color}radialoff)`;
    });
};
