<template>
    <section class="panel">
        <div class="panel__container">
            <div class="panel__options">
            <h3 class="panel__title">Админ панель</h3>
            <div class="panel__card" :class="{panel__card_active: useInfoActive === 'application'}"
                @click="options('application')">
                <svg width="25" height="25" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3H4.5V4H9V3Z" fill="#6B7280" />
                    <path d="M9 5H4.5V6H9V5Z" fill="#6B7280" />
                    <path d="M9 7H4.5V8H9V7Z" fill="#6B7280" />
                    <path d="M9 9H4.5V10H9V9Z" fill="#6B7280" />
                    <path d="M9 11H4.5V12H9V11Z" fill="#6B7280" />
                    <path d="M3.5 3H2.5V4H3.5V3Z" fill="#6B7280" />
                    <path d="M3.5 5H2.5V6H3.5V5Z" fill="#6B7280" />
                    <path d="M3.5 7H2.5V8H3.5V7Z" fill="#6B7280" />
                    <path d="M3.5 9H2.5V10H3.5V9Z" fill="#6B7280" />
                    <path d="M3.5 11H2.5V12H3.5V11Z" fill="#6B7280" />
                    <path
                        d="M11 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734783 0 1V15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16H11C11.2652 16 11.5196 15.8946 11.7071 15.7071C11.8946 15.5196 12 15.2652 12 15V1C12 0.734783 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0ZM11 15H1V1H11V15Z"
                        fill="#6B7280" />
                </svg>
                <p class="panel__name">Заявки</p>
                <div class="panel__status"></div>
            </div>
        </div>
        <AdminViApplication v-if="useInfoActive === 'application'"></AdminViApplication>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      useInfoActive: useInfoActive()
    }
  },
  methods: {
    options(item) {
      this.useInfoActive = item
    }
  }
}
</script>

<style scoped>
.panel {
    min-width: 100vw;
}
.panel__container {
    margin: 0 auto;
    display: flex;
    padding: 150px 20px 100px 20px;
    max-width: 1400px;
}
.panel__title {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 40px;
    color: var(--green);
}
.panel__options {
  width: 310px;
}
.panel__card {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.panel__card:not(:last-child) {
  margin-bottom: 25px;
}
.panel__name {
  font-size: 20px;
  margin-left: 10px;
  color: #6B7280;
  transition: all .3s ease;
}
.panel__name:hover {
  color: var(--green);
}
path {
  transition: all .3s ease;
}
.panel__card_active .panel__status {
  transform: translateX(0px);
  opacity: 1;
}
.panel__card_active_special .panel__status {
  transform: translateX(0px);
  opacity: 1;
}
.panel__status {
  position: absolute;
  top: 0px;
  left: -15px;
  width: 5px;
  height: 25px;
  background-color: var(--green);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transform: translateX(15px);
  opacity: 0;
  transition: all .3s ease;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media(max-width: 990px) {
  .panel__container {
    padding: 150px 20px 100px 20px;
  }
}
@media(max-width: 500px) {
  .panel__container {
    flex-direction: column;
  }
}
</style>