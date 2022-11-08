<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NavbarComponentVue from "./components/global/NavbarComponent.vue";
</script>

<template>
  <header>
    <NavbarComponentVue />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  max-width: 105rem;
  padding: 0px 2rem;
  margin: 0px auto;
}
</style>
