<template>
  <div class="counter">
    <h1>CounterPage</h1>
    {{ counter }}<br />
    <button v-on:click="onClick()">Increment</button>
  </div>
</template>

<script>
import { ref, watchEffect } from '@vue/composition-api'

export default {
  name: "CounterPage",
  setup() {
    const counter = ref(0);
    const onClick = () => counter.value++;

    watchEffect(() => {
      console.log('Counter is', counter.value);
    });

    return {
      counter, onClick
    }
  }
};
</script>
