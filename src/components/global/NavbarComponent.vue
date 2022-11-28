<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ElIcon } from "element-plus";
import CartDialog from "../cart/CartDialog.vue";
</script>

<template>
  <header class="navbar">
    <div class="navbar-container center">
      <div class="navbar-main-wrapper">
        <div class="col">
          <RouterLink to="/" class="img-href">
            <img class="logo" src="@/assets/shopy-logo.png" alt="shopy-logo" />
          </RouterLink>
          <RouterLink to="/product/list">
            <span>Shop</span>
          </RouterLink>
        </div>
        <div class="col">
          <CartDialog />
          <span>Login</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
a {
  text-decoration: none;
}

.img-href {
  height: 2.25rem;
  margin-right: 1rem;
}

.navbar {
  width: 100%;
  max-width: 100vw;
}

.navbar-main-wrapper > .col {
  display: flex;
  align-items: center;
}

.navbar-main-wrapper > .col > :not(:last-child) {
  margin-right: 2rem;
}

.navbar-main-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.logo {
  height: 2.25rem;
  cursor: pointer;
}
</style>
