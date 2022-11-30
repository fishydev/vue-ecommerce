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

const showRegister = () => {
  isVisibleLogin.value = false;
  isVisibleRegister.value = true;
};
</script>

<template>
  <ElDialog
    v-model="isVisibleLogin"
    title="Login"
    class="dialog-login"
    width="400px"
  >
    <div class="login-form-wrapper">
      <h1 class="heading-login-dialog">Welcome back!</h1>
      <ElForm :label-position="'top'">
        <ElFormItem label="Email">
          <ElInput type="email" />
        </ElFormItem>
        <ElFormItem label="Password">
          <ElInput type="password" />
        </ElFormItem>
      </ElForm>
      <span class="link-forgot-password">Forgot your password?</span>
      <ElButton bg color="#000000" size="large">Sign In</ElButton>
    </div>
    <template #footer>
      <div class="login-footer">
        <span>First time visiting?</span>
        <ElLink class="link-register" @click="showRegister"
          >Create account</ElLink
        >
      </div>
    </template>
  </ElDialog>
</template>

<style scoped>
.login-form-wrapper {
  display: flex;
  flex-direction: column;
}

.login-footer {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.link-register {
  margin-left: 0.25rem;
}

.link-forgot-password {
  margin-bottom: 18px;
}

.heading-login-dialog {
  margin-top: 0;
}
</style>
