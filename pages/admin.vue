<template>
  <AdminViPanel/>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      middleware: ["role"]
    })
  }
}
</script>

<style>

</style>