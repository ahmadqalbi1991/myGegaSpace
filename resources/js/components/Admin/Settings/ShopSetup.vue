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
                        elevation="10"
                    >
                        <v-card-title>
                            <h3>{{ __('message.shop-setup') }}</h3>
                            <back-btn></back-btn>
                        </v-card-title>
                        <div class="card-wrapper">
                            <v-row>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-text-field
                                        v-model="shop_setting.shop_name"
                                        :counter="25"
                                        :label="__('message.shop-name')"
                                        required
                                        :readonly="has_data"
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
                                        v-model="shop_setting.shop_email"
                                        :label="__('message.shop-email')"
                                        required
                                        :readonly="has_data"
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
                                    <v-combobox
                                        v-model="shop_setting.country_name"
                                        :items="countries"
                                        item-value="id"
                                        item-text="name"
                                        :headers="countries"
                                        :label="__('message.country')"
                                        hide-selected
                                        small-chips
                                        :readonly="has_data"
                                        @change="getStates(shop_setting.country_id)"
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
                                        v-model="shop_setting.state_name"
                                        :items="states"
                                        item-text="name"
                                        item-value="id"
                                        :label="__('message.state')"
                                        hide-selected
                                        small-chips
                                        :readonly="has_data"
                                        @change="getCities(shop_setting.state_id)"
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
                                        v-model="shop_setting.city_name"
                                        :items="cities"
                                        item-text="name"
                                        item-value="id"
                                        :label="__('message.city')"
                                        hide-selected
                                        small-chips
                                        :readonly="has_data"
                                        prepend-icon="flag"
                                    ></v-combobox>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-row>
                                        <v-col
                                            cols="3"
                                        >
                                            <v-text-field
                                                v-model="country_code"
                                                required
                                                :readonly="has_data"
                                                prepend-icon="contact_phone"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="9"
                                        >
                                            <v-text-field
                                                v-model="shop_setting.contact_number"
                                                :counter="15"
                                                required
                                                :readonly="has_data"
                                                :label="__('message.contact-number')"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-textarea
                                        v-model="shop_setting.address"
                                        :label="__('message.address')"
                                        auto-grow
                                        counter
                                        rows="1"
                                        :readonly="has_data"
                                        row-height="15"
                                        prepend-icon="home"
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
                                    <v-text-field
                                        v-model="shop_setting.facebook_url"
                                        :label="__('message.fb-url')"
                                        :readonly="has_data"
                                        prepend-icon="facebook"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-text-field
                                        v-model="shop_setting.linkedin_url"
                                        :label="__('message.lkd-url')"
                                        :readonly="has_data"
                                        prepend-icon="fab fa-linkedin"
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
                                        v-model="shop_setting.twitter_url"
                                        :label="__('message.twt-url')"
                                        :readonly="has_data"
                                        prepend-icon="facebook"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-text-field
                                        v-model="shop_setting.google_url"
                                        :label="__('message.gglp-url')"
                                        :readonly="has_data"
                                        prepend-icon="fab fa-google-plus-square"
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
                                        v-model="shop_setting.instagram_url"
                                        :label="__('message.insta-url')"
                                        :readonly="has_data"
                                        prepend-icon="fab fa-instagram"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-text-field
                                        v-model="shop_setting.youtube_url"
                                        :label="__('message.utube-url')"
                                        :readonly="has_data"
                                        prepend-icon="fab fa-youtube"
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
                                    <v-checkbox
                                        v-model="shop_setting.brands_allow"
                                        :label="__('message.brands_allowed')"
                                    ></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            lg="8"
                                            md="6"
                                            sm="12"
                                        >
                                            <v-file-input
                                                accept="image/*"
                                                :label="__('message.logo')"
                                                prepend-icon="mdi-camera"
                                                counter
                                                show-size
                                                :disabled="has_data"
                                                v-model="shop_setting.logo_name"
                                                type="file"
                                                @change="createLogoData"
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
                                                    :src="this.logo_placeholder"
                                                    :alt="shop_setting.shop_name"
                                                >
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            lg="8"
                                            md="6"
                                            sm="12"
                                        >
                                            <v-file-input
                                                accept="image/*"
                                                :label="__('message.fav-icon')"
                                                prepend-icon="mdi-camera"
                                                counter
                                                show-size
                                                :disabled="has_data"
                                                v-model="shop_setting.favicon_name"
                                                type="file"
                                                @change="createFaviconData"
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
                                                    :src="this.favicon_placeholder"
                                                    :alt="shop_setting.shop_name"
                                                >
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                    cols="12"
                                >
                                    <v-expansion-panels inset>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>{{ __("message.home-setup") }}
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <div class="card-wrapper">
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.new_products"
                                                        :disabled="has_data"
                                                        :label="__('message.new-products-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.services"
                                                        :disabled="has_data"
                                                        :label="__('message.service-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.categories"
                                                        :disabled="has_data"
                                                        :label="__('message.categories-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.contact_section"
                                                        :disabled="has_data"
                                                        :label="__('message.contact-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.featured_products"
                                                        :disabled="has_data"
                                                        :label="__('message.featured-products-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.subscribe"
                                                        :disabled="has_data"
                                                        :label="__('message.subscribe-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.recent_products"
                                                        :disabled="has_data"
                                                        :label="__('message.recent-products-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.customer_section"
                                                        :disabled="has_data"
                                                        :label="__('message.customer-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
                                                    <v-switch
                                                        color="primary"
                                                        value
                                                        v-model="shop_setting.partners"
                                                        :disabled="has_data"
                                                        :label="__('message.partner-section')"
                                                        inset
                                                        input-value="true"
                                                    ></v-switch>
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
                                    <v-expansion-panels inset>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>{{ __("message.about-us") }}
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <div class="card-wrapper">
                                                    <v-textarea
                                                        v-model="shop_setting.about_us"
                                                        :label="__('message.about-us')"
                                                        counter
                                                        rows="10"
                                                        :readonly="has_data"
                                                    ></v-textarea>
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
                                            v-if="has_data"
                                            class="mr-4"
                                            @click="saveSetting"
                                            right
                                            outlined
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
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import back_btn from '../ui/BackButton.vue'
    import {validationMixin} from 'vuelidate'
    import {required, sameAs, maxLength, email, numeric, isUnique} from 'vuelidate/lib/validators'
    import loader from '../ui/Loader.vue'

    export default {
        name: "ShopSetup",
        data: () => ({
            shop_setting: {
                shop_name: '',
                shop_email: '',
                country_id: '',
                state_id: '',
                city_id: '',
                country_code: '',
                contact_number: '',
                address: '',
                facebook_url: '',
                linkedin_url: '',
                twitter_url: '',
                instagram_url: '',
                google_url: '',
                about_us: '',
                youtube_url: '',
                logo: [],
                logo_name: '',
                favicon: [],
                favicon_name: '',
                new_products: null,
                partners: null,
                services: null,
                categories: null,
                contact_section: null,
                featured_products: null,
                subscribe: null,
                recent_products: null,
                customer_section: null,
                brands_allow: null,
                action: 'add'

            },
            logo_placeholder: '',
            favicon_placeholder: '',
            has_data: false
        }),
        methods: {
            makeEditable() {
                if (this.has_data) {
                    this.has_data = false;
                } else {
                    this.has_data = true;
                }
            },
            makeLogo() {
                this.logo_placeholder = URL.createObjectURL(this.shop_setting.logo_name);
            },
            makeFavicon() {
                this.favicon_placeholder = URL.createObjectURL(this.shop_setting.favicon_name);
            },
            createLogoData(file) {
                let reader = new FileReader();
                this.makeLogo();
                reader.onload = (file) => {
                    console.log(reader.result)
                    this.shop_setting.logo = reader.result;
                };
                reader.readAsDataURL(file);
            },
            createFaviconData(file) {
                let reader = new FileReader();
                this.makeFavicon();
                reader.onload = (file) => {
                    console.log(reader.result)
                    this.shop_setting.favicon = reader.result;
                };
                reader.readAsDataURL(file);
            },
            loadSetting() {
                axios.get('/shop-setting').then((data) => {
                    if(data.data.length != 0) {
                        this.shop_setting = data.data;
                        if (data.data.logo_path != null) {
                            this.logo_placeholder = data.data.logo_path;
                        }
                        if (data.data.favicon) {
                            this.favicon_placeholder = data.data.favicon_path;
                        }
                        this.getCountries();
                        this.getStates(this.shop_setting.country_id);
                        this.getCities(this.shop_setting.state_id);
                        this.show_loader = false;
                        this.has_data = true;
                        this.shop_setting.action = 'edit';
                    }
                })
            },
            saveSetting() {
                this.show_loader = true;
                axios({
                    method: 'POST',
                    url: '/save-setting',
                    data: this.shop_setting
                }).then((response) => {
                    this.snackbar = true;
                    this.snackbar_text = response.data.message;
                    this.snackbar_icon = response.data.icon;
                    this.snackbar_color = response.data.status;
                    this.show_loader = false;
                })
                if (this.shop_setting.action !== 'add') {
                    this.loadSetting();
                }
            },
        },
        async mounted() {
            this.getCountries();
            await this.loadSetting();
        },
        components: {
            'back-btn': back_btn,
            'loader': loader
        }
    }
</script>

<style scoped>

</style>
