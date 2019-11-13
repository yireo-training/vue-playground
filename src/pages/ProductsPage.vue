<template>
  <div class="products">
    <h1>ProductsPage</h1>
    <product-listing />
  </div>
</template>

<script>
import ProductListing from "../components/products/ProductListing";

export default {
  name: "ProductsPage",
  components: {
    ProductListing
  }
};
</script>
