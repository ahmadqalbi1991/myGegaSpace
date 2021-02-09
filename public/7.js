(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Setup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Setup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        action: 'add'
      }),
      logo_img: 'logo-img',
      show_loader: true,
      haveData: true
    };
  },
  methods: {
    previewFileLogo: function previewFileLogo(event) {
      var img_preview = event.target.files[0];

      if (!img_preview) {
        return false;
      } else {
        this.createImgLogo(img_preview);
        this.logo_img_placeholder = URL.createObjectURL(img_preview);
      }
    },
    previewFileFavicon: function previewFileFavicon(event) {
      var img_preview = event.target.files[0];

      if (!img_preview) {
        return false;
      } else {
        this.createImgFavicon(img_preview);
        this.favicon_img_placeholder = URL.createObjectURL(img_preview);
      }
    },
    saveSetting: function saveSetting() {
      var _this = this;

      this.show_loader = true;
      this.form.post('/save-setting').then(function (response) {
        if (_this.form.action == 'add') {
          _this.form.reset();
        }

        toast.fire({
          icon: response.data['status'],
          title: response.data['message']
        });
      })["catch"](function (response) {
        toast.fire({
          icon: "error",
          title: "Something went wrong"
        });
      });
      this.show_loader = false;
    },
    createImgLogo: function createImgLogo(file) {
      var _this2 = this;

      var reader = new FileReader();

      reader.onload = function (file) {
        _this2.form.logo = reader.result;
      };

      reader.readAsDataURL(file);
    },
    createImgFavicon: function createImgFavicon(file) {
      var _this3 = this;

      var reader = new FileReader();

      reader.onload = function (file) {
        _this3.form.favicon = reader.result;
      };

      reader.readAsDataURL(file);
    },
    loadSetting: function loadSetting() {
      var _this4 = this;

      axios.get('/shop-setting').then(function (data) {
        if (data.data.length != 0) {
          _this4.form.fill(data.data);

          if (data.data.logo_path != null) {
            _this4.logo_img_placeholder = data.data.logo_path;
          }

          if (data.data.favicon) {
            _this4.favicon_img_placeholder = data.data.favicon_path;
          }

          _this4.getCountries();

          _this4.getStates(_this4.form.country);

          _this4.getCities(_this4.form.state);

          _this4.getCountryCode(_this4.form.country);

          _this4.form.action = 'update';
          _this4.haveData = false;
        }

        _this4.show_loader = false;
      });
    }
  },
  components: {
    'shop-loader': _layout_Loader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'editor': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {},
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Setup.vue?vue&type=template&id=e1c9fffc&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Setup.vue?vue&type=template&id=e1c9fffc& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-main",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6" } }, [
                    _c(
                      "h2",
                      {
                        staticClass: "text-uppercase text-swing m-0 text-dark"
                      },
                      [_vm._v(_vm._s(_vm.__("admin.shop-setup")))]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card", { attrs: { loading: _vm.haveData } }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("p", [_vm._v(_vm._s(_vm.__("admin.shop-setup-note")))]),
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
                        _c("div", { staticClass: "shop-form" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "shop_name" } }, [
                                    _vm._v(
                                      _vm._s(_vm.__("admin.shop-name")) + " "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "required_label" },
                                      [_vm._v("*")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.shop_name,
                                        expression: "form.shop_name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "shop_name"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "shop_name",
                                      id: "shop_name",
                                      placeholder: "Please enter shop name"
                                    },
                                    domProps: { value: _vm.form.shop_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "shop_name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "shop_name"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "shop_name" } }, [
                                    _vm._v(
                                      _vm._s(_vm.__("admin.shop-email")) + " "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "required_label" },
                                      [_vm._v("*")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.shop_email,
                                        expression: "form.shop_email"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "shop_email"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "shop_email",
                                      id: "shop_email",
                                      placeholder:
                                        "Please enter shop email address"
                                    },
                                    domProps: { value: _vm.form.shop_email },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "shop_email",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "shop_email"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "country" } }, [
                                    _vm._v(_vm._s(_vm.__("shop.country")))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.country,
                                          expression: "form.country"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "country"
                                        )
                                      },
                                      attrs: { name: "country", id: "country" },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "country",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.getStates(
                                              _vm.form.country
                                            )
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "0", selected: "" } },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.__("shop.select_country")
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.countries, function(country) {
                                        return _c(
                                          "option",
                                          {
                                            key: country.id,
                                            domProps: { value: country.id }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("captilize")(
                                                  country.name
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "country" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "states" } }, [
                                    _vm._v(_vm._s(_vm.__("shop.state")))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.state,
                                          expression: "form.state"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "state"
                                        )
                                      },
                                      attrs: { name: "state", id: "state" },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "state",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.getCities(_vm.form.state)
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "0", selected: "" } },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.__("shop.select_state"))
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.states, function(state) {
                                        return _c(
                                          "option",
                                          {
                                            key: state.id,
                                            domProps: { value: state.id }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("captilize")(state.name)
                                              )
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "state" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "city" } }, [
                                    _vm._v(_vm._s(_vm.__("shop.city")))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.city,
                                          expression: "form.city"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "city"
                                        )
                                      },
                                      attrs: { name: "city", id: "city" },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "city",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.getCountryCode(
                                              _vm.form.country
                                            )
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "0", selected: "" } },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.__("shop.select_city"))
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.cities, function(city) {
                                        return _c(
                                          "option",
                                          {
                                            key: city.id,
                                            domProps: { value: city.id }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("captilize")(city.name)
                                              )
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "city" }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { attrs: { for: "contact_number" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.__("shop.contact-number")) +
                                        " "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "required_label" },
                                      [_vm._v("*")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-3" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.country_code,
                                          expression: "form.country_code"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "country_code",
                                        id: "country_code",
                                        placeholder: "Code"
                                      },
                                      domProps: {
                                        value: _vm.form.country_code
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "country_code",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-md-9" },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.contact_number,
                                            expression: "form.contact_number"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "contact_number"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "contact_number",
                                          id: "contact_number"
                                        },
                                        domProps: {
                                          value: _vm.form.contact_number
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "contact_number",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "contact_number"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "address" } }, [
                                    _vm._v(
                                      _vm._s(_vm.__("shop.address")) + " "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "required_label" },
                                      [_vm._v("*")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.address,
                                        expression: "form.address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "address"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "address",
                                      id: "address",
                                      placeholder: "Please enter address"
                                    },
                                    domProps: { value: _vm.form.address },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "address" }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "facebook_url" } },
                                    [_vm._v(_vm._s(_vm.__("admin.fb-url")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group mb-3" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-text",
                                              attrs: { id: "basic-addon1" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fab fa-facebook-f"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.facebook_url,
                                            expression: "form.facebook_url"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "facebook_url"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "facebook_url",
                                          id: "facebook_url",
                                          placeholder:
                                            "Please enter Facebook URL"
                                        },
                                        domProps: {
                                          value: _vm.form.facebook_url
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "facebook_url",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "facebook_url"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "linkedin_url" } },
                                    [_vm._v(_vm._s(_vm.__("admin.lkd-url")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group mb-3" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-text",
                                              attrs: { id: "linked_icon" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fab fa-linkedin"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.linkedin_url,
                                            expression: "form.linkedin_url"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "linkedin_url"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "linkedin_url",
                                          id: "linkedin_url",
                                          placeholder:
                                            "Please enter Linkedin URL"
                                        },
                                        domProps: {
                                          value: _vm.form.linkedin_url
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "linkedin_url",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "linkedin_url"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "twitter_url" } },
                                    [_vm._v(_vm._s(_vm.__("admin.twt-url")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group mb-3" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-text",
                                              attrs: { id: "basic-addon1" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fab fa-twitter"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.twitter_url,
                                            expression: "form.twitter_url"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "twitter_url"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "twitter_url",
                                          id: "twitter_url",
                                          placeholder:
                                            "Please enter Twitter URL"
                                        },
                                        domProps: {
                                          value: _vm.form.twitter_url
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "twitter_url",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "twitter_url"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "instagram_url" } },
                                    [_vm._v(_vm._s(_vm.__("admin.insta-url")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group mb-3" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-text",
                                              attrs: { id: "basic-addon1" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fab fa-instagram"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.instagram_url,
                                            expression: "form.instagram_url"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "instagram_url"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "instagram_url",
                                          id: "instagram_url",
                                          placeholder:
                                            "Please enter Instagram URL"
                                        },
                                        domProps: {
                                          value: _vm.form.instagram_url
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "instagram_url",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "instagram_url"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "google_url" } },
                                    [_vm._v(_vm._s(_vm.__("admin.gglp-url")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group mb-3" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-text",
                                              attrs: { id: "basic-addon1" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fab fa-google-plus-g"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.google_url,
                                            expression: "form.google_url"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "google_url"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "google_url",
                                          id: "google_url",
                                          placeholder:
                                            "Please enter Google+ URL"
                                        },
                                        domProps: {
                                          value: _vm.form.google_url
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "google_url",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "google_url"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "youtube_url" } },
                                    [_vm._v(_vm._s(_vm.__("admin.utube-url")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group mb-3" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-text",
                                              attrs: { id: "basic-addon1" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fab fa-youtube"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.youtube_url,
                                            expression: "form.youtube_url"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "youtube_url"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "youtube_url",
                                          id: "youtube_url",
                                          placeholder:
                                            "Please enter Youtube URL"
                                        },
                                        domProps: {
                                          value: _vm.form.youtube_url
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "youtube_url",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "youtube_url"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "site-logo" } }, [
                                  _vm._v(_vm._s(_vm.__("admin.logo")) + " "),
                                  _c(
                                    "span",
                                    { staticClass: "required_label" },
                                    [_vm._v("*")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "file-wrapper" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "file",
                                      name: "site_logo",
                                      id: "site_logo"
                                    },
                                    on: { change: _vm.previewFileLogo }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "place_holder" }, [
                                    _c("img", {
                                      attrs: {
                                        src: _vm.logo_img_placeholder,
                                        id: _vm.logo_img
                                      }
                                    })
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { attrs: { for: "site-favicon" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.__("admin.fav-icon")) + " "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "required_label" },
                                      [_vm._v("*")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "file-wrapper" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "file",
                                      name: "site_favicon",
                                      id: "site_favicon"
                                    },
                                    on: { change: _vm.previewFileFavicon }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "place_holder" }, [
                                    _c("img", {
                                      attrs: {
                                        src: _vm.favicon_img_placeholder
                                      }
                                    })
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "form-group" } },
                                    [_vm._v(_vm._s(_vm.__("shop.about-us")))]
                                  ),
                                  _vm._v(" "),
                                  _c("editor", {
                                    staticClass: "form-control",
                                    attrs: {
                                      "api-key":
                                        "rvycvj06b5wb6aw8kx5gxthyfx5mb7iql0vnxsorwfhmyj56",
                                      init: {
                                        height: 250,
                                        menubar: false,
                                        plugins: [
                                          "advlist autolink lists link image charmap print preview anchor",
                                          "searchreplace visualblocks code fullscreen",
                                          "insertdatetime media table paste code help wordcount"
                                        ],
                                        toolbar:
                                          "undo redo | formatselect | bold italic backcolor | \
                                                                            alignleft aligncenter alignright alignjustify | \
                                                                            bullist numlist outdent indent | removeformat | help"
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ])
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
                                _vm.$set(
                                  _vm.form,
                                  "action",
                                  $event.target.value
                                )
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

/***/ "./resources/js/components/Admin/Setup.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Admin/Setup.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setup_vue_vue_type_template_id_e1c9fffc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setup.vue?vue&type=template&id=e1c9fffc& */ "./resources/js/components/Admin/Setup.vue?vue&type=template&id=e1c9fffc&");
/* harmony import */ var _Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setup.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setup_vue_vue_type_template_id_e1c9fffc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Setup_vue_vue_type_template_id_e1c9fffc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Setup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Setup.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Setup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Setup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Setup.vue?vue&type=template&id=e1c9fffc&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/Setup.vue?vue&type=template&id=e1c9fffc& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_e1c9fffc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Setup.vue?vue&type=template&id=e1c9fffc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Setup.vue?vue&type=template&id=e1c9fffc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_e1c9fffc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_e1c9fffc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);