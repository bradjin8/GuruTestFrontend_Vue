const i18nService = {
  defaultLanguage: "en",

  languages: [
    {
      lang: "en",
      name: "English",
      flag: process.env.BASE_URL + "assets/media/flags/226-united-states.svg"
    },
    {
      lang: "ch",
      name: "Mandarin",
      flag: process.env.BASE_URL + "assets/media/flags/034-china.svg"
    },
    {
      lang: "es",
      name: "Spanish",
      flag: process.env.BASE_URL + "assets/media/flags/128-spain.svg"
    },
    {
      lang: "jp",
      name: "Japanese",
      flag: process.env.BASE_URL + "assets/media/flags/063-japan.svg"
    },
    {
      lang: "de",
      name: "German",
      flag: process.env.BASE_URL + "assets/media/flags/162-germany.svg"
    },
    {
      lang: "fr",
      name: "French",
      flag: process.env.BASE_URL + "assets/media/flags/195-france.svg"
    }
  ],

  /**
   * Keep the active language in the localStorage
   * @param lang
   */
  setActiveLanguage(lang) {
    localStorage.setItem("language", lang);
  },

  /**
   * Get the current active language
   * @returns {string | string}
   */
  getActiveLanguage() {
    return localStorage.getItem("language") || this.defaultLanguage;
  }
};

export default i18nService;
