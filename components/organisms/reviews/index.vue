<template>
  <div class="reviews">
    <div class="reviews_top">
      <p class="reviews_top__title">Отзывы о shiro shop</p>
      <p class="reviews_top__show-all">См. все (451)</p>
    </div>
		<div class="reviews_list">
			<MoleculesReviewsItem v-for="(item, idx) in reviews" v-bind="item" :key="`reviews_list_item__${idx}`" />
		</div>
  </div>
</template>

<script setup lang="ts">
import {productReviews} from "~~/interfaces/product"
interface Props extends productReviews {

}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.reviews {
  display: flex;
  flex-direction: column;
  gap: 18px;

  &_top {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    &__title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.04em;
    }

    &__show-all {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #6feb42;
    }
  }

	&_list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 4fr));
		gap: 20px;
	}
}
</style>
