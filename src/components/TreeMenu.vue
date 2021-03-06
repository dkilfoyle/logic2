<template>
  <div class="tree-menu" :style="treeMenuStyle">
    <div class="label-wrapper" :style="labelWrapperStyle" @click="onLabelClick">
      <div :class="labelClasses">
        <div :class="labelContentClass">
          <i
            v-if="node.children"
            class="fa"
            :class="iconClasses"
            @click="onIconClick"
          ></i>
          {{ node.text }}
        </div>
      </div>
    </div>
    <!-- eslint-disable -->
    <transition-group name="accordion" id="accordion" :style="accordionStyle">
      <tree-menu 
        @selected="x => $emit('selected', x)"
        v-if="showChildren"
        v-for="childNode in node.children" 
        :key="childNode.id || childNode.text"
        :node="childNode"
        :depth="depth + 1"
        :can-select-branch="canSelectBranch"
      >
    </tree-menu>
    </transition-group>
    <!-- eslint-enable -->
  </div>
</template>

<script>
export default {
  name: "tree-menu",
  props: ["node", "depth", "canSelectBranch"],
  data() {
    return {
      showChildren:
        this.depth == 0 || (this.node.state && this.node.state.expanded)
    };
  },
  computed: {
    iconClasses() {
      return {
        "fa-plus-square-o": this.depth > 0 && !this.showChildren,
        "fa-minus-square-o": this.depth > 0 && this.showChildren
      };
    },
    labelClasses() {
      return { "has-children": this.node.children };
    },
    labelContentClass() {
      return this.node.children ? "label-content-branch" : "label-content-leaf";
    },
    treeMenuStyle() {
      return this.depth < 2 ? "" : "margin-left: 10px";
    },
    accordionStyle() {
      return this.depth < 1
        ? ""
        : "border-left: 1px solid #b7b7b7;  margin-left: 5px;";
    },
    labelWrapperStyle() {
      return {
        "--hover-margin": this.node.children ? "0px" : "-10px",
        "background-color":
          this.node.state && this.node.state.selected ? "#cccccc" : ""
      };
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
    selected(x) {
      this.$emit("selected", x);
    },
    onLabelClick() {
      if (this.canSelectBranch) {
        this.$emit("selected", this.node);
      } else if (this.node.children) this.toggleChildren();
      else this.$emit("selected", this.node);
    },
    onIconClick() {
      if (this.node.children) this.toggleChildren();
    }
  }
};
</script>

<style>
.tree-menu {
  transition: 400ms ease-in-out;
}

.tree-menu .label-wrapper {
  transition: 400ms ease-in-out;
  height: 30px;
  overflow: hidden;
  padding-top: 5px;
}

.tree-menu .label-wrapper .label-content-leaf {
}

.label-wrapper:hover {
  background-color: #cecccca0;
  margin-left: var(--hover-margin);
}

.tree-menu .label-wrapper .has-children {
  cursor: pointer;
}

#accordion {
  display: flex;
  flex-direction: column;
}

.accordion-enter .label-wrapper {
  height: 0px;
}
.accordion-leave-to .label-wrapper {
  height: 0px;
}
.accordion-leave-active {
}

.accordion-enter-active {
}
</style>
