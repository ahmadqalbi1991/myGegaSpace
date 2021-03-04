<template>
    <v-snackbar
        v-model="snackbar_status"
        top
        :app="true"
        absolute
        right
        color="success"
        outlined
    >
        <v-icon
            color="success"
        >
            done
        </v-icon>
        Hello
        <template v-slot:action="{ attrs }">
            <v-btn
                color="error"
                v-bind="attrs"
                @click="snackbar = false"
                small
                outlined
            >
                        <span
                            class="material-icons">
                            close
                        </span>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    export default {
        name: "Snackbar.vue",
        props: ['snackbar_status']
    }
</script>
