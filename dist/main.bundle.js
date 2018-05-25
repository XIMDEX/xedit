webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");


var Api = (function () {
    function Api() {
    }
    /** Paths **/
    Api.pathGetNode = function ($nodeId) {
        return Api.getBaseQuery() + ($nodeId + "/get");
    };
    /** Paramas **/
    Api.addParams = function (url, params) {
        for (var key in params) {
            url = url.replace(":" + key, params[key]);
        }
        return url;
    };
    /****************** API METHODS ******************/
    Api.getDocument = function (http, nodeId, successCallback, errorCallback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', "Basic " + btoa(__WEBPACK_IMPORTED_MODULE_1__app_xedit__["a" /* Xedit */].getToken() + ':'));
        return http.get(this.pathGetNode(nodeId), { headers: headers }).subscribe(function (result) {
            successCallback(result);
        }, function (error) {
            errorCallback();
        });
    };
    Api.saveDocument = function (http, document, successCallback, errorCallback) {
        var json = JSON.stringify(document);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', "Basic " + btoa(__WEBPACK_IMPORTED_MODULE_1__app_xedit__["a" /* Xedit */].getToken() + ':'));
        http.post(__WEBPACK_IMPORTED_MODULE_1__app_xedit__["a" /* Xedit */].getSetUrl(), json, { headers: headers }).subscribe(function (data) {
            successCallback(data);
        }, function (error) {
            errorCallback();
        });
    };
    Api.getTreeChildren = function (http, nodeId, type, successCallback, errorCallback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', "Basic " + btoa(__WEBPACK_IMPORTED_MODULE_1__app_xedit__["a" /* Xedit */].getToken() + ':'));
        var url = __WEBPACK_IMPORTED_MODULE_1__app_xedit__["a" /* Xedit */].getTreeUrl();
        url = this.addParams(url, { 'id': nodeId, 'type': type });
        return http.get(url, { headers: headers }).subscribe(function (result) {
            successCallback(result);
        }, function (error) {
            errorCallback();
        });
    };
    Api.getInfoNode = function (http, nodeId, type, successCallback, errorCallback, extra) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', "Basic " + btoa(__WEBPACK_IMPORTED_MODULE_1__app_xedit__["a" /* Xedit */].getToken() + ':'));
        var url = __WEBPACK_IMPORTED_MODULE_1__app_xedit__["a" /* Xedit */].getInfoNodeUrl();
        url = this.addParams(url, { 'id': nodeId, 'type': type });
        return http.get(url, { headers: headers }).subscribe(function (result) {
            successCallback(result.response, extra);
        }, function (error) {
            errorCallback(null, extra);
        });
    };
    /****************** AUX METHODS ******************/
    Api.getBaseQuery = function () {
        return __WEBPACK_IMPORTED_MODULE_1__app_xedit__["a" /* Xedit */].getApiUrl() + Api.action;
    };
    Api.action = '/?_action=xedit/';
    return Api;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    enableTracing: true,
                })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{  }\">\n</ngx-loading>\n<simple-notifications [options]=\"{}\"></simple-notifications>\n<app-taskbar [ngClass]=\"{embebed: true}\"></app-taskbar>\n<app-editor [ngClass]=\"{embebed: false}\"></app-editor>\n<app-tree-modal></app-tree-modal>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host > main {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/app.component.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC3F7K;EACI,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,iBAAgB;EAChB,6BAAsB;EAAtB,8BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB,EAOzB;EAVD;IAMQ,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB,EACtB","file":"app.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n\n:host{\n    display: flex;\n    overflow: hidden;\n    flex-direction: column;\n\n    > main {\n        flex-grow: 1;\n        display: flex;\n        flex-direction: row;\n    }\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_state_service_state_service__ = __webpack_require__("../../../../../src/app/services/state-service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_api__ = __webpack_require__("../../../../../src/app/api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(_editorService, _stateService, http, route) {
        this._editorService = _editorService;
        this._stateService = _stateService;
        this.http = http;
        this.route = route;
        this.title = 'app';
    }
    /************************************** Life Cycle **************************************/
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingSuscribe = this._editorService.isLoading().subscribe(function (loading) {
            _this.loading = loading;
        });
        this.route.queryParams.skip(1).subscribe(function (params) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(params.token)) {
                console.error('SOLICITAR LOGIN');
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(params.url)) {
                console.error('API NO DISPINIBLE');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6__app_xedit__["a" /* Xedit */].setToken(params.token);
                __WEBPACK_IMPORTED_MODULE_6__app_xedit__["a" /* Xedit */].setApiUrl(params.url);
                _this.getDocument(params);
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.loadingSuscribe.unsubscribe();
    };
    /************************************** Private Methods **************************************/
    AppComponent.prototype.getDocument = function (params) {
        var _this = this;
        this._editorService.setLoading(true);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(params.nodeId)) {
            var error_1 = function () {
                console.log('error');
                _this._editorService.setLoading(false);
            };
            var success = function (result) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('status', result) && result.status === 0) {
                    var nodes = result.response;
                    var view = 'wysiwyg';
                    _this._editorService.createFile(nodes);
                    _this._stateService.setAvailableViews(['wysiwyg', 'text']);
                    if (!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(params.type) && Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* contains */])(params.type, ['wysiwyg', 'text'])) {
                        view = params.type;
                    }
                    _this._stateService.setCurrentView(view);
                }
                else {
                    error_1();
                }
                _this._editorService.setLoading(false);
            };
            return __WEBPACK_IMPORTED_MODULE_7__app_api__["a" /* Api */].getDocument(this.http, params.nodeId, success, error_1);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_editor_service_editor_service__["a" /* EditorService */], __WEBPACK_IMPORTED_MODULE_5__services_state_service_state_service__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_click_outside__ = __webpack_require__("../../../../ng4-click-outside/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__ = __webpack_require__("../../../../ngx-contextmenu/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_draggable__ = __webpack_require__("../../../../angular2-draggable/angular2-draggable.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_collapsible__ = __webpack_require__("../../../../angular2-collapsible/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_state_service_state_service__ = __webpack_require__("../../../../../src/app/services/state-service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_inner_html_safe_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/inner-html/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_debug_debug_pipe__ = __webpack_require__("../../../../../src/app/pipes/debug/debug.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_keys_keys_pipe__ = __webpack_require__("../../../../../src/app/pipes/keys/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_url_url_pipe__ = __webpack_require__("../../../../../src/app/pipes/url/url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_taskbar_taskbar_component__ = __webpack_require__("../../../../../src/app/components/taskbar/taskbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_taskbar_properties_global_view_properties_global_view_component__ = __webpack_require__("../../../../../src/app/components/taskbar/properties-global-view/properties-global-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_editor_properties_area_properties_local_view_properties_local_view_component__ = __webpack_require__("../../../../../src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_editor_views_wysiwyg_view_wysiwyg_view_component__ = __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_editor_views_text_view_text_view_component__ = __webpack_require__("../../../../../src/app/components/editor/views/text-view/text-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_context_menu_context_menu_component__ = __webpack_require__("../../../../../src/app/components/context-menu/context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_editor_properties_area_properties_area_component__ = __webpack_require__("../../../../../src/app/components/editor/properties-area/properties-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__elements_forms_multi_input_multi_input_component__ = __webpack_require__("../../../../../src/app/elements/forms/multi-input/multi-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__elements_forms_multi_input_acordion_multi_input_acordion_component__ = __webpack_require__("../../../../../src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__elements_forms_input_acordion_input_acordion_component__ = __webpack_require__("../../../../../src/app/elements/forms/input-acordion/input-acordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__elements_blocks_acordion_acordion_component__ = __webpack_require__("../../../../../src/app/elements/blocks/acordion/acordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__elements_forms_button_button_component__ = __webpack_require__("../../../../../src/app/elements/forms/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__elements_forms_checkbox_checkbox_component__ = __webpack_require__("../../../../../src/app/elements/forms/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_taskbar_state_controller_state_controller_component__ = __webpack_require__("../../../../../src/app/components/taskbar/state-controller/state-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__elements_forms_listbox_listbox_component__ = __webpack_require__("../../../../../src/app/elements/forms/listbox/listbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__elements_blocks_tree_tree_component__ = __webpack_require__("../../../../../src/app/elements/blocks/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__elements_blocks_tree_modal_tree_modal_component__ = __webpack_require__("../../../../../src/app/elements/blocks/tree-modal/tree-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular_5_popup__ = __webpack_require__("../../../../angular-5-popup/esm5/angular-5-popup.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_taskbar_taskbar_component__["a" /* TaskbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_editor_properties_area_properties_local_view_properties_local_view_component__["a" /* PropertiesLocalViewComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_taskbar_properties_global_view_properties_global_view_component__["a" /* PropertiesGlobalViewComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_editor_views_wysiwyg_view_wysiwyg_view_component__["a" /* WysiwygViewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_editor_views_text_view_text_view_component__["a" /* TextViewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_inner_html_safe_html_pipe__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_url_url_pipe__["a" /* UrlPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_debug_debug_pipe__["a" /* DebugPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_keys_keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_24__components_context_menu_context_menu_component__["a" /* ContextMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_editor_properties_area_properties_area_component__["a" /* PropertiesAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_27__elements_forms_multi_input_multi_input_component__["a" /* MultiInputComponent */],
                __WEBPACK_IMPORTED_MODULE_28__elements_forms_multi_input_acordion_multi_input_acordion_component__["a" /* MultiInputAcordionComponent */],
                __WEBPACK_IMPORTED_MODULE_29__elements_forms_input_acordion_input_acordion_component__["a" /* InputAcordionComponent */],
                __WEBPACK_IMPORTED_MODULE_30__elements_blocks_acordion_acordion_component__["a" /* AcordionComponent */],
                __WEBPACK_IMPORTED_MODULE_31__elements_forms_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_34__elements_forms_checkbox_checkbox_component__["a" /* CheckboxComponent */],
                __WEBPACK_IMPORTED_MODULE_36__elements_forms_listbox_listbox_component__["a" /* ListboxComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_taskbar_state_controller_state_controller_component__["a" /* StateControllerComponent */],
                __WEBPACK_IMPORTED_MODULE_37__elements_blocks_tree_tree_component__["a" /* TreeComponent */],
                __WEBPACK_IMPORTED_MODULE_39__elements_blocks_tree_modal_tree_modal_component__["a" /* TreeModalComponent */]
            ],
            imports: [
                /* 3rd party components */
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_ace_editor__["a" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__["b" /* ContextMenuModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng4_click_outside__["ClickOutsideModule"],
                __WEBPACK_IMPORTED_MODULE_10_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_collapsible__["b" /* CollapsibleModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_33_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_38_ng2_tree__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_40_angular_5_popup__["c" /* ScModalModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_editor_service_editor_service__["a" /* EditorService */],
                __WEBPACK_IMPORTED_MODULE_12__services_state_service_state_service__["a" /* StateService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n    <ng-container *ngFor=\"let section of breadcrumb; let i = index\">\n        <ng-template [ngIf]=\"(i + 1) < breadcrumb.length\" [ngIfElse]=\"last\">\n            <li (click)=\"changeSelection(section.key)\" (contextmenu)=\"onContextMenu($event, section.target)\">\n                {{ section.name }}\n                <i class=\"fas fa-chevron-right\"></i>\n            </li>\n        </ng-template>\n        <ng-template #last>\n            <li class=\"selected\" (contextmenu)=\"onContextMenu($event, section.target)\">\n                {{ section.name }}\n            </li>\n        </ng-template>\n    </ng-container>\n</ul>\n<context-menu #myContextMenu>\n    <ng-template *ngFor=\"let action of contextMenuActions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\" (execute)=\"action.click()\">\n        {{ action.html() }}\n    </ng-template>\n</context-menu>"

/***/ }),

/***/ "../../../../../src/app/components/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  position: relative;\n  z-index: 5;\n  box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.57);\n  min-height: 30px;\n  max-height: 30px;\n  background-color: #edeff2;\n  font: normal 14px \"Lato\", sans-serif; }\n  :host > ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    list-style: none;\n    padding: 5px 0;\n    margin: 0; }\n    :host > ul > li {\n      margin: auto 5px;\n      text-transform: capitalize;\n      color: #3f4946;\n      transition: color 0.3s ease-in-out; }\n      :host > ul > li > i.fas {\n        color: #3f4946;\n        margin: 0 0 0 5px; }\n      :host > ul > li:not(.selected):hover {\n        cursor: pointer;\n        color: #3a9e8f; }\n      :host > ul > li.selected {\n        color: #3a9e8f; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/breadcrumb/breadcrumb.component.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/_mixins.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,mBAAkB;EAClB,WAAU;ECSV,iDAL0B;EDF1B,iBAAgB;EAChB,iBAAgB;EAChB,0BFciB;EEbjB,qCFyB4B,EEM/B;EAtCD;IAUQ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;IACnB,2BAAqB;QAArB,sBAAqB;IACrB,iBAAgB;IAChB,eAAc;IACd,UAAS,EAsBZ;IArCL;MAkBY,iBAAgB;MAChB,2BAA0B;MAC1B,eFhBQ;MEiBR,mCAAkC,EAerC;MApCT;QAwBgB,eFpBI;QEqBJ,kBAAiB,EACpB;MA1Bb;QA6BgB,gBAAe;QACf,eFrBI,EEsBP;MA/Bb;QAkCgB,eFzBI,EE0BP","file":"breadcrumb.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {    \n    position: relative;\n    z-index: 5;\n    @include box-shadow(top, 0.57);\n    min-height: 30px;\n    max-height: 30px;\n    background-color: $white-light;\n    font: $font-default;\n\n    > ul {\n        display: flex;\n        flex-direction: row;\n        align-content: center;\n        list-style: none;\n        padding: 5px 0;\n        margin: 0;\n\n        > li {\n            margin: auto 5px;\n            text-transform: capitalize;\n            color: $black-dark;\n            transition: color 0.3s ease-in-out;\n\n            > i.fas {\n                color: $black-dark;\n                margin: 0 0 0 5px;\n            }\n\n            &:not(.selected):hover{\n                cursor: pointer;\n                color: $green-dark;\n            }\n\n            &.selected {\n                color: $green-dark;\n            }\n        }\n    }\n}","@mixin box-shadow ($pos, $opacity, $important: false) {\n    $_pos: 0px 0px 3px 0px ;\n    @if($pos == top){\n        $_pos: 0px 3px 11px 0px ;\n    }@else if($pos == left) {\n        $_pos: -2px 0px 11px -4px;\n    }\n\n    $rgb: rgba(0,0,0,$opacity);\n    @if($important == true){        \n        $rgb: rgba(0,0,0,$opacity) !important;\n    }\n\n    box-shadow: $_pos $rgb;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_contextmenu__ = __webpack_require__("../../../../ngx-contextmenu/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_converters__ = __webpack_require__("../../../../../src/utils/converters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dom__ = __webpack_require__("../../../../../src/app/models/dom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__ = __webpack_require__("../../../../../src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_models_node__ = __webpack_require__("../../../../../src/app/models/node.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(_editorService, _elementRef, contextMenuService, _notification) {
        this._editorService = _editorService;
        this._elementRef = _elementRef;
        this.contextMenuService = contextMenuService;
        this._notification = _notification;
        this.selectNode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.breadcrumb = [];
        this.contextMenuActions = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._editorService.getCurrentNode().subscribe(function (currentNode) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(currentNode)) {
                _this.breadcrumb = _this.getBreadCrumb(currentNode.getSection());
            }
        });
    };
    BreadcrumbComponent.prototype.getBreadCrumb = function (currentNode, rootTag, path) {
        if (rootTag === void 0) { rootTag = 'xedit'; }
        if (path === void 0) { path = []; }
        var section = null;
        var key = null;
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(currentNode) && !Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(currentNode.getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE)) &&
            !Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(key = currentNode.getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID))) {
            var node = new __WEBPACK_IMPORTED_MODULE_8__app_models_node__["a" /* Node */](currentNode.getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID), currentNode);
            path.unshift({
                key: key,
                name: __WEBPACK_IMPORTED_MODULE_8__app_models_node__["a" /* Node */].getSectionLang(node.getSchema(), __WEBPACK_IMPORTED_MODULE_9__app_xedit__["a" /* Xedit */].getLang()),
                target: node.getTarget()
            });
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(currentNode) || Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(currentNode.parentNode) || Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["d" /* equals */])(currentNode.nodeName.toLowerCase(), rootTag) ?
            path : this.getBreadCrumb(currentNode.parentNode, rootTag, path);
    };
    BreadcrumbComponent.prototype.changeSelection = function (elementKey) {
        this.selectNode.emit(elementKey);
    };
    BreadcrumbComponent.prototype.onContextMenu = function ($event, item) {
        var _this = this;
        var node = this._editorService.parseToNode(item);
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(node) && !Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(node.getSchema())) {
            this.updateContextMenuActions(node);
            setTimeout(function () {
                _this.contextMenuService.show.next({
                    contextMenu: _this.basicMenu,
                    event: $event,
                    item: item,
                });
            }, 50);
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    BreadcrumbComponent.prototype.updateContextMenuActions = function (node) {
        var _this = this;
        var actions = this.getAvailableActions(node);
        var contextMenuActions = [];
        var contextMenuActionsChild = [];
        var contextMenuActionsSiblings = [];
        // TAG
        contextMenuActions.push(this.createAction(function (i) { return actions.name; }, null, true, false, function (i) { return false; }));
        contextMenuActions.push(this.createAction(null, null, true, true));
        var clickFunc = function (currentNode, afterNode, strTemplate, child) {
            if (child === void 0) { child = false; }
            var nodeTemplate = __WEBPACK_IMPORTED_MODULE_3__utils_converters__["a" /* Converters */].html2json(strTemplate, false);
            __WEBPACK_IMPORTED_MODULE_4__models_dom__["a" /* DOM */].element(currentNode).insertNode(__WEBPACK_IMPORTED_MODULE_3__utils_converters__["a" /* Converters */].json2html(__WEBPACK_IMPORTED_MODULE_3__utils_converters__["a" /* Converters */].addWrapJson(nodeTemplate)), afterNode, true);
            _this._editorService.addNodeToArea(node, nodeTemplate, child);
        };
        // Childs
        actions.children.forEach(function (action) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('template' in action) && !Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(action.template)) {
                contextMenuActionsChild.push(_this.createAction(function (i) { return 'Añadir hijo ' + action.name; }, function (evt) { return clickFunc(node.getSection(), node.getSection().childNodes[node.getSection().childNodes.length], action.template, true); }, true));
            }
        });
        // Siblings
        actions.siblings.forEach(function (action) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('template' in action) && !Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(action.template)) {
                contextMenuActionsSiblings.push(_this.createAction(function (i) { return 'Añadir hermano ' + action.name; }, function (evt) { return clickFunc(node.getSection().parentNode, node.getSection().nextSibling, action.template); }, true));
            }
        });
        contextMenuActions = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["p" /* union */])(contextMenuActions, contextMenuActionsChild);
        // Divider
        if (contextMenuActionsChild.length > 0 && contextMenuActionsSiblings.length > 0) {
            contextMenuActions.push(this.createAction(null, null, true, true));
        }
        contextMenuActions = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["p" /* union */])(contextMenuActions, contextMenuActionsSiblings);
        contextMenuActions.push(this.createAction(null, null, true, true));
        contextMenuActions = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["p" /* union */])(contextMenuActions, this.defaultActions(node));
        this.contextMenuActions = contextMenuActions;
    };
    BreadcrumbComponent.prototype.defaultActions = function (node) {
        var _this = this;
        var actions = [];
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(this.copyAction) && !Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(node)) {
            // Coger node del json --> Cambiar todos los uid del padre e hijos
            actions.push(this.createAction(function (i) { return 'Paste'; }, function (evt) {
                var sectionNode = new __WEBPACK_IMPORTED_MODULE_8__app_models_node__["a" /* Node */](_this.copyAction.getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID), _this.copyAction);
                if (__WEBPACK_IMPORTED_MODULE_7__services_editor_service_editor_service__["a" /* EditorService */].isInsertedNodeValid(node, sectionNode)) {
                    var template = _this._editorService.getJsonNodesByPath(sectionNode);
                    template = __WEBPACK_IMPORTED_MODULE_3__utils_converters__["a" /* Converters */].json2html(template, true, true, true);
                    __WEBPACK_IMPORTED_MODULE_4__models_dom__["a" /* DOM */].element(node.getSection())
                        .insertNode(template, sectionNode.getTarget().childNodes[sectionNode.getTarget().childNodes.length], true);
                    _this._editorService.addNodeToArea(node, __WEBPACK_IMPORTED_MODULE_3__utils_converters__["a" /* Converters */].html2json(template, false), true);
                    _this._notification.info('Componente insertado', 'El componente ha sido pegado con éxito.', __WEBPACK_IMPORTED_MODULE_9__app_xedit__["a" /* Xedit */].NOTIFICATION_DEFAULT_SETTINGS);
                }
                else {
                    _this._notification.error('Estructura inválida', 'El componente pegado no es soportado.', __WEBPACK_IMPORTED_MODULE_9__app_xedit__["a" /* Xedit */].NOTIFICATION_DEFAULT_SETTINGS);
                }
            }, true));
        }
        actions.push(this.createAction(function (i) { return 'Copy'; }, function (evt) {
            _this.copyAction = null;
            _this.copyAction = node.getSection();
        }, true));
        actions.push(this.createAction(function (i) { return 'Delete'; }, function (evt) {
            _this._editorService.removeNode(node);
            __WEBPACK_IMPORTED_MODULE_4__models_dom__["a" /* DOM */].element(node.getSection()).deleteNode();
        }, true));
        return actions;
    };
    // Todo create Action Model
    BreadcrumbComponent.prototype.createAction = function (html, click, visible, divider, enabled) {
        if (divider === void 0) { divider = false; }
        if (enabled === void 0) { enabled = function (item) { return true; }; }
        return {
            html: html,
            click: click,
            enabled: enabled,
            divider: divider,
            visible: visible,
        };
    };
    BreadcrumbComponent.prototype.getAvailableActions = function (node) {
        var actions = {
            name: null,
            children: [],
            siblings: [],
            others: []
        };
        actions.name = __WEBPACK_IMPORTED_MODULE_8__app_models_node__["a" /* Node */].getSectionLang(node.getSchema(), __WEBPACK_IMPORTED_MODULE_9__app_xedit__["a" /* Xedit */].getLang());
        // Get childs
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('actions', node.getSchema()) && !Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(node.getSchema().actions)) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('children', node.getSchema().actions)) {
                var children = node.getSchema().actions.children;
                children.map(function (child) {
                    var schema = node.getSchemaNode()[child];
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(schema)) {
                        actions.children.push({
                            name: __WEBPACK_IMPORTED_MODULE_8__app_models_node__["a" /* Node */].getSectionLang(schema, __WEBPACK_IMPORTED_MODULE_9__app_xedit__["a" /* Xedit */].getLang()),
                            template: __WEBPACK_IMPORTED_MODULE_8__app_models_node__["a" /* Node */].getSectionTemplate(schema)
                        });
                    }
                });
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('siblings', node.getSchema().actions)) {
                var siblings = node.getSchema().actions.siblings;
                siblings.map(function (sibling) {
                    var schema = node.getSchemaNode()[sibling];
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(schema)) {
                        actions.siblings.push({
                            name: __WEBPACK_IMPORTED_MODULE_8__app_models_node__["a" /* Node */].getSectionLang(schema, __WEBPACK_IMPORTED_MODULE_9__app_xedit__["a" /* Xedit */].getLang()),
                            template: __WEBPACK_IMPORTED_MODULE_8__app_models_node__["a" /* Node */].getSectionTemplate(schema)
                        });
                    }
                });
            }
        }
        actions.others.push({
            name: 'Borrar',
            template: null
        });
        return actions;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BreadcrumbComponent.prototype, "selectNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myContextMenu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_contextmenu__["a" /* ContextMenuComponent */])
    ], BreadcrumbComponent.prototype, "basicMenu", void 0);
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__("../../../../../src/app/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_editor_service_editor_service__["a" /* EditorService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2_ngx_contextmenu__["c" /* ContextMenuService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/context-menu/context-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  context-menu works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/context-menu/context-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"context-menu.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/context-menu/context-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContextMenuComponent = (function () {
    function ContextMenuComponent() {
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
    };
    ContextMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-context-menu',
            template: __webpack_require__("../../../../../src/app/components/context-menu/context-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/context-menu/context-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <section>\n        <!-- WYSIWYG VIEW -->\n        <app-wysiwyg-view (onEditorKeyup)=\"keyupHandlerFunction($event)\" (selectNode)=\"setCurrentNode($event)\" *ngIf=\"showComponent('wysiwyg')\">\n        </app-wysiwyg-view>\n        <!-- END WYSIWYG VIEW -->\n\n        <!-- TEXT VIEW -->\n        <app-text-view *ngIf=\"showComponent('text')\"> </app-text-view>\n        <!-- END TEXT VIEW -->\n    </section>\n    <!-- BREADCRUMBS -->\n    <app-breadcrumb (selectNode)=\"setCurrentNode($event)\"></app-breadcrumb>\n    <!-- END BREADCRUMBS -->\n</main>\n<app-properties-area ngDraggable *ngIf=\"showComponent('wysiwyg')\" [(configs)]=\"cConfigs\" (updated)=\"saveClipboardConfigs($event)\">\n</app-properties-area>"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 0; }\n  :host > main {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden;\n    position: relative;\n    z-index: 5;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n    :host > main > section {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2;\n      position: relative;\n      z-index: 1;\n      height: 0; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/editor/editor.component.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/_mixins.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,+BAAmB;EAAnB,8BAAmB;MAAnB,wBAAmB;UAAnB,oBAAmB;EACnB,UAAS,EAoBZ;EAxBD;IAOQ,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,6BAAsB;IAAtB,8BAAsB;QAAtB,2BAAsB;YAAtB,uBAAsB;IACtB,iBAAgB;IAChB,mBAAkB;IAClB,WAAU;ICDd,gDAL0B,EDiBzB;IAvBL;MAgBY,qBAAa;MAAb,qBAAa;MAAb,cAAa;MACb,6BAAsB;MAAtB,8BAAsB;UAAtB,2BAAsB;cAAtB,uBAAsB;MACtB,oBAAY;UAAZ,qBAAY;cAAZ,aAAY;MACZ,mBAAkB;MAClB,WAAU;MACV,UAAS,EACZ","file":"editor.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host{\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    height: 0;\n\n    > main {\n        flex-grow: 1;\n        display: flex;\n        flex-direction: column;\n        overflow: hidden;\n        position: relative;\n        z-index: 5;\n        @include box-shadow(right, 0.25);\n\n        > section {\n            display: flex;\n            flex-direction: column;\n            flex-grow: 2;\n            position: relative;\n            z-index: 1;\n            height: 0;\n        }\n    }\n}","@mixin box-shadow ($pos, $opacity, $important: false) {\n    $_pos: 0px 0px 3px 0px ;\n    @if($pos == top){\n        $_pos: 0px 3px 11px 0px ;\n    }@else if($pos == left) {\n        $_pos: -2px 0px 11px -4px;\n    }\n\n    $rgb: rgba(0,0,0,$opacity);\n    @if($important == true){        \n        $rgb: rgba(0,0,0,$opacity) !important;\n    }\n\n    box-shadow: $_pos $rgb;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_html_tag_validator__ = __webpack_require__("../../../../html-tag-validator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_html_tag_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_html_tag_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__ = __webpack_require__("../../../../../src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_configs_clipboardConfigs__ = __webpack_require__("../../../../../src/app/models/configs/clipboardConfigs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_state_service_state_service__ = __webpack_require__("../../../../../src/app/services/state-service/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditorComponent = (function () {
    function EditorComponent(_stateService, _editorService, _elementRef) {
        this._stateService = _stateService;
        this._editorService = _editorService;
        this._elementRef = _elementRef;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Suscribe view state
        this._stateService.getCurrentView().subscribe(function (currentView) {
            _this.currentView = currentView;
        });
        this.clipboardConfigs = new __WEBPACK_IMPORTED_MODULE_4__models_configs_clipboardConfigs__["a" /* ClipboardConfigs */]();
    };
    EditorComponent.prototype.ngAfterViewChecked = function () {
        this.cConfigs = this.clipboardConfigs.getConfigs();
    };
    EditorComponent.prototype.setCurrentNode = function (uuid) {
        var node = null;
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(uuid)) {
            var element = this._elementRef.nativeElement.querySelector("[" + __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID + "='" + uuid + "']");
            if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(element)) {
                node = this._editorService.parseToNode(element);
            }
        }
        this._editorService.setCurrentNode(node);
    };
    /**
     *
     * @param view
     */
    EditorComponent.prototype.showComponent = function (view) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["d" /* equals */])(view, this.currentView);
    };
    /**
     *
     */
    EditorComponent.executeIfvalidateHtmlTags = function (content, callback, errorCallback, options) {
        if (options === void 0) { options = {}; }
        options = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["m" /* merge */])({
            settings: {
                format: 'html',
            },
            attributes: {
                '_': {
                    mixed: /.*/
                }
            }
        }, options);
        __WEBPACK_IMPORTED_MODULE_2_html_tag_validator___default()(content, options, function (err, ast) {
            if (err) {
                errorCallback();
            }
            else {
                callback();
            }
        });
    };
    /**
     * @todo Check if validate html with w3c
     */
    EditorComponent.validateHtml = function () {
        /* const options = {
            data: content,
            format: 'html5',
            fragment: true,
            validator: 'https://validator.w3.org/nu/',
            ignore: [
              'Error: Start tag seen without seeing a doctype first. Expected “<!DOCTYPE html>”.',
              'Error: Element “head” is missing a required instance of child element “title”.',
              'Error: Attribute “xe_uuid” not allowed on element “section” at this point',
              'Error: Attribute “xe_uuid” not allowed on element “section” at this point.',
              'Error: Attribute “xe_section” not allowed on element “section” at this point.',
              'Error: Attribute “xe_uuid” not allowed on element “h1” at this point.',
            ]
          }
          validator(options)
            .then((data) => {
              var newState = clone(this.content);
              var json = File.html2json(content, false);
              newState['s4sdf89'].content.child = json;
              this._editorService.newState(newState);
            })
            .catch((error) => {
              console.error(error)
            })*/
    };
    EditorComponent.prototype.saveClipboardConfigs = function (evt) {
        this.cConfigs = evt;
        this.clipboardConfigs.setConfigs(evt);
    };
    /**
     *
     */
    EditorComponent.checkIfContentChange = function (currentFile, file) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(currentFile) || (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(file) && currentFile.getState().getHash() !== file.getState().getHash());
    };
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_state_service_state_service__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_5__services_editor_service_editor_service__["a" /* EditorService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/properties-area/properties-area.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div>\n        <span>{{ nodeName }}</span>\n    </div>\n    <aside (click)=\"toggleMenu()\">\n        <i [ngClass]=\"{'fa': true, 'fa-minus-square': isOpen, 'fa-window-maximize': !isOpen}\"></i>\n    </aside>\n</header>\n<div id='toolbar'>\n</div>\n<div>\n    <ng-container *ngFor=\"let value of configs; let i = index;\">\n        <app-listbox [placeholder]=\"value.name\" [selected]=\"value.selected\" [options]=\"value.options\" (changeValue)=\"updateClipboard($event, value)\"></app-listbox>\n    </ng-container>\n</div>\n<collapsible-list-item>\n    <collapsible-header class=\"waves-effect\" #toggleCollapsible>\n    </collapsible-header>\n    <collapsible-body [expanded]=\"isOpen\">\n        <app-properties-local *ngIf=\"'local'===selectedView\"></app-properties-local>\n    </collapsible-body>\n</collapsible-list-item>"

/***/ }),

/***/ "../../../../../src/app/components/editor/properties-area/properties-area.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  z-index: 999;\n  position: absolute;\n  width: 200px;\n  background-color: #e1e4e6;\n  overflow: hidden;\n  right: 15px;\n  top: 60px;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n  :host header {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 22px;\n    background-color: #3a9e8f;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n    :host header > div {\n      padding: 2px 5px;\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2;\n      color: #edeff2; }\n    :host header > aside {\n      padding: 2px 5px; }\n      :host header > aside > i.fa {\n        color: #edeff2; }\n  :host > #tabs {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background-color: #e1e4e6;\n    font: 14px;\n    text-transform: uppercase;\n    font-size: 12px;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n    :host > #tabs > div {\n      box-sizing: border-box;\n      height: 30px;\n      padding: 0 10px;\n      line-height: 30px;\n      border-bottom: 2px solid transparent;\n      color: #959595;\n      transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n      cursor: pointer; }\n      :host > #tabs > div:hover {\n        border-bottom-color: #44c4b1; }\n      :host > #tabs > div.selected {\n        border-bottom-color: #3a9e8f;\n        color: #1e574e; }\n  :host > collapsible-list-item > collapsible-header {\n    display: none; }\n  :host > collapsible-list-item > collapsible-body {\n    padding: 0;\n    margin: 0;\n    border-bottom: 0;\n    padding-bottom: 0px;\n    background-color: #edeff2; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/editor/properties-area/properties-area.component.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/_mixins.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,aAAY;EACZ,mBAAkB;EAClB,aAAY;EACZ,0BFegB;EEdhB,iBAAgB;EAChB,YAAW;EACX,UAAS;ECIT,gDAL0B,ED0E7B;EAhFD;IAWQ,4BAA2B;IAC3B,6BAA4B;IAC5B,mBAAkB;IAClB,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,aAAY;IACZ,0BFPY;IEQZ,0BAAiB;OAAjB,uBAAiB;QAAjB,sBAAiB;YAAjB,kBAAiB,EAepB;IAhCL;MAoBY,iBAAgB;MAChB,oBAAY;UAAZ,qBAAY;cAAZ,aAAY;MACZ,eFFS,EEGZ;IAvBT;MA0BY,iBAAgB,EAKnB;MA/BT;QA6BgB,eFTK,EEUR;EA9Bb;IAmCQ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;IACnB,0BFlBY;IEmBZ,WFHgB;IEIhB,0BAAyB;IACzB,gBFNc;IGvBlB,gDAL0B,EDwDzB;IA9DL;MA4CY,uBAAsB;MACtB,aFfY;MEgBZ,gBAAe;MACf,kBFjBY;MEkBZ,qCAAoC;MACpC,eFhCU;MEiCV,yEAAwE;MACxE,gBAAe,EAUlB;MA7DT;QAsDgB,6BF3CK,EE4CR;MAvDb;QA0DgB,6BFjDI;QEkDJ,eFnDM,EEoDT;EA5Db;IAmEY,cAAa,EAChB;EApET;IAwEY,WAAU;IACV,UAAS;IACT,iBAAgB;IAChB,oBAAmB;IACnB,0BFxDS,EEyDZ","file":"properties-area.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    z-index: 999;\n    position: absolute;\n    width: 200px;\n    background-color: $white-warm;\n    overflow: hidden;\n    right: 15px;\n    top: 60px;\n    @include box-shadow(bottom, 0.25);\n\n    header {\n        border-top-left-radius: 2px;\n        border-top-right-radius: 2px;\n        position: relative;\n        display: flex;\n        height: 22px;\n        background-color: $green-dark;\n        user-select: none;\n\n        > div {\n            padding: 2px 5px;\n            flex-grow: 2;\n            color: $white-light;\n        }\n\n        > aside {\n            padding: 2px 5px;\n\n            > i.fa {\n                color: $white-light;\n            }\n        }\n    }\n\n    > #tabs {\n        display: flex;\n        flex-direction: row;\n        background-color: $white-warm;\n        font: $font-size-default;\n        text-transform: uppercase;\n        font-size: $font-size-small;\n        @include box-shadow(bottom, 0.25);\n\n        > div {\n            box-sizing: border-box;\n            height: $tabs-height-small;\n            padding: 0 10px;\n            line-height: $tabs-height-small;\n            border-bottom: 2px solid transparent;\n            color: $white-darker;\n            transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n            cursor: pointer;\n\n            &:hover {\n                border-bottom-color: $green-light;\n            }\n\n            &.selected {\n                border-bottom-color: $green-dark;\n                color: $green-darker;\n            }\n        }\n    }\n\n    > collapsible-list-item {        \n\n        > collapsible-header {\n            display: none;\n        }\n\n        > collapsible-body {            \n            //@include box-shadow(bottom, 0.25, true);\n            padding: 0;\n            margin: 0;\n            border-bottom: 0;\n            padding-bottom: 0px;\n            background-color: $white-light;\n        }\n    }\n\n}","@mixin box-shadow ($pos, $opacity, $important: false) {\n    $_pos: 0px 0px 3px 0px ;\n    @if($pos == top){\n        $_pos: 0px 3px 11px 0px ;\n    }@else if($pos == left) {\n        $_pos: -2px 0px 11px -4px;\n    }\n\n    $rgb: rgba(0,0,0,$opacity);\n    @if($important == true){        \n        $rgb: rgba(0,0,0,$opacity) !important;\n    }\n\n    box-shadow: $_pos $rgb;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/properties-area/properties-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_collapsible__ = __webpack_require__("../../../../angular2-collapsible/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertiesAreaComponent = (function () {
    function PropertiesAreaComponent(_editorService, cdr) {
        this._editorService = _editorService;
        this.cdr = cdr;
        this.availablesViews = [
            'local'
        ];
        this.updated = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.nodeName = '';
        this.isOpen = false;
        this.selectedView = 'local';
        this.start = true;
    }
    PropertiesAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._editorService.getCurrentNode().subscribe(function (currentNode) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(currentNode)) {
                _this.currentNode = currentNode;
                _this.nodeName = currentNode.getName();
            }
        });
    };
    PropertiesAreaComponent.prototype.ngAfterViewChecked = function () {
        if (this.start) {
            this.openMenu();
            this.start = false;
            this.cdr.detectChanges();
        }
    };
    PropertiesAreaComponent.prototype.changeView = function (viewName) {
        this.selectedView = viewName;
        this.openMenu();
    };
    PropertiesAreaComponent.prototype.toggleMenu = function () {
        this.isOpen = !this.isOpen;
        this.collapsible.click();
    };
    PropertiesAreaComponent.prototype.openMenu = function () {
        if (!this.isOpen) {
            this.collapsible.click();
            this.isOpen = true;
        }
    };
    PropertiesAreaComponent.prototype.updateClipboard = function (evt, object) {
        object.selected = evt;
        this.updateClipboardConfigs();
    };
    PropertiesAreaComponent.prototype.updateClipboardConfigs = function () {
        this.updated.emit(this.configs);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('toggleCollapsible'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_collapsible__["a" /* CollapsibleHeaderComponent */])
    ], PropertiesAreaComponent.prototype, "collapsible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('configs'),
        __metadata("design:type", Array)
    ], PropertiesAreaComponent.prototype, "configs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], PropertiesAreaComponent.prototype, "updated", void 0);
    PropertiesAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-properties-area',
            template: __webpack_require__("../../../../../src/app/components/editor/properties-area/properties-area.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/properties-area/properties-area.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_editor_service_editor_service__["a" /* EditorService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])
    ], PropertiesAreaComponent);
    return PropertiesAreaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"currentNode != null\">\n    <ng-container *ngFor=\"let group of currentProperties | keys\">\n        <app-acordion [title]='group' [className]=\"'form'\">\n            <ng-container [ngSwitch]=\"group\">\n                <ng-container *ngSwitchCase=\"'style'\">\n                    <app-multi-input-acordion [values]=\"currentProperties[group]\" actionText=\"Add new style\" (changeValue)=\"changeStyle($event)\"></app-multi-input-acordion>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"'class'\">\n                    <app-input-acordion [values]=\"currentProperties[group]\" actionText=\"Add new class\" (changeValue)=\"changeClass($event)\"></app-input-acordion>\n                </ng-container>\n                <ng-container *ngSwitchDefault>\n                    <div id=\"xe-center-acordion\">\n                        <app-multi-input *ngFor=\"let value of currentProperties[group]\" [data]=\"value\" (changeValue)=\"cnageProperty($event)\"></app-multi-input>\n                    </div>\n                </ng-container>\n            </ng-container>\n        </app-acordion>\n    </ng-container>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #edeff2; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,6BAAsB;EAAtB,8BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB;EACtB,0BFgBiB,EEfpB","file":"properties-local-view.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n    background-color: $white-light;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesLocalViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertiesLocalViewComponent = (function () {
    function PropertiesLocalViewComponent(_editorService) {
        this._editorService = _editorService;
        this.propertiesGroupsActions = {
            class: function (value) {
                if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(value) || Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["j" /* isEmpty */])(value)) {
                    return [];
                }
                return value.split(' ');
            },
            style: function (value) {
                if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(value) || Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["j" /* isEmpty */])(value)) {
                    return [];
                }
                var _value = value.split(';');
                var result = [];
                return _value.reduce(function (acum, val) {
                    var pairs = val.split(':');
                    if (pairs[0] !== '') {
                        var json = {};
                        json[pairs[0].trim()] = pairs[1];
                        result.push(json);
                    }
                    return result;
                }, result);
            }
        };
        this.defaultProperty = 'attributes';
        this.propertiesGroups = [
            'style',
            'class',
            this.defaultProperty
        ];
    }
    PropertiesLocalViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._editorService.getFileState().subscribe(function (file) {
            _this.file = file;
        });
        this._editorService.getCurrentNode().subscribe(function (currentNode) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(currentNode)) {
                _this.currentNode = currentNode;
                _this.availableAttributes = currentNode.getAvailableAttributes();
                _this.currentProperties = _this.getProperties();
            }
        });
    };
    PropertiesLocalViewComponent.prototype.getProperties = function () {
        var _this = this;
        var props = {};
        this.availableAttributes.map(function (property) {
            var propertyValue = _this.currentNode.getAttribute(property);
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])(property, _this.propertiesGroupsActions)) {
                propertyValue = _this.propertiesGroupsActions[property](propertyValue);
            }
            if (_this.propertiesGroups.indexOf(property) >= 0) {
                props[property] = propertyValue;
                return;
            }
            var json = {};
            json[property] = propertyValue;
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])(_this.defaultProperty, props)) {
                props[_this.defaultProperty].push(json);
                return;
            }
            props[_this.defaultProperty] = [json];
        });
        return props;
    };
    PropertiesLocalViewComponent.prototype.changeStyle = function (value) {
        var result = value.map(function (data) {
            var key = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["l" /* keys */])(data)[0];
            return key + ":" + data[key] + ";";
        });
        this.changePropertyValue('style', result.join(' '));
    };
    PropertiesLocalViewComponent.prototype.changeClass = function (value) {
        this.changePropertyValue('class', value.join(' '));
    };
    PropertiesLocalViewComponent.prototype.cnageProperty = function (_a) {
        var newValue = _a.new;
        var property = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["l" /* keys */])(newValue)[0];
        this.changePropertyValue(property, newValue[property]);
        /*const property = keys(value)[0];
        this.changePropertyValue(property, value[property]);*/
    };
    PropertiesLocalViewComponent.prototype.changePropertyValue = function (property, value) {
        // Modify file with new changes
        var elementContent = this.file.getState().getContent();
        var editContent = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["n" /* reduce */])(function (acc, _value) {
            return acc.child[_value];
        }, elementContent[this.currentNode.getAreaId()].content, this.currentNode.getPath());
        var hasAttr = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["f" /* has */])('attr');
        if (!hasAttr(editContent) || editContent['attr'] == null) {
            editContent['attr'] = [];
        }
        editContent['attr'][property] = value;
        // Save new state
        var newFile = this._editorService.newStateFile(elementContent, 'Message2');
        this._editorService.setFileState(newFile);
        // Update current node
        this.currentNode.setAttribute(property, value);
        this._editorService.setCurrentNode(this.currentNode);
        this._editorService.setCurrentNodeModify(this.currentNode);
    };
    PropertiesLocalViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-properties-local',
            template: __webpack_require__("../../../../../src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_editor_service_editor_service__["a" /* EditorService */]])
    ], PropertiesLocalViewComponent);
    return PropertiesLocalViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/views/text-view/text-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <p *ngIf=\"!isHtmlValid\" style=\"color:rgb(233, 113, 113)\">HTML INVÁLIDO</p>\n</div>\n\n<div id=\"tabs\">\n    <ng-container *ngFor=\"let editorNode of editorNodes; let i = index\">\n        <div [ngClass]=\"{selected: (openEditor.id === editorNode.id)}\" *ngIf=\"openEditor.id === editorNode.id; else actionTab\">\n            {{ editorNode.title }}\n        </div>\n        <ng-template #actionTab>\n            <div [ngClass]=\"{selected: (openEditor.id === editorNode.id)}\" (click)=\"changeView(editorNode, i)\">\n                {{ editorNode.title }}\n            </div>\n        </ng-template>\n    </ng-container>\n</div>\n\n<ace-editor #aceEditor [text]=\"openEditor.renderContent\" id={{openEditor.id}} [durationBeforeCallback]=500 [autoUpdateContent]=\"reloadAceEditor\"\n    [readOnly]=\"!openEditor.editable\" [theme]=\"'dreamweaver'\" [mode]=\"'html'\" [ngStyle]=\"styleMode\"></ace-editor>"

