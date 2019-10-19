<template>
  <div class="products">
    <h1>ProductsPage</h1>
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="loading">Loading ...</div>
    <div v-if="products.length === 0 && !loading">No products found</div>
    <div v-if="products.length > 0">
      <ul>
        <li v-for="product in products" v-bind:key="product.id">{{ product.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",
  data() {
    return {
      search: "Hoo",
      products: [],
      loading: false,
      error: false,
      getVariables() {
        return { search: this.search };
      },
      getQuery() {
        return `
        query getMyProducts($search: String) {
            products(search: $search) {
              items {
                id
                name
                sku
                small_image {
                    label
                    url
                  }
                swatch_image
                description {
                    __html: html
                }
              }
            }
        }       
        `;
      },
      fetchData() {
        let url = "http://m2.betelgeuse.yr/graphql";
        this.loading = true;
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: this.getQuery(),
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
    };
  },
  created() {
    this.fetchData();
  }
};
</script>
