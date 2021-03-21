<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <h2 class="text-uppercase text-swing m-0 text-dark">{{ __('admin.shop-setup')}}</h2>
                    </v-col>
                </v-row>
                <v-card
                    :loading="haveData"
                >
                                            <div class="card">
                                                <div class="card-body">
                                                    <p>{{ __('admin.shop-setup-note') }}</p>
                                                    <form @submit.prevent="saveSetting">
                                                        <div class="shop-form">
                                                            <div class="row">
                                                                <div class="col-sm-4">
                                                                    <div class="form-group">
                                                                        <label for="country">{{ __('shop.country') }}</label>
                                                                        <select v-model="form.country" :class="{ 'is-invalid': form.errors.has('country') }" name="country" id="country" class="form-control" @change="getStates(form.country)">
                                                                            <option value="0" selected>{{ __('shop.select_country') }}</option>
                                                                            <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name | captilize }}</option>
                                                                        </select>
                                                                        <has-error :form="form" field="country"></has-error>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-4">
                                                                    <div class="form-group">
                                                                        <label for="states">{{ __('shop.state') }}</label>
                                                                        <select v-model="form.state" :class="{ 'is-invalid': form.errors.has('state') }" name="state" id="state" class="form-control" @change="getCities(form.state)">
                                                                            <option value="0" selected>{{ __('shop.select_state') }}</option>
                                                                            <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name | captilize}}</option>
                                                                        </select>
                                                                        <has-error :form="form" field="state"></has-error>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-4">
                                                                    <div class="form-group">
                                                                        <label for="city">{{ __('shop.city') }}</label>
                                                                        <select v-model="form.city" :class="{ 'is-invalid': form.errors.has('city') }"  @change="getCountryCode(form.country)" name="city" id="city" class="form-control">
                                                                            <option value="0" selected>{{ __('shop.select_city') }}</option>
                                                                            <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name | captilize }}</option>
                                                                        </select>
                                                                        <has-error :form="form" field="city"></has-error>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="contact_number">{{ __('shop.contact-number') }} <span class="required_label">*</span></label>
                                                                        <div class="row">
                                                                            <div class="col-md-3">
                                                                                <input type="text" v-model="form.country_code" name="country_code" id="country_code" class="form-control" placeholder="Code">
                                                                            </div>
                                                                            <div class="col-md-9">
                                                                                <input v-model="form.contact_number" :class="{ 'is-invalid': form.errors.has('contact_number') }" type="text" class="form-control" name="contact_number" id="contact_number">
                                                                                <has-error :form="form" field="contact_number"></has-error>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="address">{{ __('shop.address') }} <span class="required_label">*</span></label>
                                                                        <input v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }" type="text" class="form-control" name="address" id="address" placeholder="Please enter address">
                                                                        <has-error :form="form" field="address"></has-error>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="facebook_url">{{ __('admin.fb-url') }}</label>
                                                                        <div class="input-group mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <span class="input-group-text" id="basic-addon1"><i class="fab fa-facebook-f"></i></span>
                                                                        </div>
                                                                            <input v-model="form.facebook_url" :class="{ 'is-invalid': form.errors.has('facebook_url') }" type="text" name="facebook_url" id="facebook_url" class="form-control" placeholder="Please enter Facebook URL">
                                                                        </div>
                                                                        <has-error :form="form" field="facebook_url"></has-error>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="linkedin_url">{{ __('admin.lkd-url') }}</label>
                                                                        <div class="input-group mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <span class="input-group-text" id="linked_icon"><i class="fab fa-linkedin"></i></span>
                                                                        </div>
                                                                            <input v-model="form.linkedin_url" :class="{ 'is-invalid': form.errors.has('linkedin_url') }" type="text" name="linkedin_url" id="linkedin_url" class="form-control" placeholder="Please enter Linkedin URL">
                                                                        </div>
                                                                        <has-error :form="form" field="linkedin_url"></has-error>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="twitter_url">{{ __('admin.twt-url') }}</label>
                                                                        <div class="input-group mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <span class="input-group-text" id="basic-addon1"><i class="fab fa-twitter"></i></span>
                                                                        </div>
                                                                            <input v-model="form.twitter_url" :class="{ 'is-invalid': form.errors.has('twitter_url') }" type="text" name="twitter_url" id="twitter_url" class="form-control" placeholder="Please enter Twitter URL">
                                                                        </div>
                                                                        <has-error :form="form" field="twitter_url"></has-error>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="instagram_url">{{ __('admin.insta-url') }}</label>
                                                                        <div class="input-group mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <span class="input-group-text" id="basic-addon1"><i class="fab fa-instagram"></i></span>
                                                                        </div>
                                                                            <input v-model="form.instagram_url" :class="{ 'is-invalid': form.errors.has('instagram_url') }" type="text" name="instagram_url" id="instagram_url" class="form-control" placeholder="Please enter Instagram URL">
                                                                        </div>
                                                                        <has-error :form="form" field="instagram_url"></has-error>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="google_url">{{ __('admin.gglp-url') }}</label>
                                                                        <div class="input-group mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <span class="input-group-text" id="basic-addon1"><i class="fab fa-google-plus-g"></i></span>
                                                                        </div>
                                                                            <input v-model="form.google_url" :class="{ 'is-invalid': form.errors.has('google_url') }" type="text" name="google_url" id="google_url" class="form-control" placeholder="Please enter Google+ URL">
                                                                        </div>
                                                                        <has-error :form="form" field="google_url"></has-error>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="youtube_url">{{ __('admin.utube-url') }}</label>
                                                                        <div class="input-group mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <span class="input-group-text" id="basic-addon1"><i class="fab fa-youtube"></i></span>
                                                                        </div>
                                                                            <input v-model="form.youtube_url" :class="{ 'is-invalid': form.errors.has('youtube_url') }" type="text" name="youtube_url" id="youtube_url" class="form-control" placeholder="Please enter Youtube URL">
                                                                        </div>
                                                                        <has-error :form="form" field="youtube_url"></has-error>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="site-logo">{{ __('admin.logo') }} <span class="required_label">*</span></label>
                                                                        <div class="file-wrapper">
                                                                            <input v-on:change="previewFileLogo" type="file" name="site_logo" id="site_logo">
                                                                            <div class="place_holder">
                                                                                <img
                                                                                :src="logo_img_placeholder"
                                                                                :id="logo_img">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="site-favicon">{{ __('admin.fav-icon') }} <span class="required_label">*</span></label>
                                                                        <div class="file-wrapper">
                                                                            <input type="file" name="site_favicon" v-on:change="previewFileFavicon" id="site_favicon">
                                                                            <div class="place_holder">
                                                                                <img :src="favicon_img_placeholder">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <div class="form-group">
                                                                        <label for="form-group">{{ __('shop.about-us') }}</label>
                                                                        <editor
                                                                        class="form-control"
                                                                        api-key="rvycvj06b5wb6aw8kx5gxthyfx5mb7iql0vnxsorwfhmyj56"
                                                                        :init="{
                                                                            height: 250,
                                                                            menubar: false,
                                                                            plugins: [
                                                                            'advlist autolink lists link image charmap print preview anchor',
                                                                            'searchreplace visualblocks code fullscreen',
                                                                            'insertdatetime media table paste code help wordcount'
                                                                            ],
                                                                            toolbar:
                                                                            'undo redo | formatselect | bold italic backcolor | \
                                                                            alignleft aligncenter alignright alignjustify | \
                                                                            bullist numlist outdent indent | removeformat | help'
                                                                        }"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <input type="hidden" name="action" v-model="form.action">
                                                            <input type="hidden" name="action" v-model="form.id">
                                                            <button type="submit" class="btn btn-success admin-btn float-right">{{ __('admin.save-setting') }}</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
