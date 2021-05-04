<template>
  <div class="gates-page">
    <div class="gates-container" v-if="$store.getters.isCompiled">
      <div class="gates-toolbar">
        <instance-crumbs owner="gates"></instance-crumbs>
        <div style="margin-left:auto;">
          <button
            class="button is-small is-rounded is-primary is-light"
            @click="toggleStateFormat"
          >
            {{ $store.state.stateFormat }}
          </button>
          <button
            class="button is-small is-rounded is-info is-light"
            style="margin-left:5px"
          >
            t = {{ currentFile.selectedTime }}
          </button>
        </div>
      </div>

      <div class="gates-table skinny-scroll">
        <b-table
          :data="gates"
          ref="table"
          :detailed="gates.some(x => x.type == 'array')"
          hoverable
          custom-detail-row
          detail-key="name"
          :has-detailed-visible="row => row.type == 'array'"
          :row-class="(row, index) => getRowClass(row)"
        >
          <b-table-column
            field="name"
            label="Name"
            sortable
            v-slot="props"
            width="20%"
          >
            <template v-if="showDetailIcon">
              {{ props.row.name }}
            </template>
            <template v-else>
              <a @click="toggleDetail(props.row)">
                {{ props.row.name }}
              </a>
            </template></b-table-column
          >
          <b-table-column
            field="type"
            label="Type"
            v-slot="props"
            sortable
            width="5%"
          >
            <img
              :src="require('@/assets/' + props.row.type + '.svg')"
              class="gateicon"
            />
          </b-table-column>

          <b-table-column field="state" label="State" numeric width="30%">
            <template v-slot="props">
              <template v-if="$store.state.stateFormat == 'logic'">
                <img
                  v-if="getTimeState(props.row.id) == 0"
                  src="@/assets/icons8-0-52.png"
                  class="stateicon"/>
                <img
                  v-else
                  src="@/assets/icons8-number-1-48.png"
                  class="stateicon"
              /></template>
              <template v-else>
                {{
                  formatState(
                    getTimeState(props.row.id),
                    $store.state.stateFormat,
                    props.row.displayType
                  )
                }}</template
              ></template
            >
          </b-table-column>

          <b-table-column
            field="bitsize"
            label="BitSize"
            v-slot="props"
            numeric
            width="5%"
          >
            {{ props.row.state.bitArray.length }}
          </b-table-column>

          <template slot="detail" slot-scope="props">
            <template v-for="(item, index) in props.row.state">
              <tr
                v-if="
                  getTimeState(props.row.id, index) != 0 ||
                    $store.state.memoryDumpHideZeros
                "
                :key="index"
              >
                <td></td>
                <td>
                  <span style="padding-left:15px"
                    >{{ props.row.id }}[{{ index }}]</span
                  >
                </td>
                <td></td>
                <td></td>
                <td class="has-text-right">
                  {{
                    formatState(
                      getTimeState(props.row.id, index),
                      $store.state.stateFormat,
                      props.row.displayType
                    )
                  }}
                </td>
              </tr></template
            >
          </template>

          <b-table-column
            field="inputs"
            label="Inputs"
            v-slot="props"
            width="40%"
          >
            {{ props.row.inputs.map(x => x.id).join(", ") }}
          </b-table-column>
        </b-table>
      </div>
    </div>

    <div class="dk-flex-col dk-h-100 dk-justify-center dk-align-center" v-else>
      <h4>
        Compile
        <button
          class="button is-primary is-small is-info"
          @click="$emit('compile')"
          title="Compile"
        >
          <span class="icon is-small">
            <i class="fa fa-refresh"></i>
          </span>
        </button>
        to show gates
      </h4>
    </div>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import InstanceCrumbs from "./InstanceCrumbs";
