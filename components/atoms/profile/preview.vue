<template>
  <div class="profile-preview">
    <img :src="`${img}`" alt="" class="profile-preview__img" />
    <p class="profile-preview__name">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import {User}  from "~~/interfaces/user"
interface Props extends User {
  
}
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.profile-preview {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 24px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #a7a7a7;
  }
}
</style>
