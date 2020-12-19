<template>
  <!-- begin:: Aside -->
  <div class="kt-aside__brand kt-grid__item" id="kt_aside_brand">
    <div class="kt-aside__brand-logo">
      <router-link to="/">
        <img :src="siteLogo()" alt="" />
      </router-link>
    </div>
    <div class="kt-aside__brand-tools" v-if="allowMinimize">
      <button
        class="kt-aside__brand-aside-toggler"
        id="kt_aside_toggler"
        ref="kt_aside_toggler"
      >
        <span>
          <img
            svg-inline
            class="kt-svg-icon"
            src="@/assets/media/icons/svg/Navigation/Angle-double-left.svg"
            alt=""
          />
        </span>
        <span>
          <img
            svg-inline
            class="kt-svg-icon"
            src="@/assets/media/icons/svg/Navigation/Angle-double-right.svg"
            alt=""
          />
        </span>
      </button>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>
import { mapGetters } from "vuex";
import KTToggle from "@/assets/js/toggle.js";
import objectPath from "object-path";

export default {
  name: "KTBrand",
  mounted() {
    const asideToggler = new KTToggle(this.$refs["kt_aside_toggler"], {
      target: "body",
      targetState: "kt-aside--minimize",
      togglerState: "kt-aside__brand-aside-toggler--active"
    });

    if (this.allowMinimize) {
      asideToggler.on("toggle", () => {
        document.body.classList.add("kt-aside--minimizing");
        document.body.addEventListener("transitionend", () => {
          document.body.classList.remove("kt-aside--minimizing");
        });
      });
    }

    asideToggler.on("beforeToggle", () => {
      if (
        document.body.classList.contains("kt-aside--minimize") === false &&
        document.body.classList.contains("kt-aside--minimize-hover")
      ) {
        document.body.classList.remove("kt-aside--minimize-hover");
      }
    });
  },
  methods: {
    siteLogo() {
      const menuAsideLeftSkin = this.layoutConfig("brand.self.skin");
      // set brand logo
      const logoObject = this.layoutConfig("self.logo");

      let logo;
      if (typeof logoObject === "string") {
        logo = logoObject;
      }
      if (typeof logoObject === "object") {
        logo = objectPath.get(logoObject, menuAsideLeftSkin + "");
      }
      if (typeof logo === "undefined") {
        const logos = this.layoutConfig("self.logo");
        logo = logos[Object.keys(logos)[0]];
      }
      return process.env.BASE_URL + logo;
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    }
  }
};
</script>