/***/ }),

/***/ "../../../../../src/app/components/editor/views/text-view/text-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background-color: #fcfcfc;\n  height: 100%;\n  display: block; }\n  :host > #tabs {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background-color: #e1e4e6;\n    font: 14px;\n    text-transform: uppercase;\n    font-size: 12px;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);\n    position: relative;\n    z-index: 5; }\n    :host > #tabs > div {\n      box-sizing: border-box;\n      height: 30px;\n      padding: 0 10px;\n      line-height: 30px;\n      border-bottom: 2px solid transparent;\n      color: #959595;\n      transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n      cursor: pointer; }\n      :host > #tabs > div:hover {\n        border-bottom-color: #44c4b1; }\n      :host > #tabs > div.selected {\n        border-bottom-color: #3a9e8f;\n        color: #1e574e; }\n  :host > ace-editor {\n    position: relative;\n    z-index: 3; }\n\n.ace_static_highlight {\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;\n  font-size: 12px;\n  white-space: pre-wrap; }\n\n.ace_static_highlight .ace_gutter {\n  width: 2em;\n  text-align: right;\n  padding: 0 3px 0 0;\n  margin-right: 3px; }\n\n.ace_static_highlight.ace_show_gutter .ace_line {\n  padding-left: 2.6em; }\n\n.ace_static_highlight .ace_line {\n  position: relative; }\n\n.ace_static_highlight .ace_gutter-cell {\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute; }\n\n.ace_static_highlight .ace_gutter-cell:before {\n  content: counter(ace_line, decimal);\n  counter-increment: ace_line; }\n\n.ace_static_highlight {\n  counter-reset: ace_line; }\n\n.ace-chrome .ace_gutter {\n  background: #ebebeb;\n  color: #333;\n  overflow: hidden; }\n\n.ace-chrome .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8; }\n\n.ace-chrome {\n  background-color: #FFFFFF;\n  color: black; }\n\n.ace-chrome .ace_cursor {\n  color: black; }\n\n.ace-chrome .ace_invisible {\n  color: #bfbfbf; }\n\n.ace-chrome .ace_constant.ace_buildin {\n  color: #5848f6; }\n\n.ace-chrome .ace_constant.ace_language {\n  color: #585cf6; }\n\n.ace-chrome .ace_constant.ace_library {\n  color: #06960e; }\n\n.ace-chrome .ace_invalid {\n  background-color: #990000;\n  color: white; }\n\n.ace-chrome .ace_support.ace_function {\n  color: #3c4c72; }\n\n.ace-chrome .ace_support.ace_constant {\n  color: #06960e; }\n\n.ace-chrome .ace_support.ace_type,\n.ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {\n  color: #6d79de; }\n\n.ace-chrome .ace_variable.ace_parameter {\n  font-style: italic;\n  color: #FD971F; }\n\n.ace-chrome .ace_keyword.ace_operator {\n  color: #687687; }\n\n.ace-chrome .ace_comment {\n  color: #236e24; }\n\n.ace-chrome .ace_comment.ace_doc {\n  color: #236e24; }\n\n.ace-chrome .ace_comment.ace_doc.ace_tag {\n  color: #236e24; }\n\n.ace-chrome .ace_constant.ace_numeric {\n  color: mediumblue; }\n\n.ace-chrome .ace_variable {\n  color: #318495; }\n\n.ace-chrome .ace_xml-pe {\n  color: #68685b; }\n\n.ace-chrome .ace_entity.ace_name.ace_function {\n  color: #0000A2; }\n\n.ace-chrome .ace_heading {\n  color: #0c07ff; }\n\n.ace-chrome .ace_list {\n  color: #b90690; }\n\n.ace-chrome .ace_marker-layer .ace_selection {\n  background: #b5d5ff; }\n\n.ace-chrome .ace_marker-layer .ace_step {\n  background: #fcff00; }\n\n.ace-chrome .ace_marker-layer .ace_stack {\n  background: #a4e565; }\n\n.ace-chrome .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid silver; }\n\n.ace-chrome .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07); }\n\n.ace-chrome .ace_gutter-active-line {\n  background-color: #dcdcdc; }\n\n.ace-chrome .ace_marker-layer .ace_selected-word {\n  background: #fafaff;\n  border: 1px solid #c8c8fa; }\n\n.ace-chrome .ace_storage,\n.ace-chrome .ace_keyword,\n.ace-chrome .ace_meta.ace_tag {\n  color: #930f80; }\n\n.ace-chrome .ace_string.ace_regex {\n  color: red; }\n\n.ace-chrome .ace_string {\n  color: #1A1AA6; }\n\n.ace-chrome .ace_entity.ace_other.ace_attribute-name {\n  color: #994409; }\n\n.ace-chrome .ace_indent-guide {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/editor/views/text-view/text-view.component.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/_mixins.scss"],"names":[],"mappings":"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","file":"text-view.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    flex-grow: 1;\n    background-color: $white-lighter;\n    height: 100%;\n    display: block;\n\n    > #tabs {\n        user-select: none;\n        display: flex;\n        flex-direction: row;\n        background-color: $white-warm;\n        font: $font-size-default;\n        text-transform: uppercase;\n        font-size: $font-size-small;\n        @include box-shadow(bottom, 0.5);\n        position: relative;\n        z-index: 5;\n\n        > div {\n            box-sizing: border-box;\n            height: $tabs-height-small;\n            padding: 0 10px;\n            line-height: $tabs-height-small;\n            border-bottom: 2px solid transparent;\n            color: $white-darker;\n            transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n            cursor: pointer;\n\n            &:hover {\n                border-bottom-color: $green-light;\n            }\n\n            &.selected {\n                border-bottom-color: $green-dark;\n                color: $green-darker;\n            }\n        }\n    }\n\n    > ace-editor {\n        position: relative;\n        z-index: 3;\n    }\n}\n\n\n.ace_static_highlight {\n    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;\n    font-size: 12px;\n    white-space: pre-wrap\n}\n\n.ace_static_highlight .ace_gutter {\n    width: 2em;\n    text-align: right;\n    padding: 0 3px 0 0;\n    margin-right: 3px;\n}\n\n.ace_static_highlight.ace_show_gutter .ace_line {\n    padding-left: 2.6em;\n}\n\n.ace_static_highlight .ace_line {\n    position: relative;\n}\n\n.ace_static_highlight .ace_gutter-cell {\n    -moz-user-select: -moz-none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n}\n\n.ace_static_highlight .ace_gutter-cell:before {\n    content: counter(ace_line, decimal);\n    counter-increment: ace_line;\n}\n\n.ace_static_highlight {\n    counter-reset: ace_line;\n}\n\n.ace-chrome .ace_gutter {\n    background: #ebebeb;\n    color: #333;\n    overflow: hidden;\n}\n\n.ace-chrome .ace_print-margin {\n    width: 1px;\n    background: #e8e8e8;\n}\n\n.ace-chrome {\n    background-color: #FFFFFF;\n    color: black;\n}\n\n.ace-chrome .ace_cursor {\n    color: black;\n}\n\n.ace-chrome .ace_invisible {\n    color: rgb(191, 191, 191);\n}\n\n.ace-chrome .ace_constant.ace_buildin {\n    color: rgb(88, 72, 246);\n}\n\n.ace-chrome .ace_constant.ace_language {\n    color: rgb(88, 92, 246);\n}\n\n.ace-chrome .ace_constant.ace_library {\n    color: rgb(6, 150, 14);\n}\n\n.ace-chrome .ace_invalid {\n    background-color: rgb(153, 0, 0);\n    color: white;\n}\n\n.ace-chrome .ace_fold {}\n\n.ace-chrome .ace_support.ace_function {\n    color: rgb(60, 76, 114);\n}\n\n.ace-chrome .ace_support.ace_constant {\n    color: rgb(6, 150, 14);\n}\n\n.ace-chrome .ace_support.ace_type,\n.ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {\n    color: rgb(109, 121, 222);\n}\n\n.ace-chrome .ace_variable.ace_parameter {\n    font-style: italic;\n    color: #FD971F;\n}\n\n.ace-chrome .ace_keyword.ace_operator {\n    color: rgb(104, 118, 135);\n}\n\n.ace-chrome .ace_comment {\n    color: #236e24;\n}\n\n.ace-chrome .ace_comment.ace_doc {\n    color: #236e24;\n}\n\n.ace-chrome .ace_comment.ace_doc.ace_tag {\n    color: #236e24;\n}\n\n.ace-chrome .ace_constant.ace_numeric {\n    color: rgb(0, 0, 205);\n}\n\n.ace-chrome .ace_variable {\n    color: rgb(49, 132, 149);\n}\n\n.ace-chrome .ace_xml-pe {\n    color: rgb(104, 104, 91);\n}\n\n.ace-chrome .ace_entity.ace_name.ace_function {\n    color: #0000A2;\n}\n\n.ace-chrome .ace_heading {\n    color: rgb(12, 7, 255);\n}\n\n.ace-chrome .ace_list {\n    color: rgb(185, 6, 144);\n}\n\n.ace-chrome .ace_marker-layer .ace_selection {\n    background: rgb(181, 213, 255);\n}\n\n.ace-chrome .ace_marker-layer .ace_step {\n    background: rgb(252, 255, 0);\n}\n\n.ace-chrome .ace_marker-layer .ace_stack {\n    background: rgb(164, 229, 101);\n}\n\n.ace-chrome .ace_marker-layer .ace_bracket {\n    margin: -1px 0 0 -1px;\n    border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-chrome .ace_marker-layer .ace_active-line {\n    background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-chrome .ace_gutter-active-line {\n    background-color: #dcdcdc;\n}\n\n.ace-chrome .ace_marker-layer .ace_selected-word {\n    background: rgb(250, 250, 255);\n    border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-chrome .ace_storage,\n.ace-chrome .ace_keyword,\n.ace-chrome .ace_meta.ace_tag {\n    color: rgb(147, 15, 128);\n}\n\n.ace-chrome .ace_string.ace_regex {\n    color: rgb(255, 0, 0)\n}\n\n.ace-chrome .ace_string {\n    color: #1A1AA6;\n}\n\n.ace-chrome .ace_entity.ace_other.ace_attribute-name {\n    color: #994409;\n}\n\n.ace-chrome .ace_indent-guide {\n    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\n}","@mixin box-shadow ($pos, $opacity, $important: false) {\n    $_pos: 0px 0px 3px 0px ;\n    @if($pos == top){\n        $_pos: 0px 3px 11px 0px ;\n    }@else if($pos == left) {\n        $_pos: -2px 0px 11px -4px;\n    }\n\n    $rgb: rgba(0,0,0,$opacity);\n    @if($important == true){        \n        $rgb: rgba(0,0,0,$opacity) !important;\n    }\n\n    box-shadow: $_pos $rgb;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/views/text-view/text-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pretty__ = __webpack_require__("../../../../pretty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pretty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pretty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ace_editor_src_component__ = __webpack_require__("../../../../ng2-ace-editor/src/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_state_service_state_service__ = __webpack_require__("../../../../../src/app/services/state-service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_converters__ = __webpack_require__("../../../../../src/utils/converters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_brace_index__ = __webpack_require__("../../../../brace/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_brace_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_brace_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_brace_theme_dreamweaver__ = __webpack_require__("../../../../brace/theme/dreamweaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_brace_theme_dreamweaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_brace_theme_dreamweaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_brace_mode_html__ = __webpack_require__("../../../../brace/mode/html.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_brace_mode_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_brace_mode_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_brace_snippets_html__ = __webpack_require__("../../../../brace/snippets/html.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_brace_snippets_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_brace_snippets_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_brace_ext_language_tools__ = __webpack_require__("../../../../brace/ext/language_tools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_brace_ext_language_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_brace_ext_language_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_brace_ext_searchbox__ = __webpack_require__("../../../../brace/ext/searchbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_brace_ext_searchbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_brace_ext_searchbox__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TextViewComponent = (function () {
    function TextViewComponent(_editorService, _stateService) {
        this._editorService = _editorService;
        this._stateService = _stateService;
        this.editorNodes = null;
        this.openEditor = {};
        this.reloadAceEditor = false;
        this.reload = false;
        this.isHtmlValid = true;
        this.styleMode = {
            height: '100%',
            width: '100%',
            overflow: 'auto'
        };
    }
    /************* LIFE CYCLE *************/
    TextViewComponent.prototype.ngOnInit = function () {
        this._editorService.setLoading(true);
        this.config();
        this._editorService.setLoading(false);
    };
    TextViewComponent.prototype.ngAfterViewInit = function () {
        this.initEditor();
    };
    TextViewComponent.prototype.ngOnDestroy = function () {
        this.subscribeFile.unsubscribe();
    };
    /************* END LIFE CYCLE *************/
    TextViewComponent.prototype.changeView = function (openEditor, index) {
        this.openEditor = openEditor;
        this.openEditor['index'] = index;
        this.reloadAceEditor = true;
        if (!this.openEditor['editable']) {
            this.styleMode['backgroundColor'] = '#e8e8e8';
        }
        else {
            delete (this.styleMode['backgroundColor']);
        }
    };
    TextViewComponent.prototype.config = function () {
        var _this = this;
        this.subscribeFile = this._editorService.getFile().subscribe(function (file) {
            _this.editorNodes = _this.parseToHtmlToEditors(file.getState().content);
            for (var key in _this.editorNodes) {
                if (_this.editorNodes[key].editable) {
                    _this.changeView(_this.editorNodes[key], key);
                    return;
                }
            }
        });
    };
    /**
     *
     * @param content
     */
    TextViewComponent.prototype.parseToHtmlToEditors = function (content) {
        var editorNodes = [];
        Object.keys(content).forEach(function (property) {
            var node = content[property];
            editorNodes.push({
                id: property,
                title: node.title,
                editable: node.editable,
                renderContent: Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["i" /* is */])(String, node.content) ? node.content : __WEBPACK_IMPORTED_MODULE_1_pretty___default()(__WEBPACK_IMPORTED_MODULE_6__utils_converters__["a" /* Converters */].json2html(node.content, false, false)),
                editor: null
            });
        });
        return editorNodes;
    };
    TextViewComponent.prototype.initEditor = function () {
        var _this = this;
        var _editor = this.editor.getEditor();
        var session = _editor.getSession();
        _editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: false
        });
        // session.setOption('minLines', 2);
        /*_editor.commands.addCommand({
          name: 'showOtherCompletions',
          bindKey: 'Ctrl-.',
          exec: function (editor) {
          }
        });*/
        /*session.selection.on('changeSelection', function (e) {
          let selectionRange = _editor.getSelectionRange();
          let startLine = selectionRange.start.row;
          let endLine = selectionRange.end.row;
        });*/
        _editor.on('focus', function (e) {
            _this.reloadAceEditor = false;
        });
        _editor.on('blur', function (e) {
            _this.reloadAceEditor = true;
            setTimeout(function () {
                _this._editorService.getFileStateValue().snapshot();
            }, 1000);
        });
        session.on('change', function (e) {
            if (_editor.curOp && _editor.curOp.command.name) {
                _this.editorNodes[_this.openEditor['index']].renderContent = _editor.getValue();
                if (_this.editor.timeoutSaving != null) {
                    clearTimeout(_this.editor.timeoutSaving);
                }
                _this.editor.timeoutSaving = setTimeout(function () {
                    _this._editorService.save(_this.openEditor['id'], _editor.getValue(), 'Edit mode text');
                    _this.editor.timeoutSaving = null;
                }, _this.editor._durationBeforeCallback);
                /*let content = _editor.getValue();
                let options = {
                  settings: {
                    format: 'html', // 'plain', 'html', or 'markdown'
                  },
                  attributes: {
                    '_': {
                      mixed: /.
                    }
                  }
                };
                EditorComponent.executeIfvalidateHtmlTags(content,
                  _ => {
                    let newState = clone(this.file.getState().getContent());
                    let json = File.html2json(content, false);
                    newState[_editor.container.id].content.child = json;
                    this.isHtmlValid = true;
                    this._editorService.newStateFile(newState);
                    this._stateService.setAvailableViews(['form', 'wysiwyg']);
                  },
                  _ => {
                    this.isHtmlValid = false;
                    this._stateService.setAvailableViews(['form']);
                  })*/
            }
        });
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('aceEditor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_ace_editor_src_component__["a" /* AceEditorComponent */])
    ], TextViewComponent.prototype, "editor", void 0);
    TextViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-view',
            template: __webpack_require__("../../../../../src/app/components/editor/views/text-view/text-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/views/text-view/text-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_editor_service_editor_service__["a" /* EditorService */], __WEBPACK_IMPORTED_MODULE_4__services_state_service_state_service__["a" /* StateService */]])
    ], TextViewComponent);
    return TextViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/dam/api/Commands.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_Dialog__ = __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/dam/ui/Dialog.ts");

var register = function (editor, http) {
    editor.addCommand('mceDam', function () {
        __WEBPACK_IMPORTED_MODULE_0__ui_Dialog__["a" /* default */].open(editor, http, 'image');
    });
    editor.addCommand('mceDamLink', function () {
        __WEBPACK_IMPORTED_MODULE_0__ui_Dialog__["a" /* default */].open(editor, http, 'link');
    });
    editor.addCommand('mceDamVideo', function () {
        __WEBPACK_IMPORTED_MODULE_0__ui_Dialog__["a" /* default */].open(editor, http, 'video');
    });
};
/* harmony default export */ __webpack_exports__["a"] = ({
    register: register,
});


/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/dam/core/Dam.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__ = __webpack_require__("../../../../../src/app/models/schema/xedit-mapper.ts");


/**
 * Dam.js
 */
var TAG_BY_TYPE = { 'image': 'img', 'link': 'a', 'video': 'video' };
var ATTR_BY_TAG = { 'img': 'src', 'a': 'href', 'video': 'src' };
var ATTRS_BY_TAG = { 'img': ['alt', 'longdesc'], 'a': ['target', 'title'], 'video': ['longdesc', 'height', 'width'] };
var VALID_TAGS = Object.keys(ATTR_BY_TAG);
var isValidNodeId = function (nodeId) {
    return true;
};
function hasValidResource(tag, val, type) {
    var isValid = VALID_TAGS.includes(tag) && !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(val) && tag == TAG_BY_TYPE[type];
    return isValid;
}
var getId = function (editor, type) {
    var selectedNode = editor.selection.getNode();
    var tag = selectedNode.tagName.toLowerCase();
    var val = editor.dom.getAttrib(selectedNode, __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_LINK);
    if (type == 'video') {
        tag = 'video';
        val = editor.dom.getAttrib(selectedNode, 'data-mce-p-xe_link');
    }
    /*const hasResource = this.hasValidResource(tag, val, type);
    const isDam = VALID_TAGS.includes(tag) && TAG_BY_TYPE[type] == tag && editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK) !== '';
    const hasSource = VALID_TAGS.includes(tag) && editor.dom.getAttrib(selectedNode, ATTR_BY_TAG[tag]) !== '';*/
    return hasValidResource(tag, val, type) ? val : '';
};
var getAttribute = function (editor, attribute) {
    var defaultValues = {
        'alt': 'Texto alternativo'
    };
    var selectedNode = editor.selection.getNode();
    var attr = editor.dom.getAttrib(selectedNode, attribute);
    return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(attr) ? (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(attribute, defaultValues) ? defaultValues[attribute] : '') : attr;
};
var getUrl = function (editor, nodeId) {
    var resourceUrl = editor.getParam('dam_url', editor.documentBaseUrl);
    var url = resourceUrl + nodeId;
    if (((/^(f|ht)tps?:\/\//i).test(nodeId))) {
        url = nodeId;
    }
    return url;
};
var createHtmlVideo = function (text, resource) {
    var height = 'height' in resource && !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(resource['height']) ? resource['height'] : '100%';
    var width = 'width' in resource && !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(resource['width']) ? resource['width'] : '100%';
    //text = `<video xe_link="${resource['xe_link']}" lingkwidth="${width}" height="${height}" controls>`;
    text = "<source src=\"" + resource['xe_link'] + "\" type=\"video/mp4\"/>Your browser does not support the video tag.";
    //text += `</video>`;
    resource['width'] = "" + width;
    resource['height'] = "" + height;
    resource['controls'] = '';
    return [text, resource];
};
var insert = function (editor, nodeId, type, attributes) {
    var selectedNode = editor.selection.getNode();
    var tag = selectedNode.tagName.toLowerCase();
    var val = editor.dom.getAttrib(selectedNode, __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_LINK);
    var hasResource = hasValidResource(tag, val, type);
    var url = getUrl(editor, nodeId);
    if (hasResource) {
        selectedNode.setAttribute(__WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_LINK, nodeId);
        selectedNode.setAttribute(ATTR_BY_TAG[tag], url);
        ATTRS_BY_TAG[tag].forEach(function (key) {
            selectedNode.setAttribute(key, attributes[key]);
        });
    }
    else {
        //editor.focus();
        //editor.selection.collapse(true);
        var tag_1 = TAG_BY_TYPE[type];
        var resource_1 = {
            xe_link: nodeId
        };
        ATTRS_BY_TAG[tag_1].forEach(function (key) {
            resource_1[key] = attributes[key];
        });
        resource_1[ATTR_BY_TAG[tag_1]] = url;
        var text = '';
        if (type == 'link') {
            if (!hasResource) {
                text = editor.selection.getContent();
            }
            else {
                text = resource_1['title'];
            }
        }
        else if (type == 'video') {
            _a = createHtmlVideo(text, resource_1), text = _a[0], resource_1 = _a[1];
            tag_1 = 'video';
        }
        editor.execCommand('mceInsertContent', false, editor.dom.createHTML(tag_1, resource_1, text));
    }
    var _a;
};
/* harmony default export */ __webpack_exports__["a"] = ({
    isValidNodeId: isValidNodeId,
    getId: getId,
    getAttribute: getAttribute,
    insert: insert
});


/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/dam/core/FilterContent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * FilterContent.js
 *
 */
var isDamNode = function (node) {
    return node.name.toLowerCase() !== 'img';
};
var setContentEditable = function (state) {
    return function (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            if (isDamNode(nodes[i])) {
                nodes[i].attr('contenteditable', state);
            }
        }
    };
};
var setup = function (editor) {
    editor.on('PreInit', function () {
        editor.parser.addNodeFilter('a', setContentEditable('false'));
        editor.serializer.addNodeFilter('a', setContentEditable(null));
    });
};
/* harmony default export */ __webpack_exports__["a"] = ({
    setup: setup
});


/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/dam/ui/Buttons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Buttons.js
 */
var register = function (editor) {
    editor.addButton('dam', {
        icon: 'image',
        tooltip: 'DAM image',
        cmd: 'mceDam',
        stateSelector: 'img[xe_link]'
    });
    editor.addButton('dam_link', {
        icon: 'link',
        tooltip: 'DAM link',
        cmd: 'mceDamLink',
        stateSelector: 'a[xe_link]'
    });
    editor.addButton('dam_video', {
        icon: 'media',
        tooltip: 'DAM video',
        cmd: 'mceDamVideo',
        stateSelector: 'img[data-mce-object="video"]'
    });
    editor.addMenuItem('dam', {
        icon: 'image',
        text: 'DAM',
        context: 'insert',
        cmd: 'mceDam'
    });
    editor.addMenuItem('dam_link', {
        icon: 'link',
        text: 'DAM link',
        context: 'insert',
        cmd: 'mceDamLink'
    });
    editor.addMenuItem('dam_video', {
        icon: 'video',
        text: 'DAM video',
        context: 'insert',
        cmd: 'mceDamVideo'
    });
};
/* harmony default export */ __webpack_exports__["a"] = ({
    register: register
});


/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/dam/ui/Dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Dam__ = __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/dam/core/Dam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_api__ = __webpack_require__("../../../../../src/app/api.ts");
/**
 * Dialog.js
 */


var ATTRS_BY_TYPE = {
    video: {
        longdesc: {
            type: 'textbox',
            name: 'longdesc',
            size: 20,
            label: 'Descripción',
        },
        width: {
            type: 'textbox',
            name: 'width',
            size: 40,
            label: 'Anchura',
        },
        height: {
            type: 'textbox',
            name: 'height',
            size: 40,
            label: 'Altura',
        }
    },
    image: {
        alt: { type: 'textbox', name: 'alt', size: 40, label: 'Alternativo' },
        longdesc: {
            type: 'textbox',
            name: 'longdesc',
            size: 40,
            label: 'Descripción',
        },
    },
    link: {
        title: { type: 'textbox', name: 'title', size: 40, label: 'Título' },
        target: {
            type: 'listbox',
            name: 'target',
            label: 'Target',
            values: [
                { text: 'Nueva ventana', value: '_blank' },
                { text: 'Misma ventana', value: '_self' },
            ],
        },
    },
};
var insertDam = function (editor, newId, type, extra) {
    if (!__WEBPACK_IMPORTED_MODULE_0__core_Dam__["a" /* default */].isValidNodeId(newId)) {
        editor.windowManager.alert('El enlace elegido no es válido');
        return true;
    }
    else {
        __WEBPACK_IMPORTED_MODULE_0__core_Dam__["a" /* default */].insert(editor, newId, type, extra);
        return false;
    }
};
var open = function (editor, http, type) {
    var currentId = __WEBPACK_IMPORTED_MODULE_0__core_Dam__["a" /* default */].getId(editor, type);
    var attributes = {};
    for (var attr in ATTRS_BY_TYPE[type]) {
        attributes[attr] = __WEBPACK_IMPORTED_MODULE_0__core_Dam__["a" /* default */].getAttribute(editor, attr);
    }
    var save = function (e) {
        var newNodeId = e.data.nodeId;
        var extra = {};
        for (var key in ATTRS_BY_TYPE[type]) {
            extra[key] = e.data[key];
        }
        if (insertDam(editor, newNodeId, type, extra)) {
            e.preventDefault();
        }
    };
    function openTree(evt, windowM, pathIds) {
        window['treeModal']
            .openModal('modal-1', type, pathIds)
            .then(function (selectedId) {
            __WEBPACK_IMPORTED_MODULE_1__app_api__["a" /* Api */].getInfoNode(http, selectedId, type, setData, null, null);
        })
            .catch(function (err) { return console.log(err); });
    }
    function setData(result, extra) {
        var id = result && result.nodeid ? result.nodeid : '';
        var name = result && result.name ? result.name : '';
        var path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = "<span title=\"" + path + "\">" + path + "<span/>";
        }
        var pathIds = result && result.path ? Object.keys(result.path) : [];
        document.getElementById('dam-nodeId')['value'] = id;
        document.getElementById('dam-name')['innerHTML'] = name;
        document.getElementById('dam-path')['innerHTML'] = path;
    }
    function showWManager(result, _a) {
        var editor = _a.editor;
        var name = result && result.name
            ? result.name
            : '<i>Elemento no seleccionado...</i>';
        var path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = "<span title=\"" + path + "\">" + path + "<span/>";
        }
        var pathIds = result && result.path ? Object.keys(result.path) : [];
        var form = {
            title: 'Dam',
            body: [],
            onsubmit: function (e) {
                save(e);
            },
        };
        form.body.push({
            type: 'container',
            label: 'Enlace',
            layout: 'flow',
            direction: 'row',
            align: 'center',
            maxHeight: 50,
            height: 30,
            items: [
                {
                    id: 'dam-nodeId',
                    type: 'textbox',
                    name: 'nodeId',
                    label: 'textbox',
                    value: currentId,
                    required: true,
                },
                {
                    type: 'button',
                    icon: 'browse',
                    onclick: function (e) { return openTree(e, editor.windowManager, pathIds); },
                },
            ],
        });
        form.body.push({
            type: 'container',
            label: 'Nombre',
            id: 'dam-name',
            html: name,
        });
        form.body.push({
            type: 'container',
            label: 'Path',
            id: 'dam-path',
            html: path,
        });
        // Attributes
        for (var key in ATTRS_BY_TYPE[type]) {
            var obj = ATTRS_BY_TYPE[type][key];
            obj['value'] = attributes[key];
            form.body.push(obj);
        }
        editor.windowManager.open(form);
    }
    if (currentId) {
        __WEBPACK_IMPORTED_MODULE_1__app_api__["a" /* Api */].getInfoNode(http, currentId, type, showWManager, showWManager, {
            editor: editor,
        });
    }
    else {
        showWManager(null, { editor: editor });
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    open: open,
});


