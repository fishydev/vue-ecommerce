<script setup lang="ts">
import { RouterLink } from "vue-router";
import ProductCard from "./ProductCard.vue";
import type { Product } from "@/types";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="product-list-wrapper layout-wrapper">
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
</template>

<style>
.product-list-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 1.5rem;
}

a,
a:hover,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}
</style>
