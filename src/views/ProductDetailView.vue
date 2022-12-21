<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import DetailSection from "@/components/product/DetailSection.vue";
import ActionSection from "@/components/product/ActionSection.vue";
import ErrorComponent from "@/components/global/ErrorComponent.vue";
import LoadingComponent from "@/components/global/LoadingComponent.vue";
import { getProductByUuid } from "@/api/products";
import type { Product } from "@/types";

const productData = ref<Product>();
const isLoading = ref(true);
const isError = ref(false);
const errorMessage = ref("");

const route = useRoute();

const fetchProductData = async (uuid: string) => {
  try {
    isLoading.value = true;
    const result = (await getProductByUuid(uuid)).data;
    productData.value = result;
  } catch (error: any) {
    isError.value = true;
    if (error.message) errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  fetchProductData(route.params.uuid as string);
});
</script>

<template>
  <div v-if="isLoading" class="loading-wrapper">
    <LoadingComponent />
  </div>
  <div v-else>
    <ErrorComponent :message="errorMessage" v-if="isError" />
    <div class="detail-view" v-if="productData && !isError">
      <DetailSection
        :name="productData.productTitle"
        :brand="productData.brand"
        :description="productData.description"
        :price="productData.price"
        :rating="productData.rating"
        :review="productData.reviews"
      />
      <ActionSection
        :image="productData.imageUrl"
        :alt="productData.alt"
        :uuid="productData.uuid"
      />
    </div>
  </div>
</template>

<style scoped>
.detail-view {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  column-gap: 2rem;
}

.loading-wrapper {
  height: 50vh;
}
</style>
