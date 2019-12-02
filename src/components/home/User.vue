<template>
  <div>
    <h2>User slot</h2>
    <user-details>
      <template v-slot:firstname>Jane</template>
      <template v-slot:lastname>Doe</template>
    </user-details>
  </div>
</template>

<script>
import UserDetails from "./UserDetails";

export default {
  components: {
    UserDetails
  }
};
</script>
