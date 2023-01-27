<template>
  <div class="seller-preview">
    <img :src="`${img}`" alt="" class="seller-preview__img" />
    <div class="seller-preview_data">
      <p class="seller-preview_data__name">Lisana</p>
      <AtomsStats :reviews="reviews" :rate="rate" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {User} from "~~/interfaces/user"
const props = defineProps<User>()
</script>

<style scoped lang="scss">
.seller-preview {
  display: flex;
  align-items: center;
  gap: 8px;

  &__img {
    width: 34px;
    height: 34px;
    object-fit: cover;
    border-radius: 50%;
  }

  &_data {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    &__name {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #a7a7a7;
      line-height: 17px;
    }
  }
}
</style>
