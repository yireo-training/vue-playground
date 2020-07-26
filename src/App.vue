<template>
  <div id="app" class="container">
    <Navigation />
    <Content/>
  </div>
</template>

<script>
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Content from "./components/Content";
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    Content, Navigation
  }
};
</script>
