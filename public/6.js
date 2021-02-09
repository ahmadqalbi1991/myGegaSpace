(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HomeSetup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/HomeSetup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Loader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/Loader.vue */ "./resources/js/components/Admin/layout/Loader.vue");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['loader'],
  data: function data() {
    return {
      form: new Form({
        id: null,
        shop_name: '',
        shop_email: '',
        country: '',
        state: '',
        city: '',
        country_code: '',
        contact_number: '',
        address: '',
        facebook_url: '',
        linkedin_url: '',
        twitter_url: '',
        instagram_url: '',
        google_url: '',
        youtube_url: '',
        logo: null,
        favicon: '',
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
      }),
      logo_img: 'logo-img',
      show_loader: true,
      shop_data_is_null: true
    };
  },
  methods: {
    previewFileLogo: function previewFileLogo(event) {
      var img_preview = event.target.files[0];

      if (!img_preview) {
        return false;
      } else {
        this.createImg(img_preview);
        this.logo_img_placeholder = URL.createObjectURL(img_preview);
      }
    },
    previewFileFavicon: function previewFileFavicon(event) {
      var img_preview = event.target.files[0];
      this.favicon_img_placeholder = URL.createObjectURL(img_preview);
    },
    saveSetting: function saveSetting() {
      var _this = this;

      this.show_loader = true;
      this.form.post('/save-setting').then(function () {
        _this.show_loader = false;
      });
    },
    createImg: function createImg(file) {
      var _this2 = this;

      var reader = new FileReader();

      reader.onload = function (file) {
        _this2.form.logo = reader.result;
      };

      reader.readAsDataURL(file);
    },
    loadSetting: function loadSetting() {
      var _this3 = this;

      axios.get('/shop-setting').then(function (data) {
        if (data.data.length != 0) {
          _this3.form.fill(data.data);

          _this3.shop_data_is_null = false;
          _this3.form.action = 'update';
        }

        _this3.show_loader = false;
      });
    }
  },
  components: {
    'shop-loader': _layout_Loader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'editor': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {},
  mounted: function mounted() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this4.loadSetting();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HomeSetup.vue?vue&type=template&id=5cb3b763&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/HomeSetup.vue?vue&type=template&id=5cb3b763& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content" },
    [
      _c("shop-loader", { attrs: { loader: _vm.show_loader } }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row mb-2 title-header" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c("h2", { staticClass: "m-0 text-dark" }, [
                _vm._v(_vm._s(_vm.__("admin.home-setup")))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("p", [_vm._v(_vm._s(_vm.__("admin.home-setup-note")))]),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.saveSetting($event)
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.shop_data_is_null,
                              expression: "shop_data_is_null"
                            }
                          ]
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c("div", { staticClass: "col-sm-8" }, [
                                _c("div", { staticClass: "card" }, [
                                  _c("div", { staticClass: "card-body" }, [
                                    _c("h5", { staticClass: "card-title" }, [
                                      _vm._v(_vm._s(_vm.__("shop.oh")))
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "card-text" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.__(
                                            "admin.save-general-setting-message"
                                          )
                                        )
                                      )
                                    ])
                                  ])
                                ])
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "shop-form" }, [
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.__("admin.new-products-section")) +
                                "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.new_products,
                                expression: "form.new_products"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: { id: "new_products", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.form.new_products)
                                ? _vm._i(_vm.form.new_products, null) > -1
                                : _vm.form.new_products
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.new_products,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "new_products",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "new_products",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "new_products", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "new_products"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.__("admin.partner-section")) + "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.partners,
                                expression: "form.partners"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: { id: "partner", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.form.partners)
                                ? _vm._i(_vm.form.partners, null) > -1
                                : _vm.form.partners
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.partners,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "partners",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "partners",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "partners", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "partner"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.__("admin.service-section")) + "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.services,
                                expression: "form.services"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: { id: "service", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.form.services)
                                ? _vm._i(_vm.form.services, null) > -1
                                : _vm.form.services
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.services,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "services",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "services",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "services", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "service"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.__("admin.categories-section")) + "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.categories,
                                expression: "form.categories"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: { id: "categories", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.form.categories)
                                ? _vm._i(_vm.form.categories, null) > -1
                                : _vm.form.categories
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.categories,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "categories",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "categories",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "categories", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "categories"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.__("admin.contact-section")) + "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.contact_section,
                                expression: "form.contact_section"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: { id: "contact_section", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.form.contact_section)
                                ? _vm._i(_vm.form.contact_section, null) > -1
                                : _vm.form.contact_section
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.contact_section,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "contact_section",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "contact_section",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "contact_section", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "contact_section"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(
                                _vm.__("admin.featured-products-section")
                              ) + "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.featured_products,
                                expression: "form.featured_products"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: { id: "featured", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.form.featured_products)
                                ? _vm._i(_vm.form.featured_products, null) > -1
                                : _vm.form.featured_products
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.featured_products,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "featured_products",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "featured_products",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "featured_products", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "featured"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.__("admin.subscribe-section")) + "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.subscribe,
                                expression: "form.subscribe"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: {
                              id: "subscribe_section",
                              type: "checkbox"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.form.subscribe)
                                ? _vm._i(_vm.form.subscribe, null) > -1
                                : _vm.form.subscribe
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.subscribe,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "subscribe",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "subscribe",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "subscribe", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "subscribe_section"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.__("admin.recent-products-section")) +
                                "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.recent_products,
                                expression: "form.recent_products"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: { id: "recent_products", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.form.recent_products)
                                ? _vm._i(_vm.form.recent_products, null) > -1
                                : _vm.form.recent_products
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.recent_products,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "recent_products",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "recent_products",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "recent_products", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "recent_products"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "checkbox-wrapper" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.__("admin.customer-section")) + "  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.customer_section,
                                expression: "form.customer_section"
                              }
                            ],
                            staticClass: "tgl tgl-skewed",
                            attrs: { id: "customer_section", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.form.customer_section)
                                ? _vm._i(_vm.form.customer_section, null) > -1
                                : _vm.form.customer_section
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.customer_section,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "customer_section",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "customer_section",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "customer_section", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "tgl-btn",
                            attrs: {
                              "data-tg-off": "OFF",
                              "data-tg-on": "ON",
                              for: "customer_section"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.action,
                              expression: "form.action"
                            }
                          ],
                          attrs: { type: "hidden", name: "action" },
                          domProps: { value: _vm.form.action },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "action", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.id,
                              expression: "form.id"
                            }
                          ],
                          attrs: { type: "hidden", name: "action" },
                          domProps: { value: _vm.form.id },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "id", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-success admin-btn float-right",
                            attrs: { type: "submit" }
                          },
                          [_vm._v(_vm._s(_vm.__("admin.save-setting")))]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/HomeSetup.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Admin/HomeSetup.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeSetup_vue_vue_type_template_id_5cb3b763___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeSetup.vue?vue&type=template&id=5cb3b763& */ "./resources/js/components/Admin/HomeSetup.vue?vue&type=template&id=5cb3b763&");
/* harmony import */ var _HomeSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeSetup.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/HomeSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeSetup_vue_vue_type_template_id_5cb3b763___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeSetup_vue_vue_type_template_id_5cb3b763___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/HomeSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/HomeSetup.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/HomeSetup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HomeSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/HomeSetup.vue?vue&type=template&id=5cb3b763&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Admin/HomeSetup.vue?vue&type=template&id=5cb3b763& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSetup_vue_vue_type_template_id_5cb3b763___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeSetup.vue?vue&type=template&id=5cb3b763& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HomeSetup.vue?vue&type=template&id=5cb3b763&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSetup_vue_vue_type_template_id_5cb3b763___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSetup_vue_vue_type_template_id_5cb3b763___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);