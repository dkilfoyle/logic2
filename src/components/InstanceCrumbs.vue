<template>
  <div class="dk-flex-row dk-align-center dk-gap-5">
    <b-dropdown ref="filter">
      <template #trigger>
        <b-button size="is-small" icon-right="fa fa-filter" icon-pack="fa" />
      </template>

      <b-dropdown-item custom>
        <div class="dk-flex-col dk-gap-10">
          <b-radio
            @click.native="$refs.filter.toggle()"
            v-model="showWhichGates"
            :name="'showWhichGates' + owner"
            native-value="all"
            >All</b-radio
          >
          <b-radio
            @click.native="$refs.filter.toggle()"
            v-model="showWhichGates"
            :name="'showWhichGates' + owner"
            native-value="inputs"
            >Inputs</b-radio
          >
          <b-radio
            @click.native="$refs.filter.toggle()"
            v-model="showWhichGates"
            :name="'showWhichGates' + owner"
            native-value="outputs"
            >Outputs</b-radio
          >
          <b-radio
            @click.native="$refs.filter.toggle()"
            v-model="showWhichGates"
            :name="'showWhichGates' + owner"
            native-value="ports"
            >Ports</b-radio
          >
          <b-radio
            @click.native="$refs.filter.toggle()"
            v-model="showWhichGates"
            :name="'showWhichGates' + owner"
            native-value="wires"
            >Wires</b-radio
          >
        </div>
      </b-dropdown-item>
    </b-dropdown>
    <ul class="mybreadcrumb">
      <li v-for="node in instancePath" :key="node">
        <b-dropdown :triggers="['hover']">
          <template #trigger>
            <b-button
              size="is-small"
              :label="getShortName(node)"
              @click="selectBreadcrumb(node)"
              type="is-info is-light"
              :icon-right="getSiblings(node).length > 0 ? 'menu-down' : ''"
            />
          </template>

          <template v-for="instance in getSiblings(node)">
            <b-dropdown-item :key="instance" @click="selectBreadcrumb(instance)"
              >{{ getShortName(instance) }}
            </b-dropdown-item>
          </template>
        </b-dropdown>
      </li>
    </ul>
    <b-dropdown
      v-if="getChildren($store.getters.selectedInstanceID).length > 0"
    >
      <template #trigger>
        <b-button
          size="is-small"
          icon-right="fa fa-ellipsis-h"
          icon-pack="fa"
        />
      </template>

      <template v-for="child in getChildren($store.getters.selectedInstanceID)">
        <b-dropdown-item :key="child" @click="selectBreadcrumb(child)"
          >{{ getShortName(child) }}
        </b-dropdown-item>
      </template>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: ["owner"],
  data() {
    return {};
  },
  computed: {
    instancePath() {
      return this.$store.getters.selectedInstanceID
        .split("_")
        .map((x, i, a) => a.slice(0, i + 1).join("_"));
    },
    showWhichGates: {
      get() {
        return this.$store.state.showWhichGates;
      },
      set(value) {
        this.$store.commit("setShowWhichGates", value);
      }
    }
  },
  methods: {
    getShortName(node) {
      return node.substring(node.lastIndexOf("_") + 1);
    },
    getSiblings(node) {
      if (node == "main") return [];
      const parent = node.substring(0, node.lastIndexOf("_"));
      return this.$store.getters
        .getInstance(parent)
        .instance_ids.filter(x => x != node);
    },
    getChildren(node) {
      return this.$store.getters.getInstance(node)
        ? this.$store.getters.getInstance(node).instance_ids
        : [];
    },
    selectBreadcrumb(node) {
      this.$store.commit("setSelectedInstanceID", node);
    }
  }
};
</script>

<style>
.mybreadcrumb {
  display: inherit;
}
.mybreadcrumb li + li::before {
  color: #b5b5b5;
  content: "/";
  margin-left: 5px;
  margin-right: 5px;
}
</style>