/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WysiwygHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sanitize_html__ = __webpack_require__("../../../../sanitize-html/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sanitize_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sanitize_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tinymce__ = __webpack_require__("../../../../tinymce/tinymce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tinymce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_tinymce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tinymce_themes_modern__ = __webpack_require__("../../../../tinymce/themes/modern/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tinymce_themes_modern___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_tinymce_themes_modern__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_table__ = __webpack_require__("../../../../tinymce/plugins/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_tinymce_plugins_image__ = __webpack_require__("../../../../tinymce/plugins/image/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_tinymce_plugins_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_tinymce_plugins_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_tinymce_plugins_link__ = __webpack_require__("../../../../tinymce/plugins/link/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_tinymce_plugins_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_tinymce_plugins_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tinymce_plugins_searchreplace__ = __webpack_require__("../../../../tinymce/plugins/searchreplace/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tinymce_plugins_searchreplace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_tinymce_plugins_searchreplace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_tinymce_plugins_autolink__ = __webpack_require__("../../../../tinymce/plugins/autolink/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_tinymce_plugins_autolink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_tinymce_plugins_autolink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_tinymce_plugins_media__ = __webpack_require__("../../../../tinymce/plugins/media/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_tinymce_plugins_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_tinymce_plugins_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_tinymce_plugins_hr__ = __webpack_require__("../../../../tinymce/plugins/hr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_tinymce_plugins_hr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_tinymce_plugins_hr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_tinymce_plugins_anchor__ = __webpack_require__("../../../../tinymce/plugins/anchor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_tinymce_plugins_anchor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_tinymce_plugins_anchor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_tinymce_plugins_advlist__ = __webpack_require__("../../../../tinymce/plugins/advlist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_tinymce_plugins_advlist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_tinymce_plugins_advlist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_tinymce_plugins_lists__ = __webpack_require__("../../../../tinymce/plugins/lists/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_tinymce_plugins_lists___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_tinymce_plugins_lists__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_tinymce_plugins_textcolor__ = __webpack_require__("../../../../tinymce/plugins/textcolor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_tinymce_plugins_textcolor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_tinymce_plugins_textcolor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_tinymce_plugins_imagetools__ = __webpack_require__("../../../../tinymce/plugins/imagetools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_tinymce_plugins_imagetools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_tinymce_plugins_imagetools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_tinymce_plugins_colorpicker__ = __webpack_require__("../../../../tinymce/plugins/colorpicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_tinymce_plugins_colorpicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_tinymce_plugins_colorpicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dam_api_Commands__ = __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/dam/api/Commands.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dam_core_FilterContent__ = __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/dam/core/FilterContent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dam_ui_Buttons__ = __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/dam/ui/Buttons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_bootstrap_datepicker__ = __webpack_require__("../../../../bootstrap-datepicker/dist/js/bootstrap-datepicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_bootstrap_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_bootstrap_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__models_schema_xedit_mapper__ = __webpack_require__("../../../../../src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__utils_converters__ = __webpack_require__("../../../../../src/utils/converters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");



// TIYMCE


















// DATEPICKER





var WysiwygHandler = (function () {
    function WysiwygHandler() {
    }
    WysiwygHandler.executeHandler = function (type, args, defaultMethod) {
        if (defaultMethod === void 0) { defaultMethod = function () { }; }
        var handlers = WysiwygHandler.handlers;
        handlers[type] ? handlers[type](args) : defaultMethod(args);
    };
    /**********************************     TINYMCE  *******************************************/
    /**
     * Clear tinymce
     */
    WysiwygHandler.clearTinymce = function () {
        tinymce.remove();
    };
    /**
     * Init tinymce editor and added events
     */
    WysiwygHandler.initTinymce = function (args) {
        if (tinymce.activeEditor == null ||
            !WysiwygHandler.isSameEditor(tinymce.activeEditor, args.node.getSection().getAttribute(__WEBPACK_IMPORTED_MODULE_23__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID))) {
            WysiwygHandler.clearTinymce();
            WysiwygHandler.addPlugins(args.http);
            var toolbar_1 = WysiwygHandler.generateToolbar(args.node.getSchema());
            var fixed_toolbar_container = !Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["j" /* isEmpty */])(toolbar_1)
                ? '#toolbar'
                : false;
            tinymce.init({
                dam_url: __WEBPACK_IMPORTED_MODULE_25__app_xedit__["a" /* Xedit */].getResourceUrl(),
                max_chars: 30000,
                id: args.node.getSection().getAttribute(__WEBPACK_IMPORTED_MODULE_23__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID),
                target: args.node.getSection(),
                inline: true,
                branding: false,
                fixed_toolbar_container: fixed_toolbar_container,
                menubar: false,
                toolbar: toolbar_1,
                plugins: WysiwygHandler.getAvailablePlugins(args.node.getSchema()),
                skin_url: 'assets/skins/x-edit',
                valid_elements: '*[*]',
                setup: function (editor) {
                    editor.on('Nodechange', function (e) {
                        console.log(e);
                        var ele = e.element;
                        var sibling = ele.previousSibling;
                        if (sibling &&
                            typeof sibling.getAttribute === 'function') {
                            if (sibling.getAttribute(__WEBPACK_IMPORTED_MODULE_23__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID) ==
                                ele.getAttribute(__WEBPACK_IMPORTED_MODULE_23__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID)) {
                                ele.setAttribute(__WEBPACK_IMPORTED_MODULE_23__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID, __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID());
                                sibling.removeAttribute(__WEBPACK_IMPORTED_MODULE_23__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTR_WYSIWYG_SELECTED);
                            }
                        }
                        /*const element = e.element;
                        const id = element.getAttribute(XeditMapper.TAG_UUID);
                        function isParentId(parents, elementId) {
                            let is = false;
                            if (!isNil(parents)) {
                                parents.forEach(parent => {
                                    if (equals(parent.getAttribute(XeditMapper.TAG_UUID), elementId)) {
                                        is = true;
                                        parent.removeAttribute('xe_w_selected');
                                    }
                                });
                            }
                            return is;
                        }
                        if (isNil(id) || isParentId(e.parents, id)) {
                            element.setAttribute(XeditMapper.TAG_UUID, UUID.UUID());
                        }*/
                        /*if (!isNil(args.node.getTarget()) && !equals(args.node.getTarget().getAttribute(XeditMapper.TAG_UUID),
                            element.getAttribute(XeditMapper.TAG_UUID))) {
                            args.service.setCurrentNode(args.service.parseToNode(element));
                        }*/
                    });
                    editor.on('Paste', function (e) {
                        e.preventDefault();
                        var copyHtml = args.clipboardConfigs.getConfigs('copy');
                        var data = WysiwygHandler.copy(e, copyHtml.enable);
                        data = WysiwygHandler.resetIdsFromString(data);
                        document.execCommand('insertHTML', false, data);
                        var contentTag = editor.bodyElement;
                        var content = editor.getContent();
                        args.service.save(contentTag, content, 'Change section ' +
                            args.node
                                .getSection()
                                .getAttribute('xe_section'));
                    });
                    editor.on('change', function (evt) {
                        var contentTag = editor.bodyElement;
                        var content = editor.getContent();
                        args.service.save(contentTag, content, 'Change section ' +
                            args.node
                                .getSection()
                                .getAttribute('xe_section'));
                    });
                    editor.on('init', function (evt) {
                        tinymce.execCommand('mceFocus', false, editor.id);
                        args.service.setCurrentNode(args.node);
                    });
                    editor.on('hide', function (e) {
                        tinymce.remove(editor);
                    });
                    editor.on('blur', function (e) {
                        // TODO FIX atovar
                        var xedit = e.target.bodyElement;
                        var links = xedit.getElementsByTagName('a');
                        if (!Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["k" /* isNil */])(links)) {
                            for (var i = 0; i < links.length; i++) {
                                links[i].onclick = function (evt) {
                                    evt.preventDefault();
                                    return false;
                                };
                            }
                        }
                        args.service.getFileStateValue().snapshot();
                        /*const promise = new Promise(
                            () => {
                                const loop = window.setInterval(() => {
                                    try {
                                        if (tinymce.activeEditor.id !== editor.id || editor.isHidden()) {
                                            window.clearInterval(loop);
                                            tinymce.remove(editor);
                                        } else {
                                            editor.hide();
                                        }
                                    } catch (e) {
                                        window.clearInterval(loop);
                                    }
                                }, 30);

                            }
                        );*/
                        return false;
                    });
                },
            });
        }
    };
    WysiwygHandler.resetIdsFromString = function (text) {
        function replaceIndex(string, at, repl) {
            var pos = -1;
            return string.replace(/ xe_uuid=\"[^"]*\" */g, function (match) {
                pos++;
                if (pos === at) {
                    return repl;
                }
                return match;
            });
        }
        var occurrences = text.match(/ xe_uuid=\"[^"]*\" */g);
        occurrences = occurrences != null ? occurrences.length : 0;
        for (var i = 0; i < occurrences; i++) {
            text = replaceIndex(text, i, ' xe_uuid="' + __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID() + '" ');
        }
        return __WEBPACK_IMPORTED_MODULE_24__utils_converters__["a" /* Converters */].json2html(__WEBPACK_IMPORTED_MODULE_24__utils_converters__["a" /* Converters */].html2json(text));
    };
    WysiwygHandler.isSameEditor = function (editor, id) {
        return (editor.targetElm.hasAttribute('xe_uuid') &&
            Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["d" /* equals */])(editor.targetElm.getAttribute('xe_uuid'), id));
    };
    WysiwygHandler.addPlugins = function (http) {
        tinymce.PluginManager.add('dam', function (editor) {
            __WEBPACK_IMPORTED_MODULE_19__dam_core_FilterContent__["a" /* default */].setup(editor);
            __WEBPACK_IMPORTED_MODULE_18__dam_api_Commands__["a" /* default */].register(editor, http);
            __WEBPACK_IMPORTED_MODULE_20__dam_ui_Buttons__["a" /* default */].register(editor);
        });
    };
    WysiwygHandler.generateToolbar = function (schema) {
        /*'styleselect | link dam | bold italic underline |  aligncenter alignjustify |' +
            ' bullist numlist outdent indent |fontsizeselect'*/
        /*'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify
        | numlist bullist outdent indent  | removeformat'*/
        var toolbar = '';
        if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])('options', schema)) {
            if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])('styles', schema.options)) {
                toolbar += this.toolbarStyles(schema.options.styles);
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])('tags', schema.options)) {
                toolbar += this.toolbarTags(schema.options.tags);
            }
        }
        toolbar = toolbar.trim();
        return !Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["j" /* isEmpty */])(toolbar) ? toolbar : false;
    };
    WysiwygHandler.toolbarStyles = function (styles) {
        var stylesValue = {};
        var groups = {
            group1: {
                bold: 'bold',
                italic: 'italic',
                underline: 'underline',
                strikethrough: 'strikethrough',
                color: 'forecolor',
                background: 'backcolor',
            },
            others: {
                ol: 'numlist',
                ul: 'bullist',
                table: 'table',
            },
            align: {
                alignright: 'alignright',
                aligncenter: 'aligncenter',
                alignleft: 'alignleft',
                alignjustify: 'alignjustify',
            },
            indent: {
                outdent: 'outdent',
                indent: 'indent',
            },
            format: {
                formatselect: 'formatselect',
            },
            font: {
                fontsize: 'fontsizeselect',
            },
        };
        if (typeof styles === 'string') {
            styles = Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["d" /* equals */])(styles, WysiwygHandler.STYLES_ALL)
                ? Object.keys(groups)
                : [];
        }
        styles.forEach(function (style) {
            if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])(style, groups)) {
                WysiwygHandler.addValue(stylesValue, style, Object.values(groups[style]));
            }
            else {
                for (var group in groups) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])(style, groups[group])) {
                        WysiwygHandler.addValue(stylesValue, group, [
                            groups[group][style],
                        ]);
                    }
                }
            }
        });
        var result = '';
        for (var styleValue in stylesValue) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["k" /* isNil */])(stylesValue[styleValue])) {
                result += Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["q" /* uniq */])(stylesValue[styleValue]).join(' ') + ' | ';
            }
        }
        return result.replace(/(\s\|\s)$/g, '');
    };
    WysiwygHandler.toolbarTags = function (tags) {
        var tagsValue = {};
        var groups = {
            buttons: {
                a: 'dam_link',
                img: 'dam',
                video: 'dam_video',
                audio: 'dam_audio',
            },
            formats: {},
        };
        if (typeof tags === 'string') {
            tags = Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["d" /* equals */])(tags, WysiwygHandler.TAGS_ALL)
                ? Object.keys(groups)
                : [];
        }
        else {
            tags = Object.keys(tags);
        }
        tags.forEach(function (style) {
            if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])(style, groups)) {
                WysiwygHandler.addValue(tagsValue, style, Object.values(groups[style]));
            }
            else {
                for (var group in groups) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])(style, groups[group])) {
                        WysiwygHandler.addValue(tagsValue, group, [
                            groups[group][style],
                        ]);
                    }
                }
            }
        });
        var result = ' ';
        for (var tagValue in tagsValue) {
            if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["d" /* equals */])(tagValue, 'buttons')) {
                result += Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["q" /* uniq */])(tagsValue[tagValue]).join(' ');
            }
        }
        return result;
    };
    WysiwygHandler.addValue = function (object, property, value) {
        if (Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])(property, object)) {
            object[property] = Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["p" /* union */])(object[property], value);
        }
        else {
            object[property] = value;
        }
    };
    WysiwygHandler.getAvailablePlugins = function (schema) {
        /*['link', 'table', 'image', 'paste', 'dam']*/
        var plugins = ''; // 'searchreplace autolink image link media hr anchor advlist lists textcolor imagetools colorpicker';
        return 'dam searchreplace autolink link media hr anchor advlist lists textcolor colorpicker table';
    };
    /**********************************     DATEPICKER  *******************************************/
    /**
     * Init datepicker
     */
    WysiwygHandler.initDatePicker = function (args) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function () {
            'use strict';
            var hasNode = Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])('node', args);
            var hasElement = Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])('element', args);
            var element = hasNode
                ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(args.node.getSection())
                : hasElement
                    ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(args.element)
                    : __WEBPACK_IMPORTED_MODULE_0_jquery___default()(args);
            if (element.children().length === 0) {
                var date = element.html();
                element.html('<input type="text" value="' + date + '">');
                var input_1 = element.children();
                input_1.datepicker({
                    format: 'dd-mm-yyyy',
                });
                input_1.datepicker().on('hide', function () {
                    input_1.datepicker('destroy');
                    element.html(input_1.val());
                    if (hasNode) {
                        args.service.save(args.node.getTarget(), element.html(), 'Change section date');
                        args.service.getFileStateValue().snapshot();
                    }
                    else if (hasElement && Object(__WEBPACK_IMPORTED_MODULE_22_ramda__["g" /* hasIn */])('callback', args)) {
                        args.callback(input_1.val());
                    }
                });
                input_1.on('changeDate', function () {
                    input_1.datepicker('hide');
                });
                input_1.datepicker('show');
            }
        });
    };
    /**
     * This method get data in plain format from clipboard
     */
    WysiwygHandler.copyPlain = function (evt) {
        var data = evt.clipboardData.getData('text/plain');
        return data;
    };
    /*
    * This method get the data in html format from the clipboard but if it is empty it try to get in plain format
    */
    WysiwygHandler.copyHtml = function (evt) {
        var data = evt.clipboardData.getData('text/plain');
        var html = evt.clipboardData.getData('text/html');
        if (html) {
            data = __WEBPACK_IMPORTED_MODULE_2_sanitize_html___default()(html);
        }
        return data;
    };
    WysiwygHandler.copy = function (evt, asHtml) {
        if (asHtml === void 0) { asHtml = true; }
        var data = '';
        if (asHtml) {
            data = WysiwygHandler.copyHtml(evt);
        }
        else {
            data = WysiwygHandler.copyPlain(evt);
        }
        return data;
    };
    WysiwygHandler.STYLES_ALL = 'all';
    WysiwygHandler.TAGS_ALL = 'all';
    WysiwygHandler.handlers = {
        date: WysiwygHandler.initDatePicker,
        text: WysiwygHandler.initTinymce,
    };
    return WysiwygHandler;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"js\">\n    <ng-container *ngFor=\"let js of jsLinks\">\n        <script [src]=\"js | url\"></script>\n    </ng-container>\n</div>-->\n<div class=\"css\">\n    <ng-container *ngFor=\"let css of cssLinks\">\n        <link rel=\"stylesheet\" [href]=\"addHttp(css) | url\">\n    </ng-container>\n</div>\n<div #xedit [innerHTML]=\"renderContent | safeHtml\" (click)=\"onclick($event)\" (contextmenu)=\"onContextMenu($event, item)\"></div>\n<context-menu #myContextMenu>\n    <ng-template *ngFor=\"let action of contextMenuActions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\" (execute)=\"action.click()\">\n        {{ action.html() }}\n    </ng-template>\n</context-menu>"

