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
            <v-row no-gutters>
                <v-col
                    cols="12"
                >
                    <v-card
                        :loading="show_loader"
                        elevation="10"
                    >
                        <v-card-title>
                            <h3>{{ template.action | capitalize}} {{ __('message.profile') }}</h3>
                            <back-btn></back-btn>
                        </v-card-title>
                        <div class="card-wrapper">
                            <form id="email-template-form">
                                <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            v-model="template.subject"
                                            :error-messages="requiredError(__('message.subject'), $v.template.subject)"
                                            :counter="50"
                                            :label="__('message.subject')"
                                            required
                                            @input="$v.template.subject.$touch()"
                                            @blur="$v.template.subject.$touch()"
                                            prepend-icon="subject"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-textarea
                                            v-model="template.body"
                                            filled
                                            :label="__('message.message_body')"
                                            auto-grow
                                            counter
                                            clearable
                                            :error-messages="requiredError(__('message.message_body'), $v.template.body)"
                                            @input="$v.template.body.$touch()"
                                            @blur="$v.template.body.$touch()"
                                            required
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        lg="6"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-select
                                            v-model="template.type"
                                            :items="types"
                                            item-text="type"
                                            item-value="value"
                                            :label="__('message.type')"
                                            prepend-icon="list"
                                            :error-messages="requiredError(__('message.type'), $v.template.type)"
                                            @input="$v.template.type.$touch()"
                                            @blur="$v.template.type.$touch()"
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="6"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-checkbox
                                            v-model="template.show_login_btn"
                                            :label="__('message.allow_login_btn')"
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <div class="buttons">
                                            <v-btn
                                                class="mr-4"
                                                @click="saveTemplate"
                                                outlined
                                                right
                                                :loading="show_loader"
                                            >
                                                {{ __('message.save') }}
                                                <v-icon
                                                    right
                                                    color="success"
                                                >
                                                    save
                                                </v-icon>
                                            </v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </form>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import back_btn from '../../ui/BackButton.vue'
    import {validationMixin} from 'vuelidate'
    import {required} from 'vuelidate/lib/validators'
    import loader from '../../ui/Loader.vue'

    export default {
        mixins: [validationMixin],
        name: "EmailTemplateForm",
        validations: {
            template: {
                subject: {required},
                body: {required},
                type: {required}
            }
        },
        data: () => ({
            template: {
                subject: '',
                body: '',
                type: '',
                show_login_btn: '',
                action: 'add',
            },
            types: [],
        }),
        methods: {
            requiredError(label, key) {
                const errors = []
                if (!key.$dirty) return errors
                !key.required && errors.push(this.__('message.mustRequired', [label]))
                return errors
            },
            typesList() {
                var types = [];
                types.push({type: this.__('message.admin_welcome'), value: 'admin_welcome'});
                types.push({type: this.__('message.customer_welcome'), value: 'customer_welcome'});
                types.push({type: this.__('message.customer_orders_list'), value: 'customer_orders_list'});
                types.push({type: this.__('message.admin_orders_list'), value: 'admin_orders_list'});
                types.push({type: this.__('message.payment_confirm_customer'), value: 'payment_confirm_customer'});
                types.push({type: this.__('message.payment_confirm_admin'), value: 'payment_confirm_admin'});

                this.types = types;
            },
            saveTemplate() {
                this.show_loader = true;
                this.$v.template.$touch();

                axios({
                    method: "POST",
                    url: '/save-email-template',
                    data: this.template
                }).then((response) => {
                    if (response.data.status === 'error' && response.data.error_type === 'validation') {
                        this.snackbar = true;
                        this.snackbar_icon = response.data.icon;
                        this.snackbar_text = response.data.error_message
                        return;
                    } else {
                        if (this.template.action === 'add') {
                            this.resetForm(this.template);
                            this.template.action = 'add';
                            this.$v.template.$reset();
                        }
                        this.snackbar = true;
                        this.snackbar_text = response.data.message;
                        this.snackbar_icon = response.data.icon;
                        this.snackbar_color = response.data.status;
                    }
                    this.show_loader = false;
                })
                if (this.template.action !== 'add') {
                    this.getEmailTemplate();
                }

            },
            getTemplate() {
                if (this.$route.params.id) {
                    this.show_loader = true;
                    axios.get('/email-template-data', {params: {id: this.$route.params.id}}).then((response) => {
                        this.template = response.data;
                        this.template.action = 'edit';
                        this.show_loader = false;
                    });
                }
            }
        },
        async mounted() {
            await this.getTemplate()
            this.typesList();
        },
        components: {
            'back-btn': back_btn,
            'loader': loader
        },
    }
</script>

<style scoped>

</style>
