<template>
  <div class="product">
    <h1>CmsPagePage</h1>
    <cms-page-view v-bind:cmsPage="currentCmsPage" />
  </div>
</template>

<script>
import CmsPageView from "../components/cmsPages/CmsPageView";

export default {
  name: "CmsPagePage",
  computed: {
    currentCmsPage() {
      return this.$store.getters.getCurrentCmsPage;
    } 
  },
  created() {
    this.$store.dispatch('loadCurrentCmsPage', this.$route.params.id);
  },
  components: {
    CmsPageView
  }
};
</script>
