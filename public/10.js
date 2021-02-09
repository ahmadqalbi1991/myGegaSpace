(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Users_bk.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Loader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/Loader.vue */ "./resources/js/components/Admin/layout/Loader.vue");


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


var _data;

var mockServer = function mockServer(res) {
  var datas = serverData.slice();
  var allKeys = Object.keys(_data[0]); // do filter

  res && res.filters && res.filters.forEach(function (filter) {
    datas = datas.filter(function (data) {
      var props = filter.search_prop && [].concat(filter.search_prop) || allKeys;
      return props.some(function (prop) {
        if (!filter.value || filter.value.length === 0) {
          return true;
        }

        return [].concat(filter.value).some(function (val) {
          return data[prop].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      });
    });
  }); // do sort

  if (res.sort && res.sort.order) {
    var order = res.sort.order;
    var prop = res.sort.prop;
    var isDescending = order === "descending";
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
    total: datas.length
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      data: _data,
      titles: [{
        prop: "sr",
        label: "#"
      }, {
        prop: "name",
        label: "Name"
      }, {
        prop: "email",
        label: "Email"
      }],
      filters: [{
        prop: ["name"],
        value: ""
      }],
      actionCol: {
        props: {
          label: "Actions"
        },
        buttons: [{
          props: {
            type: "primary el-button--small is-circle",
            icon: "el-icon-view"
          },
          handler: function handler(row) {
            if (_this.haveRight("users.view")) {
              _this.$router.push({
                name: 'editUser',
                params: {
                  id: row.hash_id
                }
              });
            } else {
              var message = _this.__("admin.right_error");

              toast.fire({
                icon: "error",
                title: message
              });
            }
          } // label: "Edit",

        }, {
          props: {
            type: "danger el-button--small is-circle",
            icon: "el-icon-delete"
          },
          handler: function handler(row) {
            _this.data.splice(_this.data.indexOf(row), 1);

            _this.$message("delete success");
          } // label: "Delete",

        }]
      },
      show_loader: true
    };
  },
  methods: {
    getUsers: function getUsers() {
      var _this2 = this;

      this.show_loader = true;
      axios.get('/users-data').then(function (response) {
        _this2.data = response.data;
        _this2.show_loader = false;
      });
    },
    bulkDelete: function bulkDelete() {
      var _this3 = this;

      this.selectedRow.map(function (row) {
        _this3.data.splice(_this3.data.indexOf(row), 1);
      });
      this.$message("bulk delete success");
    }
  },
  components: {
    'shop-loader': _layout_Loader_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
              return _this4.getUsers();

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Users_bk.vue?vue&type=template&id=4782960d& ***!
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
    "div",
    { staticClass: "content" },
    [
      _c("shop-loader", { attrs: { loader: _vm.show_loader } }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row mb-2" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h1", { staticClass: "m-0 text-dark" }, [
                _vm._v(_vm._s(_vm.__("admin.users")))
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    [
                      _c(
                        "div",
                        { staticStyle: { "margin-bottom": "10px" } },
                        [
                          _c(
                            "el-row",
                            [
                              _c(
                                "el-col",
                                { attrs: { span: 18 } },
                                [
                                  _c(
                                    "el-button",
                                    { on: { click: _vm.bulkDelete } },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.__("admin.bulk_delete"))
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  _c("el-input", {
                                    attrs: {
                                      placeholder: _vm.__("admin.search_admin")
                                    },
                                    model: {
                                      value: _vm.filters[0].value,
                                      callback: function($$v) {
                                        _vm.$set(_vm.filters[0], "value", $$v)
                                      },
                                      expression: "filters[0].value"
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
                        "data-tables",
                        {
                          attrs: {
                            data: _vm.data,
                            "action-col": _vm.actionCol,
                            filters: _vm.filters
                          }
                        },
                        [
                          _c("el-table-column", {
                            attrs: { type: "selection", width: "55" }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.titles, function(title) {
                            return _c("el-table-column", {
                              key: title.prop,
                              attrs: {
                                prop: title.prop,
                                label: title.label,
                                sortable: "custom"
                              }
                            })
                          })
                        ],
                        2
                      )
                    ],
                    1
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
        _c("li", { staticClass: "breadcrumb-item" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [
          _vm._v("Starter Page")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Users.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Admin/Users_bk.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_4782960d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users_bk.vue?vue&type=template&id=4782960d& */ "./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users_bk.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_4782960d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_4782960d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Users_bk.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Users.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Users_bk.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users_bk.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/Users_bk.vue?vue&type=template&id=4782960d& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4782960d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users_bk.vue?vue&type=template&id=4782960d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4782960d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4782960d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
