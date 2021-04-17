(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_BackButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/BackButton.vue */ "./resources/js/components/Admin/ui/BackButton.vue");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Loader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Loader.vue */ "./resources/js/components/Admin/ui/Loader.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ShopSetup",
  data: function data() {
    return {
      shop_setting: {
        shop_name: '',
        shop_email: '',
        country_id: '',
        state_id: '',
        city_id: '',
        country_code: '',
        contact_number: '',
        address: '',
        facebook_url: '',
        linkedin_url: '',
        twitter_url: '',
        instagram_url: '',
        google_url: '',
        about_us: '',
        youtube_url: '',
        logo: [],
        logo_name: '',
        favicon: [],
        favicon_name: '',
        new_products: null,
        partners: null,
        services: null,
        categories: null,
        contact_section: null,
        featured_products: null,
        subscribe: null,
        recent_products: null,
        customer_section: null,
        action: 'add'
      },
      logo_placeholder: '',
      favicon_placeholder: '',
      has_data: false
    };
  },
  methods: {
    makeEditable: function makeEditable() {
      if (this.has_data) {
        this.has_data = false;
      } else {
        this.has_data = true;
      }
    },
    makeLogo: function makeLogo() {
      this.logo_placeholder = URL.createObjectURL(this.shop_setting.logo_name);
    },
    makeFavicon: function makeFavicon() {
      this.favicon_placeholder = URL.createObjectURL(this.shop_setting.favicon_name);
    },
    createLogoData: function createLogoData(file) {
      var _this = this;

      var reader = new FileReader();
      this.makeLogo();

      reader.onload = function (file) {
        console.log(reader.result);
        _this.shop_setting.logo = reader.result;
      };

      reader.readAsDataURL(file);
    },
    createFaviconData: function createFaviconData(file) {
      var _this2 = this;

      var reader = new FileReader();
      this.makeFavicon();

      reader.onload = function (file) {
        console.log(reader.result);
        _this2.shop_setting.favicon = reader.result;
      };

      reader.readAsDataURL(file);
    },
    loadSetting: function loadSetting() {
      var _this3 = this;

      axios.get('/shop-setting').then(function (data) {
        if (data.data.length != 0) {
          _this3.shop_setting = data.data;

          if (data.data.logo_path != null) {
            _this3.logo_placeholder = data.data.logo_path;
          }

          if (data.data.favicon) {
            _this3.favicon_placeholder = data.data.favicon_path;
          }

          _this3.getCountries();

          _this3.getStates(_this3.shop_setting.country_id);

          _this3.getCities(_this3.shop_setting.state_id);

          _this3.show_loader = false;
          _this3.has_data = true;
          _this3.shop_setting.action = 'edit';
        }
      });
    },
    saveSetting: function saveSetting() {
      var _this4 = this;

      this.show_loader = true;
      axios({
        method: 'POST',
        url: '/save-setting',
        data: this.shop_setting
      }).then(function (response) {
        _this4.snackbar = true;
        _this4.snackbar_text = response.data.message;
        _this4.snackbar_icon = response.data.icon;
        _this4.snackbar_color = response.data.status;
        _this4.show_loader = false;
      });

      if (this.shop_setting.action !== 'add') {
        this.loadSetting();
      }
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this5.getCountries();

              _context.next = 3;
              return _this5.loadSetting();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  components: {
    'back-btn': _ui_BackButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'loader': _ui_Loader_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ui/BackButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ui/BackButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BackButton.vue"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=template&id=05101234&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=template&id=05101234&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-card",
                    { attrs: { elevation: "10" } },
                    [
                      _c(
                        "v-card-title",
                        [
                          _c("h3", [
                            _vm._v(_vm._s(_vm.__("message.shop-setup")))
                          ]),
                          _vm._v(" "),
                          _c("back-btn")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "card-wrapper" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      counter: 25,
                                      label: _vm.__("message.shop-name"),
                                      required: "",
                                      readonly: _vm.has_data,
                                      "prepend-icon": "subject"
                                    },
                                    model: {
                                      value: _vm.shop_setting.shop_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "shop_name",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.shop_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: _vm.__("message.shop-email"),
                                      required: "",
                                      readonly: _vm.has_data,
                                      "prepend-icon": "alternate_email"
                                    },
                                    model: {
                                      value: _vm.shop_setting.shop_email,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "shop_email",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.shop_email"
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
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "4",
                                    md: "4",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      items: _vm.countries,
                                      "item-value": "id",
                                      "item-text": "name",
                                      label: _vm.__("message.country"),
                                      "hide-selected": "",
                                      "small-chips": "",
                                      readonly: _vm.has_data,
                                      "prepend-icon": "flag"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.getStates(
                                          _vm.shop_setting.country_id
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.shop_setting.country_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "country_name",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.country_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "4",
                                    md: "4",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      items: _vm.states,
                                      "item-text": "name",
                                      "item-value": "id",
                                      label: _vm.__("message.state"),
                                      "hide-selected": "",
                                      "small-chips": "",
                                      readonly: _vm.has_data,
                                      "prepend-icon": "flag"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.getCities(
                                          _vm.shop_setting.state_id
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.shop_setting.state_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "state_name",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.state_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "4",
                                    md: "4",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      items: _vm.cities,
                                      "item-text": "name",
                                      "item-value": "id",
                                      label: _vm.__("message.city"),
                                      "hide-selected": "",
                                      "small-chips": "",
                                      readonly: _vm.has_data,
                                      "prepend-icon": "flag"
                                    },
                                    model: {
                                      value: _vm.shop_setting.city_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "city_name",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.city_name"
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
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              required: "",
                                              readonly: _vm.has_data,
                                              "prepend-icon": "contact_phone"
                                            },
                                            model: {
                                              value: _vm.country_code,
                                              callback: function($$v) {
                                                _vm.country_code = $$v
                                              },
                                              expression: "country_code"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "9" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              counter: 15,
                                              required: "",
                                              readonly: _vm.has_data,
                                              label: _vm.__(
                                                "message.contact-number"
                                              )
                                            },
                                            model: {
                                              value:
                                                _vm.shop_setting.contact_number,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.shop_setting,
                                                  "contact_number",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "shop_setting.contact_number"
                                            }
                                          })
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
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-textarea", {
                                    attrs: {
                                      label: _vm.__("message.address"),
                                      "auto-grow": "",
                                      counter: "",
                                      rows: "1",
                                      readonly: _vm.has_data,
                                      "row-height": "15",
                                      "prepend-icon": "home"
                                    },
                                    model: {
                                      value: _vm.shop_setting.address,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "address",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.address"
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
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: _vm.__("message.fb-url"),
                                      readonly: _vm.has_data,
                                      "prepend-icon": "facebook"
                                    },
                                    model: {
                                      value: _vm.shop_setting.facebook_url,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "facebook_url",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.facebook_url"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: _vm.__("message.lkd-url"),
                                      readonly: _vm.has_data,
                                      "prepend-icon": "fab fa-linkedin"
                                    },
                                    model: {
                                      value: _vm.shop_setting.linkedin_url,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "linkedin_url",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.linkedin_url"
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
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: _vm.__("message.twt-url"),
                                      readonly: _vm.has_data,
                                      "prepend-icon": "facebook"
                                    },
                                    model: {
                                      value: _vm.shop_setting.twitter_url,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "twitter_url",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.twitter_url"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: _vm.__("message.gglp-url"),
                                      readonly: _vm.has_data,
                                      "prepend-icon":
                                        "fab fa-google-plus-square"
                                    },
                                    model: {
                                      value: _vm.shop_setting.google_url,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "google_url",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.google_url"
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
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: _vm.__("message.insta-url"),
                                      readonly: _vm.has_data,
                                      "prepend-icon": "fab fa-instagram"
                                    },
                                    model: {
                                      value: _vm.shop_setting.instagram_url,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "instagram_url",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.instagram_url"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: _vm.__("message.utube-url"),
                                      readonly: _vm.has_data,
                                      "prepend-icon": "fab fa-youtube"
                                    },
                                    model: {
                                      value: _vm.shop_setting.youtube_url,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.shop_setting,
                                          "youtube_url",
                                          $$v
                                        )
                                      },
                                      expression: "shop_setting.youtube_url"
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
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            lg: "8",
                                            md: "6",
                                            sm: "12"
                                          }
                                        },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              accept: "image/*",
                                              label: _vm.__("message.logo"),
                                              "prepend-icon": "mdi-camera",
                                              counter: "",
                                              "show-size": "",
                                              disabled: _vm.has_data,
                                              type: "file"
                                            },
                                            on: { change: _vm.createLogoData },
                                            model: {
                                              value: _vm.shop_setting.logo_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.shop_setting,
                                                  "logo_name",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "shop_setting.logo_name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            lg: "4",
                                            md: "6",
                                            sm: "12"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-avatar",
                                            { attrs: { size: "100" } },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: this.logo_placeholder,
                                                  alt:
                                                    _vm.shop_setting.shop_name
                                                }
                                              })
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "6",
                                    sm: "12"
                                  }
                                },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            lg: "8",
                                            md: "6",
                                            sm: "12"
                                          }
                                        },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              accept: "image/*",
                                              label: _vm.__("message.fav-icon"),
                                              "prepend-icon": "mdi-camera",
                                              counter: "",
                                              "show-size": "",
                                              disabled: _vm.has_data,
                                              type: "file"
                                            },
                                            on: {
                                              change: _vm.createFaviconData
                                            },
                                            model: {
                                              value:
                                                _vm.shop_setting.favicon_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.shop_setting,
                                                  "favicon_name",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "shop_setting.favicon_name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            lg: "4",
                                            md: "6",
                                            sm: "12"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-avatar",
                                            { attrs: { size: "100" } },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: this.favicon_placeholder,
                                                  alt:
                                                    _vm.shop_setting.shop_name
                                                }
                                              })
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-expansion-panels",
                                    { attrs: { inset: "" } },
                                    [
                                      _c(
                                        "v-expansion-panel",
                                        [
                                          _c("v-expansion-panel-header", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.__("message.home-setup")
                                              ) +
                                                "\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("v-expansion-panel-content", [
                                            _c(
                                              "div",
                                              { staticClass: "card-wrapper" },
                                              [
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.new-products-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting
                                                        .new_products,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "new_products",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.new_products"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.service-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting.services,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "services",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.services"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.categories-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting
                                                        .categories,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "categories",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.categories"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.contact-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting
                                                        .contact_section,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "contact_section",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.contact_section"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.featured-products-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting
                                                        .featured_products,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "featured_products",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.featured_products"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.subscribe-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting
                                                        .subscribe,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "subscribe",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.subscribe"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.recent-products-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting
                                                        .recent_products,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "recent_products",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.recent_products"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.customer-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting
                                                        .customer_section,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "customer_section",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.customer_section"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-switch", {
                                                  attrs: {
                                                    color: "primary",
                                                    value: "",
                                                    disabled: _vm.has_data,
                                                    label: _vm.__(
                                                      "message.partner-section"
                                                    ),
                                                    inset: "",
                                                    "input-value": "true"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting.partners,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "partners",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.partners"
                                                  }
                                                })
                                              ],
                                              1
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
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-expansion-panels",
                                    { attrs: { inset: "" } },
                                    [
                                      _c(
                                        "v-expansion-panel",
                                        [
                                          _c("v-expansion-panel-header", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.__("message.about-us")
                                              ) +
                                                "\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("v-expansion-panel-content", [
                                            _c(
                                              "div",
                                              { staticClass: "card-wrapper" },
                                              [
                                                _c("v-textarea", {
                                                  attrs: {
                                                    label: _vm.__(
                                                      "message.about-us"
                                                    ),
                                                    counter: "",
                                                    rows: "10",
                                                    readonly: _vm.has_data
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.shop_setting.about_us,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.shop_setting,
                                                        "about_us",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "shop_setting.about_us"
                                                  }
                                                })
                                              ],
                                              1
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
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "12" } }, [
                                _c(
                                  "div",
                                  { staticClass: "buttons" },
                                  [
                                    !_vm.has_data
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-4",
                                            attrs: {
                                              color: "success",
                                              right: "",
                                              loading: _vm.show_loader
                                            },
                                            on: { click: _vm.saveSetting }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.__("message.save")) +
                                                "\n                                    "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.has_data
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-4",
                                            attrs: {
                                              color: "primary",
                                              right: ""
                                            },
                                            on: { click: _vm.makeEditable }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.__("message.edit")) +
                                                "\n                                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ui/BackButton.vue?vue&type=template&id=11fd7e99&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ui/BackButton.vue?vue&type=template&id=11fd7e99&scoped=true& ***!
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
    "v-btn",
    {
      staticClass: "ma-2 white--text",
      attrs: { absolute: "", right: "", elevation: "10", color: "primary" },
      on: {
        click: function($event) {
          return _vm.$router.go(-1)
        }
      }
    },
    [_vm._v("\n    " + _vm._s(_vm.__("message.back")) + "\n")]
  )
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

/***/ "./resources/js/components/Admin/Settings/ShopSetup.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/ShopSetup.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopSetup_vue_vue_type_template_id_05101234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopSetup.vue?vue&type=template&id=05101234&scoped=true& */ "./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=template&id=05101234&scoped=true&");
/* harmony import */ var _ShopSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopSetup.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopSetup_vue_vue_type_template_id_05101234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopSetup_vue_vue_type_template_id_05101234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "05101234",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/ShopSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=template&id=05101234&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=template&id=05101234&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSetup_vue_vue_type_template_id_05101234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopSetup.vue?vue&type=template&id=05101234&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/ShopSetup.vue?vue&type=template&id=05101234&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSetup_vue_vue_type_template_id_05101234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSetup_vue_vue_type_template_id_05101234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/ui/BackButton.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Admin/ui/BackButton.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackButton_vue_vue_type_template_id_11fd7e99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton.vue?vue&type=template&id=11fd7e99&scoped=true& */ "./resources/js/components/Admin/ui/BackButton.vue?vue&type=template&id=11fd7e99&scoped=true&");
/* harmony import */ var _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackButton.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/ui/BackButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackButton_vue_vue_type_template_id_11fd7e99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackButton_vue_vue_type_template_id_11fd7e99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11fd7e99",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/ui/BackButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/ui/BackButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/ui/BackButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BackButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ui/BackButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/ui/BackButton.vue?vue&type=template&id=11fd7e99&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ui/BackButton.vue?vue&type=template&id=11fd7e99&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_11fd7e99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BackButton.vue?vue&type=template&id=11fd7e99&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ui/BackButton.vue?vue&type=template&id=11fd7e99&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_11fd7e99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_11fd7e99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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