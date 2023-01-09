<script setup lang="ts">
import CartDialogItem from "./CartDialogItem.vue";
import { ElDialog, ElButton } from "element-plus";
import { ref, inject, type Ref, onUpdated } from "vue";
import { RouterLink } from "vue-router";
import type { CartItem } from "@/types";
import { getCartSummary } from "@/api";
import { useBreakpoints } from "@/composables/breakpoints";

const isLoading = ref(false);

const isVisible = inject<Ref<boolean>>("isVisibleCart");
const items = ref<CartItem[]>([]);
const remainder = ref<number>(0);

const { width } = useBreakpoints();

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
  <ElDialog
    v-model="isVisible"
    title="My Cart"
    :width="width > 720 ? '50%' : '90%'"
  >
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
.cart-dialog {
  width: 80%;
}
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
  flex-direction: column;
  row-gap: 8px;
}

.btn-view-cart {
  align-self: center;
  text-transform: uppercase;
  border: 1px solid #ffffff;
  border-radius: 2px;
  font-weight: bold;
}

.btn-checkout {
  align-self: center;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 2px;
  font-weight: bold;
}

.btn-cart-dialog {
  margin-right: 1rem;
}

.cart-footer button {
  width: 100%;
}

@media only screen and (min-width: 720px) {
  .cart-footer {
    flex-direction: row;
    justify-content: space-between;
  }

  .cart-footer button {
    width: 10rem;
  }
}
</style>
