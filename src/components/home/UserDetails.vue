<template>
  <div>
    <div>
      First name:
      <slot name="firstname">John</slot>
    </div>
    <div>
      Last name:
      <slot name="lastname" v-bind:user="user">{{ user.lastname }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>
