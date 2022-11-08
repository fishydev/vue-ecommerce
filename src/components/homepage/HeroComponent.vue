<script setup lang="ts">
import { heroImages } from "../../data";
</script>

<template>
  <el-carousel class="hero" trigger="click" height="500px">
    <el-carousel-item v-for="item in heroImages" :key="item.id">
      <img :src="item.src" :alt="item.alt" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
