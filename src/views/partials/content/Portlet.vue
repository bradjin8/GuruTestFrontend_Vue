<template>
  <div class="kt-portlet" v-bind:class="portletClass">
    <div
      class="kt-portlet__head"
      v-bind:class="headClass"
      v-if="hasTitleSlot || title"
    >
      <div class="kt-portlet__head-label">
        <slot name="title" v-if="hasTitleSlot"></slot>
        <h3 class="kt-portlet__head-title" v-if="!hasTitleSlot">
          {{ title }}
        </h3>
      </div>
      <div class="kt-portlet__head-toolbar">
        <slot name="toolbar"></slot>
      </div>
    </div>
    <div
      class="kt-portlet__body"
      v-bind:class="{
        bodyClass,
        'kt-portlet__body--fit': bodyFit,
        'kt-portlet__body--fluid': bodyFluid
      }"
    >
      <slot name="body"></slot>
    </div>
    <div class="kt-portlet__foot kt-portlet__body--fit" v-if="hasFootSlot">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "KTPortlet",
  props: {
    /**
     * String title
     */
    title: String,
    /**
     * Set portlet head size. Eg. md, lg, sm, etc.
     */
    headSize: String,
    /**
     * Set portlet to fluid
     */
    fluidHeight: Boolean,
    /**
     * Set portlet to fluid in half
     */
    fluidHalfHeight: Boolean,
    /**
     * Set overlay head
     */
    headOverlay: Boolean,
    /**
     * Set extra class for portlet head
     */
    headClass: String,
    /**
     * Set extra class for portlet body
     */
    bodyClass: String,
    /**
     * Set portlet body to fit
     */
    bodyFit: Boolean,
    /**
     * Set portlet body to fluid
     */
    bodyFluid: Boolean
  },
  components: {},
  methods: {},
  computed: {
    portletClass() {
      const cls = {
        "kt-portlet--height-fluid": this.fluidHeight,
        "kt-portlet--height-fluid-half": this.fluidHalfHeight,
        "kt-portlet--head-overlay": this.headOverlay
      };
      cls[this.headSizeClass] = this.headSizeClass;
      return cls;
    },
    hasTitleSlot() {
      return !!this.$slots["title"];
    },
    hasFootSlot() {
      return !!this.$slots["foot"];
    },
    headSizeClass() {
      if (this.headSize) {
        return `kt-portlet--head-${this.headSize}`;
      }
      return false;
    }
  }
};
</script>
