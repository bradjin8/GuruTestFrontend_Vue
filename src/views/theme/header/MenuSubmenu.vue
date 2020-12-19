<template>
  <div class="kt-menu__submenu" :class="submenuClass()">
    <ul v-if="!isMegaMenu" class="kt-menu__subnav">
      <template v-for="(menu, i) in submenu">
        <li
          class="kt-menu__item"
          aria-haspopup="true"
          :key="i"
          :class="{
            'kt-menu__item--submenu': menu.submenu,
            'kt-menu__item--active': activeMenu(menu)
          }"
          :data-ktmenu-submenu-toggle="submenuToggle(menu)"
        >
          <KTMenuItemText
            v-bind:menu="menu"
            v-bind:parentMenu="parentMenu"
          ></KTMenuItemText>
          <KTMenuSubmenu
            v-if="menu.submenu"
            v-bind:submenu="menu.submenu"
          ></KTMenuSubmenu>
        </li>
      </template>
    </ul>

    <div
      v-if="isMegaMenu"
      class="kt-menu__subnav"
      :style="{ width: `${submenu.length * 200}px` }"
    >
      <ul class="kt-menu__content">
        <template v-for="(column, i) in submenu">
          <li class="kt-menu__item" :key="i">
            <!-- column title -->
            <h3 v-if="column.title" class="kt-menu__heading kt-menu__toggle">
              <span class="kt-menu__link-text">{{ column.title }}</span>
            </h3>

            <!-- column inner menu -->
            <ul class="kt-menu__inner">
              <template v-for="(menu, i) in column.submenu">
                <li
                  class="kt-menu__item"
                  aria-haspopup="true"
                  :key="i"
                  :class="{ 'kt-menu__item--active': activeMenu(menu) }"
                >
                  <KTMenuItemText
                    v-bind:menu="menu"
                    v-bind:parentMenu="column"
                  ></KTMenuItemText>
                </li>
              </template>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import KTMenuItemText from "@/views/theme/header/MenuItemText.vue";
import KTMenuSubmenu from "@/views/theme/header/MenuSubmenu.vue";

export default {
  name: "KTMenuSubmenu",
  components: {
    KTMenuItemText,
    KTMenuSubmenu
  },
  props: {
    submenu: Array,
    parentMenu: Object
  },
  methods: {
    submenuClass() {
      const classes = [];
      var alignment = "right";

      if (typeof this.parentMenu !== "undefined") {
        if (this.parentMenu.hasOwnProperty("alignment")) {
          alignment = this.parentMenu.alignment;
        }

        // classic or mega menu
        if (this.isMegaMenu) {
          classes.push("kt-menu__submenu--fixed");
        }
      }

      if (!this.isMegaMenu) {
        classes.push("kt-menu__submenu--classic");
      }

      if (!this.parentMenu) {
        classes.push(`kt-menu__submenu--${alignment}`);
      }

      return classes.join(" ");
    },
    /**
     * Get submenu toggle type
     * @param menu
     * @returns {string|*}
     */
    submenuToggle(menu) {
      if (menu.hasOwnProperty("toggle")) {
        return menu.toggle;
      }
      return "hover";
    },
    activeMenu(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(conf => {
        if (conf.submenu) {
          return this.activeMenu(conf.submenu);
        }
        if (conf.page) {
          // current path starts with this path string
          return this.$route.path === `/${conf.page}`;
        }
      });
    }
  },
  computed: {
    isMegaMenu() {
      if (typeof this.parentMenu !== "undefined") {
        return (
          this.parentMenu.hasOwnProperty("type") &&
          this.parentMenu.type === "mega"
        );
      }
      return false;
    }
  }
};
</script>
