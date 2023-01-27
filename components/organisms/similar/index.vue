<template>
  <div class="similar">
    <div class="similar_top">
      <p class="similar_top__title">Похожие товары</p>
      <p class="similar_top__show-all">См. все ({{ products?.length }})</p>
    </div>
    <div class="similar_list">
      <MoleculesSimilarItem v-for="(item, idx) in products" :key="`similar_list__item__${idx}`" v-bind="item" />
    </div>
    <div class="similar_show-more_btn-wrapper">
      <ui-button class="similar_show-more_btn-wrapper__btn" v-bind="showMoreButtonOptions">Показать ещё товары</ui-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { Product } from '~~/interfaces/product';

interface Props {
  products: Array<Product>;
}

const props = defineProps<Props>()

const showMoreButtonOptions: Ref<object> = ref({
  background: "rgba(255, 255, 255, 0.08)",
  border: "none",
  color: "#fff",
  padding: "14px 32px"
})
</script>

<style scoped lang="scss">
.similar {
  display: flex;
  flex-direction: column;
  gap: 18px;

  &_show-more_btn-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }

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
      cursor: pointer;
    }
  }

  &_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 4fr));
    gap: 20px;
  }
}
</style>