/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  background-color: #fcfcfc;\n  display: block;\n  overflow: auto; }\n\n.no-editable {\n  position: relative; }\n\n.no-editable:after {\n  background: gray;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  content: '';\n  opacity: 0.4; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,oBAAmB;EACf,qBAAoB;EAChB,aAAY;EACpB,0BFiBmB;EEhBnB,eAAc;EACd,eAAc,EACjB;;AAED;EACI,mBAAkB,EACrB;;AAED;EACI,iBAAgB;EAChB,mBAAkB;EAClB,OAAM;EACN,UAAS;EACT,SAAQ;EACR,QAAO;EACP,YAAW;EACX,aAAY,EACf","file":"wysiwyg-view.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    background-color: $white-lighter;\n    display: block;\n    overflow: auto;\n}\n\n.no-editable {\n    position: relative;\n}\n\n.no-editable:after {\n    background: gray;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    content: '';\n    opacity: 0.4;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WysiwygViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_contextmenu__ = __webpack_require__("../../../../ngx-contextmenu/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node__ = __webpack_require__("../../../../../src/app/models/node.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__ = __webpack_require__("../../../../../src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_dom__ = __webpack_require__("../../../../../src/app/models/dom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_converters__ = __webpack_require__("../../../../../src/utils/converters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_editor_views_wysiwyg_view_wysiwyg_handler__ = __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_configs_clipboardConfigs__ = __webpack_require__("../../../../../src/app/models/configs/clipboardConfigs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_models_configs_statesConfigs__ = __webpack_require__("../../../../../src/app/models/configs/statesConfigs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var WysiwygViewComponent = (function () {
    function WysiwygViewComponent(_editorService, contextMenuService, _elementRef, _notification, cdr, http) {
        this._editorService = _editorService;
        this.contextMenuService = contextMenuService;
        this._elementRef = _elementRef;
        this._notification = _notification;
        this.cdr = cdr;
        this.http = http;
        this.selectNode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enableHover = null;
        this.reload = false;
        this.contextMenuActions = [];
    }
    /************************************** Life Cycle **************************************/
    WysiwygViewComponent.prototype.ngOnInit = function () {
        this.stateConfigs = new __WEBPACK_IMPORTED_MODULE_12__app_models_configs_statesConfigs__["a" /* StateConfigs */]();
        this._editorService.setLoading(true);
        this.config();
    };
    WysiwygViewComponent.prototype.ngAfterViewChecked = function () {
        if (this.reload) {
            this.reloadView();
            // TODO fix event
            var xedit = this.xedit.nativeElement;
            var links = xedit.getElementsByTagName('a');
            if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(links)) {
                for (var i = 0; i < links.length; i++) {
                    links[i].onclick = function (evt) {
                        evt.preventDefault();
                        return false;
                    };
                }
            }
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(this.enableHover) && !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(this.stateConfigs.isActive())) {
            this.enableHover = !this.stateConfigs.isActive() && this.stateConfigs.getConfigs('hover').enable;
            this.reload = true;
        }
    };
    WysiwygViewComponent.prototype.ngOnDestroy = function () {
        this.subscribeFile.unsubscribe();
        this.subscribeCN.unsubscribe();
        this.subscribeCNM.unsubscribe();
        this._editorService.setCurrentNode(null);
        this._editorService.setCurrentNodeModify(null);
        __WEBPACK_IMPORTED_MODULE_8__components_editor_views_wysiwyg_view_wysiwyg_handler__["a" /* WysiwygHandler */].clearTinymce();
    };
    /************************************** Private Methods **************************************/
    /**
     * Config component
     */
    WysiwygViewComponent.prototype.config = function () {
        var _this = this;
        // Suscribe to file changes
        this.subscribeFile = this._editorService.getFile().subscribe(function (file) {
            _this.cssLinks = file.getCss();
            _this.jsLinks = file.getJs();
            // Parse content to html
            _this.renderContent = _this.parseContentToWysiwygEditor(file.getState().getContent());
            __WEBPACK_IMPORTED_MODULE_8__components_editor_views_wysiwyg_view_wysiwyg_handler__["a" /* WysiwygHandler */].clearTinymce();
            _this._editorService.setLoading(false);
        });
        // Suscribe to node change
        this.subscribeCNM = this._editorService.getCurrentNodeModify().subscribe(function (currentNode) {
            var element = _this.xedit.nativeElement.querySelector('[' + __WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID + '="' + currentNode.getUuid() + '"]');
            Object.keys(currentNode.getAttributes()).forEach(function (attribute) {
                element.setAttribute(attribute, currentNode.getAttribute(attribute));
            });
        });
        this.subscribeCN = this._editorService.getCurrentNode().subscribe(function (currentNode) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(currentNode) && (Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(_this.currentNode) ||
                !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["d" /* equals */])(currentNode.getAttribute(__WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID), _this.currentNode.getUuid()))) {
                _this.setSelection(currentNode);
            }
        });
        this._editorService.getElementsState().subscribe(function (elementState) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(_this.stateConfigs.isActive())) {
                _this.enableHover = elementState && _this.stateConfigs.getConfigs('hover').enable;
                _this.reload = true;
            }
        });
    };
    WysiwygViewComponent.prototype.reloadView = function () {
        this.reload = false;
        var file = this._editorService.getFileStateValue();
        this.renderContent = this.parseContentToWysiwygEditor(file.getState().getContent());
        this.cdr.detectChanges();
        __WEBPACK_IMPORTED_MODULE_8__components_editor_views_wysiwyg_view_wysiwyg_handler__["a" /* WysiwygHandler */].clearTinymce();
    };
    /**
    * Transform json content to html with xedit root tag
    *
    * @param content
    */
    WysiwygViewComponent.prototype.parseContentToWysiwygEditor = function (content) {
        var _this = this;
        var renderContent = '';
        Object.keys(content).forEach(function (property) {
            var data = Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["i" /* is */])(String, content[property].content) ?
                __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].html2json(content[property].content) : content[property].content;
            renderContent += _this.parseContentToWysiwygEditorWrapper(property, content[property].editable, __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].json2html(data, true, true, false, _this.enableHover));
        });
        return renderContent;
    };
    WysiwygViewComponent.prototype.parseContentToWysiwygEditorWrapper = function (property, editable, content) {
        var START_TAG = editable ? __WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_EDITOR + ' ' + __WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID + '="' + property + '"' :
            'div class="no-editable"';
        var END_TAG = editable ? __WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_EDITOR : 'div';
        return '<' + START_TAG + '>' + content + '</' + END_TAG + '>';
    };
    WysiwygViewComponent.prototype.clearAttributes = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(this.currentNode)) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(this.currentNode.getSection())) {
                this.currentNode.getSection().removeAttribute(__WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTR_SELECTED);
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(this.currentNode.getTarget())) {
                var element = document.querySelector("[xe_uuid=\"" + this.currentNode.getTarget().getAttribute(__WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID) + "\"]");
                if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(element)) {
                    element.removeAttribute(__WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTR_WYSIWYG_SELECTED);
                }
            }
        }
    };
    WysiwygViewComponent.prototype.addHttp = function (resource) {
        if (!(/^(f|ht)tps?:\/\//i).test(resource)) {
            resource = "" + __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].getResourceUrl() + resource;
        }
        return resource;
    };
    /************************************** Public Methods **************************************/
    WysiwygViewComponent.prototype.onclick = function (evt) {
        this.changeSelection(evt.target.getAttribute(__WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID));
    };
    WysiwygViewComponent.prototype.changeSelection = function (elementKey) {
        this.selectNode.emit(elementKey);
    };
    WysiwygViewComponent.prototype.setSelection = function (currentNode) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(this.currentNode)) {
            this.clearAttributes();
        }
        this.currentNode = currentNode;
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(currentNode.getSchema())) {
            // Add selected class
            var name_1 = __WEBPACK_IMPORTED_MODULE_3__models_node__["a" /* Node */].getSectionLang(this.currentNode.getSchema(), __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].getLang());
            this.currentNode.getSection().setAttribute(__WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTR_SELECTED, name_1);
            // Add selected class
            this.currentNode.getTarget().setAttribute(__WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTR_WYSIWYG_SELECTED, this.currentNode.getTarget().nodeName);
            if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(this.currentNode.getSection())) {
                this.applyHandler(this.currentNode);
            }
        }
    };
    WysiwygViewComponent.prototype.applyHandler = function (currentNode) {
        var sectionType = currentNode.getSchema().type;
        var clipboardConfigs = new __WEBPACK_IMPORTED_MODULE_10__models_configs_clipboardConfigs__["a" /* ClipboardConfigs */]();
        var args = { node: currentNode, service: this._editorService, clipboardConfigs: clipboardConfigs, http: this.http };
        __WEBPACK_IMPORTED_MODULE_8__components_editor_views_wysiwyg_view_wysiwyg_handler__["a" /* WysiwygHandler */].executeHandler(sectionType, args);
    };
    WysiwygViewComponent.prototype.onContextMenu = function ($event, item) {
        var _this = this;
        var node = this._editorService.parseToNode($event.target);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(node) && !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(node.getSchema())) {
            this.updateContextMenuActions(node);
            setTimeout(function () {
                _this.contextMenuService.show.next({
                    contextMenu: _this.basicMenu,
                    event: $event,
                    item: item,
                });
            }, 50);
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    WysiwygViewComponent.prototype.updateContextMenuActions = function (node) {
        var _this = this;
        var actions = this.getAvailableActions(node);
        var contextMenuActions = [];
        var contextMenuActionsChild = [];
        var contextMenuActionsSiblings = [];
        // TAG
        contextMenuActions.push(this.createAction(function (i) { return actions.name; }, null, true, false, function (i) { return false; }));
        contextMenuActions.push(this.createAction(null, null, true, true));
        var clickFunc = function (currentNode, afterNode, strTemplate, child) {
            if (child === void 0) { child = false; }
            var nodeTemplate = __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].html2json(strTemplate, false);
            __WEBPACK_IMPORTED_MODULE_5__models_dom__["a" /* DOM */].element(currentNode).insertNode(__WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].json2html(__WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].addWrapJson(nodeTemplate), true, true, false, _this.enableHover), afterNode, true);
            _this._editorService.addNodeToArea(node, nodeTemplate, child);
        };
        // Childs
        actions.children.forEach(function (action) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* hasIn */])('template' in action) && !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(action.template)) {
                contextMenuActionsChild.push(_this.createAction(function (i) { return 'Añadir hijo ' + action.name; }, function (evt) { return clickFunc(node.getSection(), node.getSection().childNodes[node.getSection().childNodes.length], action.template, true); }, true));
            }
        });
        // Siblings
        actions.siblings.forEach(function (action) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* hasIn */])('template' in action) && !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(action.template)) {
                contextMenuActionsSiblings.push(_this.createAction(function (i) { return 'Añadir hermano ' + action.name; }, function (evt) { return clickFunc(node.getSection().parentNode, node.getSection().nextSibling, action.template); }, true));
            }
        });
        contextMenuActions = Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["p" /* union */])(contextMenuActions, contextMenuActionsChild);
        // Divider
        if (contextMenuActionsChild.length > 0 && contextMenuActionsSiblings.length > 0) {
            contextMenuActions.push(this.createAction(null, null, true, true));
        }
        contextMenuActions = Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["p" /* union */])(contextMenuActions, contextMenuActionsSiblings);
        contextMenuActions.push(this.createAction(null, null, true, true));
        contextMenuActions = Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["p" /* union */])(contextMenuActions, this.defaultActions(node));
        this.contextMenuActions = contextMenuActions;
    };
    WysiwygViewComponent.prototype.defaultActions = function (node) {
        var _this = this;
        var actions = [];
        actions.push(this.createAction(null, null, true, true));
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(this.copyAction) && !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(node)) {
            // Coger node del json --> Cambiar todos los uid del padre e hijos
            actions.push(this.createAction(function (i) { return 'Paste component'; }, function (evt) {
                var sectionNode = new __WEBPACK_IMPORTED_MODULE_3__models_node__["a" /* Node */](_this.copyAction.getAttribute(__WEBPACK_IMPORTED_MODULE_4__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID), _this.copyAction);
                if (__WEBPACK_IMPORTED_MODULE_6__services_editor_service_editor_service__["a" /* EditorService */].isInsertedNodeValid(node, sectionNode)) {
                    var template = _this._editorService.getJsonNodesByPath(sectionNode);
                    template = __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].json2html(template, true, true, true, _this.enableHover);
                    __WEBPACK_IMPORTED_MODULE_5__models_dom__["a" /* DOM */].element(node.getSection())
                        .insertNode(template, sectionNode.getTarget().childNodes[sectionNode.getTarget().childNodes.length], true);
                    _this._editorService.addNodeToArea(node, __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].html2json(template, false), true);
                    _this._notification.info('Componente insertado', 'El componente ha sido pegado con éxito.', __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].NOTIFICATION_DEFAULT_SETTINGS);
                }
                else {
                    _this._notification.error('Estructura inválida', 'El componente pegado no es soportado.', __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].NOTIFICATION_DEFAULT_SETTINGS);
                }
            }, true));
        }
        actions.push(this.createAction(function (i) { return 'Copy component'; }, function (evt) {
            _this.copyAction = null;
            _this.copyAction = node.getSection();
        }, true));
        actions.push(this.createAction(function (i) { return 'Delete component'; }, function (evt) {
            _this._editorService.removeNode(node);
            __WEBPACK_IMPORTED_MODULE_5__models_dom__["a" /* DOM */].element(node.getSection()).deleteNode();
        }, true));
        return actions;
    };
    // Todo create Action Model
    WysiwygViewComponent.prototype.createAction = function (html, click, visible, divider, enabled) {
        if (divider === void 0) { divider = false; }
        if (enabled === void 0) { enabled = function (item) { return true; }; }
        return {
            html: html,
            click: click,
            enabled: enabled,
            divider: divider,
            visible: visible,
        };
    };
    WysiwygViewComponent.prototype.getAvailableActions = function (node) {
        var actions = {
            name: null,
            children: [],
            siblings: [],
            others: []
        };
        actions.name = __WEBPACK_IMPORTED_MODULE_3__models_node__["a" /* Node */].getSectionLang(node.getSchema(), __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].getLang());
        // Get childs
        if (Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* hasIn */])('actions', node.getSchema()) && !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(node.getSchema().actions)) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* hasIn */])('children', node.getSchema().actions)) {
                var children = node.getSchema().actions.children;
                children.map(function (child) {
                    var schema = node.getSchemaNode()[child];
                    if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(schema)) {
                        actions.children.push({
                            name: __WEBPACK_IMPORTED_MODULE_3__models_node__["a" /* Node */].getSectionLang(schema, __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].getLang()),
                            template: __WEBPACK_IMPORTED_MODULE_3__models_node__["a" /* Node */].getSectionTemplate(schema)
                        });
                    }
                });
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* hasIn */])('siblings', node.getSchema().actions)) {
                var siblings = node.getSchema().actions.siblings;
                siblings.map(function (sibling) {
                    var schema = node.getSchemaNode()[sibling];
                    if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(schema)) {
                        actions.siblings.push({
                            name: __WEBPACK_IMPORTED_MODULE_3__models_node__["a" /* Node */].getSectionLang(schema, __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].getLang()),
                            template: __WEBPACK_IMPORTED_MODULE_3__models_node__["a" /* Node */].getSectionTemplate(schema)
                        });
                    }
                });
            }
        }
        actions.others.push({
            name: 'Borrar',
            template: null
        });
        return actions;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('xedit'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WysiwygViewComponent.prototype, "xedit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], WysiwygViewComponent.prototype, "selectNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myContextMenu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_contextmenu__["a" /* ContextMenuComponent */])
    ], WysiwygViewComponent.prototype, "basicMenu", void 0);
    WysiwygViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wysiwyg-view',
            template: __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_editor_service_editor_service__["a" /* EditorService */], __WEBPACK_IMPORTED_MODULE_1_ngx_contextmenu__["c" /* ContextMenuService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_9_angular2_notifications__["NotificationsService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */]])
    ], WysiwygViewComponent);
    return WysiwygViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/taskbar/properties-global-view/properties-global-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <header>Metadatos</header>\n    <main>\n        <ng-container *ngFor=\"let meta of metas\" [ngSwitch]=\"meta.type\">\n            <ng-container *ngSwitchCase=\"'string'\">\n                <app-multi-input [data]=\"createMetaObject(meta)\" (changeValue)=\"changeMetadata($event.new[meta.name], meta.name)\"></app-multi-input>\n            </ng-container>\n            <ng-container *ngSwitchDefault [ngSwitch]=\"meta.type\">\n                <strong>{{meta.name}}</strong> :\n                <app-listbox *ngSwitchCase=\"'enum'\" [placeholder]=\"meta.name\" [selected]=\"meta.value\" [options]=\"meta.options\" (changeValue)=\"changeMetadata($event, meta.name)\"></app-listbox>\n                <time *ngSwitchCase=\"'date'\" #date xe_section=\"date\" datetime=\"0000-00-00\" (click)=\"applyHandler($event, meta, this)\">{{ (meta.value === '') ? dateNow() : meta.value }}</time>\n                <p *ngSwitchCase=\"'image'\" (click)=\"applyHandler($event, meta, this)\" style=\"display: inline-block;\">\n                    <img style=\"max-height: 50px; min-height: 50px;\" src=\"{{ baseUrl }}{{ meta.value }}\" alt=\"select image\">\n                </p>\n                <ng-container *ngSwitchDefault>\n                    {{meta.value}}\n                </ng-container>\n                <br/>\n            </ng-container>\n        </ng-container>\n    </main>\n</div>\n<div>\n    <header>Estados</header>\n    <main>\n        <ng-container *ngFor=\"let value of states\">\n            <p (click)=\"restoreSnaptshot(value.key)\">{{ value.message }}</p>\n        </ng-container>\n    </main>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/taskbar/properties-global-view/properties-global-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #edeff2; }\n  :host > div {\n    padding: 0; }\n    :host > div > header {\n      position: relative;\n      z-index: 5;\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important; }\n    :host > div > main {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/taskbar/properties-global-view/properties-global-view.component.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/_mixins.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,6BAAsB;EAAtB,8BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB;EACtB,0BFgBiB,EEepB;EAnCD;IAOQ,WAAU,EA2Bb;IAlCL;MAUY,mBAAkB;MAClB,WAAU;MACV,UAAS;MACT,qCFmBoB;MElBpB,gBFoBU;MEnBV,0BAAyB;MACzB,iBAAgB;MAChB,2BAA0B;MAC1B,eFDU;MEEV,0BFAQ;MGRhB,2DAHyC,EDapC;IArBT;MA0BY,qCFMoB;MELpB,0BFPS;MEQT,mBAAkB;MAClB,kBALmB;MAMnB,WAAU;MACV,6BAA4B;MAC5B,qBAAoB,EACvB","file":"properties-global-view.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n    background-color: $white-light;\n\n    > div {\n        padding: 0;\n        \n        > header {\n            position: relative;\n            z-index: 5;\n            margin: 0;\n            font: $font-default;\n            font-size: $font-size-small;\n            text-transform: uppercase;\n            text-align: left;\n            padding: 3px 10px 1px 10px;\n            color: $white-darker;\n            background-color: $white-warm;\n            @include box-shadow(bottom, 0.25, true);\n        }\n\n        > main {\n            $margin-sides: 10px;\n\n            font: $font-default;\n            background-color: $white-light;\n            position: relative;\n            padding: 5px $margin-sides;\n            z-index: 2;\n            box-shadow: unset !important;\n            border: 0 !important;\n        }\n    }\n}","@mixin box-shadow ($pos, $opacity, $important: false) {\n    $_pos: 0px 0px 3px 0px ;\n    @if($pos == top){\n        $_pos: 0px 3px 11px 0px ;\n    }@else if($pos == left) {\n        $_pos: -2px 0px 11px -4px;\n    }\n\n    $rgb: rgba(0,0,0,$opacity);\n    @if($important == true){        \n        $rgb: rgba(0,0,0,$opacity) !important;\n    }\n\n    box-shadow: $_pos $rgb;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/taskbar/properties-global-view/properties-global-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesGlobalViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_components_editor_views_wysiwyg_view_wysiwyg_handler__ = __webpack_require__("../../../../../src/app/components/editor/views/wysiwyg-view/wysiwyg-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dateformat__ = __webpack_require__("../../../../dateformat/lib/dateformat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dateformat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_dateformat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_api__ = __webpack_require__("../../../../../src/app/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PropertiesGlobalViewComponent = (function () {
    function PropertiesGlobalViewComponent(_editorService, http) {
        this._editorService = _editorService;
        this.http = http;
    }
    PropertiesGlobalViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metas = [];
        this.states = [];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_7__app_xedit__["a" /* Xedit */].getResourceUrl();
        this.suscribeFile = this._editorService.getFile().subscribe(function (file) {
            _this.metas = [];
            _this.file = file;
            if (file != null) {
                var metas = file.getMetas();
                for (var meta in metas) {
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(file.getMeta(meta))) {
                        var json = {};
                        _this.metas.push(file.getMeta(meta));
                    }
                }
            }
        });
        this.suscribeFile = this._editorService
            .getFileState()
            .subscribe(function (file) {
            _this.states = [];
            if (file != null) {
                _this.states = file.getSnapshots();
            }
        });
    };
    PropertiesGlobalViewComponent.prototype.changeMetadata = function (value, key) {
        var metas = this.file.getMetas();
        for (var meta in metas) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('name', metas[meta]) &&
                metas[meta]['name'] == key &&
                Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('value', metas[meta])) {
                metas[meta]['value'] = value;
            }
        }
        this.file.setMetas(metas);
    };
    PropertiesGlobalViewComponent.prototype.createMetaObject = function (meta) {
        var json = {};
        json[meta['name']] = meta['value'];
        return json;
    };
    PropertiesGlobalViewComponent.prototype.restoreSnaptshot = function (key) {
        this._editorService.recoverySnapshot(key);
    };
    PropertiesGlobalViewComponent.prototype.ngOnDestroy = function () {
        this.suscribeFile.unsubscribe();
    };
    PropertiesGlobalViewComponent.prototype.applyHandler = function (evt, meta) {
        var _this = this;
        var element = evt.target;
        if (meta['type'] === 'date') {
            var args = {
                element: element,
                callback: function (value) {
                    _this.changeMetadata(value, meta.name);
                },
            };
            __WEBPACK_IMPORTED_MODULE_3__app_components_editor_views_wysiwyg_view_wysiwyg_handler__["a" /* WysiwygHandler */].executeHandler(meta['type'], args);
        }
        else if (meta['type'] === 'image') {
            this.openTree(evt, 'image', function (_a) {
                var nodeid = _a.nodeid;
                element['src'] = "" + _this.baseUrl + nodeid;
                _this.changeMetadata(nodeid, meta.name);
            });
        }
    };
    PropertiesGlobalViewComponent.prototype.dateNow = function () {
        var now = new Date();
        return __WEBPACK_IMPORTED_MODULE_4_dateformat___default()(now, 'dd-mm-yyyy');
    };
    PropertiesGlobalViewComponent.prototype.openTree = function (evt, type, callback) {
        var _this = this;
        window['treeModal']
            .openModal('modal-1', type)
            .then(function (selectedId) {
            __WEBPACK_IMPORTED_MODULE_5__app_api__["a" /* Api */].getInfoNode(_this.http, selectedId, type, callback, null, null);
        })
            .catch(function (err) { return console.log(err); });
    };
    PropertiesGlobalViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-properties-global',
            template: __webpack_require__("../../../../../src/app/components/taskbar/properties-global-view/properties-global-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/taskbar/properties-global-view/properties-global-view.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_editor_service_editor_service__["a" /* EditorService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], PropertiesGlobalViewComponent);
    return PropertiesGlobalViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/taskbar/state-controller/state-controller.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <header>Estado de elementos</header>\n    <main>\n        <ng-container *ngFor=\"let value of configs; let i = index;\">\n            <app-checkbox [placeholder]=\"value.name\" [checked]=\"value.enable\" (changeValue)=\"updateStates($event, value)\"></app-checkbox>\n        </ng-container>\n    </main>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/taskbar/state-controller/state-controller.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #edeff2; }\n  :host > div {\n    padding: 0; }\n    :host > div > header {\n      position: relative;\n      z-index: 5;\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important; }\n    :host > div > main {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/taskbar/state-controller/state-controller.component.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/_mixins.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,6BAAsB;EAAtB,8BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB;EACtB,0BFgBiB,EEcpB;EAlCD;IAMQ,WAAU,EA2Bb;IAjCL;MASY,mBAAkB;MAClB,WAAU;MACV,UAAS;MACT,qCFoBoB;MEnBpB,gBFqBU;MEpBV,0BAAyB;MACzB,iBAAgB;MAChB,2BAA0B;MAC1B,eFAU;MECV,0BFCQ;MGRhB,2DAHyC,EDYpC;IApBT;MAyBY,qCFOoB;MENpB,0BFNS;MEOT,mBAAkB;MAClB,kBALmB;MAMnB,WAAU;MACV,6BAA4B;MAC5B,qBAAoB,EACvB","file":"state-controller.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n    background-color: $white-light;\n    > div {\n        padding: 0;\n        \n        > header {\n            position: relative;\n            z-index: 5;\n            margin: 0;\n            font: $font-default;\n            font-size: $font-size-small;\n            text-transform: uppercase;\n            text-align: left;\n            padding: 3px 10px 1px 10px;\n            color: $white-darker;\n            background-color: $white-warm;\n            @include box-shadow(bottom, 0.25, true);\n        }\n\n        > main {\n            $margin-sides: 10px;\n\n            font: $font-default;\n            background-color: $white-light;\n            position: relative;\n            padding: 5px $margin-sides;\n            z-index: 2;\n            box-shadow: unset !important;\n            border: 0 !important;\n        }\n    }\n}","@mixin box-shadow ($pos, $opacity, $important: false) {\n    $_pos: 0px 0px 3px 0px ;\n    @if($pos == top){\n        $_pos: 0px 3px 11px 0px ;\n    }@else if($pos == left) {\n        $_pos: -2px 0px 11px -4px;\n    }\n\n    $rgb: rgba(0,0,0,$opacity);\n    @if($important == true){        \n        $rgb: rgba(0,0,0,$opacity) !important;\n    }\n\n    box-shadow: $_pos $rgb;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/taskbar/state-controller/state-controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateControllerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateControllerComponent = (function () {
    function StateControllerComponent() {
        this.updated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StateControllerComponent.prototype.ngOnInit = function () {
    };
    StateControllerComponent.prototype.updateStates = function (evt, object) {
        object.enable = evt;
        this.updateStateConfigs();
    };
    StateControllerComponent.prototype.updateStateConfigs = function () {
        this.updated.emit(this.configs);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('configs'),
        __metadata("design:type", Array)
    ], StateControllerComponent.prototype, "configs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], StateControllerComponent.prototype, "updated", void 0);
    StateControllerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-state-controller',
            template: __webpack_require__("../../../../../src/app/components/taskbar/state-controller/state-controller.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/taskbar/state-controller/state-controller.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StateControllerComponent);
    return StateControllerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/taskbar/taskbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header (clickOutside)=\"closeAttributes($event)\">\n    <div>\n        <nav id=\"xedit-taskbar\" class=\"taskbar\">\n            <ul>\n                <li (click)=\"save()\">\n                    <i class=\"fas fa-save\"></i>\n                </li>\n                <li class=\"separator\"></li>\n                <li (click)=\"undo()\" [ngClass]=\"{disabled: !previousAvailable()}\">\n                    <i class=\"fas fa-undo\"></i>\n                </li>\n                <li (click)=\"redo()\" [ngClass]=\"{disabled: !nextAvailable()}\">\n                    <i class=\"fas fa-redo\"></i>\n                </li>\n            </ul>\n        </nav>\n        <aside class=\"title\">\n            <h2 (click)=\"toggleAttributes($event)\" id=\"xe-task-title\">\n                {{ title }}\n                <i class=\"fas fa-caret-down\"></i>\n            </h2>\n        </aside>\n        <nav class=\"views\">\n            <ul class=\"actions\">\n                <li class=\"option-button\">\n                    <i [ngClass]=\"{'fas': true, 'fa-eye': stateActive === false, 'fa-eye-slash': stateActive === true}\" (click)=\"toggleElementState($event)\"></i>\n                    <aside (click)=\"openStates($event)\">\n                        <i class=\"fas fa-caret-down\"></i>\n                    </aside>\n                    <div class=\"action-panel\" *ngIf=\"toogleStateConfigs\" (click)=\"$event.stopPropagation()\" (clickOutside)=\"closeStates()\">\n                        <app-state-controller [(configs)]=\"configs\" (updated)=\"saveStateConfigs($event)\"></app-state-controller>\n                    </div>\n                </li>\n                <li class=\"separator\"></li>\n            </ul>\n            <ul *ngIf=\"hasMultiViews()\">\n                <li (click)=\"showComponent(view)\" *ngFor=\"let view of availableViews\" [ngClass]=\"{selected: currentView === view, tabs: true}\">\n                    {{ view == 'wysiwyg' ? 'Visual' : 'Texto' }}\n                </li>\n            </ul>\n        </nav>\n    </div>\n    <div id=\"attributes\" *ngIf=\"displayToggle\" [@toggleAtributes]>\n        <app-properties-global></app-properties-global>\n    </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/taskbar/taskbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  display: block;\n  position: relative;\n  z-index: 1000; }\n  :host > header {\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n    :host > header > div {\n      background-color: #3a9e8f;\n      position: relative;\n      font: normal 14px \"Lato\", sans-serif;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.57);\n      z-index: 6; }\n      :host > header > div > .title {\n        -webkit-box-flex: 2;\n            -ms-flex-positive: 2;\n                flex-grow: 2;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        :host > header > div > .title > h2 {\n          text-align: center;\n          font: normal 14px \"Lato\", sans-serif;\n          font-size: 16px;\n          color: #e1e4e6;\n          margin: auto;\n          padding: 0;\n          cursor: pointer;\n          transition: color 0.3s ease-in-out; }\n          :host > header > div > .title > h2 > i {\n            -webkit-transform: rotate(0);\n                    transform: rotate(0);\n            color: inherit;\n            padding: 0 5px; }\n          :host > header > div > .title > h2:hover {\n            color: #edeff2; }\n          :host > header > div > .title > h2.disabled {\n            cursor: not-allowed;\n            color: #44c4b1; }\n          :host > header > div > .title > h2.selected {\n            color: #edeff2; }\n            :host > header > div > .title > h2.selected > i {\n              -webkit-transform: rotate(180deg);\n                      transform: rotate(180deg); }\n      :host > header > div > nav {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        padding: 0;\n        margin: 0;\n        max-width: 30%;\n        min-width: 30%;\n        min-height: 46px;\n        max-height: 46px; }\n        :host > header > div > nav.views {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n          :host > header > div > nav.views > ul {\n            -webkit-box-pack: end;\n                -ms-flex-pack: end;\n                    justify-content: flex-end;\n            -webkit-box-flex: 0;\n                -ms-flex-positive: 0;\n                    flex-grow: 0; }\n            :host > header > div > nav.views > ul.actions {\n              -webkit-box-flex: 2;\n                  -ms-flex-positive: 2;\n                      flex-grow: 2; }\n        :host > header > div > nav > ul {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          padding: 0;\n          margin: 0;\n          list-style: none;\n          height: 46px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          padding: 0 5px; }\n          :host > header > div > nav > ul > li {\n            margin: auto 5px auto 0;\n            padding: 5px 10px;\n            color: #e1e4e6;\n            transition: color 0.3s ease-in-out;\n            cursor: pointer; }\n            :host > header > div > nav > ul > li.tabs {\n              height: 46px;\n              line-height: 40px;\n              text-transform: uppercase;\n              border-bottom: 2px solid transparent;\n              transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out; }\n            :host > header > div > nav > ul > li > i {\n              font-size: 18px; }\n            :host > header > div > nav > ul > li.option-button {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              position: relative; }\n              :host > header > div > nav > ul > li.option-button > aside {\n                margin-left: 5px;\n                padding: 0 2px;\n                -webkit-box-flex: 1;\n                    -ms-flex-positive: 1;\n                        flex-grow: 1;\n                background-color: transparent;\n                transition: background-color 0.3s ease-in-out; }\n                :host > header > div > nav > ul > li.option-button > aside:hover {\n                  background-color: #e1e4e6; }\n              :host > header > div > nav > ul > li.option-button > .action-panel {\n                position: absolute;\n                top: 41px;\n                right: 0;\n                width: 240px;\n                min-width: 220px;\n                width: 100%;\n                background-color: #e1e4e6;\n                box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5); }\n            :host > header > div > nav > ul > li.separator {\n              padding: 0;\n              height: 30px;\n              width: 1px;\n              margin: auto 0;\n              background-color: #44c4b1; }\n            :host > header > div > nav > ul > li:hover {\n              color: #edeff2; }\n            :host > header > div > nav > ul > li.disabled {\n              cursor: not-allowed;\n              color: #44c4b1; }\n            :host > header > div > nav > ul > li.selected {\n              border-bottom-color: #edeff2;\n              color: #edeff2; }\n    :host > header > #attributes {\n      margin: 15px 50% auto;\n      position: absolute;\n      top: 100%;\n      left: auto;\n      bottom: auto;\n      right: auto;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      max-width: 600px;\n      min-width: 220px;\n      width: 100%;\n      z-index: -1;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5); }\n  :host.embebed > header > div {\n    background-color: #f9f9f9; }\n    :host.embebed > header > div > .title > h2 {\n      color: #959595; }\n      :host.embebed > header > div > .title > h2:hover {\n        color: #5f6362; }\n      :host.embebed > header > div > .title > h2.disabled {\n        color: #c4c2c2; }\n      :host.embebed > header > div > .title > h2.selected {\n        color: #5f6362; }\n    :host.embebed > header > div > nav > ul > li {\n      color: #959595; }\n      :host.embebed > header > div > nav > ul > li.separator {\n        background-color: #c4c2c2; }\n      :host.embebed > header > div > nav > ul > li:hover {\n        color: #5f6362; }\n      :host.embebed > header > div > nav > ul > li.disabled {\n        color: #c4c2c2; }\n      :host.embebed > header > div > nav > ul > li.selected {\n        border-bottom-color: #5f6362;\n        color: #5f6362; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/components/taskbar/taskbar.component.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/_mixins.scss"],"names":[],"mappings":"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","file":"taskbar.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host{\n    display: block;\n    position: relative;\n    z-index: 1000;\n\n    > header {\n        position: relative;\n        user-select: none;\n\n        > div{\n            background-color: $green-dark;\n            position: relative;\n            font: $font-default;\n            display: flex;\n            @include box-shadow(bottom, 0.57);\n            z-index: 6;\n\n            > .title {\n                flex-grow: 2;\n                display: flex;\n                > h2 {\n                    text-align: center;\n                    font: $font-default;\n                    font-size: $font-size-big;\n                    color: $white-warm;\n                    margin: auto;\n                    padding: 0;\n                    cursor: pointer;\n                    transition: color 0.3s ease-in-out;\n\n                    > i {\n                        transform: rotate(0);\n                        color: inherit;\n                        padding: 0 5px;\n                    }\n\n                    &:hover {\n                        color: $white-light;\n                    }\n\n                    &.disabled{\n                        cursor: not-allowed;\n                        color: $green-light;\n                    }\n\n                    &.selected {\n                        color: $white-light;\n\n                        > i {\n                            transform: rotate(180deg);\n                        }\n                    }\n                }\n            }\n\n            > nav{\n                flex-grow: 1;\n                padding: 0;\n                margin: 0;\n                max-width: 30%;\n                min-width: 30%;\n                min-height: $taskbar-height;\n                max-height: $taskbar-height;\n\n                &.views {\n                    display: flex;\n\n                    > ul {\n                        justify-content: flex-end;\n                        flex-grow: 0;\n\n                        &.actions {\n                            flex-grow: 2;\n                        }\n                    }\n                }\n\n                > ul{\n                    flex-grow: 1;\n                    padding: 0;\n                    margin: 0;\n                    list-style: none;\n                    height: $taskbar-height;\n                    display: flex;\n                    flex-direction: row;\n                    align-items: center;\n                    padding: 0 5px;\n\n                    > li{\n                        margin: auto 5px auto 0;\n                        padding: 5px 10px;\n                        color: $white-warm;\n                        transition: color 0.3s ease-in-out;\n                        cursor: pointer;\n\n                        &.tabs {\n                            height: $taskbar-height;\n                            line-height: $taskbar-line-height;\n                            text-transform: uppercase;\n                            border-bottom: 2px solid transparent;\n                            transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n                        }\n\n                        > i{\n                            font-size: $icon-size-default;\n                        }\n\n                        &.option-button {\n                            display: flex;\n                            flex-direction: row;\n                            position: relative;\n\n                            >aside {\n                                margin-left: 5px;\n                                padding: 0 2px;\n                                flex-grow: 1;\n                                background-color: transparent;\n                                transition: background-color 0.3s ease-in-out;\n\n                                &:hover {\n                                    background-color: $white-warm;\n                                }\n                            }\n\n                            > .action-panel {\n                                position: absolute;\n                                top: $taskbar-height - 5px;\n                                right: 0;\n                                width: 240px;\n                                min-width: 220px;\n                                width: 100%;\n                                background-color: $white-warm;\n                    \n                                @include box-shadow(bottom, 0.5);\n                            }\n                        }\n\n                        &.separator {\n                            padding: 0;\n                            height: $taskbar-height - 16px;\n                            width: 1px;\n                            margin: auto 0;\n                            background-color: $green-light;\n                        }\n\n                        &:hover{\n                            color: $white-light;\n                        }\n\n                        &.disabled{\n                            cursor: not-allowed;\n                            color: $green-light;\n                        }\n\n                        &.selected {\n                            border-bottom-color: $white-light;\n                            color: $white-light;\n                        }\n                    } \n                }\n            }\n        }\n\n        > #attributes {\n            margin: 15px 50% auto;\n            position: absolute;\n            top: 100%;\n            left: auto;\n            bottom: auto;\n            right: auto;\n            transform: translateX(-50%);\n            max-width: 600px;\n            min-width: 220px;\n            width: 100%;\n            z-index: -1;\n            @include box-shadow(bottom, 0.5);\n        }\n    }\n\n    &.embebed {\n        > header {\n            > div{\n                background-color: $white-ximdex;\n\n                > .title {\n                    > h2 {\n                        color: $white-darker;\n\n                        &:hover{\n                            color: $black-light;\n                        }\n\n                        &.disabled{\n                            color: $white-dark;\n                        }\n\n                        &.selected {\n                            color: $black-light;\n                        }\n                    }\n                }\n\n                > nav {\n                    >ul {\n                        > li {\n                            color: $white-darker;\n\n                            &.separator {\n                                background-color: $white-dark;\n                            }\n\n                            &:hover{\n                                color: $black-light;\n                            }\n\n                            &.disabled{\n                                color: $white-dark;\n                            }\n        \n                            &.selected {\n                                border-bottom-color: $black-light;\n                                color: $black-light;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}","@mixin box-shadow ($pos, $opacity, $important: false) {\n    $_pos: 0px 0px 3px 0px ;\n    @if($pos == top){\n        $_pos: 0px 3px 11px 0px ;\n    }@else if($pos == left) {\n        $_pos: -2px 0px 11px -4px;\n    }\n\n    $rgb: rgba(0,0,0,$opacity);\n    @if($important == true){        \n        $rgb: rgba(0,0,0,$opacity) !important;\n    }\n\n    box-shadow: $_pos $rgb;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/taskbar/taskbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dom__ = __webpack_require__("../../../../../src/app/models/dom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_state_service_state_service__ = __webpack_require__("../../../../../src/app/services/state-service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_configs_statesConfigs__ = __webpack_require__("../../../../../src/app/models/configs/statesConfigs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_api__ = __webpack_require__("../../../../../src/app/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TaskbarComponent = (function () {
    function TaskbarComponent(_editorService, _stateService, http, _notification, cdr) {
        this._editorService = _editorService;
        this._stateService = _stateService;
        this.http = http;
        this._notification = _notification;
        this.cdr = cdr;
        this.availableViews = [];
        this.currentView = '';
        this.title = 'Document';
        this.displayToggle = false;
        this.toogleStateConfigs = false;
        this.configs = [];
    }
    /************************************ LIFE CYCLE *******************************************/
    TaskbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateConfigs = new __WEBPACK_IMPORTED_MODULE_8__models_configs_statesConfigs__["a" /* StateConfigs */]();
        this._editorService.getFile().subscribe(function (obsFile) {
            _this.file = obsFile;
            if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(obsFile)) {
                _this.title = obsFile.getName();
            }
        });
        this._stateService
            .getCurrentView()
            .subscribe(function (currentView) { return (_this.currentView = currentView); });
        this._stateService
            .getAvailabelViews()
            .subscribe(function (availableViews) { return (_this.availableViews = availableViews); });
    };
    TaskbarComponent.prototype.ngAfterViewChecked = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(this.stateActive) && !Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(this.stateConfigs.isActive())) {
            this.stateActive = this.stateConfigs.isActive();
            this.cdr.detectChanges();
        }
    };
    /********************************** END LIFE CYCLE *****************************************/
    TaskbarComponent.prototype.undo = function () {
        this._editorService.setLoading(true);
        this._editorService.lastStateFile();
    };
    TaskbarComponent.prototype.redo = function () {
        this._editorService.setLoading(true);
        this._editorService.nextStateFile();
    };
    TaskbarComponent.prototype.showComponent = function (component) {
        this._stateService.setCurrentView(component);
    };
    TaskbarComponent.prototype.hasMultiViews = function () {
        return this.availableViews.length > 1;
    };
    TaskbarComponent.prototype.nextAvailable = function () {
        return this.file != null && this.file.hasNextState();
    };
    TaskbarComponent.prototype.previousAvailable = function () {
        return this.file != null && this.file.hasPreviousState();
    };
    TaskbarComponent.prototype.closeMenu = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(this.viewMenu)) {
            __WEBPACK_IMPORTED_MODULE_3__models_dom__["a" /* DOM */].element(this.viewMenu).removeClass('opened');
        }
    };
    TaskbarComponent.prototype.save = function () {
        var _this = this;
        this._editorService.setLoading(true);
        var error = function () {
            console.error('ERROR SAVE DOCUMENT');
            _this._editorService.setLoading(false);
            _this._notification.error('Error', 'Se ha producido un error al guardar el documento.', __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].NOTIFICATION_DEFAULT_SETTINGS);
        };
        var success = function (result) {
            if (result.status === 0) {
                _this._editorService.setLoading(false);
                _this._notification.success('Guardado', 'El documento ha sido guardado.', __WEBPACK_IMPORTED_MODULE_11__app_xedit__["a" /* Xedit */].NOTIFICATION_DEFAULT_SETTINGS);
            }
            else {
                error();
            }
        };
        __WEBPACK_IMPORTED_MODULE_10__app_api__["a" /* Api */].saveDocument(this.http, this._editorService.getUpdatedDocument(), success, error);
    };
    TaskbarComponent.prototype.load = function () {
        document.getElementById('open_html').value = '';
        document.getElementById('open_html').click();
    };
    TaskbarComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file.type === 'application/json') {
            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = function (fileReaderEvent) {
                var json = JSON.parse(fileReaderEvent.target.result);
                var nodes = json.response;
                _this._editorService.createFile(nodes);
            };
            this._stateService.setAvailableViews(['wysiwyg', 'text']);
            reader.onerror = function (evt) {
                console.error('Error loading file');
            };
        }
    };
    TaskbarComponent.prototype.toggleAttributes = function (event) {
        __WEBPACK_IMPORTED_MODULE_3__models_dom__["a" /* DOM */].element(event.target).toggleClass('selected');
        this.displayToggle = !this.displayToggle;
    };
    TaskbarComponent.prototype.closeAttributes = function (evt) {
        var title = document.getElementById('xe-task-title');
        __WEBPACK_IMPORTED_MODULE_3__models_dom__["a" /* DOM */].element(title).removeClass('selected');
        var element = evt.target;
        if (__WEBPACK_IMPORTED_MODULE_4_jquery___default()(element).parents('app-tree-modal').length === 0) {
            this.displayToggle = false;
        }
    };
    TaskbarComponent.prototype.toggleStates = function (event) {
        this.stateConfigs.getConfigs();
        alert('toggle');
    };
    TaskbarComponent.prototype.openStates = function (event) {
        event.stopPropagation();
        this.toogleStateConfigs = true;
        this.configs = this.stateConfigs.getConfigs();
    };
    TaskbarComponent.prototype.closeStates = function () {
        this.toogleStateConfigs = false;
    };
    TaskbarComponent.prototype.saveStateConfigs = function (evt) {
        this.configs = evt;
        this.stateConfigs.setConfigs(evt);
    };
    TaskbarComponent.prototype.toggleElementState = function () {
        this.stateActive = this.stateConfigs.toggleActive();
        this._editorService.setElementsState(!this.stateActive);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('viewMenu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TaskbarComponent.prototype, "viewMenu", void 0);
    TaskbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-taskbar',
            template: __webpack_require__("../../../../../src/app/components/taskbar/taskbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/taskbar/taskbar.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["trigger"])('toggleAtributes', [
                    Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["transition"])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["style"])({ transform: 'translate(-50%, -100%)', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["animate"])('250ms', Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["style"])({ transform: 'translate(-50%, 0)', opacity: 1 })),
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["style"])({ transform: 'translate(-50%, 0)', opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["animate"])('250ms', Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["style"])({ transform: 'translate(-50%, -100%)', opacity: 0 })),
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_editor_service_editor_service__["a" /* EditorService */],
            __WEBPACK_IMPORTED_MODULE_5__services_state_service_state_service__["a" /* StateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TaskbarComponent);
    return TaskbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/blocks/acordion/acordion.component.html":
/***/ (function(module, exports) {

module.exports = "<collapsible-list-item>\n    <collapsible-header class=\"waves-effect\" [ngClass]=\"{'open': isOpen}\" (click)=\"toggle()\">\n        {{ title }}\n    </collapsible-header>\n    <collapsible-body [class]=\"className\" [expanded]=\"false\">\n        <ng-content></ng-content>\n    </collapsible-body>\n</collapsible-list-item>"

/***/ }),

/***/ "../../../../../src/app/elements/blocks/acordion/acordion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  :host > collapsible-list-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 0 auto 2px 0; }\n    :host > collapsible-list-item > collapsible-header {\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important;\n      position: relative;\n      z-index: 3;\n      min-height: unset;\n      border-bottom: 2px solid transparent;\n      transition: border-bottom-color 0.3s ease-in-out; }\n      :host > collapsible-list-item > collapsible-header:hover {\n        border-bottom-color: #44c4b1; }\n      :host > collapsible-list-item > collapsible-header.open {\n        color: #474d4b;\n        border-bottom-color: #3a9e8f; }\n    :host > collapsible-list-item > collapsible-body {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/elements/blocks/acordion/acordion.component.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/_mixins.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,oBAAY;MAAZ,qBAAY;UAAZ,aAAY,EA8Cf;EA/CD;IAIQ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,6BAAsB;IAAtB,8BAAsB;QAAtB,2BAAsB;YAAtB,uBAAsB;IACtB,qBAAoB,EAuCvB;IA9CL;MAUY,UAAS;MACT,qCFqBoB;MEpBpB,gBFsBU;MErBV,0BAAyB;MACzB,iBAAgB;MAChB,2BAA0B;MAC1B,eFCU;MEAV,0BFEQ;MGRhB,2DAHyC;MDWjC,mBAAkB;MAClB,WAAU;MACV,kBAAiB;MACjB,qCAAoC;MACpC,iDAAgD,EAUnD;MAjCT;QA0BgB,6BFfK,EEgBR;MA3Bb;QA8BgB,eFzBI;QE0BJ,6BFtBI,EEuBP;IAhCb;MAsCY,qCFNoB;MEOpB,0BFnBS;MEoBT,mBAAkB;MAClB,kBALmB;MAMnB,WAAU;MACV,6BAA4B;MAC5B,qBAAoB,EACvB","file":"acordion.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    flex-grow: 1;\n\n    > collapsible-list-item {\n        display: flex;\n        flex-grow: 1;\n        flex-direction: column;\n        margin: 0 auto 2px 0;\n\n        > collapsible-header  {\n            margin: 0;\n            font: $font-default;\n            font-size: $font-size-small;\n            text-transform: uppercase;\n            text-align: left;\n            padding: 3px 10px 1px 10px;\n            color: $white-darker;\n            background-color: $white-warm;\n            @include box-shadow(bottom, 0.25, true);\n            position: relative;\n            z-index: 3;\n            min-height: unset;\n            border-bottom: 2px solid transparent;\n            transition: border-bottom-color 0.3s ease-in-out;\n\n            &:hover {\n                border-bottom-color: $green-light;\n            }\n\n            &.open {\n                color: $black-warm;\n                border-bottom-color: $green-dark;\n            }\n        }\n\n        > collapsible-body {\n            $margin-sides: 10px;\n\n            font: $font-default;\n            background-color: $white-light;\n            position: relative;\n            padding: 5px $margin-sides;\n            z-index: 2;\n            box-shadow: unset !important;\n            border: 0 !important;\n        }\n    }\n}","@mixin box-shadow ($pos, $opacity, $important: false) {\n    $_pos: 0px 0px 3px 0px ;\n    @if($pos == top){\n        $_pos: 0px 3px 11px 0px ;\n    }@else if($pos == left) {\n        $_pos: -2px 0px 11px -4px;\n    }\n\n    $rgb: rgba(0,0,0,$opacity);\n    @if($important == true){        \n        $rgb: rgba(0,0,0,$opacity) !important;\n    }\n\n    box-shadow: $_pos $rgb;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/blocks/acordion/acordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcordionComponent = (function () {
    function AcordionComponent() {
        this.isOpen = false;
    }
    AcordionComponent.prototype.ngOnInit = function () {
    };
    AcordionComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], AcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('className'),
        __metadata("design:type", String)
    ], AcordionComponent.prototype, "className", void 0);
    AcordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-acordion',
            template: __webpack_require__("../../../../../src/app/elements/blocks/acordion/acordion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/blocks/acordion/acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AcordionComponent);
    return AcordionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/blocks/tree-modal/tree-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<sc-modal id=\"modal-1\" class=\"default\" #modal>\n  <div class=\"modal\">\n    <div class=\"model-header\">\n      <button class=\"sc-modal-close\" (click)=\"closeModal('modal-1');\">\n        <i class=\"fa fa-times-circle fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <app-tree #tree (selected)=\"closeModal('modal-1', $event)\" [type]=\"type\" [path]=\"path\"></app-tree>\n    </div>\n  </div>\n  <div class=\"modal-background\"></div>\n</sc-modal>"

/***/ }),

