<script setup lang="ts">
import { ref, onMounted, toRaw } from "vue";
import FilterDrawer from "@/components/Products/FilterDrawer.vue";
import ProductList from "@/components/Products/ProductList.vue";
import { getProducts } from "@/api/products";
import type { ProductFilter, Product } from "@/types";
import { ElButton } from "element-plus";
import { useBreakpoints } from "@/composables/breakpoints";

const isLoading = ref<boolean>(true);
const products = ref<Product[]>([]);

const { width } = useBreakpoints();

const changeFilterHandler = (filters: ProductFilter) => {
  console.log(filters);
  fetchProducts(filters);
};

const showFilter = ref<boolean>(true);

const fetchProducts = async (filters?: ProductFilter) => {
  try {
    products.value = [];
    isLoading.value = true;
    const result = (await getProducts(filters)).data;
    products.value = result;
  } catch (error) {
    //
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  fetchProducts();
});
</script>

<template>
  <div class="products-view layout-wrapper">
    <!-- <ElButton
      class="btn-filter"
      v-if="width < 720"
      @click="showFilter = !showFilter"
      >Filter</ElButton
    > -->
    <div class="products-wrapper">
      <FilterDrawer @on-change-filter="changeFilterHandler" />
      <ProductList :loading="isLoading" :products="products" />
    </div>
  </div>
</template>

<style scoped>
.products-view {
  display: flex;
  flex-direction: column;
}
.products-wrapper {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 720px) {
  .products-wrapper {
    flex-direction: row;
  }
}
</style>
