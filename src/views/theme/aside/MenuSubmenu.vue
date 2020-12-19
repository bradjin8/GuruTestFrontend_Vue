<template>
  <div class="kt-menu__submenu">
    <span class="kt-menu__arrow"></span>
    <ul class="kt-menu__subnav">
      <li class="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
        <span class="kt-menu__link">
          <span class="kt-menu__link-text">{{
            parentMenu ? parentMenu.title : ""
          }}</span>
        </span>
      </li>
      <template v-for="(menu, i) in submenu">
        <li
          class="kt-menu__item"
          aria-haspopup="true"
          :key="i"
          :class="{
            'kt-menu__item--submenu': menu.submenu,
            'kt-menu__item--open': activeMenu(menu)
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
  </div>
</template>

<script>
import KTMenuItemText from "@/views/theme/aside/MenuItemText.vue";
import KTMenuSubmenu from "@/views/theme/aside/MenuSubmenu.vue";

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
  }
};
</script>
