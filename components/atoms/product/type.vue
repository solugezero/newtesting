<template>
  <div class="product-type">
    <p class="product-type__type">{{ type }}</p>
    <p class="product-type__subtype">{{ subtype }}</p>
  </div>
</template>

<script setup lang="ts">
import { productType } from '~~/interfaces/product';

const props = defineProps<productType>()
</script>

<style scoped lang="scss">
.product-type {
  display: flex;
  flex-direction: column;
  gap: 2px;

  &__type {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #a7a7a7;
  }

  &__subtype {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #5f5f5f;
  }
}
</style>
