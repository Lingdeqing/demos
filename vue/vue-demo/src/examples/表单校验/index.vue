<template>
  <MyForm ref="form" :model="formData" :rules="formRules">
    <MyFormItem label="用户名" prop="userName">
      <MyInput v-model="formData.userName" />
    </MyFormItem>
    <MyFormItem label="邮箱" prop="email">
      <MyInput v-model="formData.email" />
    </MyFormItem>

    <MyFormItem label="单独使用" prop="single">
      <MyCheckbox v-model="formData.single">是否选中</MyCheckbox>
    </MyFormItem>
    <MyFormItem label="组合使用" prop="multiple">
      <MyCheckboxGroup v-model="formData.multiple">
        <MyCheckbox label="选项1">选项1</MyCheckbox>
        <MyCheckbox label="选项2">选项2</MyCheckbox>
        <MyCheckbox label="选项3">选项3</MyCheckbox>
      </MyCheckboxGroup>
    </MyFormItem>

    <button @click="onValidate">校验</button>
    <button @click="onReset">重置</button>
  </MyForm>
</template>
<script>
import MyForm from "./MyForm.vue";
import MyFormItem from "./MyFormItem.vue";

import MyInput from "./MyInput.vue";

import MyCheckbox from "../checkbox和checkbox-group/MyCheckbox.vue";
import MyCheckboxGroup from "../checkbox和checkbox-group/MyCheckboxGroup.vue";

export default {
  components: {
    MyForm,
    MyFormItem,

    MyInput,

    MyCheckbox,
    MyCheckboxGroup,
  },
  data() {
    return {
      formData: {
        userName: "abc",
        email: "defg@qq.com",
        single: false,
        multiple: ['选项2'],
      },
      formRules: {
        userName: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur",
          },
          {
            type: "email",
            message: "邮箱格式不正确",
            trigger: "change",
          },
        ],
        single: [
          {
            required: true,
            message: "单选不对",
            trigger: "change",
          },
        ],
        multiple: [
          {
            required: true,
            message: "多选必须要选",
            trigger: "change",
          },
          {
            trigger: "change",
            validator(rule, value, callback) {
              if (~value.indexOf("选项1")) {
                callback(new Error("不能选1"));
              } else {
                callback();
              }
            },
          },
        ],
      },
    };
  },
  methods: {
    onValidate() {
      this.$refs.form.validate().then((valid) => {
        alert(valid ? "成功" : "失败");
      });
    },
    onReset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>