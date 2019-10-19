import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import HomePage from "./components/pages/HomePage";
import CounterPage from "./components/pages/CounterPage";
import ClockPage from "./components/pages/ClockPage";
import ProductsPage from "./components/pages/ProductsPage";
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HomePage },
  { path: "/counter", component: CounterPage },
  { path: "/clock", component: ClockPage },
  { path: "/products", component: ProductsPage }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
