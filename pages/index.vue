<template>
  <div class="content-box">
    <OrganismsSimilar  :products="products"/>
  </div>
</template>

<script setup lang="ts">
import { useProducts } from "~~/stores/products";
// const { fetchProducts, products } = useProducts();
// const data = toRefs(products)

const store = useProducts()
const { fetchProducts, products } = toRefs(store);
fetchProducts.value()
</script>

<style scoped lang="scss"></style>
