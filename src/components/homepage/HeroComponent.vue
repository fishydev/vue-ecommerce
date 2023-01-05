<script setup lang="ts">
import { heroImages } from "../../data";
import { useBreakpoints } from "@/composables/breakpoints";
import { ref, computed } from "vue";

const { width } = useBreakpoints();
</script>

<template>
  <el-carousel class="hero" trigger="click" height="550px">
    <el-carousel-item v-for="item in heroImages" :key="item.id">
      <img :src="width < 720 ? item.mobsrc : item.src" :alt="item.alt" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
}
</style>
