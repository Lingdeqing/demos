<template>
  <label>
    <input type="checkbox" :checked="currentValue" @change="onChange" />
    <slot />
  </label>
</template>
<script>
import EmitterMixin from "../dispatch和broadcast";
import { findComponentUpward } from "../findComponents";
export default {
  name: "MyCheckbox",
  mixins: [EmitterMixin],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      model: [],
      currentValue: this.value,
    };
  },
  watch: {
    value() {
      this.currentValue = this.value;
    },
  },
  mounted() {
    this.parent = findComponentUpward(this, "MyCheckboxGroup");
    if (this.parent) {
      this.group = true;
    }
  },
  methods: {
    onChange($event) {
      const value = $event.target.checked;
      this.currentValue = value;

      if (this.group) {
        if (value) {
          this.model.push(this.label);
        } else {
          this.model.splice(this.model.indexOf(this.label), 1);
        }
        this.parent.change(this.model);
      } else {
        this.$emit("input", value);
        this.dispatch("MyFormItem", "form-item-change", value);
      }
    },
  },
};
</script>