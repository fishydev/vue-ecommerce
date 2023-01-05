<script setup lang="ts">
defineProps<{
  title: string;
  pages: string[];
}>();
</script>

<template>
  <div class="nav-section">
    <p class="nav-title">{{ title }}</p>
    <p class="nav-item" v-for="page in pages" :key="page">{{ page }}</p>
  </div>
</template>

<style scoped>
.nav-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav-title {
  margin-bottom: 1rem;
  font-weight: 600;
}

.nav-item {
  margin-bottom: 0.25rem;
  font-weight: 300;
}

p {
  margin: 0;
}

@media only screen and (min-width: 720px) {
  .nav-section {
    display: flex;
    flex-direction: column;
    width: 250px;
  }
}
</style>
