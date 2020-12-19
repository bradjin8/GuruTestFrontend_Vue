<template>
  <router-link
    :to="link()"
    :class="{ 'kt-menu__toggle': menu.submenu }"
    class="kt-menu__link"
  >
    <i v-if="menu.icon" class="kt-menu__link-icon" :class="menu.icon"></i>
    <i
      v-if="!menu.icon && !menu.root"
      class="kt-menu__link-bullet"
      :class="bullet()"
      ><span></span
    ></i>
    <span class="kt-menu__link-text">{{
      menu.translate ? $t(menu.translate) : menu.title
    }}</span>
    <i
      v-if="menu.submenu && menu.root && hasRootArrow"
      class="kt-menu__hor-arrow la la-angle-down"
    ></i>
    <i
      v-if="menu.submenu && !menu.root"
      class="kt-menu__hor-arrow la la-angle-right"
    ></i>
    <i
      v-if="menu.submenu && !menu.root"
      class="kt-menu__ver-arrow la la-angle-right"
    ></i>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTMenuItemText",
  components: {},
  props: {
    menu: Object,
    parentMenu: Object
  },
  methods: {
    /**
     * Get bullet class from config
     * @returns {string} class name
     */
    bullet: function() {
      // get the default bullet
      if (!this.menu.bullet) {
        this.menu.bullet = "dot";
      }
      // bullet class name
      return `kt-menu__link-bullet--${this.menu.bullet}`;
    },

    /**
     * Get current menu link path
     * @returns {{}|{path: string}}
     */
    link: function() {
      // check if no link in this menu item
      if (!this.menu.page) {
        return {};
      }
      // pass the link prepend with slash
      return { path: `/${this.menu.page}` };
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if root arrow is enabled
     * @returns {*}
     */
    hasRootArrow() {
      return this.layoutConfig("header.menu.self.root-arrow");
    }
  }
};
</script>
