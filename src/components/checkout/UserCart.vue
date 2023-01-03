<script lang="ts" setup>
import CardComponent from "../global/CardComponent.vue";
import { computed, onMounted } from "vue";
import { ElImage } from "element-plus";

const cartContent = [
  {
    id: 2,
    amount: 1,
    total: 1499,
    product: {
      productTitle: "Airdopes 115",
      imageUrl:
        "//cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main1_600x.png?v=1655368638",
      price: 1499,
      uuid: "bb0ec543-4b15-4c95-a771-9d587c7d9eaf",
    },
  },
  {
    id: 2,
    amount: 1,
    total: 1499,
    product: {
      productTitle: "Airdopes 115",
      imageUrl:
        "//cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main1_600x.png?v=1655368638",
      price: 1499,
      uuid: "bb0ec543-4b15-4c95-a771-9d587c7d9eaf",
    },
  },
];

const subtotal = computed(() => {
  return cartContent.length > 0
    ? cartContent.reduce((acc, cur) => acc + cur.total, 0)
    : 0;
});
</script>

<template>
  <CardComponent class="user-cart-card layout-wrapper">
    <div class="user-cart-wrapper">
      <h1 class="user-cart__title">Your Order</h1>
      <div class="user-cart__content">
        <div class="cart-item" v-for="item in cartContent" :key="item.id">
          <ElImage
            :src="item.product.imageUrl"
            class="cart-item__image"
          ></ElImage>
          <div class="cart-item__description">
            <span class="cart-item__name">{{ item.product.productTitle }}</span>
            <span class="cart-item__amount">{{ `× ${item.amount}` }}</span>
          </div>
          <span class="cart-item__price">{{ `JPY ${item.total}` }}</span>
        </div>
      </div>
      <div class="user-cart__summary">
        <div class="row">
          <span class="label">Subtotal</span>
          <span class="value">{{ `JPY ${subtotal}` }}</span>
        </div>
        <div class="row">
          <span class="label">Shipping</span>
          <span class="value">{{ `JPY ${0.05 * subtotal}` }}</span>
        </div>
      </div>
      <div class="user-cart__total">
        <div class="row">
          <span class="label">Total</span>
          <span class="value">{{ `JPY ${1.05 * subtotal}` }}</span>
        </div>
      </div>
    </div>
    <ElButton
      class="btn-checkout"
      size="large"
      type="primary"
      bg
      color="#000000"
      >Checkout</ElButton
    >
  </CardComponent>
</template>

<style scoped>
.user-cart-wrapper {
  display: flex;
  flex-direction: column;
}

.user-cart__content {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

.user-cart__content > :not(:last-child) {
  margin-bottom: 12px;
}

.cart-item {
  display: flex;
  align-items: center;
}

.cart-item > :not(:last-child) {
  margin-right: 8px;
}

.cart-item__image {
  height: 50px;
  background-color: gainsboro;
  padding: 4px;
}

.cart-item__description {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.cart-item__amount {
  color: grey;
}

.user-cart__title {
  margin: 0 0 1rem 0;
  padding: 0;
}

.user-cart__summary {
  border-color: gainsboro;
  border-style: solid;
  border-width: 1px 0;
  padding: 1rem 0;
}

.user-cart__total {
  margin: 1rem 0;
}

.row {
  display: flex;
  justify-content: space-between;
}

span.label {
  color: grey;
}

.btn-checkout {
  width: 100%;
  align-self: center;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 2px;
  font-weight: bold;
}
</style>
