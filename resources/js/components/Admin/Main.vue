<template>
    <v-app>
        <v-main>
            <loader :loader="show_loader"></loader>
            <nav-bar></nav-bar>
            <router-view></router-view>
            <vue-progress-bar></vue-progress-bar>
        </v-main>
    </v-app>
</template>
<script lang="ts">
import shop_loader from './layout/Loader.vue'
import navbar from './layout/Navbar.vue'
import loader from './layout/Loader.vue'

export default {
    components: {
        'shop-loader': shop_loader,
        'nav-bar': navbar,
        'loader': loader
    },
    mounted()  {
        const theme = this.setting.dark_theme;
        if (theme) {
            this.$vuetify.theme.dark = true;
        } else {
            this.$vuetify.theme.dark = false;
        }
    },
    async created() {
        this.show_loader = false;
    }
}
</script>
