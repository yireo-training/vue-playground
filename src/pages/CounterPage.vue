<template>
  <div class="counter">
    <h1>CounterPage</h1>
    {{ counter }}<br />
    <button v-on:click="onClick()">Increment</button>
  </div>
</template>

<script>
export default {
  name: "CounterPage",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    onClick() {
      this.counter++;
    }
  }
};
</script>
