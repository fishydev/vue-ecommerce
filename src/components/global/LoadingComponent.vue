<script setup lang="ts">
import Loading from "vue-loading-overlay";
defineProps<{
  variant?: {
    type: "spinner" | "dots" | "bars";
    default: "spinner";
  };
}>();

const isLoading = true;
</script>

<template>
  <div>
    <Loading :loader="variant" v-model:active="isLoading" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
