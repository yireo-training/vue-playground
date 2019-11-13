<template>
  <div class="product">
    <h1>ProductPage</h1>
    <product-view />
  </div>
</template>

<script>
import ProductView from "../components/products/ProductView";

export default {
  name: "ProductPage",
  components: {
    ProductView
  }
};
</script>
