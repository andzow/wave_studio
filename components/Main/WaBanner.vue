<template>
  <section class="banner">
    <div class="banner__container">
        <div class="banner__position">
            <div class="banner__log">
                <p class="banner__name">Компания</p>
                <p class="banner__gmail">WaveStudioLimited</p>
                <p class="banner__info">«Бизнес, нацеленный на удовлетворение чьих то потребностей, обычно оказывается успешным; бизнес, нацеленный на получение прибыли, редко бывает успешным» — Николас Батлер.</p>
            </div>
            <img class="banner__qr" src="~/assets/images/Main/qr.svg" alt="">
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
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.banner__qr {
    width: 150px;
    margin-left: 20px;
}
.banner__name {
    color: var(--white);
}
.banner__gmail {
    color: var(--green);
    margin-bottom: 20px;
    font-size: 40px;
    cursor: pointer;
}
.banner__gmail:hover {
    color: var(--white);
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--green), 0 0 0.5em var(--green), 0 0 0.1em var(--green), 0 10px 3px #000;
}
.banner__info {
    max-width: 800px;
    color: var(--white);
}
@media(max-width: 840px) {
.banner__position {
    flex-direction: column;
    justify-content: flex-start;
}
.banner__qr {
    width: 150px;
    margin-left: 0px;
    margin-top: 20px;
}
.banner__info,
.banner__gmail,
.banner__name {
    width: 100%;
    text-align: center;
}
}
@media(max-width:480px) {
.banner__gmail {
    font-size: 32px;
}
}
@media(max-width:450px) {
.banner__gmail {
    font-size: 28px;
}
}
</style>