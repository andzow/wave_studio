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
            <button class="header__music">
                <img src="~/assets/images/UI/music.svg" alt="">
            </button>
        </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    position: fixed;
    padding: 25px 0;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
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