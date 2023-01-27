<template>
    <div class="product">
        <MoleculesProductPreview v-bind="productPreview" />
        <MoleculesProductData v-bind="previewData" />
    </div>
</template>

<script setup lang="ts">
import {dataProduct} from "~~/interfaces/product"
interface Props extends dataProduct {

}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.product {
    display: grid;
    width: 100%;
    grid-template-columns: 8fr 4fr;
    gap: 16px;
}
</style>