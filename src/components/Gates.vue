<template>
  <div ref="container" style="height:100%">
    <div class="rows" v-if="$store.getters.isCompiled">
      <instance-crumbs @show-outline="$emit('show-outline')"></instance-crumbs>
      <div class="row" style="padding: 0px 20px">
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
    <div
      class="rows"
      style="align-items:center; justify-content:center; height:100%"
      v-else
    >
      <div class="row"><h4>Compile to show gates</h4></div>
    </div>
  </div>
</template>

<script>
import UtilsMixin from "../mixins/utils";
import SelectionsMixin from "../mixins/selections";
import InstanceCrumbs from "./InstanceCrumbs";

export default {
  data() {
    return { showWhichGates: "all" };
  },
  mixins: [UtilsMixin, SelectionsMixin],
  components: { InstanceCrumbs },

  methods: {
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
</style>
