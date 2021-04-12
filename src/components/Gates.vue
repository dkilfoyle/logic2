/* eslint-disable no-debugger */
<template>
  <div class="dk-h-100">
    <div class="dk-flex-col dk-h-100" v-if="$store.getters.isCompiled">
      <div
        class="dk-flex-row dk-align-center"
        style="height:60px;padding:0 10px"
      >
        <instance-crumbs owner="gates"></instance-crumbs>
        <span class="dk-push-right">
          t = {{ $store.getters.currentFile.selectedTime }}</span
        >
      </div>

      <div
        id="gatestable"
        class="dk-h-100"
        style="padding-left:10px;padding-right:10px;overflow:auto;"
      >
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
          <b-table-column field="name" label="Name" sortable v-slot="props">
            <template v-if="showDetailIcon">
              {{ props.row.id }}
            </template>
            <template v-else>
              <a @click="toggleDetail(props.row)">
                {{ props.row.id }}
              </a>
            </template></b-table-column
          >
          <b-table-column field="type" label="Type" v-slot="props" sortable>
            <img
              :src="require('@/assets/' + props.row.type + '.svg')"
              class="gateicon"
            />
          </b-table-column>

          <b-table-column field="inputs" label="Inputs" v-slot="props">
            {{ props.row.inputs.map(x => x.id).join(", ") }}
          </b-table-column>

          <b-table-column field="state" label="State" numeric>
            <template v-slot:header="{ column }">
              <div class="level top">
                <div class="level-item">{{ column.label }}</div>
                <div class="level-item">
                  <b-button
                    style="margin-left:5px;width:20px"
                    type="is-primary"
                    size="is-small"
                    @click="toggleStateFormat"
                    >{{ $store.state.stateFormat.substring(0, 1) }}</b-button
                  >
                </div>
              </div>
            </template>

            <template v-slot="props">
              <template v-if="$store.state.stateFormat == 'logic'">
                <img
                  v-if="
                    $store.getters.getGateStateAtSelectedTime(props.row.id) == 0
                  "
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
                    $store.getters.getGateStateAtSelectedTime(props.row.id),
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
          >
            {{ props.row.bitSize }}
          </b-table-column>

          <template slot="detail" slot-scope="props">
            <template v-for="(item, index) in props.row.state">
              <tr
                v-if="
                  $store.getters.getGateStateAtSelectedTime(props.row.id)[
                    index
                  ] != 0 || $store.state.memoryDumpHideZeros
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
                      $store.getters.getGateStateAtSelectedTime(props.row.id)[
                        index
                      ],
                      $store.state.stateFormat,
                      props.row.displayType
                    )
                  }}
                </td>
              </tr></template
            >
          </template>
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

export default {
  data() {
    return {
      showDetailIcon: true,
      stateFormatBase: {
        binary: 2,
        octal: 8,
        decimal: 10,
        hex: 16
      }
    };
  },
  mixins: [UtilsMixin, SelectionsMixin],
  components: { InstanceCrumbs },
  computed: {
    gates() {
      if (this.$store.state.tableFollowsSchematic && this.selectedGateID) {
        // eslint-disable-next-line no-debugger
        let selectedGate = this.getGate(this.selectedGateID);
        let topGates = [
          this.selectedGateID,
          ...selectedGate.inputs.map(input => input.id)
        ];
        // start off with the filteredinstance gates then remove selected gate and its inputs
        let followGates = this.filteredInstanceGates.filter(
          gateid => !topGates.includes(gateid)
        );
        // add the selectedgate and it's inputs back at the top
        followGates.unshift(...topGates);
        console.log(followGates);
        return followGates.map(g => this.getGate(g));
      } else return this.filteredInstanceGates.map(g => this.getGate(g));
    }
  },
  methods: {
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
