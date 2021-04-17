<template>
    <div>
        <loader :show_loader="show_loader"></loader>
        <v-snackbar
            v-model="snackbar"
            top
            right
            :color="snackbar_color"
        >
            <v-icon>{{ snackbar_icon }}</v-icon>
            {{ snackbar_text }}&nbsp;
            <template>
                <v-btn
                    color="pink"
                    @click="snackbar = false"
                    small
                    absolute
                    right
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
        <v-container>
            <v-card
                elevation="10"
            >
                <v-card-title>
                    {{ __('message.users') }}
                    <add-btn :right="haveRight('users.add_user')" :type="__('message.user')" to="/add-user"></add-btn>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :options.sync="options"
                    @pagination="updatePage"
                    :server-items-length="totalUsers"
                    :search="search"
                    :custom-filter="getUsers"
                    elevation="10"
                >
                    <template v-slot:top>
                        <v-text-field
                            v-model="search"
                            :label="__('message.search_admin')"
                            class="mx-4"
                            @input="getUsers"
                            @click="getUsers"
                            @blur="getUsers"
                            append-icon="search"
                        ></v-text-field>
                    </template>
                    <template v-slot:item.image="{item}">
                        <div class="m-5">
                            <v-avatar
                                v-if="item.image"
                                size="50"
                            >
                                <img
                                    :src="item.image"
                                    :alt="item.name"
                                >
                            </v-avatar>
                        </div>
                    </template>
                    <template v-slot:item.status="{item}">
                        <v-btn
                            v-if="haveRight('users.change_status_for_user')"
                            :color="item.color"
                            class="ma-2 white--text"
                            small
                            @click="changeUserStatus(item.id, item.status)"
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
                    <template v-slot:item.hash_id="{item}">
                        <v-btn
                            v-if="haveRight('users.edit_user')"
                            :to="{name: 'viewUser', params: {id: item.hash_id}}"
                            color="primary"
                            class="ma-2 white--text"
                            small
                        >
                            {{ __('message.view') }}
                            <v-icon
                                right
                            >
                                mdi-eye
                            </v-icon>
                        </v-btn>
                        <v-btn
                            v-if="haveRight('users.delete_user')"
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
                            :retain-focus="false"
                        >
                            <v-card>
                                <v-card-title class="headline">
                                    <span class="material-icons"> warning</span>&nbsp; {{ __('message.warning') }}
                                </v-card-title>

                                <v-card-text>
                                    {{ __('message.delete_confirm', [__('message.user')]) }}
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                        color="primary"
                                        @click.stop="closeDialog"
                                    >
                                        {{ __('message.cancel') }}
                                    </v-btn>

                                    <v-btn
                                        color="error"
                                        @click.stop="deleteUser"
                                    >
                                        {{ __('message.confirm') }}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import add_btn from '../ui/AddButton.vue'
    import loader from '../ui/Loader.vue'

    export default {
        name: "Users.vue",
        data() {
            return {
                headers: [
                    {
                        text: '',
                        align: 'start',
                        value: 'image',
                    },
                    {
                        text: this.__('message.name'),
                        value: 'name'
                    },
                    {
                        text: this.__('message.email'),
                        value: 'email',
                        sortable: false,
                    },
                    {
                        text: this.__('message.role'),
                        value: 'role',
                        sortable: false,
                    },
                    {
                        text: this.__('message.status'),
                        value: 'status',
                        sortable: false,
                    },
                    {
                        text: this.haveRight('users.view_user') || this.haveRight('users.delete_user') ? this.__('message.actions') : null,
                        value: 'hash_id',
                        sortable: false,
                    },
                ],
                items: [],
                search: '',
                options: {
                    page: 1,
                    itemsPerPage: 10
                },
                listSize: [1, 2, 3, 4],
                totalUsers: 0,
                deleteId: ''
            }
        },
        methods: {
            showDialog(id) {
                if (id) {
                    this.deleteId = id;
                    this.dialog = true;
                }
            },
            closeDialog() {
                this.deleteId = null;
                this.dialog = false;
            },
            updatePage(pagination) {
                this.pagination = pagination;
                this.getUsers();
            },
            getUsers() {
                this.show_loader = true;
                axios.get('/users-data', {params: {page: this.options.page, perPageItem: this.options.itemsPerPage, q: this.search}}).then((response) => {
                    this.items = response.data.users;
                    this.totalUsers = response.data.totalUsers;
                    this.show_loader = false;
                });
            },
            resetData() {
                setTimeout(() => [
                    this.getUsers()
                ], 200)
            },
            changeUserStatus(id, value) {
                if (value == 'Active') {
                    value = 'Disable'
                } else if (value == 'Disable') {
                    value = 'Active'
                }
                axios.post('/change-user-status', {id: id, status: value}).then(() => {
                    this.getUsers();
                })
            },
            deleteUser() {
                const id = this.deleteId;
                this.show_loader = true;
                axios.get('/delete-user', {params: {id: id}}).then((response) => {
                    this.show_loader = false;
                });
                this.dialog = false;
                this.getUsers();
            },
        },
        components: {
            'add-btn': add_btn,
            'loader': loader
        },
        async mounted() {
            await this.getUsers();
        }
    }
</script>

<style scoped>

</style>
