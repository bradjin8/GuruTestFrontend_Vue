<template>
  <!-- begin:: Aside -->
  <!--<button class="kt-aside-close" id="kt_aside_close_btn"><i class="la la-close"></i></button>-->
  <div
    class="kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
    id="kt_aside"
    ref="kt_aside"
  >
    <KTBrand></KTBrand>
    <!-- begin:: Aside Menu -->
    <div
      class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
      id="kt_aside_menu_wrapper"
      @mouseover="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <div
        ref="kt_aside_menu"
        id="kt_aside_menu"
        class="kt-aside-menu"
        data-ktmenu-vertical="1"
        data-ktmenu-dropdown-timeout="500"
        v-bind:class="asideMenuClass"
      >
        <perfect-scrollbar
          v-if="isMenuFixed"
          style="max-height: 90vh; position: relative;"
        >
          <KTAsideMenu></KTAsideMenu>
        </perfect-scrollbar>
        <KTAsideMenu v-if="!isMenuFixed"></KTAsideMenu>
      </div>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>
import { mapGetters } from "vuex";
import KTMenu from "@/assets/js/menu.js";
import KTOffcanvas from "@/assets/js/offcanvas.js";
import KTBrand from "@/views/theme/brand/Brand.vue";
import KTAsideMenu from "@/views/theme/aside/AsideMenu.vue";

export default {
  name: "KTAside",
  data() {
    return {
      insideTm: 0,
      outsideTm: 0
    };
  },
  components: {
    KTBrand,
    KTAsideMenu
  },
  mounted() {
    this.$nextTick(function() {
      const menuDesktopMode =
        this.isMenuDropdown && !this.isMenuFixed ? "dropdown" : "accordion";

      new KTMenu(this.$refs["kt_aside_menu"], {
        // submenu setup
        submenu: {
          desktop: menuDesktopMode,
          // menu set to accordion in tablet mode
          tablet: "accordion",
          // menu set to accordion in mobile mode
          mobile: "accordion"
        },

        // accordion setup
        accordion: {
          // allow having multiple expanded accordions in the menu
          expandAll: false
        },
        dropdown: {
          timeout: 50
        }
      });

      // init offcanvas for sliding menu in mobile mode
      new KTOffcanvas(this.$refs["kt_aside"], {
        baseClass: "kt-aside",
        overlay: true,
        closeBy: "kt_aside_close_btn",
        toggleBy: {
          // the target button to active the slide menu, located in header mobile component
          target: "kt_aside_mobile_toggler",
          state: "kt-header-mobile__toolbar-toggler--active"
        }
      });
    });
  },
  methods: {
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     */
    mouseEnter() {
      // check if the left aside menu is fixed
      if (document.body.classList.contains("kt-aside--fixed")) {
        if (this.outsideTm) {
          clearTimeout(this.outsideTm);
          this.outsideTm = null;
        }

        this.insideTm = setTimeout(() => {
          // if the left aside menu is minimized
          if (document.body.classList.contains("kt-aside--minimize")) {
            document.body.classList.add("kt-aside--minimize-hover");

            setTimeout(() => {
              // show the left aside menu
              document.body.classList.remove("kt-aside--minimize");
            }, 200);
          }
        }, 100);
      }
    },

    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     */
    mouseLeave() {
      if (document.body.classList.contains("kt-aside--fixed")) {
        if (this.insideTm) {
          clearTimeout(this.insideTm);
          this.insideTm = null;
        }

        this.outsideTm = setTimeout(() => {
          // if the left aside menu is expand
          if (document.body.classList.contains("kt-aside--minimize-hover")) {
            // hide back the left aside menu
            document.body.classList.remove("kt-aside--minimize-hover");
            document.body.classList.add("kt-aside--minimize");
          }
        }, 100);
      }
    }
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    isMenuDropdown() {
      return !!this.layoutConfig("aside.menu.dropdown");
    },

    isMenuFixed() {
      return !!this.layoutConfig("aside.self.fixed");
    },

    asideMenuClass() {
      const classes = this.getClasses("aside_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    }
  }
};
</script>
