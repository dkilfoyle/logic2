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
        <table class="table is-fullwidth is-narrow">
          <thead class="bg-teal">
            <tr class="text-white">
              <th class="text-left">GlobalID</th>
              <!-- <th>InstanceID</th> -->
              <th class="has-text-left">Fn</th>
              <th class="has-text-left">Inputs</th>
              <th class="has-text-right">
                <b-button size="is-small" @click="toggleStateFormat"
                  >State</b-button
                >
              </th>
              <th class="has-text-right">BitSize</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="g in filteredInstanceGates"
              :key="g"
              @click="$store.commit('setSelectedGate', g)"
              :style="
                $store.state.selectedGate == g ? 'background-color:#eeeeee' : ''
              "
            >
              <td>{{ g }}</td>
              <td>
                <img
                  :src="require('@/assets/' + getGate(g).type + '.svg')"
                  class="gateicon"
                />
              </td>
              <td>
                {{
                  getGate(g)
                    .inputs.map(x => x.id)
                    .join(", ")
                }}
              </td>
              <td
                class="has-text-right"
                v-if="$store.state.stateFormat == 'logic'"
              >
                <img
                  v-if="$store.getters.getGateStateAtSelectedTime(g) == 0"
                  src="@/assets/icons8-0-52.png"
                  class="stateicon"
                />
                <img
                  v-else
                  src="@/assets/icons8-number-1-48.png"
                  class="stateicon"
                />
              </td>
              <td
                class="has-text-right"
                v-else-if="$store.state.stateFormat == 'decimal'"
              >
                {{
                  $store.getters
                    .getGateStateAtSelectedTime(g)
                    .toString(stateFormatBase[$store.state.stateFormat])
                }}
              </td>
              <td
                class="has-text-right"
                v-else-if="$store.state.stateFormat == 'binary'"
              >
                0b{{
                  $store.getters
                    .getGateStateAtSelectedTime(g)
                    .toString(stateFormatBase[$store.state.stateFormat])
                    .padStart(getGate(g).state.bitSize, "0")
                }}
              </td>
              <td class="has-text-right">{{ getGate(g).state.bitSize }}</td>
            </tr>
          </tbody>
        </table>
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

export default {
  data() {
    return {
      stateFormatBase: {
        binary: 2,
        decimal: 10
      }
    };
  },
  mixins: [UtilsMixin, SelectionsMixin],
  components: { InstanceCrumbs },

  methods: {
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
