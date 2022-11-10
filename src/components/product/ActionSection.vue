<script setup lang="ts">
import { ElButton } from "element-plus";
defineProps<{
  image: string;
  alt: string;
}>();
</script>

<template>
  <section>
    <img :src="image" :alt="alt" />
    <ElButton
      class="btn-add-to-cart"
      size="large"
      type="primary"
      plain
      bg
      color="#000000"
      >Add to Cart</ElButton
    >
  </section>
</template>

<style scoped>
img {
  height: 25rem;
}
section {
  display: flex;
  flex-direction: column;
}

.btn-add-to-cart {
  width: 10rem;
  align-self: center;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 2px;
}
</style>
