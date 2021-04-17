(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Brands/Brands.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Brands/Brands.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_Datatable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Datatable.vue */ "./resources/js/components/Admin/layout/Datatable.vue");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Loader_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Loader.vue */ "./resources/js/components/Admin/ui/Loader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Brands",
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_1__["validationMixin"]],
  validations: {
    brand: {
      brand_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(20)
      }
    }
  },
  data: function data() {
    return {
      brand: {
        action: 'add',
        brand_name: '',
        image_name: '',
        image: '',
        id: ''
      },
      headers: [{
        text: '#',
        align: 'start',
        value: 'sr'
      }, {
        text: this.__('message.brand_name'),
        value: 'brand_name'
      }, {
        text: this.__('message.total_products'),
        value: 'total_products'
      }, {
        text: '',
        value: 'image'
      }, {
        text: this.haveRight('brands.edit_brand') || this.haveRight('brands.delete_brand') ? this.__('message.actions') : null,
        value: 'id',
        sortable: false
      }],
      items: [],
      search: '',
      options: {
        page: 1,
        itemsPerPage: 10
      },
      totalBrands: 0,
      brand_img_placeholder: '',
      deleteId: ''
    };
  },
  methods: {
    showDialog: function showDialog(id) {
      if (id) {
        this.deleteId = id;
        this.dialog = true;
      }
    },
    getBrands: function getBrands() {
      var _this = this;

      this.show_loader = true;
      axios.get('/brands-list', {
        params: {
          page: this.options.page,
          perPageItem: this.options.itemsPerPage,
          q: this.search
        }
      }).then(function (response) {
        _this.items = response.data.data;
        _this.totalBrands = response.data.totalBrands;
        _this.show_loader = false;
      });
    },
    updatePage: function updatePage(pagination) {
      this.pagination = pagination;
      this.getBrands();
    },
    checkImg: function checkImg() {
      if (this.brand.image) {
        this.brand_img_placeholder = this.brand.image;
      } else {
        this.brand_img_placeholder = '../img/placeholder.png';
      }
    },
    makeImage: function makeImage() {
      this.brand_img_placeholder = URL.createObjectURL(this.brand.image_name);
    },
    createImgData: function createImgData(file) {
      var _this2 = this;

      var reader = new FileReader();
      this.makeImage();

      reader.onload = function (file) {
        _this2.brand.image = reader.result;
      };

      reader.readAsDataURL(file);
    },
    saveBrand: function saveBrand() {
      var _this3 = this;

      this.show_loader = true;
      this.$v.brand.$touch();
      axios({
        method: 'POST',
        url: '/save-brand',
        data: this.brand
      }).then(function (response) {
        if (_this3.brand.action == 'add') {
          _this3.resetForm(_this3.brand);

          _this3.brand.action = 'add';

          _this3.$v.brand.$reset();
        }

        _this3.snackbar = true;
        _this3.snackbar_text = response.data.message;
        _this3.snackbar_icon = response.data.icon;
        _this3.snackbar_color = response.data.status;
        _this3.show_dialog = false;
        _this3.show_loader = false;

        _this3.getBrands();
      });
    },
    editBrand: function editBrand(id) {
      this.brand.id = id;
      this.getBrand(id);
      this.checkImg();
    },
    getBrand: function getBrand(id) {
      var _this4 = this;

      this.show_loader = true;
      axios.get('/brand-data', {
        params: {
          id: id
        }
      }).then(function (response) {
        _this4.brand = response.data;
        _this4.brand.action = 'edit';

        _this4.checkImg();

        _this4.show_loader = false;
        _this4.show_dialog = true;
      });
    },
    deleteBrand: function deleteBrand() {
      var _this5 = this;

      var id = this.deleteId;
      this.show_loader = true;
      axios.get('/delete-brand', {
        params: {
          id: id
        }
      }).then(function (response) {
        _this5.show_loader = false;
      });
      this.dialog = false;
      this.getBrands();
    },
    nameError: function nameError(label, key) {
      var errors = [];
      if (!key.$dirty) return errors;
      !key.maxLength && errors.push(this.__('message.maxLength', [label]));
      !key.required && errors.push(this.__('message.mustRequired', [label]));
      return errors;
    }
  },
  components: {
    'datatable': _layout_Datatable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'loader': _ui_Loader_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    this.getBrands();
    this.checkImg();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/layout/Datatable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/layout/Datatable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      deleteId: ''
    };
  },
  methods: {
    editData: function editData(id) {
      this.$emit('editRecord', id);
    },
    deleteRecord: function deleteRecord(id) {
      this.$emit('deleteRecord', id);
      this.dialog = false;
    }
  },
  props: ['headers', 'items', 'view', 'edit', 'delete_permission', 'to', 'change_status', 'type', 'edit_path', 'edit_modal', 'show_loader']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ui/Loader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ui/Loader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Loader",
  props: ['show_loader']
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Brands/Brands.vue?vue&type=template&id=283bc1d8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Brands/Brands.vue?vue&type=template&id=283bc1d8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loader", { attrs: { show_loader: _vm.show_loader } }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { top: "", right: "", color: _vm.snackbar_color },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _c("v-icon", [_vm._v(_vm._s(_vm.snackbar_icon))]),
          _vm._v("\n        " + _vm._s(_vm.snackbar_text) + " \n        "),
          [
            _c(
              "v-btn",
              {
                attrs: { color: "pink", small: "", absolute: "", right: "" },
                on: {
                  click: function($event) {
                    _vm.snackbar = false
                  }
                }
              },
              [_c("v-icon", [_vm._v("mdi-close")])],
              1
            )
          ]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-card",
            { attrs: { elevation: "10" } },
            [
              _c(
                "v-card-title",
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.__("message.brands")) +
                      "\n                "
                  ),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary",
                        absolute: "",
                        right: "",
                        dark: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.show_dialog = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.__("message.add") +
                              " " +
                              _vm.__("message.brand")
                          ) +
                          "\n                    "
                      ),
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v(
                          "\n                        mdi-plus\n                    "
                        )
                      ]),
                      _vm._v(" \n                ")
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                attrs: {
                  headers: _vm.headers,
                  items: _vm.items,
                  options: _vm.options,
                  "server-items-length": _vm.totalBrands,
                  search: _vm.search,
                  "custom-filter": _vm.getBrands,
                  elevation: "10"
                },
                on: {
                  "update:options": function($event) {
                    _vm.options = $event
                  },
                  pagination: _vm.updatePage
                },
                scopedSlots: _vm._u([
                  {
                    key: "top",
                    fn: function() {
                      return [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: {
                            label: _vm.__("message.search_brand"),
                            "append-icon": "search"
                          },
                          on: {
                            input: _vm.getBrands,
                            click: _vm.getBrands,
                            blur: _vm.getBrands
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "item.image",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            item.image
                              ? _c("v-avatar", { attrs: { size: "50" } }, [
                                  _c("img", {
                                    attrs: { src: item.image, alt: item.name }
                                  })
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    }
                  },
                  {
                    key: "item.id",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm.haveRight("brands.edit_brand")
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "ma-2 white--text",
                                attrs: { color: "primary", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.editBrand(item.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.__("message.edit")) +
                                    "\n                        "
                                ),
                                _c("v-icon", { attrs: { right: "" } }, [
                                  _vm._v(
                                    "\n                            create\n                        "
                                  )
                                ])
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.haveRight("brands.delete_brand")
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "ma-2 white--text",
                                attrs: { color: "error", small: "" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.showDialog(item.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.__("message.delete")) +
                                    "\n                        "
                                ),
                                _c("v-icon", { attrs: { right: "" } }, [
                                  _vm._v(
                                    "\n                            mdi-delete\n                        "
                                  )
                                ])
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "v-dialog",
                          {
                            attrs: {
                              "max-width": "500",
                              "retain-focus": false
                            },
                            model: {
                              value: _vm.dialog,
                              callback: function($$v) {
                                _vm.dialog = $$v
                              },
                              expression: "dialog"
                            }
                          },
                          [
                            _c(
                              "v-card",
                              [
                                _c(
                                  "v-card-title",
                                  { staticClass: "headline" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "material-icons" },
                                      [_vm._v(" warning")]
                                    ),
                                    _vm._v(
                                      "  " +
                                        _vm._s(_vm.__("message.warning")) +
                                        "\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-card-text", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.__("message.delete_confirm", [
                                          _vm.__("message.brand")
                                        ])
                                      ) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { color: "primary" },
                                        on: {
                                          click: function($event) {
                                            _vm.dialog = false
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.__("message.cancel")) +
                                            "\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { color: "error" },
                                        on: { click: _vm.deleteBrand }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.__("message.confirm")) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.show_dialog,
            callback: function($$v) {
              _vm.show_dialog = $$v
            },
            expression: "show_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.show_dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [
                    _vm._v(
                      _vm._s(_vm._f("captilize")(_vm.brand.action)) +
                        " " +
                        _vm._s(_vm.__("message.brand"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "success" },
                          on: {
                            click: function($event) {
                              return _vm.saveBrand()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.__("message.save")) +
                              "\n                        "
                          ),
                          _c("v-icon", { attrs: { right: "" } }, [
                            _vm._v(
                              "\n                            save\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "error-messages": _vm.nameError(
                                _vm.__("message.brand_name"),
                                _vm.$v.brand.brand_name
                              ),
                              counter: 20,
                              label: _vm.__("message.brand_name"),
                              required: "",
                              "prepend-icon": "subject"
                            },
                            on: {
                              input: function($event) {
                                return _vm.$v.brand.brand_name.$touch()
                              },
                              blur: function($event) {
                                return _vm.$v.brand.brand_name.$touch()
                              }
                            },
                            model: {
                              value: _vm.brand.brand_name,
                              callback: function($$v) {
                                _vm.$set(_vm.brand, "brand_name", $$v)
                              },
                              expression: "brand.brand_name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "8", md: "6", sm: "12" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              accept: "image/*",
                              label: _vm.__("message.choose_pic", [
                                _vm.__("message.brand")
                              ]),
                              "prepend-icon": "mdi-camera",
                              counter: "",
                              "show-size": "",
                              type: "file"
                            },
                            on: { change: _vm.createImgData },
                            model: {
                              value: _vm.brand.image_name,
                              callback: function($$v) {
                                _vm.$set(_vm.brand, "image_name", $$v)
                              },
                              expression: "brand.image_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "4", md: "6", sm: "12" } },
                        [
                          _c("v-avatar", { attrs: { size: "100" } }, [
                            _c("img", {
                              attrs: {
                                src: this.brand_img_placeholder,
                                alt: _vm.brand.brand_name
                              }
                            })
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/layout/Datatable.vue?vue&type=template&id=0cc2c10a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/layout/Datatable.vue?vue&type=template&id=0cc2c10a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.items,
      "hide-default-footer": ""
    },
    scopedSlots: _vm._u([
      {
        key: "item.image",
        fn: function(ref) {
          var item = ref.item
          return [
            item.image
              ? _c("v-avatar", { attrs: { size: "35" } }, [
                  _c("img", { attrs: { src: item.image, alt: item.name } })
                ])
              : _vm._e()
          ]
        }
      },
      {
        key: "item.status",
        fn: function(ref) {
          var item = ref.item
          return [
            _vm.change_status
              ? _c(
                  "v-btn",
                  {
                    staticClass: "ma-2 white--text",
                    attrs: { color: item.color, small: "" },
                    on: {
                      click: function($event) {
                        return _vm.changeStatus(item.id, item.status, _vm.type)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " + _vm._s(item.status) + "\n        "
                    )
                  ]
                )
              : _c("v-chip", { attrs: { color: item.color, small: "" } }, [
                  _vm._v("\n            " + _vm._s(item.status) + "\n        ")
                ])
          ]
        }
      },
      {
        key: "item.hash_id",
        fn: function(ref) {
          var item = ref.item
          return [
            _vm.view
              ? _c(
                  "v-btn",
                  {
                    staticClass: "ma-2 white--text",
                    attrs: {
                      color: "primary",
                      small: "",
                      to: { name: _vm.to, params: { id: item.hash_id } }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.__("message.view")) +
                        "\n            "
                    ),
                    _c("v-icon", { attrs: { right: "" } }, [
                      _vm._v("\n                mdi-eye\n            ")
                    ])
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.edit
              ? _c(
                  "v-btn",
                  {
                    staticClass: "ma-2 white--text",
                    attrs: {
                      color: "primary",
                      small: "",
                      to: { name: _vm.edit_path, params: { id: item.hash_id } }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.__("message.edit")) +
                        "\n            "
                    ),
                    _c("v-icon", { attrs: { right: "" } }, [
                      _vm._v("\n                create\n            ")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ui/Loader.vue?vue&type=template&id=5f6506b3&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ui/Loader.vue?vue&type=template&id=5f6506b3&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-overlay",
    { attrs: { value: _vm.show_loader } },
    [_c("v-progress-circular", { attrs: { indeterminate: "", size: "64" } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Brands/Brands.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Admin/Brands/Brands.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brands_vue_vue_type_template_id_283bc1d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brands.vue?vue&type=template&id=283bc1d8&scoped=true& */ "./resources/js/components/Admin/Brands/Brands.vue?vue&type=template&id=283bc1d8&scoped=true&");
/* harmony import */ var _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brands.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Brands/Brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brands_vue_vue_type_template_id_283bc1d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Brands_vue_vue_type_template_id_283bc1d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "283bc1d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Brands/Brands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Brands/Brands.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/Brands/Brands.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Brands/Brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Brands/Brands.vue?vue&type=template&id=283bc1d8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Brands/Brands.vue?vue&type=template&id=283bc1d8&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_283bc1d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=template&id=283bc1d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Brands/Brands.vue?vue&type=template&id=283bc1d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_283bc1d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_283bc1d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/layout/Datatable.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Admin/layout/Datatable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Datatable_vue_vue_type_template_id_0cc2c10a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datatable.vue?vue&type=template&id=0cc2c10a& */ "./resources/js/components/Admin/layout/Datatable.vue?vue&type=template&id=0cc2c10a&");
/* harmony import */ var _Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datatable.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/layout/Datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Datatable_vue_vue_type_template_id_0cc2c10a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Datatable_vue_vue_type_template_id_0cc2c10a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/layout/Datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/layout/Datatable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/layout/Datatable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/layout/Datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/layout/Datatable.vue?vue&type=template&id=0cc2c10a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/layout/Datatable.vue?vue&type=template&id=0cc2c10a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_0cc2c10a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=template&id=0cc2c10a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/layout/Datatable.vue?vue&type=template&id=0cc2c10a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_0cc2c10a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_0cc2c10a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/ui/Loader.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Admin/ui/Loader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_5f6506b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=5f6506b3&scoped=true& */ "./resources/js/components/Admin/ui/Loader.vue?vue&type=template&id=5f6506b3&scoped=true&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/ui/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_5f6506b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_5f6506b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f6506b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/ui/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/ui/Loader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/ui/Loader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ui/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/ui/Loader.vue?vue&type=template&id=5f6506b3&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ui/Loader.vue?vue&type=template&id=5f6506b3&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_5f6506b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=5f6506b3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ui/Loader.vue?vue&type=template&id=5f6506b3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_5f6506b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_5f6506b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);