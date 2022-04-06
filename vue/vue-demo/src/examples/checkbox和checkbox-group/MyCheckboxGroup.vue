<template>
  <div>
    <slot />
  </div>
</template>
<script>
import EmitterMixin from "../dispatch和broadcast";
import { findComponentsDownward } from "../findComponents";
export default {
  name: "MyCheckboxGroup",
  mixins: [EmitterMixin],
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.updateModel();
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value() {
      this.currentValue = this.value;
      this.updateModel();
    },
  },
  methods: {
    change(model) {
      this.currentValue = model;
      this.$emit("input", model);
      this.dispatch("MyFormItem", "form-item-change", model);
    },
    updateModel() {
      this.children = findComponentsDownward(this, "MyCheckbox");
      this.children.forEach((child) => {
        child.model = this.currentValue;
        child.currentValue =
          this.currentValue.indexOf(child.label) !== -1 ? true : false;
        child.group = true;
      });
    },
  },
};
</script>