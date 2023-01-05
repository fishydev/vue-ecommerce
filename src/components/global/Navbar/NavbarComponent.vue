<script setup lang="ts">
import { inject, computed, type Ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { ElButton, ElNotification } from "element-plus";
import { Goods, ShoppingCartFull } from "@element-plus/icons-vue";
import { useAuthStore } from "@/stores/auth";

const isVisibleCartDialog = inject<Ref<boolean>>("isVisibleCart")!;
const isVisibleLoginDialog = inject<Ref<boolean>>("isVisibleLogin")!;

const router = useRouter();
const auth = useAuthStore();

const isLoggedIn = computed(() => {
  return auth.isAuth;
});

const logout = async () => {
  auth.clearToken();
  ElNotification({
    type: "success",
    message: "You are logged out",
    offset: 75,
  });
  router.push({ name: "home" });
};
</script>

<template>
  <nav>
    <div class="navbar-container center">
      <div class="navbar-main-wrapper">
        <div class="col">
          <RouterLink to="/" class="img-href">
            <img class="logo" src="@/assets/shopy-logo.png" alt="shopy-logo" />
          </RouterLink>
          <RouterLink to="/product/list">
            <ElButton
              class="btn-cart-dialog"
              :icon="Goods"
              size="large"
              circle
              link
            />
          </RouterLink>
          <ElButton
            class="btn-cart-dialog"
            :icon="ShoppingCartFull"
            size="large"
            @click="isVisibleCartDialog = true"
            circle
            link
            v-if="isLoggedIn"
          />
        </div>
        <div class="col">
          <ElButton text v-if="isLoggedIn" @click="logout()">Logout</ElButton>
          <ElButton @click="isVisibleLoginDialog = true" text v-else
            >Login</ElButton
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
}

.img-href {
  height: 2.25rem;
  margin-right: 1rem;
}

nav {
  width: 100%;
  max-width: 100vw;
}

.navbar-main-wrapper > .col {
  display: flex;
  align-items: center;
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

@media only screen and (min-width: 720px) {
  .navbar-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .navbar-main-wrapper > .col > :not(:last-child) {
    margin-right: 2rem;
  }
}
</style>
