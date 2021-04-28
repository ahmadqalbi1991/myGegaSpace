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
                    {{ __('message.categories') }}
                    <v-btn
                        outlined
                        absolute
                        right
                        @click="show_dialog = true"
                    >
                        {{ __('message.add') + ' ' + __('message.category') }}
                        <v-icon
                            right
                            color="primary"
                        >
                            mdi-plus
                        </v-icon>&nbsp;
                    </v-btn>
                </v-card-title>
<!--                <v-data-table-->
<!--                    :headers="headers"-->
<!--                    :items="items"-->
<!--                    :options.sync="options"-->
<!--                    @pagination="updatePage"-->
<!--                    :server-items-length="totalCategories"-->
<!--                    :search="search"-->
<!--                    :custom-filter="getCategories"-->
<!--                    elevation="10"-->
<!--                >-->
<!--                    <template v-slot:top>-->
<!--                        <v-text-field-->
<!--                            v-model="search"-->
<!--                            :label="__('message.search_category')"-->
<!--                            class="mx-4"-->
<!--                            @input="getCategories"-->
<!--                            @click="getCategories"-->
<!--                            @blur="getCategories"-->
<!--                            append-icon="search"-->
<!--                        ></v-text-field>-->
<!--                    </template>-->
<!--                    <template v-slot:item.image="{item}">-->
<!--                        <div class="m-5">-->
<!--                            <v-avatar-->
<!--                                v-if="item.image"-->
<!--                                size="50"-->
<!--                            >-->
<!--                                <img-->
<!--                                    :src="item.image"-->
<!--                                    :alt="item.name"-->
<!--                                >-->
<!--                            </v-avatar>-->
<!--                        </div>-->
<!--                    </template>-->
<!--                    <template v-slot:item.id="{item}">-->
<!--                        <v-btn-->
<!--                            v-if="haveRight('categories.edit_category')"-->
<!--                            @click="editCategory(item.id)"-->
<!--                            outlined-->
<!--                            class="ma-2"-->
<!--                            small-->
<!--                        >-->
<!--                            {{ __('message.edit') }}-->
<!--                            <v-icon-->
<!--                                right-->
<!--                                color="primary"-->
<!--                            >-->
<!--                                create-->
<!--                            </v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn-->
<!--                            v-if="haveRight('categories.delete_category')"-->
<!--                            outlined-->
<!--                            class="ma-2"-->
<!--                            small-->
<!--                            @click.stop="showDialog(item.id)"-->
<!--                        >-->
<!--                            {{ __('message.delete') }}-->
<!--                            <v-icon-->
<!--                                right-->
<!--                                color="error"-->
<!--                            >-->
<!--                                mdi-delete-->
<!--                            </v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-dialog-->
<!--                            v-model="dialog"-->
<!--                            max-width="500"-->
<!--                            :retain-focus="false"-->
<!--                        >-->
<!--                            <v-card>-->
<!--                                <v-card-title class="headline">-->
<!--                                    <span class="material-icons"> warning</span>&nbsp; {{ __('message.warning') }}-->
<!--                                </v-card-title>-->

<!--                                <v-card-text>-->
<!--                                    {{ __('message.delete_confirm', [__('message.category')]) }}-->
<!--                                </v-card-text>-->

<!--                                <v-card-actions>-->
<!--                                    <v-spacer></v-spacer>-->

<!--                                    <v-btn-->
<!--                                        color="primary"-->
<!--                                        @click="dialog = false"-->
<!--                                    >-->
<!--                                        {{ __('message.cancel') }}-->
<!--                                    </v-btn>-->

