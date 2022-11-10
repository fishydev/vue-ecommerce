<script setup lang="ts">
import { ref } from "vue";
import DetailSection from "@/components/product/DetailSection.vue";
import ActionSection from "@/components/product/ActionSection.vue";
import { products } from "@/db";

const product = ref(products[0]);
</script>

<template>
  <div class="detail-view">
    <DetailSection
      :name="product.productTitle"
      :brand="product.brand"
      :description="product.productDesc"
      :price="product.productPrice"
      :rating="product.starRating"
      :review="product.reviews"
    />
    <ActionSection :image="product.imgUrl" :alt="product.alt" />
  </div>
</template>

<style>
.detail-view {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  column-gap: 2rem;
}
</style>
