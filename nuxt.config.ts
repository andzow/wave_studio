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
      script: [
        {
          type: "text/javascript",
          innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(98000330, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true
          });`,
        },
      ],
      noscript: [
        {
          innerHTML: `<div><img src="https://mc.yandex.ru/watch/98000330" style="position:absolute; left:-9999px;" alt="" /></div>`,
        },
      ],
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