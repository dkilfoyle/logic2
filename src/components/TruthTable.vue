<template>
  <div class="truth-page">
    <div class="columns">
      <div class="column">
        <b-field label="Inputs" message="Comma delimited"
          ><b-input v-model="userInputs"></b-input
        ></b-field>
      </div>
      <div class="column">
        <b-field label="Output" message="Single"
          ><b-input v-model="outputName"></b-input
        ></b-field>
      </div>
    </div>

    <div class="columns" v-show="showTruthTableHelp">
      <div class="column">
        <div class="message is-info">
          <div class="message-header">
            <p>Truth Table Instructions</p>
            <button class="delete" @click="showTruthTableHelp = false"></button>
          </div>
          <div class="message-body">
            Click outputs (rightmost column) in the Truth Table to toggle the
            desired output (0 or 1) for each unique combination of inputs. The
            code below will compile the Truth Table into a logic statement via
            the Sum of Products.
          </div>
        </div>
      </div>
    </div>

    <div class="columns" v-show="showKmapHelp">
      <div class="column">
        <div class="message is-info">
          <div class="message-header">
            <p>Karnaugh Map Instructions</p>
            <button class="delete" @click="showKmapHelp = false"></button>
          </div>
          <div class="message-body">
            Outputs with a value of 1 are transferred to the cells of the KMap.
            Click adjacent '1' cells in the kmap to select regions of 1,2,4 or 8
            cells. Click the triangle in the upper-left cell to complete a
            block. Select existing blocks by clicking the triangle. Aim to have
            all "1"s covered by the minimum possible number of blocks.
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <h4 class="title is-4">
                Truth Table
              </h4>
            </div>
            <div class="level-item">
              <span class="tag is-info" @click="showTruthTableHelp = true"
                >?</span
              >
            </div>
          </div>
        </div>

        <table class="table truth-table">
          <thead>
            <tr>
              <th v-for="input in inputNames" :key="input">
                {{ input }}
              </th>
              <th class="has-text-centered truth-output">{{ outputName }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, i) in truth.length" :key="i">
              <td v-for="(m, j) in inputDimension" :key="j">
                {{ inputs(i)[j] }}
              </td>

              <td
                class="has-text-centered truth-output"
                v-if="output(i) == 1"
                @click="toggle(i)"
              >
                <!-- <i class="fa fa-check"></i> -->
                <img src="@/assets/icons8-number-1-48.png" />
              </td>
              <td
                class="has-text-centered truth-output"
                v-else
                @click="toggle(i, inputs.length)"
              >
                <!-- <i class="fa fa-times"></i> -->
                <img src="@/assets/icons8-0-52.png" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <h4 class="title is-4">
                Karnaugh Map
              </h4>
            </div>
            <div class="level-item">
              <span class="tag is-info" @click="showKmapHelp = true">?</span>
            </div>
          </div>
        </div>

        <v-stage :config="{ width: 600, height: 200 }">
          <v-layer>
            <!-- selections shading -->
            <template v-for="(selection, sel_n) in selections">
              <v-rect
                v-for="cell in selection"
                :key="'selection_' + sel_n + '_' + cell.i + cell.j"
                :config="{
                  x: kmapDims.colStart + (cell.j + 1) * kmapDims.colSpacing,
                  y: kmapDims.rowStart + (cell.i + 1) * kmapDims.rowSpacing,
                  width: kmapDims.colSpacing,
                  height: kmapDims.rowSpacing,
                  fill: mdcolors[kmapColors[sel_n % 7]]['300'] + '88'
                }"
              ></v-rect></template
          ></v-layer>

          <v-layer>
            <!-- header row -->
            <v-line
              :config="{
                points: [
                  kmapDims.colStart + (0 + 1) * kmapDims.colSpacing,
                  kmapDims.rowStart + (0 + 1) * kmapDims.rowSpacing,
                  kmapDims.colStart + (0 + 1) * kmapDims.colSpacing - 40,
                  kmapDims.rowStart + (0 + 1) * kmapDims.rowSpacing - 40
                ],
                stroke: 'lightgray',
                strokeWidth: 2
              }"
            ></v-line>
            <v-text
              :config="{
                x: kmapDims.colStart + (0 + 1) * kmapDims.colSpacing - 10,
                y: kmapDims.rowStart + (0 + 1) * kmapDims.rowSpacing - 40,
                fill: 'darkgray',
                text: kmapInputs.cols.join('')
              }"
            ></v-text>
            <v-text
              :config="{
                x: kmapDims.colStart + (0 + 1) * kmapDims.colSpacing - 35,
                y: kmapDims.rowStart + (0 + 1) * kmapDims.rowSpacing - 15,
                fill: 'darkgray',
                text: kmapInputs.rows.join('')
              }"
            ></v-text>
            <template v-for="(col, j) in grayCode(kmapInputs.cols.length)">
              <v-text
                :key="'header' + j"
                :config="{
                  text: col,
                  x: kmapDims.colStart + (j + 1) * kmapDims.colSpacing,
                  y: kmapDims.rowStart + 10,
                  width: kmapDims.colSpacing,
                  height: kmapDims.rowSpacing,
                  fontSize: 16,
                  align: 'center',
                  verticalAlign: 'middle'
                }"
              ></v-text>
            </template>

            <!-- data rows -->
            <template v-for="(row, i) in grayCode(kmapInputs.rows.length)">
              <div :key="i">
                <v-text
                  :config="{
                    text: row,
                    x: kmapDims.colStart + 30,
                    y: kmapDims.rowStart + (i + 1) * kmapDims.rowSpacing,
                    width: kmapDims.colSpacing,
                    height: kmapDims.rowSpacing,
                    fontSize: 16,
                    align: 'center',
                    verticalAlign: 'middle'
                  }"
                ></v-text>
                <template v-for="(col, j) in kmapInputs.cols.length * 2">
                  <div :key="i + j">
                    <v-rect
                      :config="{
                        x: kmapCellsXY[i][j].x,
                        y: kmapCellsXY[i][j].y,
                        width: kmapDims.colSpacing,
                        height: kmapDims.rowSpacing,
                        fill: 'rgba(0,0,0,0)',
                        strokeWidth: 1,
                        stroke: 'lightgrey'
                      }"
                    ></v-rect>
                    <v-text
                      :config="{
                        text: kmapCells[i][j],
                        x: kmapCellsXY[i][j].x,
                        y: kmapCellsXY[i][j].y,
                        width: kmapDims.colSpacing,
                        height: kmapDims.rowSpacing,
                        fontSize: 16,
                        align: 'center',
                        verticalAlign: 'middle',
                        fill: kmapCells[i][j] ? 'black' : 'lightgrey',
                        cell: { i, j }
                      }"
                      @click="onCellClick"
                    ></v-text>
                  </div>
                </template>
              </div>
            </template>
          </v-layer>

          <v-layer>
            <!-- selections top left -->
            <template v-for="(cell, sel_n) in upperLeftCells">
              <v-line
                :key="'selection_' + sel_n"
                :config="{
                  closed: true,
                  points: [
                    kmapCellsXY[cell.i][cell.j].x,
                    kmapCellsXY[cell.i][cell.j].y,
                    kmapCellsXY[cell.i][cell.j].x + 20,
                    kmapCellsXY[cell.i][cell.j].y,
                    kmapCellsXY[cell.i][cell.j].x,
                    kmapCellsXY[cell.i][cell.j].y + 20
                  ],
                  width: kmapDims.colSpacing,
                  height: kmapDims.rowSpacing,
                  fill: mdcolors[kmapColors[sel_n % 7]]['500'],
                  cell: cell
                }"
                @click="onSelectionClick"
              ></v-line> </template
          ></v-layer>

          <!-- current selection outline -->
          <v-layer>
            <v-line
              v-for="(line, x) in currentSelectionOutline"
              :key="'outline' + x"
              :config="{
                points: line,
                stroke: mdcolors[kmapColors[curSelection]]['500'] + 'ff',
                strokeWidth: 3,
                lineCap: 'round'
              }"
            ></v-line
          ></v-layer>
        </v-stage>
        <h6>
          KMap Status: <span>{{ kmapStatus }}</span>
        </h6>

        <h6>
          KMap Logic:
          <span v-for="(sel, seln) in selections" :key="seln">
            <span
              @click="curSelection = seln"
              :style="'color: ' + kmapColors[seln]"
              >{{ simplifyKMapSelection(sel) }}</span
            >
            <span v-if="seln < selections.length - 1"> | </span>
          </span>
        </h6>
      </div>
    </div>
    <div class="columns" style="height:400px">
      <div class="column">
        <editor
          v-model="$store.state.openFiles.TruthTable.code"
          @passLint="passLint"
          @compile="$emit('compile')"
          @simulate="$emit('simulate')"
          ref="editor"
        ></editor>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import Editor from "./Editor";
