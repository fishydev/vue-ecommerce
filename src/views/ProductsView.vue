<script setup lang="ts">
import FilterDrawer from "@/components/Products/FilterDrawer.vue";
import ProductList from "@/components/Products/ProductList.vue";
</script>

<template>
  <div class="products-view">
    <FilterDrawer />
    <ProductList />
  </div>
</template>

<style>
.products-view {
  display: flex;
}
</style>