import Numeric from "../lib/Numeric";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showDetailIcon: true,
      stateFormatBase: {
        binary: 2,
        octal: 8,
        decimal: 10,
        hex: 16
      },
      gates: [],
      time: 0
    };
  },
  mixins: [UtilsMixin, SelectionsMixin],
  components: { InstanceCrumbs },
  computed: {
    ...mapGetters([
      "getGate",
      "currentFile",
      "isCompiled",
      "isSimulated",
      "getGateStateAtTime",
      "selectedInstanceID"
    ]),
    compileStatus() {
      return this.isCompiled && this.currentFile.compileResult.timestamp;
    },
    simulateStatus() {
      return this.isSimulated && this.currentFile.simulateResult.timestamp;
    }
  },
  watch: {
    compileStatus(status) {
      if (status) {
        if (this.$store.state.tableFollowsSchematic && this.selectedGateID) {
          // eslint-disable-next-line no-debugger
          let selectedGate = this.getGate(this.selectedGateID);
          let topGates = [
            this.selectedGateID,
            ...selectedGate.inputs.map(input => input.id)
          ];
          // start off with the filteredinstance gates then remove selected gate and its inputs
          let followGates = this.filteredInstanceGate_ids.filter(
            gateid => !topGates.includes(gateid)
          );
          // add the selectedgate and it's inputs back at the top
          followGates.unshift(...topGates);
          this.gates = followGates.map(g => this.getGate(g));
        } else
          this.gates = this.filteredInstanceGate_ids.map(g => this.getGate(g));
      }
    },
    selectedInstanceID() {
      this.gates = this.filteredInstanceGate_ids.map(g => this.getGate(g));
    }
  },
  methods: {
    getTimeState(id, index = null) {
      if (this.simulateStatus) {
        const res = this.getGateStateAtTime(id, this.currentFile.selectedTime);
        const res2 = index != null ? res[index] : res;
        return res2;
      } else return 0;
    },
    getRowClass(row) {
      if (!this.selectedGateID) return null;
      if (row.id == this.selectedGateID) return "has-background-danger-light";
      if (
        this.getGate(this.selectedGateID).inputs.some(
          input => input.id == row.id
        )
      )
        return "has-background-info-light";
      return null;
    },
    formatState(value, numFormat, specialFormat) {
      const x = new Numeric(value, specialFormat == "instruction" ? 32 : null);
      return x.toString(numFormat, specialFormat);
    },
    toggleDetail(row) {
      this.$refs.table.toggleDetails(row);
    },
    toggleStateFormat() {
      this.$store.commit("toggleStateFormat");
    },
    selectBreadcumb(node) {
      if (node == "main") {
        this.$store.commit("setSelectedInstanceID", "main");
        return;
      }
      const x = this.$store.getters.selectedInstanceID.substring(
        0,
        this.$store.getters.selectedInstanceID.indexOf("_" + node) +
          node.length +
          1
      );
      this.$store.commit("setSelectedInstanceID", x);
    }
  }
};
</script>

<style>
.gates-page {
  height: 100%;
}

.gates-container {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}

.gates-toolbar {
  display: grid;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  grid-template-columns: auto auto;
}

.gates-table {
  font-size: 10pt;
  overflow: auto;
  margin-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

/* .b-table .table-wrapper.has-sticky-header {
  height: inherit !important;
  overflow: inherit !important;
} */

.gateicon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
}

.stateicon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
}

td img.stateicon {
  display: block;
  margin-left: auto;
  margin-right: 0;
}

tr.is-selectedGate {
  background: #be6f56;
  color: #fff;
}

tr.is-input {
  background: #608dc0;
  color: #fff;
}

#gatestable {
  font-size: 10pt;
}

#gatestable::-webkit-scrollbar {
  width: 6px;
  height: 6px;

  /* border-left: #4a4a4a 1px solid; */
}

#gatestable::-webkit-scrollbar-thumb {
  background-color: #808080;
  /* border-left: #4a4a4a 1px solid; */
  border-radius: 6px;
  fill-opacity: 0.5;
}

tbody tr:hover {
  background-color: #e6e6e6a0;
}

.button {
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
  padding-bottom: 0px;
  height: auto;
}
</style>
