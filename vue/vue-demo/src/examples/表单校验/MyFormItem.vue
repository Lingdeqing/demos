<template>
  <div>
    <label>{{ label }}</label>
    <slot />
    <span v-if="validateState === 'error'" style="color: red">
      {{ validateMessage }}
    </span>
  </div>
</template>
<script>
import AsyncValidator from "async-validator";
import EmitterMixin from "../dispatch和broadcast";
export default {
  name: "MyFormItem",
  mixins: [EmitterMixin],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  inject: ["form"],
  mounted() {
    this.$on("form-item-change", this.onFormItemChange);
    this.$on("form-item-blur", this.onFormItemBlur);

    this.dispatch("MyForm", "form-item-add", this);

    this.initialValue = this.fieldValue
  },
  beforeDestroy() {
    this.$off("form-item-change");
    this.$off("form-item-blur");

    this.dispatch("MyForm", "form-item-del", this);
  },
  data() {
    return {
      validateState: "",
      validateMessage: "",
    };
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    },
  },
  methods: {
    onFormItemChange() {
      this.validate("change");
    },
    onFormItemBlur() {
      this.validate("blur");
    },
    getRules(trigger) {
      return (this.form.rules?.[this.prop] || []).filter(
        (rule) => !trigger || rule.trigger === trigger
      ).map(rule => {
        const r = {...rule}
        delete r.trigger
        return r
      });
    },
    validate(trigger, cb) {
      // 获取对应rules
      const rules = this.getRules(trigger);
      if (rules.length === 0) {
        cb?.(true);
        return true;
      }

      const descriptor = {
        [this.prop]: rules,
      };
      const validator = new AsyncValidator(descriptor);

      validator.validate(
        {
          [this.prop]: this.fieldValue,
        },
        { firstFields: true },
        (errors) => {
          this.validateState = !errors ? "success" : "error";
          this.validateMessage = errors ? errors[0].message : "";

          cb?.(!this.validateMessage);
        }
      );
    },
    resetField(){
        this.validateState = ''
        this.validateMessage = ''
        this.form.model[this.prop] = this.initialValue
    }
  },
};
</script>