/***/ "../../../../../src/app/elements/blocks/tree-modal/tree-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"tree-modal.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/blocks/tree-modal/tree-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_5_popup__ = __webpack_require__("../../../../angular-5-popup/esm5/angular-5-popup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_blocks_tree_tree_component__ = __webpack_require__("../../../../../src/app/elements/blocks/tree/tree.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeModalComponent = (function () {
    function TreeModalComponent(ms) {
        this.ms = ms;
        this.close = false;
    }
    TreeModalComponent.prototype.openModal = function (id, type, path) {
        var _this = this;
        if (path === void 0) { path = []; }
        this.close = false;
        this.selectedId = null;
        this.path = path;
        this.type = type;
        this.modal.openModal(id);
        this.tree.resetTreeModel();
        var promise = new Promise(function (resolve, reject) {
            var loop = window.setInterval(function () {
                try {
                    var treeModal = window['treeModal'];
                    if (!Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(treeModal.selectedId)) {
                        window.clearInterval(loop);
                        _this.modal.closeModal(id);
                        resolve(treeModal.selectedId);
                    }
                    else if (treeModal.close && Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* isNil */])(treeModal.selectedId)) {
                        window.clearInterval(loop);
                        _this.modal.closeModal(id);
                        reject("Closed without selection");
                    }
                }
                catch (e) {
                    window.clearInterval(loop);
                    _this.modal.closeModal(id);
                    reject(e);
                }
            }, 300);
        });
        return promise;
    };
    TreeModalComponent.prototype.closeModal = function (id, selectedId) {
        this.selectedId = selectedId;
        this.close = true;
    };
    TreeModalComponent.prototype.ngOnInit = function () {
        window['treeModal'] = this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("modal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_5_popup__["a" /* ModalComponent */])
    ], TreeModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("tree"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__elements_blocks_tree_tree_component__["a" /* TreeComponent */])
    ], TreeModalComponent.prototype, "tree", void 0);
    TreeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tree-modal',
            template: __webpack_require__("../../../../../src/app/elements/blocks/tree-modal/tree-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/blocks/tree-modal/tree-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_5_popup__["b" /* ModalService */]])
    ], TreeModalComponent);
    return TreeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/blocks/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<tree #Tree [tree]=\"treeModel\" (menuItemSelected)=\"onMenuItemSelected($event)\" (loadNextLevel)=\"handleNextLevel($event)\"></tree>"