<!--    <div class="content">-->
<!--        <shop-loader :loader="show_loader"></shop-loader>-->
<!--        <div class="container-fluid">-->
<!--            <div class="container">-->
<!--                <div class="row mb-2 title-header">-->
<!--                    <div class="col-sm-12">-->
<!--                        <h2 class="m-0 text-dark"></h2>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="row justify-content-center">-->
<!--                    <div class="col-sm-12">-->

<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>&lt;!&ndash; /.container-fluid &ndash;&gt;-->
<!--    </div>-->
</template>

<script>
    import shop_loader from './layout/Loader.vue'
    import editor from '@tinymce/tinymce-vue'
    export default {
        props: ['loader'],
        data() {
            return {
                form: new Form({
                    id: null,
                    shop_name: '',
                    shop_email: '',
                    country: '',
                    state: '',
                    city: '',
                    country_code: '',
                    contact_number: '',
                    address: '',
                    facebook_url: '',
                    linkedin_url: '',
                    twitter_url: '',
                    instagram_url: '',
                    google_url: '',
                    youtube_url: '',
                    logo: null,
                    favicon: '',
                    action: 'add'
                }),
                logo_img: 'logo-img',
                show_loader: true,
                haveData: true,
            }
        },
        methods: {
            previewFileLogo(event) {
                const img_preview = event.target.files[0];
                if (!img_preview) {
                    return false;
                }
                else {
                    this.createImgLogo(img_preview);
                    this.logo_img_placeholder = URL.createObjectURL(img_preview);
                }
            },
            previewFileFavicon(event) {
                const img_preview = event.target.files[0];
                if (!img_preview) {
                    return false;
                }
                else {
                    this.createImgFavicon(img_preview);
                    this.favicon_img_placeholder = URL.createObjectURL(img_preview);
                }
            },
            saveSetting() {
                this.show_loader = true;
                this.form.post('/save-setting').then((response) => {
                    if (this.form.action == 'add') {
                        this.form.reset();
                    }
                    toast.fire({
                        icon: response.data['status'],
                        title: response.data['message']
                    });
                }).catch((response) => {
                    toast.fire({
                        icon: "error",
                        title: "Something went wrong"
                    });
                });
                this.show_loader = false;
            },
            createImgLogo(file) {
                let reader = new FileReader();
                reader.onload = (file) => {
                    this.form.logo = reader.result;
                };
                reader.readAsDataURL(file);
            },
            createImgFavicon(file) {
                let reader = new FileReader();
                reader.onload = (file) => {
                    this.form.favicon = reader.result;
                };
                reader.readAsDataURL(file);
            },
            loadSetting() {
                axios.get('/shop-setting').then((data) => {
                    if(data.data.length != 0) {
                        this.form.fill(data.data);
                        if (data.data.logo_path != null) {
                            this.logo_img_placeholder = data.data.logo_path;
                        }
                        if (data.data.favicon) {
                            this.favicon_img_placeholder = data.data.favicon_path;
                        }
                        this.getCountries();
                        this.getStates(this.form.country);
                        this.getCities(this.form.state);
                        this.getCountryCode(this.form.country);
                        this.form.action = 'update';
                        this.haveData = false;
                    }
                    this.show_loader = false;
                });
            },
        },
        components: {
            'shop-loader': shop_loader,
            'editor': editor
        },
        created() {
        },
        async mounted() {
            this.getCountries();
            await this.loadSetting();
        }
    }
</script>
