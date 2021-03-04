<template>
    <v-app>
        <v-main>
            <nav-bar></nav-bar>
            <router-view></router-view>
            <vue-progress-bar></vue-progress-bar>
        </v-main>
    </v-app>
</template>
<script lang="ts">
import navbar from './layout/Navbar.vue'

export default {
    components: {
        'nav-bar': navbar,
    },
    mounted()  {
        const theme = this.setting.dark_theme;
        if (theme) {
            this.$vuetify.theme.dark = true;
        } else {
            this.$vuetify.theme.dark = false;
        }
    }
}
</script>