/***/ }),

/***/ "../../../../../src/app/elements/blocks/tree/tree.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"tree.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/blocks/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_editor_service_editor_service__ = __webpack_require__("../../../../../src/app/services/editor-service/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_api__ = __webpack_require__("../../../../../src/app/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreeComponent = (function () {
    function TreeComponent(http, _editorService) {
        this.http = http;
        this._editorService = _editorService;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.resetTreeModel();
    };
    TreeComponent.prototype.resetTreeModel = function () {
        var _this = this;
        this.treeModel = {
            id: 1,
            value: 'DAM',
            settings: {
                leftMenu: false,
                rightMenu: false
            },
            loadChildren: function (callback) {
                _this.requestChildren("1", callback);
            }
        };
        //TODO LOAD PATH TREE
    };
    TreeComponent.prototype.processChildren = function (nodes) {
        var _this = this;
        var children = [];
        var _loop_1 = function (nodeId) {
            var obj = {
                id: nodeId,
                value: nodes[nodeId]['name']
            };
            if (nodes[nodeId]['type'] == 'folder') {
                obj['loadChildren'] = function (callback) {
                    _this.requestChildren(nodeId, callback);
                };
            }
            else {
                obj['settings'] = {
                    rightMenu: true,
                    menuItems: [
                        {
                            name: 'Seleccionar', cssClass: '', action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom
                        }
                    ]
                };
            }
            children.push(obj);
        };
        for (var nodeId in nodes) {
            _loop_1(nodeId);
        }
        ;
        if (children.length == 0) {
            children.push({ value: "No hay elementos disponibles..." });
        }
        return children;
    };
    TreeComponent.prototype.onMenuItemSelected = function (e) {
        var id = e.node.node.id;
        this.selected.emit(id);
    };
    TreeComponent.prototype.requestChildren = function (nodeId, callback) {
        var _this = this;
        var error = function () {
            console.log('error');
            _this._editorService.setLoading(false);
        };
        var success = function (result) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* hasIn */])('status', result) && result.status === 0) {
                var nodes = result.response;
                nodes = Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* hasIn */])('l1', nodes) ? nodes['l1'] : [];
                nodes = Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* hasIn */])('nodes', nodes) ? nodes['nodes'] : [];
                callback(_this.processChildren(nodes));
            }
            else {
                error();
            }
            _this._editorService.setLoading(false);
        };
        return __WEBPACK_IMPORTED_MODULE_4__app_api__["a" /* Api */].getTreeChildren(this.http, nodeId, this.type, success, error);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Tree'),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "tree", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TreeComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('path'),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "path", void 0);
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__("../../../../../src/app/elements/blocks/tree/tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/blocks/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_editor_service_editor_service__["a" /* EditorService */]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/forms/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick($event)\">\n    {{ text }}\n    <i [ngClass]=\"['icon', icon]\" *ngIf=\"icon !== ''\"></i>\n</button>"

/***/ }),

/***/ "../../../../../src/app/elements/forms/button/button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host > button {\n  width: 100%;\n  font: normal 14px \"Lato\", sans-serif;\n  border: none;\n  border-radius: 0px;\n  padding: 5px 10px;\n  text-align: center;\n  color: #edeff2;\n  background-color: #3ea091;\n  transition: background-color 0.3s ease-in-out; }\n  :host > button > .icon {\n    padding-left: 5px; }\n  :host > button:hover {\n    background-color: #3a9e8f; }\n  :host > button:active {\n    background-color: #1e574e; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/elements/forms/button/button.component.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EAEQ,YAAW;EACX,qCF6BwB;EE5BxB,aAAY;EACZ,mBAAkB;EAClB,kBAAiB;EACjB,mBAAkB;EAClB,eFYa;EEXb,0BFCY;EEAZ,8CAA6C,EAahD;EAvBL;IAaY,kBAAiB,EACpB;EAdT;IAiBY,0BFRQ,EESX;EAlBT;IAqBY,0BFbU,EEcb","file":"button.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    > button {\n        width: 100%;\n        font: $font-default;\n        border: none;\n        border-radius: 0px;\n        padding: 5px 10px;\n        text-align: center;\n        color: $white-light; \n        background-color: $green-warm;\n        transition: background-color 0.3s ease-in-out;\n\n        > .icon {\n            padding-left: 5px;\n        }\n\n        &:hover {\n            background-color: $green-dark;\n        }\n\n        &:active {\n            background-color: $green-darker;\n        }\n    }\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/forms/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.onClick = function ($evt) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(this.click)) {
            this.click($evt);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('text'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('icon'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('click'),
        __metadata("design:type", Function)
    ], ButtonComponent.prototype, "click", void 0);
    ButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-button',
            template: __webpack_require__("../../../../../src/app/elements/forms/button/button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/forms/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/forms/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<label>\n    <input type=\"checkbox\" [name]=\"name\" [checked]=checked (change)=\"changeValues($event)\"> {{ placeholder }}\n</label>"

/***/ }),

/***/ "../../../../../src/app/elements/forms/checkbox/checkbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host > label {\n    margin: auto 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    :host > label > input {\n      margin-right: 5px; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/app/elements/forms/checkbox/checkbox.component.scss"],"names":[],"mappings":"AAAA;EACI,qBAAa;EAAb,qBAAa;EAAb,cAAa,EAUhB;EAXD;IAIQ,eAAc;IACd,oBAAY;QAAZ,qBAAY;YAAZ,aAAY,EAKf;IAVL;MAQY,kBAAiB,EACpB","file":"checkbox.component.scss","sourcesContent":[":host {\n    display: flex;\n\n    >  label{\n        margin: auto 0;\n        flex-grow: 1;\n        \n        > input {\n            margin-right: 5px; \n        }\n    }\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/forms/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this.changeValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.checked = false;
        this.name = '';
        this.placeholder = 'Checkbox';
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.changeValues = function (evt) {
        this.checked = !this.checked;
        this.emitValue();
    };
    CheckboxComponent.prototype.emitValue = function () {
        this.changeValue.emit(this.checked);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('placeholder'),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('checked'),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "checked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CheckboxComponent.prototype, "changeValue", void 0);
    CheckboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__("../../../../../src/app/elements/forms/checkbox/checkbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/forms/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/forms/input-acordion/input-acordion.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"xe-acordion-title\">\n    <span *ngIf=\"title !== ''\">{{ title }}</span>\n    <app-button [text]=\"actionText\" [icon]=\"'fas fa-plus'\" [click]=\"addElement.bind(this)\"></app-button>\n</section>\n<ng-container *ngFor=\"let value of values; let i = index\">\n    <div>\n        <input type=\"text\" [value]=\"value\" (change)=\"updateElement($event, i)\">\n        <button (click)=\"removeElement(i)\">\n            <i class=\"fas fa-minus\"></i>\n        </button>\n    </div>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/elements/forms/input-acordion/input-acordion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background-color: #edeff2; }\n  :host > .xe-acordion-title {\n    margin: 5px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    :host > .xe-acordion-title > app-button {\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2; }\n  :host > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 5px 0; }\n    :host > div > input {\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2;\n      text-indent: 5px;\n      width: 0; }\n    :host > div > button {\n      width: 16px;\n      height: 16px;\n      padding: 0;\n      line-height: 16px;\n      font-size: 12px;\n      text-align: center;\n      border-radius: 100%;\n      background-color: #db4949;\n      color: #edeff2;\n      border: 0;\n      margin: auto 0 auto 5px;\n      transition: background-color 0.3s ease-in-out; }\n      :host > div > button:hover {\n        background-color: #d13737; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/elements/forms/input-acordion/input-acordion.component.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,0BFkBiB,EEuBpB;EA3CD;IAKQ,cAAa;IACb,qBAAa;IAAb,qBAAa;IAAb,cAAa,EAKhB;IAXL;MASY,oBAAY;UAAZ,qBAAY;cAAZ,aAAY,EACf;EAVT;IAcQ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;IACnB,cAAa,EA0BhB;IA1CL;MAmBY,oBAAY;UAAZ,qBAAY;cAAZ,aAAY;MACZ,iBAAgB;MAChB,SAAQ,EACX;IAtBT;MAyBY,YAAW;MACX,aAAY;MACZ,WAAU;MACV,kBAAiB;MACjB,gBAAe;MACf,mBAAkB;MAClB,oBAAmB;MACnB,0BFPO;MEQP,eFbS;MEcT,UAAQ;MACR,wBAAuB;MACvB,8CAA6C,EAKhD;MAzCT;QAuCgB,0BFfE,EEgBL","file":"input-acordion.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    flex-grow: 1;\n    background-color: $white-light;\n\n    > .xe-acordion-title {\n        margin: 5px 0;\n        display: flex;\n        \n        > app-button {\n            flex-grow: 2;\n        }\n    }\n\n    > div {\n        display: flex;\n        flex-direction: row;\n        margin: 5px 0;\n\n        > input {\n            flex-grow: 2;\n            text-indent: 5px;\n            width: 0;\n        }\n\n        > button {\n            width: 16px;\n            height: 16px;\n            padding: 0;\n            line-height: 16px;\n            font-size: 12px;\n            text-align: center;\n            border-radius: 100%;\n            background-color: $red-light;\n            color: $white-light;\n            border:0;\n            margin: auto 0 auto 5px;\n            transition: background-color 0.3s ease-in-out;\n\n            &:hover {\n                background-color: $red-warm;\n            }\n        }\n    }    \n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/forms/input-acordion/input-acordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputAcordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputAcordionComponent = (function () {
    function InputAcordionComponent() {
        this.title = '';
        this.changeValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputAcordionComponent.prototype.ngOnInit = function () {
        console.log(this.values, typeof this.values);
    };
    InputAcordionComponent.prototype.removeElement = function (index) {
        this.values.splice(index, 1);
        this.storeData(this.values);
    };
    InputAcordionComponent.prototype.addElement = function () {
        this.values.push('');
    };
    InputAcordionComponent.prototype.updateElement = function (evt, index) {
        this.values[index] = evt.target.value;
        this.storeData(this.values);
    };
    InputAcordionComponent.prototype.storeData = function (data) {
        this.changeValue.emit(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], InputAcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('actionText'),
        __metadata("design:type", String)
    ], InputAcordionComponent.prototype, "actionText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('values'),
        __metadata("design:type", Array)
    ], InputAcordionComponent.prototype, "values", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InputAcordionComponent.prototype, "changeValue", void 0);
    InputAcordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input-acordion',
            template: __webpack_require__("../../../../../src/app/elements/forms/input-acordion/input-acordion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/forms/input-acordion/input-acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputAcordionComponent);
    return InputAcordionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/forms/listbox/listbox.component.html":
/***/ (function(module, exports) {

module.exports = "<select name=\"\" (change)=\"changeValues($event)\">\n    <ng-container *ngFor=\"let key of options | keys\">\n        <option [value]=\"key\" [selected]=\"key == selected\">{{options[key]}}</option>\n    </ng-container>\n</select>"

/***/ }),

/***/ "../../../../../src/app/elements/forms/listbox/listbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  background: #edeff2;\n  display: inline; }\n  :host > select {\n    border: none;\n    margin: 5px;\n    background: transparent;\n    outline: none; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/app/elements/forms/listbox/listbox.component.scss"],"names":[],"mappings":"AAAA;EACI,oBAAmB;EACnB,gBAAe,EAOlB;EATD;IAIQ,aAAY;IACZ,YAAW;IACX,wBAAuB;IACvB,cAAa,EAChB","file":"listbox.component.scss","sourcesContent":[":host {\n    background: #edeff2;\n    display: inline;\n    >  select{\n        border: none;\n        margin: 5px;\n        background: transparent;\n        outline: none;\n    }\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/forms/listbox/listbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListboxComponent = (function () {
    function ListboxComponent() {
        this.changeValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ListboxComponent.prototype.ngOnInit = function () {
    };
    ListboxComponent.prototype.changeValues = function (evt) {
        var ele = evt.target;
        this.selected = ele.options[ele.selectedIndex].value;
        this.emitValue();
    };
    ListboxComponent.prototype.emitValue = function () {
        this.changeValue.emit(this.selected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('placeholder'),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('selected'),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListboxComponent.prototype, "changeValue", void 0);
    ListboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listbox',
            template: __webpack_require__("../../../../../src/app/elements/forms/listbox/listbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/forms/listbox/listbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListboxComponent);
    return ListboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"xe-acordion-title\">\n    <span *ngIf=\"title !== ''\">{{ title }}</span>\n    <app-button [text]=\"actionText\" [icon]=\"'fas fa-plus'\" [click]=\"addElement.bind(this)\"></app-button>\n</section>\n<ng-container *ngFor=\"let value of values; let i = index\">\n    <div>\n        <app-multi-input [data]=\"value\" (changeValue)=\"updateElement($event)\" [editable]=\"true\"></app-multi-input>\n        <button (click)=\" removeElement(i) \">\n            <i class=\"fas fa-minus \"></i>\n        </button>\n    </div>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background-color: #edeff2;\n  display: block; }\n  :host > .xe-acordion-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 5px 0; }\n    :host > .xe-acordion-title > app-button {\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2; }\n  :host > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 5px 0; }\n    :host > div > app-multi-input {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      width: 0; }\n    :host > div > button {\n      width: 16px;\n      height: 16px;\n      padding: 0;\n      line-height: 16px;\n      font-size: 12px;\n      text-align: center;\n      border-radius: 100%;\n      background-color: #db4949;\n      color: #edeff2;\n      border: 0;\n      margin: auto 0 auto 5px;\n      transition: background-color 0.3s ease-in-out; }\n      :host > div > button:hover {\n        background-color: #d13737; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,0BFkBiB;EEjBjB,eAAc,EAwCjB;EA3CD;IAMQ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,cAAa,EAKhB;IAZL;MAUY,oBAAY;UAAZ,qBAAY;cAAZ,aAAY,EACf;EAXT;IAeQ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;IACnB,cAAa,EAyBhB;IA1CL;MAoBY,oBAAY;UAAZ,qBAAY;cAAZ,aAAY;MACZ,SAAQ,EACX;IAtBT;MAyBY,YAAW;MACX,aAAY;MACZ,WAAU;MACV,kBAAiB;MACjB,gBAAe;MACf,mBAAkB;MAClB,oBAAmB;MACnB,0BFPO;MEQP,eFbS;MEcT,UAAQ;MACR,wBAAuB;MACvB,8CAA6C,EAKhD;MAzCT;QAuCgB,0BFfE,EEgBL","file":"multi-input-acordion.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    flex-grow: 1;\n    background-color: $white-light;\n    display: block;\n\n    > .xe-acordion-title {\n        display: flex;\n        margin: 5px 0;\n        \n        > app-button {\n            flex-grow: 2;\n        }\n    }\n\n    > div {\n        display: flex;\n        flex-direction: row;\n        margin: 5px 0;\n\n        > app-multi-input {\n            flex-grow: 1;\n            width: 0;\n        }\n\n        > button {\n            width: 16px;\n            height: 16px;\n            padding: 0;\n            line-height: 16px;\n            font-size: 12px;\n            text-align: center;\n            border-radius: 100%;\n            background-color: $red-light;\n            color: $white-light;\n            border:0;\n            margin: auto 0 auto 5px;\n            transition: background-color 0.3s ease-in-out;\n\n            &:hover {\n                background-color: $red-warm;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiInputAcordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiInputAcordionComponent = (function () {
    function MultiInputAcordionComponent() {
        this.changeValue = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this._values = {};
        this.title = '';
    }
    MultiInputAcordionComponent.prototype.ngOnInit = function () {
        this._values = this.values.reduce(function (acc, value) {
            var key = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["l" /* keys */])(value)[0];
            acc[key] = value[key];
            return acc;
        }, this._values);
    };
    MultiInputAcordionComponent.prototype.removeElement = function (index) {
        var key = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["l" /* keys */])(this.values[index])[0];
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(key, this._values)) {
            delete this._values[key];
        }
        this.storeData(this._values);
    };
    MultiInputAcordionComponent.prototype.addElement = function () {
        this.values.push({});
    };
    MultiInputAcordionComponent.prototype.updateElement = function (_a) {
        var oldValue = _a.old, newValue = _a.new;
        var value = newValue;
        var oldKey = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(oldValue) ? '' : Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["l" /* keys */])(oldValue)[0];
        var style = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["l" /* keys */])(value)[0];
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(oldKey)) {
            this._values[style] = value[style];
        }
        else {
            var valuesClone = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* clone */])(this._values);
            this._values = {};
            for (var key in valuesClone) {
                var json = {};
                if (oldKey !== key) {
                    this._values[key] = valuesClone[key].replace(/;$/, '');
                }
                else {
                    this._values[style] = value[style];
                }
            }
        }
        this.storeData(this._values);
    };
    MultiInputAcordionComponent.prototype.storeData = function (data) {
        if (data instanceof Object && !(data instanceof Array)) {
            var result_1 = [];
            Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* forEachObjIndexed */])(function (_value, key) {
                var json = {};
                json[key] = _value.replace(/;$/, '');
                result_1.push(json);
            }, data);
            data = result_1;
        }
        this.changeValue.emit(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], MultiInputAcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('actionText'),
        __metadata("design:type", String)
    ], MultiInputAcordionComponent.prototype, "actionText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('values'),
        __metadata("design:type", Array)
    ], MultiInputAcordionComponent.prototype, "values", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], MultiInputAcordionComponent.prototype, "changeValue", void 0);
    MultiInputAcordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-multi-input-acordion',
            template: __webpack_require__("../../../../../src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiInputAcordionComponent);
    return MultiInputAcordionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/forms/multi-input/multi-input.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"hasAttrNameValue\" [ngIfElse]=\"name\">\n    <ng-template [ngIf]=\"editable\" [ngIfElse]=\"static\">\n        <label (click)=\"updateLabel()\">\n            {{ attrName }}\n        </label>\n    </ng-template>\n    <ng-template #static>\n        <label>\n            {{ attrName }}\n        </label>\n    </ng-template>\n    <span>:</span>\n</ng-template>\n<ng-template #name>\n    <input type=\"text\" [value]=\"isEmptyValue(attrName)\" (change)=\"setAttrName($event)\" (blur)=\"setAttrName($event)\">\n    <span>:</span>\n</ng-template>\n<input type=\"text\" [name]=\"attrName\" [value]=\"isEmptyValue(attrValue)\" (change)=\"changeValues($event)\">"

/***/ }),

/***/ "../../../../../src/app/elements/forms/multi-input/multi-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") + ") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + __webpack_require__("../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") + ") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host {\n  margin: 5px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font-size: 14px; }\n  :host > label {\n    max-width: 100px; }\n  :host > input {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    text-indent: 5px;\n    width: 0; }\n  :host > * {\n    margin: auto 5px auto 0; }\n  :host:last-child() {\n    margin: auto 0; }\n", "", {"version":3,"sources":["/Users/atovar/develop/web/ximdex/xedit/src/sass/_variables.scss","/Users/atovar/develop/web/ximdex/xedit/src/sass/fonts/_lato.scss","/Users/atovar/develop/web/ximdex/xedit/src/app/elements/forms/multi-input/multi-input.component.scss"],"names":[],"mappings":"AAAA,+EAA+E;ACA/E,eAAe;AACf;EACI,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAA0I;EAC1I,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,0GAAwI;EACxI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,+FAAyH;EACzH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAwI;EACxI,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,wGAAsI;EACtI,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,6FAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAA2H;EAC3H,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,iGAAwH;EACxH,0KAAyK,EAAA;;AAE3K,eAAe;AACf;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAyH;EACzH,oHAAmH,EAAA;;AAErH,WAAW;AACX;EACE,oBAAmB;EACnB,mBAAkB;EAClB,iBAAgB;EAChB,4FAAsH;EACtH,0KAAyK,EAAA;;AC5F7K;EACI,cAAa;EACb,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,+BAAmB;EAAnB,8BAAmB;MAAnB,wBAAmB;UAAnB,oBAAmB;EACnB,gBAAe,EAmBlB;EAvBD;IAOQ,iBAAgB,EACnB;EARL;IAWQ,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,iBAAgB;IAChB,SAAQ,EACX;EAdL;IAiBQ,wBAAuB,EAC1B;EAlBL;IAqBQ,eAAc,EACjB","file":"multi-input.component.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~sass/fonts/lato';\n@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');\n@import '~sass/mixins';\n\n$black-darker: #202624;\n$black-dark: #3f4946;\n$black-warm: #474d4b;\n$black-light: #5f6362;\n\n$green-darker: #1e574e;\n$green-dark: #3a9e8f;\n$green-warm: #3ea091;\n$green-light: #44c4b1;\n\n$blue-dark: #214e61;\n$blue-light: #295e75;\n$blue-lighter: #31718d;\n\n$white-darker: #959595;\n$white-dark: #c4c2c2;\n$white-warm: #e1e4e6;\n$white-light: #edeff2;\n$white-lighter: #fcfcfc;\n$white-ximdex: #f9f9f9;\n\n$red-warm: #d13737;\n$red-light: #db4949;\n\n$taskbar-height: 46px;\n$taskbar-line-height: 40px;\n$tabs-height: 35px;\n$tabs-height-small: 30px;\n\n$font-family: 'Lato', sans-serif;\n\n$font-size-small: 12px;\n$font-size-default: 14px;\n$font-size-big: 16px;\n\n$icon-size-default: 18px;\n\n$font-default: normal $font-size-default $font-family;","/* latin-ext */\n@font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Lato Italic'), local('Lato-Italic'), url('~sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('~sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Lato Light'), local('Lato-Light'), url('~sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Lato Regular'), local('Lato-Regular'), url('~sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Lato Bold'), local('Lato-Bold'), url('~sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@import '~sass/variables';\n\n:host {\n    margin: 5px 0;\n    display: flex;\n    flex-direction: row;\n    font-size: 14px;\n\n    > label {\n        max-width: 100px;\n    }\n\n    > input {\n        flex-grow: 1;\n        text-indent: 5px;\n        width: 0;\n    }\n\n    > * {\n        margin: auto 5px auto 0;\n    }\n\n    &:last-child(){\n        margin: auto 0;\n    }\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/forms/multi-input/multi-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiInputComponent = (function () {
    function MultiInputComponent() {
        this.changeValue = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.editable = false;
    }
    Object.defineProperty(MultiInputComponent.prototype, "data", {
        set: function (data) {
            this.attrName = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["l" /* keys */])(data)[0];
            this.attrValue = data[this.attrName];
        },
        enumerable: true,
        configurable: true
    });
    MultiInputComponent.prototype.ngOnInit = function () {
        this.hasAttrNameValue = this.hasAttrName();
        this.oldValue = {};
    };
    MultiInputComponent.prototype.isEmptyValue = function (data) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(data) || Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(data) ? '' : data;
    };
    MultiInputComponent.prototype.updateLabel = function () {
        this.hasAttrNameValue = !this.hasAttrNameValue;
        var json = {};
        json[this.attrName] = this.attrValue;
        this.oldValue = json;
    };
    MultiInputComponent.prototype.hasAttrName = function () {
        return !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(this.attrName) && !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(this.attrName);
    };
    MultiInputComponent.prototype.setAttrName = function (evt) {
        this.attrName = evt.target.value;
        this.hasAttrNameValue = this.hasAttrName();
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(this.attrValue) && !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(this.attrValue)) {
            this.emitValue();
        }
    };
    MultiInputComponent.prototype.changeValues = function (evt) {
        this.attrValue = evt.target.value;
        this.emitValue();
    };
    MultiInputComponent.prototype.emitValue = function () {
        var json = { old: this.oldValue, new: {} };
        json.new[this.attrName] = this.attrValue;
        this.changeValue.emit(json);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('data'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MultiInputComponent.prototype, "data", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('editable'),
        __metadata("design:type", Boolean)
    ], MultiInputComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], MultiInputComponent.prototype, "changeValue", void 0);
    MultiInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-multi-input',
            template: __webpack_require__("../../../../../src/app/elements/forms/multi-input/multi-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/forms/multi-input/multi-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiInputComponent);
    return MultiInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/configs/clipboardConfigs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipboardConfigs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs__ = __webpack_require__("../../../../../src/app/models/configs/configs.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ClipboardConfigs = (function (_super) {
    __extends(ClipboardConfigs, _super);
    function ClipboardConfigs() {
        var _this = _super.call(this) || this;
        _this.self = _this.constructor;
        _this.configs = {};
        _this.init();
        return _this;
    }
    ClipboardConfigs.prototype.setConfigs = function (configs) {
        this.configs.configs = configs;
        ClipboardConfigs.save(this.configs);
        return this;
    };
    ClipboardConfigs.prototype.getConfigs = function (config) {
        if (config === void 0) { config = null; }
        var configs = this.configs.configs;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(config)) {
            return configs;
        }
        for (var i = 0; i < configs.length; i++) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('id', configs[i])) {
                return configs[i];
            }
        }
    };
    ClipboardConfigs.prototype.toggleActive = function () {
        this.configs.active = !this.configs.active;
        ClipboardConfigs.save(this.configs);
        return this.isActive();
    };
    ClipboardConfigs.prototype.isActive = function () {
        var active = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('active', this.configs) ? this.configs.active : null;
        return active;
    };
    ClipboardConfigs.prototype.addConfig = function (config) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(this.configs)) {
            this.configs = ClipboardConfigs.DEFUALT;
        }
        this.configs.configs.push(config);
        return this.setConfigs(this.configs);
    };
    ClipboardConfigs.prototype.updateConfigs = function () {
        this.init();
    };
    ClipboardConfigs.prototype.init = function () {
        var _this = this;
        this.self.get().then(function (data) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(data)) {
                data = _this.self.DEFUALT;
            }
            _this.configs = data;
        });
    };
    ClipboardConfigs.save = function (data, group) {
        if (group === void 0) { group = ClipboardConfigs.GROUP; }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(group)) {
            group = ClipboardConfigs.GROUP;
        }
        return _super.save.call(this, data, group);
    };
    ClipboardConfigs.get = function (group) {
        if (group === void 0) { group = ClipboardConfigs.GROUP; }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(group)) {
            group = ClipboardConfigs.GROUP;
        }
        return _super.get.call(this, group);
    };
    ClipboardConfigs.callback = function (error, value) {
        if (error) {
            console.error(error);
        }
        else {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(value)) {
                value = ClipboardConfigs.DEFUALT;
            }
        }
        return value;
    };
    ClipboardConfigs.GROUP = 'clipboardConfigs';
    ClipboardConfigs.DEFUALT = {
        active: false,
        configs: [
            {
                id: 'copy',
                name: 'Format copy',
                selected: 'copyPlain',
                options: {
                    'copyHtml': 'Copy as HTML',
                    'copyPlain': 'Copy as Plain Text'
                }
            }
        ]
    };
    return ClipboardConfigs;
}(__WEBPACK_IMPORTED_MODULE_1__configs__["a" /* Configs */]));



/***/ }),

/***/ "../../../../../src/app/models/configs/configs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_localforage__ = __webpack_require__("../../../../localforage/dist/localforage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_localforage__);

var Configs = (function () {
    function Configs() {
    }
    Configs.init = function () {
        __WEBPACK_IMPORTED_MODULE_0_localforage__["config"]({
            driver: __WEBPACK_IMPORTED_MODULE_0_localforage__["LOCALSTORAGE"],
            name: Configs.NAME,
            version: 1.0,
            storeName: Configs.NAME,
            description: 'xedit configs storage'
        });
        return __WEBPACK_IMPORTED_MODULE_0_localforage__;
    };
    Configs.save = function (data, group) {
        if (group === void 0) { group = 'configs'; }
        return this.init().setItem(group, data, this.callback);
    };
    Configs.get = function (group) {
        if (group === void 0) { group = 'configs'; }
        return this.init().getItem(group, this.callback);
    };
    Configs.callback = function (error, value) {
        if (error) {
            console.error(error);
            return error;
        }
        else {
            return value;
        }
    };
    Configs.NAME = 'xedit-configs';
    return Configs;
}());



