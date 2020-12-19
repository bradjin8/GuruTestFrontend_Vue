<template>
  <li
    class="kt-menu__item"
    aria-haspopup="true"
    :class="{
      'kt-menu__item--submenu': menu.submenu,
      'kt-menu__item--active': activeMenu(menu)
    }"
    :data-ktmenu-submenu-toggle="submenuToggle(menu)"
  >
    <KTMenuItemText v-bind:menu="menu"></KTMenuItemText>
    <KTMenuSubmenu
      v-if="menu.submenu"
      v-bind:submenu="menu.submenu"
      v-bind:parentMenu="menu"
    ></KTMenuSubmenu>
  </li>
</template>

<script>
import KTMenuItemText from "@/views/theme/header/MenuItemText.vue";
import KTMenuSubmenu from "@/views/theme/header/MenuSubmenu.vue";

export default {
  name: "KTMenuItem",
  components: {
    KTMenuItemText,
    KTMenuSubmenu
  },
  props: {
    menu: Object
  },
  methods: {
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
    }
  }
};
</script>
