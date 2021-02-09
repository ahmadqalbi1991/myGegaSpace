<template>
    <div>
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
                            <form>
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
                                            :error-messages="emailErrors()"
                                            :label="__('message.email')"
                                            required
                                            @input="$v.user.email.$touch()"
                                            @blur="$v.user.email.$touch()"
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
                                            @input="$v.user.confirm_email.$touch()"
                                            @blur="$v.user.confirm_email.$touch()"
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
                                        <v-checkbox
                                            v-model="user.is_admin"
                                            :label="__('message.is_admin')"
                                        ></v-checkbox>
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
                                        <v-select
                                            v-model="user.blood_group"
                                            :items="blood_groups"
                                            :label="__('message.blood_group')"
                                        ></v-select>
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
                                            v-model="user.identity_card_number"
                                            :error-messages="checkNumeric(__('message.cnic'), $v.user.identity_card_number)"
                                            :label="__('message.cnic')"
                                            @input="$v.user.identity_card_number.$touch()"
                                            @blur="$v.user.identity_card_number.$touch()"
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
                                        <v-text-field
                                            v-model="user.username"
                                            :error-messages="nameError(__('message.username'), $v.user.username)"
                                            :counter="10"
                                            :label="__('message.username')"
                                            required
                                            @input="$v.user.username.$touch()"
                                            @blur="$v.user.username.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
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
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        lg="4"
                                        md="4"
                                        sm="12"
                                    >
                                        <v-textarea
                                            v-model="user.address"
                                            :label="__('message.address')"
                                            auto-grow
                                            counter
                                            rows="1"
                                            row-height="15"
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
                                            v-model="user.image"
                                            @change="makeImage"
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
                                <v-btn
                                    class="mr-4"
                                    @click="submit"
                                >
                                    submit
                                </v-btn>
                                <v-btn @click="clear">
                                    clear
                                </v-btn>
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
    import { validationMixin } from 'vuelidate'
    import { required, sameAs, maxLength, email, numeric } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        validations: {
            user: {
                first_name: { required, maxLength: maxLength(10) },
                username: { required, maxLength: maxLength(10) },
                contact_number: { required, maxLength: maxLength(20) },
                last_name: { required, maxLength: maxLength(10) },
                email: { required, email },
                confirm_email : { required, sameAsEmail: sameAs('email') },
                identity_card_number: { numeric },
            },
            select: { required },
            checkbox: {
                checked (val) {
                    return val
                },
            },
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
                image: '',
                rights: '',
                role: '',
                action: 'add',
                address: '',
                contact_number: '',
                blood_group: '',
                identity_card_number: '',
                martial_status: '',
                date_of_birth: '',
                city_name: '',
                state_name: '',
                country_name: '',
                hash_id: '',
                username: ''
            },
            logs: [],
            isEditable: false,
            show_loader: true,
            user_img_placeholder: '',
            all_rights: [],
            values: [],
            items: []
        }),
        methods: {
            makeImage(event) {
                // const img_preview = event.target.files[0];
                this.user_img_placeholder = URL.createObjectURL(this.user.image);
                // if (!img_preview) {
                //     return false;
                // } else {
                //     this.createImgData(img_preview);
                //
                // }
            },
            createImgData(file) {
                let reader = new FileReader();
                reader.onload = (file) => {
                    this.user.image = reader.result;
                };
                reader.readAsDataURL(file);
            },
            checkNumeric (label, key) {
                const errors = []
                if (!key.$dirty) return errors
                !key.numeric && errors.push(this.__('message.mustNumeric', [label]))
                return errors
            },
            save (date) {
                this.$refs.menu.save(date)
            },
            nameError (label, key) {
                const errors = []
                if (!key.$dirty) return errors
                !key.maxLength && errors.push(this.__('message.maxLength', [label]))
                !key.required && errors.push(this.__('message.mustRequired', [label]))
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.user.email.$dirty) return errors
                !this.$v.user.email.email && errors.push('Must be valid e-mail')
                !this.$v.user.email.required && errors.push('E-mail is required')
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
            submit () {
                this.$v.$touch()
            },
            getUser() {
                this.show_loader = true;
                var user_id = null;
                if (this.$route.params.id) {
                    user_id = this.$route.params.id
                }
                axios.get('/user-data', {params: {id: user_id}}).then((response) => {
                    this.user = response.data.user;
                    this.items = response.data.user.rights.treeview;
                    this.values = response.data.user.rights.values;
                    this.logs = response.data.log;
                    this.show_loader = false;
                    this.isEditable = true;
                    this.user.action = 'edit';
                    this.user.confirm_email = this.user.email;
                    this.getStates(this.user.country_name);
                    this.getCities(this.user.state_name);
                    this.checkImg();
                });
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
