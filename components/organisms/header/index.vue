<template>
  <div class="header">
    <div class="header_content content-box">
      <div class="header_content__title">
        <p>s</p>
        <p>n</p>
        <p>acks</p>
      </div>
      <div class="header_content_menu">
        <ui-button v-bind="chatButtonOptions">
            <template #icon>
                <img src="@/assets/svg/chat.svg" alt="" class="header_content_menu_button__chat">
            </template>
            Чат
        </ui-button>
        <ui-button v-bind="profileButtonOptions">
            <template #icon>
                <img src="@/assets/img/cat.jpg" alt="" class="header_content_menu_button__profile">
            </template>
            212.12 ₽
        </ui-button>
        <ui-button v-bind="sellButtonOptions">
            <template #icon>
              <p class="header_content_menu_button__sell">₽</p>
            </template>
            Продать
        </ui-button>
        <div class="test"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
const chatButtonOptions: Ref<object>= ref({
  direction: "column",
  padding: "9px 32px",
  background: "unset",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  icon: true,
  color: '#A7A7A7',
  fontSize: "12px"
})

const profileButtonOptions: Ref<object>= ref({
  direction: "row",
  padding: "18px 17px",
  background: "unset",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  icon: true,
  color: "#fff",
  gap: "12px",
  height: "100%",
  fontWeight: "600"
})

const sellButtonOptions: Ref<object>= ref({
  direction: "column",
  icon: true,
  gap: "0px",
  height: "100%",
  fontWeight: "500",
  fontSize: "12px",
  padding: "8px 16px"
})

</script>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  height: 72px;

  &_content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    padding-top: 6px;
    padding-bottom: 6px;
    &__title {
      display: flex;
      font-size: 48px;
      font-weight: 600;
      letter-spacing: -2px;

      :nth-child(1) {
        color: #ffeb42;
      }
      :nth-child(2) {
        color: #6feb42;
      }
    }

    &_menu {
      display: flex;
      gap: 8px;
      align-items: center;
      height: 100%;

      &_button__chat {
        width: 20px;
        height: 21px;
      }

      &_button__profile {
        width: 20px;
        height: 21px;
        border-radius: 50%;
      }

      &_button__sell {
        font-size: 24px;
        color: #000;
      }
    }
  }
}
</style>
