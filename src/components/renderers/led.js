// import { GenericNodeRenderer } from "d3-hwschematic";

function LED(root) {
  // width="30" height="20"
  root
    .append("path")
    .attr("id", "glowBulb")
    .attr(
      "d",
      "M 127.445 479.869 L 127.445 330.591 C 127.445 330.591 143.214 280.907 210.031 278.92 C 276.845 276.932 293.445 333.77 293.445 333.77 L 293.445 479.869"
    )
    .attr("style", "fill: rgb(237, 13, 13)")
    .attr("class", "ledGlowOff");
  root
    .append("path")
    .attr("id", "filamentLeft")
    .attr(
      "d",
      "M 166.28601,466.643 V 339.5 h 15.35714 l 22.86481,13.201 3.9209,10.37043 -19.28571,7.14285 V 466.643 Z"
    )
    .attr(
      "style",
      "fill-opacity: 1; fill-rule: evenodd;  fill: rgb(206, 72, 72);"
    );
  root
    .append("path")
    .attr("id", "filamentRight")
    .attr(
      "d",
      "m 196.28601,337.71428 h 68.92857 V 466.643 H 229.85744 L 213.07172,434.5 v -54.64286 l 14.64286,-23.57143 z"
    )
    .attr(
      "style",
      "fill-opacity: 1; fill-rule: evenodd;  fill: rgb(206, 72, 72);"
    );
  root
    .append("path")
    .attr("id", "legLeft")
    .attr(
      "d",
      "M 166.286 505.929 L 166.286 650.929 L 190.572 650.929 L 190.572 505.929 Z"
    )
    .attr(
      "style",
      "fill: rgb(128, 128, 128); fill-opacity: 1; fill-rule: evenodd;  mix-blend-mode: darken;"
    );
  root
    .append("path")
    .attr("id", "legRight")
    .attr(
      "d",
      "M 240.929 505.929 L 240.929 605.929 L 265.215 605.929 L 265.215 505.929 Z"
    )
    .attr("style", "fill:#808080;fill-opacity:1;fill-rule:evenodd;");
  root
    .append("path")
    .attr("id", "bulb")
    .attr(
      "d",
      "M 141.98688,466.634 V 336.09765 c 0,0 13.20755,-43.44588 69.16584,-45.18371 55.95829,-1.73783 69.86098,47.96424 69.86098,47.96424 V 466.634"
    )
    .attr("class", "ledRedOff");
  root
    .append("path")
    .attr("id", "base")
    .attr(
      "d",
      "m 114.44549,466.634 v 39.30443 l 184.01929,-2.1e-4 v -39.30487 z"
    )
    .attr("style", "fill:#ff4a4a;fill-opacity:1;fill-rule:evenodd;");
}

export default class LedRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super(schematic);
    this.DEFULT_NODE_SIZE = [16, 32];
    this._defsAdded = false;
  }

  prepare(node) {
    if (!this._defsAdded) {
      var defs = this.schematic.defs;
      const linearGradient = defs
        .append("linearGradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", "211.5")
        .attr("y1", "209.869")
        .attr("x2", "211.5")
        .attr("y2", "466.634")
        .attr("id", "gradient-0");
      linearGradient
        .append("stop")
        .attr("offset", "0")
        .attr("style", "stop-color: rgba(255, 128, 128, 1)");
      linearGradient
        .append("stop")
        .attr("offset", "1")
        .attr("style", "stop-color: rgba(255, 26, 26, 1)");
      const filter = defs
        .append("filter")
        .attr("id", "gaussian-blur-filter-0")
        .attr("color-interpolation-filters", "sRGB")
        .attr("x", "-500%")
        .attr("y", "-500%")
        .attr("width", "1000%")
        .attr("height", "1000%")
        .attr("bx:preset", "gaussian-blur 1 10");
      filter
        .append("feGaussianBlur")
        .attr("stdDeviation", "10 10")
        .attr("edgeMode", "none");
      this._defsAdded = true;
    }
    node.width = this.DEFULT_NODE_SIZE[0];
    node.height = this.DEFULT_NODE_SIZE[1];
  }

  selector(node) {
    return node.hwMeta.cls == "Operator" && node.hwMeta.name === "LED";
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
      .attr(
        "style",
        "stroke: rgb(0, 0, 0); stroke-width: 1; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-dasharray: none; stroke-opacity: 1;"
      );

    // .attr("id", d => d.id);
    var cont = nodeG.append("g");
    cont.attr("id", d => d.id + "_LED");
    cont
      .attr("class", "d3-hwschematic node-operator")
      .attr("transform", "translate(-10 -30) scale(0.1 0.1) ");
    LED(cont);
  }
}
