<script setup lang="ts">
import { computed } from "vue";
import CardComponent from "../global/CardComponent.vue";
import { ElImage, ElIcon } from "element-plus";
import { Picture as IconPicture } from "@element-plus/icons-vue";

const props = defineProps<{
  name: string;
  price: number;
  discount: number;
  image: string;
  alt: string;
}>();

const discountedPrice = computed(() => {
  return Math.round(props.price - (props.price * props.discount) / 100);
});
</script>

<template>
  <card-component class="product-card">
    <span class="discount-ribbon">{{ `Save ${discount}%` }}</span>
    <el-image class="product-image" :src="image" :alt="alt">
      <template #error>
        <div class="image-slot">
          <el-icon><icon-picture /></el-icon>
        </div>
      </template>
      <template #placeholder>
        <div class="product-image-placeholder"></div>
      </template>
    </el-image>
    <div class="product-detail">
      <span class="product-name">{{ name }}</span>
      <div class="product-price">
        <span class="price">{{ `¥${discountedPrice}` }}</span>
        <span class="og-price">{{ `¥${price}` }}</span>
      </div>
    </div>
  </card-component>
</template>

<style scoped>
.product-name {
  font-weight: 600;
}

.product-price {
  font-weight: 600;
  color: var(--text-gray-1);
  flex-grow: 1;
}

.product-card {
  position: relative;
  overflow: hidden;
}

.product-image {
  max-width: 100%;
  background-color: lightgrey;
  aspect-ratio: 1 / 1;
}

.product-image-placeholder {
  width: 308px;
  height: 308px;
  background-color: lightgrey;
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
