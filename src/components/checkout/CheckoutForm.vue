<script setup lang="ts">
import { ElForm, ElInput, ElSelect } from "element-plus";
</script>

<template>
  <div class="checkout-form-wrapper">
    <h1>Delivery Info</h1>
    <ElForm class="checkout-form" label-position="top">
      <div class="form__full-name">
        <ElFormItem label="First Name">
          <ElInput></ElInput>
        </ElFormItem>
        <ElFormItem label="Last Name">
          <ElInput></ElInput>
        </ElFormItem>
      </div>
      <ElFormItem label="Email Address">
        <ElInput></ElInput>
      </ElFormItem>
      <div class="form__address">
        <ElFormItem label="Address">
          <ElInput></ElInput>
        </ElFormItem>
        <ElFormItem label="Zip Code">
          <ElInput></ElInput>
        </ElFormItem>
      </div>
      <div class="form__city-country">
        <ElFormItem label="City">
          <ElInput></ElInput>
        </ElFormItem>
        <ElFormItem label="Country">
          <ElSelect />
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
