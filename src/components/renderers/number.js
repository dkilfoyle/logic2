// import { GenericNodeRenderer } from "d3-hwschematic";

/**
 * Draw a multiplexer operator symbol
 */

function NUMBER_SHAPE(root) {
  // width="20" height="40"
  // const setTM = (element, m) =>
  //   element.transform.baseVal.initialize(
  //     element.ownerSVGElement.createSVGTransformFromMatrix(m)
  //   );

  root
    .append("rect")
    .attr("width", 20)
    .attr("height", 20);
  root
    .append("text")
    .text("X")
    .attr("x", 5)
    .attr("y", 15)
    .attr("id", d => d.id + "_number")
    .attr("class", "schematicnumber");
  // let bbox = text[0][0].getBBox();
  // let ctm = text[0][0].getCTM();
  // console.log(bbox, ctm);
  // let rect = text
  //   .append("rect")
  //   .attr("x", bbox.x)
  //   .attr("y", bbox.y)
  //   .attr("width", bbox.width)
  //   .attr("height", bbox.height);
  // setTM(rect[0][0], ctm);
}

export default class NumberRenderer extends window.d3.GenericNodeRenderer {
  constructor(schematic) {
    super(schematic);
    this.DEFULT_NODE_SIZE = [20, 20];
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
      .attr("style", d => d.hwMeta.cssStyle);
    // .attr("id", d => d.id);
    var cont = nodeG.append("g");
    cont.attr("id", d => d.id + "_NUMBER");
    cont.attr("class", "d3-hwschematic node-operator node-number");
    NUMBER_SHAPE(cont);
  }
}
