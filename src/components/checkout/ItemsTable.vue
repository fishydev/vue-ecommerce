<script setup lang="ts">
import { ref } from "vue";
import { ElTable, ElTableColumn, ElImage, ElButton } from "element-plus";
import { Plus, Minus, CloseBold } from "@element-plus/icons-vue";

const items = ref([
  {
    id: "1",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 131",
    price: 480,
    amount: 1,
  },
  {
    id: "2",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 132",
    price: 480,
    amount: 3,
  },
  {
    id: "3",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 133",
    price: 480,
    amount: 2,
  },
  {
    id: "4",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 134",
    price: 480,
    amount: 1,
  },
  {
    id: "5",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 135",
    price: 480,
    amount: 1,
  },
  {
    id: "6",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 136",
    price: 480,
    amount: 1,
  },
  {
    id: "7",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 137",
    price: 480,
    amount: 1,
  },
  {
    id: "8",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 138",
    price: 480,
    amount: 1,
  },
  {
    id: "9",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 139",
    price: 480,
    amount: 1,
  },
  {
    id: "10",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    title: "Airdopes 140",
    price: 480,
    amount: 1,
  },
]);

const changeAmount = (id: string, action: 1 | -1) => {
  const item = items.value.find((item) => item.id === id);
  item!.amount += action;
  console.log(`${item!.amount} ${item!.title}`);
};

const removeItem = (id: string) => {
  const item = items.value.find((item) => item.id === id)!;
  console.log(`removed ${item.amount} ${item.title} from cart`);
};
</script>

<template>
  <div class="checkout-items-container">
    <h1>Items in my cart</h1>
    <ElTable class="table-checkout" :data="items">
      <ElTableColumn prop="title" label="Item">
        <template #default="scope">
          <div class="cell-item">
            <ElImage class="img-item" :src="scope.row.imageUrl" />
            <span>
              {{ `${scope.row.title}` }}
            </span>
          </div>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="price" label="Unit price">
        <template #default="scope">
          {{ `Rs. ${scope.row.price}` }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="amount" label="Quantity">
        <template #default="scope">
          <div class="cell-amount">
            <ElButton
              :icon="Minus"
              text
              @click="changeAmount(scope.row.id, -1)"
            />
            <span>{{ scope.row.amount }}</span>
            <ElButton
              :icon="Plus"
              text
              @click="changeAmount(scope.row.id, 1)"
            />
          </div>
        </template>
      </ElTableColumn>
      <ElTableColumn label="Remove">
        <template #default="scope">
          <ElButton :icon="CloseBold" text @click="removeItem(scope.row.id)" />
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
</style>
