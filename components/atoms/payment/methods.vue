<template>
    <div class="payment-methods">
        <img src="@/assets/img/payment/crypto.png" alt="" class="payment-methods__item">
        <img src="@/assets/img/payment/kassa.png" alt="" class="payment-methods__item">
        <img src="@/assets/img/payment/ruscard.png" alt="" class="payment-methods__item">
        <img src="@/assets/img/payment/card.png" alt="" class="payment-methods__item">
        <img src="@/assets/img/payment/sbp.png" alt="" class="payment-methods__item">
        <img src="@/assets/img/payment/qiwi.png" alt="" class="payment-methods__item">
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.payment-methods {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px 16px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 8px;

    img {
        width: 20px;
        height: 20px;
    }
}
</style>