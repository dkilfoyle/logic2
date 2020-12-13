<template>
  <div class="dkcontainer  mx-4 my-4" style="height:100%">
    <div
      v-if="$store.getters.isCompiled"
      class="columns"
      style="overflow-y: auto;height:100%"
    >
      <div class="column">
        <nav class="breadcrumb is-centered">
          <ul>
            <li
              v-for="node in $store.state.selectedInstanceID.split('_')"
              :key="node"
            >
              <a @click="selectBreadcumb(node)">{{ node }}</a>
            </li>
          </ul>
        </nav>

        <table class="table is-fullwidth">
          <thead class="bg-teal">
            <tr class="text-white">
              <th class="text-left">GlobalID</th>
              <!-- <th>InstanceID</th> -->
              <th class="text-left">Function</th>
              <th class="text-left">Inputs</th>
              <th class="text-right">State</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="g in filteredInstanceGates" :key="g">
              <td>{{ g }}</td>
              <!-- <td>{{ g.instanceid }}</td> -->
              <td>
                <img
                  :src="require('@/assets/' + getGate(g).logic + '.svg')"
                  class="gateicon"
                />
              </td>
              <td>{{ getGate(g).inputs.join(", ") }}</td>
              <td
                class="text-right"
                v-if="$store.getters.getGateStateAtSelectedTime(g)"
              >
                <!-- <i class="fa fa-check"></i> -->
                <img src="@/assets/icons8-number-1-48.png" class="gateicon" />
              </td>
              <td v-else>
                <!-- <i class="fa fa-times"></i> -->
                <img src="@/assets/icons8-0-52.png" class="gateicon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else><h5>Compile File First</h5></div>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";

export default {
  data() {
    return { showWhichGates: "all" };
  },
  mixins: [UtilsMixin, SelectionsMixin],

  methods: {
    selectBreadcumb(node) {
      if (node == "main") {
        this.$store.commit("setSelectedInstanceID", "main");
        return;
      }
      const x = this.$store.state.selectedInstanceID.substring(
        0,
        this.$store.state.selectedInstanceID.indexOf("_" + node) +
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
</style>
