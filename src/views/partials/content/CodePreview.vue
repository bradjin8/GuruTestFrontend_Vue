<template>
  <KTPortlet v-bind:title="title">
    <template v-slot:title v-if="hasTitleSlot">
      <h3 class="kt-portlet__head-title">
        <slot name="title"></slot>
      </h3>
    </template>
    <template v-slot:toolbar>
      <button
        type="button"
        class="btn btn-clean btn-sm btn-icon btn-icon-md"
        v-b-tooltip.hover
        title="Show codes"
        v-on:click="toggle()"
        v-bind:class="{ active: isOpen }"
      >
        <i class="la la-code"></i>
      </button>
    </template>
    <template v-slot:body>
      <transition name="fade">
        <div
          class="kt-portlet__code"
          v-bind:class="{ 'kt-portlet__code--show': isOpen }"
          v-if="isOpen"
        >
          <button
            href="#"
            v-on:click="copyCode($event)"
            v-b-tooltip.hover
            title="Copy codes"
            class="btn btn-clean btn-sm btn-icon btn-icon-md float-right"
          >
            <i class="la la-copy"></i>
          </button>

          <div v-if="hasGeneralCode">
            <slot name="code"></slot>
          </div>

          <ul
            class="nav nav-tabs nav-tabs-line"
            role="tablist"
            v-if="!hasGeneralCode && !hasSingleCodeType"
          >
            <li class="nav-item" v-if="hasHtmlCode">
              <a
                class="nav-link active"
                v-on:click="setActiveTab"
                data-tab="0"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="true"
                >HTML</a
              >
            </li>
            <li class="nav-item" v-if="hasJsCode">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="1"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
                >&nbsp;JS&nbsp;</a
              >
            </li>
            <li class="nav-item" v-if="hasScssCode">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="2"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
                >SCSS</a
              >
            </li>
          </ul>

          <div v-if="!hasGeneralCode && !hasSingleCodeType">
            <b-tabs
              class="kt-hide-tabs"
              content-class="mt-3"
              v-model="tabIndex"
            >
              <b-tab active>
                <highlight-code lang="html">
                  <slot name="html"></slot>
                </highlight-code>
              </b-tab>
              <b-tab>
                <highlight-code lang="js">
                  <slot name="js"></slot>
                </highlight-code>
              </b-tab>
              <b-tab>
                <highlight-code lang="scss">
                  <slot name="scss"></slot>
                </highlight-code>
              </b-tab>
            </b-tabs>
          </div>

          <div v-if="hasSingleCodeType">
            <highlight-code lang="html" v-if="hasHtmlCode">
              <slot name="html"></slot>
            </highlight-code>
            <highlight-code lang="js" v-if="hasJsCode">
              <slot name="js"></slot>
            </highlight-code>
            <highlight-code lang="scss" v-if="hasScssCode">
              <slot name="scss"></slot>
            </highlight-code>
          </div>
        </div>
      </transition>
      <slot name="preview"></slot>
    </template>
  </KTPortlet>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import KTPortlet from "@/views/partials/content/Portlet.vue";
import copy from "clipboard-copy";

export default {
  name: "KTCodePreview",
  props: {
    title: String
  },
  data() {
    return {
      tabIndex: 0,
      isOpen: false
    };
  },
  components: {
    KTPortlet
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll('[data-toggle="tab"]');
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    copyCode(event) {
      // if code is inside tab
      const container = event.target.closest(".kt-portlet__code");
      let text = container.querySelectorAll(
        ".kt-portlet__code .tab-pane.active"
      )[0];
      if (typeof text !== "undefined") {
        text = text.textContent;
      } else {
        text = container.textContent;
      }
      copy(text);
    }
  },
  computed: {
    /**
     * Check if has title
     * @returns {boolean}
     */
    hasTitleSlot() {
      return !!this.$slots["title"];
    },

    /**
     * Check if code only has one, exclude the tabs
     * @returns {boolean}
     */
    hasSingleCodeType() {
      let exist = 0;
      ["html", "js", "scss"].forEach(type => {
        if (this.$slots.hasOwnProperty(type)) {
          exist++;
        }
      });
      return exist === 1;
    },

    /**
     * Custom generate codes
     * @returns {boolean}
     */
    hasGeneralCode() {
      return !!this.$slots["code"];
    },

    /**
     * Check if has JS code slot
     * @returns {boolean}
     */
    hasJsCode() {
      return !!this.$slots["js"];
    },

    /**
     * Check if has SCSS code slot
     * @returns {boolean}
     */
    hasScssCode() {
      return !!this.$slots["scss"];
    },

    /**
     * Check if has HTML code slot
     * @returns {boolean}
     */
    hasHtmlCode() {
      return !!this.$slots["html"];
    }
  }
};
</script>
