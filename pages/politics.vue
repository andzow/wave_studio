<template>
  <div>
    <PoliticsMyMain />
  </div>
</template>

<script>
import politicsData from "~/assets/json/politics.json";

export default {
  data() {
    return {
      politics: politicsData,
    };
  },
};
</script>

<style scoped></style>
