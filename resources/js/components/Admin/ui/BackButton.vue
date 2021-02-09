<template>
    <v-btn
        absolute
        right
        class="ma-2 white--text"
        elevation="10"
        @click="$router.go(-1)"
        color="primary"
    >
        {{ __('message.back') }}
    </v-btn>
</template>

<script>
    export default {
        name: "BackButton.vue"
    }
</script>

<style scoped>

</style>
