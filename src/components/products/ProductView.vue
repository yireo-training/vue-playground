<template>
  <div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="loading">Loading ...</div>
    <div v-if="!product">No products found</div>
    <div v-if="product">
      Product name: {{ product.name }}<br/>
      Product SKU: {{ product.sku }}
    </div>
  </div>
</template>

<script>
import getMyProductQuery from "../../state/graphql/queries/getMyProduct.graphql";

export default {
  apollo: {
      product: {
        query: getMyProductQuery,
        variables() {
          return {
            id: this.productId
          }
        }
      }
    },
  data() {
    return {
      productId: this.$route.params.id,
      product: {},
      loading: false,
      error: false
    };
  }
};
</script>
