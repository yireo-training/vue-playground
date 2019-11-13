import Vue from "vue";
import VueRouter from "vue-router";
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"
import BootstrapVue from 'bootstrap-vue'

import App from "./App.vue";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import ClockPage from "./pages/ClockPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import ExamplePlugin from "./plugins/example";

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HomePage },
  { path: "/counter", component: CounterPage },
  { path: "/clock", component: ClockPage },
  { path: "/products", component: ProductsPage },
  { path: "/product/:id", component: ProductPage }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

const apolloClient = new ApolloClient({
  uri: "http://m2.betelgeuse.yr/graphql"
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(ExamplePlugin);

new Vue({
  render: h => h(App),
  router,
  apolloProvider
}).$mount("#app");
