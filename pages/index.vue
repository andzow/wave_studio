<template>
  <div>
    <MainWaMain/>
    <MainWaPortfolio/>
    <MainWaLine/>
    <MainWaVideo/>
    <MainWaServices/>
    <MainWaBanner/>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title:
        "Разработка сайтов и web приложений любой сложности | waveStudio",
      meta: [
        {
          name: "description",
          content: `Профессиональная разработка сайтов и web приложений от waveStudio. Создаем высококачественные и эффективные цифровые решения.`,
        },
        {
          name: "keywords",
          content:
            "разработка сайтов, web приложения, веб разработка, digital solutions, waveStudio",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "Разработка сайтов и web приложений любой сложности | waveStudio",
        },
        {
          property: "og:description",
          content: `Профессиональная разработка сайтов и web приложений от waveStudio. Создаем высококачественные и эффективные цифровые решения.`,
        },
        {
          property: "og:site_name",
          content:
            "Разработка сайтов и web приложений | waveStudio",
        },
        {
          property: "og:image",
          content: "/Preload/code.webp",
        },
      ],
    });
  },
};
</script>