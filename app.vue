<template>
  <div>
    <div id="app">
      <OrganismsHeader />
      <OrganismsNavigation />
    </div>
    <NuxtPage class="page" />
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
