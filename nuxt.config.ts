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
      meta: [
        {
          name: "yandex-verification",
          content: "2c385f0c2c03ec3b"
        },
        {
          name: "google-site-verification",
          content: "qFXRR5p2K_9bdIOnZEuxOsKpkTGLsTqR8aCeXqJRm8I"
        }
      ],
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