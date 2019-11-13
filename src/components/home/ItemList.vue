<template>
  <div>
    <input v-model.number="newName" v-on:keyup.enter="addItem" />
    <button v-on:click="addItem">Add</button>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      newName: ""
    };
  },
  methods: {
    addItem() {
      this.items.push({ id: Math.random(), name: this.newName });
      this.newName = "";
    },
    capitalize(value) {
      return value.toUpperCase;
    }
  },
  filters: {
    capitalize: value => {
      return value.toUpperCase;
    }
  }
};
</script>
