<template>
  <div class="product-preview">
    <p class="product-preview__title">{{ title }}</p>
    <img :src="`${img}`" alt="" class="product-preview__img" />
  </div>
</template>

<script setup lang="ts">
import {productPreview} from "~~/interfaces/product"
interface Props extends productPreview {

}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.product-preview {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.07em;
    color: #ffffff;
  }

  &__img {
    border-radius: 12px;
    aspect-ratio: 752/422;
    width: 100%;
    object-fit: cover;
  }
}
</style>
