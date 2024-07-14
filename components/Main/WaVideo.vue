<template>
  <section class="video">
    <div class="video__container">
        <div class="video__position">
            <video
            class="main__video"
            type="video/mp4"
            autoplay
            muted
            loop
            preload="metadata"
            playsinline
        >
            <source src="~/assets/video/code.mp4" />
        </video>
            <div class="video__background"></div>
            <h3 class="video__name">запускаем цифровые продукты и сервисы <span>мирового масштаба</span></h3>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.video {
    margin-top: 30px;
}
.video__container {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1600px;
    overflow: hidden;
}
.video__position {
    height: 750px;
    position: relative;
}
.main__video {
    width: 100%;
    height: 750px;
    overflow: hidden;
    border-radius: 50px;
    object-fit: cover;
}
.video__name {
    position: absolute;
    left: 40px;
    bottom: 40px;
    color: var(--white);
    font-size: 48px;
    max-width: 800px;
}
.video__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    border-radius: 50px;
}
.video__name span {
    color: var(--green);
}
</style>