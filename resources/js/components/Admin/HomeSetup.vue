<template>
    <div class="content">
        <shop-loader :loader="show_loader"></shop-loader>
        <div class="container-fluid">
            <div class="container">
                <div class="row mb-2 title-header">
                    <div class="col-sm-12">
                        <h2 class="m-0 text-dark">{{ __('admin.home-setup')}}</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <p>{{ __('admin.home-setup-note') }}</p>
                                <form @submit.prevent="saveSetting">
                                    <div v-show="shop_data_is_null">
                                        <div class="row justify-content-md-center">
                                            <div class="col-sm-8">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{{ __('shop.oh')}}</h5>
                                                        <p class="card-text">{{ __('admin.save-general-setting-message')}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-form">
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.new-products-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="new_products" v-model="form.new_products" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="new_products"></label>
                                        </div>
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.partner-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="partner" v-model="form.partners" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="partner"></label>
                                        </div>
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.service-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="service" v-model="form.services" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="service"></label>
                                        </div>      
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.categories-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="categories" v-model="form.categories" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="categories"></label>
                                        </div>        
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.contact-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="contact_section" v-model="form.contact_section" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="contact_section"></label>
                                        </div>             
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.featured-products-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="featured" v-model="form.featured_products" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="featured"></label>
                                        </div>             
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.subscribe-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="subscribe_section" v-model="form.subscribe" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="subscribe_section"></label>
                                        </div>
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.recent-products-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="recent_products" v-model="form.recent_products" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="recent_products"></label>
                                        </div>
                                        <div class="checkbox-wrapper">
                                            <span>{{ __('admin.customer-section')}} &nbsp;</span>
                                            <input class="tgl tgl-skewed" id="customer_section" v-model="form.customer_section" type="checkbox">
                                            <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="customer_section"></label>
                                        </div>
                                        <input type="hidden" name="action" v-model="form.action">
                                        <input type="hidden" name="action" v-model="form.id">
                                        <button type="submit" class="btn btn-success admin-btn float-right">{{ __('admin.save-setting') }}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </div>
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
                    new_products: null,  
                    partners: null,
                    services: null,
                    categories: null,
                    contact_section: null,
                    featured_products: null,
                    subscribe: null,
                    recent_products: null,
                    customer_section: null,
                    action: 'add'
                }),
                logo_img: 'logo-img',
                show_loader: true,
                shop_data_is_null: true
            }
        },
        methods: {
            previewFileLogo(event) {
                const img_preview = event.target.files[0];
                if (!img_preview) {
                    return false;
                }
                else {
                    this.createImg(img_preview);
                    this.logo_img_placeholder = URL.createObjectURL(img_preview); 
                }
            },
            previewFileFavicon(event) {
                const img_preview = event.target.files[0];
                this.favicon_img_placeholder = URL.createObjectURL(img_preview);
            },
            saveSetting() {
                this.show_loader = true;
                this.form.post('/save-setting').then(() => {
                    this.show_loader = false;
                });
            },
            createImg(file) {
                let reader = new FileReader();
                reader.onload = (file) => {
                    this.form.logo = reader.result;
                };
                reader.readAsDataURL(file);
            },
            loadSetting() {
                axios.get('/shop-setting').then((data) => {
                    if(data.data.length != 0) {
                        this.form.fill(data.data);
                        this.shop_data_is_null = false;
                        this.form.action = 'update';
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
            await this.loadSetting();
        }
    }
</script>
