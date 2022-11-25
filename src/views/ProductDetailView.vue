<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import DetailSection from "@/components/product/DetailSection.vue";
import ActionSection from "@/components/product/ActionSection.vue";
import ErrorComponent from "@/components/global/ErrorComponent.vue";
import { getProductByUuid } from "@/api/products";
import type { Product } from "@/types";

const productData = ref<Product>();
const loading = ref(true);

const route = useRoute();

const fetchProductData = async (uuid: string) => {
  try {
    loading.value = true;
    const result = (await getProductByUuid(uuid)).data;
    productData.value = result;
  } catch (error) {
    //
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  fetchProductData(route.params.uuid as string);
});
</script>

<template>
  <div class="detail-view" v-if="productData">
    <DetailSection
      :name="productData.productTitle"
      :brand="productData.brand"
      :description="productData?.description"
      :price="productData.price"
      :rating="productData.rating"
      :review="productData.reviews"
    />
    <ActionSection :image="productData.imageUrl" :alt="productData.alt" />
  </div>
  <ErrorComponent v-else />
</template>

<style>
.detail-view {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  column-gap: 2rem;
}
</style>
