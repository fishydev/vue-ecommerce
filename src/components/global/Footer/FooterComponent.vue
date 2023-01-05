<script setup lang="ts">
import FooterNavigationItem from "./FooterNavigationItem.vue";
import { footerNavigations } from "@/data";
</script>

<template>
  <section class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-identity">
        <img class="logo" src="@/assets/shopy-logo.png" alt="shopy-logo" />
      </div>
      <div class="footer-nav">
        <FooterNavigationItem
          v-for="section in footerNavigations"
          :key="section.title"
          :title="section.title"
          :pages="section.pages"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100vw;
}

.footer-container {
  padding: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.footer-identity {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.socials {
  display: flex;
}

.logo {
  width: 12rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 720px) {
  .footer-nav {
    display: flex;
    flex-direction: row;
  }

  .footer-container {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  .logo {
    width: 12rem;
  }
}
</style>
