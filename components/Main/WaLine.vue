<template>
  <section class="line">
    <div class="line__wrapper">
        <div class="line__run">
            <p class="line__description">Идея <span>-></span></p>
            <p class="line__description">Дизайн <span>-></span></p>
            <p class="line__description">Разработка <span>-></span></p>
            <p class="line__description">Готовой продукт <span>-></span></p>
        </div>

        <div class="line__run">
            <p class="line__description">Идея <span>-></span></p>
            <p class="line__description">Дизайн <span>-></span></p>
            <p class="line__description">Разработка <span>-></span></p>
            <p class="line__description">Готовой продукт <span>-></span></p>
        </div>

        <div class="line__run">
            <p class="line__description">Идея <span>-></span></p>
            <p class="line__description">Дизайн <span>-></span></p>
            <p class="line__description">Разработка <span>-></span></p>
            <p class="line__description">Готовой продукт <span>-></span></p>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.line {
  position: relative;
  padding: 50px 0 50px;
  overflow: hidden;
}
.line__run {
  display: inline-flex;
  align-items: center;
  animation: lineRun 9s linear infinite;
}
.line__wrapper {
  position: relative;
  white-space: nowrap;
  z-index: 12;
}
.line__description {
    font-size: 56px;
    color: var(--white);
    padding-right: 20px;
    text-transform: uppercase;
}
.line__description span {
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--green), 0 0 0.5em var(--green), 0 0 0.1em var(--green), 0 10px 3px #000;
}
@keyframes lineRun {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
@media(max-width: 1200px) {
.line__description {
    font-size: 46px;
}
}
@media(max-width: 900px) {
.line__description {
    font-size: 40px;
}
.line {
  padding: 20px 0 20px;
}
}
</style>