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
        <v-icon>
            mdi-plus
        </v-icon>&nbsp;
        {{ __('message.add') + " " + type }}
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
