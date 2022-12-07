<script setup lang="ts">
import {
  ElDialog,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  type FormInstance,
  type FormRules,
  ElNotification,
} from "element-plus";
import { ref, inject, reactive, type Ref } from "vue";
import { isValidEmail } from "@/utils/validation";
import { login } from "@/api";
import { useAuthStore } from "@/stores/auth";

const isVisibleLogin = inject<Ref<boolean>>("isVisibleLogin")!;
const isVisibleRegister = inject<Ref<boolean>>("isVisibleRegister")!;

const auth = useAuthStore();

const showRegister = () => {
  isVisibleLogin.value = false;
  isVisibleRegister.value = true;
};

const isLoading = ref(false);

const formData = reactive({
  email: "",
  password: "",
});

const rules = reactive<FormRules>({
  email: [
    {
      validator: isValidEmail,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      message: "Please enter your password",
    },
  ],
});

const formRef = ref<FormInstance>();

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      submitLogin();
    }
  });
};

const submitLogin = async () => {
  try {
    isLoading.value = true;
    const result = (await login(formData)).data;
    ElNotification({
      type: "success",
      message: "You are logged in",
      duration: 5000,
    });
    auth.setToken(result.token);
    isVisibleLogin.value = false;
  } catch (error) {
    //
  } finally {
    isLoading.value = false;
  }
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
      <ElForm
        :model="formData"
        ref="formRef"
        :rules="rules"
        :label-position="'top'"
        :disabled="isLoading"
        hide-required-asterisk
      >
        <ElFormItem label="Email" prop="email">
          <ElInput v-model="formData.email" type="email" />
        </ElFormItem>
        <ElFormItem label="Password" prop="password">
          <ElInput v-model="formData.password" type="password" />
        </ElFormItem>
      </ElForm>
      <span class="link-forgot-password">Forgot your password?</span>
      <ElButton bg color="#000000" size="large" @click="onSubmit(formRef)"
        >Sign In</ElButton
      >
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
