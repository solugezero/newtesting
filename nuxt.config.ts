// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
    'vite-plugin-vue-type-imports/nuxt',
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "definePiniaStore", "acceptHMRUpdate"],
      },
    ],
  ],
  css: ["@/assets/scss/main.scss"],
  app: {
    head: {
        link: [{rel: "preconnect", href: "https://fonts.googleapis.com"},{rel: "preconnect", href: "https://fonts.googleapis.com"},{rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"}]
    }
  },
  components: {
    global: true,
    dirs: ["components", "ui-components"]
  }
})
