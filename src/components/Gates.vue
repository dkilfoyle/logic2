<template>
  <div class="dkcontainer">
    <div v-if="$store.getters.isCompiled" class="columns">
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
        <div class="control is-centered is-small">
          <b-radio
            v-model="showWhichGates"
            name="showWhichGates"
            native-value="all"
            size="is-small"
            >All</b-radio
          >
          <b-radio
            v-model="showWhichGates"
            name="showWhichGates"
            native-value="inputs"
            size="is-small"
            >Inputs</b-radio
          >
          <b-radio
            v-model="showWhichGates"
            name="showWhichGates"
            native-value="outputs"
            size="is-small"
            >Outputs</b-radio
          >
        </div>

        <div class="table-container"></div>
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
                  style="width:1.5em;height:1.5em;vertical-align:middle"
                />
              </td>
              <td>{{ getGate(g).inputs.join(", ") }}</td>
              <td class="text-right" v-if="getGate(g).state">
                <!-- <i class="fa fa-check"></i> -->
                <img src="@/assets/icons8-number-1-24.png" />
              </td>
              <td v-else>
                <!-- <i class="fa fa-times"></i> -->
                <img src="@/assets/icons8-0-26.png" />
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

<style scoped></style>