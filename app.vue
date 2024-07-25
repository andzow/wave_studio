<template>
  <div>
    <Transition>
      <UIWaModal v-if="modalActive" />
    </Transition>
    <Transition>
      <UIWaPreloader v-if="!preloader" />
    </Transition>
    <UIWaHeader v-show="isPath"/>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPath: false,
      preloader: false,
      modalActive: modalActive()
    }
  },
  mounted() {
    if (this.$route.name == "login") {
      this.isPath = false;
    } else {
      this.isPath = true;
    }
    setTimeout(() => {
      this.preloader = true;
    }, 1500);
  },
   watch: {
    $route() {
      this.checkPath(this.$route.name);
    },
  },
  methods: {
    checkPath(path) {
      if (path == "Вход") {
        this.isPath = false;
      } else {
        this.isPath = true;
      }
    },
  },
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.7s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  transform: scale(4);
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>

