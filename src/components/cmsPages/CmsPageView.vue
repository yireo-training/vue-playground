<template>
  <div>
    <div v-if="!cmsPage">No cmsPage found</div>
    <div v-if="cmsPage">
      <h3>{{ cmsPage.content_heading }}</h3>
      <div v-html="cmsPage.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cmsPage: Object
  }
};
</script>
