<script setup lang="ts">
import UserCart from "@/components/checkout/UserCart.vue";
import CheckoutForm from "@/components/checkout/CheckoutForm.vue";
</script>

<template>
  <div class="layout-wrapper">
    <div class="checkout-container">
      <CheckoutForm />
      <UserCart />
    </div>
  </div>
</template>

<style scoped>
.checkout-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 325px;
  column-gap: 2rem;
}
</style>
