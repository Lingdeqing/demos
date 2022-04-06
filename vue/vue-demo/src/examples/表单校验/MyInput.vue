<template>
  <input type="text" :value="value" @input="onInput" @blur="onBlur" />
</template>
<script>
import EmitterMixin from "../dispatch和broadcast";
export default {
  name: "MyInput",
  mixins: [EmitterMixin],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value() {
      this.currentValue = this.value;
    },
  },
  methods: {
    onInput($event) {
      const value = $event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("MyFormItem", "form-item-change", value);
    },
    onBlur() {
      this.dispatch("MyFormItem", "form-item-blur", this.currentValue);
    },
  },
};
</script>