<script setup lang="ts">
import {
  ElDialog,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
} from "element-plus";
import { ref, inject, type Ref } from "vue";

const isVisibleLogin = inject<Ref<boolean>>("isVisibleLogin")!;
const isVisibleRegister = inject<Ref<boolean>>("isVisibleRegister")!;

const openLogin = () => {
  isVisibleRegister.value = false;
  isVisibleLogin.value = true;
};
</script>

<template>
  <ElDialog
    v-model="isVisibleRegister"
    title="Register"
    class="dialog-register"
    width="400px"
  >
    <div class="register-form-wrapper">
      <h1 class="heading-register-dialog">Good to have you here!</h1>
      <ElForm :label-position="'top'">
        <div class="form-name">
          <ElFormItem label="First Name">
            <ElInput type="text" />
          </ElFormItem>
          <ElFormItem label="Last Name">
            <ElInput type="text" />
          </ElFormItem>
        </div>
        <ElFormItem label="Email">
          <ElInput type="email" />
        </ElFormItem>
        <ElFormItem label="Password">
          <ElInput type="password" />
        </ElFormItem>
        <ElFormItem label="Confirm Password">
          <ElInput type="password" />
        </ElFormItem>
      </ElForm>
      <ElButton bg color="#000000" size="large">Create your account</ElButton>
    </div>
    <template #footer>
      <div class="register-footer">
        <span>Already have an account?</span>
        <ElLink class="link-login" @click="openLogin">Sign In</ElLink>
      </div>
    </template>
  </ElDialog>
</template>

<style scoped>
.register-form-wrapper {
  display: flex;
  flex-direction: column;
}

.register-footer {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.link-login {
  margin-left: 0.25rem;
}

.heading-register-dialog {
  margin-top: 0;
}

.form-name {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
}
</style>
