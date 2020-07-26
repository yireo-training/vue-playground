import { createApp } from "vue";
import VueRouter from "vue-router";
//import VueApollo from "vue-apollo";
//import Vuex from "vuex";
//import BootstrapVue from "bootstrap-vue";
//import store from "./state/vuex/store";
//import client from "./state/graphql/client";

import App from "./App.vue";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import ClockPage from "./pages/ClockPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CmsPagesPage from "./pages/CmsPagesPage";
import CmsPagePage from "./pages/CmsPagePage";
//import ExamplePlugin from "./plugins/example";

const routes = [
  { path: "/", component: HomePage },
  { path: "/counter", component: CounterPage },
  { path: "/clock", component: ClockPage },
  { path: "/products", component: ProductsPage },
  { path: "/product/:id", component: ProductPage },
  { path: "/blog", component: CmsPagesPage },
  { path: "/blog/:id", component: CmsPagePage },
];

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});

//const apolloProvider = new VueApollo({
//  defaultClient: client,
//});

const app = createApp(App, {
  store: store,
  router: router,
//  apolloProvider: apolloProvider,
});

app.use(VueRouter);
//app.use(VueApollo);
//app.use(Vuex);
//app.use(BootstrapVue);
//app.use(ExamplePlugin);
app.mount("#app");
