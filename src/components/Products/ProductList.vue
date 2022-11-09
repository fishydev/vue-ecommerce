<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import { products } from "@/db";
</script>

<template>
  <div class="product-list-wrapper layout-wrapper">
    <ProductCard
      v-for="product in products"
      :key="product._id"
      :name="product.productTitle"
      :price="product.productPrice"
      :image="product.imgUrl"
      :discount="product.productDiscpercent"
      :og-price="product.productOgPrice"
    />
  </div>
</template>

<style>
.product-list-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 1.5rem;
}
</style>
