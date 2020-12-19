<template>
  <div class="kt-grid kt-grid--ver kt-grid--root">
    <div
      class="kt-grid__item kt-grid__item--fluid kt-grid kt-error-v1"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <div class="kt-error-v1__container">
        <h1 class="kt-error-v1__number">404</h1>
        <p class="kt-error-v1__desc">
          OOPS! Something went wrong here
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/error/error-1.scss";
</style>

<script>
export default {
  name: "Error-1",
  mounted() {},
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "assets/media/error/bg1.jpg";
    }
  }
};
</script>
