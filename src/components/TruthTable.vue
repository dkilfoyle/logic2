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
        <table class="table is-fullwidth">
          <thead class="bg-teal">
            <tr class="text-white">
              <th></th>
              <th class="text-left">00</th>
              <th class="text-left">01</th>
              <th class="text-left">11</th>
              <th class="text-left">10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00</td>
            </tr>
            <tr>
              <td>01</td>
            </tr>
            <tr>
              <td>11</td>
            </tr>
            <tr>
              <td>10</td>
            </tr>
          </tbody>
        </table>
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
      truth: []
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
        testBench: this.testBench
      });
    }
  },
  created() {
    this.buildTruth();
  },
  methods: {
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
