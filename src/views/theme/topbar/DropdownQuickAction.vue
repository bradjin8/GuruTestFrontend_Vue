<template>
  <form>
    <!--begin: Head -->
    <div
      class="kt-head kt-head--skin-dark"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <h3 class="kt-head__title">
        User Quick Actions
        <span class="kt-space-15"></span>
        <span class="btn btn-success btn-sm btn-bold btn-font-md"
          >23 tasks pending</span
        >
      </h3>
    </div>
    <!--end: Head -->

    <!--begin: Grid Nav -->
    <div class="kt-grid-nav kt-grid-nav--skin-light">
      <div class="kt-grid-nav__row">
        <a href="#" class="kt-grid-nav__item">
          <span class="kt-grid-nav__icon">
            <img
              svg-inline
              src="@/assets/media/icons/svg/Shopping/Euro.svg"
              class="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg"
              alt=""
            />
          </span>
          <span class="kt-grid-nav__title">Accounting</span>
          <span class="kt-grid-nav__desc">eCommerce</span>
        </a>
        <a href="#" class="kt-grid-nav__item">
          <span class="kt-grid-nav__icon">
            <img
              svg-inline
              src="@/assets/media/icons/svg/Communication/Mail-attachment.svg"
              class="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg"
              alt=""
            />
          </span>
          <span class="kt-grid-nav__title">Administration</span>
          <span class="kt-grid-nav__desc">Console</span>
        </a>
      </div>
      <div class="kt-grid-nav__row">
        <a href="#" class="kt-grid-nav__item">
          <span class="kt-grid-nav__icon">
            <img
              svg-inline
              src="@/assets/media/icons/svg/Shopping/Box2.svg"
              class="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg"
              alt=""
            />
          </span>
          <span class="kt-grid-nav__title">Projects</span>
          <span class="kt-grid-nav__desc">Pending Tasks</span>
        </a>
        <a href="#" class="kt-grid-nav__item">
          <span class="kt-grid-nav__icon">
            <img
              svg-inline
              src="@/assets/media/icons/svg/Communication/Group.svg"
              class="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg"
              alt=""
            />
          </span>
          <span class="kt-grid-nav__title">Customers</span>
          <span class="kt-grid-nav__desc">Latest cases</span>
        </a>
      </div>
    </div>
    <!--end: Grid Nav -->
  </form>
</template>

<script>
export default {
  name: "KTDropdownQuickAction",
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "assets/media/misc/bg-1.jpg";
    }
  }
};
</script>
