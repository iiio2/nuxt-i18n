<template>
  <b-container class="mt-5">
    <Navbar />
    <Nuxt />
  </b-container>
</template>

<script>
import Navbar from "../components/navbar.vue";
export default {
  components: {
    Navbar,
  },
  head() {
    return this.$nuxtI18nHead();
  },
};
</script>
