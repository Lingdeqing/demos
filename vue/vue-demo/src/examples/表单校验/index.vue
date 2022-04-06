<template>
  <MyForm ref="form" :model="formData" :rules="formRules">
    <MyFormItem label="用户名" prop="userName">
      <MyInput v-model="formData.userName" />
    </MyFormItem>
    <MyFormItem label="邮箱" prop="email">
      <MyInput v-model="formData.email" />
    </MyFormItem>
    <button @click="onValidate">校验</button>
    <button @click="onReset">重置</button>
  </MyForm>
</template>
<script>
import MyForm from "./MyForm.vue";
import MyFormItem from "./MyFormItem.vue";
import MyInput from "./MyInput.vue";
export default {
  components: {
    MyForm,
    MyFormItem,
    MyInput,
  },
  data() {
    return {
      formData: {
        userName: "abc",
        email: "defg@qq.com",
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