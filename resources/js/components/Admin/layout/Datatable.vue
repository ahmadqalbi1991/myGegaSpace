<template>
    <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
    >
        <template v-slot:item.image="{item}">
            <v-avatar
                v-if="item.image"
                size="50"
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
            <v-btn
                v-if="delete_permission"
                color="error"
                class="ma-2 white--text"
                small
                @click.stop="showDialog(item.id)"
            >
                {{ __('message.delete') }}
                <v-icon
                    right
                >
                    mdi-delete
                </v-icon>
            </v-btn>
            <v-dialog
                v-model="dialog"
                max-width="500"
            >
                <v-card>
                    <v-card-title class="headline">
                        <span class="material-icons"> warning</span>&nbsp; {{ __('message.warning') }}
                    </v-card-title>

                    <v-card-text>
                        {{ __('message.delete_confirm', [type]) }}
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="primary"
                            @click="dialog = false"
                        >
                            {{ __('message.cancel') }}
                        </v-btn>

                        <v-btn
                            color="error"
                            @click="deleteRecord(type, deleteId)"
                            :loading="show_loader"
                        >
                            {{ __('message.confirm') }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
            showDialog(id) {
                if (id) {
                    this.deleteId = id;
                    this.dialog = true;
                }
            }
        },
        props: ['headers', 'items', 'view', 'edit', 'delete_permission', 'to', 'change_status', 'type', 'show_loader', 'edit_path']
    }
</script>
