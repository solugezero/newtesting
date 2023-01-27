<template>
  <div class="product-description">
    <p class="product-description__title">Описание</p>
    <p class="product-description__value">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import {productDescription} from "~~/interfaces/product"
const props = withDefaults(defineProps<productDescription>(), {})
</script>

<style scoped lang="scss">
.product-description {
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.04em;
  }

  &__value {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: #a7a7a7;
		max-width: 35%;

    @media (max-width: 768px) {
      max-width: unset;
    }
  }
}
</style>
