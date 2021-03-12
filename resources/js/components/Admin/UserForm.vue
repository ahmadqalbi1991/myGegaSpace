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
            <v-row no-gutters>
                <v-col
                    cols="12"
                >
                    <v-card
                        :loading="show_loader"
                        elevation="10"
                    >
                        <v-card-title>
                            <h3>{{ user.action | captilize}} {{ __('message.profile') }}</h3>
                            <back-btn></back-btn>
                        </v-card-title>
                        <div class="card-wrapper">
                            <form id="user-form">
                                <v-row>
                                    <v-col
                                        cols="12"
                                        lg="6"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model="user.first_name"
                                            :error-messages="nameError(__('message.first_name'), $v.user.first_name)"
                                            :counter="10"
                                            :label="__('message.first_name')"
                                            required
                                            @input="$v.user.first_name.$touch()"
                                            @blur="$v.user.first_name.$touch()"
                                            prepend-icon="subject"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="6"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model="user.last_name"
                                            :error-messages="nameError(__('message.last_name'), $v.user.last_name)"
                                            :counter="10"
                                            :label="__('message.last_name')"
                                            required
                                            @input="$v.user.last_name.$touch()"
                                            @blur="$v.user.last_name.$touch()"
                                            prepend-icon="subject"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        lg="6"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model="user.email"
                                            :error-messages="emailErrors(__('message.email'))"
                                            :label="__('message.email')"
                                            required
                                            :disabled="hasData && !!user.email"
                                            @input="$v.user.email.$touch()"
                                            @blur="$v.user.email.$touch()"
                                            prepend-icon="alternate_email"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="6"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model="user.confirm_email"
                                            :error-messages="confirmField(__('message.confirm_email'), $v.user.confirm_email)"
                                            :label="__('message.confirm_email')"
                                            required
                                            :disabled="hasData && !!user.confirm_email"
                                            @input="$v.user.confirm_email.$touch()"
                                            @blur="$v.user.confirm_email.$touch()"
                                            prepend-icon="alternate_email"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <label>{{ __('message.gender') }}</label>
                                        <v-radio-group
                                            v-model="user.gender"
                                            row
                                            prepend-icon="fas fa-venus-mars"
                                        >
                                            <v-radio
                                                :label="__('message.male')"
                                                value="male"
                                            ></v-radio>
                                            <v-radio
                                                :label="__('message.female')"
                                                value="female"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-select
                                            v-model="user.martial_status"
                                            :items="martial_statuses"
                                            :label="__('message.martial_status')"
                                            prepend-icon="list"
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-select
                                            v-model="user.role"
                                            :items="roles"
                                            :label="__('message.role')"
                                            prepend-icon="list"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-combobox
                                            v-model="user.country_name"
                                            :items="countries"
                                            :label="__('message.country')"
                                            hide-selected
                                            small-chips
                                            @change="getStates(user.country_name)"
                                            prepend-icon="flag"
                                        ></v-combobox>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-combobox
                                            v-model="user.state_name"
                                            :items="states"
                                            :label="__('message.state')"
                                            hide-selected
                                            small-chips
                                            @change="getCities(user.state_name)"
                                            prepend-icon="flag"
                                        ></v-combobox>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-combobox
                                            v-model="user.city_name"
                                            :items="cities"
                                            :label="__('message.city')"
                                            hide-selected
                                            small-chips
                                            prepend-icon="flag"
                                        ></v-combobox>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-checkbox
                                            v-model="user.is_admin"
                                            :label="__('message.is_admin')"
                                            prepend-icon="admin_panel_settings"
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-menu
                                            ref="menu"
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="user.date_of_birth"
                                                    label="Birthday date"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                ref="picker"
                                                v-model="user.date_of_birth"
                                                :max="new Date().toISOString().substr(0, 10)"
                                                min="1950-01-01"
                                                @change="save"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model="user.username"
                                            :error-messages="nameError(__('message.username'), $v.user.username)"
                                            :counter="20"
                                            :disabled="hasData && !!user.username"
                                            :label="__('message.username')"
                                            required
                                            @input="$v.user.username.$touch()"
                                            @blur="$v.user.username.$touch()"
                                            prepend-icon="fas fa-user"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        lg="6"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model="user.contact_number"
                                            :error-messages="nameError(__('message.contact-number'), $v.user.contact_number)"
                                            :counter="20"
                                            :label="__('message.contact-number')"
                                            required
                                            @input="$v.user.contact_number.$touch()"
                                            @blur="$v.user.contact_number.$touch()"
                                            prepend-icon="contact_phone"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="6"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-textarea
                                            v-model="user.address"
                                            :label="__('message.address')"
                                            auto-grow
                                            counter
                                            rows="1"
                                            row-height="15"
                                            prepend-icon="home"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        lg="8"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-file-input
                                            accept="image/*"
                                            :label="__('message.choose_profile_pic')"
                                            prepend-icon="mdi-camera"
                                            counter
                                            show-size
                                            v-model="user.image_name"
                                            type="file"
                                            @change="createImgData"
                                        ></v-file-input>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="6"
                                        sm="12"
                                    >
                                        <v-avatar
                                            size="100"
                                        >
                                            <img
                                                :src="this.user_img_placeholder"
                                                :alt="user.name"
                                            >
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-expansion-panels inset>
                                            <v-expansion-panel>
                                                <v-expansion-panel-header>{{ __("message.rights") }}
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    <div class="card-wrapper">
                                                        <v-treeview
                                                            selectable
                                                            selected-color="primary"
                                                            open-on-click
                                                            :items="items"
                                                            @update:active="updateTreeview"
                                                            @input="updateTreeview"
                                                            :value="user.rights"
                                                        ></v-treeview>
                                                    </div>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <div class="buttons">
                                            <v-btn
                                                class="mr-4"
                                                @click="saveUser"
                                                color="success"
                                                right
                                                :loading="show_loader"
                                            >
                                                {{ __('message.save') }}
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
    import back_btn from './ui/BackButton.vue'
    import {validationMixin} from 'vuelidate'
    import {required, sameAs, maxLength, email, numeric, isUnique} from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        validations: {
            user: {
                first_name: {required, maxLength: maxLength(10)},
                username: {required, maxLength: maxLength(20) },
                contact_number: {required, maxLength: maxLength(20)},
                last_name: {required, maxLength: maxLength(10)},
                email: {required, email},
                confirm_email: {required, sameAsEmail: sameAs('email')}
            }
        },
        data: () => ({
            martial_statuses: [
                'single',
                'married',
                'divorced',
                'separated',
            ],
            roles: [],
            user: {
                id: '',
                name: '',
                first_name: '',
                last_name: '',
                email: '',
                confirm_email: '',
                email_verified_at: '',
                gender: '',
                image: [],
                image_name: '',
                rights: [],
                role: '',
                action: 'add',
                address: '',
                contact_number: '',
                martial_status: '',
                date_of_birth: '',
                city_name: '',
                state_name: '',
                country_name: '',
                hash_id: '',
                username: ''
            },
            logs: [],
            hasData: false,
            show_loader: false,
            user_img_placeholder: '',
            all_rights: [],
            items: []
        }),
        methods: {
            makeImage() {
                this.user_img_placeholder = URL.createObjectURL(this.user.image_name);
            },
            createImgData(file) {
                let reader = new FileReader();
                this.makeImage();
                reader.onload = (file) => {
                    this.user.image = reader.result;
                };
                reader.readAsDataURL(file);
            },
            save(date) {
                this.$refs.menu.save(date)
            },
            nameError(label, key) {
                const errors = []
                if (!key.$dirty) return errors
                !key.maxLength && errors.push(this.__('message.maxLength', [label]))
                !key.required && errors.push(this.__('message.mustRequired', [label]))
                return errors
            },
            emailErrors(label) {
                const errors = []
                if (!this.$v.user.email.$dirty) return errors
                !this.$v.user.email.email && errors.push(this.__('message.mustBeValid', [label]))
                !this.$v.user.email.required && errors.push(this.__('message.mustRequired', [label]))
                return errors
            },
            confirmField(label, key) {
                const errors = []
                if (!key.$dirty) return errors
                !key.sameAsEmail && errors.push(this.__('message.mustBeSame', [label]))
                !key.required && errors.push(this.__('message.mustRequired', [label]))
                return errors
            },
            rolesList() {
                var roles = [];
                roles.push(this.__('message.super_admin'))
                roles.push(this.__('message.admin'))
                roles.push(this.__('message.accountant'))
                roles.push(this.__('message.manager'))
                roles.push(this.__('message.customer'))
                roles.push(this.__('message.user'))

                this.roles = roles;
            },
            saveUser() {
                this.show_loader = true;
                this.$v.user.$touch();
                axios({
                    method: 'POST',
                    url: '/save-user',
                    data: this.user
                }).then((response) => {
                    if (response.data.status == 'error' && response.data.error_type == 'validation') {
                        this.snackbar = true;
                        this.snackbar_icon = response.data.icon;
                        this.snackbar_text = response.data.error_message
                        return;
                    } else {
                        if (this.user.action == 'add') {
                            this.resetForm(this.user);
                            this.user.action = 'add';
                            this.$v.user.$reset();
                        }
                        this.snackbar = true;
                        this.snackbar_text = response.data.message;
                        this.snackbar_icon = response.data.icon;
                        this.snackbar_color = response.data.status;
                    }
                    this.show_loader = false;
                })
                if (this.user.action != 'add') {
                    this.getUser();
                }
            },
            getUser() {
                if (this.$route.params.id) {
                    axios.get('/user-data', {params: {id: this.$route.params.id, locked: false}}).then((response) => {
                        this.user = response.data.user;
                        this.user.rights = response.data.user.rights.values;
                        this.logs = response.data.log;
                        this.show_loader = false;
                        this.hasData = true;
                        this.user.action = 'edit';
                        this.user.confirm_email = this.user.email;
                        this.getStates(this.user.country_name);
                        this.getCities(this.user.state_name);
                        this.checkImg();
                    });
                } else {
                    this.user_img_placeholder = '../img/placeholder.png'
                }
                this.items = window.all_rights.treeview;
            },
            checkImg() {
                if (this.user.image) {
                    this.user_img_placeholder = this.user.image;
                } else {
                    if (this.user.gender) {
                        if (this.user.gender == 'male') {
                            this.user_img_placeholder = '../img/man.png'
                        }

                        if (this.user.gender == 'female') {
                            this.user_img_placeholder = '../img/woman.png'
                        }
                    } else {
                        this.user_img_placeholder = '../img/placeholder.png'
                    }
                }
            },
            updateTreeview(item) {
                this.user.rights = item;
            }
        },
        components: {
            'back-btn': back_btn
        },
        async mounted() {
            await this.getUser();
            this.rolesList();
            this.getCountries();
        }
    }
</script>
