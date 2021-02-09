<template>
    <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
    >
        <template v-slot:item.hash_id="{ item }">
            <v-btn
                v-show="view"
                color="primary"
                class="ma-2 white--text"
                small
                :to="{name: to, params: {id: item.hash_id}}"
            >
                {{ __('message.view') }}
                <v-icon
                    right
                >
                    mdi-eye
                </v-icon>
            </v-btn>
            <v-btn
                v-show="delete_permission"
                color="error"
                class="ma-2 white--text"
                small
                :to="{name: delete_path, params: {id: item.hash_id}}"
            >
                {{ __('message.delete') }}
                <v-icon
                    right
                >
                    mdi-delete
                </v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        props: ['headers', 'items', 'view', 'delete_permission', 'to', 'delete_path']
    }
</script>
