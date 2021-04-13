<template>
    <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        hide-default-footer
    >
        <template v-slot:item.image="{item}">
            <v-avatar
                v-if="item.image"
                size="35"
            >
                <img
                    :src="item.image"
                    :alt="item.name"
                >
            </v-avatar>
        </template>
        <template v-slot:item.status="{item}">
            <v-btn
                v-if="change_status"
                :color="item.color"
                class="ma-2 white--text"
                small
                @click="changeStatus(item.id, item.status, type)"
            >
                {{ item.status }}
            </v-btn>
            <v-chip
                v-else
                :color="item.color"
                small
            >
                {{ item.status }}
            </v-chip>
        </template>
        <template v-slot:item.hash_id="{ item }">
            <v-btn
                v-if="view"
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
                v-if="edit"
                color="primary"
                class="ma-2 white--text"
                small
                :to="{name: edit_path, params: {id: item.hash_id}}"
            >
                {{ __('message.edit') }}
                <v-icon
                    right
                >
                    create
                </v-icon>
            </v-btn>



        </template>
    </v-data-table>
</template>

<script>
    export default {
        data () {
            return {
                deleteId: ''
            }
        },
        methods: {

            editData(id) {
                this.$emit('editRecord', id);
            },
            deleteRecord(id) {
                this.$emit('deleteRecord', id);
                this.dialog = false;
            }
        },
        props: ['headers', 'items', 'view', 'edit', 'delete_permission', 'to', 'change_status', 'type', 'edit_path', 'edit_modal', 'show_loader']
    }
</script>
