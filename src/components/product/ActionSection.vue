<script setup lang="ts">
import { addItem } from "@/api/cart";
import { ElButton, ElNotification } from "element-plus";
import { ref, toRaw } from "vue";
const props = defineProps<{
  image: string;
  alt: string;
  uuid: string;
}>();

const isLoading = ref(false);

const addToCart = async () => {
  try {
    isLoading.value = true;
    const result = await addItem(toRaw(props.uuid));
    ElNotification({
      title: "Success",
      message: result.data,
      type: "success",
      offset: 75,
    });
  } catch (err) {
    //
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section>
    <img :src="image" :alt="alt" />
    <ElButton
      class="btn-add-to-cart"
      size="large"
      type="primary"
      plain
      bg
      color="#000000"
      :loading="isLoading"
      @click="addToCart"
      >Add to Cart</ElButton
    >
  </section>
</template>

<style scoped>
img {
  width: 100%;
}
section {
  display: flex;
  flex-direction: column;
}

.btn-add-to-cart {
  width: 10rem;
  align-self: center;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 2px;
  font-weight: bold;
}

@media only screen and (min-width: 720px) {
  img {
    height: 40%;
  }
}
</style>
