<script setup lang="ts">
import UserCart from "@/components/checkout/UserCart.vue";
import CheckoutForm from "@/components/checkout/CheckoutForm.vue";
import { ref, onMounted } from "vue";
import type { CartItem } from "@/types";
import { getCartContent } from "@/api";

const cartContent = ref<CartItem[]>([]);
const isLoading = ref<boolean>(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    const result = (await getCartContent()).data;
    cartContent.value = result;
  } catch (error) {
    //
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="layout-wrapper">
    <div class="checkout-container">
      <CheckoutForm :disabled="cartContent.length < 1" />
      <UserCart :loading="isLoading" :cart-content="cartContent" />
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
