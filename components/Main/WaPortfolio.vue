<template>
  <section class="portfolio" id="portfolio">
    <div class="portfolio__container">
        <h2 class="portfolio__title">Портфолио</h2>
        <div class="portfolio__position">
            <img src="~/assets/images/Main/vvkifpu.png" alt="">
            <div class="portfolio__content">
                <h3 class="portfolio__name">Создаем образовательные сайты</h3>
                <p class="portfolio__desctiption">Наши специалисты используют передовые технологии и инновационные методики для создания интерактивных и удобных в использовании сайтов, которые помогают учебным заведениям и образовательным организациям достичь своих целей.</p>
            </div>
        </div>

        <div class="portfolio__position portfolio__position_second">
            <img src="~/assets/images/Main/window.png" alt="">
            <div class="portfolio__content">
                <h3 class="portfolio__name">Продвижение сайтов</h3>
                <p class="portfolio__desctiption">Наша команда экспертов в области SEO и маркетинга веб-сайтов использует последние технологии и стратегии для обеспечения постоянного потока трафика на ваш сайт, что ведет к увеличению продаж и укреплению вашего онлайн-присутствия. Позвольте нам помочь вам раскрыть полный потенциал вашего бизнеса через эффективное продвижение сайта.</p>
            </div>
        </div>

        <div class="portfolio__position">
            <img src="~/assets/images/Main/my_stories.png" alt="">
            <div class="portfolio__content">
                <h3 class="portfolio__name">Создание  интернет-магазин</h3>
                <p class="portfolio__desctiption">Создание интернет-магазина – это ключевой шаг для любого бизнеса, стремящегося расширить свою клиентскую базу и увеличить продажи. Наш сервис по созданию интернет-магазинов предлагает комплексные решения, начиная от дизайна и заканчивая технической реализацией и поддержкой.</p>
            </div>
        </div>

        <img class="portfolio__back" src="~/assets/images/Main/background.svg" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.portfolio__container {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1800px;
    position: relative;
    overflow: hidden;
}
.portfolio__title {
    text-align: center;
    font-size: 38px;
    padding-top: 50px;
    padding-bottom: 50px;
    color: var(--white);
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--green), 0 0 0.5em var(--green), 0 0 0.1em var(--green), 0 10px 3px #000;
}
.portfolio__position {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.portfolio__position_second {
   flex-direction: row-reverse;
}
.portfolio__name {
    text-align: center;
    color: var(--green);
    font-size: 28px;
    margin-bottom: 30px;
}
.portfolio__desctiption {
    font-size: 18px;
    color: var(--white);
    max-width: 750px;
    text-align: center;
    line-height: 22px;
}
.portfolio__position:not(:last-child) {
    margin-bottom: 40px;
}
.portfolio__back {
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: .3;
    animation: move-forever 20s linear infinite;
}
@keyframes move-forever {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>