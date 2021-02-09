<template>
    <div class="content">
        <shop-loader :loader="show_loader"></shop-loader>
        <div class="container-fluid">
            <div class="container">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">{{ __('admin.users') }}</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Starter Page</li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6"></div>
                    <div class="col-sm-6">

                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div>
                                    <div style="margin-bottom: 10px">
                                        <el-row>
                                            <el-col :span="18">
                                                <el-button @click="bulkDelete">{{ __('admin.bulk_delete') }}</el-button>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-input
                                                    :placeholder="__('admin.search_admin')"
                                                    v-model="filters[0].value"
                                                ></el-input>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <data-tables
                                        :data="data"
                                        :action-col="actionCol"
                                        :filters="filters"
                                    >
                                        <el-table-column type="selection" width="55"></el-table-column>
                                        <el-table-column
                                            v-for="title in titles"
                                            :prop="title.prop"
                                            :label="title.label"
                                            :key="title.prop"
                                            sortable="custom"
                                        ></el-table-column>
                                    </data-tables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import shop_loader from './layout/Loader.vue'
    var data;
    let mockServer = function (res) {
        let datas = serverData.slice();
        let allKeys = Object.keys(data[0]);

        // do filter
        res &&
        res.filters &&
        res.filters.forEach((filter) => {
            datas = datas.filter((data) => {
                let props = (filter.search_prop && [].concat(filter.search_prop)) || allKeys;
                return props.some((prop) => {
                    if (!filter.value || filter.value.length === 0) {
                        return true;
                    }
                    return [].concat(filter.value).some((val) => {
                        return (
                            data[prop].toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        );
                    });
                });
            });
        });

        // do sort
        if (res.sort && res.sort.order) {
            let order = res.sort.order;
            let prop = res.sort.prop;
            let isDescending = order === "descending";

            datas.sort(function (a, b) {
                if (a[prop] > b[prop]) {
                    return 1;
                } else if (a[prop] < b[prop]) {
                    return -1;
                } else {
                    return 0;
                }
            });

            if (isDescending) {
                datas.reverse();
            }
        }

        return {
            data: datas.slice((res.page - 1) * res.pageSize, res.page * res.pageSize),
            req: res,
            ts: new Date(),
            total: datas.length,
        };
    };

    export default {
        data() {
            return {
                data,
                titles: [
                    {
                        prop: "sr",
                        label: "#",
                    },
                    {
                        prop: "name",
                        label: "Name",
                    },
                    {
                        prop: "email",
                        label: "Email",
                    },
                ],
                filters: [
                    {
                        prop: ["name"],
                        value: "",
                    },
                ],
                actionCol: {
                    props: {
                        label: "Actions",
                    },
                    buttons: [
                        {
                            props: {
                                type: "primary el-button--small is-circle",
                                icon: "el-icon-view"
                            },
                            handler: (row) => {
                                if (this.haveRight("users.view")) {
                                    this.$router.push({name: 'editUser', params: {id: row.hash_id}});
                                } else {
                                    var message = this.__("admin.right_error");
                                    toast.fire({
                                        icon: "error",
                                        title: message
                                    });
                                }
                            },
                            // label: "Edit",
                        },
                        {
                            props: {
                                type: "danger el-button--small is-circle",
                                icon: "el-icon-delete"
                            },
                            handler: (row) => {
                                this.data.splice(this.data.indexOf(row), 1);
                                this.$message("delete success");
                            },
                            // label: "Delete",
                        },
                    ],
                },
                show_loader: true
            };
        },
        methods: {
            getUsers() {
                this.show_loader = true;
                axios.get('/users-data').then((response) => {
                    this.data = response.data;
                    this.show_loader = false;
                });
            },
            bulkDelete() {
                this.selectedRow.map((row) => {
                    this.data.splice(this.data.indexOf(row), 1);
                });
                this.$message("bulk delete success");
            }
        },
        components: {
            'shop-loader': shop_loader,
        },
        created() {

        },
        async mounted() {
            await this.getUsers();
        }
    };
</script>
