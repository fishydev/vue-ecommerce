<script setup lang="ts">
import { ElCard } from "element-plus";
import CardComponent from "../global/CardComponent.vue";
import { categories } from "@/db";
</script>

<template>
  <div class="categories-container">
    <p>Categories</p>
    <div class="categories-wrapper">
      <card-component
        class="category-card"
        v-for="category in categories"
        :key="category._id"
      >
        <img :src="category.src" :alt="category.alt" />
        <span>{{ category.type }}</span>
      </card-component>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}
.categories-container {
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
}
.categories-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.category-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  margin: 1rem 1rem;
}

img {
  width: 250px;
  height: 250px;
  margin-bottom: 1rem;
}
</style>
