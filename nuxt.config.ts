// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/style/main.css"],
  ssr: true,

  routeRules: {
    "/admin": { ssr: false },
    "/login": { ssr: false },
  },

  compatibilityDate: "2024-07-13"
})