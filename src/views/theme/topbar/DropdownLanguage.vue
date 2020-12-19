<template>
  <ul class="kt-nav kt-margin-t-10 kt-margin-b-10">
    <template v-for="(v, i) in languages">
      <li
        class="kt-nav__item"
        :class="{ 'kt-nav__item--active': isActiveLanguage(v.lang) }"
        :key="i"
      >
        <a
          href="#"
          class="kt-nav__link"
          v-bind:data-lang="v.lang"
          v-on:click="selectedLanguage"
        >
          <span class="kt-nav__link-icon">
            <img svg-inline :src="v.flag" alt="" />
          </span>
          <span class="kt-nav__link-text">{{ v.name }}</span>
        </a>
      </li>
    </template>
  </ul>
</template>

<script>
import i18nService from "@/common/i18n.service.js";

export default {
  name: "KTDropdownLanguage",
  data() {
    return {
      languages: i18nService.languages
    };
  },
  methods: {
    selectedLanguage(e) {
      const el = e.target.closest(".kt-nav__link");
      const lang = el.getAttribute("data-lang");

      i18nService.setActiveLanguage(lang);

      this.$emit(
        "language-changed",
        this.languages.find(val => {
          return val.lang === lang;
        })
      );

      window.location.reload();
    },
    isActiveLanguage(current) {
      return this.activeLanguage === current;
    }
  },
  computed: {
    activeLanguage() {
      return i18nService.getActiveLanguage();
    }
  }
};
</script>
