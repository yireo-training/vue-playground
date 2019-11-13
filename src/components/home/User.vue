<template>
    <user-details>
        <template v-slot:firstname>Jane</template>
        <template v-slot:lastname>Doe</template>
    </user-details>
</template>

<script>
import UserDetails from "./UserDetails"

export default {
    components: {
        UserDetails
    }
}
</script>