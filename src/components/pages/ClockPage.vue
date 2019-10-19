<template>
  <div class="clock">
    <h1>ClockPage</h1>
    Time: {{ time }}
  </div>
</template>

<script>
export default {
  name: "ClockPage",
  data() {
    return {
      time: "",
    };
  },
  created() {
    this.interval = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>
