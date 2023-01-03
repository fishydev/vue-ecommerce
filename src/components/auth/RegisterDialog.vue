<script setup lang="ts">
import {
  ElDialog,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElNotification,
  type FormInstance,
  type FormRules,
} from "element-plus";
import { ref, reactive, inject, type Ref } from "vue";
import { register } from "@/api";
import type { RegisterPayload } from "@/types";
import { isValidEmail } from "@/utils/validation";

const isVisibleLogin = inject<Ref<boolean>>("isVisibleLogin")!;
const isVisibleRegister = inject<Ref<boolean>>("isVisibleRegister")!;

const formRef = ref<FormInstance>();
const isLoading = ref<boolean>(false);

const openLogin = () => {
  isVisibleRegister.value = false;
  isVisibleLogin.value = true;
};

const formData = reactive<RegisterPayload & { confirmPassword: string }>({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
});

const validateConfirmPass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your password again"));
  } else if (value !== formData.password) {
    callback(new Error("Password doesn't match"));
  } else {
    callback();
  }
};

const formRules = reactive<FormRules>({
  email: [
    {
      validator: isValidEmail,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please enter a password",
      trigger: "blur",
    },
    {
      min: 8,
      max: 20,
      trigger: "blur",
      message: "Length should be 8-20 characters",
    },
  ],
  confirmPassword: [
    {
      validator: validateConfirmPass,
      trigger: "blur",
    },
  ],
  firstName: [
    {
      required: true,
      trigger: "blur",
      message: "Please enter your first name",
    },
  ],
  lastName: [
    {
      required: true,
      trigger: "blur",
      message: "Please enter your last name",
    },
  ],
});

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      submitRegister();
    }
  });
};

const submitRegister = async () => {
  try {
    isLoading.value = true;
    const result = (await register(formData)).data;
    ElNotification({
      type: "success",
      message: result,
      offset: 75,
    });
    isVisibleRegister.value = false;
  } finally {
    isLoading.value = false;
  }
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
      <ElForm
        ref="formRef"
        :model="formData"
        :rules="formRules"
        :label-position="'top'"
        :disabled="isLoading"
      >
        <div class="form-name">
          <ElFormItem label="First Name" prop="firstName">
            <ElInput v-model="formData.firstName" type="text" />
          </ElFormItem>
          <ElFormItem label="Last Name" prop="lastName">
            <ElInput v-model="formData.lastName" type="text" />
          </ElFormItem>
        </div>
        <ElFormItem label="Email" prop="email">
          <ElInput v-model="formData.email" type="email" />
        </ElFormItem>
        <ElFormItem label="Password" prop="password">
          <ElInput v-model="formData.password" type="password" />
        </ElFormItem>
        <ElFormItem label="Confirm Password" prop="confirmPassword">
          <ElInput v-model="formData.confirmPassword" type="password" />
        </ElFormItem>
      </ElForm>
      <ElButton
        bg
        color="#000000"
        size="large"
        @click="onSubmit(formRef)"
        :loading="isLoading"
        >Create your account</ElButton
      >
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
