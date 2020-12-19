<template>
  <div class="kt-quick-search__result">
    <div v-if="!data" class="kt-quick-search__message">
      No record found
    </div>

    <template v-for="(item, i) in data">
      <!-- category item -->
      <div v-if="item.type === 0" :key="i" class="kt-quick-search__category">
        {{ item.text }}
      </div>

      <div v-if="item.type === 1" :key="i" class="kt-quick-search__item">
        <div v-if="item.icon" class="kt-quick-search__item-icon">
          <i v-bind:class="item.icon"></i>
        </div>

        <div
          v-if="item.img"
          class="kt-quick-search__item-img kt-quick-search__item-img--file"
        >
          <img :src="item.img" alt="" />
        </div>

        <div
          v-if="item.svg"
          class="kt-quick-search__item-img kt-quick-search__item-img--file"
        >
          <img :src="item.svg" alt="" />
        </div>

        <div class="kt-quick-search__item-wrapper">
          <a href="#" class="kt-quick-search__item-title">
            {{ item.text }}
          </a>
          <div v-if="item.desc" class="kt-quick-search__item-desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "KTSearchResult",
  props: {
    data: Array
  }
};
</script>
