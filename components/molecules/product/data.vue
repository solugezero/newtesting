<template>
  <div class="preview-data">
    <p class="preview-data__price">{{ newprice ? newprice : price }} ₽</p>
    <ui-button v-bind="orderButtonOptions">Купить</ui-button>
    <div class="preview-data_info mt-20">
        <AtomsSellerPreview v-bind="owner" />
        <AtomsProductType v-bind="productType"  />
    </div>
    <MoleculesPaymentInfo class="mt-20" />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import {previewData} from "~~/interfaces/product"
interface Props extends previewData {
}
const props = defineProps<Props>()
const orderButtonOptions: Ref<object> = ref({
    width: "100%",
    neon: true,
    fontWeight: "600",
    padding: "16px 0px"
})
</script>

<style scoped lang="scss">
.preview-data {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  &__price {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.07em;
    color: #ffffff;
  }

  &_info {
    display: flex;
    align-items: center;
    gap: 65px;
  }
}
</style>
