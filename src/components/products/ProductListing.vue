<template>
  <div>
    <input v-model="searchWord" />
    <div v-if="!searchWord">Please type in a valid search</div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="loading">Loading ...</div>
    <div v-if="products.length === 0 && !loading">No products found</div>
    <div v-if="products.length > 0">
      <ul>
        <li v-for="product in products" v-bind:key="product.id">
          <router-link :to="{ path: '/product/' + product.id }">
            {{ product.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import getProductsQuery from "../../state/graphql/queries/getProducts";
import config from "../../config";

export default {
  data() {
    return {
      searchWord: "dress",
      products: [],
      loading: false,
      error: false
    };
  },
  methods: {
    getVariables() {
      return {
        search: this.searchWord
      };
    },
    fetchData() {
      if (this.searchWord.length <= 0) {
        return false;
      }

      let url = config.graphql_endpoint;
      this.loading = true;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: getProductsQuery,
          variables: this.getVariables()
        })
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          this.loading = false;
          return response;
        })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.errors) {
            return (this.error = responseJson.errors);
          }
          this.products = responseJson.data.products.items;
        })
        .catch(error => (this.error = error));

      return;
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    searchWord: function() {
      this.fetchData();
    }
  }
};
</script>