<!--                                    <v-btn-->
<!--                                        color="error"-->
<!--                                        @click="deleteCategory"-->
<!--                                    >-->
<!--                                        {{ __('message.confirm') }}-->
<!--                                    </v-btn>-->
<!--                                </v-card-actions>-->
<!--                            </v-card>-->
<!--                        </v-dialog>-->
<!--                    </template>-->
<!--                </v-data-table>-->
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
                        @click="show_dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>{{ category.action | capitalize }} {{ __('message.category') }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                            color="success"
                            @click="saveCategory()"
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
                                v-model="category.category_name"
                                :error-messages="nameError(__('message.category_name'), $v.category.category_name)"
                                :counter="20"
                                :label="__('message.category_name')"
                                required
                                @input="$v.category.category_name.$touch()"
                                @blur="$v.category.category_name.$touch()"
                                prepend-icon="subject"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-textarea
                                v-model="category.category_description"
                                :error-messages="nameError(__('message.category_description'), $v.category.category_description)"
                                :label="__('message.description')"
                                counter
                                @input="$v.category.category_description.$touch()"
                                @blur="$v.category.category_description.$touch()"
                                rows="5"
                            ></v-textarea>
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
                                v-model="category.parent_category"
                                :label="__('message.parent_category')"
                            ></v-checkbox>
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                            md="4"
                            sm="12"
                        >
                            <v-checkbox
                                v-model="category.is_active"
                                :label="__('message.is_active_on_site')"
                            ></v-checkbox>
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                            md="4"
                            sm="12"
                        >
                            <v-checkbox
                                v-model="category.is_menu"
                                :label="__('message.is_menu')"
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row align="center" v-if="!category.parent_category">
                        <v-col
                            class="d-flex"
                            cols="12"
                        >
                            <v-list>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-home</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-title>Home</v-list-item-title>
                                </v-list-item>

                                <v-list-group
                                    :value="true"
                                    prepend-icon="mdi-account-circle"
                                >
                                    <template v-slot:activator>
                                        <v-list-item-title>Users</v-list-item-title>
                                    </template>

                                    <v-list-group
                                        :value="true"
                                        no-action
                                        sub-group
                                    >
                                        <template v-slot:activator>
                                            <v-list-item-content>
                                                <v-list-item-title>Admin</v-list-item-title>
                                            </v-list-item-content>
                                        </template>

                                        <v-list-item
                                            v-model="category.parent_category"
                                            v-for="([title, icon], i) in admins"
                                            :key="i"
                                            link
                                        >
                                            <v-list-item-title v-text="title"></v-list-item-title>

                                            <v-list-item-icon>
                                                <v-icon v-text="icon"></v-icon>
                                            </v-list-item-icon>
                                        </v-list-item>
                                    </v-list-group>

                                    <v-list-group
                                        no-action
                                        sub-group
                                    >
                                        <template v-slot:activator>
                                            <v-list-item-content>
                                                <v-list-item-title>Actions</v-list-item-title>
                                            </v-list-item-content>
                                        </template>

                                        <v-list-item
                                            v-for="([title, icon], i) in cruds"
                                            :key="i"
                                            link
                                        >
                                            <v-list-item-title v-text="title"></v-list-item-title>

                                            <v-list-item-icon>
                                                <v-icon v-text="icon"></v-icon>
                                            </v-list-item-icon>
                                        </v-list-item>
                                    </v-list-group>
                                </v-list-group>
                            </v-list>
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
        name: "Categories",
        mixins: [validationMixin],
        validations: {
            category: {
                category_name: {required, maxLength: maxLength(20)},
                category_description: {required}
            }
        },
        data() {
            return {
                admins: [
                    ['Management', 'mdi-account-multiple-outline'],
                    ['Settings', 'mdi-cog-outline'],
                ],
                cruds: [
                    ['Create', 'mdi-plus-outline'],
                    ['Read', 'mdi-file-outline'],
                    ['Update', 'mdi-update'],
                    ['Delete', 'mdi-delete'],
                ],
                category: {
                    action: 'add',
                    category_name: '',
                    category_description: '',
                    subcategory: [],
                    parent_id:'',
                    parent_category: true,
                    is_active: '',
                    is_menu: '',
                    level: '',
                    id: '',
                },
                headers: [
                    {
                        text: '#',
                        align: 'start',
                        value: 'sr'
                    },
                    {
                        text: this.__('message.category_name'),
                        value: 'category_name',
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
                        text: this.haveRight('categories.edit_category') || this.haveRight('categories.delete_category') ? this.__('message.actions') : null,
                        value: 'id',
                        sortable: false,
                    },
                ],
                categories_treeview: [],
                items: [],
                search: '',
                options: {
                    page: 1,
                    itemsPerPage: 10
                },
                totalCategories: 0,
                category_img_placeholder: '',
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
            getCategories() {
                // this.show_loader = true;
                axios.get('/categories-list', {params: {page: this.options.page, perPageItem: this.options.itemsPerPage, q: this.search}}).then((response) => {
                    this.items = response.data.data;
                    this.totalCategories = response.data.totalCategories;
                    this.show_loader = false;
                });
            },
            getCategoriesTreeView() {
                this.show_loader = true;
                axios.get('/categories-treeview').then((response) => {
                    this.items = response.data.data;
                    this.totalCategories = response.data.totalCategories;
                    this.show_loader = false;
                });
            },
            updatePage(pagination) {
                this.pagination = pagination;
                this.getCategories();
            },
            saveCategory() {
                this.show_loader = true;
                console.log(this.category)
                this.$v.category.$touch();
                axios({
                    method: 'POST',
                    url: '/save-category',
                    data: this.category
                }).then((response) => {
                    this.resetForm(this.category);
                    this.$v.category.$reset();
                    if (this.category.action == 'add') {
                        this.category.action = 'edit';
                    }
                    this.snackbar = true;
                    this.snackbar_text = response.data.message;
                    this.snackbar_icon = response.data.icon;
                    this.snackbar_color = response.data.status;
                    this.show_dialog = false;
                    this.show_loader = false;
                    this.getCategories();
                });
            },
            editCategory(id) {
                this.category.id = id;
                this.getCategory(id);
                this.checkImg();
            },
            getCategory(id) {
                this.show_loader = true;
                axios.get('/category-data', {params: {id: id}}).then((response) => {
                    this.category = response.data;
                    this.category.action = 'edit';
                    this.checkImg();
                    this.show_loader = false;
                    this.show_dialog = true;
                });
            },
            deleteCategory() {
                const id = this.deleteId;
                this.show_loader = true;
                axios.get('/delete-category', {params: {id: id}}).then((response) => {
                    this.show_loader = false;
                });
                this.dialog = false;
                this.getCategories();
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
            this.getCategories();
            this.getCategoriesTreeView();
            this.checkImg();
        }
    }
</script>

<style scoped>

</style>
