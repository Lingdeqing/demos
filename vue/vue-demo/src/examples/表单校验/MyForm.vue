<template>
  <div>
    <slot />
  </div>
</template>
<script>
export default {
  name: "MyForm",
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {
    this.fields = [];
    this.$on("form-item-add", this.onFormItemAdd);
    this.$on("form-item-del", this.onFormItemDel);
  },
  beforeDestroy() {
    this.$off("form-item-add");
    this.$off("form-item-del");
  },
  provide() {
    return {
      form: this,
    };
  },
  methods: {
    onFormItemAdd(field) {
      this.fields.push(field);
    },
    onFormItemDel(field) {
      this.fields.splice(this.fields.indexOf(field), 1);
    },

    // public api
    validate(cb) {
      let validCount = 0;
      return new Promise((resolve) => {
        this.fields.forEach((field) =>
          field.validate("", (valid) => {
            if (valid) {
              validCount++;
            } else {
              resolve(false);
              cb?.(false);
            }
            if (validCount === this.fields.length) {
              resolve(true);
              cb?.(true);
            }
          })
        );
      });
    },
    resetFields() {
        this.fields.forEach(field => {
            field.resetField()
        })
    },
  },
};
</script>