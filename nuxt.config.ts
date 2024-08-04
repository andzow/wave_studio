// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/style/main.css"],
  ssr: true,

  routeRules: {
    "/admin": { ssr: false },
    "/login": { ssr: false },
  },

  app: {
    head: {
      title: "Разработка сайтов и web приложений | waveStudio",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.png",
        },
      ],
      htmlAttrs: { lang: "ru-RU" },
    }
  }
})