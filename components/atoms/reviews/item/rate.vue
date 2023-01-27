<template>
    <div class="reviews-item_rate">
        <img src="@/assets/svg/starFilled.svg" v-for="(item, idx) in rate" :key="`reviews-item_rate_starFilled__${idx}`" alt="">
        <img src="@/assets/svg/starGray.svg" v-for="(item, idx) in (5 - rate)" :key="`reviews-item_rate_starFilled__${idx}`" alt="">
    </div>
</template>

<script setup lang="ts">
import { reviewRate } from '~~/interfaces/product';
const props = defineProps<reviewRate>()



</script>

<style scoped lang="scss">

</style>