<template>
    <v-btn
        v-if="right"
        absolute
        right
        class="ma-2 white--text"
        elevation="10"
        :to="to"
        color="primary"
    >
        {{ __('message.add') + " " + type }}
        <v-icon
            right
        >
            mdi-plus
        </v-icon>&nbsp;
    </v-btn>
</template>

<script>
    export default {
        name: "AddButton.vue",
        props: ['type', 'to', 'right']
    }
</script>

<style scoped>

</style>
