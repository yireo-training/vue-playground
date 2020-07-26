<template>
  <b-nav tabs>
    <router-link
      v-for="menuItem in menuItems"
      v-bind:key="menuItem.url"
      :to="menuItem.url"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <b-nav-item :active="isExactActive" :href="href" @click="navigate">{{
        menuItem.label
      }}</b-nav-item>
    </router-link>
  </b-nav>
</template>

<script>
import config from "../config";

export default {
  data() {
    return {
      menuItems: config.menuItems,
    };
  },
};
</script>
