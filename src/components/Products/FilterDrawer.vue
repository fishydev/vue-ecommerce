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
import { getColorOptions } from "@/api/color";
import type { CategoryOption, ColorOption } from "@/types";
import { useBreakpoints } from "@/composables/breakpoints";

const categoryOptions = ref<CategoryOption[]>();
const colorOptions = ref<ColorOption[]>();
const selectedTypes = ref<string[]>();
const selectedColors = ref<string[]>();
const sortOption = ref<string>();
const searchQuery = ref<string>();
const loading = ref(true);

const { width } = useBreakpoints();
const showFilter = ref<boolean>(true);

const fetchOptions = async () => {
  try {
    const categoryResult = (await getCategoryOptions()).data;
    const colorResult = (await getColorOptions()).data;
    categoryOptions.value = categoryResult;
    colorOptions.value = colorResult;
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
  <ElButton
    class="btn-filter"
    v-if="width < 720"
    @click="showFilter = !showFilter"
    >Filter</ElButton
  >
  <Transition name="filter">
    <div class="products-filter-wrapper" v-if="width >= 720 || showFilter">
      <el-input
        v-model="searchQuery"
        clearable
        v-debounce:1s="changedFilter"
        :debounce-events="'change'"
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
                  v-for="option in categoryOptions"
                  :key="option.uuid"
                  :label="option.uuid"
                  >{{ option.type }}</el-checkbox
                >
              </el-checkbox-group>
            </template>
          </el-skeleton>
        </el-collapse-item>
        <el-collapse-item title="Color">
          <el-checkbox-group
            v-model="selectedColors"
            class="layout-vertical"
            @change="changedFilter"
          >
            <el-checkbox
              v-for="color in colorOptions"
              :key="color.id"
              :label="color.id"
            >
              <div class="color-option">
                <div
                  class="color-option__preview"
                  :style="`background-color: ${color.hex}`"
                ></div>
                {{ color.name }}
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
      </el-collapse>
    </div>
  </Transition>
</template>

<style scoped>
.btn-filter {
  margin-bottom: 1rem;
}
.products-filter-wrapper {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
}
.filter-enter-active,
.filter-leave-active {
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}

.filter-enter-to,
.filter-leave-from {
  transform: scaleY(1);
}

.filter-enter-from,
.filter-leave-to {
  transform: scaleY(0);
}
.layout-vertical {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: start;
}

.color-option {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.color-option__preview {
  aspect-ratio: 10/16;
  width: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 2px;
}

@media only screen and (min-width: 720px) {
  .products-filter-wrapper {
    display: flex;
    flex-direction: column;
    width: 35rem;
    padding: 0 1rem 0 0;
  }

  .products-filter-wrapper:not(.hidden) {
    padding: 0 1rem 0 0;
  }
}
</style>
