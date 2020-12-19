<template>
  <li class="kt-menu__section">
    <h4 class="kt-menu__section-text">{{ menu.section }}</h4>
    <i class="kt-menu__section-icon flaticon-more-v2"></i>
  </li>
</template>

<script>
export default {
  name: "KTMenuSection",
  components: {},
  props: {
    menu: Object
  }
};
</script>
