<script setup lang="ts">
import { computed } from "vue";
import { ElRate } from "element-plus";
const props = defineProps<{
  name: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
  review: number;
}>();

const rating = computed(() => {
  return props.rating;
});
</script>

<template>
  <section>
    <h1>{{ name }}</h1>
    <span class="brand">{{ `By ${brand}` }}</span>
    <p>{{ description }}</p>
    <span>{{ `JP¥ ${price}` }}</span>
    <div class="product-score">
      <ElRate v-model="rating" disabled="" />
      <span>{{ `${review} Reviews` }}</span>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  width: 30rem;
}

h1 {
  margin: 0;
  font-size: xx-large;
}

.brand {
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: large;
  font-weight: 300;
}

.product-score {
  display: flex;
  align-items: center;
}

.product-score span {
  text-transform: capitalize;
  font-weight: bold;
  font-size: small;
}
</style>
