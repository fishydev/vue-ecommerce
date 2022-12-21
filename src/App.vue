<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, provide, onBeforeMount } from "vue";
import NavbarComponentVue from "./components/global/Navbar/NavbarComponent.vue";
import CartDialogVue from "./components/global/Navbar/CartDialog.vue";
import LoginDialogVue from "./components/auth/LoginDialog.vue";
import RegisterDialogVue from "./components/auth/RegisterDialog.vue";
import { useAuthStore } from "./stores/auth";

const isVisibleCart = ref(false);
const isVisibleLogin = ref(false);
const isVisibleRegister = ref(false);
const auth = useAuthStore();

provide("isVisibleCart", isVisibleCart);
provide("isVisibleLogin", isVisibleLogin);
provide("isVisibleRegister", isVisibleRegister);

onBeforeMount(() => {
  const storageToken = localStorage.getItem("token");
  if (storageToken) {
    auth.setToken(storageToken);
  }
});
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
