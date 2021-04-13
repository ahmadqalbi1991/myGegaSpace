<template>
    <v-overlay
        :value="show_loader"
    >
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
    </v-overlay>
</template>

<script>
    export default {
        name: "Loader",
        props: ['show_loader']
    }
</script>

<style scoped>

</style>
