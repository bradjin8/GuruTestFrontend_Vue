<template>
  <!-- begin:: Footer -->
  <div
    class="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop"
    id="kt_footer"
  >
    <div
      class="kt-container"
      v-bind:class="{ 'kt-container--fluid': isFluid() }"
    >
      <div class="kt-footer__copyright">
        2020 &nbsp;&copy;&nbsp;
        <a
          href="http://keenthemes.com/metronic"
          target="_blank"
          class="kt-link ml-1"
        >
          Shipme
        </a>
      </div>
    </div>
  </div>
  <!-- end:: Footer -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTFooter",
  methods: {
    /**
     * Check if footer container is fluid
     * @returns {boolean}
     */
    isFluid() {
      return this.layoutConfig("footer.self.width") === "fluid";
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  }
};
</script>
