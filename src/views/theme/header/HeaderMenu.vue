<template>
  <ul class="kt-menu__nav">
    <template v-for="(menu, i) in menuItems">
      <KTMenuItem v-bind:menu="menu" :key="i"></KTMenuItem>
    </template>
  </ul>
</template>

<script>
import KTMenuItem from "@/views/theme/header/MenuItem.vue";
import menuConfig from "@/common/config/menu.config.json";

export default {
  name: "KTHeaderMenu",
  components: {
    KTMenuItem
  },
  computed: {
    menuItems: () => {
      return menuConfig.header.items;
    }
  }
};
</script>
