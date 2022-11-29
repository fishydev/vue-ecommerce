<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, provide } from "vue";
import NavbarComponentVue from "./components/global/NavbarComponent.vue";
import CartDialogVue from "./components/cart/CartDialog.vue";
import LoginDialogVue from "./components/auth/LoginDialog.vue";
import RegisterDialogVue from "./components/auth/RegisterDialog.vue";

const isVisibleCart = ref(false);
const isVisibleLogin = ref(false);
const isVisibleRegister = ref(false);

provide("isVisibleCart", isVisibleCart);
provide("isVisibleLogin", isVisibleLogin);
provide("isVisibleRegister", isVisibleRegister);
</script>

<template>
  <header>
    <NavbarComponentVue />
  </header>

  <main>
    <RouterView />
  </main>
  <CartDialogVue />
  <LoginDialogVue />
  <RegisterDialogVue />
</template>

<style>
main {
  max-width: 105rem;
  padding: 0px 2rem;
  margin: 0px auto;
}
</style>
