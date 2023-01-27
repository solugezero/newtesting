<template>
  <div class="similar-item">
    <img :src="`${img}`" alt="" class="similar-item__img" @click="redirectToProduct(id)"/>
    <AtomsProductPrice :price="price" :newprice="newprice" />
    <AtomsProductTags :tags="tags" />
    <AtomsStats :reviews="reviews" :rate="rate"/>
  </div>
</template>

<script setup lang="ts">
import { Product } from '~~/interfaces/product';

const props = defineProps<Product>();

const redirectToProduct = (id: string): any => {
  useRouter().push({name: `product-id`, params: {id}})
}
</script>

<style scoped lang="scss">
.similar-item {
  display: flex;
  flex-direction: column;
  gap: 9px;

  &__img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 12px;
    cursor: pointer;
  }
}
</style>
