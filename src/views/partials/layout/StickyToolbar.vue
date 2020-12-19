<template>
  <div>
    <!-- begin::Sticky Toolbar -->
    <ul class="kt-sticky-toolbar" style="margin-top: 30px;">

    </ul>
    <!-- end::Sticky Toolbar -->

  </div>
</template>

<script>
import KTOffcanvas from "@/assets/js/offcanvas.js";
import objectPath from "object-path";
import config from "@/common/config/layout.config.json";

export default {
  name: "KTStickyToolbar",
  props: {},
  components: {},
  computed: {},
  mounted() {
    new KTOffcanvas(this.$refs["kt_demo_panel"], {
      overlay: true,
      baseClass: "kt-demo-panel",
      closeBy: "kt_demo_panel_close",
      toggleBy: "kt_demo_panel_toggle"
    });
  },
  methods: {
    isActiveDemo(demo) {
      return demo === objectPath.get(config, "demo");
    }
  }
};
</script>
