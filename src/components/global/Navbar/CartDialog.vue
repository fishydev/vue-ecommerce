<script setup lang="ts">
import CartDialogItem from "./CartDialogItem.vue";
import { ElDialog, ElButton } from "element-plus";
import { ref, inject, type Ref, onUpdated } from "vue";
import { RouterLink } from "vue-router";
import type { CartItem } from "@/types";
import { getCartSummary } from "@/api";

const isLoading = ref(false);

const isVisible = inject<Ref<boolean>>("isVisibleCart");
const items = ref<CartItem[]>([]);
const remainder = ref<number>(0);

onUpdated(() => {
  fetchSummary();
});

const fetchSummary = async () => {
  try {
    isLoading.value = true;
    const result = await getCartSummary();
    items.value = result.data.content;
    remainder.value = result.data.remainder;
  } catch (err) {
    //
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <ElDialog v-model="isVisible" title="My Cart">
    <div v-if="items && items.length > 0">
      <CartDialogItem
        v-for="item in items"
        :amount="item.amount"
        :product="item.product"
        :key="item.id"
        :title="item.product.productTitle"
      />
      <span v-if="remainder > 0" class="remaining-amount">{{
        `+ ${remainder} Products`
      }}</span>
    </div>
    <div v-else>
      <p class="text-empty">Nothing in your cart yet. Add some!</p>
    </div>
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
            :disabled="items.length < 1"
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

.text-empty {
  text-align: center;
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
