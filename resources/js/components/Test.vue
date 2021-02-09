<template>
    <v-app>
        <v-main>
            <v-container>
                <v-card>
                    <v-card-title>
                        <v-treeview :items="items"></v-treeview>
                    </v-card-title>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "Test.vue",
        data() {
            return {
                form: new Form({
                    id: '',
                    name: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    email_verified_at: '',
                    gender: '',
                    image: '',
                    rights: '',
                    role: '',
                    action: 'add'
                }),
                logs: [],
                isEditable: false,
                show_loader: true,
                user_img_placeholder: '',
                all_rights: [],
                items: [
                    {
                        id: 1,
                        name: 'Applications :',
                        children: [
                            {id: 2, name: 'Calendar : app'},
                            {id: 3, name: 'Chrome : app'},
                            {id: 4, name: 'Webstorm : app'},
                        ],
                    },
                    {
                        id: 5,
                        name: 'Documents :',
                        children: [
                            {
                                id: 6,
                                name: 'vuetify :',
                                children: [
                                    {
                                        id: 7,
                                        name: 'src :',
                                        children: [
                                            {id: 8, name: 'index : ts'},
                                            {id: 9, name: 'bootstrap : ts'},
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 10,
                                name: 'material2 :',
                                children: [
                                    {
                                        id: 11,
                                        name: 'src :',
                                        children: [
                                            {id: 12, name: 'v-btn : ts'},
                                            {id: 13, name: 'v-card : ts'},
                                            {id: 14, name: 'v-window : ts'},
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 15,
                        name: 'Downloads :',
                        children: [
                            {id: 16, name: 'October : pdf'},
                            {id: 17, name: 'November : pdf'},
                            {id: 18, name: 'Tutorial : html'},
                        ],
                    },
                    {
                        id: 19,
                        name: 'Videos :',
                        children: [
                            {
                                id: 20,
                                name: 'Tutorials :',
                                children: [
                                    {id: 21, name: 'Basic layouts : mp4'},
                                    {id: 22, name: 'Advanced techniques : mp4'},
                                    {id: 23, name: 'All about app : dir'},
                                ],
                            },
                            {id: 24, name: 'Intro : mov'},
                            {id: 25, name: 'Conference introduction : avi'},
                        ],
                    },
                ],
            };
        },
    }
</script>

<style scoped>

</style>
