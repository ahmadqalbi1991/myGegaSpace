<template>
    <div>
        <v-alert
            :type="alert_type"
            :value="show_alert"
            dismissible
            @click.native="show_alert ? show_alert = false : show_alert = true"
            rounded="0"
        >
            {{ alert_text }}
        </v-alert>
        <v-container>
            <v-card
                elevation="10"
                :loading="show_loader"
            >
                <v-card-title>
                    {{ __('message.users') }}
                    <add-btn :type="__('message.user')" to="/add-user"></add-btn>
                </v-card-title>
                <datatable
                    :headers="headers"
                    :items="items"
                    :view="haveRight('users.view_user')"
                    :delete_permission="haveRight('users.delete_user')"
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
    import datatable from './layout/Datatable.vue'
    import shop_loader from './layout/Loader.vue'
    import add_btn from './ui/AddButton.vue'

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
            },
            resetData() {
                setTimeout(() => [
                    this.getUsers()
                ], 2000)
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
