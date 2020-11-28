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
            cells. Re-click the first selected cell to complete a block. Left
            click a non-overlapping cell to activate that block. Right click a
            non-overlapping cell to delete that block.
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
            <!-- header row -->
            <template v-for="(col, j) in grayCode(kmapInputs.cols.length)">
              <v-text
                :key="'header' + j"
                :config="{
                  text: col,
                  x: kmapDims.colStart + (j + 1) * kmapDims.colSpacing,
                  y: kmapDims.rowStart,
                  width: kmapDims.colSpacing,
                  height: kmapDims.rowSpacing,
                  fontSize: 16,
                  align: 'center',
                  verticalAlign: 'middle'
                }"
              ></v-text>
            </template>

            <!-- selections -->
            <template v-for="(selection, sel_n) in selections">
              <v-rect
                v-for="cell in selection"
                :key="'selection_' + sel_n + '_' + cell.i + cell.j"
                :config="{
                  x: kmapDims.colStart + (cell.j + 1) * kmapDims.colSpacing,
                  y: kmapDims.rowStart + (cell.i + 1) * kmapDims.rowSpacing,
                  width: kmapDims.colSpacing,
                  height: kmapDims.rowSpacing,
                  fill: kmapColors[sel_n % 7]
                }"
              ></v-rect>
            </template>

            <!-- data rows -->
            <template v-for="(row, i) in grayCode(kmapInputs.rows.length)">
              <div :key="i">
                <v-text
                  :config="{
                    text: row,
                    x: kmapDims.colStart,
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
                        x: kmapDims.colStart + (j + 1) * kmapDims.colSpacing,
                        y: kmapDims.rowStart + (i + 1) * kmapDims.rowSpacing,
                        width: kmapDims.colSpacing,
                        height: kmapDims.rowSpacing,
                        fill: 'rgba(0,0,0,0)',
                        strokeWidth: 1,
                        stroke: 'lightgrey'
                      }"
                    ></v-rect>
                    <v-text
                      :config="{
                        text: isActiveBlockStart(i, j)
                          ? `*${kmapCells[i][j]}*`
                          : kmapCells[i][j],
                        x: kmapDims.colStart + (j + 1) * kmapDims.colSpacing,
                        y: kmapDims.rowStart + (i + 1) * kmapDims.rowSpacing,
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
      kmapColors: [
        "#ef9a9a88",
        "#ce93d888",
        "#9fa8da88",
        "#81d4fa88",
        "#a5d6a788",
        "#fff59d88",
        "#ffcc888a"
      ]
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
    }
  },
  computed: {
    inputNames() {
      return this.userInputs.replace(/\s/g, "").split(",");
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
        if (
          ![1, 2, 4, 8, 16].some(
            x => x == this.selections[this.curSelection].length
          )
        )
          return "Selection must have 1,2,4 or 8 cells";
      }
      return "Pass";
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

    onCellClick(evt) {
      let cell = evt.target.attrs.cell;
      if (!this.kmapCells[cell.i][cell.j]) return; // can't select cells with 0 value

      if (this.curSelection == -1) {
        // not yet selecting
        const index = this.selections.findIndex(sel =>
          sel.some(x => this.isSameCell(cell)(x))
        );
        if (index == -1) {
          // not currently selecting and cell is not part of a selection so start a new curSelection
          console.log(
            "not currently selecting and cell is not part of a selection so start a new curSelection",
            index
          );
          this.selections.push([{ i: cell.i, j: cell.j }]);
          this.curSelection = this.selections.length - 1;
        } else {
          // not currently selecting and cell IS part of an existing selection, set curSelection to the existing selection
          console.log(
            "not currently selecting and cell IS part of an existing selection, set curSelection to the existing selection",
            index
          );
          this.curSelection = index;
        }
        return;
      }

      // must already be in selection mode

      // if reselect first cell in selection then stop selecting
      if (this.isSameCell(cell)(this.selections[this.curSelection][0])) {
        console.log("clicked first cell so stopping selection");
        this.curSelection = -1; // TODO: do validity check and abort if invalid selection
        return;
      }

      // add to cur selection

      if (
        !this.selections[this.curSelection].some(x => this.isSameCell(cell)(x))
      ) {
        console.log(
          "clicked a new cell and adding to selection as it's not already there",
          this.curSelection
        );
        this.selections[this.curSelection].push(cell);
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
