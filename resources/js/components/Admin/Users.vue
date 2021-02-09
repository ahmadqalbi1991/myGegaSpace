<template>
    <div>
        <v-container>
            <v-card
                elevation="10"
                :loading="show_loader"
            >
                <v-card-title>
                    {{ __('message.users') }}
                </v-card-title>
                <datatable
                    :headers="headers"
                    :items="items"
                    :view="haveRight('users.view_user')"
                    :delete_permission="haveRight('users.delete_user')"
                    :to="view_path"
                    :delete-path="delete_path"
                ></datatable>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import datatable from './layout/Datatable.vue'
    import shop_loader from './layout/Loader.vue'

    export default {
        name: "Users.vue",
        data() {
            return {
                headers: [
                    {
                        text: '#',
                        align: 'start',
                        value: 'sr',
                    },
                    {
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        text: 'Email',
                        value: 'email',
                        sortable: false,
                    },
                    {
                        text: 'Actions',
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
            }
        },
        components: {
            'datatable': datatable,
            'shop-loader': shop_loader
        },
        async mounted() {
            await this.getUsers();
        }
    }
</script>

<style scoped>

</style>
