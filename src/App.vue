<template>
  <router-view></router-view>
</template>

<style lang="scss">
// 3rd party plugins css
@import "~perfect-scrollbar/css/perfect-scrollbar.css";
@import "~socicon/css/socicon.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "assets/plugins/line-awesome/css/line-awesome.css";
@import "assets/plugins/flaticon/flaticon.css";
@import "assets/plugins/flaticon2/flaticon.css";

// Main demo style scss
@import "assets/sass/style.vue";

// Check documentation for RTL css
/*@import "assets/css/style.vue.rtl";*/

// Demo skins (demo1 only)
@import "assets/sass/global/integration/frameworks/vue/skins";
</style>

<script>
import { OVERRIDE_LAYOUT_CONFIG } from "@/store/config.module";

export default {
  name: "MetronicVue",
  mounted() {
    /**
     * this is to override the layout config using saved data from localStorage
     * remove this to use config only from static json (@/common/config/layout.config.json)
     */
    this.$store.dispatch(OVERRIDE_LAYOUT_CONFIG);
  }
};
</script>
