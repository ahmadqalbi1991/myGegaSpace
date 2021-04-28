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
                    <v-list-item v-if="haveRight('dashboard')" :to="{name: 'dashboard'}" link>
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ __('message.dashboard') }}
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item v-if="haveRight('brands.brands_list')" :to="{name: 'brands'}" link>
                        <v-list-item-icon>
                            <v-icon>reorder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ __('message.brands') }}
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item v-if="haveRight('brands.categories_list')" :to="{name: 'categories'}" link>
                        <v-list-item-icon>
                            <v-icon>reorder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ __('message.categories') }}
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item v-if="haveRight('users.user_list')" :to="{name: 'users'}" link>
                        <v-list-item-icon>
                            <v-icon>groups</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ __('message.users') }}
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-group
                        v-if="haveRight('settings.setting') || haveRight('email_templates.email_templates_list')"
                        prepend-icon="settings_applications"
                        no-action
                    >
                        <template v-slot:activator>
                            <v-list-item-title>
                                {{ __('message.settings') }}
                            </v-list-item-title>
                        </template>

                        <template>
                            <v-list-item v-if="haveRight('email_templates.email_templates_list')" :to="{name: 'emailTemplates'}" link>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ __('message.email_templates') }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>

                        <template>
                            <v-list-item v-if="haveRight('shop_setting.shop_settings')" :to="{name: 'shopSetup'}" link>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ __('message.shop-setup') }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>

                        <template>
                            <v-list-item v-if="haveRight('settings.setting')">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ __('message.setting') }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list-group>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn
                        block
                        color="error"
                        href="/logout"
                    >
                        {{ __('message.logout') }}
                    </v-btn>
                </div>
            </template>
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
