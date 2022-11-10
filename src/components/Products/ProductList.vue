<script setup lang="ts">
import { RouterLink } from "vue-router";
import ProductCard from "./ProductCard.vue";
import { products } from "@/db";
</script>

<template>
  <div class="product-list-wrapper layout-wrapper">
    <RouterLink to="/detail" v-for="product in products" :key="product._id">
      <ProductCard
        :name="product.productTitle"
        :price="product.productPrice"
        :image="product.imgUrl"
        :discount="product.productDiscpercent"
        :og-price="product.productOgPrice"
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
