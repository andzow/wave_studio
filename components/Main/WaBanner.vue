<template>
  <section class="banner">
    <div class="banner__container">
        <div class="banner__position">
            <p class="banner__name">Компания</p>
            <a class="banner__gmail">waveStudioSite@gmail.com</a>
            <p class="banner__info">Будь как волна океана: сильной, неукротимой и всегда движущейся вперёд. Не бойся преград на своём пути, ведь каждая волна знает, что сила её не в избегании препятствий, а в умении преодолевать их. Пусть твоя энергия смывает любые сомнения и страхи, открывая бескрайние горизонты возможностей!</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.banner {
    padding-top: 50px;
    padding-bottom: 30px;
}
.banner__container {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1800px;
    overflow: hidden;
}
.banner__position {
    width: 100%;
    padding: 40px;
    background: var(--black);
}
.banner__name {
    color: var(--white);
}
.banner__gmail {
    color: var(--green);
    margin-top: 20px;
    font-size: 40px;
    cursor: pointer;
}
.banner__gmail:hover {
    color: var(--white);
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--green), 0 0 0.5em var(--green), 0 0 0.1em var(--green), 0 10px 3px #000;
}
.banner__info {
    max-width: 900px;
    color: var(--white);
    margin-top: 20px;
}
</style>