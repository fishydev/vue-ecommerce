<script setup lang="ts">
import { ref } from "vue";
import { ElImage } from "element-plus";

defineProps<{
  title: string;
  price: number;
  amount: number;
  imageUrl: string;
}>();
</script>

<template>
  <div class="cart-item-wrapper">
    <ElImage
      style="width: 4rem; height: 4rem; background-color: lightgrey"
      :src="imageUrl"
      fit="scale-down"
    />
    <div class="cart-item-description">
      <span class="item-title">{{ title }}</span>
      <span>{{ `× ${amount}` }}</span>
    </div>
    <span class="cart-item-price">{{ `Rs. ${price * amount}` }}</span>
  </div>
</template>

<style>
.cart-item-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.cart-item-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  margin: 0 1rem;
}

.cart-item-description .item-title {
  font-weight: 600;
  color: black;
}

.cart-item-price {
  font-weight: 600;
  color: black;
}
</style>