/***/ }),

/***/ "../../../../../src/app/models/configs/statesConfigs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateConfigs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs__ = __webpack_require__("../../../../../src/app/models/configs/configs.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StateConfigs = (function (_super) {
    __extends(StateConfigs, _super);
    function StateConfigs() {
        var _this = _super.call(this) || this;
        _this.self = _this.constructor;
        _this.configs = {};
        _this.init();
        return _this;
    }
    StateConfigs.prototype.setConfigs = function (configs) {
        this.configs.configs = configs;
        StateConfigs.save(this.configs);
        return this;
    };
    StateConfigs.prototype.getConfigs = function (config) {
        if (config === void 0) { config = null; }
        var configs = this.configs.configs;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(config)) {
            return configs;
        }
        for (var i = 0; i < configs.length; i++) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('id', configs[i])) {
                return configs[i];
            }
        }
    };
    StateConfigs.prototype.toggleActive = function () {
        this.configs.active = !this.configs.active;
        StateConfigs.save(this.configs);
        return this.isActive();
    };
    StateConfigs.prototype.isActive = function () {
        var active = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('active', this.configs) ? this.configs.active : null;
        return active;
    };
    StateConfigs.prototype.addConfig = function (config) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(this.configs)) {
            this.configs = StateConfigs.DEFUALT;
        }
        this.configs.configs.push(config);
        return this.setConfigs(this.configs);
    };
    StateConfigs.prototype.updateConfigs = function () {
        this.init();
    };
    StateConfigs.prototype.init = function () {
        var _this = this;
        this.self.get().then(function (data) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(data)) {
                data = _this.self.DEFUALT;
            }
            _this.configs = data;
        });
    };
    StateConfigs.save = function (data, group) {
        if (group === void 0) { group = StateConfigs.GROUP; }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* isEmpty */])(group)) {
            group = StateConfigs.GROUP;
        }
        return _super.save.call(this, data, group);
    };
    StateConfigs.get = function (group) {
        if (group === void 0) { group = StateConfigs.GROUP; }
        return _super.get.call(this, group);
    };
    StateConfigs.callback = function (error, value) {
        if (error) {
            console.error(error);
        }
        else {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(value)) {
                value = StateConfigs.DEFUALT;
            }
        }
        return value;
    };
    StateConfigs.GROUP = 'statesController';
    StateConfigs.DEFUALT = {
        active: false,
        configs: [
            {
                id: 'hover',
                name: 'Controlar hover',
                enable: true
            }
        ]
    };
    return StateConfigs;
}(__WEBPACK_IMPORTED_MODULE_1__configs__["a" /* Configs */]));



/***/ }),

/***/ "../../../../../src/app/models/dom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOM; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");


var DOM = (function () {
    function DOM(target) {
        this.target = target;
        this.classes = target.className.split(' ');
    }
    /********************* SETER AND GETERS *********************/
    DOM.prototype.setTarget = function (target) {
        this.target = target;
    };
    DOM.prototype.getTarget = function () {
        return this.target;
    };
    /********************** PUBLIC METHODS **********************/
    DOM.prototype.tagName = function (upper) {
        if (upper === void 0) { upper = false; }
        var tag = this.getTarget().tagName.toLowerCase();
        if (upper) {
            tag = tag.toUpperCase();
        }
        return tag;
    };
    DOM.prototype.addClass = function (className) {
        var _a = this.classExists(className), index = _a.index, exists = _a.exists;
        if (!exists) {
            this.insertClass(className);
        }
        this.storeAttr('class', this.classes);
    };
    DOM.prototype.removeClass = function (className) {
        var _a = this.classExists(className), index = _a.index, exists = _a.exists;
        if (exists) {
            this.deleteClass(index, className);
        }
        this.storeAttr('class', this.classes);
    };
    DOM.prototype.toggleClass = function (className) {
        var _a = this.classExists(className), index = _a.index, exists = _a.exists;
        if (exists) {
            this.removeClass(className);
        }
        else {
            this.addClass(className);
        }
        this.storeAttr('class', this.classes);
    };
    DOM.prototype.setAttr = function (attr, value) {
        this.storeAttr(attr, value);
    };
    DOM.prototype.insertNode = function (htmlString, siblingNode, before) {
        if (before === void 0) { before = false; }
        var elements = DOM.creteElement(htmlString);
        // if (!before) {
        //     this.target.insertBefore(element, siblingNode);
        // }
        while (elements.length > 0) {
            this.target.insertBefore(elements.item(0), siblingNode);
        }
    };
    DOM.prototype.deleteNode = function () {
        this.target.remove();
    };
    /********************* PRIVATE METHODS *********************/
    DOM.prototype.storeAttr = function (attr, value) {
        if (Array.isArray(value)) {
            value = value.join(this.joinAttrTypes(attr));
        }
        this.target.setAttribute(attr, String(value));
    };
    DOM.prototype.joinAttrTypes = function (attr) {
        var attributtes = {
            class: ' ',
            style: '; ',
            default: ' ',
        };
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(attr, attributtes)) {
            return attributtes[attr];
        }
        return attributtes.default;
    };
    DOM.prototype.classExists = function (className) {
        var index = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["h" /* indexOf */])(className, this.classes);
        var exists = index >= 0;
        return { index: index, exists: exists };
    };
    DOM.prototype.insertClass = function (className) {
        this.classes.push(className);
    };
    DOM.prototype.deleteClass = function (index, className) {
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    };
    /***************** STATIC METHODS **************************/
    DOM.element = function (selector) {
        var element;
        if (selector instanceof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) {
            element = selector.nativeElement;
        }
        else if (selector instanceof HTMLElement) {
            element = selector;
        }
        else {
            element = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"](document.body).nativeElement.querySelector(selector);
        }
        return new DOM(element);
    };
    DOM.creteElement = function (htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.childNodes;
    };
    // TODO Clean
    DOM.setClass = function (classes, className) {
        classes.push(className);
    };
    DOM.deleteClass = function (classes, className) {
        var index = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["h" /* indexOf */])(className, classes);
        if (index >= 0) {
            classes.splice(index, 1);
        }
    };
    DOM.tag = function (selector, upper) {
        if (upper === void 0) { upper = false; }
        var element = DOM.element(selector);
        return element.tagName(upper);
    };
    DOM.getClass = function (element) {
        return element.nativeElement.className.split(' ');
    };
    DOM.existClass = function (element, className) {
        var classes = DOM.getClass(element);
        var index = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["h" /* indexOf */])(className, classes);
        var exist = index >= 0;
        return { classes: classes, index: index, exist: exist };
    };
    DOM.addClass = function (element, className) {
        var _a = DOM.existClass(element, className), classes = _a.classes, index = _a.index, exist = _a.exist;
        if (!exist) {
            DOM.setClass(classes, className);
            element.nativeElement.setAttribute('class', classes.join(' '));
        }
        return element;
    };
    DOM.removeClass = function (element, className) {
        var _a = DOM.existClass(element, className), classes = _a.classes, index = _a.index, exist = _a.exist;
        if (exist) {
            DOM.deleteClass(classes, className);
            element.nativeElement.setAttribute('class', classes.join(' '));
        }
        return element;
    };
    DOM.toggleClass = function (element, className) {
        var _a = DOM.existClass(element, className), classes = _a.classes, index = _a.index, exist = _a.exist;
        if (exist) {
            DOM.deleteClass(classes, className);
        }
        else {
            DOM.setClass(classes, className);
        }
        element.nativeElement.setAttribute('class', classes.join(' '));
        return element;
    };
    return DOM;
}());



/***/ }),

/***/ "../../../../../src/app/models/file.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FileHistory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history__ = __webpack_require__("../../../../../src/app/models/history.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_converters__ = __webpack_require__("../../../../../src/utils/converters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FileHistory = (function () {
    // Constructor
    function FileHistory(content, message) {
        if (content === void 0) { content = null; }
        if (message === void 0) { message = null; }
        if (content != null) {
            this.content = content;
            this.message = message;
            this.type = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["i" /* is */])(String, content) ? FileHistory.TYPE_TEXT : FileHistory.TYPE_JSON;
        }
    }
    /***************** Getters and setters **************************/
    FileHistory.prototype.getContent = function () {
        return this.content;
    };
    FileHistory.prototype.setContent = function (content) {
        this.content = content;
    };
    FileHistory.prototype.getMessage = function () {
        return this.message;
    };
    FileHistory.prototype.setMessage = function (message) {
        this.message = message;
    };
    FileHistory.TYPE_JSON = 'json';
    FileHistory.TYPE_TEXT = 'text';
    return FileHistory;
}());

var File = (function (_super) {
    __extends(File, _super);
    function File(json) {
        if (json === void 0) { json = null; }
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(json)) {
            throw TypeError('Invalid arguments');
        }
        _this = _super.call(this, File.createContent(json.nodes)) || this;
        _this.metas = json.metas;
        _this.css = [];
        _this.js = [];
        _this.name = json.name;
        var schemas = {};
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* isNil */])(json.nodes)) {
            Object.keys(json.nodes).forEach(function (nodeKey) {
                var node = json.nodes[nodeKey];
                schemas[nodeKey] = node.schema;
                _this.css = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["p" /* union */])(_this.css, Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('css', node) ? node.css : []);
                _this.js = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["p" /* union */])(_this.js, Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* hasIn */])('js', node) ? node.js : []);
            });
        }
        __WEBPACK_IMPORTED_MODULE_3__xedit__["a" /* Xedit */].setConf('schemas', schemas);
        __WEBPACK_IMPORTED_MODULE_3__xedit__["a" /* Xedit */].setConf('baseUrl', json.baseUrl);
        __WEBPACK_IMPORTED_MODULE_3__xedit__["a" /* Xedit */].setConf('routerMapper', json.routerMapper);
        return _this;
    }
    /**************** Getters and setter ************************/
    File.prototype.getCss = function () {
        return this.css;
    };
    File.prototype.getJs = function () {
        return this.js;
    };
    File.prototype.getMetas = function () {
        return this.metas;
    };
    File.prototype.setMetas = function (metas) {
        return this.metas = metas;
    };
    File.prototype.getMeta = function (name) {
        return this.metas[name];
    };
    File.prototype.setMeta = function (name, value) {
        return this.metas[name] = value;
    };
    File.prototype.getName = function () {
        return this.name;
    };
    /***************** PUBLIC METHODS **************************/
    /**
     * Added new state
     */
    File.prototype.newStateWithMessage = function (content, message) {
        _super.prototype.newState.call(this, new FileHistory(content, message));
        return this;
    };
    /**
     * Recovery specific state
     *
     * @param stateId
     */
    File.prototype.recovery = function (stateId) {
        var _this = this;
        return _super.prototype.recovery.call(this, stateId).then(function (value) {
            _this.setState(Object.assign(new FileHistory, value));
            return _this;
        });
    };
    /***************** STATIC METHODS **************************/
    File.createContent = function (nodes) {
        Object.keys(nodes).forEach(function (property) {
            nodes[property].content = __WEBPACK_IMPORTED_MODULE_2__utils_converters__["a" /* Converters */].html2json(nodes[property].content);
        });
        return new FileHistory(nodes, 'Init state');
    };
    return File;
}(__WEBPACK_IMPORTED_MODULE_0__history__["a" /* History */]));



/***/ }),

/***/ "../../../../../src/app/models/history.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return History; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localforage__ = __webpack_require__("../../../../localforage/dist/localforage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_localforage__);



var History = (function () {
    // Contructor
    function History(initState, maxStates, maxSnapshots) {
        if (maxStates === void 0) { maxStates = 50; }
        if (maxSnapshots === void 0) { maxSnapshots = 10; }
        this.pos = 0;
        this.states = new Array;
        this.setMaxStates(maxStates);
        this.setMaxSnapshots(maxSnapshots);
        this.state = initState;
        this.states = [];
        this.snapshots = [];
        // Init database
        this.prepareDatabase();
        // Save init state
        this.save(initState);
        this.snapshot();
    }
    // ************************************** Getters and setters **************************************/
    History.prototype.getState = function () {
        return this.state;
    };
    History.prototype.setState = function (state) {
        this.state = state;
    };
    History.prototype.getMaxStates = function () {
        return this.maxStates;
    };
    History.prototype.setMaxStates = function (maxStates) {
        if (maxStates <= 0 && !Number.isInteger(maxStates)) {
            throw new TypeError('Invalid maxStates');
        }
        this.maxStates = maxStates;
    };
    History.prototype.getSnapshots = function () {
        return this.snapshots;
    };
    History.prototype.getSnapshot = function (key) {
        return this.snapshots[key];
    };
    History.prototype.getMaxSnapshots = function () {
        return this.maxSnapshots;
    };
    History.prototype.setMaxSnapshots = function (maxSnapshots) {
        if (maxSnapshots <= 0 && !Number.isInteger(maxSnapshots)) {
            throw new TypeError('Invalid maxSnapshots');
        }
        this.maxSnapshots = maxSnapshots;
    };
    /************************************** Private Methods **************************************/
    /**
     * Get the number of states
     */
    History.prototype.countStates = function () {
        return this.states.length;
    };
    /**
     * Check if there are the maximun number of states (By default 100)
     */
    History.prototype.checkMaxStates = function () {
        return this.countStates() >= this.maxStates;
    };
    /**
     * Added a new state
     */
    History.prototype.addState = function (state) {
        if (this.countStates() > this.pos) {
            this.remove(Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["o" /* remove */])(0, this.pos + 1, this.states), this.db);
            this.states.splice(this.pos + 1, this.countStates());
        }
        if (this.checkMaxStates()) {
            this.remove(this.states.shift(), this.db);
            this.pos--;
        }
        this.save(state);
        this.state = state;
    };
    /**
     * Save state in web storage
     */
    History.prototype.save = function (state) {
        if (this.db) {
            var stateId = __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID();
            try {
                this.db.setItem(stateId, state, function (err, value) {
                    if (err) {
                        console.error(err);
                    }
                });
                this.states.push(stateId);
            }
            catch (ex) {
                console.error('History save error');
            }
        }
        else {
            console.error('Storage not available');
        }
    };
    /**
     * Snapshot last state in web storage
     */
    History.prototype.snapshot = function () {
        if (this.sc) {
            var stateId = this.states[this.pos];
            try {
                if (this.snapshots.length > this.getMaxSnapshots()) {
                    this.remove(stateId, this.sc);
                    this.snapshots.shift();
                }
                this.sc.setItem(stateId, this.state, function (err, value) {
                    if (err) {
                        console.error(err);
                    }
                });
                this.snapshots.push({ 'key': stateId, 'message': this.state.message });
            }
            catch (ex) {
                console.error('Snapshot save error');
            }
        }
        else {
            console.error('Storage not available');
        }
    };
    /**
     * Recovery state by key from web storage
     *
     * @param stateId
     */
    History.prototype.recovery = function (stateId) {
        return this.db.getItem(stateId, function (err, value) {
            if (err) {
                console.error(err);
            }
            else {
                return value;
            }
        });
    };
    /**
     * Remove state from storage
     */
    History.prototype.remove = function (keys, database) {
        keys = (keys instanceof Array) ? keys : [keys];
        keys.forEach(function (key) {
            if (database) {
                database.removeItem(key, function (err) {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        });
    };
    /************************************** Public Methods **************************************/
    /**
     * Return to the previous state if it exists, otherwise it does not do anything
     */
    History.prototype.lastState = function () {
        if (this.hasPreviousState()) {
            this.pos--;
        }
        return this.recovery(this.states[this.pos]);
    };
    /**
     * Go to the next state if it exists, otherwise it does not do anything
     */
    History.prototype.nextState = function () {
        if (this.hasNextState()) {
            this.pos++;
        }
        return this.recovery(this.states[this.pos]);
    };
    /**
     * Go to the initial state
     */
    History.prototype.resetState = function () {
        this.pos = 0;
        if (this.state.length > 0) {
            this.recovery(this.states[this.pos]);
        }
        return this;
    };
    /**
     * Added new state
     */
    History.prototype.newState = function (state) {
        this.addState(state);
        this.pos++;
        return this;
    };
    /**
     * Check if there is a next state
     */
    History.prototype.hasNextState = function () {
        return this.pos < this.countStates() - 1;
    };
    /**
     * Check if there is a previous state
     */
    History.prototype.hasPreviousState = function () {
        return this.pos > 0;
    };
    /**
     * Init database
     */
    History.prototype.prepareDatabase = function () {
        this.db = __WEBPACK_IMPORTED_MODULE_2_localforage__["createInstance"]({
            driver: __WEBPACK_IMPORTED_MODULE_2_localforage__["INDEXEDDB"],
            name: 'xedit',
            version: 1.0,
            size: 4980736,
            storeName: 'history',
            description: 'Document history'
        });
        this.sc = __WEBPACK_IMPORTED_MODULE_2_localforage__["createInstance"]({
            driver: __WEBPACK_IMPORTED_MODULE_2_localforage__["INDEXEDDB"],
            name: 'xedit',
            version: 1.0,
            size: 4980736,
            storeName: 'snapshot',
            description: 'Document snapshots'
        });
        this.db.clear();
        this.sc.clear();
    };
    return History;
}());



/***/ }),

/***/ "../../../../../src/app/models/node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__ = __webpack_require__("../../../../../src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_converters__ = __webpack_require__("../../../../../src/utils/converters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");




var Node = (function () {
    // Constructor
    function Node(uuid, target, attributes) {
        if (attributes === void 0) { attributes = {}; }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(uuid) || Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(name)) {
            throw new TypeError('Invalid arguments');
        }
        this.uuid = uuid;
        this.name = target.tagName.toLowerCase();
        this.target = target;
        this.section = Node.getContainer(this.target);
        this.uuidSectionsPath = Node.getContextPath(this.target, __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_EDITOR, __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID, __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID, [], false, true);
        this.sectionsPath = Node.getContextPath(this.target, __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_EDITOR, __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE, __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE, [], true);
        this.areaId = this.uuidSectionsPath.shift();
        this.attributes = attributes;
        this.schemaNode = __WEBPACK_IMPORTED_MODULE_3__xedit__["a" /* Xedit */].getConf('schemas')[this.areaId];
        this.schema = this.schemaNode[this.getSection().getAttribute(__WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE)];
    }
    // ************************************** Getters and setters **************************************/
    Node.prototype.getUuid = function () {
        return this.uuid;
    };
    Node.prototype.getTarget = function () {
        return this.target;
    };
    Node.prototype.getHtmlTag = function () {
        return this.target.tagName;
    };
    Node.prototype.setTarget = function (target) {
        this.target = target;
    };
    Node.prototype.getName = function () {
        return this.name;
    };
    Node.prototype.getAreaId = function () {
        return this.areaId;
    };
    Node.prototype.getSchema = function () {
        return this.schema;
    };
    Node.prototype.getSchemaNode = function () {
        return this.schemaNode;
    };
    Node.prototype.getSection = function () {
        return this.section;
    };
    Node.prototype.getPath = function () {
        return this.uuidSectionsPath;
    };
    Node.prototype.getSectionsPath = function () {
        return this.sectionsPath;
    };
    Node.prototype.getAttributes = function () {
        return this.attributes;
    };
    Node.prototype.getAttribute = function (name, value) {
        if (value === void 0) { value = null; }
        return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(this.attributes[name]) ? null : this.attributes[name];
    };
    Node.prototype.setAttributes = function (attributes) {
        this.attributes = attributes;
    };
    Node.prototype.setAttribute = function (name, value) {
        if (name === __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_LINK && this.getHtmlTag() === 'IMG ') {
            this.attributes[name] = value;
            this.attributes['src'] = __WEBPACK_IMPORTED_MODULE_3__xedit__["a" /* Xedit */].getResourceUrl() + "/" + value;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* contains */])(name, this.getAvailableAttributes())) {
            this.attributes[name] = value;
        }
    };
    /********************** PUBLIC METHODS *********************/
    Node.prototype.getType = function () {
        var type = Node.TYPE_OTHER;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* equals */])('img', this.name)) {
            type = Node.TYPE_IMAGE;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* equals */])('video', this.name)) {
            type = Node.TYPE_VIDEO;
        }
        return type;
    };
    /**
     *
     */
    Node.prototype.getAvailableAttributes = function () {
        var attrName = this.name;
        var auxTag = null;
        if (this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_LINK, null) != null) {
            attrName = __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_LINK;
            auxTag = this.name;
        }
        else if (this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE, null) != null) {
            attrName = this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE);
        }
        return __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].getAvailableAttribute(attrName, auxTag);
    };
    /*********************** STATIC METHODS ***************************************/
    Node.getContainer = function (element, attribute) {
        if (attribute === void 0) { attribute = __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE; }
        var container = null;
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(element) && element.hasAttribute(attribute)) {
            container = element;
        }
        return !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(container) || Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(element) || Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(element.parentNode)
            ? container
            : Node.getContainer(element.parentNode, attribute);
    };
    /**
     * Calculate uuid path to xedit node
     */
    Node.getContextPath = function (element, rootTag, hasAttribute, attribute, path, onlyAttribute, rootTagIncluded) {
        if (rootTag === void 0) { rootTag = __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_EDITOR; }
        if (hasAttribute === void 0) { hasAttribute = __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID; }
        if (attribute === void 0) { attribute = __WEBPACK_IMPORTED_MODULE_1__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID; }
        if (path === void 0) { path = []; }
        if (onlyAttribute === void 0) { onlyAttribute = false; }
        if (rootTagIncluded === void 0) { rootTagIncluded = false; }
        var parent = element.parentNode;
        if ((!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(element) &&
            (!onlyAttribute || element.hasAttribute(hasAttribute)) &&
            element.nodeName.toLowerCase() !== rootTag) ||
            rootTagIncluded) {
            path.unshift(element.getAttribute(attribute));
        }
        return element.nodeName.toLowerCase() === rootTag || Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(parent)
            ? path
            : this.getContextPath(parent, rootTag, hasAttribute, attribute, path, onlyAttribute, rootTagIncluded);
    };
    /**
     * Get section name according to the language
     *
     * @param section
     * @param lang
     */
    Node.getSectionLang = function (section, lang) {
        var name = null;
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(section)) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('lang', section) &&
                Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["i" /* is */])(Object, section.lang) &&
                Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(lang, section.lang)) {
                name = section.lang[lang];
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('name', section)) {
                name = section.name;
            }
        }
        return name;
    };
    /**
     * Get section template
     *
     * @param section
     */
    Node.getSectionTemplate = function (section) {
        var template = null;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('view', section) && Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["i" /* is */])(String, section.view)) {
            template = __WEBPACK_IMPORTED_MODULE_2__utils_converters__["a" /* Converters */].json2html(__WEBPACK_IMPORTED_MODULE_2__utils_converters__["a" /* Converters */].html2json(section.view));
        }
        return template;
    };
    Node.TYPE_IMAGE = 'image';
    Node.TYPE_VIDEO = 'video';
    Node.TYPE_OTHER = 'other';
    return Node;
}());



/***/ }),

/***/ "../../../../../src/app/models/schema/xedit-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XeditMapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");

