<template>
  <div class="kt-grid kt-grid--ver kt-grid--root">
    <div
      class="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v1"
      id="kt_login"
    >
      <div
        class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile"
      >
        <!--begin::Aside-->
        <div
          class="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        >
          <div class="kt-grid__item">
            <a href="#" class="kt-login__logo">
              <img src="@/assets/media/logos/logo-shipme.svg" />
            </a>
          </div>
          <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
            <div class="kt-grid__item kt-grid__item--middle">
              <h3 class="kt-login__title">Welcome to Admin!</h3>
              <h4 class="kt-login__subtitle">

              </h4>
            </div>
          </div>
          <div class="kt-grid__item">
            <div class="kt-login__info">
              <div class="kt-login__copyright">
                © 2020 Shipme
              </div>
              <div class="kt-login__menu">
                <a href="#" class="kt-link">Privacy</a>
                <a href="#" class="kt-link">Legal</a>
                <a href="#" class="kt-link">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <!--begin::Aside-->

        <!--begin::Content-->
        <div
          class="kt-grid__item kt-grid__item--fluid kt-grid__item--order-tablet-and-mobile-1 kt-login__wrapper" style="padding-top: 100px;"
        >
          <router-view></router-view>
        </div>
        <!--end::Content-->
      </div>
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "auth",
  methods: {},
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    backgroundImage() {
      return process.env.BASE_URL + "assets/media/bg/bg-2.jpg";
    }
  }
};
</script>
