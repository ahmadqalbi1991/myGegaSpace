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
                    {{ __('message.email_templates') }}
                    <add-btn :right="haveRight('email_templates.add_email_template')" :type="__('message.email_template')" :to="{name: 'addEmailTemplate'}"></add-btn>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :options.sync="options"
                    @pagination="updatePage"
                    :server-items-length="totalTemplates"
                    :search="search"
                    :custom-filter="getEmailTemplates"
                >
                    <template v-slot:top>
                        <v-text-field
                            v-model="search"
                            :label="__('message.search_email_template')"
                            class="mx-4"
                            @input="getEmailTemplates"
                            @click="getEmailTemplates"
                            @blur="getEmailTemplates"
                            append-icon="search"
                        ></v-text-field>
                    </template>
                    <template v-slot:item.status="{ item }">
                        <v-chip
                            :color="item.color"
                            outlined
                            x-small
                        >
                            {{ item.status }}
                        </v-chip>
                    </template>
                    <template v-slot:item.hash_id="{ item }">
                        <v-btn
                            v-if="haveRight('email_templates.edit_email_template')"
                            class="ma-2"
                            outlined
                            small
                            :to="{name: 'editEmailTemplate', params: {id: item.hash_id}}"
                        >
                            {{ __('message.edit') }}
                            <v-icon
                                right
                                color="primary"
                            >
                                create
                            </v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import add_btn from '../../ui/AddButton.vue'
    import loader from '../../ui/Loader.vue'

    export default {
        name: "EmailTemplates.vue",
        data() {
            return {
                headers: [
                    {
                        text: '#',
                        align: 'start',
                        value: 'sr',
                    },
                    {
                        text: this.__('message.subject'),
                        value: 'subject'
                    },
                    {
                        text: this.__('message.type'),
                        value: 'type',
                    },
                    {
                        text: this.__('message.status'),
                        value: 'status',
                        sortable: false,
                    },
                    {
                        text: this.haveRight('email_templates.edit_email_template') ? this.__('message.actions') : null,
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
                totalTemplates: 0,
            }
        },
        methods: {
            getEmailTemplates() {
                this.show_loader = true;
                axios.get('/emails-templates-data', {params: {page: this.options.page, perPageItem: this.options.itemsPerPage, q: this.search}}).then((response) => {
                    this.items = response.data.data;
                    this.totalTemplates = response.data.totalTemplates;
                    this.show_loader = false;
                });
            },
            updatePage(pagination) {
                this.pagination = pagination;
                this.getEmailTemplates();
            },
            resetData() {
                setTimeout(() => [
                    this.getEmailTemplates()
                ], 200)
            }
        },
        components: {
            'add-btn': add_btn,
            'loader': loader
        },
        async mounted() {
            await this.getEmailTemplates();
        }
    }
</script>

<style scoped>

</style>
