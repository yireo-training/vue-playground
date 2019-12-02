<template>
  <div class="pages">
    <h1>CmsPagesPage</h1>
    <cms-page-listing v-bind:cmsPages="cmsPages" />
  </div>
</template>

<script>
import CmsPageListing from "../components/cmsPages/CmsPageListing";

export default {
  name: "CmsPagesPage",
  computed: {
    cmsPages() {
      return this.$store.getters.getCmsPages;
    }
  },
  created() {
    this.$store.dispatch('loadCmsPages');
  },
  components: {
    CmsPageListing
  }
};
</script>
