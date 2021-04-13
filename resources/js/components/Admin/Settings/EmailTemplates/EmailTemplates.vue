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
                    {{ __('message.email_templates') }}
                    <add-btn :right="haveRight('email_templates.add_email_template')" :type="__('message.email_template')" :to="{name: 'addEmailTemplate'}"></add-btn>
                </v-card-title>
                <datatable
                    :headers="headers"
                    :items="items"
                    :view="null"
                    :edit="haveRight('email_templates.edit_email_template')"
                    :to="null"
                    edit_path="editEmailTemplate"
                    :type="__('message.email_template')"
                    @resetData="resetData"
                    :show_loader="show_loader"
                ></datatable>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import datatable from '../../layout/Datatable.vue'
    import add_btn from '../../ui/AddButton.vue'

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
                show_loader: true,
            }
        },
        methods: {
            getEmailTemplates() {
                this.show_loader = true;
                axios.get('/emails-templates-data').then((response) => {
                    this.items = response.data;
                    this.show_loader = false;
                });
            },
            resetData() {
                setTimeout(() => [
                    this.getEmailTemplates()
                ], 200)
            }
        },
        components: {
            'datatable': datatable,
            'add-btn': add_btn,
        },
        async mounted() {
            await this.getEmailTemplates();
        }
    }
</script>

<style scoped>

</style>
