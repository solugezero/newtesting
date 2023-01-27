<template>
  <div class="stats">
    <div class="stats_item">
      <img src="@/assets/svg/commentOutline.svg" alt="" class="stats_item__icon" />
      <p class="stats_item__value">{{ reviews?.length }}</p>
    </div>

    <div class="stats_item">
      <img src="@/assets/svg/starFilled.svg" alt="" class="stats_item__icon" />
      <p class="stats_item__value">{{ rate }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Review } from '~~/interfaces/product';
interface Props {
  reviews: Array<Review> | any,
  rate: number,
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.stats {
  display: flex;
  gap: 10px;

  &_item {
    display: flex;
    gap: 6px;

    &__value {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #5f5f5f;
    }
  }
}
</style>
