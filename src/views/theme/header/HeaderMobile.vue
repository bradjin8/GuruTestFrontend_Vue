<template>
  <div
    id="kt_header_mobile"
    class="kt-header-mobile"
    v-bind:class="headerClasses"
  >
    <div class="kt-header-mobile__logo">
      <a href="/">
        <img alt="Logo" :src="headerLogo" />
      </a>
    </div>
    <div class="kt-header-mobile__toolbar">
      <button
        class="kt-header-mobile__toggler kt-header-mobile__toggler--left"
        id="kt_aside_mobile_toggler"
      >
        <span></span>
      </button>

      <button class="kt-header-mobile__toggler" id="kt_header_mobile_toggler">
        <span></span>
      </button>

      <button
        class="kt-header-mobile__topbar-toggler"
        id="kt_header_mobile_topbar_toggler"
        ref="kt_header_mobile_topbar_toggler"
      >
        <i class="flaticon-more"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTToggle from "@/assets/js/toggle.js";

export default {
  name: "KTHeaderMobile",
  components: {},
  mounted() {
    new KTToggle(this.$refs["kt_header_mobile_topbar_toggler"], {
      target: "body",
      targetState: "kt-header__topbar--mobile-on",
      togglerState: "kt-header-mobile__toolbar-topbar-toggler--active"
    });
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Get header logo
     * @returns {string}
     */
    headerLogo() {
      return process.env.BASE_URL + this.layoutConfig("self.logo.dark");
    },

    /**
     * Get classes for mobile header
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header_mobile");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    }
  }
};
</script>
