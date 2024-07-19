<template>
  <header class="header">
    <div class="header__container">
        <div class="header__position">
            <img class="header__logo" src="~/assets/images/UI/logo.png" alt="">
        </div>
        <nav class="header__position">
            <ul class="header__nav">
                <li class="header__item">Главная</li>
                <li class="header__item">Портфолио</li>
                <li class="header__item">Тарифы</li>
            </ul>
        </nav>
        <div class="header__position">
            <button class="header__application">Оставить заявку</button>
            <button class="header__music" :class="{header__music_active: isPlaying}" @click="playPause">
                <img src="~/assets/images/UI/music.svg" alt="">
                <audio ref="audioPlayer" :src="musicSrc" loop></audio>
            </button>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            musicSrc: '/music/dreems.mp3',
            isPlaying: false,
        }
    },
    methods: {
        playPause() {
            const audio = this.$refs.audioPlayer;
            if (audio.paused) {
                audio.play();
                this.isPlaying = true;
            } else {
                audio.pause();
                this.isPlaying = false;
            }
        },
  },
}
</script>

<style scoped>
.header {
    position: fixed;
    padding: 25px 0;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    background: transparent;
    backdrop-filter: blur(15px);
}
.header__container {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__nav {
    display: flex;
    align-items: center;
    color: var(--white);
}
.header__item {
    cursor: pointer;
    padding-bottom: 5px;
    font-size: 18px;
    transition: all .3s ease;
    position: relative;
}
.header__item:hover {
    color: var(--green);
    transform: translateY(-5px);
}
.header__item:not(:last-child) {
    margin-right: 30px;
}
.header__position {
    display: flex;
    align-items: center;
}
.header__application {
    height: 55px;
    background: var(--green);
    padding: 0 20px;
    color: var(--white);
    border-radius: 40px;
    font-weight: 500;
    font-size: 18px;
    transition: all .3s ease;
}
.header__application:hover {
    transform: scale(.95);
}
.header__music {
    height: 55px;
    width: 55px;
    border-radius: 50%;
    background: var(--green);
    margin-left: 10px;
    transition: all .3s ease;
    position: relative;
}
.header__music_active:before,
.header__music_active:after {
    content: " ";
    display: block;
    position: absolute;
    border: 50%;
    border: 1px solid var(--green); 
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    border-radius: 50%;
    animation: animate 1.5s linear infinite;
    opacity: 0;
    backface-visibility: hidden; 
}
 
.header__music_active:after{
    animation-delay: 5s;
}
 
@keyframes animate
{
    0%
    {
        transform: scale(0.5);
        opacity: 0;
    }
    50%
    {
        opacity: 1;
    }
    100%
    {
        transform: scale(1.2);
        opacity: 0;
    }
}
.header__music:hover {
    transform: scale(.95);
}
.header__logo {
    margin-right: 55px;
}
.header__item:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background-color: var(--green);
  transition: width 0.5s;
}
.header__item:hover:after {
  content: "";
  width: 100%;
  display: block;
  position: absolute;
  left: 0;
  bottom: -3px;
  height: 2px;
  background-color: var(--green);
  transition: width 0.5s;
}
</style>