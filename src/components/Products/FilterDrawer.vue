<script setup lang="ts">
import {
  ElCollapse,
  ElCollapseItem,
  ElRadioGroup,
  ElRadio,
  ElCheckboxGroup,
  ElCheckbox,
} from "element-plus";
</script>

<template>
  <div class="products-filter-wrapper">
    <el-collapse>
      <el-collapse-item title="Sort">
        <el-radio-group class="layout-vertical">
          <el-radio label="htl">High to Low</el-radio>
          <el-radio label="lth">Low to High</el-radio>
          <el-radio label="latest">Latest</el-radio>
        </el-radio-group>
      </el-collapse-item>
      <el-collapse-item title="Categories">
        <el-checkbox-group class="layout-vertical">
          <el-checkbox label="wireless earphones"
            >Wireless Earphones</el-checkbox
          >
          <el-checkbox label="smart watches">Smart Watches</el-checkbox>
          <el-checkbox label="headphones">Headphones</el-checkbox>
          <el-checkbox label="wired earphones">Wired Earphones</el-checkbox>
        </el-checkbox-group>
      </el-collapse-item>
      <el-collapse-item title="Color">
        <el-checkbox-group class="layout-vertical">
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
}

.layout-vertical {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: start;
}
</style>
