<template>
    <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
    >
        <template v-slot:item.image="{item}">
            <v-avatar
                size="50"
            >
                <img
                    :src="item.image"
                    :alt="item.name"
                >
            </v-avatar>
        </template>
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
                            @click="deleteRecord(type, deleteId, items)"
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
        props: ['headers', 'items', 'view', 'delete_permission', 'to', 'delete_path', 'type', 'show_loader']
    }
</script>
