<template>
  <div>
    <div>
      First name:
      <slot name="firstname">John</slot>
    </div>
    <div>
      Last name:
      <slot name="lastname">Dough</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
