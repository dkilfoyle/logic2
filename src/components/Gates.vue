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
          :default-sort="['name', 'type']"
          detail-key="name"
          :has-detailed-visible="row => row.type == 'array'"
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

          <b-table-column
            field="subscribers"
            label="Subscribers"
            v-slot="props"
          >
            {{ props.row.subscribers.join(", ") }}
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
                v-if="item.getValue() != 0 || !$store.state.memoryDumpHideZeros"
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
                    item.toString(
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
      return this.filteredInstanceGates.map(g => this.getGate(g));
    }
  },
  methods: {
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

<style scoped>
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
