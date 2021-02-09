(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/UserForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/UserForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_BackButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/BackButton.vue */ "./resources/js/components/Admin/ui/BackButton.vue");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);


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



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_2__["validationMixin"]],
  validations: {
    user: {
      first_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(10)
      },
      username: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(10)
      },
      contact_number: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(20)
      },
      last_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(10)
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["email"]
      },
      confirm_email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        sameAsEmail: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["sameAs"])('email')
      },
      identity_card_number: {
        numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["numeric"]
      }
    },
    select: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    },
    checkbox: {
      checked: function checked(val) {
        return val;
      }
    }
  },
  data: function data() {
    return {
      martial_statuses: ['single', 'married', 'divorced', 'separated'],
      roles: [],
      user: {
        id: '',
        name: '',
        first_name: '',
        last_name: '',
        email: '',
        confirm_email: '',
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
        hash_id: '',
        username: ''
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
    makeImage: function makeImage(event) {
      // const img_preview = event.target.files[0];
      this.user_img_placeholder = URL.createObjectURL(this.user.image); // if (!img_preview) {
      //     return false;
      // } else {
      //     this.createImgData(img_preview);
      //
      // }
    },
    createImgData: function createImgData(file) {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (file) {
        _this.user.image = reader.result;
      };

      reader.readAsDataURL(file);
    },
    checkNumeric: function checkNumeric(label, key) {
      var errors = [];
      if (!key.$dirty) return errors;
      !key.numeric && errors.push(this.__('message.mustNumeric', [label]));
      return errors;
    },
    save: function save(date) {
      this.$refs.menu.save(date);
    },
    nameError: function nameError(label, key) {
      var errors = [];
      if (!key.$dirty) return errors;
      !key.maxLength && errors.push(this.__('message.maxLength', [label]));
      !key.required && errors.push(this.__('message.mustRequired', [label]));
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.user.email.$dirty) return errors;
      !this.$v.user.email.email && errors.push('Must be valid e-mail');
      !this.$v.user.email.required && errors.push('E-mail is required');
      return errors;
    },
    confirmField: function confirmField(label, key) {
      var errors = [];
      if (!key.$dirty) return errors;
      !key.sameAsEmail && errors.push(this.__('message.mustBeSame', [label]));
      !key.required && errors.push(this.__('message.mustRequired', [label]));
      return errors;
    },
    rolesList: function rolesList() {
      var roles = [];
      roles.push(this.__('message.super_admin'));
      roles.push(this.__('message.admin'));
      roles.push(this.__('message.accountant'));
      roles.push(this.__('message.manager'));
      roles.push(this.__('message.customer'));
      roles.push(this.__('message.user'));
      this.roles = roles;
    },
    submit: function submit() {
      this.$v.$touch();
    },
    getUser: function getUser() {
      var _this2 = this;

      this.show_loader = true;
      var user_id = null;

      if (this.$route.params.id) {
        user_id = this.$route.params.id;
      }

      axios.get('/user-data', {
        params: {
          id: user_id
        }
      }).then(function (response) {
        _this2.user = response.data.user;
        _this2.items = response.data.user.rights.treeview;
        _this2.values = response.data.user.rights.values;
        _this2.logs = response.data.log;
        _this2.show_loader = false;
        _this2.isEditable = true;
        _this2.user.action = 'edit';
        _this2.user.confirm_email = _this2.user.email;

        _this2.getStates(_this2.user.country_name);

        _this2.getCities(_this2.user.state_name);

        _this2.checkImg();
      });
    },
    checkImg: function checkImg() {
      if (this.user.image) {
        this.user_img_placeholder = this.user.image;
      } else {
        if (this.user.gender) {
          if (this.user.gender == 'male') {
            this.user_img_placeholder = '../img/man.png';
          }

          if (this.user.gender == 'female') {
            this.user_img_placeholder = '../img/woman.png';
          }
        } else {
          this.user_img_placeholder = '../img/placeholder.png';
        }
      }
    }
  },
  components: {
    'back-btn': _ui_BackButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this3.getUser();

            case 2:
              _this3.rolesList();

              _this3.getCountries();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/UserForm.vue?vue&type=template&id=4c0f348c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/UserForm.vue?vue&type=template&id=4c0f348c& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                              _vm._s(_vm._f("captilize")(_vm.user.action)) +
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
                                        "error-messages": _vm.nameError(
                                          _vm.__("message.first_name"),
                                          _vm.$v.user.first_name
                                        ),
                                        counter: 10,
                                        label: _vm.__("message.first_name"),
                                        required: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.user.first_name.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.user.first_name.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.user.first_name,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "first_name", $$v)
                                        },
                                        expression: "user.first_name"
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
                                        "error-messages": _vm.nameError(
                                          _vm.__("message.last_name"),
                                          _vm.$v.user.last_name
                                        ),
                                        counter: 10,
                                        label: _vm.__("message.last_name"),
                                        required: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.user.last_name.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.user.last_name.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.user.last_name,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "last_name", $$v)
                                        },
                                        expression: "user.last_name"
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
                                        "error-messages": _vm.emailErrors(),
                                        label: _vm.__("message.email"),
                                        required: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.user.email.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.user.email.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.user.email,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "email", $$v)
                                        },
                                        expression: "user.email"
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
                                        "error-messages": _vm.confirmField(
                                          _vm.__("message.confirm_email"),
                                          _vm.$v.user.confirm_email
                                        ),
                                        label: _vm.__("message.confirm_email"),
                                        required: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.user.confirm_email.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.user.confirm_email.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.user.confirm_email,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.user,
                                            "confirm_email",
                                            $$v
                                          )
                                        },
                                        expression: "user.confirm_email"
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
                                    _c("label", [
                                      _vm._v(_vm._s(_vm.__("message.gender")))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-radio-group",
                                      {
                                        attrs: { row: "" },
                                        model: {
                                          value: _vm.user.gender,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "gender", $$v)
                                          },
                                          expression: "user.gender"
                                        }
                                      },
                                      [
                                        _c("v-radio", {
                                          attrs: {
                                            label: _vm.__("message.male"),
                                            value: "male"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: _vm.__("message.female"),
                                            value: "female"
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
                                    _c("v-checkbox", {
                                      attrs: {
                                        label: _vm.__("message.is_admin")
                                      },
                                      model: {
                                        value: _vm.user.is_admin,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "is_admin", $$v)
                                        },
                                        expression: "user.is_admin"
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
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.roles,
                                        label: _vm.__("message.role")
                                      },
                                      model: {
                                        value: _vm.user.role,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "role", $$v)
                                        },
                                        expression: "user.role"
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
                                        label: _vm.__("message.country"),
                                        "hide-selected": "",
                                        "small-chips": ""
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.getStates(
                                            _vm.user.country_name
                                          )
                                        }
                                      },
                                      model: {
                                        value: _vm.user.country_name,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.user,
                                            "country_name",
                                            $$v
                                          )
                                        },
                                        expression: "user.country_name"
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
                                        label: _vm.__("message.state"),
                                        "hide-selected": "",
                                        "small-chips": ""
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.getCities(
                                            _vm.user.state_name
                                          )
                                        }
                                      },
                                      model: {
                                        value: _vm.user.state_name,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "state_name", $$v)
                                        },
                                        expression: "user.state_name"
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
                                        label: _vm.__("message.city"),
                                        "hide-selected": "",
                                        "small-chips": ""
                                      },
                                      model: {
                                        value: _vm.user.city_name,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "city_name", $$v)
                                        },
                                        expression: "user.city_name"
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
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.blood_groups,
                                        label: _vm.__("message.blood_group")
                                      },
                                      model: {
                                        value: _vm.user.blood_group,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "blood_group", $$v)
                                        },
                                        expression: "user.blood_group"
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
                                    _c(
                                      "v-menu",
                                      {
                                        ref: "menu",
                                        attrs: {
                                          "close-on-content-click": false,
                                          transition: "scale-transition",
                                          "offset-y": "",
                                          "min-width": "auto"
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "v-text-field",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        attrs: {
                                                          label:
                                                            "Birthday date",
                                                          "prepend-icon":
                                                            "mdi-calendar",
                                                          readonly: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.user
                                                              .date_of_birth,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.user,
                                                              "date_of_birth",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "user.date_of_birth"
                                                        }
                                                      },
                                                      "v-text-field",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  )
                                                )
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.menu,
                                          callback: function($$v) {
                                            _vm.menu = $$v
                                          },
                                          expression: "menu"
                                        }
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("v-date-picker", {
                                          ref: "picker",
                                          attrs: {
                                            max: new Date()
                                              .toISOString()
                                              .substr(0, 10),
                                            min: "1950-01-01"
                                          },
                                          on: { change: _vm.save },
                                          model: {
                                            value: _vm.user.date_of_birth,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "date_of_birth",
                                                $$v
                                              )
                                            },
                                            expression: "user.date_of_birth"
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
                                    _c("v-text-field", {
                                      attrs: {
                                        "error-messages": _vm.checkNumeric(
                                          _vm.__("message.cnic"),
                                          _vm.$v.user.identity_card_number
                                        ),
                                        label: _vm.__("message.cnic")
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.user.identity_card_number.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.user.identity_card_number.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.user.identity_card_number,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.user,
                                            "identity_card_number",
                                            $$v
                                          )
                                        },
                                        expression: "user.identity_card_number"
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
                                    _c("v-text-field", {
                                      attrs: {
                                        "error-messages": _vm.nameError(
                                          _vm.__("message.username"),
                                          _vm.$v.user.username
                                        ),
                                        counter: 10,
                                        label: _vm.__("message.username"),
                                        required: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.user.username.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.user.username.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.user.username,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "username", $$v)
                                        },
                                        expression: "user.username"
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
                                    _c("v-text-field", {
                                      attrs: {
                                        "error-messages": _vm.nameError(
                                          _vm.__("message.contact-number"),
                                          _vm.$v.user.contact_number
                                        ),
                                        counter: 20,
                                        label: _vm.__("message.contact-number"),
                                        required: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$v.user.contact_number.$touch()
                                        },
                                        blur: function($event) {
                                          return _vm.$v.user.contact_number.$touch()
                                        }
                                      },
                                      model: {
                                        value: _vm.user.contact_number,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.user,
                                            "contact_number",
                                            $$v
                                          )
                                        },
                                        expression: "user.contact_number"
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
                                    _c("v-textarea", {
                                      attrs: {
                                        label: _vm.__("message.address"),
                                        "auto-grow": "",
                                        counter: "",
                                        rows: "1",
                                        "row-height": "15"
                                      },
                                      model: {
                                        value: _vm.user.address,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "address", $$v)
                                        },
                                        expression: "user.address"
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
                                      lg: "8",
                                      md: "6",
                                      sm: "12"
                                    }
                                  },
                                  [
                                    _c("v-file-input", {
                                      attrs: {
                                        accept: "image/*",
                                        label: _vm.__(
                                          "message.choose_profile_pic"
                                        ),
                                        "prepend-icon": "mdi-camera",
                                        counter: "",
                                        "show-size": ""
                                      },
                                      on: { change: _vm.makeImage },
                                      model: {
                                        value: _vm.user.image,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "image", $$v)
                                        },
                                        expression: "user.image"
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
                                    _c("v-avatar", { attrs: { size: "100" } }, [
                                      _c("img", {
                                        attrs: {
                                          src: this.user_img_placeholder,
                                          alt: _vm.user.name
                                        }
                                      })
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "mr-4",
                                on: { click: _vm.submit }
                              },
                              [
                                _vm._v(
                                  "\n                                submit\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-btn", { on: { click: _vm.clear } }, [
                              _vm._v(
                                "\n                                clear\n                            "
                              )
                            ])
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

/***/ "./resources/js/components/Admin/UserForm.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Admin/UserForm.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserForm_vue_vue_type_template_id_4c0f348c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=4c0f348c& */ "./resources/js/components/Admin/UserForm.vue?vue&type=template&id=4c0f348c&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_4c0f348c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserForm_vue_vue_type_template_id_4c0f348c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/UserForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/UserForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/UserForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/UserForm.vue?vue&type=template&id=4c0f348c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/UserForm.vue?vue&type=template&id=4c0f348c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_4c0f348c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=template&id=4c0f348c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/UserForm.vue?vue&type=template&id=4c0f348c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_4c0f348c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_4c0f348c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);