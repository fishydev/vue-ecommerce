<script setup lang="ts">
import { ref, onMounted, toRaw } from "vue";
import {
  ElCollapse,
  ElCollapseItem,
  ElRadioGroup,
  ElRadio,
  ElCheckboxGroup,
  ElCheckbox,
  ElSkeleton,
  ElSkeletonItem,
  ElInput,
} from "element-plus";
import { getCategoryOptions } from "@/api/categories";
import type { CategoryOption } from "@/types";

const typeOptions = ref<CategoryOption[]>();
const selectedTypes = ref<string[]>();
const selectedColors = ref<string[]>();
const sortOption = ref<string>();
const searchQuery = ref<string>();
const loading = ref(true);

const fetchOptions = async () => {
  try {
    const result = (await getCategoryOptions()).data;
    typeOptions.value = result;
  } catch (error) {
    //
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  fetchOptions();
});

const emit = defineEmits(["onChangeFilter"]);

const changedFilter = () => {
  emit("onChangeFilter", {
    types: toRaw(selectedTypes.value),
    colors: toRaw(selectedColors.value),
    sort: toRaw(sortOption.value),
    query: toRaw(searchQuery.value),
  });
};
</script>

<template>
  <div class="products-filter-wrapper">
    <el-input
      v-model="searchQuery"
      clearable
      @change="changedFilter"
      placeholder="Search keyword..."
    />
    <el-collapse>
      <el-collapse-item title="Sort">
        <el-radio-group
          v-model="sortOption"
          class="layout-vertical"
          @change="changedFilter"
        >
          <el-radio label="htl">High to Low</el-radio>
          <el-radio label="lth">Low to High</el-radio>
        </el-radio-group>
      </el-collapse-item>
      <el-collapse-item title="Categories">
        <el-skeleton :loading="loading">
          <template #template>
            <el-skeleton-item variant="text" />
          </template>
          <template #default>
            <el-checkbox-group
              v-model="selectedTypes"
              class="layout-vertical"
              @change="changedFilter"
            >
              <el-checkbox
                v-for="option in typeOptions"
                :key="option.uuid"
                :label="option.uuid"
                >{{ option.type }}</el-checkbox
              >
            </el-checkbox-group>
          </template>
        </el-skeleton>
        <!-- <el-checkbox-group class="layout-vertical">
          <el-checkbox label="wireless earphones"
            >Wireless Earphones</el-checkbox
          >
          <el-checkbox label="smart watches">Smart Watches</el-checkbox>
          <el-checkbox label="headphones">Headphones</el-checkbox>
          <el-checkbox label="wired earphones">Wired Earphones</el-checkbox>
        </el-checkbox-group> -->
      </el-collapse-item>
      <el-collapse-item title="Color">
        <el-checkbox-group
          v-model="selectedColors"
          class="layout-vertical"
          @change="changedFilter"
        >
          <el-checkbox label="Black">Black</el-checkbox>
          <el-checkbox label="Red">Red</el-checkbox>
          <el-checkbox label="Green">Green</el-checkbox>
          <el-checkbox label="White">White</el-checkbox>
          <el-checkbox label="Sky Blue">Sky Blue</el-checkbox>
          <el-checkbox label="Grey">Grey</el-checkbox>
          <el-checkbox label="Yellow">Yellow</el-checkbox>
          <el-checkbox label="Blue">Blue</el-checkbox>
          <el-checkbox label="Pink">Pink</el-checkbox>
        </el-checkbox-group>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
.products-filter-wrapper {
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding-top: 1rem;
}

.layout-vertical {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: start;
}
</style>
