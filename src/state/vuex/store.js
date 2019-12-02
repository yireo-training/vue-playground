import Vuex from "vuex";
import Vue from "vue";
import getCmsPages from "../graphql/queries/getCmsPages.graphql";
import getCmsPage from "../graphql/queries/getCmsPage.graphql";
import client from "../graphql/client";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cmsPages: [],
    currentCmsPage: {}
  },
  getters: {
    getCmsPages: state => {
      return state.cmsPages;
    },
    getCurrentCmsPage: state => {
      return state.currentCmsPage;
    }
  },
  mutations: {
    setCmsPages(state, payload) {
      state.cmsPages = payload.pages;
    },
    setCurrentCmsPage(state, payload) {
      state.currentCmsPage = payload.page;
    }
  },
  actions: {
    loadCmsPages() {
      client.query({ query: getCmsPages }).then(result => {
        this.commit('setCmsPages', {pages: result.data.cmsPages.items});
      });
    },
    loadCurrentCmsPage(context, id) {
      const variables = { identifier: id } ;
      client.query({ query: getCmsPage, variables: variables }).then(result => {
        this.commit('setCurrentCmsPage', {page: result.data.cmsPage});
      });
    }
  }
});

export default store;
