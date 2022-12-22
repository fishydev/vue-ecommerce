<script setup lang="ts">
import ItemsTable from "@/components/cart/ItemsTable.vue";
import AmountSummary from "@/components/cart/AmountSummary.vue";
import { ref, onMounted, computed } from "vue";
import type { CartItem } from "@/types";
import { getCartContent } from "@/api/cart";

const cartContent = ref<CartItem[]>([]);
const isLoading = ref(false);

const totalCost = computed(() => {
  return cartContent.value.length > 0
    ? cartContent.value.reduce((acc, curr) => acc + curr.total, 0)
    : 0;
});

const fetchCartContent = async () => {
  try {
    isLoading.value = true;
    const result = (await getCartContent()).data;
    cartContent.value = result;
  } catch (err) {
    //
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchCartContent();
});
</script>

<template>
  <div class="layout-wrapper">
    <div class="cart-container">
      <ItemsTable
        :content="cartContent"
        :loading="isLoading"
        @on-changed-item="fetchCartContent"
      />
      <AmountSummary :total-price="totalCost" />
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 325px;
  column-gap: 2rem;
}
</style>
