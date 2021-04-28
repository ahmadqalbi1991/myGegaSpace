<template>
    <v-btn
        v-if="right"
        absolute
        right
        class="ma-2wh"
        elevation="10"
        :to="to"
        outlined
    >
        {{ __('message.add') + " " + type }}
        <v-icon
            right
            color="primary"
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
