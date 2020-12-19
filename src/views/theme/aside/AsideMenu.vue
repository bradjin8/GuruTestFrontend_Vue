<template>
  <ul class="kt-menu__nav">
    <template v-for="(menu, i) in menuItems">
      <KTMenuItem v-if="!menu.section" :menu="menu" :key="i"></KTMenuItem>
      <KTMenuSection v-if="menu.section" :menu="menu" :key="i"></KTMenuSection>
    </template>
  </ul>
</template>

<script>
import KTMenuItem from "@/views/theme/aside/MenuItem.vue";
import KTMenuSection from "@/views/theme/aside/MenuSection.vue";
import menuConfig from "@/common/config/menu.config.json";

export default {
  name: "KTAsideMenu",
  components: {
    KTMenuItem,
    KTMenuSection
  },
  computed: {
    menuItems: () => {
      return menuConfig.aside.items;
    }
  }
};
</script>
