<template>
  <div class="payment-info">
    <p class="payment-info__title">Безопасная оплата</p>
    <AtomsPaymentMethods />

    <div class="payment-info_item mt-20">
      <img src="@/assets/svg/payment/guard.svg" alt="" class="payment-info_item__img" />
      <p class="payment-info_item__value">Ганатния snacks ></p>
    </div>

    <div class="payment-info_item">
      <img
        src="@/assets/svg/payment/communicate.svg"
        alt=""
        class="payment-info_item__img"
      />
      <p class="payment-info_item__value">
        После покупки будет доступен чат с продавцом
      </p>
    </div>

    <div class="payment-info_item">
      <img src="@/assets/svg/payment/check.svg" alt="" class="payment-info_item__img" />
      <p class="payment-info_item__value">
        Возврат средств, если вы не получили товар
      </p>
    </div>

    <div class="payment-info_item">
      <img src="@/assets/svg/payment/check.svg" alt="" class="payment-info_item__img" />
      <p class="payment-info_item__value">
        Возврат средств, если товар не соответствует описанию
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.payment-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 14px;

  &_item {
    display: flex;
    gap: 10px;
    align-items: center;

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
