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
                    {{ __('message.brands') }}
                    <v-btn
                        color="primary"
                        absolute
                        right
                        dark
                        @click="show_dialog = true"
                    >
                        {{ __('message.add') + ' ' + __('message.brand') }}
                        <v-icon
                            right
                        >
                            mdi-plus
                        </v-icon>&nbsp;
                    </v-btn>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :options.sync="options"
                    @pagination="updatePage"
                    :server-items-length="totalBrands"
                    :search="search"
                    :custom-filter="getBrands"
                    elevation="10"
                >
                    <template v-slot:top>
                        <v-text-field
                            v-model="search"
                            :label="__('message.search_brand')"
                            class="mx-4"
                            @input="getBrands"
                            @click="getBrands"
                            @blur="getBrands"
                            append-icon="search"
                        ></v-text-field>
                    </template>
                    <template v-slot:item.image="{item}">
                        <div class="m-5">
                            <v-avatar
                                v-if="item.image"
                                size="50"
                            >
                                <img
                                    :src="item.image"
                                    :alt="item.name"
                                >
                            </v-avatar>
                        </div>
                    </template>
                    <template v-slot:item.id="{item}">
                        <v-btn
                            v-if="haveRight('brands.edit_brand')"
                            @click="editBrand(item.id)"
                            color="primary"
                            class="ma-2 white--text"
                            small
                        >
                            {{ __('message.edit') }}
                            <v-icon
                                right
                            >
                                create
                            </v-icon>
                        </v-btn>
                        <v-btn
                            v-if="haveRight('brands.delete_brand')"
                            color="error"
                            class="ma-2 white--text"
                            small
                            @click.stop="showDialog(item.id)"
                        >
                            {{ __('message.delete') }}
                            <v-icon
                                right
                            >
                                mdi-delete
                            </v-icon>
                        </v-btn>
                        <v-dialog
                            v-model="dialog"
                            max-width="500"
                            :retain-focus="false"
                        >
                            <v-card>
                                <v-card-title class="headline">
                                    <span class="material-icons"> warning</span>&nbsp; {{ __('message.warning') }}
                                </v-card-title>

                                <v-card-text>
                                    {{ __('message.delete_confirm', [__('message.brand')]) }}
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                        color="primary"
                                        @click="dialog = false"
                                    >
                                        {{ __('message.cancel') }}
                                    </v-btn>

                                    <v-btn
                                        color="error"
                                        @click="deleteBrand"
                                    >
                                        {{ __('message.confirm') }}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
        <v-dialog
            v-model="show_dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar>
                    <v-btn
                        icon
                        dark
                        @click="show_dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>{{ brand.action | captilize }} {{ __('message.brand') }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                            color="success"
                            @click="saveBrand()"
                        >
                            {{ __('message.save') }}
                            <v-icon
                                right
                            >
                                save
                            </v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                                v-model="brand.brand_name"
                                :error-messages="nameError(__('message.brand_name'), $v.brand.brand_name)"
                                :counter="20"
                                :label="__('message.brand_name')"
                                required
                                @input="$v.brand.brand_name.$touch()"
                                @blur="$v.brand.brand_name.$touch()"
                                prepend-icon="subject"
                            ></v-text-field>
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
                                :label="__('message.choose_pic', [__('message.brand')])"
                                prepend-icon="mdi-camera"
                                counter
                                show-size
                                v-model="brand.image_name"
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
                                    :src="this.brand_img_placeholder"
                                    :alt="brand.brand_name"
                                >
                            </v-avatar>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import datatable from '../layout/Datatable.vue'
    import {validationMixin} from 'vuelidate'
    import {required, maxLength} from 'vuelidate/lib/validators'
    import loader from '../ui/Loader.vue'

    export default {
        name: "Brands",
        mixins: [validationMixin],
        validations: {
            brand: {
                brand_name: {required, maxLength: maxLength(20)},
            }
        },
        data() {
            return {
                brand: {
                    action: 'add',
                    brand_name: '',
                    image_name: '',
                    image: '',
                    id: '',
                },
                headers: [
                    {
                        text: '#',
                        align: 'start',
                        value: 'sr'
                    },
                    {
                        text: this.__('message.brand_name'),
                        value: 'brand_name',
                    },
                    {
                        text: this.__('message.total_products'),
                        value: 'total_products',
                    },
                    {
                        text: '',
                        value: 'image',
                    },
                    {
                        text: this.haveRight('brands.edit_brand') || this.haveRight('brands.delete_brand') ? this.__('message.actions') : null,
                        value: 'id',
                        sortable: false,
                    },
                ],
                items: [],
                search: '',
                options: {
                    page: 1,
                    itemsPerPage: 10
                },
                totalBrands: 0,
                brand_img_placeholder: '',
                deleteId: ''
            }
        },
        methods: {
            showDialog(id) {
                if (id) {
                    this.deleteId = id;
                    this.dialog = true;
                }
            },
            getBrands() {
                this.show_loader = true;
                axios.get('/brands-list', {params: {page: this.options.page, perPageItem: this.options.itemsPerPage, q: this.search}}).then((response) => {
                    this.items = response.data.data;
                    this.totalBrands = response.data.totalBrands;
                    this.show_loader = false;
                });
            },
            updatePage(pagination) {
                this.pagination = pagination;
                this.getBrands();
            },
            checkImg() {
                if (this.brand.image) {
                    this.brand_img_placeholder = this.brand.image;
                } else {
                    this.brand_img_placeholder = '../img/placeholder.png'
                }
            },
            makeImage() {
                this.brand_img_placeholder = URL.createObjectURL(this.brand.image_name);
            },
            createImgData(file) {
                let reader = new FileReader();
                this.makeImage();
                reader.onload = (file) => {
                    this.brand.image = reader.result;
                };
                reader.readAsDataURL(file);
            },
            saveBrand() {
                this.show_loader = true;
                this.$v.brand.$touch();
                axios({
                    method: 'POST',
                    url: '/save-brand',
                    data: this.brand
                }).then((response) => {
                    if (this.brand.action == 'add') {
                        this.resetForm(this.brand);
                        this.brand.action = 'add';
                        this.$v.brand.$reset();
                    }
                    this.snackbar = true;
                    this.snackbar_text = response.data.message;
                    this.snackbar_icon = response.data.icon;
                    this.snackbar_color = response.data.status;
                    this.show_dialog = false;
                    this.show_loader = false;
                    this.getBrands();
                });
            },
            editBrand(id) {
                this.brand.id = id;
                this.getBrand(id);
                this.checkImg();
            },
            getBrand(id) {
                this.show_loader = true;
                axios.get('/brand-data', {params: {id: id}}).then((response) => {
                    this.brand = response.data;
                    this.brand.action = 'edit';
                    this.checkImg();
                    this.show_loader = false;
                    this.show_dialog = true;
                });
            },
            deleteBrand() {
                const id = this.deleteId;
                this.show_loader = true;
                axios.get('/delete-brand', {params: {id: id}}).then((response) => {
                    this.show_loader = false;
                });
                this.dialog = false;
                this.getBrands();
            },
            nameError(label, key) {
                const errors = []
                if (!key.$dirty) return errors
                !key.maxLength && errors.push(this.__('message.maxLength', [label]))
                !key.required && errors.push(this.__('message.mustRequired', [label]))
                return errors
            },
        },
        components: {
            'datatable': datatable,
            'loader': loader

        },
        mounted() {
            this.getBrands()
            this.checkImg();
        }
    }
</script>

<style scoped>

</style>
