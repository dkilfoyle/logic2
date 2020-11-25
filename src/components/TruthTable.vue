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
    <div class="columns">
      <div class="column">
        <h4 class="title is-4">Truth Table</h4>
        <div class="message is-info" v-show="showTruthTableHelp">
          <div class="message-header">
            <p>Truth Table Instructions</p>
            <button class="delete" @click="showTruthTableHelp = false"></button>
          </div>
          <div class="message-body">
            Click outputs in the Truth Table to toggle 0/1.
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
        <h4 class="title is-4">Karnaugh Map</h4>
        <div class="message is-info" v-show="showKmapHelp">
          <div class="message-header">
            <p>KMap Instructions</p>
            <button class="delete" @click="showKmapHelp = false"></button>
          </div>
          <div class="message-body">
            Click adjacent '1' cells in the kmap. Re-click the first selected
            cell to complete a block of 1,2,4 or 8 adjacent cells. Right click a
            cell to delete that block.
          </div>
        </div>
        <table class="table is-fullwidth kmap-table">
          <thead class="bg-teal">
            <tr class="text-white">
              <th>
                {{ kmapInputs.rows.join("") }} \ {{ kmapInputs.cols.join("") }}
              </th>
              <template v-for="(col, j) in grayCode(kmapInputs.cols.length)">
                <th :key="j" class="text-left">{{ col }}</th></template
              >
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(rowInput, i) in grayCode(kmapInputs.rows.length)"
              :key="i"
            >
              <td>{{ rowInput }}</td>
              <td
                v-for="(n, j) in kmapInputs.cols.length * 2"
                :key="j"
                @click="kmapClick($event, i, j)"
                @contextmenu.prevent="kmapRClick($event, i, j)"
              >
                <!-- <img
                  src="@/assets/icons8-number-1-48.png"
                  class="kmap1"
                  v-if="kmapCells[i][j]"
                />
                <img src="@/assets/icons8-0-52.png" class="kmap0" v-else /> -->
                {{ kmapCells[i][j] }}
              </td>
            </tr>
          </tbody>
        </table>
        <p>{{ kmap }}</p>
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
      curSelection: [],
      selections: [],
      showKmapHelp: true,
      showTruthTableHelp: true
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

    incCell(td) {
      let curClass = Array.from(td.classList).find(x =>
        x.startsWith("selected-")
      );
      let curN = curClass ? parseInt(curClass.slice(9)) : -1;
      if (curClass) td.classList.remove(curClass);
      td.classList.add("selected-" + (curN + 1));
    },
    decCell(td) {
      let curClass = Array.from(td.classList).find(x =>
        x.startsWith("selected-")
      );
      let curN = curClass ? parseInt(curClass.slice(9)) : -1;
      console.log(curClass, curN);
      if (curClass) td.classList.remove(curClass);
      if (curN > 0) td.classList.add("selected-" + (curN - 1));
    },

    kmapRClick(e, i, j) {
      let index = this.selections.findIndex(sel =>
        sel.some(cell => cell.i == i && cell.j == j)
      );
      if (index >= 0) {
        this.selections[index].forEach(cell => {
          this.decCell(cell.td);
          cell.td.classList.remove("border-top");
          cell.td.classList.remove("border-bottom");
          cell.td.classList.remove("border-left");
          cell.td.classList.remove("border-right");
        });
        this.selections.splice(index, 1);
      }
    },

    kmapClick(e, i, j) {
      if (!this.kmapCells[i][j]) return; // can only click on 1s
      if (this.curSelection.length == 0) {
        // start selection
        this.curSelection.push({ i, j, td: e.target });
        e.target.classList.add("start-selection");
        this.incCell(e.target);
      } else if (i == this.curSelection[0].i && j == this.curSelection[0].j) {
        // end selection
        this.selections.push(this.curSelection);
        this.curSelection[0].td.classList.remove("start-selection");
        // outline the selection
        let bounds = this.curSelection.reduce(
          (bounds, cell) => {
            bounds.mini = Math.min(bounds.mini, cell.i);
            bounds.minj = Math.min(bounds.minj, cell.j);
            bounds.maxi = Math.max(bounds.maxi, cell.i);
            bounds.maxj = Math.max(bounds.maxj, cell.j);
            return bounds;
          },
          { mini: 1000, minj: 1000, maxi: -1, maxj: -1 }
        );
        this.curSelection.forEach(cell => {
          if (cell.i == bounds.mini) cell.td.classList.add("border-top");
          if (cell.i == bounds.maxi) cell.td.classList.add("border-bottom");
          if (cell.j == bounds.minj) cell.td.classList.add("border-left");
          if (cell.j == bounds.maxj) cell.td.classList.add("border-right");
        });
        this.curSelection = [];
      } else {
        // add or remove to selection
        let index = this.curSelection.findIndex(x => x.i == i && x.j == j);
        if (index > 0) {
          // clicked a cell that already exists in selection so remove it from selection
          this.curSelection.splice(index);
          this.decCell(e.target);
        } else {
          // clicked a new cell that needs to be added to curselection
          this.curSelection.push({ i, j, td: e.target }); // todo: check if valid adjacent
          this.incCell(e.target);
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

.border-left {
  border-left: 3px solid red;
}
.border-right {
  border-right: 3px solid red;
}
.border-top {
  border-top: 3px solid red;
}
.border-bottom {
  border-bottom: 3px solid red !important;
}

.selected-0 {
  background: var(--md-red-200);
}
.selected-1 {
  background: var(--md-red-300);
}
.selected-2 {
  background: var(--md-red-400);
}
.selected-3 {
  background: var(--md-red-500);
}
.selected-4 {
  background: var(--md-red-600);
}
.selected-5 {
  background: var(--md-red-700);
}
.selected-6 {
  background: var(--md-red-800);
}
.selected-7 {
  background: var(--md-red-900);
}
.start-selection {
  font-weight: bold;
}
.kmap0 {
  font-size: 10pt;
  color: darkgrey;
}
.kmap1 {
  font-size: 10pt;
}
.kmap-table td,
.kmap-table th {
  border-bottom: 0px;
}
</style>
