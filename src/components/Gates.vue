<template>
  <div class="dk-h-100">
    <div class="dk-flex-col dk-h-100" v-if="$store.getters.isCompiled">
      <div
        class="dk-flex-row dk-align-center"
        style="height:60px;padding:0 20px"
      >
        <instance-crumbs
          @show-outline="$emit('show-outline')"
        ></instance-crumbs>
        <span class="dk-push-right">
          t = {{ $store.getters.currentFile.selectedTime }}</span
        >
      </div>

      <div style="padding-left:10px;padding-right:10px">
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
