<template>
    <div>
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
                :loading="show_loader"
            >
                <v-card-title>
                    {{ __('message.users') }}
                    <add-btn :right="haveRight('users.add_user')" :type="__('message.user')" to="/add-user"></add-btn>
                </v-card-title>
                <datatable
                    :headers="headers"
                    :items="items"
                    :view="haveRight('users.view_user')"
                    :delete_permission="haveRight('users.delete_user')"
                    :change_status="haveRight('users.change_status_for_user')"
                    :to="view_path"
                    :delete-path="delete_path"
                    type="User"
                    @resetData="resetData"
                    :show_loader="show_loader"
                ></datatable>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import datatable from '../layout/Datatable.vue'
    import shop_loader from '../layout/Loader.vue'
    import add_btn from '../ui/AddButton.vue'

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
                show_loader: true,
                view_path: 'viewUser',
                delete_path: 'deleteUser'
            }
        },
        methods: {
            getUsers() {
                this.show_loader = true;
                axios.get('/users-data').then((response) => {
                    this.items = response.data;
                    this.show_loader = false;
                });
            },
            resetData() {
                setTimeout(() => [
                    this.getUsers()
                ], 200)
            }
        },
        components: {
            'datatable': datatable,
            'shop-loader': shop_loader,
            'add-btn': add_btn,
        },
        async mounted() {
            await this.getUsers();
        }
    }
</script>

<style scoped>

</style>
