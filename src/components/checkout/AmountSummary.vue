<script setup lang="ts">
import { ref } from "vue";
import { ElButton, ElDivider } from "element-plus";
import { Plus, Minus, CloseBold } from "@element-plus/icons-vue";
</script>

<template>
  <div class="checkout-summary layout-wrapper">
    <div class="data-summary-container">
      <h1>Summary</h1>
      <div class="row-data">
        <span class="label">Subtotal</span>
        <span class="value">Rs. 232</span>
      </div>
      <div class="row-data">
        <span class="label">Shipping fee</span>
        <span class="value">Rs. 24</span>
      </div>
      <ElDivider />
      <div class="row-data">
        <span class="label">Total</span>
        <span class="value">Rs. 69</span>
      </div>
    </div>
    <ElButton class="btn-checkout" size="large" bg color="#000000"
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
</style>
