<script setup lang="ts">
import CartDialogItem from "./CartDialogItem.vue";
import { ShoppingCartFull } from "@element-plus/icons-vue";
import { ElDialog, ElButton } from "element-plus";
import { ref, inject, type Ref } from "vue";
import { RouterLink } from "vue-router";

const isVisible = inject<Ref<boolean>>("isVisibleCart");
const items = ref([
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 131",
    price: 480,
    amount: 1,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 131",
    price: 480,
    amount: 3,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 131",
    price: 480,
    amount: 2,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 131",
    price: 480,
    amount: 1,
  },
]);
</script>

<template>
  <ElDialog v-model="isVisible" title="My Cart">
    <CartDialogItem
      v-for="index in 2"
      :amount="items[index].amount"
      :image-url="items[index].imageUrl"
      :price="items[index].price"
      :key="index"
      :title="items[index].title"
    />
    <span v-if="items.length > 3" class="remaining-amount">{{
      `+ ${items.length - 3} Products`
    }}</span>
    <template #footer>
      <div class="cart-footer">
        <RouterLink to="/cart" @click="isVisible = false">
          <ElButton
            class="btn-view-cart"
            size="large"
            type="primary"
            bg
            color="#EEEEEE"
            >View Cart</ElButton
          >
        </RouterLink>
        <RouterLink to="/checkout" @click="isVisible = false">
          <ElButton
            class="btn-checkout"
            size="large"
            type="primary"
            bg
            color="#000000"
            >Checkout</ElButton
          >
        </RouterLink>
      </div>
    </template>
  </ElDialog>
</template>

<style scoped>
.cart-content-wrapper {
  display: flex;
  flex-direction: column;
}

.remaining-amount {
  text-align: center;
  padding: 1rem;
  display: block;
  background-color: gainsboro;
  color: black;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
}

.btn-view-cart {
  width: 10rem;
  align-self: center;
  text-transform: uppercase;
  border: 1px solid #ffffff;
  border-radius: 2px;
  font-weight: bold;
}

.btn-checkout {
  width: 10rem;
  align-self: center;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 2px;
  font-weight: bold;
}

.btn-cart-dialog {
  margin-right: 1rem;
}
</style>
