<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <router-link
          to="/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <b-nav-item :active="isExactActive" :href="href" @click="navigate"
            >Home</b-nav-item
          >
        </router-link>
        <router-link
          to="/counter"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <b-nav-item :active="isActive" :href="href" @click="navigate"
            >Counter</b-nav-item
          >
        </router-link>
        <router-link
          to="/clock"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <b-nav-item :active="isActive" :href="href" @click="navigate"
            >Clock</b-nav-item
          >
        </router-link>
        <router-link
          to="/products"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <b-nav-item :active="isActive" :href="href" @click="navigate"
            >Products</b-nav-item
          >
        </router-link>
      </b-nav>

      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "app",
  components: {}
};
</script>
