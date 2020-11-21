<template>
  <div class="dkcontainer  mx-4 my-4" style="height:100%">
    <div class="columns" style="overflow-y: auto;height:100%">
      <div class="column">
        <h2>Work in progress</h2>
        <table>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>Y</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
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

  methods: {}
};
</script>

<style scoped></style>
