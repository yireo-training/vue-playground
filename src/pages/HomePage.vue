<template>
  <div class="homepage">
    <h1>HomePage</h1>
    <item-list />
    <user />
  </div>
</template>

<script>
import ItemList from "../components/home/ItemList";
import User from "../components/home/User";

export default {
  name: 'HomePage',
  components: {
    ItemList,
    User
  }
}
</script>