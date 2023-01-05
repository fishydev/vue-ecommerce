<script setup lang="ts">
import { ElIcon } from "element-plus";
</script>

<template>
  <section class="center">
    <div class="benefits-container">
      <div class="benefit-subsection">
        <el-icon :size="50"> <ShoppingTrolley /> </el-icon>
        <h3 class="benefit-title">Ships free and with love</h3>
        <p>Free delivery on all orders over €150 and over €100 for Europe.</p>
      </div>
      <div class="benefit-subsection">
        <el-icon :size="50"><Money /></el-icon>
        <h3 class="benefit-title">Secure Payments</h3>
        <p>Certified partners and data protection for the best experience.</p>
      </div>
      <div class="benefit-subsection">
        <el-icon :size="50"><Service /></el-icon>
        <h3 class="benefit-title">We would love to help you</h3>
        <p>Any questions? Head over to our support. We're here to help.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefit-subsection {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 2rem 0;
  padding: 2rem;
}

.benefit-title {
  font-weight: bold;
}

@media only screen and (min-width: 720px) {
  .benefits-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 4rem;
  }

  .benefit-subsection {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 2rem;
  }
}
</style>
