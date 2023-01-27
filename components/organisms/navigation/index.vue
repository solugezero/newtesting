<template>
  <div class="navigation content-box">
    <img src="@/assets/svg/arrowLeft.svg" alt="" class="navigation__arrow" />

    <div class="navigation_content">
      <img src="@/assets/img/brawl.png" alt="" class="navigation__img" />
      <div class="navigation_content_data">
        <p class="navigation_content_data__title">Brawl Stars</p>
        <p class="navigation_content_data__subtitle">Гемы</p>
      </div>
    </div>
  </div>
</template>
<!-- data in this component is taken depending on the route  -->
<script setup></script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  gap: 22px;
  align-items: center;

  &__arrow {
    cursor: pointer;
  }

  &_content {
    display: flex;
    align-items: center;
    gap: 12px;

    &_data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__title {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #5F5F5F;
      }

      &__subtitle {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #5F5F5F;
      }
    }
  }
}
</style>
