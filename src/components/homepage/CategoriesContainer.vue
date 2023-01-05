<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ElSkeleton, ElSkeletonItem } from "element-plus";
import CardComponent from "../global/CardComponent.vue";

import { getCategories } from "@/api";
import type { Category } from "@/types";

const categories = ref([] as Category[]);
const loading = ref(true);

const fetchCategories = async () => {
  try {
    const result = await getCategories();

    categories.value = result.data;
  } catch (error) {
    //do something
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  fetchCategories();
});
</script>

<template>
  <div class="categories-container">
    <h3>Categories</h3>
    <!-- <div class="categories-wrapper">
      <card-component
        class="category-card"
        v-for="category in categories"
        :key="category.id"
      >
        <img :src="category.imageUrl" :alt="category.alt" />
        <span>{{ category.type }}</span>
      </card-component>
    </div> -->
    <el-skeleton
      :loading="loading"
      animated
      :count="3"
      class="categories-wrapper"
    >
      <template #template>
        <card-component class="category-card card-skeleton">
          <el-skeleton-item class="img-skeleton" />
          <el-skeleton-item class="span-skeleton" />
        </card-component>
      </template>
      <template #default>
        <div class="categories-wrapper">
          <card-component
            class="category-card"
            v-for="category in categories"
            :key="category.id"
          >
            <img :src="category.imageUrl" :alt="category.alt" />
            <span>{{ category.type }}</span>
          </card-component>
        </div>
      </template>
    </el-skeleton>
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

.img-skeleton {
  width: 250px;
  height: 250px;
  margin-bottom: 1rem;
}

.span-skeleton {
  width: 100px;
}

h3 {
  margin: 2rem;
}
</style>
