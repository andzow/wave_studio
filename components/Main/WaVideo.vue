<template>
  <section class="video">
    <div class="video__container">
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
}
.main__video {
    width: 100%;
    height: 750px;
    overflow: hidden;
    border-radius: 50px;
    object-fit: cover;
}
</style>