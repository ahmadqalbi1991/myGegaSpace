<template>
    <div>
        <v-card
            class="overflow-hidden rounded-0"
        >
            <v-app-bar
                elevate-on-scroll
                hide-on-scroll
            >
                <v-app-bar-nav-icon
                    @click="drawer = true"
                ></v-app-bar-nav-icon>
                <div class="vue-logo">
                    <v-img
                        max-height="100"
                        max-width="100"
                        :src="site_logo"
                    ></v-img>
                </div>
                <v-toolbar-title>
                    {{ site_setting.shop_name ? site_setting.shop_name : default_title }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <div
                    class="dark-wrapper"
                >
                    <v-switch
                        v-model="$vuetify.theme.dark"
                        inset
                        prepend-icon="mdi-theme-light-dark"
                        @change="setTheme()"
                    ></v-switch>
                </div>
            </v-app-bar>

        </v-card>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            bottom
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                >
                    <v-list-item v-show="haveRight('dashboard')" :to="{name: 'dashboard'}" link>
                        <v-list-item-icon>
                            <v-icon>dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ __('message.dashboard') }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item v-show="haveRight('users.user_list')" :to="{name: 'users'}" link>
                        <v-list-item-icon>
                            <v-icon>groups</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ __('message.users') }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>

</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            group: null,
        }),
    }
</script>

<style>
    .vue-logo {
        margin: 0 5px;
        width: 60px;
    }
    .dark-wrapper {
        top: 10px;
        position: relative;
    }
</style>
