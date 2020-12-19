<template>
  <div
    v-bind:class="{ 'kt-quick-search--has-result': hasResult() }"
    class="kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact"
    id="kt_quick_search_dropdown"
  >
    <form class="kt-quick-search__form">
      <div
        class="input-group kt-spinner--input kt-spinner--sm kt-spinner--brand kt-spinner--right"
        v-bind:class="{ 'kt-spinner': loading }"
      >
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="flaticon2-search-1"></i>
          </span>
        </div>
        <input
          v-on:keyup="onSearch"
          type="text"
          class="form-control kt-quick-search__input"
          placeholder="Search..."
        />
        <div class="input-group-append">
          <span class="input-group-text">
            <i
              class="la la-close kt-quick-search__close"
              v-on:click="reset"
              v-bind:style="{ display: hasResult() ? 'flex' : '' }"
            ></i>
          </span>
        </div>
      </div>
    </form>
    <perfect-scrollbar
      class="kt-quick-search__wrapper"
      style="max-height: 40vh; position: relative;"
    >
      <KTSearchResult v-bind:data="data"></KTSearchResult>
    </perfect-scrollbar>
  </div>
</template>

<script>
import KTSearchResult from "@/views/theme/topbar/SearchResult.vue";

export default {
  name: "KTSearchDefault",
  components: { KTSearchResult },
  data() {
    return {
      data: [],
      loading: false,
      // dummy search result data
      result: [
        {
          text: "Documents",
          type: 0
        },
        {
          svg: process.env.BASE_URL + "assets/media/files/doc.svg",
          text: "AirPlus Requirements",
          desc: "by Grog John",
          type: 1
        },
        {
          svg: process.env.BASE_URL + "assets/media/files/pdf.svg",
          text: "TechNav Documentation",
          desc: "by Mary Broun",
          type: 1
        },
        {
          svg: process.env.BASE_URL + "assets/media/files/zip.svg",
          text: "All Framework Docs",
          desc: "by Nick Stone",
          type: 1
        },
        {
          svg: process.env.BASE_URL + "assets/media/files/xml.svg",
          text: "AirPlus Requirements",
          desc: "by Tim Hardy",
          type: 1
        },
        {
          text: "Customers",
          type: 0
        },
        {
          img: process.env.BASE_URL + "assets/media/users/user1.jpg",
          text: "Jimmy Curry",
          desc: "Software Developer",
          type: 1
        },
        {
          img: process.env.BASE_URL + "assets/media/users/user2.jpg",
          text: "Milena Gibson",
          desc: "UI Designer",
          type: 1
        },
        {
          img: process.env.BASE_URL + "assets/media/users/user3.jpg",
          text: "Stefan JohnStefan",
          desc: "Marketing Manager",
          type: 1
        },
        {
          img: process.env.BASE_URL + "assets/media/users/user4.jpg",
          text: "Anna Strong",
          desc: "Software Developer",
          type: 1
        },
        {
          text: "Files",
          type: 0
        },
        {
          icon: "flaticon2-box kt-font-danger",
          text: "2 New items submitted",
          desc: "Marketing Manager",
          type: 1
        },
        {
          icon: "flaticon-psd kt-font-brand",
          text: "79 PSD files generated",
          desc: "by Grog John",
          type: 1
        },
        {
          icon: "flaticon2-supermarket kt-font-warning",
          text: "$2900 worth products sold",
          desc: "Total 234 items",
          type: 1
        },
        {
          icon: "flaticon-safe-shield-protection kt-font-info",
          text: "4 New items submitted",
          desc: "Marketing Manager",
          type: 1
        }
      ]
    };
  },
  methods: {
    onSearch(event) {
      if (event.target.value.length > 2) {
        this.loading = true;
        // simulate getting search result
        setTimeout(() => {
          this.data = this.result;
          this.loading = false;
        }, 2000);
      }
    },
    /**
     * Check if the data has result
     * @returns {boolean}
     */
    hasResult() {
      return this.data.length || false;
    },
    /**
     * Reset search data
     */
    reset() {
      this.data = [];
    }
  }
};
</script>