var XeditMapper = (function () {
    function XeditMapper() {
    }
    /************************* PUBLIC METHODS *************************/
    XeditMapper.getAvailableAttribute = function (name, tagName) {
        if (tagName === void 0) { tagName = null; }
        var attributes = XeditMapper.ATTRIBUTES['*'].attributes.accept;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(name, XeditMapper.ATTRIBUTES) &&
            Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('attributes', XeditMapper.ATTRIBUTES[name])) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('accept', XeditMapper.ATTRIBUTES[name].attributes)) {
                attributes = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["p" /* union */])(attributes, XeditMapper.ATTRIBUTES[name].attributes.accept);
            }
            if (tagName && Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(tagName, XeditMapper.ATTRIBUTES)) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('accept', XeditMapper.ATTRIBUTES[tagName].attributes)) {
                    attributes = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["p" /* union */])(attributes, XeditMapper.ATTRIBUTES[tagName].attributes.accept);
                }
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('reject', XeditMapper.ATTRIBUTES[name].attributes)) {
                attributes = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* difference */])(attributes, XeditMapper.ATTRIBUTES[name].attributes.reject);
            }
            if (tagName && Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(tagName, XeditMapper.ATTRIBUTES)) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('reject', XeditMapper.ATTRIBUTES[tagName].attributes)) {
                    attributes = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* difference */])(attributes, XeditMapper.ATTRIBUTES[tagName].attributes.reject);
                }
            }
        }
        return attributes;
    };
    // EDITOR TYPES
    XeditMapper.TYPE_HTML = 'html';
    XeditMapper.TYPE_TEXT = 'text';
    XeditMapper.TYPE_DATE = 'date';
    // TAGS
    XeditMapper.TAG_EDITOR = 'xedit';
    XeditMapper.TAG_SECTION_TYPE = 'xe_section';
    XeditMapper.TAG_UUID = 'xe_uuid';
    XeditMapper.TAG_LINK = 'xe_link';
    // ATTRIBUTES
    XeditMapper.ATTR_HOVER = 'xe_hover';
    // UTILS
    XeditMapper.ATTR_SELECTED = 'xe_selected';
    XeditMapper.ATTR_WYSIWYG_SELECTED = 'xe_w_selected';
    XeditMapper.requiredXeditAttributes = [
        XeditMapper.TAG_SECTION_TYPE,
        XeditMapper.TAG_LINK,
    ];
    XeditMapper.ATTR_TYPES = {
        width: 'number',
        heigth: 'number',
    };
    // LINKS_TYPE
    XeditMapper.LINK_TYPES = {
        a: 'href',
        applet: 'codebase',
        area: 'href',
        base: 'href',
        blockquote: 'cite',
        del: 'cite',
        form: 'action',
        frame: 'src',
        head: 'profile',
        iframe: 'src',
        img: 'src',
        input: 'src',
        ins: 'cite',
        link: 'href',
        object: 'data',
        q: 'cite',
        script: 'src',
        audio: 'src',
        button: 'formaction',
        command: 'icon',
        embed: 'src',
        html: 'manifest',
        source: 'src',
        track: 'src',
        video: 'src',
    };
    // ATTRIBUTES
    XeditMapper.ATTRIBUTES = {
        xe_section: {
            filter_attributes: [],
            attributes: {
                reject: [],
                accept: [],
            },
        },
        xe_link: {
            filter_attributes: ['href', 'src'],
            attributes: {
                accept: ['xe_link'],
                reject: ['src', 'href'],
            },
        },
        img: {
            filter_attributes: [],
            attributes: {
                accept: ['src', 'height', 'width'],
                reject: [],
            },
        },
        video: {
            filter_attributes: [],
            attributes: {
                accept: ['src', 'height', 'width'],
                reject: [],
            },
        },
        '*': {
            attributes: {
                accept: ['id', 'class', 'style', 'title'],
            },
        },
    };
    return XeditMapper;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/debug/debug.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DebugPipe = (function () {
    function DebugPipe() {
    }
    DebugPipe.prototype.transform = function (value, args) {
        console.log('VALUE', value, 'TYPEOF', typeof value, 'ARGS', args);
    };
    DebugPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'debug'
        })
    ], DebugPipe);
    return DebugPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/inner-html/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/keys/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        /*const attributes = [];
        node.getAvailableAttributes().forEach(element => {
          attributes.push({ name: element, value: node.getAttribute(element, '') });
        });
        return attributes;*/
        return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["l" /* keys */])(value);
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/url/url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlPipe = (function () {
    function UrlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    UrlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    };
    UrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'url'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], UrlPipe);
    return UrlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/editor-service/editor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_file__ = __webpack_require__("../../../../../src/app/models/file.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_node__ = __webpack_require__("../../../../../src/app/models/node.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__ = __webpack_require__("../../../../../src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_converters__ = __webpack_require__("../../../../../src/utils/converters.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditorService = (function () {
    // Constructor
    function EditorService() {
        this.file = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.fileState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentNode = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentNodeModify = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.loading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.elementsState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    EditorService_1 = EditorService;
    // ************************************** Getters and setters **************************************/
    EditorService.prototype.setFile = function (file) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["k" /* isNil */])(file)) {
            console.log(null);
        }
        this.file.next(file);
        this.fileState.next(file);
    };
    EditorService.prototype.getFile = function () {
        this.file.next(this.fileState.getValue());
        return this.file.asObservable();
    };
    EditorService.prototype.getFileValue = function () {
        this.file.next(this.fileState.getValue());
        return this.file.getValue();
    };
    EditorService.prototype.setFileState = function (file) {
        this.fileState.next(file);
    };
    EditorService.prototype.getFileState = function () {
        return this.fileState.asObservable();
    };
    EditorService.prototype.getFileStateValue = function () {
        return this.fileState.getValue();
    };
    EditorService.prototype.setCurrentNode = function (node) {
        this.currentNode.next(node);
    };
    EditorService.prototype.getCurrentNode = function () {
        return this.currentNode.asObservable();
    };
    EditorService.prototype.setCurrentNodeModify = function (node) {
        this.currentNodeModify.next(node);
    };
    EditorService.prototype.getCurrentNodeModify = function () {
        return this.currentNodeModify.asObservable();
    };
    EditorService.prototype.isLoading = function () {
        return this.loading.asObservable();
    };
    EditorService.prototype.setLoading = function (loading) {
        this.loading.next(loading);
    };
    EditorService.prototype.setElementsState = function (elementState) {
        this.elementsState.next(elementState);
    };
    EditorService.prototype.getElementsState = function () {
        return this.elementsState.asObservable();
    };
    /************************************** Public Methods **************************************/
    /**
     * Create file from data nodes
     */
    EditorService.prototype.createFile = function (data) {
        this.setFile(new __WEBPACK_IMPORTED_MODULE_4__models_file__["a" /* File */](data));
    };
    /**
     * Added new state
     */
    EditorService.prototype.newStateFile = function (state, message) {
        return this.file.getValue().newStateWithMessage(state, message);
    };
    /**
      * Return to the previous state if it exists, otherwise it does not do anything
     */
    EditorService.prototype.lastStateFile = function () {
        var _this = this;
        this.file.getValue().lastState().then(function (value) {
            _this.setFile(value);
            _this.setLoading(false);
        });
    };
    /**
     * Go to the next state if it exists, otherwise it does not do anything
     */
    EditorService.prototype.nextStateFile = function () {
        var _this = this;
        this.file.getValue().nextState().then(function (value) {
            _this.setFile(value);
            _this.setLoading(false);
        });
    };
    /**
     *
     */
    EditorService.prototype.recoverySnapshot = function (key) {
        var _this = this;
        this.getFileStateValue().recovery(key).then(function () {
            _this.setFile(_this.getFileStateValue());
        });
    };
    /**
     * Save content into document
     *
     * @param node DomNode
     * @param content Html content
     * @param message string message
     */
    EditorService.prototype.save = function (node, content, message) {
        var fileContent = this.fileState.getValue().getState().content;
        /** @todo Improve performance clone */
        // let fileContent = clone(this.file.getValue().getState().content)
        var uuidPath = null;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["i" /* is */])(String, node)) {
            fileContent[node].content = __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].html2json(content);
        }
        else {
            uuidPath = EditorService_1.getUuidPath(node);
            var root = fileContent[uuidPath.shift()];
            if (Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["i" /* is */])(String, root.content)) {
                root.content = __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].html2json(root.content);
            }
            // Modify file with new changes
            var editContent = Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["n" /* reduce */])(function (acc, value) {
                return acc.child[value];
            }, root.content, uuidPath);
            editContent.child = __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].html2json(content, false);
        }
        // Save new state
        var newFile = this.newStateFile(fileContent, message);
        this.setFileState(newFile);
    };
    /**
     * Get json node by path
     */
    EditorService.prototype.getJsonNodesByPath = function (node) {
        var fileContent = this.fileState.getValue().getState().content;
        var root = fileContent[node.getAreaId()];
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["i" /* is */])(String, root.content)) {
            root.content = __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].html2json(root.content);
        }
        // Modify file with new changes
        var editContent = Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["n" /* reduce */])(function (acc, value) {
            return acc.child[value];
        }, root.content, node.getPath());
        return editContent;
    };
    /**
     * Remove node section
     */
    EditorService.prototype.removeNode = function (node) {
        var file = this.newStateFile(this.fileState.getValue().getState().content, 'Remove node');
        var section = node.getSection();
        var sectionPath = __WEBPACK_IMPORTED_MODULE_5__models_node__["a" /* Node */].getContextPath(section);
        var parentNode = null;
        var fileNode = Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["n" /* reduce */])(function (n, value) {
            parentNode = n;
            return n.child[value];
        }, file.getState().getContent()[node.getAreaId()].content, sectionPath);
        var nodeKey = section.getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID);
        delete parentNode.child[nodeKey];
        this.setFileState(file);
    };
    /**
     * Add child or sibling node to area
     *
     * @param node
     * @param target
     * @param child
     */
    EditorService.prototype.addNodeToArea = function (node, newNode, child) {
        if (child === void 0) { child = false; }
        var message = (child ? 'Adding child' : 'Adding sibling') + ' to ' + node.getSection().getAttribute('xe_section');
        var file = this.newStateFile(this.fileState.getValue().getState().content, message);
        var section = node.getSection();
        var sectionPath = child ? __WEBPACK_IMPORTED_MODULE_5__models_node__["a" /* Node */].getContextPath(section) : __WEBPACK_IMPORTED_MODULE_5__models_node__["a" /* Node */].getContextPath(section.parentNode);
        var fileNode = Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["n" /* reduce */])(function (n, value) {
            return n.child[value];
        }, file.getState().getContent()[node.getAreaId()].content, sectionPath);
        if (!child) {
            var idChild_1 = section.getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID);
            var nodeKey_1 = Object.keys(newNode)[0];
            fileNode.child = Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["n" /* reduce */])(function (object, nodeId) {
                var nodeValue = fileNode.child[nodeId];
                object[nodeId] = nodeValue;
                if (nodeId === idChild_1) {
                    object[nodeKey_1] = newNode[nodeKey_1];
                }
                return object;
            }, {}, Object.keys(fileNode.child));
        }
        else {
            var nodeKey = Object.keys(newNode)[0];
            fileNode.child[nodeKey] = newNode[nodeKey];
        }
        this.setFileState(file);
    };
    EditorService.prototype.getUpdatedDocument = function () {
        var file = this.getFileStateValue();
        var state = file.getState();
        var document = { 'nodes': {} };
        for (var nodeId in state.content) {
            if (Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["g" /* hasIn */])('content', state.content[nodeId])) {
                document['nodes'][nodeId] = {
                    content: __WEBPACK_IMPORTED_MODULE_7__utils_converters__["a" /* Converters */].json2html(state.content[nodeId].content, false, false),
                    editable: state.content[nodeId].editable
                };
            }
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["g" /* hasIn */])('metas', file)) {
            document['metas'] = file['metas'];
        }
        return document;
    };
    /************************************** Static Methods **************************************/
    /**
    * Parse DomNode to EditorNode
    *
    * @param element DomNode
    * @param path Uuid path
    */
    EditorService.prototype.parseToNode = function (element) {
        var styles = [];
        var attributes = {};
        var node = null;
        var uuid = element.getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID);
        Object.keys(element.attributes).forEach(function (key) {
            attributes[element.attributes[key].name] = element.attributes[key].value;
        });
        try {
            node = new __WEBPACK_IMPORTED_MODULE_5__models_node__["a" /* Node */](uuid, element, attributes);
        }
        catch (e) {
            console.error('This element is not a valid node');
        }
        return node;
    };
    /*
    * Calculate uuid path to xedit node
    */
    EditorService.getUuidPath = function (element, rootTag, path, onlySections) {
        if (rootTag === void 0) { rootTag = __WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_EDITOR; }
        if (path === void 0) { path = []; }
        if (onlySections === void 0) { onlySections = false; }
        var parent = element.parentNode;
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["k" /* isNil */])(element) && (!onlySections || element.hasAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE))) {
            path.unshift(element.getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID));
        }
        return (element.nodeName.toLowerCase() === rootTag || Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["k" /* isNil */])(parent)) ?
            path : this.getUuidPath(parent, rootTag, path);
    };
    /**
     * Check if node has a child section
     */
    /**
     * Check if allow add new child
     */
    EditorService.isAllowAddChild = function (currentNode, section) {
        var valid = false;
        var schema = currentNode.getSchema();
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["b" /* contains */])(section, Object.keys(schema.sections))) {
            valid = true;
        }
        return valid;
    };
    /**
     * Check if current node support a inserted node
     *
     * @param currentNode Node
     * @param insertedNode Node
     *
     * @returns boolean
     */
    EditorService.isInsertedNodeValid = function (currentNode, insertedNode) {
        var section = insertedNode.getTarget().getAttribute(__WEBPACK_IMPORTED_MODULE_6__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_SECTION_TYPE);
        return this.isAllowAddChild(currentNode, section);
    };
    EditorService = EditorService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EditorService);
    return EditorService;
    var EditorService_1;
}());



/***/ }),

/***/ "../../../../../src/app/services/state-service/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = (function () {
    // Constructor
    function StateService() {
        this.currentView = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.availableViews = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    // ************************************** Getters and setters **************************************/
    StateService.prototype.getCurrentView = function () {
        return this.currentView.asObservable();
    };
    StateService.prototype.setCurrentView = function (view) {
        this.currentView.next(view);
    };
    StateService.prototype.getAvailabelViews = function () {
        return this.availableViews.asObservable();
    };
    StateService.prototype.setAvailableViews = function (availableViews) {
        this.availableViews.next(availableViews);
    };
    StateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "../../../../../src/app/xedit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Xedit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");

var Xedit = (function () {
    function Xedit() {
    }
    // ************************************** Getters and setters **************************************/
    Xedit.getConf = function (conf, value) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(conf, Xedit.getBase()) ? Xedit.getBase()[conf] :
            (!Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(value) ? value : undefined);
    };
    Xedit.setConf = function (conf, value) {
        return Xedit.getBase()[conf] = value;
    };
    Xedit.setToken = function (token) {
        return Xedit.setConf(Xedit.TOKEN, token);
    };
    Xedit.getToken = function () {
        return Xedit.getConf(Xedit.TOKEN);
    };
    Xedit.setApiUrl = function (url) {
        return Xedit.setConf(Xedit.API_URL, url);
    };
    Xedit.getRouterMapper = function () {
        return Xedit.getConf(Xedit.ROUTER_MAPPER);
    };
    Xedit.getApiUrl = function () {
        return Xedit.getConf(Xedit.API_URL);
    };
    Xedit.setLang = function (lang) {
        return Xedit.setConf(Xedit.LANG, lang);
    };
    Xedit.getLang = function () {
        return Xedit.getConf(Xedit.LANG, 'es');
    };
    Xedit.getSetUrl = function () {
        var routerMapper = Xedit.getRouterMapper();
        var setUrl = '';
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('set', routerMapper['routes'])) {
            setUrl = routerMapper['routes']['set'];
        }
        return Xedit.generateActionUrl(setUrl);
    };
    Xedit.getResourceUrl = function () {
        var routerMapper = Xedit.getRouterMapper();
        var resourceUrl = '';
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('resource', routerMapper['routes'])) {
            resourceUrl = routerMapper['routes']['resource'];
        }
        return Xedit.generateActionUrl(resourceUrl) + "&id=";
    };
    Xedit.getTreeUrl = function () {
        var routerMapper = Xedit.getRouterMapper();
        var treeInfo = '';
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('treeInfo', routerMapper['routes'])) {
            treeInfo = routerMapper['routes']['treeInfo'];
        }
        return Xedit.generateActionUrl(treeInfo);
    };
    Xedit.getInfoNodeUrl = function () {
        var routerMapper = Xedit.getRouterMapper();
        var infoNode = '';
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('infonode', routerMapper['routes'])) {
            infoNode = routerMapper['routes']['infonode'];
        }
        return Xedit.generateActionUrl(infoNode);
    };
    Xedit.getSchemas = function () {
        return Xedit.getConf(Xedit.SCHEMAS);
    };
    // ************************************** Private Methods **************************************/
    Xedit.getBase = function () {
        var xedit = window[Xedit.BASE];
        if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(xedit)) {
            xedit = window[Xedit.BASE] = {};
        }
        return xedit;
    };
    Xedit.generateActionUrl = function (action) {
        return Xedit.getApiUrl() + "?" + action + "&token=" + Xedit.getToken();
    };
    Xedit.BASE = '$xedit';
    Xedit.TOKEN = 'token';
    Xedit.API_URL = 'apiUrl';
    Xedit.ROUTER_MAPPER = 'routerMapper';
    Xedit.RESOURCE_URL = 'resourceUrl';
    Xedit.SCHEMAS = 'schemas';
    Xedit.LANG = 'lang';
    Xedit.NOTIFICATION_DEFAULT_SETTINGS = {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
    };
    return Xedit;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "S6u8w4BMUTPHjxsAXC-qNiXg7Q.e3c13d06fb4a82acc2cf.woff2";

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "S6u9w4BMUTPHh6UVSwiPGQ3q5d0.bf912df22c6dc861e7a0.woff2";

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "S6u9w4BMUTPHh7USSwiPGQ3q5d0.e3a2a6f15a2dcc0d447b.woff2";

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "S6u_w4BMUTPHjxsI5wq_Gwftx9897g.b3e9d411ae2ed9824f5f.woff2";

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "S6u_w4BMUTPHjxsI9w2_Gwftx9897g.c9b266c5fb5c05fb6de5.woff2";

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "S6uyw4BMUTPHjx4wXiWtFCc.b27045292283a12723b2.woff2";

/***/ }),

/***/ "../../../../../src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "../../../../../src/utils/converters.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Converters; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_xedit__ = __webpack_require__("../../../../../src/app/xedit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__ = __webpack_require__("../../../../../src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_htmlparser__ = __webpack_require__("../../../../../src/utils/htmlparser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_htmlparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_htmlparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);






var Converters = (function () {
    function Converters() {
    }
    Converters.removeDOCTYPE = function (html) {
        return html
            .replace(/<\?xml.*\?>\n/, '')
            .replace(/<!doctype.*\>\n/, '')
            .replace(/<!DOCTYPE.*\>\n/, '');
    };
    /**
     * Added root wrap to json
     */
    Converters.addWrapJson = function (json) {
        return {
            node: 'root',
            child: json
        };
    };
    /**
     * Parse html to json
     *
     * @param html String with html
     * @param hasRootTag If true then root tag will be added
     */
    Converters.html2json = function (html, hasRootTag) {
        if (hasRootTag === void 0) { hasRootTag = true; }
        html = Converters.removeDOCTYPE(html);
        var bufArray = [];
        var results = {
            node: 'root',
            child: {},
        };
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_htmlparser__["HTMLParser"])(html, {
            start: function (tag, uuid, attrs, unary) {
                // node for this element
                var node = {
                    node: 'element',
                    tag: tag,
                    uuid: Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(uuid) ? __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID() : uuid,
                    attr: null
                };
                if (attrs.length !== 0) {
                    node.attr = attrs
                        .filter(function (attr) { return Converters.filter(attr.name, attrs); })
                        .reduce(function (pre, attr) {
                        var name = attr.name;
                        var value = attr.value;
                        // has multi attibutes
                        // make it array of attribute
                        if (value.match(/ /)) {
                            value = value.split(' ');
                        }
                        // if attr already exists
                        // merge it
                        if (pre[name]) {
                            if (Array.isArray(pre[name])) {
                                // already array, push to last
                                pre[name].push(value);
                            }
                            else {
                                // single value, make it array
                                pre[name] = [pre[name], value];
                            }
                        }
                        else {
                            // not exist, put it
                            pre[name] = value;
                        }
                        return pre;
                    }, {});
                }
                if (unary) {
                    // if this tag dosen't have end tag
                    // like <img src="hoge.png"/>
                    // add to parents
                    var parent_1 = bufArray[0] || results;
                    if (parent_1.child === undefined) {
                        parent_1.child = {};
                    }
                    parent_1.child[node.uuid] = node;
                }
                else {
                    bufArray.unshift(node);
                }
            },
            end: function (tag) {
                // merge into parent tag
                var node = bufArray.shift();
                if (node.tag !== tag) {
                    console.error('invalid state: mismatch end tag');
                }
                if (bufArray.length === 0) {
                    results.child[node.uuid] = node;
                }
                else {
                    var parent_2 = bufArray[0];
                    if (parent_2.child === undefined) {
                        parent_2.child = {};
                    }
                    parent_2.child[node.uuid] = node;
                }
            },
            chars: function (text) {
                var node = {
                    node: 'text',
                    text: text,
                };
                if (bufArray.length === 0) {
                    results.child['text-0'] = node;
                }
                else {
                    var parent_3 = bufArray[0];
                    if (parent_3.child === undefined) {
                        parent_3.child = {};
                    }
                    parent_3.child['text-' + Object.keys(parent_3.child).length] = node;
                }
            },
            comment: function (text) {
                var node = {
                    node: 'comment',
                    text: text,
                };
                var parent = bufArray[0];
                if (parent.child === undefined) {
                    parent.child = [];
                }
                parent.child['comment-' + Object.keys(parent.child).length] = node;
            },
        });
        return hasRootTag ? results : results.child;
    };
    /**
     * Filter attribute
     *
     * @param attr
     * @param attrs
     * @return true if the attribute is valid, otherwise the attribute should be filter
     */
    Converters.filter = function (attr, attrs) {
        return (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* contains */])(attr, __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].requiredXeditAttributes) ||
            (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(attr.match('xe_')) && Converters.filterAttribute(attr, attrs))) ?
            true : false;
    };
    /**
     * Filter attribute if attrs has a `xe_` attribute and attr exist in a filter_attribute
     * @param attr
     * @param attrs [{name:value},{name2:value2}]  || [name, name2]
     *
     * @return true if the attribute is valid, otherwise the attribute should be filter
     */
    Converters.filterAttribute = function (attr, attrs) {
        attrs = Object(__WEBPACK_IMPORTED_MODULE_5_util__["isArray"])(attrs) ? attrs : Object.keys(attrs);
        var xeditAttribute = attrs.reduce(function (acc, value) {
            var val = (typeof value === 'string') ? value : value.name;
            return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* contains */])(val, __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].requiredXeditAttributes) ? val : acc;
        }, null);
        var settings = !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["k" /* isNil */])(xeditAttribute) && Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(xeditAttribute, __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTRIBUTES) &&
            Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])('filter_attributes', __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTRIBUTES[xeditAttribute]) ?
            __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTRIBUTES[xeditAttribute]['filter_attributes'] : [];
        return !Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* contains */])(attr, settings);
    };
    /**
     * Convert json to html
     *
     * @param json Json object with content
     * @param showIds If true added attribute id in tags
     */
    Converters.json2html = function (json, showIds, processXedit, resetIds, enableHover) {
        if (showIds === void 0) { showIds = true; }
        if (processXedit === void 0) { processXedit = true; }
        if (resetIds === void 0) { resetIds = false; }
        if (enableHover === void 0) { enableHover = true; }
        // Empty Elements - HTML 4.01
        var empty = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param', 'embed'];
        var child = '';
        if (json.child) {
            child = Object.keys(json.child).map(function (uuid) {
                return Converters.json2html(json.child[uuid], showIds, processXedit, resetIds, enableHover);
            }).join('');
        }
        var attr = '';
        if (json.attr) {
            var tag_1 = json.tag;
            attr = Object.keys(json.attr).filter(function (val) {
                return Converters.filter(val, json.attr);
            }).map(function (key) {
                var value = json.attr[key];
                if (Array.isArray(value)) {
                    value = value.join(' ');
                }
                return Converters.parseAttributes(key, value, processXedit, tag_1);
            }).join(' ');
            if (attr !== '') {
                attr = " " + attr;
            }
            if (!enableHover) {
                attr += __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].ATTR_HOVER + "=\"false\"";
            }
        }
        if (json.node === 'element') {
            var tag = json.tag;
            var uuid = resetIds ? __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID() : json.uuid;
            uuid = showIds ? " " + __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_UUID + " = \"" + uuid + "\"" : '';
            if (empty.indexOf(tag) > -1) {
                // empty element
                return "<" + json.tag + " " + uuid + " " + attr + "/>";
            }
            // non empty element
            var open_1 = "<" + json.tag + " " + uuid + " " + attr + ">";
            var close_1 = "</" + json.tag + ">";
            return open_1 + child + close_1;
        }
        else if (json.node === 'text') {
            return json.text;
        }
        else if (json.node === 'comment') {
            return "<!-- " + json.text + " -->";
        }
        else if (json.node === 'root') {
            return child;
        }
    };
    Converters.parseAttributes = function (key, value, processXedit, tag) {
        if (tag === void 0) { tag = 'a'; }
        var extraData = '';
        var linkType = (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* hasIn */])(tag, __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].LINK_TYPES)) ? __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].LINK_TYPES[tag] : 'href';
        if (processXedit && Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* contains */])(key, __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].requiredXeditAttributes)) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* equals */])(key, __WEBPACK_IMPORTED_MODULE_3__models_schema_xedit_mapper__["a" /* XeditMapper */].TAG_LINK)) {
                extraData = value;
                if (!(/^(f|ht)tps?:\/\//i).test(extraData)) {
                    extraData = "" + __WEBPACK_IMPORTED_MODULE_2__app_xedit__["a" /* Xedit */].getResourceUrl() + extraData;
                }
                extraData = linkType + "='" + extraData + "'";
            }
        }
        return key + "=\"" + value + "\" " + extraData;
    };
    return Converters;
}());



/***/ }),

/***/ "../../../../../src/utils/htmlparser.js":
/***/ (function(module, exports) {

/*
 * HTML5 Parser By Sam Blowes
 *
 * Designed for HTML5 documents
 *
 * Original code by John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * ----------------------------------------------------------------------------
 * License
 * ----------------------------------------------------------------------------
 *
 * This code is triple licensed using Apache Software License 2.0,
 * Mozilla Public License or GNU Public License
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * 
 * The Original Code is Simple HTML Parser.
 * 
 * The Initial Developer of the Original Code is Erik Arvidsson.
 * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
 * Reserved.
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * ----------------------------------------------------------------------------
 * Usage
 * ----------------------------------------------------------------------------
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

(function (global) {

    // Regular Expressions for parsing tags and attributes
    var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
        endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
        attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

    // Empty Elements - HTML 5
    var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

    // Block Elements - HTML 5
    var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

    // Inline Elements - HTML 5
    var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

    // Elements that you can, intentionally, leave open
    // (and which close themselves)
    var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

    // Attributes that have their values filled in disabled="disabled"
    var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

    // Special Elements (can contain anything)
    var special = makeMap("script,style");

    global.HTMLParser = this.HTMLParser = function (html, handler) {
        var index, chars, match, stack = [], last = html;
        stack.last = function () {
            return this[this.length - 1];
        };

        while (html) {
            chars = true;

            // Make sure we're not in a script or style element
            if (!stack.last() || !special[stack.last()]) {

                // Comment
                if (html.indexOf("<!--") == 0) {
                    index = html.indexOf("-->");

                    if (index >= 0) {
                        if (handler.comment)
                            handler.comment(html.substring(4, index));
                        html = html.substring(index + 3);
                        chars = false;
                    }

                    // end tag
                } else if (html.indexOf("</") == 0) {
                    match = html.match(endTag);

                    if (match) {
                        html = html.substring(match[0].length);
                        match[0].replace(endTag, parseEndTag);
                        chars = false;
                    }

                    // start tag
                } else if (html.indexOf("<") == 0) {
                    match = html.match(startTag);

                    if (match) {
                        html = html.substring(match[0].length);
                        match[0].replace(startTag, parseStartTag);
                        chars = false;
                    }
                }

                if (chars) {
                    index = html.indexOf("<");

                    var text = index < 0 ? html : html.substring(0, index);
                    html = index < 0 ? "" : html.substring(index);

                    if (handler.chars)
                        handler.chars(text);
                }

            } else {
                html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
                    text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
                    if (handler.chars)
                        handler.chars(text);

                    return "";
                });

                parseEndTag("", stack.last());
            }

            if (html == last)
                throw "Parse Error: " + html;
            last = html;
        }

        // Clean up any remaining tags
        parseEndTag();

        function parseStartTag(tag, tagName, rest, unary) {
            tagName = tagName.toLowerCase();

            if (block[tagName]) {
                while (stack.last() && inline[stack.last()]) {
                    parseEndTag("", stack.last());
                }
            }

            if (closeSelf[tagName] && stack.last() == tagName) {
                parseEndTag("", tagName);
            }

            unary = empty[tagName] || !!unary;

            if (!unary)
                stack.push(tagName);

            if (handler.start) {
                var uuid = null;
                var attrs = [];

                rest.replace(attr, function (match, name) {
                    var value = arguments[2] ? arguments[2] :
                        arguments[3] ? arguments[3] :
                            arguments[4] ? arguments[4] :
                                fillAttrs[name] ? name : "";
                    if (name != 'xe_uuid')
                        attrs.push({
                            name: name,
                            value: value,
                            escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
                        });
                    else
                        uuid = value
                });

                if (handler.start)
                    handler.start(tagName, uuid, attrs, unary);
            }
        }

        function parseEndTag(tag, tagName) {
            // If no tag name is provided, clean shop
            if (!tagName)
                var pos = 0;

            // Find the closest opened tag of the same type
            else
                for (var pos = stack.length - 1; pos >= 0; pos--)
                    if (stack[pos] == tagName)
                        break;

            if (pos >= 0) {
                // Close all the open elements, up the stack
                for (var i = stack.length - 1; i >= pos; i--)
                    if (handler.end)
                        handler.end(stack[i]);

                // Remove the open elements from the stack
                stack.length = pos;
            }
        }
    };

    this.HTMLtoXML = function (html) {
        var results = "";

        HTMLParser(html, {
            start: function (tag, attrs, unary) {
                results += "<" + tag;

                for (var i = 0; i < attrs.length; i++)
                    results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
                results += ">";
            },
            end: function (tag) {
                results += "</" + tag + ">";
            },
            chars: function (text) {
                results += text;
            },
            comment: function (text) {
                results += "<!--" + text + "-->";
            }
        });

        return results;
    };

    this.HTMLtoDOM = function (html, doc) {
        // There can be only one of these elements
        var one = makeMap("html,head,body,title");

        // Enforce a structure for the document
        var structure = {
            link: "head",
            base: "head"
        };

        if (!doc) {
            if (typeof DOMDocument != "undefined")
                doc = new DOMDocument();
            else if (typeof document != "undefined" && document.implementation && document.implementation.createDocument)
                doc = document.implementation.createDocument("", "", null);
            else if (typeof ActiveX != "undefined")
                doc = new ActiveXObject("Msxml.DOMDocument");

        } else
            doc = doc.ownerDocument ||
                doc.getOwnerDocument && doc.getOwnerDocument() ||
                doc;

        var elems = [],
            documentElement = doc.documentElement ||
                doc.getDocumentElement && doc.getDocumentElement();

        // If we're dealing with an empty document then we
        // need to pre-populate it with the HTML document structure
        if (!documentElement && doc.createElement) (function () {
            var html = doc.createElement("html");
            var head = doc.createElement("head");
            head.appendChild(doc.createElement("title"));
            html.appendChild(head);
            html.appendChild(doc.createElement("body"));
            doc.appendChild(html);
        })();

        // Find all the unique elements
        if (doc.getElementsByTagName)
            for (var i in one)
                one[i] = doc.getElementsByTagName(i)[0];

        // If we're working with a document, inject contents into
        // the body element
        var curParentNode = one.body;

        HTMLParser(html, {
            start: function (tagName, attrs, unary) {
                // If it's a pre-built element, then we can ignore
                // its construction
                if (one[tagName]) {
                    curParentNode = one[tagName];
                    if (!unary) {
                        elems.push(curParentNode);
                    }
                    return;
                }

                var elem = doc.createElement(tagName);

                for (var attr in attrs)
                    elem.setAttribute(attrs[attr].name, attrs[attr].value);

                if (structure[tagName] && typeof one[structure[tagName]] != "boolean")
                    one[structure[tagName]].appendChild(elem);

                else if (curParentNode && curParentNode.appendChild)
                    curParentNode.appendChild(elem);

                if (!unary) {
                    elems.push(elem);
                    curParentNode = elem;
                }
            },
            end: function (tag) {
                elems.length -= 1;

                // Init the new parentNode
                curParentNode = elems[elems.length - 1];
            },
            chars: function (text) {
                curParentNode.appendChild(doc.createTextNode(text));
            },
            comment: function (text) {
                // create comment node
            }
        });

        return doc;
    };

    function makeMap(str) {
        var obj = {}, items = str.split(",");
        for (var i = 0; i < items.length; i++)
            obj[items[i]] = true;
        return obj;
    }

})(this);


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map