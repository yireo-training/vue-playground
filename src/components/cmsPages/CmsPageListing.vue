<template>
  <div>
    <div v-if="!cmsPages">No cmsPages found</div>
    <div v-if="cmsPages">
      <h2>CmsPageListing</h2>
      <ul>
        <li v-for="cmsPage in cmsPages" v-bind:key="cmsPage.identifier">
          <router-link :to="{ path: '/blog/' + cmsPage.identifier }">
            {{ cmsPage.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cmsPages: Array
  }
};
</script>
