<script setup lang="ts">
import {
  ElTable,
  ElTableColumn,
  ElImage,
  ElButton,
  ElNotification,
} from "element-plus";
import { Plus, Minus, CloseBold } from "@element-plus/icons-vue";
import type { CartItem } from "@/types";
import LoadingComponentVue from "../global/LoadingComponent.vue";
import { addItem, deleteItem, substractItem } from "@/api/cart";

defineProps<{
  content: CartItem[];
  loading: boolean;
}>();

const emit = defineEmits(["onChangedItem"]);

const addHandler = async (itemUuid: string, productName: string) => {
  try {
    await addItem(itemUuid);
    ElNotification({
      type: "success",
      message: `Added one ${productName} to cart`,
      title: "Success",
      offset: 75,
    });
  } catch (err) {
    //
  } finally {
    emit("onChangedItem");
  }
};
const substractHandler = async (cartItemId: number, productName: string) => {
  try {
    await substractItem(cartItemId);
    ElNotification({
      type: "success",
      message: `Removed one ${productName} from cart`,
      title: "Success",
      offset: 75,
    });
  } catch (err) {
    //
  } finally {
    emit("onChangedItem");
  }
};
const deleteHandler = async (cartItemId: number, productName: string) => {
  try {
    await deleteItem(cartItemId);
    ElNotification({
      type: "success",
      message: `Deleted ${productName} from cart`,
      title: "Success",
      offset: 75,
    });
  } catch (err) {
    //
  } finally {
    emit("onChangedItem");
  }
};
</script>

<template>
  <div class="checkout-items-container">
    <h1>Items in my cart</h1>
    <LoadingComponentVue v-if="loading" />
    <ElTable class="table-checkout" :data="content" v-else>
      <ElTableColumn prop="title" label="Item">
        <template #default="scope">
          <div class="cell-item">
            <ElImage class="img-item" :src="scope.row.product.imageUrl" />
            <span>
              {{ `${scope.row.product.productTitle}` }}
            </span>
          </div>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="price" label="Unit price">
        <template #default="scope">
          {{ `JPY ${scope.row.product.price}` }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="amount" label="Quantity">
        <template #default="scope">
          <div class="cell-amount">
            <ElButton
              :icon="Minus"
              text
              @click="
                substractHandler(scope.row.id, scope.row.product.productTitle)
              "
            />
            <span>{{ scope.row.amount }}</span>
            <ElButton
              :icon="Plus"
              text
              @click="
                addHandler(
                  scope.row.product.uuid,
                  scope.row.product.productTitle
                )
              "
            />
          </div>
        </template>
      </ElTableColumn>
      <ElTableColumn label="Remove">
        <template #default="scope">
          <ElButton
            :icon="CloseBold"
            text
            @click="deleteHandler(scope.row.id, scope.row.product.productTitle)"
          />
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<style scoped>
.table-checkout > .cell-amount {
  display: flex;
}

.cell-item {
  display: flex;
  align-items: center;
}

.cell-item > .img-item {
  height: 50px;
  background-color: lightgrey;
  margin-right: 1rem;
}

.text-empty {
  text-align: center;
}
</style>
