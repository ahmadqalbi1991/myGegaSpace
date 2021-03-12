require('./bootstrap');
window.Vue = require('vue');
Vue.mixin(require('./backend'));

// Vuetify
import Vuetify from 'vuetify';

Vue.use(Vuetify);

// Sweetalert
import swal from 'sweetalert2'

window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
});

window.toast = toast;

// datatable
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// set language to EN
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
// import DataTables and DataTablesServer separately
import { DataTables, DataTablesServer } from 'vue-data-tables'
Vue.use(DataTables)
Vue.use(DataTablesServer)

// import DataTables and DataTablesServer together
import VueDataTables from 'vue-data-tables'
Vue.use(VueDataTables)
locale.use(lang)

// progressbar
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '100px'
})

// preloader
import VueElementLoading from 'vue-element-loading';
Vue.component('VueElementLoading', VueElementLoading);

// momentjs
Vue.use(require('vue-moment'));
import moment from 'moment';

//vform
import Form from 'vform'
window.Form = Form

// routes
import VueRouter from 'vue-router'
import content_wrapper from './components/Admin/Main.vue'

Vue.use(VueRouter)

let routes = [
    {path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackPrefetch: true */ './components/Admin/Dashboard.vue') },
    {path: '/shop-setup',
    name: 'shopSetup',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/Setup.vue') },
    {path: '/home-setup',
    name: 'homeSetup',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/HomeSetup.vue') },
    {path: '/users',
    name: 'users',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/Users.vue') },
    {path: '/view-user/:id',
    name: 'viewUser',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/User.vue') },
    {path: '/edit-user/:id',
    name: 'editUser',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/UserForm.vue') },
    {path: '/add-user',
    name: 'addUser',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/UserForm.vue') },
    {path: '/email-templates',
    name: 'emailTemplates',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/EmailTemplates.vue') },
    {path: '/edit-email-template/:id',
    name: 'editEmailTemplate',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/EmailTemplateForm.vue') },
    {path: '/add-email-template',
    name: 'addEmailTemplate',
    component: () => import(/* webpackPrefetch: true */'./components/Admin/EmailTemplateForm.vue') },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// Global instances
Vue.mixin({
    data() {
        return {
            menu: false,
            countries: [],
            states: [],
            cities: [],
            country_code: '',
            site_logo: 'img/placeholder.png',
            logo_img_placeholder: 'img/placeholder.png',
            favicon_img_placeholder: 'img/placeholder.png',
            site_setting: [],
            setting: [],
            default_title: "Shop Name",
            show_alert: false,
            alert_text: null,
            alert_type: null,
            dialog: false,
            snackbar: false,
            snackbar_text: null,
            snackbar_icon: null,
            snackbar_color: null,
        }
    },
    watch: {
        menu (val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
    methods: {
        getCountries() {
            axios.get('/get-countries').then((data) => {
                this.countries = data.data;
            });
        },
        getStates(country) {
            this.states = null;
            axios.get('/get-states', {
                params:{
                    id: country
                }
              }).then((data) => {
                this.states = data.data;
            });
        },
        getCities(state) {
            this.cities = null;
            axios.get('/get-cities', {
                params:{
                    id: state
                }
              }).then((data) => {
                this.cities = data.data;
            });
        },
        setTheme() {
            var id = this.setting.id;
            var theme = null;
            if (this.$vuetify.theme.dark) {
                theme = 1;
            }
            axios.post("/update-setting", {
                id: id,
                dark_theme: theme
            });
        },
        deleteRecord(type, id) {
            this.show_loader = true;
            axios.delete('/delete-record', {params: {type: type, id:id}}).then((response) => {
                this.dialog = false;
                this.show_loader = false;
                this.$emit('resetData');
            })
        },
        changeStatus(id, value, type) {
            if (value == 'Active') {
                value = 'Disable'
            } else if (value == 'Disable') {
                value = 'Active'
            }
            axios.post('/change-status', {type: type, id: id, value: value}).then(() => {
                this.$emit('resetData');
            })
        },
        resetForm(obj) {
            Object.keys(obj).forEach(function(key,index) {
                obj[key] = '';
            });
        }
    },
    async created() {
        this.site_setting = window.shop_settings;
        this.setting = window.settings;
        if (this.site_setting.logo_path) {
            this.site_logo = this.site_setting.logo_path;
        }
    },
})

// Vue Filters
Vue.filter('captilize', function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.filter('filter_day_date', function (value) {
    return moment(value).format("dddd, MMMM Do YYYY");
});

Vue.filter('filter_date_time', function (value) {
    return moment(value).format("MMMM Do YYYY, h:m a");
});

Vue.filter('filter_date', function (value) {
    return moment(value).format("MMMM Do, YYYY");
});
// admin vue js
const admin_app = new Vue({
    el: '#admin-app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#3f51b5',
                    secondary: '#b0bec5',
                    accent: '#8c9eff',
                    error: '#b71c1c',
                    main: '#f0f0f0',
                    light_text: '#5d5d5d'
                },
            },
        },
    }),
    router,
    components: {
        'content-wrapper': content_wrapper,
    },
})
.$mount("#admin-app");
