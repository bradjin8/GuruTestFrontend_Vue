<template>
  <!-- begin::Scrolltop -->
  <div id="kt_scrolltop" class="kt-scrolltop">
    <i class="fa fa-arrow-up" />
  </div>
  <!-- end::Scrolltop -->
</template>

<script>
import KTScrolltop from "@/assets/js/scrolltop.js";

export default {
  name: "KTScrollTop",
  mounted() {
    new KTScrolltop("kt_scrolltop", {
      offset: 300,
      speed: 600
    });
  }
};
</script>
