<script setup lang="ts">
import { RouterLink } from "vue-router";
import ProductCard from "./ProductCard.vue";
import LoadingComponent from "../global/LoadingComponent.vue";
import type { Product } from "@/types";

defineProps<{
  products: Product[];
  loading: boolean;
}>();
</script>

<template>
  <div class="product-list-container layout-wrapper">
    <div v-if="loading" class="loading-wrapper">
      <LoadingComponent />
    </div>
    <div class="list-wrapper" v-else-if="products.length">
      <RouterLink
        :to="`/product/${product.uuid}`"
        v-for="product in products"
        :key="product.uuid"
      >
        <ProductCard
          :name="product.productTitle"
          :image="product.imageUrl"
          :discount="product.discountPercentage"
          :price="product.price"
          :alt="product.alt"
        />
      </RouterLink>
    </div>
    <div class="empty-wrapper" v-else>
      <p>No items found.</p>
    </div>
  </div>
</template>

<style scoped>
.product-list-container {
  flex-grow: 1;
}
.list-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  width: 100%;
}

a,
a:hover,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}

.empty-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.loading-wrapper {
  flex-grow: 1;
}
</style>
