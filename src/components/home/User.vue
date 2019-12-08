<template>
  <div>
    <h2>User slot</h2>
    <user-details v-bind:user="customer">
      <template v-slot:firstname>{{ customer.firstname }}</template>
      <template v-slot:lastname></template>
    </user-details>
  </div>
</template>

<script>
import UserDetails from "./UserDetails";

export default {
  data() {
    return {
      customer: {
        firstname: 'Jane',
        lastname: 'Dough'
      }
    }
  },
  components: {
    UserDetails
  }
};
</script>
