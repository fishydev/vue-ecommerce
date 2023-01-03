<script setup lang="ts">
import {
  ElForm,
  ElInput,
  ElOption,
  ElSelect,
  type FormInstance,
  type FormRules,
} from "element-plus";
import { ref, reactive, inject, onMounted, type Ref } from "vue";
import type { CheckoutPayload, Country } from "@/types";
import * as countryList from "country-list";

onMounted(() => {
  // console.log(countryList.getData());
});

const formRef = ref<FormInstance>();
const isLoading = ref<boolean>(false);
const countries = ref<Country[]>(countryList.getData());

const formData = reactive<CheckoutPayload>({
  address: "",
  city: "",
  country: "",
  email: "",
  firstName: "",
  lastName: "",
  zipCode: "",
});

const formRules = reactive<FormRules>({
  address: [
    {
      required: true,
      message: "Required",
      trigger: "blur",
    },
  ],
  city: [
    {
      required: true,
      message: "Required",
      trigger: "blur",
    },
  ],
  country: [
    {
      required: true,
      message: "Required",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "Required",
      trigger: "blur",
    },
  ],
  firstName: [
    {
      required: true,
      message: "Required",
      trigger: "blur",
    },
  ],
  lastName: [
    {
      required: true,
      message: "Required",
      trigger: "blur",
    },
  ],
  zipCode: [
    {
      required: true,
      message: "Required",
      trigger: "blur",
    },
  ],
});

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      //SUBMIT DATA
    }
  });
};
</script>

<template>
  <div class="checkout-form-wrapper">
    <h1>Delivery Info</h1>
    <ElForm
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-position="top"
      :disabled="isLoading"
      class="checkout-form"
    >
      <div class="form__full-name">
        <ElFormItem label="First Name" prop="firstName">
          <ElInput v-model="formData.firstName" type="text"></ElInput>
        </ElFormItem>
        <ElFormItem label="Last Name" prop="lastName">
          <ElInput v-model="formData.lastName" type="text"></ElInput>
        </ElFormItem>
      </div>
      <ElFormItem label="Email Address" prop="email">
        <ElInput v-model="formData.email" type="text"></ElInput>
      </ElFormItem>
      <div class="form__address">
        <ElFormItem label="Address" prop="address">
          <ElInput v-model="formData.address"></ElInput>
        </ElFormItem>
        <ElFormItem label="Zip Code" prop="zipCode">
          <ElInput v-model="formData.zipCode"></ElInput>
        </ElFormItem>
      </div>
      <div class="form__city-country">
        <ElFormItem label="City" prop="city">
          <ElInput v-model="formData.city"></ElInput>
        </ElFormItem>
        <ElFormItem label="Country" prop="country">
          <ElSelect v-model="formData.country">
            <ElOption
              v-for="country in countries"
              :key="country.code"
              :label="country.name"
              :value="country.code"
            />
          </ElSelect>
        </ElFormItem>
      </div>
    </ElForm>
  </div>
</template>

<style scoped>
.checkout-form-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
.form__full-name {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
}

.form__city-country {
  display: grid;
  grid-template-columns: 1fr 200px;
  column-gap: 8px;
}

.form__address {
  display: grid;
  grid-template-columns: 1fr 100px;
  column-gap: 8px;
}
</style>