import template from "../files/truthtemplate.v";

const fillTemplate = function(templateString, templateVars) {
  return new Function("return `" + templateString + "`;").call(templateVars);
};

import colors from "material-colors";

export default {
  data() {
    return {
      userInputs: "a, b, c",
      outputName: "Y",
      truth: [],
      selections: [],
      curSelection: -1,
      showKmapHelp: false,
      showTruthTableHelp: false,
      kmapDims: {
        rowSpacing: 50,
        rowStart: 10,
        colSpacing: 100,
        colStart: 10
      },
      mdcolors: colors,
      kmapColors: ["red", "blue", "green", "orange", "purple", "teal", "brown"]
    };
  },
  mixins: [UtilsMixin, SelectionsMixin],
  components: { Editor },
  watch: {
    userInputs() {
      this.buildTruth();
    },
    code() {
      this.$refs.editor.editor.getModel().setValue(this.code);
    },
    truth() {
      this.selections = [];
      this.curSelection = -1;
    }
  },
  computed: {
    inputNames() {
      return this.userInputs
        .replace(/\s/g, "")
        .split(",")
        .slice(0, 4); // currently maximum of 4 inputs
    },
    inputDimension() {
      return this.inputNames.length;
    },
    kmap() {
      return this.selections
        .map(sel => this.simplifyKMapSelection(sel))
        .join(" | ");
    },

    sumofproducts() {
      return this.truth
        .filter((row, i) => this.output(i))
        .map(
          row =>
            "(" +
            row
              .slice(0, this.inputDimension)
              .map((input, j) => (input ? "" : "~") + this.inputNames[j])
              .join(" & ") +
            ")"
        )
        .join(" | ");
    },
    kmapBinaryIndices() {
      switch (this.inputDimension) {
        case 2:
          return this.grayCode(1).map(row =>
            this.grayCode(1).map(col => col + row)
          );
        case 3:
          return this.grayCode(1).map(row =>
            this.grayCode(2).map(col => col + row)
          );
        case 4:
          return this.grayCode(2).map(row =>
            this.grayCode(2).map(col => col + row)
          );
      }
      return [];
    },

    kmapIndices() {
      return this.kmapBinaryIndices.map(row =>
        row.map(item => parseInt(item, 2))
      );
    },
    kmapCells() {
      return this.kmapIndices.map(row => row.map(col => this.output(col)));
    },
    kmapCellsXY() {
      return this.kmapCells.map((row, i) =>
        row.map((col, j) => ({
          x: this.kmapDims.colStart + (j + 1) * this.kmapDims.colSpacing,
          y: this.kmapDims.rowStart + (i + 1) * this.kmapDims.rowSpacing
        }))
      );
    },

    kmapInputs() {
      var rows = [];
      var cols = [];
      switch (this.inputDimension) {
        case 2:
          rows = [this.inputNames[0]];
          cols = [this.inputNames[1]];
          break;
        case 3:
          cols = [this.inputNames[0], this.inputNames[1]];
          rows = [this.inputNames[2]];
          break;
        case 4:
          cols = [this.inputNames[0], this.inputNames[1]];
          rows = [this.inputNames[2], this.inputNames[3]];
          break;
      }
      return { rows, cols };
    },
    kmapStatus() {
      if (this.curSelection == -1) {
        // none selected
        // are there any uncovered 1s
        if (
          this.kmapCells.some((row, i) =>
            row.some(
              (val, j) =>
                val == 1 &&
                !this.selections.some(sel =>
                  sel.some(cell => cell.i == i && cell.j == j)
                )
            )
          )
        ) {
          return "Unselected 1s";
        }
      } else {
        // building a block
        if (
          ![1, 2, 4, 8, 16].some(
            x => x == this.selections[this.curSelection].length
          )
        )
          return "Selection must have 1,2,4 or 8 cells";
        // todo check that all cells are adacent
        // if not adjacent return "Cells in a selection must be adjacent, no islands"
      }
      return "Pass";
    },

    upperLeftCells() {
      // return the upper left cell of each selection
      return this.selections.map((selection, i) => ({
        ...this.upperLeftCell(selection),
        selection: i
      }));
    },

    currentSelectionOutline() {
      if (this.curSelection == -1) return [];

      let cells = this.selections[this.curSelection];
      let lines = [];

      let maxi = this.kmapCells.length;
      let maxj = this.kmapCells[0].length;

      cells.forEach(cell => {
        // nothing on same row to the left including wrapping?
        if (
          !cells.some(
            x => x.i == cell.i && (x.j < cell.j || (cell.j == 0 && x.j == maxj))
          )
        ) {
          lines.push([
            this.kmapDims.colStart + (cell.j + 1) * this.kmapDims.colSpacing,
            this.kmapDims.rowStart + (cell.i + 1) * this.kmapDims.rowSpacing,
            this.kmapDims.colStart + (cell.j + 1) * this.kmapDims.colSpacing,
            this.kmapDims.rowStart + (cell.i + 2) * this.kmapDims.rowSpacing
          ]);
        }
        // nothing on same row to the right including wrapping?
        if (
          !cells.some(
            x => x.i == cell.i && (x.j > cell.j || (cell.j == maxj && x.j == 0))
          )
        ) {
          lines.push([
            this.kmapDims.colStart + (cell.j + 2) * this.kmapDims.colSpacing,
            this.kmapDims.rowStart + (cell.i + 1) * this.kmapDims.rowSpacing,
            this.kmapDims.colStart + (cell.j + 2) * this.kmapDims.colSpacing,
            this.kmapDims.rowStart + (cell.i + 2) * this.kmapDims.rowSpacing
          ]);
        }
        // nothing on same col above including wrapping?
        if (
          !cells.some(
            x => x.j == cell.j && (x.i < cell.i || (cell.i == 0 && x.i == maxi))
          )
        ) {
          lines.push([
            this.kmapDims.colStart + (cell.j + 1) * this.kmapDims.colSpacing,
            this.kmapDims.rowStart + (cell.i + 1) * this.kmapDims.rowSpacing,
            this.kmapDims.colStart + (cell.j + 2) * this.kmapDims.colSpacing,
            this.kmapDims.rowStart + (cell.i + 1) * this.kmapDims.rowSpacing
          ]);
        }
        // nothing on same col below including wrapping?
        if (
          !cells.some(
            x => x.j == cell.j && (x.i > cell.i || (cell.i == maxi && x.i == 0))
          )
        ) {
          lines.push([
            this.kmapDims.colStart + (cell.j + 1) * this.kmapDims.colSpacing,
            this.kmapDims.rowStart + (cell.i + 2) * this.kmapDims.rowSpacing,
            this.kmapDims.colStart + (cell.j + 2) * this.kmapDims.colSpacing,
            this.kmapDims.rowStart + (cell.i + 2) * this.kmapDims.rowSpacing
          ]); // y1
        }
      });

      return lines;
    },
    testBench() {
      return this.truth
        .map(
          (row, i) =>
            `    #${i} {` +
            this.inputs(i)
              .map((input, j) => this.inputNames[j] + "=" + input)
              .join(", ") +
            " };"
        )
        .join("\n");
    },
    code() {
      return fillTemplate(template, {
        inputNames: this.inputNames.join(", "),
        outputName: this.outputName,
        sumofproducts: this.sumofproducts,
        kmap: this.kmap,
        testBench: this.testBench,
        arguments: this.inputNames.map(i => `.${i}(${i})`).join(", ")
      });
    }
  },
  created() {
    this.buildTruth();
  },
  methods: {
    simplifyKMapSelection(sel) {
      let sums = new Array(this.inputDimension).fill(0);
      sel.forEach(cell => {
        let bits = this.kmapBinaryIndices[cell.i][cell.j]
          .split("")
          .map(x => parseInt(x));
        bits.forEach((bit, index) => (sums[index] += bit));
      });
      let terms = [];
      sums.forEach((sum, i) => {
        if (sum == 0) {
          // all 0s
          terms.push("~" + this.inputNames[i]);
        } else if (sum == sel.length) {
          // all 1s
          terms.push(this.inputNames[i]);
        }
      });
      return terms.length > 1 ? "( " + terms.join(" & ") + " )" : terms[0];
    },
    grayCode(bits) {
      switch (bits) {
        case 1:
          return ["0", "1"];
        case 2:
          return ["00", "01", "11", "10"];
        case 3:
          return ["000", "001", "011", "010", "100", "101", "110", "111"];
        default:
          throw new Error("");
      }
    },
    inputs(row) {
      return this.truth[row].slice(0, this.inputDimension);
    },
    output(row) {
      return this.truth[row][this.inputNames.length];
    },

    selectionsAt(i, j) {
      return this.upperLeftCellsAt(i, j).map(cell => cell.selection);
    },
    upperLeftCellsAt(i, j) {
      return this.upperLeftCells.filter(cell => cell.i == i && cell.j == j);
    },
    upperLeftCell(selection) {
      let mini = 1000;
      let minj = 1000;
      let index = -1;
      selection.forEach((cell, k) => {
        if (cell.i < mini) {
          mini = cell.i;
          index = k;
        }
        if (cell.j < minj) {
          minj = cell.j;
          index = k;
        }
      });
      return selection[index];
    },
    resize() {
      this.$refs.editor.resize();
    },
    buildTruth() {
      this.truth = new Array(2 ** this.inputDimension); // rows
      for (let i = 0; i < this.truth.length; i++) {
        this.truth[i] = [
          ...i
            .toString(2)
            .padStart(this.inputDimension, "0")
            .split("")
            .map(x => parseInt(x)),
          0
        ];
      }
    },
    toggle(i) {
      let newRow = [...this.inputs(i), ~this.output(i) & 1];
      this.$set(this.truth, i, newRow);
    },
    passLint(e) {
      this.$emit("passLint", e);
    },
    focus() {
      this.$refs.editor.editor.focus();
    },

    isSameCell(x) {
      return y => x.i == y.i && x.j == y.j;
    },

    isActiveBlockStart(i, j) {
      return (
        this.curSelection > -1 &&
        this.isSameCell(this.selections[this.curSelection][0])({ i, j })
      );
    },

    get2dIndex(arr, fun) {
      for (let i = 0; i < arr.length; i++) {
        let j = arr.findIndex(x => fun(x));
        if (j > -1) return [i, j];
      }
      return [-1, -1];
    },

    onSelectionClick(evt) {
      let cell = evt.target.attrs.cell;
      let indices = [...this.selectionsAt(cell.i, cell.j), -1];
      console.log("onSelectionClick: ", cell, indices, this.curSelection);
      if (indices.length == 0) throw new Error("huh?");
      if (this.curSelection == -1) {
        this.curSelection = indices[0];
      } else {
        this.curSelection =
          indices[
            (indices.findIndex(i => i == this.curSelection) + 1) %
              indices.length
          ];
      }
      console.log("onSelectionClick ====> ", this.curSelection);
    },

    onCellClick(evt) {
      let cell = evt.target.attrs.cell;
      console.log("onCellClick: ", cell);

      if (!this.kmapCells[cell.i][cell.j]) return; // can't select cells with 0 value

      if (this.curSelection == -1) {
        // no active selection so start a new one and add this cell
        this.selections.push([{ i: cell.i, j: cell.j }]);
        this.curSelection = this.selections.length - 1;
      } else {
        // there is an active selection so add this cell if not already present, else remove it from the selection
        let index = this.selections[this.curSelection].findIndex(x =>
          this.isSameCell(cell)(x)
        );
        if (index == -1) {
          // cell does not exist in this selection so add it
          this.selections[this.curSelection].push(cell);
        } else {
          // cell alreaddy in selection so remove it (toggle it off)
          this.selections[this.curSelection].splice(index, 1);
          if (this.selections[this.curSelection].length == 0) {
            this.selections.splice(this.curSelection, 1); // remove the empty selection
            this.curSelection = -1;
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.truth-page {
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.truth-output {
  border-left: 1px solid black;
}
.truth-table td {
  width: 3em;
  height: 2em;
}
</style>
