<script setup lang="ts">
import { ElButton, ElDivider } from "element-plus";

defineProps<{
  totalPrice: number;
  disabled: boolean;
}>();
</script>

<template>
  <div class="checkout-summary layout-wrapper">
    <div class="data-summary-container">
      <h1>Summary</h1>
      <div class="row-data">
        <span class="label">Subtotal</span>
        <span class="value">{{ `¥${totalPrice}` }}</span>
      </div>
      <div class="row-data">
        <span class="label">Shipping fee</span>
        <span class="value">{{ `¥${Math.ceil(totalPrice * 0.05)}` }}</span>
      </div>
      <ElDivider />
      <div class="row-data">
        <span class="label">Total</span>
        <span class="value">{{ `¥${Math.ceil(totalPrice * 1.05)}` }}</span>
      </div>
    </div>
    <ElButton
      class="btn-checkout"
      size="large"
      bg
      color="#000000"
      :disabled="disabled"
      >Proceed to Checkout</ElButton
    >
  </div>
</template>

<style scoped>
.checkout-summary {
  position: sticky;
  top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgb(237, 237, 237);
  justify-content: space-between;
  max-height: 275px;
}

.checkout-summary .row-data {
  display: flex;
  justify-content: space-between;
}

.checkout-summary .row-data > .label {
  color: grey;
  text-transform: uppercase;
}

.checkout-summary .row-data > .value {
  color: black;
}

.checkout-summary .btn-checkout {
  text-transform: uppercase;
}

.data-summary-container {
  margin-bottom: 1rem;
}
</style>
