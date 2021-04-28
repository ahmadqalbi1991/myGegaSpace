(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_BackButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/BackButton.vue */ "./resources/js/components/Admin/ui/BackButton.vue");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Loader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Loader.vue */ "./resources/js/components/Admin/ui/Loader.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_2__["validationMixin"]],
  name: "EmailTemplateForm",
  validations: {
    template: {
      subject: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      body: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      type: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      }
    }
  },
  data: function data() {
    return {
      template: {
        subject: '',
        body: '',
        type: '',
        show_login_btn: '',
        action: 'add'
      },
      types: []
    };
  },
  methods: {
    requiredError: function requiredError(label, key) {
      var errors = [];
      if (!key.$dirty) return errors;
      !key.required && errors.push(this.__('message.mustRequired', [label]));
      return errors;
    },
    typesList: function typesList() {
      var types = [];
      types.push({
        type: this.__('message.admin_welcome'),
        value: 'admin_welcome'
      });
      types.push({
        type: this.__('message.customer_welcome'),
        value: 'customer_welcome'
      });
      types.push({
        type: this.__('message.customer_orders_list'),
        value: 'customer_orders_list'
      });
      types.push({
        type: this.__('message.admin_orders_list'),
        value: 'admin_orders_list'
      });
      types.push({
        type: this.__('message.payment_confirm_customer'),
        value: 'payment_confirm_customer'
      });
      types.push({
        type: this.__('message.payment_confirm_admin'),
        value: 'payment_confirm_admin'
      });
      this.types = types;
    },
    saveTemplate: function saveTemplate() {
      var _this = this;

      this.show_loader = true;
      this.$v.template.$touch();
      axios({
        method: "POST",
        url: '/save-email-template',
        data: this.template
      }).then(function (response) {
        if (response.data.status === 'error' && response.data.error_type === 'validation') {
          _this.snackbar = true;
          _this.snackbar_icon = response.data.icon;
          _this.snackbar_text = response.data.error_message;
          return;
        } else {
          if (_this.template.action === 'add') {
            _this.resetForm(_this.template);

            _this.template.action = 'add';

            _this.$v.template.$reset();
          }

          _this.snackbar = true;
          _this.snackbar_text = response.data.message;
          _this.snackbar_icon = response.data.icon;
          _this.snackbar_color = response.data.status;
        }

        _this.show_loader = false;
      });

      if (this.template.action !== 'add') {
        this.getEmailTemplate();
      }
    },
    getTemplate: function getTemplate() {
      var _this2 = this;

      if (this.$route.params.id) {
        this.show_loader = true;
        axios.get('/email-template-data', {
          params: {
            id: this.$route.params.id
          }
        }).then(function (response) {
          _this2.template = response.data;
          _this2.template.action = 'edit';
          _this2.show_loader = false;
        });
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this3.getTemplate();

            case 2:
              _this3.typesList();

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=template&id=144b910e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=template&id=144b910e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
                    { attrs: { loading: _vm.show_loader, elevation: "10" } },
                    [
                      _c(
                        "v-card-title",
                        [
                          _c("h3", [
                            _vm._v(
                              _vm._s(
                                _vm._f("capitalize")(_vm.template.action)
                              ) +
                                " " +
                                _vm._s(_vm.__("message.profile"))
                            )
                          ]),
                          _vm._v(" "),
                          _c("back-btn")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-wrapper" }, [
                        _c(
                          "form",
                          { attrs: { id: "email-template-form" } },
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
                                        "error-messages": _vm.requiredError(
                                          _vm.__("message.subject"),
                                          _vm.$v.template.subject
                                        ),
                                        counter: 50,
                                        label: _vm.__("message.subject"),
                                        required: "",
                                        "prepend-icon": "subject"
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.template.subject.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.template.subject.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.template.subject,
                                        callback: function($$v) {
                                          _vm.$set(_vm.template, "subject", $$v)
                                        },
                                        expression: "template.subject"
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
                                  { attrs: { cols: "12" } },
                                  [
                                    _c("v-textarea", {
                                      attrs: {
                                        filled: "",
                                        label: _vm.__("message.message_body"),
                                        "auto-grow": "",
                                        counter: "",
                                        clearable: "",
                                        "error-messages": _vm.requiredError(
                                          _vm.__("message.message_body"),
                                          _vm.$v.template.body
                                        ),
                                        required: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.template.body.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.template.body.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.template.body,
                                        callback: function($$v) {
                                          _vm.$set(_vm.template, "body", $$v)
                                        },
                                        expression: "template.body"
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
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.types,
                                        "item-text": "type",
                                        "item-value": "value",
                                        label: _vm.__("message.type"),
                                        "prepend-icon": "list",
                                        "error-messages": _vm.requiredError(
                                          _vm.__("message.type"),
                                          _vm.$v.template.type
                                        )
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.template.type.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.template.type.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.template.type,
                                        callback: function($$v) {
                                          _vm.$set(_vm.template, "type", $$v)
                                        },
                                        expression: "template.type"
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
                                    _c("v-checkbox", {
                                      attrs: {
                                        label: _vm.__("message.allow_login_btn")
                                      },
                                      model: {
                                        value: _vm.template.show_login_btn,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.template,
                                            "show_login_btn",
                                            $$v
                                          )
                                        },
                                        expression: "template.show_login_btn"
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
                                _c("v-col", { attrs: { cols: "12" } }, [
                                  _c(
                                    "div",
                                    { staticClass: "buttons" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mr-4",
                                          attrs: {
                                            outlined: "",
                                            right: "",
                                            loading: _vm.show_loader
                                          },
                                          on: { click: _vm.saveTemplate }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(_vm.__("message.save")) +
                                              "\n                                            "
                                          ),
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                right: "",
                                                color: "success"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                save\n                                            "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
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
      staticClass: "ma-2",
      attrs: { absolute: "", right: "", elevation: "10", outlined: "" },
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

/***/ "./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailTemplateForm_vue_vue_type_template_id_144b910e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailTemplateForm.vue?vue&type=template&id=144b910e&scoped=true& */ "./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=template&id=144b910e&scoped=true&");
/* harmony import */ var _EmailTemplateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailTemplateForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailTemplateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailTemplateForm_vue_vue_type_template_id_144b910e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailTemplateForm_vue_vue_type_template_id_144b910e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "144b910e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailTemplateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailTemplateForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailTemplateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=template&id=144b910e&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=template&id=144b910e&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailTemplateForm_vue_vue_type_template_id_144b910e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailTemplateForm.vue?vue&type=template&id=144b910e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/EmailTemplates/EmailTemplateForm.vue?vue&type=template&id=144b910e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailTemplateForm_vue_vue_type_template_id_144b910e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailTemplateForm_vue_vue_type_template_id_144b910e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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