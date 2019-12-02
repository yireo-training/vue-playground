<template>
  <div>
    <div v-if="!product">No products found</div>
    <div v-if="product">
      Product name: {{ product.name }}<br/>
      Product SKU: {{ product.sku }}<br/>
      <div v-if="product && product.image"><img v-bind:src="product.image.url" width="100"/></div>
    </div>
  </div>
</template>

<script>
import getProductQuery from "../../state/graphql/queries/getProduct.graphql";

export default {
  apollo: {
      product: {
        query: getProductQuery,
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
      product: {}
    };
  }
};
</script>
