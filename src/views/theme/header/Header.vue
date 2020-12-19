<template>
  <!-- begin:: Header -->
  <div
    id="kt_header"
    ref="kt_header"
    class="kt-header kt-grid__item"
    v-bind:class="headerClasses"
  >
    <!-- begin:: Header Menu -->
    <button
      class="kt-header-menu-wrapper-close"
      id="kt_header_menu_mobile_close_btn"
    >
      <i class="la la-close"></i>
    </button>
    <div
      class="kt-header-menu-wrapper"
      id="kt_header_menu_wrapper"
      ref="kt_header_menu_wrapper"
    >
      <div
        id="kt_header_menu"
        ref="kt_header_menu"
        class="kt-header-menu kt-header-menu-mobile"
        v-bind:class="headerMenuClasses"
      >
        <KTHeaderMenu v-if="headerMenuEnabled"></KTHeaderMenu>
      </div>
    </div>
    <!-- end:: Header Menu -->
    <KTTopbar></KTTopbar>
  </div>
  <!-- end:: Header -->
</template>

<script>
import { mapGetters } from "vuex";
import KTMenu from "@/assets/js/menu.js";
import KTOffcanvas from "@/assets/js/offcanvas.js";
import KTHeaderMenu from "@/views/theme/header/HeaderMenu.vue";
import KTTopbar from "@/views/theme/topbar/Topbar.vue";

export default {
  name: "KTHeader",
  components: {
    KTHeaderMenu,
    KTTopbar
  },
  mounted() {
    new KTOffcanvas(this.$refs["kt_header_menu_wrapper"], {
      overlay: true,
      baseClass: "kt-header-menu-wrapper",
      closeBy: "kt_header_menu_mobile_close_btn",
      toggleBy: {
        target: "kt_header_mobile_toggler",
        state: "kt-header-mobile__toolbar-toggler--active"
      }
    });

    new KTMenu(this.$refs["kt_header_menu"], {
      submenu: {
        desktop: "dropdown",
        tablet: "accordion",
        mobile: "accordion"
      },
      accordion: {
        // accordion toggle slide speed in milliseconds
        slideSpeed: 200,
        // allow having multiple expanded accordions in the menu
        expandAll: false
      },
      dropdown: {
        timeout: 50
      }
    });
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses() {
      const classes = this.getClasses("header_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    }
  }
};
</script>
