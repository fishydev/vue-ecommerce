<script setup lang="ts">
defineProps<{
  message?: string;
}>();
</script>

<template>
  <div class="error-container">
    <h2>
      {{ `Something unexpected happened.${message ? ` (${message})` : ``}` }}
    </h2>
  </div>
</template>

<style>
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}
</style>
