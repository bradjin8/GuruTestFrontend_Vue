<template>
  <div class="kt-grid kt-grid--hor kt-grid--root">
    <KTHeaderMobile></KTHeaderMobile>
    <Loader v-if="loaderEnabled" v-bind:logo="loaderLogo"></Loader>
    <div
      class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page"
    >
      <KTAside v-if="asideEnabled"></KTAside>
      <div
        class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
        id="kt_wrapper"
      >
        <KTHeader></KTHeader>
        <div
          class="kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
          id="kt_content"
        >
          <KTSubheader
            v-if="subheaderDisplay"
            v-bind:breadcrumbs="breadcrumbs"
            v-bind:title="pageTitle"
          ></KTSubheader>
          <div
            class="kt-container kt-grid__item kt-grid__item--fluid"
            v-bind:class="{ 'kt-container--fluid': contentFluid }"
          >
            <transition name="fade-in-up">
              <router-view></router-view>
            </transition>
          </div>
        </div>
        <KTFooter></KTFooter>
      </div>
    </div>
    <KTStickyToolbar v-if="toolbarDisplay"></KTStickyToolbar>
    <KTQuickPanel></KTQuickPanel>
    <KTScrollTop></KTScrollTop>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTAside from "@/views/theme/aside/Aside.vue";
import KTHeader from "@/views/theme/header/Header.vue";
import KTHeaderMobile from "@/views/theme/header/HeaderMobile.vue";
import KTFooter from "@/views/theme/footer/Footer.vue";
import HtmlClass from "@/common/htmlclass.service";
import KTSubheader from "@/views/theme/subheader/Subheader.vue";
import KTStickyToolbar from "@/views/partials/layout/StickyToolbar.vue";
import KTQuickPanel from "@/views/partials/layout/QuickPanel.vue";
import KTScrollTop from "@/views/partials/layout/ScrollTop";
import Loader from "@/views/partials/content/Loader.vue";
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME
} from "@/store/htmlclass.module.js";

export default {
  name: "Base",
  components: {
    KTAside,
    KTHeader,
    KTHeaderMobile,
    KTFooter,
    KTSubheader,
    KTStickyToolbar,
    KTQuickPanel,
    KTScrollTop,
    Loader
  },
  beforeMount() {
    // show page loading
    this.$store.dispatch(ADD_BODY_CLASSNAME, "kt-page--loading");

    // initialize html element classes
    HtmlClass.init();
  },
  mounted() {
    // check if current user is authenticated
    if (!this.isAuthenticated) {
      this.$router.push({ name: "login" });
    }

    // Simulate the delay page loading
    setTimeout(() => {
      // Remove page loader after some time
      this.$store.dispatch(REMOVE_BODY_CLASSNAME, "kt-page--loading");
    }, 2000);
  },
  methods: {},
  computed: {
    ...mapGetters([
      "isAuthenticated",
      "breadcrumbs",
      "pageTitle",
      "layoutConfig"
    ]),

    /**
     * Check if the page laoder is enabled
     * @returns {boolean}
     */
    loaderEnabled() {
      return !!this.layoutConfig("loader.enabled");
    },

    /**
     * Check if container width is fluid
     * @returns {boolean}
     */
    contentFluid() {
      return this.layoutConfig("content.width") === "fluid";
    },

    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo() {
      return process.env.BASE_URL + this.layoutConfig("loader.logo");
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    },

    /**
     * Set the right toolbar display
     * @returns {boolean}
     */
    toolbarDisplay() {
      return !!this.layoutConfig("toolbar.display");
    },

    /**
     * Set the subheader display
     * @returns {boolean}
     */
    subheaderDisplay() {
      return !!this.layoutConfig("subheader.display");
    }
  }
};
</script>

<style>
  #kt_content {
    background: #fff;
  }
</style>
