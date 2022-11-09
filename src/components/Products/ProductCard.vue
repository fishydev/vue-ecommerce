<script setup lang="ts">
import CardComponent from "../global/CardComponent.vue";
defineProps<{
  name: string;
  price: number;
  ogPrice: number;
  discount: number;
  image: string;
}>();
</script>

<template>
  <card-component class="product-card">
    <span class="discount-ribbon">{{ `Save ${discount}%` }}</span>
    <img :src="image" alt="" />
    <div class="product-detail">
      <span class="product-name">{{ name }}</span>
      <div class="product-price">
        <span class="price">{{ `Rs. ${price}` }}</span>
        <span class="og-price">{{ `Rs. ${ogPrice}` }}</span>
      </div>
    </div>
  </card-component>
</template>

<style scoped>
.product-card {
  position: relative;
  overflow: hidden;
}

img {
  width: 225px;
  height: 225px;
  background-color: lightgrey;
  padding: 1rem;
}

.discount-ribbon {
  color: black;
  font-size: 0.75rem;
  font-weight: 700;
  left: 0.1rem;
  padding: 0.3rem;
  position: absolute;
  text-transform: uppercase;
  top: 1rem;
  width: 5rem;
  z-index: 1;
}

.discount-ribbon::after {
  background: white;
  content: "";
  height: 100%;
  left: -4px;
  position: absolute;
  top: 0;
  -webkit-transform: skew(-27deg);
  transform: skew(-27deg);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
  width: 100%;
  z-index: -1;
}

.product-detail {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.product-price > .og-price {
  font-weight: 300;
  margin-left: 1rem;
  font-size: smaller;
  text-decoration: line-through;
}
</style>
