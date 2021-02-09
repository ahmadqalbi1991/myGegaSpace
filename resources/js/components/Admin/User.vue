<template>
    <div>
        <v-container>
            <v-row no-gutters>
                <v-col
                    cols="12"
                >
                    <v-card
                        elevation="10"
                        :loading="show_loader"
                    >
                        <v-card-title>
                            <h3>{{ __("message.user's") }} {{ __('message.profile') }}</h3>
                            <back-btn></back-btn>
                        </v-card-title>
                        <div class="card-wrapper">
                            <v-row
                                no-gutters
                                align="center"
                            >
                                <v-col
                                    cols="12"
                                    lg="4"
                                    md="6"
                                    sm="12"
                                >
                                    <v-avatar
                                        size="200"
                                    >
                                        <img
                                            :src="this.user_img_placeholder"
                                            :alt="user.name"
                                        >
                                    </v-avatar>
                                </v-col>
                                <v-col
                                    cols="12"
                                    lg="8"
                                    md="6"
                                    sm="12"
                                >
                                    <div v-show="user.name" class="card-info">
                                        <label>{{ __('message.name') }} </label>
                                        <h3>{{ user.name }}</h3>
                                        <v-divider></v-divider>
                                    </div>
                                    <div v-show="user.email" class="card-info">
                                        <label>{{ __('message.email') }} </label>
                                        <h3>{{ user.email }}</h3>
                                        <v-divider></v-divider>
                                    </div>
                                    <div v-show="user.contact_number" class="card-info">
                                        <label>{{ __('message.contact_number') }} </label>
                                        <h3>{{ user.contact_number }}</h3>
                                        <v-divider></v-divider>
                                    </div>
                                    <div v-show="user.address" class="card-info">
                                        <label>{{ __('message.address') }} </label>
                                        <h3>{{ user.address }}<span
                                            v-show="user.city_name">, {{ user.city_name }}</span><span
                                            v-show="user.state_name">, {{ user.state_name }}</span><span
                                            v-show="user.country_name">, {{ user.country_name }}</span></h3>
                                        <v-divider></v-divider>
                                    </div>
                                    <v-card-actions>
                                        <v-btn
                                            class="ma-2 white--text"
                                            elevation="10"
                                            :loading="show_loader"
                                            color="primary"
                                            :to="{name: 'editUser', params: {id: user.hash_id}}"
                                        >
                                            {{ __('message.edit') }}
                                        </v-btn>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="6"
                    lg="6"
                    md="6"
                    sm="12"
                >
                    <v-card
                        :loading="show_loader"
                        elevation="10"
                        max-height="525px"
                    >
                        <div class="card-wrapper">
                            <div v-show="user.role" class="card-info">
                                <label><i class="fas fa-user-cog"></i> Role</label>
                                <p>{{ user.role | captilize }}</p>
                                <v-divider></v-divider>
                            </div>
                            <div v-show="user.date_of_birth" class="card-info">
                                <label><i class="fas fa-calendar-day"></i> Date of Birth</label>
                                <p>{{ user.date_of_birth | filter_date }}</p>
                                <v-divider></v-divider>
                            </div>
                            <div v-show="user.identity_card_number" class="card-info">
                                <label><i class="fas fa-id-card"></i> Identity Card Number</label>
                                <p>{{ user.identity_card_number }}</p>
                                <v-divider></v-divider>
                            </div>
                            <div v-show="user.blood_group" class="card-info">
                                <label><i class="fas fa-plus-square"></i> Blood Group</label>
                                <p>{{ user.blood_group }}</p>
                                <v-divider></v-divider>
                            </div>
                            <div v-show="user.martial_status" class="card-info">
                                <label><i class="fas fa-user-friends"></i> Martial Status</label>
                                <p>{{ user.martial_status | captilize }}</p>
                                <v-divider></v-divider>
                            </div>
                            <div v-show="user.gender" class="card-info">
                                <label><i class="fas fa-venus-mars"></i> Gender</label>
                                <p>{{ user.gender | captilize }}</p>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col
                    cols="6"
                    lg="6"
                    md="6"
                    sm="12"
                >
                    <v-card
                        :loading="show_loader"
                        elevation="10"
                        max-height="525px"
                    >
                        <v-timeline
                            dense
                            class="scrollbar timeline-overflow"
                        >
                            <v-timeline-item
                                v-for="log in logs"
                                :key="log.id"
                            >
                                <v-card class="elevation-2">
                                    <div class="card-wrapper">
                                        <h4 class="timeline-heading">{{ log.module }}</h4>
                                        <span
                                            :class="$vuetify.theme.dark ? 'timeline-date-dark' : 'timeline-date-light'"
                                            class="timeline-date">
                                               {{ log.created_at | filter_date_time }}
                                           </span>
                                        <p class="timeline-log">{{ log.log }}</p>
                                    </div>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                >
                    <v-card
                        :loading="show_loader"
                        elevation="10"
                    >
                        <v-expansion-panels inset>
                            <v-expansion-panel>
                                <v-expansion-panel-header>{{ __("message.rights") }}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="card-wrapper">
                                        <v-treeview
                                            selectable
                                            selected-color="primary"
                                            open-on-click
                                            item-disabled="locked"
                                            :items="items"
                                            :value="values"
                                            on-icon="done"
                                            off-icon="close"
                                        ></v-treeview>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import shop_loader from './layout/Loader.vue'
    import back_btn from './ui/BackButton.vue'

    export default {
        data() {
            return {
                user: {
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
                    action: 'add',
                    address: '',
                    contact_number: '',
                    blood_group: '',
                    identity_card_number: '',
                    martial_status: '',
                    date_of_birth: '',
                    city_name: '',
                    state_name: '',
                    country_name: '',
                    hash_id: ''
                },
                logs: [],
                isEditable: false,
                show_loader: true,
                user_img_placeholder: '',
                all_rights: [],
                values: [],
                items: []
            };
        },
        methods: {
            getUser() {
                this.show_loader = true;
                axios.get('/user-data', {params: {id: this.$route.params.id}}).then((response) => {
                    this.user = response.data.user;
                    this.items = response.data.user.rights.treeview;
                    this.values = response.data.user.rights.values;
                    this.logs = response.data.log;
                    this.show_loader = false;
                    this.isEditable = true;
                    this.user.action = 'edit';
                    this.checkImg();
                });
            },
            checkImg() {
                if (this.user.image) {
                    this.user_img_placeholder = this.user.image;
                } else {
                    if (this.user.gender) {
                        if (this.user.gender == 'male') {
                            this.user_img_placeholder = '../img/man.png'
                        }

                        if (this.user.gender == 'female') {
                            this.user_img_placeholder = '../img/woman.png'
                        }
                    } else {
                        this.user_img_placeholder = '../img/placeholder.png'
                    }
                }
            },
            editForm() {
                if (this.isEditable) {
                    this.isEditable = false;
                    $("#edit-btn").hide();
                    $("#submit-btn").show();
                    $("#cancel-btn").show();
                } else {
                    this.isEditable = true;
                    $("#edit-btn").show();
                    $("#submit-btn").hide();
                    $("#cancel-btn").hide();
                }
            },
            saveUser() {
                if (this.haveRight('users.edit')) {
                    this.show_loader = true;
                    this.form.post('/save-user').then((response) => {
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
                    this.getUser();
                    $("#edit-btn").show();
                    $("#submit-btn").hide();
                    $("#cancel-btn").hide();
                }
            },
            open(event) {
                var ele = event.target;
                if (ele.getElementsByClassName('arrow')[0].classList.contains("rotate")) {
                    ele.getElementsByClassName('arrow')[0].classList.remove("rotate");
                } else {
                    ele.getElementsByClassName('arrow')[0].classList.add("rotate");
                }
            }
        },
        components: {
            'shop-loader': shop_loader,
            'back-btn': back_btn,
        },
        created() {
            this.all_rights = window._rights
        },
        async mounted() {
            await this.getUser();
        }
    };
</script>

<style>
    label {
        font-weight: 100 !important;
        font-size: 16px;
    }

    .timeline-overflow {
        max-height: inherit;
        overflow-y: auto;
    }

    .v-timeline-item {
        padding-bottom: 15px !important;
    }

    .timeline-date-dark {
        font-size: 12px;
        color: #2196f3;
        font-style: italic;
    }

    .timeline-date-light {
        font-size: 12px;
        color: #3f51b5;
        font-style: italic;
    }
</style>
