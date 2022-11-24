<script setup lang="ts">
import { ref, onMounted } from "vue";
import FilterDrawer from "@/components/Products/FilterDrawer.vue";
import ProductList from "@/components/Products/ProductList.vue";
import { getProducts } from "@/api/products";
import type { ProductFilter, Product } from "@/types";

const loading = ref<boolean>(true);
const products = ref<Product[]>([]);

const changeFilterHandler = (filters: ProductFilter) => {
  console.log(filters);
  fetchProducts(filters);
};

const fetchProducts = async (filters?: ProductFilter) => {
  try {
    loading.value = true;
    const result = (await getProducts(filters)).data;
    products.value = result;
  } catch (error) {
    //
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  fetchProducts();
});
</script>

<template>
  <div class="products-view">
    <FilterDrawer @on-change-filter="changeFilterHandler" />
    <ProductList :products="products" />
  </div>
</template>

<style>
.products-view {
  display: flex;
}
</style>
