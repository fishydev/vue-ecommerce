<script setup lang="ts">
import ItemsTable from "@/components/checkout/ItemsTable.vue";
import AmountSummary from "@/components/checkout/AmountSummary.vue";
</script>

<template>
  <div class="layout-wrapper">
    <div class="cart-container">
      <ItemsTable />
      <AmountSummary />
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
