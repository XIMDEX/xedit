(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.ts":
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/api */ "./src/app/core/api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


var Api = /** @class */ (function () {
    function Api() {
    }
    /****************** API ENDPOINTS ******************/
    Api.getMapperUrl = function () {
        return 'documents.mapper';
    };
    Api.getDocumentUrl = function () {
        return 'documents.get';
    };
    Api.getSaveUrl = function () {
        return 'documents.save';
    };
    Api.getResourceUrl = function () {
        return 'resources.image';
    };
    Api.getTreeUrl = function () {
        return 'resources.tree';
    };
    Api.getInfoNodeUrl = function () {
        return 'resources.get';
    };
    /****************** API METHODS ******************/
    Api.getMapper = function (http, url, params, successCallback, errorCallback) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return _core_api__WEBPACK_IMPORTED_MODULE_0__["default"].request(http, url, params, {}, headers, successCallback, errorCallback);
    };
    Api.getDocument = function (http, id, successCallback, errorCallback) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return _core_api__WEBPACK_IMPORTED_MODULE_0__["default"].request(http, this.getDocumentUrl(), { id: id }, {}, headers, successCallback, errorCallback);
    };
    Api.saveDocument = function (http, document, successCallback, errorCallback) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return _core_api__WEBPACK_IMPORTED_MODULE_0__["default"].request(http, this.getSaveUrl(), {}, document, headers, successCallback, errorCallback, {}, 'post');
    };
    Api.getTreeChildren = function (http, nodeId, type, successCallback, errorCallback, extra) {
        if (extra === void 0) { extra = {}; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return _core_api__WEBPACK_IMPORTED_MODULE_0__["default"].request(http, this.getTreeUrl(), { id: nodeId, type: type }, null, headers, successCallback, errorCallback, extra);
    };
    Api.getInfoNode = function (http, nodeId, type, successCallback, errorCallback, extra) {
        if (extra === void 0) { extra = {}; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var endpoint = nodeId;
        if (!nodeId.startsWith('http')) {
            endpoint = this.getInfoNodeUrl();
        }
        return _core_api__WEBPACK_IMPORTED_MODULE_0__["default"].request(http, endpoint, { id: nodeId, type: type }, null, headers, successCallback, errorCallback, extra);
    };
    return Api;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    enableTracing: true,
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{  }\"></ngx-loading>\n<simple-notifications [options]=\"{}\"></simple-notifications>\n<app-taskbar [ngClass]=\"{embebed: true}\"></app-taskbar>\n<app-editor [ngClass]=\"{embebed: false}\"></app-editor>\n<app-dam *ngIf=\"hasDam()\" [popup]=\"true\" [isOpen]=\"isOpen\" (openEmitter)=\"closeModal()\" \n    (onSelect)=\"handleSelect($event)\"></app-dam>\n<app-tree-modal></app-tree-modal>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: flex;\n  overflow: hidden;\n  flex-direction: column; }\n:host > main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/mappers/xedit */ "./src/app/core/mappers/xedit.ts");
/* harmony import */ var _services_dam_service_dam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dam-service/dam.service */ "./src/app/services/dam-service/dam.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(_editorService, _stateService, http, route, cdRef, _damService) {
        this._editorService = _editorService;
        this._stateService = _stateService;
        this.http = http;
        this.route = route;
        this.cdRef = cdRef;
        this._damService = _damService;
        this.title = 'app';
        this.isOpen = false;
    }
    /************************************** Life Cycle **************************************/
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isOpenSuscribe = this._damService.isOpen().subscribe(function (open) {
            _this.isOpen = open;
        });
        this.handleSelectSuscribe = this._damService.getOnSelect().subscribe(function (onSelect) {
            _this.handleSelect = onSelect;
        });
        this.loadingSuscribe = this._editorService.isLoading().subscribe(function (loading) {
            _this.loading = loading;
        });
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].BASE, window)) {
            // TODO Validate $xedit object
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getData()) && _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getData() !== '') {
                this.setDocument(_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getData());
            }
            else {
                this.getDocument(_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getDocument().id, Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('view', _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getDocument()) ? _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getDocument().view : null);
            }
        }
        else {
            this.route.queryParams.subscribe(function (_params) {
                var params = Object.assign({}, _params);
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(params['token[field]']) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(params['token[value]'])) {
                    console.log('Not authentication');
                }
                if (params.url === undefined || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(params.url)) {
                    console.error('API NO DISPONIBLE');
                }
                else {
                    _this._editorService.setLoading(true);
                    var url = params.url;
                    delete params.url;
                    var type = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('type', params) ? params.type : null;
                    delete params.type;
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(params['token[field]']) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(params['token[value]'])) {
                        params[params['token[field]']] = params['token[value]'];
                    }
                    delete params['token[field]'];
                    delete params['token[value]'];
                    _this.getMapper(url, params, type);
                }
            });
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.loadingSuscribe.unsubscribe();
        this.isOpenSuscribe.unsubscribe();
        this.handleSelectSuscribe.unsubscribe();
    };
    AppComponent.prototype.hasDam = function () {
        return _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getDam() === 'dam';
    };
    /************************************** Private Methods **************************************/
    AppComponent.prototype.getMapper = function (url, params, view) {
        var _this = this;
        var error = function () {
            console.log('error');
            _this._editorService.setLoading(false);
        };
        var success = function (result) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('status', result) && result.status === 0) {
                window['$xedit'] = result.response;
                _this.getDocument(params.id, view);
            }
            else {
                error();
                _this._editorService.setLoading(false);
            }
        };
        return _app_api__WEBPACK_IMPORTED_MODULE_8__["Api"].getMapper(this.http, url, params, success, error);
    };
    AppComponent.prototype.getDocument = function (id, view) {
        var _this = this;
        var error = function () {
            console.log('error');
            _this._editorService.setLoading(false);
        };
        var success = function (result) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('status', result) && result.status === 0) {
                _this.setDocument(result.response, view != null ? view : null);
            }
            else {
                error();
            }
        };
        this._editorService.setLoading(true);
        return _app_api__WEBPACK_IMPORTED_MODULE_8__["Api"].getDocument(this.http, id, success, error);
    };
    AppComponent.prototype.setDocument = function (nodes, view) {
        if (view === void 0) { view = null; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(view) || !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(view, ['wysiwyg', 'text'])) {
            view = 'wysiwyg';
        }
        this._editorService.createFile(nodes);
        this._stateService.setAvailableViews(['metadata', 'wysiwyg', 'text']);
        this._stateService.setCurrentView(view);
        this._editorService.setLoading(false);
    };
    AppComponent.prototype.closeModal = function () {
        this._damService.setIsOpen(false);
        this.cdRef.detectChanges();
    };
    AppComponent.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
        this.cdRef.detectChanges();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_6__["EditorService"], _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _services_dam_service_dam_service__WEBPACK_IMPORTED_MODULE_2__["DamService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var ng4_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-click-outside */ "./node_modules/ng4-click-outside/lib/index.js");
/* harmony import */ var ng4_click_outside__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_click_outside__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var app_elements_forms_dynform_dyn_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/elements/forms/dynform/dyn-form.module */ "./src/app/elements/forms/dynform/dyn-form.module.ts");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/angular2-draggable.es5.js");
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/index.js");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _pipes_inner_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @pipes/inner-html/safe-html.pipe */ "./src/app/pipes/inner-html/safe-html.pipe.ts");
/* harmony import */ var _pipes_debug_debug_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @pipes/debug/debug.pipe */ "./src/app/pipes/debug/debug.pipe.ts");
/* harmony import */ var _pipes_keys_keys_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @pipes/keys/keys.pipe */ "./src/app/pipes/keys/keys.pipe.ts");
/* harmony import */ var _pipes_url_url_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @pipes/url/url.pipe */ "./src/app/pipes/url/url.pipe.ts");
/* harmony import */ var _components_taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/taskbar/taskbar.component */ "./src/app/components/taskbar/taskbar.component.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _components_taskbar_properties_global_view_properties_global_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @components/taskbar/properties-global-view/properties-global-view.component */ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.ts");
/* harmony import */ var _components_editor_properties_area_properties_local_view_properties_local_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @components/editor/properties-area/properties-local-view/properties-local-view.component */ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.ts");
/* harmony import */ var _components_editor_views_wysiwyg_view_wysiwyg_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @components/editor/views/wysiwyg-view/wysiwyg-view.component */ "./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.ts");
/* harmony import */ var _components_editor_views_text_view_text_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @components/editor/views/text-view/text-view.component */ "./src/app/components/editor/views/text-view/text-view.component.ts");
/* harmony import */ var _components_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @components/context-menu/context-menu.component */ "./src/app/components/context-menu/context-menu.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_editor_properties_area_properties_area_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @components/editor/properties-area/properties-area.component */ "./src/app/components/editor/properties-area/properties-area.component.ts");
/* harmony import */ var _elements_forms_multi_input_multi_input_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @elements/forms/multi-input/multi-input.component */ "./src/app/elements/forms/multi-input/multi-input.component.ts");
/* harmony import */ var _elements_forms_multi_input_acordion_multi_input_acordion_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./elements/forms/multi-input-acordion/multi-input-acordion.component */ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.ts");
/* harmony import */ var _elements_forms_input_acordion_input_acordion_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./elements/forms/input-acordion/input-acordion.component */ "./src/app/elements/forms/input-acordion/input-acordion.component.ts");
/* harmony import */ var _elements_blocks_acordion_acordion_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./elements/blocks/acordion/acordion.component */ "./src/app/elements/blocks/acordion/acordion.component.ts");
/* harmony import */ var _elements_forms_button_button_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./elements/forms/button/button.component */ "./src/app/elements/forms/button/button.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _elements_forms_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./elements/forms/checkbox/checkbox.component */ "./src/app/elements/forms/checkbox/checkbox.component.ts");
/* harmony import */ var _components_taskbar_state_controller_state_controller_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/taskbar/state-controller/state-controller.component */ "./src/app/components/taskbar/state-controller/state-controller.component.ts");
/* harmony import */ var _elements_forms_listbox_listbox_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./elements/forms/listbox/listbox.component */ "./src/app/elements/forms/listbox/listbox.component.ts");
/* harmony import */ var _lib_dam__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../lib/dam */ "./src/lib/dam/index.ts");
/* harmony import */ var _services_dam_service_dam_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/dam-service/dam.service */ "./src/app/services/dam-service/dam.service.ts");
/* harmony import */ var _directives_mathjax_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./directives/mathjax.directive */ "./src/app/directives/mathjax.directive.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _elements_blocks_tree_modal_tree_modal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./elements/blocks/tree-modal/tree-modal.component */ "./src/app/elements/blocks/tree-modal/tree-modal.component.ts");
/* harmony import */ var _elements_blocks_tree_tree_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./elements/blocks/tree/tree.component */ "./src/app/elements/blocks/tree/tree.component.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _components_editor_views_metadata_view_metadata_view_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/editor/views/metadata-view/metadata-view.component */ "./src/app/components/editor/views/metadata-view/metadata-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_19__["TaskbarComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_20__["EditorComponent"],
                _components_editor_properties_area_properties_local_view_properties_local_view_component__WEBPACK_IMPORTED_MODULE_22__["PropertiesLocalViewComponent"],
                _components_taskbar_properties_global_view_properties_global_view_component__WEBPACK_IMPORTED_MODULE_21__["PropertiesGlobalViewComponent"],
                _components_editor_views_wysiwyg_view_wysiwyg_view_component__WEBPACK_IMPORTED_MODULE_23__["WysiwygViewComponent"],
                _components_editor_views_text_view_text_view_component__WEBPACK_IMPORTED_MODULE_24__["TextViewComponent"],
                _pipes_inner_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"],
                _pipes_url_url_pipe__WEBPACK_IMPORTED_MODULE_18__["UrlPipe"],
                _pipes_debug_debug_pipe__WEBPACK_IMPORTED_MODULE_16__["DebugPipe"],
                _pipes_keys_keys_pipe__WEBPACK_IMPORTED_MODULE_17__["KeysPipe"],
                _components_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_25__["ContextMenuComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_26__["BreadcrumbComponent"],
                _components_editor_properties_area_properties_area_component__WEBPACK_IMPORTED_MODULE_27__["PropertiesAreaComponent"],
                _elements_forms_multi_input_multi_input_component__WEBPACK_IMPORTED_MODULE_28__["MultiInputComponent"],
                _elements_forms_multi_input_acordion_multi_input_acordion_component__WEBPACK_IMPORTED_MODULE_29__["MultiInputAcordionComponent"],
                _elements_forms_input_acordion_input_acordion_component__WEBPACK_IMPORTED_MODULE_30__["InputAcordionComponent"],
                _elements_blocks_acordion_acordion_component__WEBPACK_IMPORTED_MODULE_31__["AcordionComponent"],
                _elements_forms_button_button_component__WEBPACK_IMPORTED_MODULE_32__["ButtonComponent"],
                _elements_forms_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_35__["CheckboxComponent"],
                _elements_forms_listbox_listbox_component__WEBPACK_IMPORTED_MODULE_37__["ListboxComponent"],
                _components_taskbar_state_controller_state_controller_component__WEBPACK_IMPORTED_MODULE_36__["StateControllerComponent"],
                _directives_mathjax_directive__WEBPACK_IMPORTED_MODULE_40__["MathjaxDirective"],
                _elements_blocks_tree_modal_tree_modal_component__WEBPACK_IMPORTED_MODULE_42__["TreeModalComponent"],
                _elements_blocks_tree_tree_component__WEBPACK_IMPORTED_MODULE_43__["TreeComponent"],
                _components_editor_views_metadata_view_metadata_view_component__WEBPACK_IMPORTED_MODULE_46__["MetadataViewComponent"],
            ],
            imports: [
                /* 3rd party components */
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_4__["AceEditorModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"].forRoot(),
                ng4_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_11__["AngularDraggableModule"],
                angular2_collapsible__WEBPACK_IMPORTED_MODULE_12__["CollapsibleModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_34__["SimpleNotificationsModule"].forRoot(),
                _lib_dam__WEBPACK_IMPORTED_MODULE_38__["DamModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_41__["TreeModule"].forRoot(),
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_44__["NgxSmartModalModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_45__["FontAwesomeModule"],
                app_elements_forms_dynform_dyn_form_module__WEBPACK_IMPORTED_MODULE_10__["DynFormModule"]
            ],
            providers: [
                _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_14__["EditorService"],
                _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_13__["StateService"],
                _services_dam_service_dam_service__WEBPACK_IMPORTED_MODULE_39__["DamService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <ng-container *ngFor=\"let section of breadcrumb; let i = index\">\n        <ng-template [ngIf]=\"(i + 1) < breadcrumb.length\" [ngIfElse]=\"last\">\n            <li (click)=\"changeSelection(section.key)\" (contextmenu)=\"onContextMenu($event, section.target)\">\n                {{ section.name }}\n                <i class=\"fas fa-chevron-right\"></i>\n            </li>\n        </ng-template>\n        <ng-template #last>\n            <li class=\"selected\" (contextmenu)=\"onContextMenu($event, section.target)\">\n                {{ section.name }}\n            </li>\n        </ng-template>\n    </ng-container>\n</ul>\n<context-menu #myContextMenu>\n    <ng-template *ngFor=\"let action of contextMenuActions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\" (execute)=\"action.click()\">\n        {{ action.html() }}\n    </ng-template>\n</context-menu>\n<img class=\"logo\" src=\"./assets/img/logo_xim.png\" alt=\"Ximdex logo\" />"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  position: relative;\n  z-index: 5;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.57);\n  min-height: 30px;\n  max-height: 30px;\n  background-color: #edeff2;\n  font: normal 14px \"Lato\", sans-serif; }\n:host > ul {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    list-style: none;\n    padding: 5px 0;\n    margin: 0; }\n:host > ul > li {\n      margin: auto 5px;\n      text-transform: capitalize;\n      color: #3f4946;\n      transition: color 0.3s ease-in-out; }\n:host > ul > li > i.fas {\n        color: #3f4946;\n        margin: 0 0 0 5px; }\n:host > ul > li:not(.selected):hover {\n        cursor: pointer;\n        color: #3a9e8f; }\n:host > ul > li.selected {\n        color: #3a9e8f; }\n:host > img.logo {\n    margin: auto 0 auto auto;\n    height: 30px;\n    width: auto; }\n"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _models_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dom */ "./src/app/models/dom.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _app_models_node__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/models/node */ "./src/app/models/node.ts");
/* harmony import */ var _app_xedit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/xedit */ "./src/app/xedit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(_editorService, _elementRef, contextMenuService, _notification) {
        this._editorService = _editorService;
        this._elementRef = _elementRef;
        this.contextMenuService = contextMenuService;
        this._notification = _notification;
        this.selectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuActions = [];
        this.breadcrumb = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._editorService.getCurrentNode().subscribe(function (currentNode) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode)) {
                _this.breadcrumb = _this.getBreadCrumb(currentNode.getSection());
            }
        });
    };
    BreadcrumbComponent.prototype.getBreadCrumb = function (currentNode, rootTag, path) {
        if (rootTag === void 0) { rootTag = 'xedit'; }
        if (path === void 0) { path = []; }
        var section = null;
        var key = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__["XeditMapper"].TAG_SECTION_TYPE)) &&
            !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(key = currentNode.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__["XeditMapper"].TAG_UUID))) {
            var node = new _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"](currentNode.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__["XeditMapper"].TAG_UUID), currentNode);
            path.unshift({
                key: key,
                name: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionLang(node.getSchema(), _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].getLang()),
                target: node.getTarget()
            });
        }
        return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode) || Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode.parentNode) || Object(ramda__WEBPACK_IMPORTED_MODULE_1__["equals"])(currentNode.nodeName.toLowerCase(), rootTag) ?
            path : this.getBreadCrumb(currentNode.parentNode, rootTag, path);
    };
    BreadcrumbComponent.prototype.changeSelection = function (elementKey) {
        this.selectNode.emit(elementKey);
    };
    /************************************** MENU *****************************************/
    BreadcrumbComponent.prototype.onContextMenu = function ($event, item) {
        var _this = this;
        var node = this._editorService.parseToNode(item);
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(node) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(node.getSchema())) {
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
            var nodeTemplate = _utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].html2json(strTemplate, false);
            _models_dom__WEBPACK_IMPORTED_MODULE_4__["DOM"].element(currentNode).insertNode(_utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].json2html(_utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].addWrapJson(nodeTemplate)), afterNode, true);
            _this._editorService.addNodeToArea(node, nodeTemplate, child);
        };
        // Childs
        actions.children.forEach(function (action) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('template' in action) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(action.template)) {
                contextMenuActionsChild.push(_this.createAction(function (i) { return 'Añadir hijo ' + action.name; }, function (evt) { return clickFunc(node.getSection(), node.getSection().childNodes[node.getSection().childNodes.length], action.template, true); }, true));
            }
        });
        // Siblings
        actions.siblings.forEach(function (action) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('template' in action) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(action.template)) {
                contextMenuActionsSiblings.push(_this.createAction(function (i) { return 'Añadir hermano ' + action.name; }, function (evt) { return clickFunc(node.getSection().parentNode, node.getSection().nextSibling, action.template); }, true));
            }
        });
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(contextMenuActions, contextMenuActionsChild);
        // Divider
        if (contextMenuActionsChild.length > 0 && contextMenuActionsSiblings.length > 0) {
            contextMenuActions.push(this.createAction(null, null, true, true));
        }
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(contextMenuActions, contextMenuActionsSiblings);
        contextMenuActions.push(this.createAction(null, null, true, true));
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(contextMenuActions, this.defaultActions(node));
        this.contextMenuActions = contextMenuActions;
    };
    BreadcrumbComponent.prototype.defaultActions = function (node) {
        var _this = this;
        var actions = [];
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.copyAction) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(node)) {
            // Coger node del json --> Cambiar todos los uid del padre e hijos
            actions.push(this.createAction(function (i) { return 'Paste'; }, function (evt) {
                var sectionNode = new _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"](_this.copyAction.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__["XeditMapper"].TAG_UUID), _this.copyAction);
                if (_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"].isInsertedNodeValid(node, sectionNode)) {
                    var template = _this._editorService.getJsonNodesByPath(sectionNode);
                    template = _utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].json2html(template, true, true, true);
                    _models_dom__WEBPACK_IMPORTED_MODULE_4__["DOM"].element(node.getSection())
                        .insertNode(template, sectionNode.getTarget().childNodes[sectionNode.getTarget().childNodes.length], true);
                    _this._editorService.addNodeToArea(node, _utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].html2json(template, false), true);
                    _this._notification.info('Componente insertado', 'El componente ha sido pegado con éxito.', _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
                }
                else {
                    _this._notification.error('Estructura inválida', 'El componente pegado no es soportado.', _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
                }
            }, true));
        }
        actions.push(this.createAction(function (i) { return 'Copy'; }, function (evt) {
            _this.copyAction = null;
            _this.copyAction = node.getSection();
        }, true));
        actions.push(this.createAction(function (i) { return 'Delete'; }, function (evt) {
            _this._editorService.removeNode(node);
            _models_dom__WEBPACK_IMPORTED_MODULE_4__["DOM"].element(node.getSection()).deleteNode();
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
        actions.name = _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionLang(node.getSchema(), _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].getLang());
        // Get childs
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('actions', node.getSchema()) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(node.getSchema().actions)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('children', node.getSchema().actions)) {
                var children = node.getSchema().actions.children;
                children.map(function (child) {
                    var schema = node.getSchemaNode()[child];
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(schema)) {
                        actions.children.push({
                            name: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionLang(schema, _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].getLang()),
                            template: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionTemplate(schema)
                        });
                    }
                });
            }
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('siblings', node.getSchema().actions)) {
                var siblings = node.getSchema().actions.siblings;
                siblings.map(function (sibling) {
                    var schema = node.getSchemaNode()[sibling];
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(schema)) {
                        actions.siblings.push({
                            name: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionLang(schema, _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].getLang()),
                            template: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionTemplate(schema)
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BreadcrumbComponent.prototype, "selectNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuComponent"])
    ], BreadcrumbComponent.prototype, "basicMenu", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/context-menu/context-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/context-menu/context-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  context-menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/context-menu/context-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/context-menu/context-menu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/context-menu/context-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/context-menu/context-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent() {
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
    };
    ContextMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-context-menu',
            template: __webpack_require__(/*! ./context-menu.component.html */ "./src/app/components/context-menu/context-menu.component.html"),
            styles: [__webpack_require__(/*! ./context-menu.component.scss */ "./src/app/components/context-menu/context-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <section>\n        <!-- METADATA VIEW -->\n        <app-metadata-view *ngIf=\"showComponent('metadata')\">\n        </app-metadata-view>\n        <!-- END METADATA VIEW-->\n        <!-- WYSIWYG VIEW -->\n        <app-wysiwyg-view (onEditorKeyup)=\"keyupHandlerFunction($event)\" (selectNode)=\"setCurrentNode($event)\" *ngIf=\"showComponent('wysiwyg')\">\n        </app-wysiwyg-view>\n        <!-- END WYSIWYG VIEW -->\n\n        <!-- TEXT VIEW -->\n        <app-text-view *ngIf=\"showComponent('text')\"> </app-text-view>\n        <!-- END TEXT VIEW -->\n    </section>\n    <!-- BREADCRUMBS -->\n    <app-breadcrumb (selectNode)=\"setCurrentNode($event)\"></app-breadcrumb>\n    <!-- END BREADCRUMBS -->\n</main>\n<app-properties-area ngDraggable *ngIf=\"showComponent('wysiwyg')\" [(configs)]=\"cConfigs\" (updated)=\"saveClipboardConfigs($event)\">\n</app-properties-area>"

/***/ }),

/***/ "./src/app/components/editor/editor.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  height: 0; }\n:host > main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    position: relative;\n    z-index: 5;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n:host > main > section {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 2;\n      position: relative;\n      z-index: 1;\n      height: 0; }\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var html_tag_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-tag-validator */ "./node_modules/html-tag-validator/index.js");
/* harmony import */ var html_tag_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_tag_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/configs/clipboardConfigs */ "./src/app/models/configs/clipboardConfigs.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditorComponent = /** @class */ (function () {
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
        this.clipboardConfigs = new _models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_4__["ClipboardConfigs"]();
    };
    EditorComponent.prototype.ngAfterViewChecked = function () {
        this.cConfigs = this.clipboardConfigs.getConfigs();
    };
    EditorComponent.prototype.setCurrentNode = function (uuid) {
        var node = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(uuid)) {
            var element = this._elementRef.nativeElement.querySelector("[" + _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_3__["XeditMapper"].TAG_UUID + "='" + uuid + "']");
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(element)) {
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
        return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["equals"])(view, this.currentView);
    };
    EditorComponent.prototype.saveClipboardConfigs = function (evt) {
        this.cConfigs = evt;
        this.clipboardConfigs.setConfigs(evt);
    };
    /**
     *
     */
    EditorComponent.executeIfvalidateHtmlTags = function (content, callback, errorCallback, options) {
        if (options === void 0) { options = {}; }
        options = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["merge"])({
            settings: {
                format: 'html',
            },
            attributes: {
                '_': {
                    mixed: /.*/
                }
            }
        }, options);
        html_tag_validator__WEBPACK_IMPORTED_MODULE_2___default()(content, options, function (err, ast) {
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
    /**
     *
     */
    EditorComponent.checkIfContentChange = function (currentFile, file) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentFile) || (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(file) && currentFile.getState().getHash() !== file.getState().getHash());
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/components/editor/editor.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_state_service_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"], _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-area.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-area.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div>\n        <span>{{ nodeName }}</span>\n    </div>\n    <aside (click)=\"toggleMenu()\">\n        <i [ngClass]=\"{'fa': true, 'fa-minus-square': isOpen, 'fa-window-maximize': !isOpen}\"></i>\n    </aside>\n</header>\n<div id='toolbar'>\n</div>\n<div>\n    <ng-container *ngFor=\"let value of configs; let i = index;\">\n        <app-listbox [placeholder]=\"value.name\" [selected]=\"value.selected\" [options]=\"value.options\" (changeValue)=\"updateClipboard($event, value)\"></app-listbox>\n    </ng-container>\n</div>\n<collapsible-list-item>\n    <collapsible-header class=\"waves-effect\" #toggleCollapsible>\n    </collapsible-header>\n    <collapsible-body [expanded]=\"isOpen\">\n        <app-properties-local *ngIf=\"'local'===selectedView\"></app-properties-local>\n    </collapsible-body>\n</collapsible-list-item>"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-area.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-area.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  z-index: 999;\n  position: absolute;\n  width: 200px;\n  background-color: #e1e4e6;\n  overflow: hidden;\n  right: 15px;\n  top: 60px;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n:host header {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n    position: relative;\n    display: flex;\n    height: 22px;\n    background-color: #3a9e8f;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n:host header > div {\n      padding: 2px 5px;\n      flex-grow: 2;\n      color: #edeff2; }\n:host header > aside {\n      padding: 2px 5px; }\n:host header > aside > i.fa {\n        color: #edeff2; }\n:host > #tabs {\n    display: flex;\n    flex-direction: row;\n    background-color: #e1e4e6;\n    font: 14px;\n    text-transform: uppercase;\n    font-size: 12px;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n:host > #tabs > div {\n      box-sizing: border-box;\n      height: 30px;\n      padding: 0 10px;\n      line-height: 30px;\n      border-bottom: 2px solid transparent;\n      color: #959595;\n      transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n      cursor: pointer; }\n:host > #tabs > div:hover {\n        border-bottom-color: #44c4b1; }\n:host > #tabs > div.selected {\n        border-bottom-color: #3a9e8f;\n        color: #1e574e; }\n:host > collapsible-list-item > collapsible-header {\n    display: none; }\n:host > collapsible-list-item > collapsible-body {\n    padding: 0;\n    margin: 0;\n    border-bottom: 0;\n    padding-bottom: 0px;\n    background-color: #edeff2; }\n"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-area.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-area.component.ts ***!
  \********************************************************************************/
/*! exports provided: PropertiesAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesAreaComponent", function() { return PropertiesAreaComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertiesAreaComponent = /** @class */ (function () {
    function PropertiesAreaComponent(_editorService, cdr) {
        this._editorService = _editorService;
        this.cdr = cdr;
        this.availablesViews = [
            'local'
        ];
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeName = '';
        this.isOpen = false;
        this.selectedView = 'local';
        this.start = true;
    }
    PropertiesAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._editorService.getCurrentNode().subscribe(function (currentNode) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(currentNode)) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleCollapsible'),
        __metadata("design:type", angular2_collapsible__WEBPACK_IMPORTED_MODULE_3__["CollapsibleHeaderComponent"])
    ], PropertiesAreaComponent.prototype, "collapsible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], PropertiesAreaComponent.prototype, "configs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PropertiesAreaComponent.prototype, "updated", void 0);
    PropertiesAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-properties-area',
            template: __webpack_require__(/*! ./properties-area.component.html */ "./src/app/components/editor/properties-area/properties-area.component.html"),
            styles: [__webpack_require__(/*! ./properties-area.component.scss */ "./src/app/components/editor/properties-area/properties-area.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PropertiesAreaComponent);
    return PropertiesAreaComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"currentNode != null\">\n    <ng-container *ngFor=\"let group of currentProperties | keys\">\n        <app-acordion [title]='group' [className]=\"'form'\">\n            <ng-container [ngSwitch]=\"group\">\n                <ng-container *ngSwitchCase=\"'style'\">\n                    <app-multi-input-acordion [values]=\"currentProperties[group]\" actionText=\"Add new style\" (changeValue)=\"changeStyle($event)\"></app-multi-input-acordion>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"'class'\">\n                    <app-input-acordion [values]=\"currentProperties[group]\" actionText=\"Add new class\" (changeValue)=\"changeClass($event)\"></app-input-acordion>\n                </ng-container>\n                <ng-container *ngSwitchDefault>\n                    <div id=\"xe-center-acordion\">\n                        <app-multi-input *ngFor=\"let value of currentProperties[group]\" [data]=\"value\" (changeValue)=\"cnageProperty($event)\"></app-multi-input>\n                    </div>\n                </ng-container>\n            </ng-container>\n        </app-acordion>\n    </ng-container>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  background-color: #edeff2; }\n"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PropertiesLocalViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesLocalViewComponent", function() { return PropertiesLocalViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertiesLocalViewComponent = /** @class */ (function () {
    function PropertiesLocalViewComponent(_editorService) {
        this._editorService = _editorService;
        this.propertiesGroupsActions = {
            class: function (value) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) || Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(value)) {
                    return [];
                }
                return value.split(' ');
            },
            style: function (value) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) || Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(value)) {
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
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode)) {
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
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(property, _this.propertiesGroupsActions)) {
                propertyValue = _this.propertiesGroupsActions[property](propertyValue);
            }
            if (_this.propertiesGroups.indexOf(property) >= 0) {
                props[property] = propertyValue;
                return;
            }
            var json = {};
            json[property] = propertyValue;
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(_this.defaultProperty, props)) {
                props[_this.defaultProperty].push(json);
                return;
            }
            props[_this.defaultProperty] = [json];
        });
        return props;
    };
    PropertiesLocalViewComponent.prototype.changeStyle = function (value) {
        var result = value.map(function (data) {
            var key = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["keys"])(data)[0];
            return key + ":" + data[key] + ";";
        });
        this.changePropertyValue('style', result.join(' '));
    };
    PropertiesLocalViewComponent.prototype.changeClass = function (value) {
        this.changePropertyValue('class', value.join(' '));
    };
    PropertiesLocalViewComponent.prototype.cnageProperty = function (_a) {
        var newValue = _a.new;
        var property = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["keys"])(newValue)[0];
        this.changePropertyValue(property, newValue[property]);
        /*const property = keys(value)[0];
        this.changePropertyValue(property, value[property]);*/
    };
    PropertiesLocalViewComponent.prototype.changePropertyValue = function (property, value) {
        // Modify file with new changes
        var elementContent = this.file.getState().getContent();
        var editContent = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["reduce"])(function (acc, _value) {
            return acc.child[_value];
        }, elementContent[this.currentNode.getAreaId()].content, this.currentNode.getPath());
        var hasAttr = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["has"])('attr');
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties-local',
            template: __webpack_require__(/*! ./properties-local-view.component.html */ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.html"),
            styles: [__webpack_require__(/*! ./properties-local-view.component.scss */ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"]])
    ], PropertiesLocalViewComponent);
    return PropertiesLocalViewComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/views/metadata-view/metadata-view.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/editor/views/metadata-view/metadata-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"metadata-form\">\n  <app-dyn-tabform\n  [schema]=\"schema\"\n  [fetchUrl]=\"'http://ximdex.lab14/'\"\n  [questionClass]=\"'metadata-question'\"\n  [forceTabs]=\"true\"\n  (sendForm)=\"formResult($event)\"\n  ></app-dyn-tabform>\n</form>"

/***/ }),

/***/ "./src/app/components/editor/views/metadata-view/metadata-view.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/editor/views/metadata-view/metadata-view.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#metadata-form {\n  margin-top: 14px; }\n"

/***/ }),

/***/ "./src/app/components/editor/views/metadata-view/metadata-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/editor/views/metadata-view/metadata-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MetadataViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataViewComponent", function() { return MetadataViewComponent; });
/* harmony import */ var app_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetadataViewComponent = /** @class */ (function () {
    function MetadataViewComponent(_edService) {
        this._edService = _edService;
        this.tabs = [];
        this.payload = {};
        this.meta = {};
        this.meta = _edService.getUpdatedDocument();
    }
    MetadataViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metaMap(this.meta);
        this._edService.getFile().subscribe(function (file) {
            _this.file = file;
            if (file != null) {
                file["metadata"] = _this.payload;
            }
        });
    };
    MetadataViewComponent.prototype.formResult = function (event) {
        this.payload = this.adaptResponse(event);
        this.file["metadata"] = this.payload;
        this._edService.setFile(this.file);
    };
    MetadataViewComponent.prototype.adaptResponse = function (response) {
        var result = {};
        Object.keys(response).forEach(function (key) {
            var ids = key.split("-");
            var group_id = ids[0];
            var meta_id = ids[1];
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])(group_id, result)) {
                result[group_id] = {};
            }
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(response[key])) {
                result[group_id][meta_id] = response[key];
            }
        });
        return result;
    };
    MetadataViewComponent.prototype.mapTab = function (meta) {
        var sections = this.mapSections(meta.groups);
        return {
            title: meta.name,
            sections: sections
        };
    };
    MetadataViewComponent.prototype.mapTabs = function (metas) {
        for (var _i = 0, _a = Object.keys(metas); _i < _a.length; _i++) {
            var key = _a[_i];
            this.tabs.push(this.mapTab(metas[key]));
        }
    };
    MetadataViewComponent.prototype.mapSections = function (groups) {
        var _this = this;
        var sections = groups.map(function (group) {
            var fields = _this.mapFields(group.metadata, group.id);
            return {
                title: group.name,
                fields: fields
            };
        });
        return sections;
    };
    MetadataViewComponent.prototype.mapFields = function (metadata, group_id) {
        var fields = metadata.map(function (metafield) {
            return {
                object: {
                    realName: group_id + "-" + metafield.id,
                    key: group_id + "-" + metafield.id,
                    label: metafield.name,
                    order: metafield.id,
                    val: metafield.value,
                    required: !!metafield.required,
                    readonly: !!metafield.readonly
                },
                type: metafield.type
            };
        });
        return fields;
    };
    MetadataViewComponent.prototype.metaMap = function (meta) {
        this.mapTabs(meta.metas);
        this.schema = {
            name: "xedit_meta",
            title: "Metadata",
            api: false,
            tabs: this.tabs
        };
    };
    MetadataViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-metadata-view",
            template: __webpack_require__(/*! ./metadata-view.component.html */ "./src/app/components/editor/views/metadata-view/metadata-view.component.html"),
            styles: [__webpack_require__(/*! ./metadata-view.component.scss */ "./src/app/components/editor/views/metadata-view/metadata-view.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_0__["EditorService"]])
    ], MetadataViewComponent);
    return MetadataViewComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/views/text-view/text-view.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/editor/views/text-view/text-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <p *ngIf=\"!isHtmlValid\" style=\"color:rgb(233, 113, 113)\">HTML INVÁLIDO</p>\n</div>\n\n<div id=\"tabs\">\n    <ng-container *ngFor=\"let editorNode of editorNodes; let i = index\">\n        <div [ngClass]=\"{selected: (openEditor.id === editorNode.id)}\" *ngIf=\"openEditor.id === editorNode.id; else actionTab\">\n            {{ editorNode.title }}\n        </div>\n        <ng-template #actionTab>\n            <div [ngClass]=\"{selected: (openEditor.id === editorNode.id)}\" (click)=\"changeView(editorNode, i)\">\n                {{ editorNode.title }}\n            </div>\n        </ng-template>\n    </ng-container>\n</div>\n\n<ace-editor #aceEditor [text]=\"getRenderContent()\" id=\"getId()\" [durationBeforeCallback]=500 [autoUpdateContent]=\"reloadAceEditor\"\n    [readOnly]=\"isReadOnly()\" [theme]=\"'dreamweaver'\" [mode]=\"'html'\" [ngStyle]=\"styleMode\"></ace-editor>"

/***/ }),

/***/ "./src/app/components/editor/views/text-view/text-view.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/editor/views/text-view/text-view.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  background-color: #fcfcfc;\n  height: 100%;\n  display: block; }\n:host > #tabs {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: flex;\n    flex-direction: row;\n    background-color: #e1e4e6;\n    font: 14px;\n    text-transform: uppercase;\n    font-size: 12px;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);\n    position: relative;\n    z-index: 5; }\n:host > #tabs > div {\n      box-sizing: border-box;\n      height: 30px;\n      padding: 0 10px;\n      line-height: 30px;\n      border-bottom: 2px solid transparent;\n      color: #959595;\n      transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n      cursor: pointer; }\n:host > #tabs > div:hover {\n        border-bottom-color: #44c4b1; }\n:host > #tabs > div.selected {\n        border-bottom-color: #3a9e8f;\n        color: #1e574e; }\n:host > ace-editor {\n    position: relative;\n    z-index: 3; }\n.ace_static_highlight {\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;\n  font-size: 12px;\n  white-space: pre-wrap; }\n.ace_static_highlight .ace_gutter {\n  width: 2em;\n  text-align: right;\n  padding: 0 3px 0 0;\n  margin-right: 3px; }\n.ace_static_highlight.ace_show_gutter .ace_line {\n  padding-left: 2.6em; }\n.ace_static_highlight .ace_line {\n  position: relative; }\n.ace_static_highlight .ace_gutter-cell {\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute; }\n.ace_static_highlight .ace_gutter-cell:before {\n  content: counter(ace_line, decimal);\n  counter-increment: ace_line; }\n.ace_static_highlight {\n  counter-reset: ace_line; }\n.ace-chrome .ace_gutter {\n  background: #ebebeb;\n  color: #333;\n  overflow: hidden; }\n.ace-chrome .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8; }\n.ace-chrome {\n  background-color: #FFFFFF;\n  color: black; }\n.ace-chrome .ace_cursor {\n  color: black; }\n.ace-chrome .ace_invisible {\n  color: #bfbfbf; }\n.ace-chrome .ace_constant.ace_buildin {\n  color: #5848f6; }\n.ace-chrome .ace_constant.ace_language {\n  color: #585cf6; }\n.ace-chrome .ace_constant.ace_library {\n  color: #06960e; }\n.ace-chrome .ace_invalid {\n  background-color: #990000;\n  color: white; }\n.ace-chrome .ace_support.ace_function {\n  color: #3c4c72; }\n.ace-chrome .ace_support.ace_constant {\n  color: #06960e; }\n.ace-chrome .ace_support.ace_type,\n.ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {\n  color: #6d79de; }\n.ace-chrome .ace_variable.ace_parameter {\n  font-style: italic;\n  color: #FD971F; }\n.ace-chrome .ace_keyword.ace_operator {\n  color: #687687; }\n.ace-chrome .ace_comment {\n  color: #236e24; }\n.ace-chrome .ace_comment.ace_doc {\n  color: #236e24; }\n.ace-chrome .ace_comment.ace_doc.ace_tag {\n  color: #236e24; }\n.ace-chrome .ace_constant.ace_numeric {\n  color: mediumblue; }\n.ace-chrome .ace_variable {\n  color: #318495; }\n.ace-chrome .ace_xml-pe {\n  color: #68685b; }\n.ace-chrome .ace_entity.ace_name.ace_function {\n  color: #0000A2; }\n.ace-chrome .ace_heading {\n  color: #0c07ff; }\n.ace-chrome .ace_list {\n  color: #b90690; }\n.ace-chrome .ace_marker-layer .ace_selection {\n  background: #b5d5ff; }\n.ace-chrome .ace_marker-layer .ace_step {\n  background: #fcff00; }\n.ace-chrome .ace_marker-layer .ace_stack {\n  background: #a4e565; }\n.ace-chrome .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid silver; }\n.ace-chrome .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07); }\n.ace-chrome .ace_gutter-active-line {\n  background-color: #dcdcdc; }\n.ace-chrome .ace_marker-layer .ace_selected-word {\n  background: #fafaff;\n  border: 1px solid #c8c8fa; }\n.ace-chrome .ace_storage,\n.ace-chrome .ace_keyword,\n.ace-chrome .ace_meta.ace_tag {\n  color: #930f80; }\n.ace-chrome .ace_string.ace_regex {\n  color: red; }\n.ace-chrome .ace_string {\n  color: #1A1AA6; }\n.ace-chrome .ace_entity.ace_other.ace_attribute-name {\n  color: #994409; }\n.ace-chrome .ace_indent-guide {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y; }\n"

/***/ }),

/***/ "./src/app/components/editor/views/text-view/text-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/editor/views/text-view/text-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: TextViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextViewComponent", function() { return TextViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pretty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pretty */ "./node_modules/pretty/index.js");
/* harmony import */ var pretty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pretty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var ng2_ace_editor_src_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-ace-editor/src/component */ "./node_modules/ng2-ace-editor/src/component.js");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var brace_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! brace/index */ "./node_modules/brace/index.js");
/* harmony import */ var brace_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(brace_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var brace_theme_dreamweaver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! brace/theme/dreamweaver */ "./node_modules/brace/theme/dreamweaver.js");
/* harmony import */ var brace_theme_dreamweaver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(brace_theme_dreamweaver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var brace_mode_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! brace/mode/html */ "./node_modules/brace/mode/html.js");
/* harmony import */ var brace_mode_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(brace_mode_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var brace_snippets_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! brace/snippets/html */ "./node_modules/brace/snippets/html.js");
/* harmony import */ var brace_snippets_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(brace_snippets_html__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! brace/ext/language_tools */ "./node_modules/brace/ext/language_tools.js");
/* harmony import */ var brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! brace/ext/searchbox */ "./node_modules/brace/ext/searchbox.js");
/* harmony import */ var brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TextViewComponent = /** @class */ (function () {
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
    TextViewComponent.prototype.getId = function () {
        return this.openEditor.hasOwnProperty('id') ? this.openEditor['id'] : null;
    };
    TextViewComponent.prototype.isReadOnly = function () {
        return this.openEditor.hasOwnProperty('editable') && !this.openEditor['editable'];
    };
    TextViewComponent.prototype.getRenderContent = function () {
        return this.openEditor.hasOwnProperty('renderContent') ? this.openEditor['renderContent'] : '';
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
                renderContent: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, node.content) ? node.content : pretty__WEBPACK_IMPORTED_MODULE_1___default()(_utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].json2html(node.content, false, false)),
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
            if (_editor.curOp && _editor.curOp.command.name) { // Only if is user trigger event
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aceEditor'),
        __metadata("design:type", ng2_ace_editor_src_component__WEBPACK_IMPORTED_MODULE_3__["AceEditorComponent"])
    ], TextViewComponent.prototype, "editor", void 0);
    TextViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-view',
            template: __webpack_require__(/*! ./text-view.component.html */ "./src/app/components/editor/views/text-view/text-view.component.html"),
            styles: [__webpack_require__(/*! ./text-view.component.scss */ "./src/app/components/editor/views/text-view/text-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"], _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], TextViewComponent);
    return TextViewComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/api/Commands.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/api/Commands.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Dialog.ts");

var register = function (editor, getInfo, callback) {
    editor.addCommand('mceDam', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, 'image', getInfo, callback);
    });
    editor.addCommand('mceDamLink', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, 'link', getInfo, callback);
    });
    editor.addCommand('mceDamVideo', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, 'video', getInfo, callback);
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    register: register,
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/Dam.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/Dam.ts ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");


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
    return VALID_TAGS.includes(tag) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(val) && tag === TAG_BY_TYPE[type];
}
var getId = function (editor, type) {
    var selectedNode = editor.selection.getNode();
    var tag = selectedNode.tagName.toLowerCase();
    var val = editor.dom.getAttrib(selectedNode, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK);
    if (type === 'video') {
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
    return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(attr) ? (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(attribute, defaultValues) ? defaultValues[attribute] : '') : attr;
};
var getUrl = function (editor, nodeId) {
    var resourceUrl = editor.getParam('dam_url', editor.documentBaseUrl);
    var url = resourceUrl + nodeId;
    if (resourceUrl instanceof Function) {
        url = resourceUrl(nodeId);
    }
    if (((/^(f|ht)tps?:\/\//i).test(nodeId))) {
        url = nodeId;
    }
    return url;
};
var createHtmlVideo = function (text, resource) {
    var height = 'height' in resource && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(resource['height']) ? resource['height'] : '100%';
    var width = 'width' in resource && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(resource['width']) ? resource['width'] : '100%';
    // text = `<video xe_link="${resource['xe_link']}" lingkwidth="${width}" height="${height}" controls>`;
    text = "<source src=\"" + resource['xe_link'] + "\" type=\"video/mp4\"/>Your browser does not support the video tag.";
    // text += `</video>`;
    resource['width'] = "" + width;
    resource['height'] = "" + height;
    resource['controls'] = '';
    return [text, resource];
};
var insert = function (editor, nodeId, type, attributes) {
    var _a;
    var selectedNode = editor.selection.getNode();
    var tag = selectedNode.tagName.toLowerCase();
    var val = editor.dom.getAttrib(selectedNode, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK);
    var hasResource = hasValidResource(tag, val, type);
    var url = getUrl(editor, nodeId);
    if (hasResource) {
        selectedNode.setAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK, nodeId);
        selectedNode.setAttribute(ATTR_BY_TAG[tag], url);
        ATTRS_BY_TAG[tag].forEach(function (key) {
            selectedNode.setAttribute(key, attributes[key]);
        });
    }
    else {
        // editor.focus();
        // editor.selection.collapse(true);
        tag = TAG_BY_TYPE[type];
        var resource_1 = {
            xe_link: nodeId
        };
        ATTRS_BY_TAG[tag].forEach(function (key) {
            resource_1[key] = attributes[key];
        });
        resource_1[ATTR_BY_TAG[tag]] = url;
        var text = '';
        if (type === 'link') {
            if (!hasResource) {
                text = editor.selection.getContent();
            }
            else {
                text = resource_1['title'];
            }
        }
        else if (type === 'video') {
            _a = createHtmlVideo(text, resource_1), text = _a[0], resource_1 = _a[1];
            tag = 'video';
        }
        editor.execCommand('mceInsertContent', false, editor.dom.createHTML(tag, resource_1, text));
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    isValidNodeId: isValidNodeId,
    getId: getId,
    getAttribute: getAttribute,
    insert: insert
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/FilterContent.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/FilterContent.ts ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
    setup: setup
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Buttons.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Buttons.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
    register: register
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Dialog.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Dialog.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Dam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Dam */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/Dam.ts");
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
    if (!_core_Dam__WEBPACK_IMPORTED_MODULE_0__["default"].isValidNodeId(newId)) {
        editor.windowManager.alert('El enlace elegido no es válido');
        return true;
    }
    else {
        _core_Dam__WEBPACK_IMPORTED_MODULE_0__["default"].insert(editor, newId, type, extra);
        return false;
    }
};
var open = function (editor, type, getInfo, callback) {
    var currentId = _core_Dam__WEBPACK_IMPORTED_MODULE_0__["default"].getId(editor, type);
    var attributes = {};
    for (var _i = 0, _a = Object.keys(ATTRS_BY_TYPE[type]); _i < _a.length; _i++) {
        var attr = _a[_i];
        attributes[attr] = _core_Dam__WEBPACK_IMPORTED_MODULE_0__["default"].getAttribute(editor, attr);
    }
    var save = function (e) {
        var newNodeId = e.data.nodeId;
        var extra = {};
        for (var _i = 0, _a = Object.keys(ATTRS_BY_TYPE[type]); _i < _a.length; _i++) {
            var key = _a[_i];
            extra[key] = e.data[key];
        }
        if (insertDam(editor, newNodeId, type, extra)) {
            e.preventDefault();
        }
    };
    // function openTree(evt, windowM, pathIds) {
    //     window['treeModal']
    //         .openModal('modal-1', type, pathIds)
    //         .then(selectedId => {
    //             Api.getInfoNode(http, selectedId, type, setData, null, null);
    //         })
    //         .catch(err => console.log(err));
    // }
    function setData(result, extra) {
        var id = result && result.nodeid ? result.nodeid : '';
        var name = result && result.name ? result.name : '';
        var path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = "<span title=\"" + path + "\">" + path + "<span/>";
        }
        document.getElementById('dam-nodeId')['value'] = id;
        document.getElementById('dam-name')['innerHTML'] = name;
        document.getElementById('dam-path')['innerHTML'] = path;
    }
    function showWManager(result, _a) {
        var ed = _a.editor;
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
                    onclick: function (e) { return callback(e, ed.windowManager, type, pathIds, setData); },
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
        for (var _i = 0, _b = Object.keys(ATTRS_BY_TYPE[type]); _i < _b.length; _i++) {
            var key = _b[_i];
            var obj = ATTRS_BY_TYPE[type][key];
            obj['value'] = attributes[key];
            form.body.push(obj);
        }
        ed.windowManager.open(form);
    }
    showWManager(null, { editor: editor });
    if (currentId && !(/^(f|ht)tps?:\/\//i).test(currentId)) {
        getInfo(currentId, type, setData, showWManager, showWManager, {
            editor: editor,
        });
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    open: open,
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/eqneditor/index.js":
/*!**************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/eqneditor/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./plugin.js */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/eqneditor/plugin.js");

/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/eqneditor/plugin.js":
/*!***************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/eqneditor/plugin.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* 
 Equation Editor Plugin for TinyMCE v4
 Version 2

 This plugin allows equations to be created and edited from within TinyMCE.
 For more information goto: http://www.codecogs.com/latex/integration/tinymce_v4/install.php
 
 Copyright CodeCogs 2013
 Written by Will Bateman.
*/
CCinstance=0;
tinymce.PluginManager.add("eqneditor",function(editor, url) {

	// Load necessary javscript for editor from CodeCogs
	var sl = new tinymce.dom.ScriptLoader();
	var host='latex.codecogs.com';
		
	var http=('https:' == document.location.protocol ? 'https://' : 'http://');
	sl.add('/assets/js/eq_config.js');
	sl.add('/assets/js/eq_editor-lite-17.js');
	sl.loadQueue(function(){});

	// Load Additional CSS 
	var fileref=document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", http+host+'/css/equation-embed.css');
	document.getElementsByTagName("head")[0].appendChild(fileref);

	function showDialog() {
		var http = ('https:' == document.location.protocol ? 'https://' : 'http://');

		CCinstance++;
		win = editor.windowManager.open({
			title: 'Equation Editor',
			width: 615,
			height: 380,
			items: [
				{
						name:'toolbar',
						type:'container',
						html:'<div style="padding:10px;"><div id="CCtoolbar'+CCinstance+'"></div>'+
								 '<p style="margin-top:5px"><label for="CClatex'+CCinstance+'">Equation (LaTeX):</p>'+
								 '<textarea id="CClatex'+CCinstance+'" rows="5" style="border:1px solid #8fb6bd; width:570px; font-size:16px; padding:5px; background-color:#ffc"></textarea>'+
								 '<p style="margin-top:5px"><label for="CClatex'+CCinstance+'">Preview:</p>'+
								 '<img id="CCequation'+CCinstance+'" src="'+http+'www.codecogs.com/images/spacer.gif" /></div>'
				}
			],
			buttons : [
					{
						type:'container',
						html:'<span style="font-size:11px;"><a href="http://www.codecogs.com" target="_blank" style="font-size:11px"><img src="'+http+'latex.codecogs.com/images/poweredbycc.gif" width="105" height="35" border="0" alt="Powered by CodeCogs" style="vertical-align:-7px"/></a> &nbsp; <a href="http://www.codecogs.com/latex/about.php" target="_blank"  style="font-size:11px">About</a> | <a href="http://www.codecogs.com/latex/popup.php" target="_blank" style="font-size:11px">Install</a> | <a href="http://www.codecogs.com/pages/forums/forum_view.php?f=28" target="_blank" style="font-size:11px">Forum</a> | <a href="http://www.codecogs.com" target="_blank" style="font-size:11px">CodeCogs</a> &copy; 2007-2013</span>'
					},
					{type: "spacer", flex: 1},
					{
						text: 'Ok',
						subtype: 'primary',
						minWidth: 50,
						onclick: function() {	
							editor.execCommand('mceInsertContent', false, EqEditor.getTextArea().exportEquation('html'));
							Example.add_history(EqEditor.getTextArea().getLaTeX());
							win.close();
						}
					},
					{
						text: 'Cancel', 
						onclick: function() {	win.close();}
					}
			]
		});
		
		EqEditor.embed('CCtoolbar'+CCinstance,'','efull');
 		EqEditor.add(new EqTextArea('CCequation'+CCinstance, 'CClatex'+CCinstance),false);

		var imgElm=editor.selection.getNode();
		if(imgElm.nodeName=='IMG')
		{
			var sName = editor.dom.getAttrib(imgElm, 'src').match( /(gif|svg)\.latex\?(.*)/ );
			if(sName!=null) EqEditor.getTextArea().setText(sName[2]);
		}
	}
	
	
  editor.addButton('eqneditor', {
			title: 'Equation',
	  		image: '/assets/img/eqneditor.png',
			tooltip: 'Insert Equation',
			onclick: showDialog,
			stateSelector: 'img[src*="latex"]'
	});

	// Adds a menu item to the tools menu
	editor.addMenuItem('eqneditor', {
			image: '/assets/img/eqneditor.png',
			text: 'Insert Equation',
			context: 'insert',
			prependToContext:true,
			onclick: showDialog
	}); 
	
	editor.on('DblClick', function(ed, e) {
		if (ed.target.nodeName.toLowerCase() == "img") {
			var sName = ed.target.src.match( /(gif|svg)\.latex\?(.*)/ );
			if(sName!=null) showDialog();
		}
	});
	
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/api/Commands.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/api/Commands.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/ui/Dialog.ts");

var register = function (editor, http) {
    editor.addCommand('mceTree', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, http, 'image');
    });
    editor.addCommand('mceTreeLink', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, http, 'link');
    });
    editor.addCommand('mceTreeVideo', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, http, 'video');
    });
    editor.addCommand('mceTreeIframe', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, http, 'iframe');
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    register: register,
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/core/FilterContent.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/core/FilterContent.ts ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
    setup: setup
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/core/Tree.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/core/Tree.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");


/**
 * Dam.js
 */
var TAG_BY_TYPE = { 'image': 'img', 'link': 'a', 'video': 'video', 'iframe': 'iframe' };
var ATTR_BY_TAG = { 'img': 'src', 'a': 'href', 'video': 'src', 'iframe': 'src' };
var ATTRS_BY_TAG = {
    'img': ['alt', 'longdesc'],
    'a': ['target', 'title'],
    'video': ['longdesc', 'height', 'width'],
    'iframe': ['width', 'height']
};
var VALID_TAGS = Object.keys(ATTR_BY_TAG);
var isValidNodeId = function (nodeId) {
    return true;
};
function hasValidResource(tag, val, type) {
    var isValid = VALID_TAGS.includes(tag) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(val) && tag === TAG_BY_TYPE[type];
    return isValid;
}
var getId = function (editor, type) {
    var selectedNode = editor.selection.getNode();
    var tag = selectedNode.tagName.toLowerCase();
    var val = editor.dom.getAttrib(selectedNode, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK);
    if (type === 'video') {
        tag = 'video';
        val = editor.dom.getAttrib(selectedNode, 'data-mce-p-xe_link');
    }
    else if (type === 'iframe') {
        tag = 'iframe';
        val = editor.dom.getAttrib(selectedNode, 'data-mce-p-src');
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
    if (selectedNode.classList.contains('mce-object-iframe') && selectedNode.tagName.toLowerCase() !== 'iframe') {
        selectedNode = selectedNode.querySelector('iframe');
    }
    var attr = editor.dom.getAttrib(selectedNode, attribute);
    return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(attr) ? (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(attribute, defaultValues) ? defaultValues[attribute] : '') : attr;
};
var getUrl = function (editor, nodeId) {
    var resourceUrl = editor.getParam('dam_url', editor.documentBaseUrl);
    var url = typeof (resourceUrl) === 'function' ? resourceUrl(nodeId) : resourceUrl + nodeId;
    if (((/^(f|ht)tps?:\/\//i).test(nodeId))) {
        url = nodeId;
    }
    return url;
};
var createHtmlVideo = function (text, resource) {
    var height = 'height' in resource && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(resource['height']) ? resource['height'] : '100%';
    var width = 'width' in resource && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(resource['width']) ? resource['width'] : '100%';
    // text = `<video xe_link="${resource['xe_link']}" lingkwidth="${width}" height="${height}" controls>`;
    text = "<source src=\"" + resource['xe_link'] + "\" type=\"video/mp4\"/>Your browser does not support the video tag.";
    // text += `</video>`;
    resource['width'] = "" + width;
    resource['height'] = "" + height;
    resource['controls'] = '';
    return [text, resource];
};
var insert = function (editor, nodeId, type, attributes) {
    var _a;
    var selectedNode = editor.selection.getNode();
    var tag = selectedNode.tagName.toLowerCase();
    var val = editor.dom.getAttrib(selectedNode, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK);
    var hasResource = hasValidResource(tag, val, type);
    var url = getUrl(editor, nodeId);
    if (hasResource) {
        selectedNode.setAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK, nodeId);
        selectedNode.setAttribute(ATTR_BY_TAG[tag], url);
        selectedNode.setAttribute('data-mce-src', url);
        ATTRS_BY_TAG[tag].forEach(function (key) {
            selectedNode.setAttribute(key, attributes[key]);
        });
    }
    else {
        // editor.focus();
        // editor.selection.collapse(true);
        tag = TAG_BY_TYPE[type];
        var resource_1 = {
            xe_link: nodeId
        };
        ATTRS_BY_TAG[tag].forEach(function (key) {
            resource_1[key] = attributes[key];
        });
        resource_1[ATTR_BY_TAG[tag]] = url;
        var text = '';
        if (type === 'link') {
            if (!hasResource) {
                text = editor.selection.getContent();
            }
            else {
                text = resource_1['title'];
            }
        }
        else if (type === 'video') {
            _a = createHtmlVideo(text, resource_1), text = _a[0], resource_1 = _a[1];
            tag = 'video';
        }
        editor.execCommand('mceInsertContent', false, editor.dom.createHTML(tag, resource_1, text));
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    isValidNodeId: isValidNodeId,
    getId: getId,
    getAttribute: getAttribute,
    insert: insert
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/ui/Buttons.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/ui/Buttons.ts ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Buttons.js
 */
var register = function (editor) {
    editor.addButton('tree', {
        icon: 'image',
        tooltip: 'Tree image',
        cmd: 'mceTree',
        stateSelector: 'img[xe_link]'
    });
    editor.addButton('tree_link', {
        icon: 'link',
        tooltip: 'Tree link',
        cmd: 'mceTreeLink',
        stateSelector: 'a[xe_link]'
    });
    editor.addButton('tree_video', {
        icon: 'media',
        tooltip: 'Tree video',
        cmd: 'mceTreeVideo',
        stateSelector: 'img[data-mce-object="video"]'
    });
    editor.addButton('tree_iframe', {
        image: '/assets/img/icon_iframe.png',
        tooltip: 'Tree iframe',
        cmd: 'mceTreeIframe',
        stateSelector: '[data-mce-object="iframe"]'
    });
    editor.addMenuItem('tree', {
        icon: 'image',
        text: 'Tree',
        context: 'insert',
        cmd: 'mceTree'
    });
    editor.addMenuItem('tree_link', {
        icon: 'link',
        text: 'DAM link',
        context: 'insert',
        cmd: 'mceTreeLink'
    });
    editor.addMenuItem('tree_video', {
        icon: 'video',
        text: 'DAM video',
        context: 'insert',
        cmd: 'mceTreeVideo'
    });
    editor.addMenuItem('tree_iframe', {
        icon: 'iframe',
        text: 'Tree iframe',
        context: 'insert',
        cmd: 'mceTreeIframe'
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    register: register
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/ui/Dialog.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/ui/Dialog.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_components_editor_views_wysiwyg_view_tiny_plugins_tree_core_Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/components/editor/views/wysiwyg-view/tiny_plugins/tree/core/Tree */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/core/Tree.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(valid_url__WEBPACK_IMPORTED_MODULE_2__);
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
    iframe: {
        title: { type: 'textbox', name: 'title', size: 40, label: 'Título' },
        width: {
            type: 'textbox',
            name: 'width',
            size: 20,
            label: 'Width',
        },
        height: {
            type: 'textbox',
            name: 'height',
            size: 20,
            label: 'Height',
        },
    },
};
var insertDam = function (editor, newId, type, extra) {
    if (!_app_components_editor_views_wysiwyg_view_tiny_plugins_tree_core_Tree__WEBPACK_IMPORTED_MODULE_0__["default"].isValidNodeId(newId)) {
        editor.windowManager.alert('El enlace elegido no es válido');
        return true;
    }
    else {
        _app_components_editor_views_wysiwyg_view_tiny_plugins_tree_core_Tree__WEBPACK_IMPORTED_MODULE_0__["default"].insert(editor, newId, type, extra);
        return false;
    }
};
var open = function (editor, http, type) {
    var currentId = _app_components_editor_views_wysiwyg_view_tiny_plugins_tree_core_Tree__WEBPACK_IMPORTED_MODULE_0__["default"].getId(editor, type);
    var attributes = {};
    for (var _i = 0, _a = Object.keys(ATTRS_BY_TYPE[type]); _i < _a.length; _i++) {
        var attr = _a[_i];
        attributes[attr] = _app_components_editor_views_wysiwyg_view_tiny_plugins_tree_core_Tree__WEBPACK_IMPORTED_MODULE_0__["default"].getAttribute(editor, attr);
    }
    var save = function (e) {
        var newNodeId = e.data.nodeId;
        var extra = {};
        for (var _i = 0, _a = Object.keys(ATTRS_BY_TYPE[type]); _i < _a.length; _i++) {
            var key = _a[_i];
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
            _app_api__WEBPACK_IMPORTED_MODULE_1__["Api"].getInfoNode(http, selectedId, type, setData, null, null);
        })
            .catch(function (err) { return console.log(err); });
    }
    function setData(_a, extra) {
        var result = _a.response;
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
    function showWManager(_a, _b) {
        var result = _a.response;
        var ed = _b.editor;
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
                    onclick: function (e) { return openTree(e, ed.windowManager, pathIds); },
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
        for (var _i = 0, _c = Object.keys(ATTRS_BY_TYPE[type]); _i < _c.length; _i++) {
            var key = _c[_i];
            var obj = ATTRS_BY_TYPE[type][key];
            obj['value'] = attributes[key];
            form.body.push(obj);
        }
        ed.windowManager.open(form);
    }
    if (currentId && !valid_url__WEBPACK_IMPORTED_MODULE_2___default.a.isUri(currentId)) {
        _app_api__WEBPACK_IMPORTED_MODULE_1__["Api"].getInfoNode(http, currentId, type, showWManager, showWManager, {
            editor: editor,
        });
    }
    else {
        showWManager({ response: null }, { editor: editor });
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    open: open,
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/wysiwyg-handler.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/wysiwyg-handler.ts ***!
  \*************************************************************************/
/*! exports provided: WysiwygHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WysiwygHandler", function() { return WysiwygHandler; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sanitize-html */ "./node_modules/sanitize-html/dist/index.js");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/mappers/xedit */ "./src/app/core/mappers/xedit.ts");
/* harmony import */ var tinymce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinymce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinymce_themes_modern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/themes/modern */ "./node_modules/tinymce/themes/modern/index.js");
/* harmony import */ var tinymce_themes_modern__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_modern__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tinymce/plugins/table */ "./node_modules/tinymce/plugins/table/index.js");
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tinymce/plugins/image */ "./node_modules/tinymce/plugins/image/index.js");
/* harmony import */ var tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tinymce/plugins/link */ "./node_modules/tinymce/plugins/link/index.js");
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tinymce/plugins/searchreplace */ "./node_modules/tinymce/plugins/searchreplace/index.js");
/* harmony import */ var tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tinymce/plugins/autolink */ "./node_modules/tinymce/plugins/autolink/index.js");
/* harmony import */ var tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tinymce/plugins/media */ "./node_modules/tinymce/plugins/media/index.js");
/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tinymce_plugins_hr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tinymce/plugins/hr */ "./node_modules/tinymce/plugins/hr/index.js");
/* harmony import */ var tinymce_plugins_hr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_hr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tinymce/plugins/anchor */ "./node_modules/tinymce/plugins/anchor/index.js");
/* harmony import */ var tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tinymce/plugins/advlist */ "./node_modules/tinymce/plugins/advlist/index.js");
/* harmony import */ var tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tinymce/plugins/lists */ "./node_modules/tinymce/plugins/lists/index.js");
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var tinymce_plugins_textcolor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tinymce/plugins/textcolor */ "./node_modules/tinymce/plugins/textcolor/index.js");
/* harmony import */ var tinymce_plugins_textcolor__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_textcolor__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var tinymce_plugins_imagetools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tinymce/plugins/imagetools */ "./node_modules/tinymce/plugins/imagetools/index.js");
/* harmony import */ var tinymce_plugins_imagetools__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_imagetools__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var tinymce_plugins_colorpicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tinymce/plugins/colorpicker */ "./node_modules/tinymce/plugins/colorpicker/index.js");
/* harmony import */ var tinymce_plugins_colorpicker__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_colorpicker__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _tiny_plugins_eqneditor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tiny_plugins/eqneditor */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/eqneditor/index.js");
/* harmony import */ var _tiny_plugins_eqneditor__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_tiny_plugins_eqneditor__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _tiny_plugins_dam_api_Commands__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tiny_plugins/dam/api/Commands */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/api/Commands.ts");
/* harmony import */ var _tiny_plugins_dam_core_FilterContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tiny_plugins/dam/core/FilterContent */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/FilterContent.ts");
/* harmony import */ var _tiny_plugins_dam_ui_Buttons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tiny_plugins/dam/ui/Buttons */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Buttons.ts");
/* harmony import */ var _tiny_plugins_tree_api_Commands__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tiny_plugins/tree/api/Commands */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/api/Commands.ts");
/* harmony import */ var _tiny_plugins_tree_core_FilterContent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tiny_plugins/tree/core/FilterContent */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/core/FilterContent.ts");
/* harmony import */ var _tiny_plugins_tree_ui_Buttons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tiny_plugins/tree/ui/Buttons */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/tree/ui/Buttons.ts");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");
/* harmony import */ var bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _core_mappers_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../core/mappers/router */ "./src/app/core/mappers/router.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");




// TIYMCE























// DATEPICKER






var WysiwygHandler = /** @class */ (function () {
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
            !WysiwygHandler.isSameEditor(tinymce.activeEditor, args.node.getSection().getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_29__["XeditMapper"].TAG_UUID))) {
            WysiwygHandler.clearTinymce();
            WysiwygHandler.addPlugins(args.getInfo, args.callback, args.http);
            var toolbar_1 = WysiwygHandler.generateToolbar(args.node.getSchema());
            var fixed_toolbar_container = !Object(ramda__WEBPACK_IMPORTED_MODULE_28__["isEmpty"])(toolbar_1)
                ? "#toolbar"
                : false;
            tinymce.init({
                dam_url: function (id) {
                    return _core_mappers_router__WEBPACK_IMPORTED_MODULE_31__["default"].configUrl(_app_api__WEBPACK_IMPORTED_MODULE_32__["Api"].getResourceUrl(), { id: id });
                },
                max_chars: 30000,
                id: args.node.getSection().getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_29__["XeditMapper"].TAG_UUID),
                target: args.node.getSection(),
                inline: true,
                branding: false,
                fixed_toolbar_container: fixed_toolbar_container,
                menubar: false,
                toolbar: toolbar_1,
                plugins: WysiwygHandler.getAvailablePlugins(args.node.getSchema()),
                skin_url: "assets/skins/x-edit",
                valid_elements: "*[*]",
                extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
                // content_css: [
                //     "//fonts.googleapis.com/css?family=Libre+Franklin",
                //     "//fonts.googleapis.com/css?family=Vibur"
                // ],
                // font_formats: "Normal=libre franklin;Infantil=vibur;",
                setup: function (editor) {
                    editor.on("Nodechange", function (e) {
                        var ele = e.element;
                        var sibling = ele.previousSibling;
                        if (sibling &&
                            typeof sibling.getAttribute === "function") {
                            if (sibling.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_29__["XeditMapper"].TAG_UUID) ===
                                ele.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_29__["XeditMapper"].TAG_UUID)) {
                                ele.setAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_29__["XeditMapper"].TAG_UUID, angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID());
                                sibling.removeAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_29__["XeditMapper"].ATTR_WYSIWYG_SELECTED);
                            }
                        }
                    });
                    editor.on("Paste", function (e) {
                        e.preventDefault();
                        var copyHtml = args.clipboardConfigs.getConfigs("copy");
                        var data = WysiwygHandler.copy(e, copyHtml.enable);
                        data = WysiwygHandler.resetIdsFromString(data);
                        document.execCommand("insertHTML", false, data);
                        var contentTag = editor.bodyElement;
                        var content = editor.getContent();
                        args.service.save(contentTag, content, "Change section " +
                            args.node
                                .getSection()
                                .getAttribute("xe_section"));
                    });
                    editor.on("change", function (evt) {
                        WysiwygHandler.saveDoc(editor, args);
                    });
                    editor.on("init", function (evt) {
                        tinymce.execCommand("mceFocus", false, editor.id);
                        args.service.setCurrentNode(args.node);
                    });
                    editor.on("hide", function (e) {
                        tinymce.remove(editor);
                    });
                    editor.on("blur", function (evt) {
                        // TODO FIX atovar
                        var xedit = evt.target.bodyElement;
                        var links = xedit.getElementsByTagName("a");
                        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_28__["isNil"])(links)) {
                            for (var i = 0; i < links.length; i++) {
                                links[i].onclick = function (event) {
                                    event.preventDefault();
                                    return false;
                                };
                            }
                        }
                        WysiwygHandler.saveDoc(editor, args);
                        args.service.getFileStateValue().snapshot();
                        return false;
                    });
                }
            });
        }
    };
    WysiwygHandler.saveDoc = function (editor, args) {
        var contentTag = editor.bodyElement;
        var content = editor.getContent();
        args.service.save(contentTag, content, "Change section " +
            args.node.getSection().getAttribute("xe_section"));
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
            text = replaceIndex(text, i, ' xe_uuid="' + angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID() + '" ');
        }
        return _utils_converters__WEBPACK_IMPORTED_MODULE_30__["Converters"].json2html(_utils_converters__WEBPACK_IMPORTED_MODULE_30__["Converters"].html2json(text));
    };
    WysiwygHandler.isSameEditor = function (editor, id) {
        return (editor.targetElm.hasAttribute("xe_uuid") &&
            Object(ramda__WEBPACK_IMPORTED_MODULE_28__["equals"])(editor.targetElm.getAttribute("xe_uuid"), id));
    };
    WysiwygHandler.addPlugins = function (getInfo, callback, http) {
        if (app_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].getDam() === "dam") {
            tinymce.PluginManager.add("dam", function (editor) {
                _tiny_plugins_dam_core_FilterContent__WEBPACK_IMPORTED_MODULE_21__["default"].setup(editor);
                _tiny_plugins_dam_api_Commands__WEBPACK_IMPORTED_MODULE_20__["default"].register(editor, getInfo, callback);
                _tiny_plugins_dam_ui_Buttons__WEBPACK_IMPORTED_MODULE_22__["default"].register(editor);
            });
        }
        else {
            tinymce.PluginManager.add("tree", function (editor) {
                _tiny_plugins_tree_core_FilterContent__WEBPACK_IMPORTED_MODULE_24__["default"].setup(editor);
                _tiny_plugins_tree_api_Commands__WEBPACK_IMPORTED_MODULE_23__["default"].register(editor, http);
                _tiny_plugins_tree_ui_Buttons__WEBPACK_IMPORTED_MODULE_25__["default"].register(editor);
            });
        }
    };
    WysiwygHandler.generateToolbar = function (schema) {
        /*'styleselect | link dam | bold italic underline |  aligncenter alignjustify |' +
            ' bullist numlist outdent indent |fontsizeselect'*/
        /*'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify
        | numlist bullist outdent indent  | removeformat'*/
        var toolbar = "";
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])("options", schema)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])("styles", schema.options)) {
                toolbar += this.toolbarStyles(schema.options.styles);
            }
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])("tags", schema.options)) {
                toolbar += this.toolbarTags(schema.options.tags);
            }
        }
        toolbar = toolbar.trim();
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_28__["isEmpty"])(toolbar) ? toolbar : false;
    };
    WysiwygHandler.toolbarStyles = function (styles) {
        var stylesValue = {};
        var groups = {
            group1: {
                bold: "bold",
                italic: "italic",
                underline: "underline",
                strikethrough: "strikethrough",
                color: "forecolor",
                background: "backcolor",
                math: "eqneditor"
            },
            others: {
                ol: "numlist",
                ul: "bullist",
                table: "table"
            },
            align: {
                alignleft: "alignleft",
                aligncenter: "aligncenter",
                alignright: "alignright",
                alignjustify: "alignjustify"
            },
            indent: {
                outdent: "outdent",
                indent: "indent"
            },
            format: {
                formatselect: "formatselect"
            },
            font: {
                fontselect: "fontselect",
                fontsize: "fontsizeselect"
            }
        };
        if (typeof styles === "string") {
            styles = Object(ramda__WEBPACK_IMPORTED_MODULE_28__["equals"])(styles, WysiwygHandler.STYLES_ALL)
                ? Object.keys(groups)
                : [];
        }
        styles.forEach(function (style) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])(style, groups)) {
                WysiwygHandler.addValue(stylesValue, style, Object.values(groups[style]));
            }
            else {
                for (var group in groups) {
                    if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])(style, groups[group])) {
                        WysiwygHandler.addValue(stylesValue, group, [
                            groups[group][style]
                        ]);
                    }
                }
            }
        });
        var result = "";
        for (var styleValue in stylesValue) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_28__["isNil"])(stylesValue[styleValue])) {
                result += Object(ramda__WEBPACK_IMPORTED_MODULE_28__["uniq"])(stylesValue[styleValue]).join(" ") + " | ";
            }
        }
        return result.replace(/(\s\|\s)$/g, "");
    };
    WysiwygHandler.getToolBarBtns = function () {
        var type = app_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].getDam();
        return {
            a: type + "_link",
            img: type,
            video: type + "_video",
            audio: type + "_audio",
            iframe: type + "_iframe"
        };
    };
    WysiwygHandler.toolbarTags = function (tags) {
        var tagsValue = {};
        var groups = {
            buttons: this.getToolBarBtns(),
            formats: {}
        };
        if (typeof tags === "string") {
            tags = Object(ramda__WEBPACK_IMPORTED_MODULE_28__["equals"])(tags, WysiwygHandler.TAGS_ALL)
                ? Object.keys(groups)
                : [];
        }
        else {
            tags = Object.keys(tags);
        }
        tags.forEach(function (style) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])(style, groups)) {
                WysiwygHandler.addValue(tagsValue, style, Object.values(groups[style]));
            }
            else {
                for (var group in groups) {
                    if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])(style, groups[group])) {
                        WysiwygHandler.addValue(tagsValue, group, [
                            groups[group][style]
                        ]);
                    }
                }
            }
        });
        var result = " ";
        for (var tagValue in tagsValue) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["equals"])(tagValue, "buttons")) {
                result += Object(ramda__WEBPACK_IMPORTED_MODULE_28__["uniq"])(tagsValue[tagValue]).join(" ");
            }
        }
        return result;
    };
    WysiwygHandler.addValue = function (object, property, value) {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])(property, object)) {
            object[property] = Object(ramda__WEBPACK_IMPORTED_MODULE_28__["union"])(object[property], value);
        }
        else {
            object[property] = value;
        }
    };
    WysiwygHandler.getAvailablePlugins = function (schema) {
        /*['link', 'table', 'image', 'paste', 'dam']*/
        var plugins = ""; // 'searchreplace autolink image link media hr anchor advlist lists textcolor imagetools colorpicker';
        return app_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].getDam() + " eqneditor searchreplace autolink link media hr anchor advlist lists textcolor colorpicker table";
    };
    /**********************************     DATEPICKER  *******************************************/
    /**
     * Init datepicker
     */
    WysiwygHandler.initDatePicker = function (args) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
            "use strict";
            var hasNode = Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])("node", args);
            var hasElement = Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])("element", args);
            var element = hasNode
                ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(args.node.getSection())
                : hasElement
                    ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(args.element)
                    : jquery__WEBPACK_IMPORTED_MODULE_0___default()(args);
            if (element.children().length === 0) {
                var date = element.attr("datetime");
                element.html('<input type="text" value="' + date + '">');
                var input_1 = element.children();
                input_1.datepicker({
                // dateFormat: "yy-mm-dd"
                });
                input_1.datepicker().on("hide", function () {
                    input_1.datepicker("destroy");
                    var format = !Object(ramda__WEBPACK_IMPORTED_MODULE_28__["isNil"])(args.node.getSchema().options.format)
                        ? args.node.getSchema().options.format
                        : "dd-mm-yyyy";
                    var attributes = {};
                    if (element.prop("tagName") === "TIME") {
                        element.attr("datetime", input_1.val());
                        attributes["datetime"] = element.attr("datetime");
                    }
                    element.html(dateformat__WEBPACK_IMPORTED_MODULE_26___default()(input_1.val(), format));
                    if (hasNode) {
                        args.service.save(args.node.getSection(), element.html(), "Change section date", attributes);
                        args.service.getFileStateValue().snapshot();
                    }
                    else if (hasElement && Object(ramda__WEBPACK_IMPORTED_MODULE_28__["hasIn"])("callback", args)) {
                        args.callback(input_1.val());
                    }
                });
                input_1.on("changeDate", function () {
                    input_1.datepicker("hide");
                });
                input_1.datepicker("show");
            }
        });
    };
    /**
     * This method get data in plain format from clipboard
     */
    WysiwygHandler.copyPlain = function (evt) {
        return evt.clipboardData.getData("text/plain");
    };
    /*
     * This method get the data in html format from the clipboard but if it is empty it try to get in plain format
     */
    WysiwygHandler.copyHtml = function (evt) {
        var data = evt.clipboardData.getData("text/plain");
        var html = evt.clipboardData.getData("text/html");
        if (html) {
            data = sanitize_html__WEBPACK_IMPORTED_MODULE_2___default()(html);
        }
        return data;
    };
    WysiwygHandler.copy = function (evt, asHtml) {
        if (asHtml === void 0) { asHtml = true; }
        var data = "";
        if (asHtml) {
            data = WysiwygHandler.copyHtml(evt);
        }
        else {
            data = WysiwygHandler.copyPlain(evt);
        }
        return data;
    };
    WysiwygHandler.STYLES_ALL = "all";
    WysiwygHandler.TAGS_ALL = "all";
    WysiwygHandler.handlers = {
        date: WysiwygHandler.initDatePicker,
        text: WysiwygHandler.initTinymce
    };
    return WysiwygHandler;
}());

dateformat__WEBPACK_IMPORTED_MODULE_26___default.a.i18n = {
    dayNames: [
        "Dom",
        "Lun",
        "Mar",
        "Mie",
        "Jue",
        "Vie",
        "Sab",
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ],
    monthNames: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
};


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"js\">\n    <ng-container *ngFor=\"let js of jsLinks\">\n        <script [src]=\"js | url\"></script>\n    </ng-container>\n</div>-->\n<div class=\"css\">\n    <ng-container *ngFor=\"let css of cssLinks\">\n        <link rel=\"stylesheet\" [href]=\"addHttp(css) | url\">\n    </ng-container>\n</div>\n<div #xedit [innerHTML]=\"renderContent | safeHtml\" (click)=\"onclick($event)\" (contextmenu)=\"onContextMenu($event)\"></div>\n<context-menu #myContextMenu>\n    <ng-template *ngFor=\"let action of contextMenuActions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\" (execute)=\"action.click()\">\n        {{ action.html() }}\n    </ng-template>\n</context-menu>"

/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  background-color: #fcfcfc;\n  display: block;\n  overflow: auto; }\n.no-editable {\n  position: relative; }\n.no-editable:after {\n  background: gray;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  content: '';\n  opacity: 0.4; }\n"

/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: WysiwygViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WysiwygViewComponent", function() { return WysiwygViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/node */ "./src/app/models/node.ts");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _models_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/dom */ "./src/app/models/dom.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _components_editor_views_wysiwyg_view_wysiwyg_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/editor/views/wysiwyg-view/wysiwyg-handler */ "./src/app/components/editor/views/wysiwyg-view/wysiwyg-handler.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../models/configs/clipboardConfigs */ "./src/app/models/configs/clipboardConfigs.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../api */ "./src/app/api.ts");
/* harmony import */ var _core_mappers_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/mappers/router */ "./src/app/core/mappers/router.ts");
/* harmony import */ var _services_dam_service_dam_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/dam-service/dam.service */ "./src/app/services/dam-service/dam.service.ts");
/* harmony import */ var _app_xedit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/xedit */ "./src/app/xedit.ts");
/* harmony import */ var _app_models_configs_statesConfigs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/models/configs/statesConfigs */ "./src/app/models/configs/statesConfigs.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var WysiwygViewComponent = /** @class */ (function () {
    function WysiwygViewComponent(_editorService, contextMenuService, _elementRef, _notification, cdr, http, _damService) {
        this._editorService = _editorService;
        this.contextMenuService = contextMenuService;
        this._elementRef = _elementRef;
        this._notification = _notification;
        this.cdr = cdr;
        this.http = http;
        this._damService = _damService;
        this.selectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuActions = [];
        this.enableHover = null;
        this.reload = false;
    }
    /************************************** Life Cycle **************************************/
    WysiwygViewComponent.prototype.ngOnInit = function () {
        this.stateConfigs = new _app_models_configs_statesConfigs__WEBPACK_IMPORTED_MODULE_15__["StateConfigs"]();
        this._editorService.setLoading(true);
        this.config();
    };
    WysiwygViewComponent.prototype.ngAfterViewChecked = function () {
        if (this.reload) {
            this.reloadView();
            // TODO fix event
            var xedit = this.xedit.nativeElement;
            var links = xedit.getElementsByTagName('a');
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(links)) {
                for (var i = 0; i < links.length; i++) {
                    links[i].onclick = function (evt) {
                        evt.preventDefault();
                        return false;
                    };
                }
            }
        }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.enableHover) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.stateConfigs.isActive())) {
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
        _components_editor_views_wysiwyg_view_wysiwyg_handler__WEBPACK_IMPORTED_MODULE_8__["WysiwygHandler"].clearTinymce();
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
            _components_editor_views_wysiwyg_view_wysiwyg_handler__WEBPACK_IMPORTED_MODULE_8__["WysiwygHandler"].clearTinymce();
            _this._editorService.setLoading(false);
        });
        // Suscribe to node change
        this.subscribeCNM = this._editorService.getCurrentNodeModify().subscribe(function (currentNode) {
            var element = _this.xedit.nativeElement.querySelector('[' + _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID + '="' + currentNode.getUuid() + '"]');
            Object.keys(currentNode.getAttributes()).forEach(function (attribute) {
                element.setAttribute(attribute, currentNode.getAttribute(attribute));
            });
        });
        this.subscribeCN = this._editorService.getCurrentNode().subscribe(function (currentNode) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(currentNode) && (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(_this.currentNode) ||
                !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["equals"])(currentNode.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID), _this.currentNode.getUuid()))) {
                _this.setSelection(currentNode);
            }
        });
        this._editorService.getElementsState().subscribe(function (elementState) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(_this.stateConfigs.isActive())) {
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
        _components_editor_views_wysiwyg_view_wysiwyg_handler__WEBPACK_IMPORTED_MODULE_8__["WysiwygHandler"].clearTinymce();
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
            var data = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, content[property].content) ?
                _utils_converters__WEBPACK_IMPORTED_MODULE_7__["Converters"].html2json(content[property].content) : content[property].content;
            renderContent += _this.parseContentToWysiwygEditorWrapper(property, content[property].editable, _utils_converters__WEBPACK_IMPORTED_MODULE_7__["Converters"].json2html(data, true, true, false, _this.enableHover));
        });
        return renderContent;
    };
    WysiwygViewComponent.prototype.parseContentToWysiwygEditorWrapper = function (property, editable, content) {
        var START_TAG = editable ? _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_EDITOR + ' ' + _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID + '="' + property + '"' :
            'div class="no-editable"';
        var END_TAG = editable ? _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_EDITOR : 'div';
        return '<' + START_TAG + '>' + content + '</' + END_TAG + '>';
    };
    WysiwygViewComponent.prototype.clearAttributes = function () {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.currentNode)) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.currentNode.getSection())) {
                this.currentNode.getSection().removeAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].ATTR_SELECTED);
            }
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.currentNode.getTarget())) {
                var element = document.querySelector("[xe_uuid=\"" + this.currentNode.getTarget().getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID) + "\"]");
                if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(element)) {
                    element.removeAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].ATTR_WYSIWYG_SELECTED);
                }
            }
        }
    };
    WysiwygViewComponent.prototype.addHttp = function (resource) {
        if (!(/^(f|ht)tps?:\/\//i).test(resource)) {
            resource = _core_mappers_router__WEBPACK_IMPORTED_MODULE_12__["default"].configUrl(_api__WEBPACK_IMPORTED_MODULE_11__["Api"].getResourceUrl(), { id: resource });
        }
        return resource;
    };
    /************************************** Public Methods **************************************/
    WysiwygViewComponent.prototype.onclick = function (evt) {
        this.changeSelection(evt.target.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID));
        // this.changeSelection(this.chooseTarget(evt.target));
    };
    WysiwygViewComponent.prototype.chooseTarget = function (origin) {
        var len = origin.children.length;
        var target = origin.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID);
        if (len === 1 && origin.hasAttribute('xe_section')) {
            var node = origin.children[0];
            if (node.nodeName === 'IMG') {
                target = node.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID);
            }
            else if (node.nodeName === 'P'
                && node.children.length === 1
                && node.children[0].nodeName === 'IMG') {
                node = node.children[0];
                target = node.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID);
            }
            // node.click();
        }
        return target;
    };
    WysiwygViewComponent.prototype.changeSelection = function (elementKey) {
        this.selectNode.emit(elementKey);
    };
    WysiwygViewComponent.prototype.setSelection = function (currentNode) {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.currentNode)) {
            this.clearAttributes();
        }
        this.currentNode = currentNode;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(currentNode.getSchema())) {
            // Add selected class
            var name_1 = _models_node__WEBPACK_IMPORTED_MODULE_3__["Node"].getSectionLang(this.currentNode.getSchema(), _app_xedit__WEBPACK_IMPORTED_MODULE_14__["Xedit"].getLang());
            this.currentNode.getSection().setAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].ATTR_SELECTED, name_1);
            // Add selected class
            this.currentNode.getTarget().setAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].ATTR_WYSIWYG_SELECTED, this.currentNode.getTarget().nodeName);
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.currentNode.getSection())) {
                this.applyHandler(this.currentNode);
            }
        }
    };
    WysiwygViewComponent.prototype.applyHandler = function (currentNode) {
        var _this = this;
        var sectionType = currentNode.getSchema().type;
        var clipboardConfigs = new _models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_10__["ClipboardConfigs"]();
        var args = {
            node: currentNode,
            service: this._editorService,
            clipboardConfigs: clipboardConfigs,
            http: this.http,
            getInfo: function (selectedId, type, setData, errorCallback, extra) {
                _api__WEBPACK_IMPORTED_MODULE_11__["Api"].getInfoNode(_this.http, selectedId, type, setData, errorCallback, extra);
            },
            callback: function (evt, windowM, type, pathIds, setData) {
                _this._damService.setIsOpen(true);
                _this._damService.setOnSelect(function (item) {
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(item)) {
                        _api__WEBPACK_IMPORTED_MODULE_11__["Api"].getInfoNode(_this.http, item.hash, type, setData, null, null);
                        _this._damService.setIsOpen(false);
                    }
                });
                // window['treeModal']
                //     .openModal('modal-1', type, pathIds)
                //     .then(selectedId => {
                //         Api.getInfoNode(this.http, selectedId, type, setData, null, null);
                //     })
                //     .catch(err => console.log(err));
            }
        };
        _components_editor_views_wysiwyg_view_wysiwyg_handler__WEBPACK_IMPORTED_MODULE_8__["WysiwygHandler"].executeHandler(sectionType, args);
    };
    /************************************** MENU *****************************************/
    WysiwygViewComponent.prototype.onContextMenu = function ($event) {
        var _this = this;
        var node = this._editorService.parseToNode($event.target);
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node.getSchema())) {
            this.updateContextMenuActions(node);
            setTimeout(function () {
                _this.contextMenuService.show.next({
                    contextMenu: _this.basicMenu,
                    event: $event,
                    item: null,
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
            var nodeTemplate = _utils_converters__WEBPACK_IMPORTED_MODULE_7__["Converters"].html2json(strTemplate, false);
            _models_dom__WEBPACK_IMPORTED_MODULE_5__["DOM"].element(currentNode).insertNode(_utils_converters__WEBPACK_IMPORTED_MODULE_7__["Converters"].json2html(_utils_converters__WEBPACK_IMPORTED_MODULE_7__["Converters"].addWrapJson(nodeTemplate), true, true, false, _this.enableHover), afterNode, true);
            _this._editorService.addNodeToArea(node, nodeTemplate, child);
        };
        // Childs
        actions.children.forEach(function (action) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('template' in action) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(action.template)) {
                contextMenuActionsChild.push(_this.createAction(function (i) { return 'Añadir hijo ' + action.name; }, function (evt) { return clickFunc(node.getSection(), node.getSection().childNodes[node.getSection().childNodes.length], action.template, true); }, true));
            }
        });
        // Siblings
        actions.siblings.forEach(function (action) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('template' in action) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(action.template)) {
                contextMenuActionsSiblings.push(_this.createAction(function (i) { return 'Añadir hermano ' + action.name; }, function (evt) { return clickFunc(node.getSection().parentNode, node.getSection().nextSibling, action.template); }, true));
            }
        });
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["union"])(contextMenuActions, contextMenuActionsChild);
        // Divider
        if (contextMenuActionsChild.length > 0 && contextMenuActionsSiblings.length > 0) {
            contextMenuActions.push(this.createAction(null, null, true, true));
        }
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["union"])(contextMenuActions, contextMenuActionsSiblings);
        contextMenuActions.push(this.createAction(null, null, true, true));
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["union"])(contextMenuActions, this.defaultActions(node));
        this.contextMenuActions = contextMenuActions;
    };
    WysiwygViewComponent.prototype.existActions = function (node) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('actions', node.getSchema()) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node.getSchema().actions);
    };
    WysiwygViewComponent.prototype.existAction = function (node, action) {
        return this.existActions(node) && Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])(action, node.getSchema().actions);
    };
    WysiwygViewComponent.prototype.getAction = function (node, action) {
        return node.getSchema().actions[action];
    };
    WysiwygViewComponent.prototype.defaultActions = function (node) {
        var _this = this;
        var actions = [];
        actions.push(this.createAction(null, null, true, true));
        if ((!this.existAction(node, 'paste') || this.getAction(node, 'paste') === true) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.copyAction)
            && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node)) {
            // Coger node del json --> Cambiar todos los uid del padre e hijos
            actions.push(this.createAction(function (i) { return 'Paste component'; }, function (evt) {
                var sectionNode = new _models_node__WEBPACK_IMPORTED_MODULE_3__["Node"](_this.copyAction.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID), _this.copyAction);
                if (_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_6__["EditorService"].isInsertedNodeValid(node, sectionNode)) {
                    var template = _this._editorService.getJsonNodesByPath(sectionNode);
                    template = _utils_converters__WEBPACK_IMPORTED_MODULE_7__["Converters"].json2html(template, true, true, true, _this.enableHover);
                    _models_dom__WEBPACK_IMPORTED_MODULE_5__["DOM"].element(node.getSection())
                        .insertNode(template, sectionNode.getTarget().childNodes[sectionNode.getTarget().childNodes.length], true);
                    _this._editorService.addNodeToArea(node, _utils_converters__WEBPACK_IMPORTED_MODULE_7__["Converters"].html2json(template, false), true);
                    _this._notification.info('Componente insertado', 'El componente ha sido pegado con éxito.', _app_xedit__WEBPACK_IMPORTED_MODULE_14__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
                }
                else {
                    _this._notification.error('Estructura inválida', 'El componente pegado no es soportado.', _app_xedit__WEBPACK_IMPORTED_MODULE_14__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
                }
            }, true));
        }
        if ((!this.existAction(node, 'copy') || this.getAction(node, 'copy') === true)) {
            actions.push(this.createAction(function (i) { return 'Copy component'; }, function (evt) {
                _this.copyAction = null;
                _this.copyAction = node.getSection();
            }, true));
        }
        if ((!this.existAction(node, 'delete') || this.getAction(node, 'delete') === true)) {
            actions.push(this.createAction(function (i) { return 'Delete component'; }, function (evt) {
                _this._editorService.removeNode(node);
                _models_dom__WEBPACK_IMPORTED_MODULE_5__["DOM"].element(node.getSection()).deleteNode();
            }, true));
        }
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
        actions.name = _models_node__WEBPACK_IMPORTED_MODULE_3__["Node"].getSectionLang(node.getSchema(), _app_xedit__WEBPACK_IMPORTED_MODULE_14__["Xedit"].getLang());
        // Get childs
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('actions', node.getSchema()) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node.getSchema().actions)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('children', node.getSchema().actions)) {
                var children = node.getSchema().actions.children;
                children.map(function (child) {
                    var schema = node.getSchemaNode()[child];
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(schema)) {
                        actions.children.push({
                            name: _models_node__WEBPACK_IMPORTED_MODULE_3__["Node"].getSectionLang(schema, _app_xedit__WEBPACK_IMPORTED_MODULE_14__["Xedit"].getLang()),
                            template: _models_node__WEBPACK_IMPORTED_MODULE_3__["Node"].getSectionTemplate(schema)
                        });
                    }
                });
            }
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('siblings', node.getSchema().actions)) {
                var siblings = node.getSchema().actions.siblings;
                siblings.map(function (sibling) {
                    var schema = node.getSchemaNode()[sibling];
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(schema)) {
                        actions.siblings.push({
                            name: _models_node__WEBPACK_IMPORTED_MODULE_3__["Node"].getSectionLang(schema, _app_xedit__WEBPACK_IMPORTED_MODULE_14__["Xedit"].getLang()),
                            template: _models_node__WEBPACK_IMPORTED_MODULE_3__["Node"].getSectionTemplate(schema)
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('xedit'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WysiwygViewComponent.prototype, "xedit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"])
    ], WysiwygViewComponent.prototype, "basicMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WysiwygViewComponent.prototype, "selectNode", void 0);
    WysiwygViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wysiwyg-view',
            template: __webpack_require__(/*! ./wysiwyg-view.component.html */ "./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.html"),
            styles: [__webpack_require__(/*! ./wysiwyg-view.component.scss */ "./src/app/components/editor/views/wysiwyg-view/wysiwyg-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_6__["EditorService"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], angular2_notifications__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _services_dam_service_dam_service__WEBPACK_IMPORTED_MODULE_13__["DamService"]])
    ], WysiwygViewComponent);
    return WysiwygViewComponent;
}());



/***/ }),

/***/ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/taskbar/properties-global-view/properties-global-view.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <header>Estados</header>\n    <main>\n        <ng-container *ngFor=\"let value of states\">\n            <p (click)=\"restoreSnaptshot(value.key)\">{{ value.message }}</p>\n        </ng-container>\n    </main>\n</div>"

/***/ }),

/***/ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/taskbar/properties-global-view/properties-global-view.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  background-color: #edeff2; }\n:host > div {\n    padding: 0; }\n:host > div > header {\n      position: relative;\n      z-index: 5;\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important; }\n:host > div > main {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n"

/***/ }),

/***/ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/taskbar/properties-global-view/properties-global-view.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PropertiesGlobalViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesGlobalViewComponent", function() { return PropertiesGlobalViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_mappers_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/mappers/router */ "./src/app/core/mappers/router.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PropertiesGlobalViewComponent = /** @class */ (function () {
    function PropertiesGlobalViewComponent(_editorService, http) {
        this._editorService = _editorService;
        this.http = http;
    }
    PropertiesGlobalViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metas = [];
        this.states = [];
        this.baseUrl = _core_mappers_router__WEBPACK_IMPORTED_MODULE_3__["default"].BASE_URL;
        this.suscribeFile = this._editorService.getFile().subscribe(function (file) {
            _this.metas = [];
            _this.file = file;
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
    PropertiesGlobalViewComponent.prototype.dateNow = function () {
        var now = new Date();
        return dateformat__WEBPACK_IMPORTED_MODULE_2___default()(now, 'dd-mm-yyyy');
    };
    PropertiesGlobalViewComponent.prototype.openTree = function (evt, type, callback) {
        var _this = this;
        window['treeModal']
            .openModal('modal-1', type)
            .then(function (selectedId) {
            _app_api__WEBPACK_IMPORTED_MODULE_4__["Api"].getInfoNode(_this.http, selectedId, type, callback, null, null);
        })
            .catch(function (err) { return console.log(err); });
    };
    PropertiesGlobalViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties-global',
            template: __webpack_require__(/*! ./properties-global-view.component.html */ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.html"),
            styles: [__webpack_require__(/*! ./properties-global-view.component.scss */ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PropertiesGlobalViewComponent);
    return PropertiesGlobalViewComponent;
}());



/***/ }),

/***/ "./src/app/components/taskbar/state-controller/state-controller.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/taskbar/state-controller/state-controller.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <header>Estado de elementos</header>\n    <main>\n        <ng-container *ngFor=\"let value of configs; let i = index;\">\n            <app-checkbox [placeholder]=\"value.name\" [checked]=\"value.enable\" (changeValue)=\"updateStates($event, value)\"></app-checkbox>\n        </ng-container>\n    </main>\n</div>"

/***/ }),

/***/ "./src/app/components/taskbar/state-controller/state-controller.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/taskbar/state-controller/state-controller.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  background-color: #edeff2; }\n:host > div {\n    padding: 0; }\n:host > div > header {\n      position: relative;\n      z-index: 5;\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important; }\n:host > div > main {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n"

/***/ }),

/***/ "./src/app/components/taskbar/state-controller/state-controller.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/taskbar/state-controller/state-controller.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StateControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateControllerComponent", function() { return StateControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateControllerComponent = /** @class */ (function () {
    function StateControllerComponent() {
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StateControllerComponent.prototype, "configs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StateControllerComponent.prototype, "updated", void 0);
    StateControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state-controller',
            template: __webpack_require__(/*! ./state-controller.component.html */ "./src/app/components/taskbar/state-controller/state-controller.component.html"),
            styles: [__webpack_require__(/*! ./state-controller.component.scss */ "./src/app/components/taskbar/state-controller/state-controller.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StateControllerComponent);
    return StateControllerComponent;
}());



/***/ }),

/***/ "./src/app/components/taskbar/taskbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/taskbar/taskbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header (clickOutside)=\"closeAttributes($event)\">\n    <div>\n        <nav id=\"xedit-taskbar\" class=\"taskbar\">\n            <ul>\n                <li (click)=\"save()\">\n                    <i class=\"fas fa-save\"></i>\n                </li>\n                <li class=\"separator\"></li>\n                <li (click)=\"undo()\" [ngClass]=\"{disabled: !previousAvailable()}\">\n                    <i class=\"fas fa-undo\"></i>\n                </li>\n                <li (click)=\"redo()\" [ngClass]=\"{disabled: !nextAvailable()}\">\n                    <i class=\"fas fa-redo\"></i>\n                </li>\n            </ul>\n        </nav>\n        <aside class=\"title\">\n            <h2 (click)=\"toggleAttributes($event)\" id=\"xe-task-title\">\n                {{ title }}\n                <i class=\"fas fa-caret-down\"></i>\n            </h2>\n        </aside>\n        <nav class=\"views\">\n            <ul class=\"actions\">\n                <li class=\"option-button\">\n                    <i [ngClass]=\"{'fas': true, 'fa-eye': stateActive === false, 'fa-eye-slash': stateActive === true}\" (click)=\"toggleElementState()\"></i>\n                    <aside (click)=\"openStates($event)\">\n                        <i class=\"fas fa-caret-down\"></i>\n                    </aside>\n                    <div class=\"action-panel\" *ngIf=\"toogleStateConfigs\" (click)=\"$event.stopPropagation()\" (clickOutside)=\"closeStates()\">\n                        <app-state-controller [(configs)]=\"configs\" (updated)=\"saveStateConfigs($event)\"></app-state-controller>\n                    </div>\n                </li>\n                <li class=\"separator\"></li>\n            </ul>\n            <ul *ngIf=\"hasMultiViews()\">\n                <li (click)=\"showComponent(view)\" *ngFor=\"let view of availableViews\" [ngClass]=\"{selected: currentView === view, tabs: true}\">\n                    <span title=\"Editar metadatos\" *ngIf=\"view === 'metadata'; else text_content\"><fa-icon [icon]=\"faBars\"></fa-icon></span>\n                    <ng-template #text_content>{{ view === 'wysiwyg' ? 'Visual' : 'Texto' }}</ng-template>\n                </li>\n            </ul>\n        </nav>\n    </div>\n    <div id=\"attributes\" *ngIf=\"displayToggle\" [@toggleAtributes]>\n        <app-properties-global></app-properties-global>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/components/taskbar/taskbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/taskbar/taskbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: block;\n  position: relative;\n  z-index: 1000; }\n:host > header {\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n:host > header > div {\n      background-color: #3a9e8f;\n      position: relative;\n      font: normal 14px \"Lato\", sans-serif;\n      display: flex;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.57);\n      z-index: 6; }\n:host > header > div > .title {\n        flex-grow: 2;\n        display: flex; }\n:host > header > div > .title > h2 {\n          text-align: center;\n          font: normal 14px \"Lato\", sans-serif;\n          font-size: 16px;\n          color: #e1e4e6;\n          margin: auto;\n          padding: 0;\n          cursor: pointer;\n          transition: color 0.3s ease-in-out; }\n:host > header > div > .title > h2 > i {\n            -webkit-transform: rotate(0);\n                    transform: rotate(0);\n            color: inherit;\n            padding: 0 5px; }\n:host > header > div > .title > h2:hover {\n            color: #edeff2; }\n:host > header > div > .title > h2.disabled {\n            cursor: not-allowed;\n            color: #44c4b1; }\n:host > header > div > .title > h2.selected {\n            color: #edeff2; }\n:host > header > div > .title > h2.selected > i {\n              -webkit-transform: rotate(180deg);\n                      transform: rotate(180deg); }\n:host > header > div > nav {\n        flex-grow: 1;\n        padding: 0;\n        margin: 0;\n        max-width: 30%;\n        min-width: 30%;\n        min-height: 46px;\n        max-height: 46px; }\n:host > header > div > nav.views {\n          display: flex; }\n:host > header > div > nav.views > ul {\n            justify-content: flex-end;\n            flex-grow: 0; }\n:host > header > div > nav.views > ul.actions {\n              flex-grow: 2; }\n:host > header > div > nav > ul {\n          flex-grow: 1;\n          padding: 0;\n          margin: 0;\n          list-style: none;\n          height: 46px;\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          padding: 0 5px; }\n:host > header > div > nav > ul > li {\n            margin: auto 5px auto 0;\n            padding: 5px 10px;\n            color: #e1e4e6;\n            transition: color 0.3s ease-in-out;\n            cursor: pointer; }\n:host > header > div > nav > ul > li.tabs {\n              height: 46px;\n              line-height: 40px;\n              text-transform: uppercase;\n              border-bottom: 2px solid transparent;\n              transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out; }\n:host > header > div > nav > ul > li > i {\n              font-size: 18px; }\n:host > header > div > nav > ul > li.option-button {\n              display: flex;\n              flex-direction: row;\n              position: relative; }\n:host > header > div > nav > ul > li.option-button > aside {\n                margin-left: 5px;\n                padding: 0 2px;\n                flex-grow: 1;\n                background-color: transparent;\n                transition: background-color 0.3s ease-in-out; }\n:host > header > div > nav > ul > li.option-button > aside:hover {\n                  background-color: #e1e4e6; }\n:host > header > div > nav > ul > li.option-button > .action-panel {\n                position: absolute;\n                top: 41px;\n                right: 0;\n                width: 240px;\n                min-width: 220px;\n                width: 100%;\n                background-color: #e1e4e6;\n                box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5); }\n:host > header > div > nav > ul > li.separator {\n              padding: 0;\n              height: 30px;\n              width: 1px;\n              margin: auto 0;\n              background-color: #44c4b1; }\n:host > header > div > nav > ul > li:hover {\n              color: #edeff2; }\n:host > header > div > nav > ul > li.disabled {\n              cursor: not-allowed;\n              color: #44c4b1; }\n:host > header > div > nav > ul > li.selected {\n              border-bottom-color: #edeff2;\n              color: #edeff2; }\n:host > header > #attributes {\n      margin: 15px 50% auto;\n      position: absolute;\n      top: 100%;\n      left: auto;\n      bottom: auto;\n      right: auto;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      max-width: 600px;\n      min-width: 220px;\n      width: 100%;\n      z-index: -1;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5); }\n:host.embebed > header > div {\n    background-color: #f9f9f9; }\n:host.embebed > header > div > .title > h2 {\n      color: #959595; }\n:host.embebed > header > div > .title > h2:hover {\n        color: #5f6362; }\n:host.embebed > header > div > .title > h2.disabled {\n        color: #c4c2c2; }\n:host.embebed > header > div > .title > h2.selected {\n        color: #5f6362; }\n:host.embebed > header > div > nav > ul > li {\n      color: #959595; }\n:host.embebed > header > div > nav > ul > li.separator {\n        background-color: #c4c2c2; }\n:host.embebed > header > div > nav > ul > li:hover {\n        color: #5f6362; }\n:host.embebed > header > div > nav > ul > li.disabled {\n        color: #c4c2c2; }\n:host.embebed > header > div > nav > ul > li.selected {\n        border-bottom-color: #5f6362;\n        color: #5f6362; }\n"

/***/ }),

/***/ "./src/app/components/taskbar/taskbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/taskbar/taskbar.component.ts ***!
  \*********************************************************/
/*! exports provided: TaskbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskbarComponent", function() { return TaskbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/dom */ "./src/app/models/dom.ts");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_configs_statesConfigs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models/configs/statesConfigs */ "./src/app/models/configs/statesConfigs.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _app_xedit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/xedit */ "./src/app/xedit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TaskbarComponent = /** @class */ (function () {
    function TaskbarComponent(_editorService, _stateService, http, _notification, cdr) {
        this._editorService = _editorService;
        this._stateService = _stateService;
        this.http = http;
        this._notification = _notification;
        this.cdr = cdr;
        this.availableViews = [];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"];
        this.currentView = '';
        this.title = 'Document';
        this.displayToggle = false;
        this.toogleStateConfigs = false;
        this.configs = [];
    }
    /************************************ LIFE CYCLE *******************************************/
    TaskbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateConfigs = new _models_configs_statesConfigs__WEBPACK_IMPORTED_MODULE_8__["StateConfigs"]();
        this._editorService.getFile().subscribe(function (obsFile) {
            _this.file = obsFile;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(obsFile)) {
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
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.stateActive) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.stateConfigs.isActive())) {
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
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.viewMenu)) {
            _models_dom__WEBPACK_IMPORTED_MODULE_3__["DOM"].element(this.viewMenu).removeClass('opened');
        }
    };
    TaskbarComponent.prototype.save = function () {
        var _this = this;
        this._editorService.setLoading(true);
        var error = function () {
            console.error('ERROR SAVE DOCUMENT');
            _this._editorService.setLoading(false);
            _this._notification.error('Error', 'Se ha producido un error al guardar el documento.', _app_xedit__WEBPACK_IMPORTED_MODULE_11__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
        };
        var success = function (result) {
            if (result.status === 0) {
                _this._editorService.setLoading(false);
                _this._notification.success('Guardado', 'El documento ha sido guardado.', _app_xedit__WEBPACK_IMPORTED_MODULE_11__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
            }
            else {
                error();
            }
        };
        _app_api__WEBPACK_IMPORTED_MODULE_10__["Api"].saveDocument(this.http, this._editorService.getUpdatedDocument(), success, error);
    };
    TaskbarComponent.prototype.load = function () {
        document.getElementById('open_html').value = '';
        document.getElementById('open_html').click();
    };
    TaskbarComponent.prototype.toggleAttributes = function (event) {
        _models_dom__WEBPACK_IMPORTED_MODULE_3__["DOM"].element(event.target).toggleClass('selected');
        this.displayToggle = !this.displayToggle;
    };
    TaskbarComponent.prototype.closeAttributes = function (evt) {
        var title = document.getElementById('xe-task-title');
        _models_dom__WEBPACK_IMPORTED_MODULE_3__["DOM"].element(title).removeClass('selected');
        var element = evt.target;
        // if ($(element).parents('app-tree-modal').length === 0) {
        //     this.displayToggle = false;
        // }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewMenu'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskbarComponent.prototype, "viewMenu", void 0);
    TaskbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskbar',
            template: __webpack_require__(/*! ./taskbar.component.html */ "./src/app/components/taskbar/taskbar.component.html"),
            styles: [__webpack_require__(/*! ./taskbar.component.scss */ "./src/app/components/taskbar/taskbar.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('toggleAtributes', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate(-50%, -100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate(-50%, 0)', opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate(-50%, 0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate(-50%, -100%)', opacity: 0 })),
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"],
            _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TaskbarComponent);
    return TaskbarComponent;
}());



/***/ }),

/***/ "./src/app/core/api.ts":
/*!*****************************!*\
  !*** ./src/app/core/api.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mappers_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mappers/router */ "./src/app/core/mappers/router.ts");

var Api = /** @class */ (function () {
    function Api() {
    }
    /****************** API METHODS ******************/
    Api.request = function (http, endpoint, query_params, post_data, _headers, successCallback, errorCallback, extra, http_method) {
        if (extra === void 0) { extra = {}; }
        if (http_method === void 0) { http_method = 'get'; }
        var _a = _mappers_router__WEBPACK_IMPORTED_MODULE_0__["default"].setToken(query_params, _headers), params = _a.params, headers = _a.headers;
        var url = _mappers_router__WEBPACK_IMPORTED_MODULE_0__["default"].configUrl(endpoint, params);
        var func = http.get(url, { headers: headers });
        if (http_method === 'post') {
            func = http.post(url, JSON.stringify(post_data), { headers: headers });
        }
        // TODO PUT, DELETE....
        return func.subscribe(function (result) {
            successCallback(result, extra);
        }, function (error) {
            errorCallback(extra);
        });
    };
    return Api;
}());
/* harmony default export */ __webpack_exports__["default"] = (Api);


/***/ }),

/***/ "./src/app/core/mappers/router.ts":
/*!****************************************!*\
  !*** ./src/app/core/mappers/router.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xedit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xedit */ "./src/app/core/mappers/xedit.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);



var Router = /** @class */ (function () {
    function Router() {
    }
    Router.getRouter = function () {
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(window[_xedit__WEBPACK_IMPORTED_MODULE_0__["Xedit"].BASE]) && Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])("router", window[_xedit__WEBPACK_IMPORTED_MODULE_0__["Xedit"].BASE])
            ? window[_xedit__WEBPACK_IMPORTED_MODULE_0__["Xedit"].BASE].router
            : null;
    };
    Router.getRouterProperty = function (prop, def) {
        if (def === void 0) { def = null; }
        var router = Router.getRouter();
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(router)) {
            def = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(prop, router) ? router[prop] : null;
        }
        return def;
    };
    Router.setToken = function (params, headers) {
        var token = Router.getRouterProperty(Router.TOKEN);
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(token)) {
            if (token.type === "url") {
                params[token.field] = token.value;
            }
            else if (token.type === "bearer") {
                headers = headers.set("Authorization", "Bearer " + token.value);
            }
            else if (token.type === "basic") {
                headers = headers.set("Authorization", "Basic " + token.value);
            }
        }
        return { params: params, headers: headers };
    };
    Router.configUrl = function (endpoint, _params) {
        if (_params === void 0) { _params = {}; }
        var params = Object.assign({}, _params);
        var info = {};
        if (!/^(f|ht)tps?:\/\//i.test(endpoint)) {
            info = this.get(endpoint);
            endpoint = Router.getRouterProperty(Router.BASE_URL, "") + "/" + info["path"];
        }
        // Added query params
        var match;
        var path = endpoint;
        while ((match = /\{([^{}]*)}/g.exec(path)) !== null) {
            var val = null;
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(match[1], params)) {
                val = params[match[1]];
                delete params[match[1]];
            }
            else {
                val = Router.getExtraParam(match[1]);
            }
            if (val != null) {
                endpoint = endpoint.replace(match[0], val);
            }
            path = path.replace(match[0], "");
        }
        // Extra params
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])("params", info)) {
            for (var _i = 0, _a = Object.keys(info["params"]); _i < _a.length; _i++) {
                var property = _a[_i];
                var val = info["params"][property];
                match = /^\{(.*)}$/g.exec(val);
                if (match != null) {
                    var param = Router.getExtraParam(match[1]);
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(param)) {
                        val = param;
                    }
                }
                if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(property, params)) {
                    params[property] = val;
                }
                // filters.push(`${property}=${val}`);
            }
        }
        var query = Object.keys(params).length > 0 ? "?" + query_string__WEBPACK_IMPORTED_MODULE_2__["stringify"](params) : "";
        return "" + endpoint + query;
    };
    Router.get = function (name) {
        var endpoint = null;
        var path = name.split(".");
        for (var _i = 0, _a = Object.keys(path); _i < _a.length; _i++) {
            var key = _a[_i];
            endpoint = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(endpoint)
                ? Router.getRouterProperty(Router.ENDPOINTS)[path[key]]
                : endpoint[path[key]];
        }
        return endpoint;
    };
    Router.getExtraParam = function (param, def) {
        if (def === void 0) { def = null; }
        var params = Router.getRouterProperty(Router.EXTRA_PARAMS);
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(params) && Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(param, params)) {
            def = params[param];
        }
        return def;
    };
    Router.ROUTER = "router";
    Router.TOKEN = "token";
    Router.BASE_URL = "baseUrl";
    Router.ENDPOINTS = "endpoints";
    Router.EXTRA_PARAMS = "attrs";
    return Router;
}());
/* harmony default export */ __webpack_exports__["default"] = (Router);


/***/ }),

/***/ "./src/app/core/mappers/xedit.ts":
/*!***************************************!*\
  !*** ./src/app/core/mappers/xedit.ts ***!
  \***************************************/
/*! exports provided: Xedit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xedit", function() { return Xedit; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

var Xedit = /** @class */ (function () {
    function Xedit() {
    }
    // ************************************** Getters and setters **************************************/
    Xedit.getXedit = function () {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(Xedit.BASE, window) ? window[Xedit.BASE] : null;
    };
    Xedit.getDocument = function () {
        var xedit = Xedit.getXedit();
        var res = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xedit)) {
            res = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('document', xedit) ? xedit.document : null;
        }
        return res;
    };
    Xedit.getDam = function () {
        var xedit = Xedit.getXedit();
        var res = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xedit)) {
            res = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('dam', xedit) ? xedit.dam : 'tree';
        }
        return res;
    };
    Xedit.getData = function (property) {
        if (property === void 0) { property = null; }
        var xedit = Xedit.getXedit();
        var res = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xedit)) {
            res = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('data', xedit) ? xedit['data'][property] : xedit['data'];
        }
        return res;
    };
    Xedit.BASE = '$xedit';
    Xedit.TOKEN = 'token';
    Xedit.API_URL = 'apiUrl';
    Xedit.NOTIFICATION_DEFAULT_SETTINGS = {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
    };
    return Xedit;
}());



/***/ }),

/***/ "./src/app/directives/mathjax.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/mathjax.directive.ts ***!
  \*************************************************/
/*! exports provided: MathjaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathjaxDirective", function() { return MathjaxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mathjax_unpacked_MathJax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mathjax/unpacked/MathJax */ "./node_modules/mathjax/unpacked/MathJax.js");
/* harmony import */ var mathjax_unpacked_MathJax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mathjax_unpacked_MathJax__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MathjaxDirective = /** @class */ (function () {
    function MathjaxDirective(el) {
        this.el = el;
        this.element = null;
        this.element = el.nativeElement;
    }
    MathjaxDirective.prototype.ngOnChanges = function () {
        /* this.element.innerHTML = this.MathJax;
         console.log('>> ngOnChanges --------------------------');
         //this.element.style.backgroundColor = 'yellow';
         MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element]);
         console.log(this.element)
         console.log('>> ngOnChanges --------------------------'); */
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MathjaxDirective.prototype, "MathJax", void 0);
    MathjaxDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[MathJax]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MathjaxDirective);
    return MathjaxDirective;
}());



/***/ }),

/***/ "./src/app/elements/blocks/acordion/acordion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/elements/blocks/acordion/acordion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<collapsible-list-item>\n    <collapsible-header class=\"waves-effect\" [ngClass]=\"{'open': isOpen}\" (click)=\"toggle()\">\n        {{ title }}\n    </collapsible-header>\n    <collapsible-body [class]=\"className\" [expanded]=\"false\">\n        <ng-content></ng-content>\n    </collapsible-body>\n</collapsible-list-item>"

/***/ }),

/***/ "./src/app/elements/blocks/acordion/acordion.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/elements/blocks/acordion/acordion.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1; }\n:host > collapsible-list-item {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n    margin: 0 auto 2px 0; }\n:host > collapsible-list-item > collapsible-header {\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important;\n      position: relative;\n      z-index: 3;\n      min-height: unset;\n      border-bottom: 2px solid transparent;\n      transition: border-bottom-color 0.3s ease-in-out; }\n:host > collapsible-list-item > collapsible-header:hover {\n        border-bottom-color: #44c4b1; }\n:host > collapsible-list-item > collapsible-header.open {\n        color: #474d4b;\n        border-bottom-color: #3a9e8f; }\n:host > collapsible-list-item > collapsible-body {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n"

/***/ }),

/***/ "./src/app/elements/blocks/acordion/acordion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/elements/blocks/acordion/acordion.component.ts ***!
  \****************************************************************/
/*! exports provided: AcordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordionComponent", function() { return AcordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcordionComponent = /** @class */ (function () {
    function AcordionComponent() {
        this.isOpen = false;
    }
    AcordionComponent.prototype.ngOnInit = function () {
    };
    AcordionComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AcordionComponent.prototype, "className", void 0);
    AcordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acordion',
            template: __webpack_require__(/*! ./acordion.component.html */ "./src/app/elements/blocks/acordion/acordion.component.html"),
            styles: [__webpack_require__(/*! ./acordion.component.scss */ "./src/app/elements/blocks/acordion/acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AcordionComponent);
    return AcordionComponent;
}());



/***/ }),

/***/ "./src/app/elements/blocks/tree-modal/tree-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/elements/blocks/tree-modal/tree-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-smart-modal id=\"modal-1\" identifier=\"modal-1\" class=\"tree-modal\" #modal>\n  <app-tree #tree (selected)=\"closeModal('modal-1', $event)\" [type]=\"type\" [path]=\"path\"></app-tree>\n</ngx-smart-modal>"

/***/ }),

/***/ "./src/app/elements/blocks/tree-modal/tree-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/elements/blocks/tree-modal/tree-modal.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/elements/blocks/tree-modal/tree-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/elements/blocks/tree-modal/tree-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: TreeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModalComponent", function() { return TreeModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _elements_blocks_tree_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elements/blocks/tree/tree.component */ "./src/app/elements/blocks/tree/tree.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeModalComponent = /** @class */ (function () {
    function TreeModalComponent(ngxModal) {
        this.ngxModal = ngxModal;
        this.close = false;
    }
    TreeModalComponent.prototype.openModal = function (id, type, p) {
        var _this = this;
        if (p === void 0) { p = []; }
        this.close = false;
        this.selectedId = null;
        this.path = p;
        this.type = type;
        this.ngxModal.open(id);
        this.tree.resetTreeModel();
        var promise = new Promise(function (resolve, reject) {
            var loop = window.setInterval(function () {
                try {
                    var treeModal = window['treeModal'];
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(treeModal.selectedId)) {
                        window.clearInterval(loop);
                        _this.ngxModal.close(id);
                        resolve(treeModal.selectedId);
                    }
                    else if (treeModal.close && Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(treeModal.selectedId)) {
                        window.clearInterval(loop);
                        _this.ngxModal.close(id);
                        reject('Closed without selection');
                    }
                }
                catch (e) {
                    window.clearInterval(loop);
                    _this.ngxModal.close(id);
                    reject(e);
                }
            }, 300);
        });
        return promise;
    };
    TreeModalComponent.prototype.closeModal = function (id, selectedId) {
        if (selectedId === void 0) { selectedId = null; }
        this.selectedId = selectedId;
        this.close = true;
    };
    TreeModalComponent.prototype.ngOnInit = function () {
        window['treeModal'] = this;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree'),
        __metadata("design:type", _elements_blocks_tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeComponent"])
    ], TreeModalComponent.prototype, "tree", void 0);
    TreeModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-modal',
            template: __webpack_require__(/*! ./tree-modal.component.html */ "./src/app/elements/blocks/tree-modal/tree-modal.component.html"),
            styles: [__webpack_require__(/*! ./tree-modal.component.scss */ "./src/app/elements/blocks/tree-modal/tree-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"]])
    ], TreeModalComponent);
    return TreeModalComponent;
}());



/***/ }),

/***/ "./src/app/elements/blocks/tree/tree.component.html":
/*!**********************************************************!*\
  !*** ./src/app/elements/blocks/tree/tree.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-wrapper\">\n  <div class=\"media-show\">\n    <figure *ngIf=\"imgSrc !== null\">\n      <img [src]=\"imgSrc\" alt=\"Image preview\">\n      <figcaption>{{ imgName }}</figcaption>\n    </figure>\n  </div>\n  <div class=\"tree\">\n    <h4>Select Resource <span *ngIf=\"resourceCount !== -1\">({{ resourceCount }} availables)</span></h4>\n    <tree-root\n      #Tree\n      [nodes]=\"treeModel\"\n      [options]=\"treeOptions\"\n      (toggleExpanded)=\"onToggle($event)\"\n    >\n    <ng-template #treeNodeTemplate let-node let-index=\"index\">\n      <div class=\"node\">\n        <fa-icon class=\"icon\" [ngClass]=\"node.data.icon\" [icon]=\"setIcon(node.data)\"></fa-icon>\n        <span class=\"node-name\">{{ node.data.name }}</span>\n      </div>\n    </ng-template>\n    </tree-root>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/elements/blocks/tree/tree.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/elements/blocks/tree/tree.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: 48rem; }\n\n.tree {\n  padding-left: 0;\n  margin-left: 1rem;\n  height: 44rem;\n  flex: 1 1; }\n\n.tree h4 {\n    font-size: 1.5rem; }\n\n.tree .node {\n    border-bottom: 1px dashed #cccccc;\n    min-width: 20rem; }\n\n.tree .node .node-name {\n      margin-left: 1rem; }\n\n.tree .node .icon {\n      padding-left: 1rem; }\n\n.tree .node .folder_images {\n      color: #75cd9d; }\n\n.tree .node .projects {\n      color: #43a1a2; }\n\n.tree .node .nodetype {\n      color: #c8c039; }\n\n.tree .node .image {\n      color: #43a1a2; }\n\n.tree .node .server {\n      color: #e45b5b; }\n\n.tree .node .root {\n      color: #43a1a2; }\n\n.tree .node .video {\n      color: #43a1a2; }\n\n.media-show {\n  width: 25%;\n  align-content: center;\n  display: flex;\n  margin: 0 1rem 0 1rem;\n  border-right: 1px solid #cccc;\n  padding: 1rem 1rem 0 0; }\n\n.media-show figure {\n    width: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    text-align: center; }\n\n.media-show figure img {\n      width: 100%;\n      max-height: 30rem;\n      -o-object-fit: contain;\n         object-fit: contain; }\n\n.media-show figure figcaption {\n      margin-top: 1rem;\n      color: #777777; }\n"

/***/ }),

/***/ "./src/app/elements/blocks/tree/tree.component.ts":
/*!********************************************************!*\
  !*** ./src/app/elements/blocks/tree/tree.component.ts ***!
  \********************************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/mappers/router */ "./src/app/core/mappers/router.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TreeComponent = /** @class */ (function () {
    function TreeComponent(http, _editorService) {
        var _this = this;
        this.http = http;
        this._editorService = _editorService;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resourceCount = -1;
        this.imgSrc = null;
        this.imgName = null;
        this.treeOptions = {
            actionMapping: {
                mouse: {
                    click: function (tree, node, $event) {
                        var _a = node.data, type = _a.type, id = _a.id, icon = _a.icon, name = _a.name;
                        if (type === TreeComponent_1.TYPE_FOLDER) {
                            angular_tree_component__WEBPACK_IMPORTED_MODULE_5__["TREE_ACTIONS"].TOGGLE_EXPANDED(tree, node, $event);
                            _this.imgSrc = null;
                        }
                        else if (type === 'item' && icon === TreeComponent_1.TYPE_IMAGE) {
                            _this.imgSrc = _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_7__["default"].configUrl(_app_api__WEBPACK_IMPORTED_MODULE_3__["Api"].getResourceUrl(), { id: id });
                            _this.imgName = name;
                        }
                    },
                    dblClick: function (tree, node, $event) {
                        var type = node.data.type;
                        if (type !== TreeComponent_1.TYPE_EMPTY && type !== TreeComponent_1.TYPE_FOLDER) {
                            _this.selectNode(node);
                        }
                    },
                    contextMenu: function (tree, node, $event) {
                        $event.preventDefault();
                    }
                },
            }
        };
    }
    TreeComponent_1 = TreeComponent;
    TreeComponent.prototype.ngOnInit = function () {
        this.resetTreeModel();
    };
    TreeComponent.prototype.resetTreeModel = function () {
        this.treeModel = [{
                id: 1,
                name: 'Root',
                hasChildren: true,
                isRoot: true,
                icon: 'root',
                type: TreeComponent_1.TYPE_FOLDER,
                children: []
            }];
        this.imgSrc = null;
        this.tree.treeModel.collapseAll();
        // TODO LOAD PATH TREE
    };
    TreeComponent.prototype.processChildren = function (nodes) {
        var children = [];
        for (var nodeId in nodes) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(nodeId)) {
                var obj = {
                    id: nodeId,
                    name: nodes[nodeId]['name'],
                    type: nodes[nodeId]['type'],
                    icon: nodes[nodeId]['icon'],
                };
                if (nodes[nodeId]['type'] === 'folder') {
                    obj['hasChildren'] = true;
                    obj['children'] = [];
                    obj['resources'] = this.resourceCount;
                }
                children.push(obj);
            }
        }
        if (children.length === 0) {
            children.push({
                name: 'No hay elementos disponibles...',
                type: 'empty',
            });
        }
        return children;
    };
    TreeComponent.prototype.onMenuItemSelected = function (e) {
        var id = e.node.data.id;
        this.selected.emit(id);
    };
    TreeComponent.prototype.requestChildren = function (nodeId, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        var error = function () {
            console.error('ERROR DE API');
            _this._editorService.setLoading(false);
        };
        var success = function (result) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('status', result) && result.status === 0) {
                var nodes = result.response;
                nodes = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('l1', nodes) ? nodes['l1'] : [];
                _this.resourceCount = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('resources_count', nodes) ? nodes['resources_count'] : -1;
                nodes = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('nodes', nodes) ? nodes['nodes'] : [];
                callback(_this.processChildren(nodes));
            }
            else {
                error();
            }
            _this._editorService.setLoading(false);
        };
        return _app_api__WEBPACK_IMPORTED_MODULE_3__["Api"].getTreeChildren(this.http, nodeId, this.type, success, error);
    };
    TreeComponent.prototype.selectNode = function (node) {
        this.selected.emit(node.data.id);
    };
    /**************************************/
    TreeComponent.prototype.onToggle = function (_a) {
        var _this = this;
        var node = _a.node, isExpanded = _a.isExpanded;
        var data = node.data;
        var name = data.name, id = data.id, resources = data.resources;
        var children = data.children;
        if (isExpanded && children.length === 0) {
            node.data.children = [{
                    name: 'Loading...'
                }];
            this.tree.treeModel.update();
            this.requestChildren(id, function (nodes) {
                node.data.children = nodes;
                _this.tree.treeModel.update();
            });
        }
        else if (children.length > 0) {
            this.resourceCount = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(resources) ? 0 : resources;
        }
    };
    TreeComponent.prototype.setIcon = function (_a) {
        var icon = _a.icon;
        var icons = {
            'root': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSitemap"],
            'projects': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBoxes"],
            'nodetype': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBox"],
            'server': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faServer"],
            'folder_images': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFolder"],
            'image': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileImage"]
        };
        return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(icon, icons) ? icons[icon] : null;
    };
    var TreeComponent_1;
    TreeComponent.TYPE_FOLDER = 'folder';
    TreeComponent.TYPE_EMPTY = 'empty';
    TreeComponent.TYPE_IMAGE = 'image';
    TreeComponent.TYPE_VIDEO = 'video';
    TreeComponent.TYPE_LINK = 'link';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Tree'),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "tree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TreeComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "path", void 0);
    TreeComponent = TreeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/elements/blocks/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/elements/blocks/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/button/button.component.html":
/*!*************************************************************!*\
  !*** ./src/app/elements/forms/button/button.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick($event)\">\n    {{ text }}\n    <i [ngClass]=\"['icon', icon]\" *ngIf=\"icon !== ''\"></i>\n</button>"

/***/ }),

/***/ "./src/app/elements/forms/button/button.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/elements/forms/button/button.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host > button {\n  width: 100%;\n  font: normal 14px \"Lato\", sans-serif;\n  border: none;\n  border-radius: 0px;\n  padding: 5px 10px;\n  text-align: center;\n  color: #edeff2;\n  background-color: #3ea091;\n  transition: background-color 0.3s ease-in-out; }\n:host > button > .icon {\n    padding-left: 5px; }\n:host > button:hover {\n    background-color: #3a9e8f; }\n:host > button:active {\n    background-color: #1e574e; }\n"

/***/ }),

/***/ "./src/app/elements/forms/button/button.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/elements/forms/button/button.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.onClick = function ($evt) {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.click)) {
            this.click($evt);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Function)
    ], ButtonComponent.prototype, "click", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/elements/forms/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/elements/forms/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/checkbox/checkbox.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/elements/forms/checkbox/checkbox.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\n    <input type=\"checkbox\" [name]=\"name\" [checked]=checked (change)=\"changeValues($event)\"> {{ placeholder }}\n</label>"

/***/ }),

/***/ "./src/app/elements/forms/checkbox/checkbox.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/elements/forms/checkbox/checkbox.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex; }\n  :host > label {\n    margin: auto 0;\n    flex-grow: 1; }\n  :host > label > input {\n      margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/elements/forms/checkbox/checkbox.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/forms/checkbox/checkbox.component.ts ***!
  \***************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "checked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CheckboxComponent.prototype, "changeValue", void 0);
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/elements/forms/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/elements/forms/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/TabsFormMapper.ts":
/*!**********************************************************!*\
  !*** ./src/app/elements/forms/dynform/TabsFormMapper.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _questions_question_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/question-dropdown */ "./src/app/elements/forms/dynform/questions/question-dropdown.ts");
/* harmony import */ var _questions_question_textbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions/question-textbox */ "./src/app/elements/forms/dynform/questions/question-textbox.ts");
/* harmony import */ var _questions_question_depdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/question-depdrop */ "./src/app/elements/forms/dynform/questions/question-depdrop.ts");
/* harmony import */ var _questions_question_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions/question-textarea */ "./src/app/elements/forms/dynform/questions/question-textarea.ts");
/* harmony import */ var _questions_question_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions/question-date */ "./src/app/elements/forms/dynform/questions/question-date.ts");
/* harmony import */ var _questions_question_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions/question-image */ "./src/app/elements/forms/dynform/questions/question-image.ts");







/**
 * This class extracts and maps data about the additional form
 * for uploading or editing resources.
 */
var TabsFormMapper = /** @class */ (function () {
    /**@ignore */
    function TabsFormMapper(formSchema) {
        this.hasSections = false;
        /**
         * The extracted forms as a dict
         */
        this.forms = null;
        /**
         * The extracted Questions instances for every field of the form
         */
        this.fields = null;
        /**
         * @ignore
         */
        this.tabs = null;
        this.init(formSchema);
    }
    /**@ignore */
    TabsFormMapper.prototype.setForms = function (forms) {
        this.forms = forms;
        return this;
    };
    /**@ignore */
    TabsFormMapper.prototype.getForms = function () {
        return this.forms;
    };
    /**@ignore */
    TabsFormMapper.prototype.getFields = function () {
        return this.fields;
    };
    /**@ignore */
    TabsFormMapper.prototype.setFields = function (fields) {
        this.fields = fields;
    };
    TabsFormMapper.prototype.getTabs = function () {
        return this.tabs;
    };
    TabsFormMapper.prototype.setTabs = function (tabs) {
        this.tabs = tabs;
    };
    TabsFormMapper.prototype.setTitle = function (title) {
        this.title = title;
    };
    TabsFormMapper.prototype.getTitle = function () {
        return this.title;
    };
    /**
     * Initializes and process the form to obtain que question fields
     */
    TabsFormMapper.prototype.initForm = function () {
        var localForm = this.getForms();
        this.title = localForm.title;
        this.tabs = this.handleTabs(localForm.tabs);
    };
    /**@ignore */
    TabsFormMapper.prototype.getValue = function (field, key, _default) {
        if (_default === void 0) { _default = ''; }
        var value = Object.assign({}, field);
        var keys = key.split('.');
        if (Array.isArray(keys)) {
            for (var i = 0; i < keys.length; i++) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(Object, value) && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(keys[i], value)) {
                    value = value[keys[i]];
                }
                else {
                    break;
                }
            }
        }
        if (typeof value === 'object') {
            value = _default;
        }
        return value;
    };
    /**
     * Process the tabs from the schema.
     * @param rawTabs The raw schema
     */
    TabsFormMapper.prototype.handleTabs = function (rawTabs, asset) {
        var _this = this;
        if (asset === void 0) { asset = null; }
        var tabs = [];
        var fields = null;
        this.hasSections = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('sections', rawTabs[0]);
        if (!this.hasSections) {
            tabs = rawTabs.map(function (tab) {
                fields = _this.handleForm(tab.fields, asset);
                return { title: tab.title, questions: fields };
            });
        }
        else {
            var sections_1;
            tabs = rawTabs.map(function (tab) {
                sections_1 = _this.handleSections(tab.sections, asset);
                return { title: tab.title, sections: sections_1 };
            });
        }
        return tabs;
    };
    TabsFormMapper.prototype.handleSections = function (rawSections, asset) {
        var _this = this;
        var fields = null;
        var sections = rawSections.map(function (section) {
            fields = _this.handleForm(section.fields, asset);
            return { title: section.title, questions: fields };
        });
        return sections;
    };
    /**
     * Evaluates every field in the form and creates the questions
     * @param raw The raw data from the form
     * @param asset Some asset to use its data
     */
    TabsFormMapper.prototype.handleForm = function (raw, asset) {
        var _this = this;
        if (asset === void 0) { asset = null; }
        var newFields = raw.map(function (field) {
            var object = null;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(asset)) {
                var key = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('realName', field.object) ? field.object.realName : field.object.key;
                field.object.val = _this.getValue(asset, key);
            }
            field.object.type = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('type', field) ? field.type : 'text';
            if (field.object.type === 'dropdown') {
                object = new _questions_question_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownQuestion"](field.object);
            }
            else if (field.object.type === 'text') {
                object = new _questions_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"](field.object);
            }
            else if (field.object.type === 'date') {
                object = new _questions_question_date__WEBPACK_IMPORTED_MODULE_5__["DateQuestion"](field.object);
            }
            else if (field.object.type === 'depdrop') {
                object = new _questions_question_depdrop__WEBPACK_IMPORTED_MODULE_3__["DepDropQuestion"](field.object);
            }
            else if (field.object.type === 'text-area') {
                object = new _questions_question_textarea__WEBPACK_IMPORTED_MODULE_4__["TextAreaQuestion"](field.object);
            }
            else if (field.object.type === 'image') {
                object = new _questions_question_image__WEBPACK_IMPORTED_MODULE_6__["ImageQuestion"](field.object);
            }
            return object;
        });
        return newFields.sort(function (a, b) { return a.order - b.order; });
    };
    /**
     * Gets a property from the selected object
     * @param obj The object to be inspected (The haystack)
     * @param prop The property to be found (The needle)
     * @param _default The default value if the needle is not found
     */
    TabsFormMapper.prototype.getProp = function (obj, prop, _default) {
        if (_default === void 0) { _default = null; }
        var result = _default;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(prop, obj)) {
            result = obj[prop];
        }
        return result;
    };
    /**
     * Initializes the mapper extracting values from the environment and the active window,
     * prioritising the window object.
     */
    TabsFormMapper.prototype.init = function (formSchema) {
        this.setForms(formSchema)
            .initForm();
    };
    return TabsFormMapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (TabsFormMapper);


/***/ }),

/***/ "./src/app/elements/forms/dynform/dyn-form.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/elements/forms/dynform/dyn-form.module.ts ***!
  \***********************************************************/
/*! exports provided: DynFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynFormModule", function() { return DynFormModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dyn_tabform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dyn-tabform.component */ "./src/app/elements/forms/dynform/dyn-tabform.component.ts");
/* harmony import */ var _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions/dyn-question/dyn-question.component */ "./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _tabs_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tab.component */ "./src/app/elements/forms/dynform/tabs/tab.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/elements/forms/dynform/tabs/tabs.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section/section.component */ "./src/app/elements/forms/dynform/section/section.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DynFormModule = /** @class */ (function () {
    function DynFormModule() {
    }
    DynFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]],
            declarations: [_dyn_tabform_component__WEBPACK_IMPORTED_MODULE_3__["DynTabformComponent"], _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__["DynQuestionComponent"], _tabs_tab_component__WEBPACK_IMPORTED_MODULE_6__["TabComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_8__["SectionComponent"]],
            bootstrap: [],
            exports: [_dyn_tabform_component__WEBPACK_IMPORTED_MODULE_3__["DynTabformComponent"], _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__["DynQuestionComponent"], _tabs_tab_component__WEBPACK_IMPORTED_MODULE_6__["TabComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], DynFormModule);
    return DynFormModule;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/dyn-tabform.component.css":
/*!******************************************************************!*\
  !*** ./src/app/elements/forms/dynform/dyn-tabform.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-cont {\n    width: 100%;\n}\n\n.tab-cont form {\n    margin-top: -1em;\n}\n\n.form-tabs {\n    display: flex;\n    justify-content: center;\n}\n\n.tabs-q {\n    flex: 0 50%;\n    text-align: center;\n}\n\n.tabs-q div {\n    align-items: baseline;\n}\n\n.tabs-title {\n    width: 100%;\n    text-align: center;\n}\n\n.tabs-title h2 {\n    margin: 0 0 15px;\n    padding: 0;\n    font-size: 18px;\n    font-weight: 700;\n    color: #00a397;\n}\n\n.tabs-title:hover {\n    cursor: pointer;\n\n}\n\n.tab-container {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.single-cont {\n    width:100%;\n    padding-top: 1em;\n    display: -ms-grid;\n    display: grid;\n    flex-wrap: wrap;\n    justify-content: center;\n    grid-template-columns: repeat(auto-fill, 40rem);\n    height: 100%;\n    -ms-grid-rows: 10rem;\n        grid-template-rows: 10rem;\n    align-items: center;\n}"

/***/ }),

/***/ "./src/app/elements/forms/dynform/dyn-tabform.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/elements/forms/dynform/dyn-tabform.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-cont\">\n  <form #dynTabForm (ngSubmit)=\"onSubmit()\" [formGroup]=\"tabform\">\n    <dam-tabs *ngIf=\"tabs.length > 1 || forceTabs; else singleForm\">\n      <dam-tab *ngFor=\"let tab of tabs\" [tabTitle]=\"tab.title\" class=\"tab-container\">\n        <ng-container *ngIf=\"formMapper.hasSections; else noSection\">\n          <app-section \n            *ngFor=\"let section of tab.sections; let i = index\" \n            [title]=\"section.title\"\n            [isHidden]=\"i === 0 ? false : true\"\n          >\n            <app-question \n              *ngFor=\"let question of section.questions\" \n              class=\"tabs-q\" \n              [question]=\"question\" \n              [form]=\"tabform\"\n              [token]=\"token\"\n              [questionClass]=\"questionClass\"\n              [fetchUrl]=\"fetchUrl\"\n              >\n            </app-question>\n          </app-section>\n        </ng-container>\n        <ng-template #noSection>\n          <div class=\"single-cont\">\n            <app-question \n              *ngFor=\"let question of tab.questions\" \n              class=\"tabs-q\" \n              [question]=\"question\" \n              [form]=\"tabform\"\n              [token]=\"token\"\n              [questionClass]=\"questionClass\"\n              [fetchUrl]=\"fetchUrl\">\n            </app-question>\n          </div>\n        </ng-template>\n      </dam-tab>\n    </dam-tabs>\n    <ng-template #singleForm>\n      <ng-container *ngFor=\"let tab of tabs\">\n        <div class=\"single-cont\">\n          <div *ngFor=\"let question of questions\" class=\"form-row\">\n            <app-question \n            [question]=\"question\" \n            [form]=\"tabform\"\n            [token]=\"token\"\n            [questionClass]=\"questionClass\"\n            [fetchUrl]=\"fetchUrl\">\n            </app-question>\n          </div>\n        </div>\n      </ng-container>\n    </ng-template>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/elements/forms/dynform/dyn-tabform.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/elements/forms/dynform/dyn-tabform.component.ts ***!
  \*****************************************************************/
/*! exports provided: DynTabformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynTabformComponent", function() { return DynTabformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/question-control.service */ "./src/app/elements/forms/dynform/questions/question-control.service.ts");
/* harmony import */ var _TabsFormMapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabsFormMapper */ "./src/app/elements/forms/dynform/TabsFormMapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynTabformComponent = /** @class */ (function () {
    function DynTabformComponent(qcs) {
        this.qcs = qcs;
        this.schema = {};
        this.tabs = [];
        /**
        * The array of questions
        */
        this.questions = [];
        /**
         * The payload input with all the data
         */
        this.payLoad = {};
        /**
         * An emitter to emit the data form after finished
         */
        this.sendForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         *The authorization token for api calls.
         *
         * @type {string}
         * @memberof DynQuestionComponent
         */
        this.token = null;
        /**
         *The URL to use for fetching depdrop and dopdrown options.
         *
         * @type {string}
         * @memberof DynQuestionComponent
         */
        this.fetchUrl = null;
        this.questionClass = 'dam-form-item dam-edit-item';
        this.forceTabs = false;
        this.show = false;
        this.formMapper = null;
    }
    DynTabformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formMapper = new _TabsFormMapper__WEBPACK_IMPORTED_MODULE_2__["default"](this.schema);
        this.tabs = this.formMapper.getTabs();
        this.extractQuestions(this.formMapper.hasSections);
        this.tabform.valueChanges.subscribe(function (data) {
            _this.sendForm.emit(data);
        });
    };
    DynTabformComponent.prototype.ngOnChanges = function () { };
    DynTabformComponent.prototype.extractQuestions = function (hasSections) {
        var _this = this;
        this.questions = [];
        if (hasSections) {
            this.tabs.map(function (tab) {
                tab.sections.map(function (section) {
                    _this.questions = _this.questions.concat(section.questions);
                });
            });
        }
        else {
            this.tabs.map(function (tab) {
                _this.questions = _this.questions.concat(tab.questions);
            });
        }
        this.tabform = this.qcs.toFormGroup(this.questions);
    };
    /**
     * Sends the data as a json string when submitted
     */
    DynTabformComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.tabform.value);
    };
    DynTabformComponent.prototype.toggleVisible = function () {
        this.show = !this.show;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "schema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "payLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "sendForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynTabformComponent.prototype, "token", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynTabformComponent.prototype, "fetchUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "questionClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "forceTabs", void 0);
    DynTabformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dyn-tabform',
            template: __webpack_require__(/*! ./dyn-tabform.component.html */ "./src/app/elements/forms/dynform/dyn-tabform.component.html"),
            styles: [__webpack_require__(/*! ./dyn-tabform.component.css */ "./src/app/elements/forms/dynform/dyn-tabform.component.css")],
            providers: [_questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]]
        }),
        __metadata("design:paramtypes", [_questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]])
    ], DynTabformComponent);
    return DynTabformComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"questionClass\" [formGroup]=\"form\">\n    <label [attr.for]=\"question.key\">\n        {{ question.label }}\n        <span style=\"color:red\" *ngIf=\"question.required\">*</span>\n    </label>\n\n    <div [ngSwitch]=\"question.controlType\">\n        <input\n            *ngSwitchCase=\"'text'\"\n            [formControlName]=\"question.key\"\n            [id]=\"question.key\"\n            [ngModel]=\"question.val\"\n            [type]=\"question.type\"\n            [required]=\"question.required\"\n        />\n        <input\n            *ngSwitchCase=\"'date'\"\n            [formControlName]=\"question.key\"\n            [id]=\"question.key\"\n            [ngModel]=\"question.val | date: 'yyyy-MM-dd'\"\n            [type]=\"question.type\"\n            [required]=\"question.required\"\n        />\n\n        <div *ngSwitchCase=\"'image'\" class=\"question-img\">\n            <input\n                [formControlName]=\"question.key\"\n                [id]=\"question.key\"\n                [ngModel]=\"question.val\"\n                [type]=\"text\"\n                [required]=\"question.required\"\n            />\n            <button (click)=\"clicked($event)\">\n                <i class=\"far fa-images\"></i>\n            </button>\n        </div>\n\n        <textarea\n            *ngSwitchCase=\"'text-area'\"\n            class=\"dam-textarea\"\n            [formControlName]=\"question.key\"\n            [id]=\"question.key\"\n            [required]=\"question.required\"\n            >{{ question.val }}\n        </textarea>\n\n        <ng-select\n            class=\"dam-select\"\n            [id]=\"question.key\"\n            [(ngModel)]=\"question.val\"\n            *ngSwitchCase=\"'dropdown'\"\n            [formControlName]=\"question.key\"\n            [items]=\"question.options\"\n            bindValue=\"key\"\n            bindLabel=\"value\"\n            [multiple]=\"question.multi\"\n            [required]=\"question.required\"\n        >\n        </ng-select>\n        <ng-select\n            class=\"dam-select\"\n            [id]=\"question.key\"\n            [ngModel]=\"question.val\"\n            *ngSwitchCase=\"'depdrop'\"\n            [formControlName]=\"question.key\"\n            [items]=\"question.options\"\n            [required]=\"question.required\"\n        >\n        </ng-select>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DynQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynQuestionComponent", function() { return DynQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Component extracted from the Angular docs for creating dynamic questions
 * for dynamic forms.
 */
var DynQuestionComponent = /** @class */ (function () {
    /**@ignore */
    function DynQuestionComponent(http, ngxModal) {
        this.http = http;
        this.ngxModal = ngxModal;
        /**
         *The authorization token for api calls.
         *
         * @type {string}
         * @memberof DynQuestionComponent
         */
        this.token = null;
        /**
         *The URL to use for fetching depdrop and dopdrown options.
         *
         * @type {string}
         * @memberof DynQuestionComponent
         */
        this.fetchUrl = null;
        this.questionClass = 'dam-form-item dam-edit-item';
    }
    /**@ignore */
    DynQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_3__["hasIn"])('ref', this.question)) {
            this.form.get(this.question['ref']).valueChanges.subscribe(function (val) {
                _this.searchOptions();
            });
        }
        if (this.question.controlType === 'dropdown' && this.question['fetchable']) {
            this.getOptions();
        }
    };
    Object.defineProperty(DynQuestionComponent.prototype, "isValid", {
        /**
         * Returns the validity of the form control for the question
         * @returns {Boolean} True if valid, False otherwise
         */
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the options for the depdrop component
     */
    DynQuestionComponent.prototype.searchOptions = function () {
        var _this = this;
        var value = this.form.get(this.question['ref']).value;
        if (value !== '') {
            this.fetchOptions(this.question['endpoint'], this.question['param'], value).subscribe(function (resp) {
                _this.question['options'] = [];
                _this.question['options'] = resp['result'].data.map(function (item) { return ({
                    key: item[_this.question['map'].key], value: item[_this.question['map'].value]
                }); });
            });
        }
    };
    /**
     * Gets the options for the dropdown component
     */
    DynQuestionComponent.prototype.getOptions = function () {
        var _this = this;
        this.fetchOptions(this.question['endpoint'], '', '').subscribe(function (resp) {
            _this.question['options'] = [];
            _this.question['options'] = resp['result'].data.map(function (item) { return ({
                key: item[_this.question['map'].key], value: item[_this.question['map'].value]
            }); });
        });
    };
    DynQuestionComponent.prototype.fetchOptions = function (end, key, param) {
        var url = this.fetchUrl + end;
        var params = {};
        params[key] = param;
        var heads = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
        });
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.token)) {
            heads = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + this.token,
                'Accept': 'application/json'
            });
        }
        return this.http.get(url, { headers: heads, params: params });
    };
    DynQuestionComponent.prototype.clicked = function (e) {
        var _this = this;
        window['treeModal']
            .openModal('modal-1', this.question.controlType)
            .then(function (selectedId) {
            _this.question.val = selectedId;
        })
            .catch(function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _question_base__WEBPACK_IMPORTED_MODULE_2__["QuestionBase"])
    ], DynQuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DynQuestionComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynQuestionComponent.prototype, "token", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynQuestionComponent.prototype, "fetchUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynQuestionComponent.prototype, "questionClass", void 0);
    DynQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./dyn-question.component.html */ "./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__["NgxSmartModalService"]])
    ], DynQuestionComponent);
    return DynQuestionComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-base.ts":
/*!*******************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-base.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

/**
 * Represents a simple question with the needed values to work in a form
 */
var QuestionBase = /** @class */ (function () {
    /**@ignore */
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.readonly = !!options.readonly;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || "";
        var val = options.val || null;
        this.set(options, "map", {}).setVal(val);
    }
    /**
     * Securely sets the value from the selected object
     * @param object The object to be used
     * @param field The field to set the value
     * @param _default The default value if any
     */
    QuestionBase.prototype.set = function (object, field, _default) {
        if (_default === void 0) { _default = null; }
        var value = _default;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(field, object)) {
            value = object[field];
        }
        this[field] = value;
        return this;
    };
    /**
     * Sets the val property and returns this
     * @param val The new val value
     */
    QuestionBase.prototype.setVal = function (val) {
        if (val === void 0) { val = null; }
        this.val = val;
        return this;
    };
    return QuestionBase;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-control.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-control.service.ts ***!
  \******************************************************************************/
/*! exports provided: QuestionControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionControlService", function() { return QuestionControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service that manages the questions and creates the form groups.
 */
var QuestionControlService = /** @class */ (function () {
    /**@ignore */
    function QuestionControlService() {
    }
    /**
     * Create a new form group given a questions array.
     * @param {QuestionBase<any>} questions The questions array
     * @returns {FormGroup} The created form group
     */
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required
                ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                    value: question.value || "",
                    disabled: !!question.readonly
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                    value: question.value || "",
                    disabled: !!question.readonly
                });
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    QuestionControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-date.ts":
/*!*******************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-date.ts ***!
  \*******************************************************************/
/*! exports provided: DateQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateQuestion", function() { return DateQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a date input field question from a question base */
var DateQuestion = /** @class */ (function (_super) {
    __extends(DateQuestion, _super);
    /**@ignore */
    function DateQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'date';
        _this.type = options['type'] || '';
        return _this;
    }
    return DateQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-depdrop.ts":
/*!**********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-depdrop.ts ***!
  \**********************************************************************/
/*! exports provided: DepDropQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepDropQuestion", function() { return DepDropQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a dropdown field question from a question base
 *  where their options depend on another dropdown or depdrop selection
*/
var DepDropQuestion = /** @class */ (function (_super) {
    __extends(DepDropQuestion, _super);
    /**@ignore */
    function DepDropQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'depdrop';
        /** The available options for the dropdown */
        _this.options = [];
        _this.options = options['options'] || [];
        _this.ref = options['ref'] || 0;
        _this.endpoint = options['endpoint'] || '';
        _this.param = options['param'] || '';
        return _this;
    }
    return DepDropQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-dropdown.ts":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-dropdown.ts ***!
  \***********************************************************************/
/*! exports provided: DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/** This components extends a dropdown field question from a question base */
var DropdownQuestion = /** @class */ (function (_super) {
    __extends(DropdownQuestion, _super);
    /**@ignore */
    function DropdownQuestion(options, multi, searchable, fetchable, endpoint) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'dropdown';
        _this.set(options, 'options', [])
            .set(options, 'multi', false)
            .set(options, 'searchable', false)
            .set(options, 'fetchable', false)
            .set(options, 'endpoint', '');
        return _this;
    }
    /** Sets the value(s) checking whether the value is an array or not */
    DropdownQuestion.prototype.setVal = function (val) {
        var _this = this;
        if (val === void 0) { val = null; }
        var result;
        if (Array.isArray(val)) {
            result = val.map(function (index) {
                return _this.valFixer(index);
            });
        }
        else {
            result = this.valFixer(val);
        }
        this.val = result;
        return this;
    };
    /**@ignore */
    DropdownQuestion.prototype.valFixer = function (val) {
        var result = { key: null, value: null };
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["is"])(Object, val)) {
            var key = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(this.map['key'], val) ? val[this.map['key']] : null;
            var value = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(this.map['value'], val) ? val[this.map['value']] : null;
            result = key;
        }
        else {
            result = val;
        }
        return result;
    };
    return DropdownQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-image.ts":
/*!********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-image.ts ***!
  \********************************************************************/
/*! exports provided: ImageQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageQuestion", function() { return ImageQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ImageQuestion = /** @class */ (function (_super) {
    __extends(ImageQuestion, _super);
    /**@ignore */
    function ImageQuestion(options, callback) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'image';
        _this.set(options, 'callback', 'modal-1');
        return _this;
    }
    return ImageQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-textarea.ts":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-textarea.ts ***!
  \***********************************************************************/
/*! exports provided: TextAreaQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaQuestion", function() { return TextAreaQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a text area field question from a question base */
var TextAreaQuestion = /** @class */ (function (_super) {
    __extends(TextAreaQuestion, _super);
    /**@ignore */
    function TextAreaQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'text-area';
        _this.type = options['type'] || '';
        if (_this.val instanceof Object) {
            _this.value = '';
        }
        else {
            _this.value = _this.val;
        }
        return _this;
    }
    return TextAreaQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-textbox.ts":
/*!**********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-textbox.ts ***!
  \**********************************************************************/
/*! exports provided: TextboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a text input field question from a question base */
var TextboxQuestion = /** @class */ (function (_super) {
    __extends(TextboxQuestion, _super);
    /**@ignore */
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'text';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/section/section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/section/section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dynform-section\">\n  <div \n    [ngClass]=\"isHidden ? 'dynform-header form-hidden' : 'dynform-header'\" \n    (click)=\"toggle()\"\n  >\n    {{ title }}\n    <span style=\"float:right;\">{{ isHidden ? ' (+)' : ' (-)' }}</span>\n  </div>\n  \n  <div class=\"dynform-body\" *ngIf=\"!isHidden\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/elements/forms/dynform/section/section.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/section/section.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dynform-section {\n  margin: 0 1rem 0 1rem; }\n  .dynform-section .dynform-header {\n    text-align: center;\n    border: 1px solid #cccccc;\n    margin-top: 2rem;\n    padding: 1rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer; }\n  .dynform-section .dynform-body {\n    width: 100%;\n    display: -ms-grid;\n    display: grid;\n    flex-wrap: wrap;\n    justify-content: center;\n    grid-template-columns: repeat(auto-fill, 40rem);\n    height: 100%;\n    -ms-grid-rows: 10rem;\n        grid-template-rows: 10rem;\n    align-items: center;\n    border: 1px solid #cccccc;\n    border-top: 0; }\n"

/***/ }),

/***/ "./src/app/elements/forms/dynform/section/section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/section/section.component.ts ***!
  \*********************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
        this.title = '';
        this.isHidden = false;
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    SectionComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SectionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SectionComponent.prototype, "isHidden", void 0);
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/elements/forms/dynform/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/elements/forms/dynform/section/section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/tabs/tab.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/elements/forms/dynform/tabs/tab.component.ts ***!
  \**************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tabTitle'),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dam-tab',
            styles: [
                "\n    div.pane {\n      width:100%;\n    }\n  "
            ],
            template: "\n    <div *ngIf=\"active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/tabs/tabs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/forms/dynform/tabs/tabs.component.ts ***!
  \***************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ "./src/app/elements/forms/dynform/tabs/tab.component.ts");
/**
 * The main component that renders single TabComponent
 * instances.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (value) { return value.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dam-tabs',
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n        <span>{{ tab.title }}</span>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  ",
            styles: [
                "\n    :host {\n      width: 100%;\n    }\n    .tab-close {\n      color: gray;\n      text-align: right;\n      cursor: pointer;\n    }\n    .nav-tabs {\n      border-bottom: 1px solid #ddd;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: left;\n    }\n    .nav {\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n    }\n    .nav-tabs > li {\n      margin-bottom: -1px;\n    }\n    .nav > li {\n      display: block;\n    }\n    .nav-tabs > li.active > span {\n      color: #fff;\n      cursor: default;\n      background-color: #00a397;\n      border: 1px solid #ddd;\n      border-bottom-color: rgb(221, 221, 221);\n      border-bottom-color: transparent;\n    }\n    .nav-tabs > li > span {\n      margin-right: 2px;\n      line-height: 1.42857143;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0;\n      cursor: ponter;\n      user-select: none;\n      color: #666;\n    }\n    .nav > li > span {\n      position: relative;\n      display: block;\n      padding: 10px 15px;\n      text-decoration: none;\n      cursor: ponter;\n      user-select: none;\n    }\n\n    .nav-tabs > li:hover {\n      cursor: pointer;\n    }\n    "
            ]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/input-acordion/input-acordion.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/elements/forms/input-acordion/input-acordion.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"xe-acordion-title\">\n    <span *ngIf=\"title !== ''\">{{ title }}</span>\n    <app-button [text]=\"actionText\" [icon]=\"'fas fa-plus'\" [click]=\"addElement.bind(this)\"></app-button>\n</section>\n<ng-container *ngFor=\"let value of values; let i = index\">\n    <div>\n        <input type=\"text\" [value]=\"value\" (change)=\"updateElement($event, i)\">\n        <button (click)=\"removeElement(i)\">\n            <i class=\"fas fa-minus\"></i>\n        </button>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/elements/forms/input-acordion/input-acordion.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/elements/forms/input-acordion/input-acordion.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  background-color: #edeff2; }\n:host > .xe-acordion-title {\n    margin: 5px 0;\n    display: flex; }\n:host > .xe-acordion-title > app-button {\n      flex-grow: 2; }\n:host > div {\n    display: flex;\n    flex-direction: row;\n    margin: 5px 0; }\n:host > div > input {\n      flex-grow: 2;\n      text-indent: 5px;\n      width: 0; }\n:host > div > button {\n      width: 16px;\n      height: 16px;\n      padding: 0;\n      line-height: 16px;\n      font-size: 12px;\n      text-align: center;\n      border-radius: 100%;\n      background-color: #db4949;\n      color: #edeff2;\n      border: 0;\n      margin: auto 0 auto 5px;\n      transition: background-color 0.3s ease-in-out; }\n:host > div > button:hover {\n        background-color: #d13737; }\n"

/***/ }),

/***/ "./src/app/elements/forms/input-acordion/input-acordion.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/elements/forms/input-acordion/input-acordion.component.ts ***!
  \***************************************************************************/
/*! exports provided: InputAcordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAcordionComponent", function() { return InputAcordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputAcordionComponent = /** @class */ (function () {
    function InputAcordionComponent() {
        this.title = '';
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputAcordionComponent.prototype.ngOnInit = function () {
        // console.log(this.values, typeof this.values);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputAcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputAcordionComponent.prototype, "actionText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputAcordionComponent.prototype, "values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InputAcordionComponent.prototype, "changeValue", void 0);
    InputAcordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-acordion',
            template: __webpack_require__(/*! ./input-acordion.component.html */ "./src/app/elements/forms/input-acordion/input-acordion.component.html"),
            styles: [__webpack_require__(/*! ./input-acordion.component.scss */ "./src/app/elements/forms/input-acordion/input-acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputAcordionComponent);
    return InputAcordionComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/listbox/listbox.component.html":
/*!***************************************************************!*\
  !*** ./src/app/elements/forms/listbox/listbox.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select name=\"\" (change)=\"changeValues($event)\">\n    <ng-container *ngFor=\"let key of options | keys\">\n        <option [value]=\"key\" [selected]=\"key == selected\">{{ options[key] }}</option>\n    </ng-container>\n</select>"

/***/ }),

/***/ "./src/app/elements/forms/listbox/listbox.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/elements/forms/listbox/listbox.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #edeff2;\n  display: inline; }\n  :host > select {\n    border: none;\n    margin: 5px;\n    background: transparent;\n    outline: none; }\n"

/***/ }),

/***/ "./src/app/elements/forms/listbox/listbox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/elements/forms/listbox/listbox.component.ts ***!
  \*************************************************************/
/*! exports provided: ListboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListboxComponent", function() { return ListboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListboxComponent = /** @class */ (function () {
    function ListboxComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListboxComponent.prototype, "changeValue", void 0);
    ListboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listbox',
            template: __webpack_require__(/*! ./listbox.component.html */ "./src/app/elements/forms/listbox/listbox.component.html"),
            styles: [__webpack_require__(/*! ./listbox.component.scss */ "./src/app/elements/forms/listbox/listbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListboxComponent);
    return ListboxComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"xe-acordion-title\">\n    <span *ngIf=\"title !== ''\">{{ title }}</span>\n    <app-button [text]=\"actionText\" [icon]=\"'fas fa-plus'\" [click]=\"addElement.bind(this)\"></app-button>\n</section>\n<ng-container *ngFor=\"let value of values; let i = index\">\n    <div>\n        <app-multi-input [data]=\"value\" (changeValue)=\"updateElement($event)\" [editable]=\"true\"></app-multi-input>\n        <button (click)=\" removeElement(i) \">\n            <i class=\"fas fa-minus \"></i>\n        </button>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  background-color: #edeff2;\n  display: block; }\n:host > .xe-acordion-title {\n    display: flex;\n    margin: 5px 0; }\n:host > .xe-acordion-title > app-button {\n      flex-grow: 2; }\n:host > div {\n    display: flex;\n    flex-direction: row;\n    margin: 5px 0; }\n:host > div > app-multi-input {\n      flex-grow: 1;\n      width: 0; }\n:host > div > button {\n      width: 16px;\n      height: 16px;\n      padding: 0;\n      line-height: 16px;\n      font-size: 12px;\n      text-align: center;\n      border-radius: 100%;\n      background-color: #db4949;\n      color: #edeff2;\n      border: 0;\n      margin: auto 0 auto 5px;\n      transition: background-color 0.3s ease-in-out; }\n:host > div > button:hover {\n        background-color: #d13737; }\n"

/***/ }),

/***/ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MultiInputAcordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiInputAcordionComponent", function() { return MultiInputAcordionComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiInputAcordionComponent = /** @class */ (function () {
    function MultiInputAcordionComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._values = {};
        this.title = '';
    }
    MultiInputAcordionComponent.prototype.ngOnInit = function () {
        this._values = this.values.reduce(function (acc, value) {
            var key = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(value)[0];
            acc[key] = value[key];
            return acc;
        }, this._values);
    };
    MultiInputAcordionComponent.prototype.removeElement = function (index) {
        var key = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(this.values[index])[0];
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(key, this._values)) {
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
        var oldKey = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(oldValue) ? '' : Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(oldValue)[0];
        var style = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(value)[0];
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(oldKey)) {
            this._values[style] = value[style];
        }
        else {
            var valuesClone = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._values);
            this._values = {};
            for (var key in valuesClone) {
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
            Object(ramda__WEBPACK_IMPORTED_MODULE_0__["forEachObjIndexed"])(function (_value, key) {
                var json = {};
                json[key] = _value.replace(/;$/, '');
                result_1.push(json);
            }, data);
            data = result_1;
        }
        this.changeValue.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], MultiInputAcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], MultiInputAcordionComponent.prototype, "actionText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], MultiInputAcordionComponent.prototype, "values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MultiInputAcordionComponent.prototype, "changeValue", void 0);
    MultiInputAcordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-input-acordion',
            template: __webpack_require__(/*! ./multi-input-acordion.component.html */ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.html"),
            styles: [__webpack_require__(/*! ./multi-input-acordion.component.scss */ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiInputAcordionComponent);
    return MultiInputAcordionComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/multi-input/multi-input.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/multi-input/multi-input.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"hasAttrNameValue\" [ngIfElse]=\"name\">\n    <ng-template [ngIf]=\"editable\" [ngIfElse]=\"static\">\n        <label (click)=\"updateLabel()\">\n            {{ attrName }}\n        </label>\n    </ng-template>\n    <ng-template #static>\n        <label>\n            {{ attrName }}\n        </label>\n    </ng-template>\n    <span>:</span>\n</ng-template>\n<ng-template #name>\n    <input type=\"text\" [value]=\"isEmptyValue(attrName)\" (change)=\"setAttrName($event)\" (blur)=\"setAttrName($event)\">\n    <span>:</span>\n</ng-template>\n<input type=\"text\" [name]=\"attrName\" [value]=\"isEmptyValue(attrValue)\" (change)=\"changeValues($event)\">"

/***/ }),

/***/ "./src/app/elements/forms/multi-input/multi-input.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/multi-input/multi-input.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/./src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/./src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/./src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/./src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  margin: 5px 0;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px; }\n:host > label {\n    max-width: 100px; }\n:host > input {\n    flex-grow: 1;\n    text-indent: 5px;\n    width: 0; }\n:host > * {\n    margin: auto 5px auto 0; }\n:host:last-child() {\n    margin: auto 0; }\n"

/***/ }),

/***/ "./src/app/elements/forms/multi-input/multi-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/elements/forms/multi-input/multi-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: MultiInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiInputComponent", function() { return MultiInputComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiInputComponent = /** @class */ (function () {
    function MultiInputComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editable = false;
    }
    Object.defineProperty(MultiInputComponent.prototype, "data", {
        set: function (data) {
            this.attrName = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(data)[0];
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
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(data) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data) ? '' : data;
    };
    MultiInputComponent.prototype.updateLabel = function () {
        this.hasAttrNameValue = !this.hasAttrNameValue;
        var json = {};
        json[this.attrName] = this.attrValue;
        this.oldValue = json;
    };
    MultiInputComponent.prototype.hasAttrName = function () {
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.attrName) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(this.attrName);
    };
    MultiInputComponent.prototype.setAttrName = function (evt) {
        this.attrName = evt.target.value;
        this.hasAttrNameValue = this.hasAttrName();
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.attrValue) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(this.attrValue)) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MultiInputComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], MultiInputComponent.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MultiInputComponent.prototype, "changeValue", void 0);
    MultiInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-input',
            template: __webpack_require__(/*! ./multi-input.component.html */ "./src/app/elements/forms/multi-input/multi-input.component.html"),
            styles: [__webpack_require__(/*! ./multi-input.component.scss */ "./src/app/elements/forms/multi-input/multi-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiInputComponent);
    return MultiInputComponent;
}());



/***/ }),

/***/ "./src/app/models/configs/clipboardConfigs.ts":
/*!****************************************************!*\
  !*** ./src/app/models/configs/clipboardConfigs.ts ***!
  \****************************************************/
/*! exports provided: ClipboardConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardConfigs", function() { return ClipboardConfigs; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ "./src/app/models/configs/configs.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ClipboardConfigs = /** @class */ (function (_super) {
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
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(config)) {
            return configs;
        }
        for (var i = 0; i < configs.length; i++) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('id', configs[i])) {
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
        var active = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('active', this.configs) ? this.configs.active : null;
        return active;
    };
    ClipboardConfigs.prototype.addConfig = function (config) {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.configs)) {
            this.configs = ClipboardConfigs.DEFAULT;
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
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(data)) {
                data = _this.self.DEFAULT;
            }
            _this.configs = data;
        });
    };
    ClipboardConfigs.save = function (data, group) {
        if (group === void 0) { group = ClipboardConfigs.GROUP; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(group)) {
            group = ClipboardConfigs.GROUP;
        }
        return _super.save.call(this, data, group);
    };
    ClipboardConfigs.get = function (group) {
        if (group === void 0) { group = ClipboardConfigs.GROUP; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(group)) {
            group = ClipboardConfigs.GROUP;
        }
        return _super.get.call(this, group);
    };
    ClipboardConfigs.callback = function (error, value) {
        if (error) {
            console.error(error);
        }
        else {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value)) {
                value = ClipboardConfigs.DEFAULT;
            }
        }
        return value;
    };
    ClipboardConfigs.GROUP = 'clipboardConfigs';
    ClipboardConfigs.DEFAULT = {
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
}(_configs__WEBPACK_IMPORTED_MODULE_1__["Configs"]));



/***/ }),

/***/ "./src/app/models/configs/configs.ts":
/*!*******************************************!*\
  !*** ./src/app/models/configs/configs.ts ***!
  \*******************************************/
/*! exports provided: Configs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configs", function() { return Configs; });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);

var Configs = /** @class */ (function () {
    function Configs() {
    }
    Configs.init = function () {
        localforage__WEBPACK_IMPORTED_MODULE_0__["config"]({
            driver: localforage__WEBPACK_IMPORTED_MODULE_0__["LOCALSTORAGE"],
            name: Configs.NAME,
            version: 1.0,
            storeName: Configs.NAME,
            description: 'xedit configs storage'
        });
        return localforage__WEBPACK_IMPORTED_MODULE_0__;
    };
    Configs.save = function (data, gr) {
        if (gr === void 0) { gr = 'configs'; }
        return this.init().setItem(gr, data, this.callback);
    };
    Configs.get = function (gr) {
        if (gr === void 0) { gr = 'configs'; }
        return this.init().getItem(gr, this.callback);
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

/***/ "./src/app/models/configs/statesConfigs.ts":
/*!*************************************************!*\
  !*** ./src/app/models/configs/statesConfigs.ts ***!
  \*************************************************/
/*! exports provided: StateConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateConfigs", function() { return StateConfigs; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ "./src/app/models/configs/configs.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StateConfigs = /** @class */ (function (_super) {
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
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(config)) {
            return configs;
        }
        for (var i = 0; i < configs.length; i++) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('id', configs[i])) {
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
        var active = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('active', this.configs) ? this.configs.active : null;
        return active;
    };
    StateConfigs.prototype.addConfig = function (config) {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.configs)) {
            this.configs = StateConfigs.DEFAULT;
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
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(data)) {
                data = _this.self.DEFAULT;
            }
            _this.configs = data;
        });
    };
    StateConfigs.save = function (data, group) {
        if (group === void 0) { group = StateConfigs.GROUP; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(group)) {
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
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value)) {
                value = StateConfigs.DEFAULT;
            }
        }
        return value;
    };
    StateConfigs.GROUP = 'statesController';
    StateConfigs.DEFAULT = {
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
}(_configs__WEBPACK_IMPORTED_MODULE_1__["Configs"]));



/***/ }),

/***/ "./src/app/models/dom.ts":
/*!*******************************!*\
  !*** ./src/app/models/dom.ts ***!
  \*******************************/
/*! exports provided: DOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DOM = /** @class */ (function () {
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
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(attr, attributtes)) {
            return attributtes[attr];
        }
        return attributtes.default;
    };
    DOM.prototype.classExists = function (className) {
        var index = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(className, this.classes);
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
        if (selector instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            element = selector.nativeElement;
        }
        else if (selector instanceof HTMLElement) {
            element = selector;
        }
        else {
            element = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](document.body).nativeElement.querySelector(selector);
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
        var index = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(className, classes);
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
        var index = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(className, classes);
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

/***/ "./src/app/models/file.ts":
/*!********************************!*\
  !*** ./src/app/models/file.ts ***!
  \********************************/
/*! exports provided: FileHistory, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHistory", function() { return FileHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/app/models/history.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _xedit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xedit */ "./src/app/xedit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FileHistory = /** @class */ (function () {
    // Constructor
    function FileHistory(content, message) {
        if (content === void 0) { content = null; }
        if (message === void 0) { message = null; }
        if (content != null) {
            this.content = content;
            this.message = message;
            this.type = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["is"])(String, content) ? FileHistory.TYPE_TEXT : FileHistory.TYPE_JSON;
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

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(json) {
        if (json === void 0) { json = null; }
        var _this = this;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(json)) {
            throw TypeError('Invalid arguments');
        }
        _this = _super.call(this, File.createContent(json.nodes)) || this;
        _this.metas = json.metas;
        _this.css = [];
        _this.js = [];
        _this.name = json.name;
        var schemas = {};
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(json.nodes)) {
            Object.keys(json.nodes).forEach(function (nodeKey) {
                var node = json.nodes[nodeKey];
                schemas[nodeKey] = node.schema;
                _this.css = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(_this.css, Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('css', node) ? node.css : []);
                _this.js = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(_this.js, Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('js', node) ? node.js : []);
            });
        }
        _xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].setConf('schemas', schemas);
        _xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].setConf('baseUrl', json.baseUrl);
        _xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].setConf('routerMapper', json.routerMapper);
        return _this;
    }
    /**************** Getters and setter ************************/
    File.prototype.getCss = function () {
        return this.css;
    };
    File.prototype.getJs = function () {
        return this.js;
    };
    File.prototype.getMetadata = function () {
        return this.metadata;
    };
    File.prototype.setMetadata = function (meta) {
        return this.metadata = meta;
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
            nodes[property].content = _utils_converters__WEBPACK_IMPORTED_MODULE_2__["Converters"].html2json(nodes[property].content);
        });
        return new FileHistory(nodes, 'Init state');
    };
    return File;
}(_history__WEBPACK_IMPORTED_MODULE_0__["History"]));



/***/ }),

/***/ "./src/app/models/history.ts":
/*!***********************************!*\
  !*** ./src/app/models/history.ts ***!
  \***********************************/
/*! exports provided: History */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);



var History = /** @class */ (function () {
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
            this.remove(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["remove"])(0, this.pos + 1, this.states), this.db);
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
            var stateId = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
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
        this.db = localforage__WEBPACK_IMPORTED_MODULE_2__["createInstance"]({
            driver: localforage__WEBPACK_IMPORTED_MODULE_2__["INDEXEDDB"],
            name: 'xedit',
            version: 1.0,
            size: 4980736,
            storeName: 'history',
            description: 'Document history'
        });
        this.sc = localforage__WEBPACK_IMPORTED_MODULE_2__["createInstance"]({
            driver: localforage__WEBPACK_IMPORTED_MODULE_2__["INDEXEDDB"],
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

/***/ "./src/app/models/node.ts":
/*!********************************!*\
  !*** ./src/app/models/node.ts ***!
  \********************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _xedit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xedit */ "./src/app/xedit.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
/* harmony import */ var _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/mappers/router */ "./src/app/core/mappers/router.ts");






var Node = /** @class */ (function () {
    // Constructor
    function Node(uuid, target, attributes) {
        if (attributes === void 0) { attributes = {}; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(uuid) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(name)) {
            throw new TypeError('Invalid arguments');
        }
        this.uuid = uuid;
        this.name = target.tagName.toLowerCase();
        this.target = target;
        this.section = Node.getContainer(this.target);
        this.uuidSectionsPath = Node.getContextPath(this.target, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_EDITOR, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_UUID, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_UUID, [], false, true);
        this.sectionsPath = Node.getContextPath(this.target, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_EDITOR, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE, [], true);
        this.areaId = this.uuidSectionsPath.shift();
        this.attributes = attributes;
        this.schemaNode = _xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].getConf('schemas')[this.areaId];
        this.schema = this.schemaNode[this.getSection().getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE)];
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
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.attributes[name]) ? null : this.attributes[name];
    };
    Node.prototype.setAttributes = function (attributes) {
        this.attributes = attributes;
    };
    Node.prototype.setAttribute = function (name, value) {
        if (name === _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK && this.getHtmlTag() === 'IMG ') {
            this.attributes[name] = value;
            this.attributes['src'] = _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_5__["default"].configUrl(_api__WEBPACK_IMPORTED_MODULE_4__["Api"].getResourceUrl(), { id: value });
        }
        else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(name, this.getAvailableAttributes())) {
            this.attributes[name] = value;
        }
    };
    /********************** PUBLIC METHODS *********************/
    Node.prototype.getType = function () {
        var type = Node.TYPE_OTHER;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])('img', this.name)) {
            type = Node.TYPE_IMAGE;
        }
        else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])('video', this.name)) {
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
        if (this.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK, null) != null) {
            attrName = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK;
            auxTag = this.name;
        }
        else if (this.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE, null) != null) {
            attrName = this.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE);
        }
        return _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].getAvailableAttribute(attrName, auxTag);
    };
    /*********************** STATIC METHODS ***************************************/
    Node.getContainer = function (element, attribute) {
        if (attribute === void 0) { attribute = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE; }
        var container = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element) && element.hasAttribute(attribute)) {
            container = element;
        }
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(container) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element.parentNode)
            ? container
            : Node.getContainer(element.parentNode, attribute);
    };
    /**
     * Calculate uuid path to xedit node
     */
    Node.getContextPath = function (element, rootTag, hasAttribute, attribute, path, onlyAttribute, rootTagIncluded) {
        if (rootTag === void 0) { rootTag = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_EDITOR; }
        if (hasAttribute === void 0) { hasAttribute = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_UUID; }
        if (attribute === void 0) { attribute = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_UUID; }
        if (path === void 0) { path = []; }
        if (onlyAttribute === void 0) { onlyAttribute = false; }
        if (rootTagIncluded === void 0) { rootTagIncluded = false; }
        var parent = element.parentNode;
        if ((!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element) &&
            (!onlyAttribute || element.hasAttribute(hasAttribute)) &&
            element.nodeName.toLowerCase() !== rootTag) ||
            rootTagIncluded) {
            path.unshift(element.getAttribute(attribute));
        }
        return element.nodeName.toLowerCase() === rootTag || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(parent)
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
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(section)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('lang', section) &&
                Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(Object, section.lang) &&
                Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(lang, section.lang)) {
                name = section.lang[lang];
            }
            else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('name', section)) {
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
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('view', section) && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(String, section.view)) {
            template = _utils_converters__WEBPACK_IMPORTED_MODULE_2__["Converters"].json2html(_utils_converters__WEBPACK_IMPORTED_MODULE_2__["Converters"].html2json(section.view));
        }
        return template;
    };
    Node.TYPE_IMAGE = 'image';
    Node.TYPE_VIDEO = 'video';
    Node.TYPE_OTHER = 'other';
    return Node;
}());



/***/ }),

/***/ "./src/app/models/schema/xedit-mapper.ts":
/*!***********************************************!*\
  !*** ./src/app/models/schema/xedit-mapper.ts ***!
  \***********************************************/
/*! exports provided: XeditMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XeditMapper", function() { return XeditMapper; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

var XeditMapper = /** @class */ (function () {
    function XeditMapper() {
    }
    /************************* PUBLIC METHODS *************************/
    XeditMapper.getAvailableAttribute = function (name, tagName) {
        if (tagName === void 0) { tagName = null; }
        var attributes = XeditMapper.ATTRIBUTES['*'].attributes.accept;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(name, XeditMapper.ATTRIBUTES) &&
            Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('attributes', XeditMapper.ATTRIBUTES[name])) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('accept', XeditMapper.ATTRIBUTES[name].attributes)) {
                attributes = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["union"])(attributes, XeditMapper.ATTRIBUTES[name].attributes.accept);
            }
            if (tagName && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(tagName, XeditMapper.ATTRIBUTES)) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('accept', XeditMapper.ATTRIBUTES[tagName].attributes)) {
                    attributes = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["union"])(attributes, XeditMapper.ATTRIBUTES[tagName].attributes.accept);
                }
            }
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('reject', XeditMapper.ATTRIBUTES[name].attributes)) {
                attributes = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["difference"])(attributes, XeditMapper.ATTRIBUTES[name].attributes.reject);
            }
            if (tagName && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(tagName, XeditMapper.ATTRIBUTES)) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('reject', XeditMapper.ATTRIBUTES[tagName].attributes)) {
                    attributes = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["difference"])(attributes, XeditMapper.ATTRIBUTES[tagName].attributes.reject);
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

/***/ "./src/app/pipes/debug/debug.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/debug/debug.pipe.ts ***!
  \*******************************************/
/*! exports provided: DebugPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugPipe", function() { return DebugPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DebugPipe = /** @class */ (function () {
    function DebugPipe() {
    }
    DebugPipe.prototype.transform = function (value, args) {
        console.log('VALUE', value, 'TYPEOF', typeof value, 'ARGS', args);
    };
    DebugPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'debug'
        })
    ], DebugPipe);
    return DebugPipe;
}());



/***/ }),

/***/ "./src/app/pipes/inner-html/safe-html.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/inner-html/safe-html.pipe.ts ***!
  \****************************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/pipes/keys/keys.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/keys/keys.pipe.ts ***!
  \*****************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        /*const attributes = [];
        node.getAvailableAttributes().forEach(element => {
          attributes.push({ name: element, value: node.getAttribute(element, '') });
        });
        return attributes;*/
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(value);
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/pipes/url/url.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/url/url.pipe.ts ***!
  \***************************************/
/*! exports provided: UrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlPipe", function() { return UrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlPipe = /** @class */ (function () {
    function UrlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    UrlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    };
    UrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'url'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], UrlPipe);
    return UrlPipe;
}());



/***/ }),

/***/ "./src/app/services/dam-service/dam.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/dam-service/dam.service.ts ***!
  \*****************************************************/
/*! exports provided: DamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamService", function() { return DamService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DamService = /** @class */ (function () {
    // Constructor
    function DamService() {
        this.open = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.onSelect = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](function (evt) { });
    }
    // ************************************** Getters and setters **************************************/
    DamService.prototype.isOpen = function () {
        return this.open.asObservable();
    };
    DamService.prototype.setIsOpen = function (open) {
        this.open.next(open);
    };
    DamService.prototype.getOnSelect = function () {
        return this.onSelect.asObservable();
    };
    DamService.prototype.setOnSelect = function (func) {
        this.onSelect.next(func);
    };
    DamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DamService);
    return DamService;
}());



/***/ }),

/***/ "./src/app/services/editor-service/editor.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/editor-service/editor.service.ts ***!
  \***********************************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/file */ "./src/app/models/file.ts");
/* harmony import */ var _models_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/node */ "./src/app/models/node.ts");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditorService = /** @class */ (function () {
    // Constructor
    function EditorService() {
        this.file = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.fileState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentNode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentNodeModify = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.elementsState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    EditorService_1 = EditorService;
    // ************************************** Getters and setters **************************************/
    EditorService.prototype.setFile = function (file) {
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
        this.setFile(new _models_file__WEBPACK_IMPORTED_MODULE_3__["File"](data));
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
        this.file
            .getValue()
            .lastState()
            .then(function (value) {
            _this.setFile(value);
            _this.setLoading(false);
        });
    };
    /**
     * Go to the next state if it exists, otherwise it does not do anything
     */
    EditorService.prototype.nextStateFile = function () {
        var _this = this;
        this.file
            .getValue()
            .nextState()
            .then(function (value) {
            _this.setFile(value);
            _this.setLoading(false);
        });
    };
    /**
     *
     */
    EditorService.prototype.recoverySnapshot = function (key) {
        var _this = this;
        this.getFileStateValue()
            .recovery(key)
            .then(function () {
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
    EditorService.prototype.save = function (node, content, message, attributes) {
        if (attributes === void 0) { attributes = {}; }
        var fileContent = this.fileState.getValue().getState().content;
        /** @todo Improve performance clone */
        // let fileContent = clone(this.file.getValue().getState().content)
        var uuidPath = null;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, node)) {
            fileContent[node].content = _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].html2json(content);
        }
        else {
            uuidPath = EditorService_1.getUuidPath(node);
            var root = fileContent[uuidPath.shift()];
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, root.content)) {
                root.content = _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].html2json(root.content);
            }
            // Modify file with new changes
            var editContent_1 = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (acc, value) {
                return acc.child[value];
            }, root.content, uuidPath);
            Object.keys(attributes).forEach(function (key) {
                editContent_1.attr[key] = attributes[key];
            });
            editContent_1.child = _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].html2json(content, false);
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
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, root.content)) {
            root.content = _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].html2json(root.content);
        }
        // Modify file with new changes
        var editContent = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (acc, value) {
            return acc.child[value];
        }, root.content, node.getPath());
        return editContent;
    };
    /**
     * Remove node section
     */
    EditorService.prototype.removeNode = function (node) {
        var file = this.newStateFile(this.fileState.getValue().getState().content, "Remove node");
        var section = node.getSection();
        var sectionPath = _models_node__WEBPACK_IMPORTED_MODULE_4__["Node"].getContextPath(section);
        var parentNode = null;
        var fileNode = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (n, value) {
            parentNode = n;
            return n.child[value];
        }, file.getState().getContent()[node.getAreaId()].content, sectionPath);
        var nodeKey = section.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
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
        var message = (child ? "Adding child" : "Adding sibling") +
            " to " +
            node.getSection().getAttribute("xe_section");
        var file = this.newStateFile(this.fileState.getValue().getState().content, message);
        var section = node.getSection();
        var sectionPath = child
            ? _models_node__WEBPACK_IMPORTED_MODULE_4__["Node"].getContextPath(section)
            : _models_node__WEBPACK_IMPORTED_MODULE_4__["Node"].getContextPath(section.parentNode);
        var fileNode = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (n, value) {
            return n.child[value];
        }, file.getState().getContent()[node.getAreaId()].content, sectionPath);
        if (!child) {
            var idChild_1 = section.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
            var nodeKey_1 = Object.keys(newNode)[0];
            fileNode.child = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (object, nodeId) {
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
        var document = { nodes: {} };
        for (var nodeId in state.content) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])("content", state.content[nodeId])) {
                document["nodes"][nodeId] = {
                    content: _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].json2html(state.content[nodeId].content, false, false),
                    editable: state.content[nodeId].editable
                };
            }
        }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])("metas", file)) {
            document["metas"] = file["metas"];
        }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])("metadata", file)) {
            document["metadata"] = file["metadata"];
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
        var uuid = element.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
        Object.keys(element.attributes).forEach(function (key) {
            attributes[element.attributes[key].name] =
                element.attributes[key].value;
        });
        try {
            node = new _models_node__WEBPACK_IMPORTED_MODULE_4__["Node"](uuid, element, attributes);
        }
        catch (e) {
            console.error("This element is not a valid node");
        }
        return node;
    };
    /*
     * Calculate uuid path to xedit node
     */
    EditorService.getUuidPath = function (element, rootTag, path, onlySections) {
        if (rootTag === void 0) { rootTag = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_EDITOR; }
        if (path === void 0) { path = []; }
        if (onlySections === void 0) { onlySections = false; }
        var parent = element.parentNode;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(element) &&
            (!onlySections ||
                element.hasAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_SECTION_TYPE))) {
            path.unshift(element.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID));
        }
        return element.nodeName.toLowerCase() === rootTag || Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(parent)
            ? path
            : this.getUuidPath(parent, rootTag, path);
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
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["contains"])(section, Object.keys(schema.sections))) {
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
        var section = insertedNode
            .getTarget()
            .getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_SECTION_TYPE);
        return this.isAllowAddChild(currentNode, section);
    };
    var EditorService_1;
    EditorService = EditorService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EditorService);
    return EditorService;
}());



/***/ }),

/***/ "./src/app/services/state-service/state.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/state-service/state.service.ts ***!
  \*********************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = /** @class */ (function () {
    // Constructor
    function StateService() {
        this.currentView = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.availableViews = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/xedit.ts":
/*!**************************!*\
  !*** ./src/app/xedit.ts ***!
  \**************************/
/*! exports provided: Xedit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xedit", function() { return Xedit; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/mappers/xedit */ "./src/app/core/mappers/xedit.ts");


var Xedit = /** @class */ (function () {
    function Xedit() {
    }
    // ************************************** Getters and setters **************************************/
    Xedit.getConf = function (conf, value) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(conf, _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getXedit()) ? _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getXedit()[conf] : (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? value : undefined);
    };
    Xedit.setConf = function (conf, value) {
        return _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getXedit()[conf] = value;
    };
    Xedit.setLang = function (lang) {
        return Xedit.setConf(Xedit.LANG, lang);
    };
    Xedit.getLang = function () {
        return Xedit.getConf(Xedit.LANG, 'es');
    };
    Xedit.getSchemas = function () {
        return Xedit.getConf(Xedit.SCHEMAS);
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

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/lib/dam/components/dam/dam.component.css":
/*!******************************************************!*\
  !*** ./src/lib/dam/components/dam/dam.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dam-main{\n    display: flex;\n    flex-direction: row;\n    min-height: 100%;\n}\n/*.dam-main-back {\n    min-height: 100vh;\n    flex-grow: 1;\n}*/\n.col{\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n\n}\n/* MOBILE */\n@media all and (max-width: 599px) { \n    .col{\n        padding:0.5rem;\n    }\n}"

/***/ }),

/***/ "./src/lib/dam/components/dam/dam.component.html":
/*!*******************************************************!*\
  !*** ./src/lib/dam/components/dam/dam.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [show]=\"isLoading\"></app-loading>\n<div class=\"dam-main shadow-panel\">\n    <div class=\"col dam-main-back\">\n        <ng-container *ngIf=\"popup; else nopup\">\n            <ngx-smart-modal \n                #dam identifier=\"dam\"\n            >\n                <app-table [items]=\"items\" [(query)]=\"query\"></app-table> \n            </ngx-smart-modal>\n        </ng-container>\n        <ng-template #nopup>\n            <app-facets [facets]=\"facets\"></app-facets>\n            <app-table style=\"flex-grow: 1;\" [items]=\"items\" [(query)]=\"query\"></app-table> \n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./src/lib/dam/components/dam/dam.component.ts":
/*!*****************************************************!*\
  !*** ./src/lib/dam/components/dam/dam.component.ts ***!
  \*****************************************************/
/*! exports provided: DamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamComponent", function() { return DamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Item */ "./src/lib/dam/models/Item.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main.service */ "./src/lib/dam/services/main.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Entry point component for the application, is the component in charge of the
 * observation of parameters changes and requests.
 */
var DamComponent = /** @class */ (function () {
    /**@ignore */
    function DamComponent(mainService, ngxSmartModalService) {
        this.mainService = mainService;
        this.ngxSmartModalService = ngxSmartModalService;
        /**
         * An array containing all the resources from the response as Item instances
         */
        this.items = [];
        /**
         * A dict with the current query
         */
        this.query = { page: 1, search: '', perPage: 20, lastPage: 1, total: 0 };
        /**@ignore */
        this.limit = null;
        /**@ignore */
        this.search = null;
        /**
         * The current selected page
         */
        this.currentPage = 1;
        /**
         * The current selected search string
         */
        this.searchTerm = '';
        /**
         * A dict containing the main configurations for the application
         */
        this.mainConfig = null;
        /**
         * The active item currently selected
         */
        this.activeItem = null;
        /**
         * A dict containing info about the active facets
         */
        this.activeFacets = {};
        /**
         * An array of all available facets
         */
        this.facets = [];
        /**
         * An instance of the mapper for Item model
         */
        this.imap = null;
        /**
         * Property used to show loading component
         */
        this.isLoading = false;
        /**
         * Input property for switching the app to a modal
         */
        this.popup = false;
        /**
         * Property to hide or show app when in modal state
         */
        this.isOpen = false;
        /**
         * Output that emits a boolean every time the app open/closes when in modal state
         */
        this.openEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Output that emits when a item has been selected
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**@ignore */
    DamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainConfig = this.mainService.getComponentConfigs('main');
        this.imap = this.mainService.getModel('item');
        this.limit = this.mainConfig.query.limit;
        this.search = this.mainConfig.query.search;
        this.page = this.mainConfig.query.page.name;
        this.query.perPage = this.mainConfig.query.limit.value;
        this.getItems();
        this.mainService.getCurrentPage().subscribe(function (data) {
            _this.currentPage = data;
            _this.getItems();
        });
        this.mainService.getSearchTerm().subscribe(function (data) {
            _this.searchTerm = data;
            _this.getItems();
        });
        this.mainService.getActiveItem().subscribe(function (data) {
            _this.activeItem = data;
            _this.onSelect.emit(data);
        });
        this.mainService.getActiveFacets().subscribe(function (data) {
            _this.activeFacets = data;
            _this.getItems();
        });
    };
    /**@ignore */
    DamComponent.prototype.ngOnChanges = function () {
        this.openModal();
    };
    /**
     * Appends all current params to query and makes a request storing all resources in
     * the items array
     */
    DamComponent.prototype.getItems = function () {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append(this.page, String(this.currentPage));
        params = params.append(this.search.name, this.search.value.replace('$', this.searchTerm));
        params = params.append(this.limit.name, String(this.query.perPage));
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_5__["isNil"])(this.activeFacets)) {
            for (var key in this.activeFacets) {
                params = params.append(key, this.activeFacets[key]);
            }
        }
        this.isLoading = true;
        this.mainService.list(params).subscribe(function (response) {
            if (response.hasOwnProperty('pager')) {
                _this.query.perPage = response['pager'].per_page;
                _this.query.lastPage = response['pager'].pages;
                _this.query.total = response['pager'].total;
                _this.facets = response['facets'];
                _this.mapItems(response['docs']);
            }
        }, function (err) { return console.error(err); }, function () { return _this.isLoading = false; });
    };
    /**
     * Map every raw row of data as a typed model class Item
     * @param data The model instance
     */
    DamComponent.prototype.mapItems = function (data) {
        var _this = this;
        this.items = data.map(function (o) {
            return new _models_Item__WEBPACK_IMPORTED_MODULE_2__["Item"](o[_this.imap.id], o[_this.imap.title], o[_this.imap.hash], o[_this.imap.size] || '', o[_this.imap.type], o[_this.imap.image]);
        });
    };
    /**
     * Opens himself when in modal state
     */
    DamComponent.prototype.openModal = function () {
        var modal = this.ngxSmartModalService.getModal('dam');
        if (this.isOpen) {
            modal.open();
            /*this.isOpen = false;
            this.openEmitter.emit(false);*/
        }
        else {
            modal.close();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DamComponent.prototype, "popup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DamComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DamComponent.prototype, "openEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DamComponent.prototype, "onSelect", void 0);
    DamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dam',
            template: __webpack_require__(/*! ./dam.component.html */ "./src/lib/dam/components/dam/dam.component.html"),
            styles: [__webpack_require__(/*! ./dam.component.css */ "./src/lib/dam/components/dam/dam.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__["NgxSmartModalService"]])
    ], DamComponent);
    return DamComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/dyn-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/dyn-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #dynForm (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n \n    <div *ngFor=\"let question of questions\" class=\"form-row\">\n      <app-question [question]=\"question\" [form]=\"form\"></app-question>\n    </div>\n \n  </form>\n</div>"

/***/ }),

/***/ "./src/lib/dam/components/dyn-form/dyn-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/dyn-form.component.ts ***!
  \***************************************************************/
/*! exports provided: DynFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynFormComponent", function() { return DynFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/question-control.service */ "./src/lib/dam/components/dyn-form/questions/question-control.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This component represents a form build by dynamic fields retrieved by the forms mapper.
 */
var DynFormComponent = /** @class */ (function () {
    /**@ignore */
    function DynFormComponent(qcs) {
        this.qcs = qcs;
        /**
         * The array of questions
         */
        this.questions = [];
        /**
         * The payload input with all the data
         */
        this.payLoad = {};
        /**
         * An emitter to emit the data form after finished
         */
        this.sendForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A reset signal
         */
        this.reset = false;
    }
    /**@ignore */
    DynFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (data) {
            _this.sendForm.emit(data);
        });
    };
    /**@ignore */
    DynFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.form = this.qcs.toFormGroup(this.questions);
        this.form.valueChanges.subscribe(function (data) {
            _this.sendForm.emit(data);
        });
    };
    /**
     * Sends the data as a json string when submitted
     */
    DynFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DynFormComponent.prototype, "questions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynFormComponent.prototype, "payLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DynFormComponent.prototype, "sendForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynFormComponent.prototype, "reset", void 0);
    DynFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-form',
            template: __webpack_require__(/*! ./dyn-form.component.html */ "./src/lib/dam/components/dyn-form/dyn-form.component.html"),
            providers: [_questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]]
        }),
        __metadata("design:paramtypes", [_questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]])
    ], DynFormComponent);
    return DynFormComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/dyn-form.module.ts":
/*!************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/dyn-form.module.ts ***!
  \************************************************************/
/*! exports provided: DynFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynFormModule", function() { return DynFormModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dyn_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dyn-form.component */ "./src/lib/dam/components/dyn-form/dyn-form.component.ts");
/* harmony import */ var _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions/dyn-question/dyn-question.component */ "./src/lib/dam/components/dyn-form/questions/dyn-question/dyn-question.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DynFormModule = /** @class */ (function () {
    function DynFormModule() {
    }
    DynFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]],
            declarations: [_dyn_form_component__WEBPACK_IMPORTED_MODULE_3__["DynFormComponent"], _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__["DynQuestionComponent"]],
            bootstrap: [],
            exports: [_dyn_form_component__WEBPACK_IMPORTED_MODULE_3__["DynFormComponent"], _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__["DynQuestionComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], DynFormModule);
    return DynFormModule;
}());



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/questions/dyn-question/dyn-question.component.html":
/*!********************************************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/questions/dyn-question/dyn-question.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dam-form-item dam-edit-item\" [formGroup]=\"form\">\n  <label [attr.for]=\"question.key\">{{question.label}}</label>\n\n  <div [ngSwitch]=\"question.controlType\">\n\n    <input *ngSwitchCase=\"'text'\" [formControlName]=\"question.key\"\n            [id]=\"question.key\" [type]=\"question.type\">\n\n    <textarea *ngSwitchCase=\"'text-area'\" class=\"dam-textarea\" [formControlName]=\"question.key\"\n      [id]=\"question.key\">{{question.val}}</textarea>\n    \n    <ng-select\n      class=\"dam-select\"\n      [id]=\"question.key\"\n      [(ngModel)]=\"question.val\"\n      *ngSwitchCase=\"'dropdown'\"\n      [formControlName]=\"question.key\"\n      [items]=\"question.options\"\n      bindValue='key'\n      bindLabel='value'\n      [multiple]='question.multi'\n    >\n    </ng-select>\n    <ng-select\n      class=\"dam-select\"\n      [id]=\"question.key\"\n      [ngModel]=\"question.val\"\n      *ngSwitchCase=\"'depdrop'\"\n      [formControlName]=\"question.key\"\n      [items]=\"question.options\"\n    >    \n    </ng-select>\n \n  </div> \n \n  <div class=\"errorMessage\" *ngIf=\"!isValid\">{{ question.label }} is required</div>\n</div>"

/***/ }),

/***/ "./src/lib/dam/components/dyn-form/questions/dyn-question/dyn-question.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/questions/dyn-question/dyn-question.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DynQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynQuestionComponent", function() { return DynQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question-base */ "./src/lib/dam/components/dyn-form/questions/question-base.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/main.service */ "./src/lib/dam/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Component extracted from the Angular docs for creating dynamic questions
 * for dynamic forms.
 */
var DynQuestionComponent = /** @class */ (function () {
    /**@ignore */
    function DynQuestionComponent(mainService) {
        this.mainService = mainService;
    }
    /**@ignore */
    DynQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_3__["hasIn"])('ref', this.question)) {
            this.form.get(this.question['ref']).valueChanges.subscribe(function (val) {
                _this.searchOptions();
            });
        }
        if (this.question.controlType === 'dropdown' && this.question['fetchable']) {
            this.getOptions();
        }
    };
    Object.defineProperty(DynQuestionComponent.prototype, "isValid", {
        /**
         * Returns the validity of the form control for the question
         * @returns {Boolean} True if valid, False otherwise
         */
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the options for the dropdown or depdrop component
     */
    DynQuestionComponent.prototype.searchOptions = function () {
        var _this = this;
        var value = this.form.get(this.question['ref']).value;
        if (value !== '') {
            this.mainService.getOptions(this.question['endpoint'], this.question['param'], value).subscribe(function (resp) {
                _this.question['options'] = [];
                _this.question['options'] = resp['result'].data.map(function (item) { return ({
                    key: item[_this.question['map'].key], value: item[_this.question['map'].value]
                }); });
            });
        }
    };
    /**
     * Gets the options for the dropdown or depdrop component
     */
    DynQuestionComponent.prototype.getOptions = function () {
        var _this = this;
        this.mainService.getOptions(this.question['endpoint'], '', '').subscribe(function (resp) {
            _this.question['options'] = [];
            _this.question['options'] = resp['result'].data.map(function (item) { return ({
                key: item[_this.question['map'].key], value: item[_this.question['map'].value]
            }); });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _question_base__WEBPACK_IMPORTED_MODULE_2__["QuestionBase"])
    ], DynQuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DynQuestionComponent.prototype, "form", void 0);
    DynQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./dyn-question.component.html */ "./src/lib/dam/components/dyn-form/questions/dyn-question/dyn-question.component.html")
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]])
    ], DynQuestionComponent);
    return DynQuestionComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/questions/question-base.ts":
/*!********************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/questions/question-base.ts ***!
  \********************************************************************/
/*! exports provided: QuestionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

/**
 * Represents a simple question with the needed values to work in a form
 */
var QuestionBase = /** @class */ (function () {
    /**@ignore */
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        var val = options.val || null;
        this.set(options, 'map', {})
            .setVal(val);
    }
    /**
     * Securely sets the value from the selected object
     * @param object The object to be used
     * @param field The field to set the value
     * @param _default The default value if any
     */
    QuestionBase.prototype.set = function (object, field, _default) {
        if (_default === void 0) { _default = null; }
        var value = _default;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(field, object)) {
            value = object[field];
        }
        this[field] = value;
        return this;
    };
    /**
     * Sets the val property and returns this
     * @param val The new val value
     */
    QuestionBase.prototype.setVal = function (val) {
        if (val === void 0) { val = null; }
        this.val = val;
        return this;
    };
    return QuestionBase;
}());



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/questions/question-control.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/questions/question-control.service.ts ***!
  \*******************************************************************************/
/*! exports provided: QuestionControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionControlService", function() { return QuestionControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service that manages the questions and creates the form groups.
 */
var QuestionControlService = /** @class */ (function () {
    /**@ignore */
    function QuestionControlService() {
    }
    /**
     * Create a new form group given a questions array.
     * @param {QuestionBase<any>} questions The questions array
     * @returns {FormGroup} The created form group
     */
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '');
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    QuestionControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/questions/question-depdrop.ts":
/*!***********************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/questions/question-depdrop.ts ***!
  \***********************************************************************/
/*! exports provided: DepDropQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepDropQuestion", function() { return DepDropQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/lib/dam/components/dyn-form/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a dropdown field question from a question base
 *  where their options depend on another dropdown or depdrop selection
*/
var DepDropQuestion = /** @class */ (function (_super) {
    __extends(DepDropQuestion, _super);
    /**@ignore */
    function DepDropQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'depdrop';
        /** The available options for the dropdown */
        _this.options = [];
        _this.options = options['options'] || [];
        _this.ref = options['ref'] || 0;
        _this.endpoint = options['endpoint'] || '';
        _this.param = options['param'] || '';
        return _this;
    }
    return DepDropQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/questions/question-dropdown.ts":
/*!************************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/questions/question-dropdown.ts ***!
  \************************************************************************/
/*! exports provided: DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/lib/dam/components/dyn-form/questions/question-base.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/** This components extends a dropdown field question from a question base */
var DropdownQuestion = /** @class */ (function (_super) {
    __extends(DropdownQuestion, _super);
    /**@ignore */
    function DropdownQuestion(options, multi, searchable, fetchable, endpoint) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'dropdown';
        _this.set(options, 'options', [])
            .set(options, 'multi', false)
            .set(options, 'searchable', false)
            .set(options, 'fetchable', false)
            .set(options, 'endpoint', '');
        return _this;
    }
    /** Sets the value(s) checking whether the value is an array or not */
    DropdownQuestion.prototype.setVal = function (val) {
        var _this = this;
        if (val === void 0) { val = null; }
        var result;
        if (Array.isArray(val)) {
            result = val.map(function (index) {
                return _this.valFixer(index);
            });
        }
        else {
            result = this.valFixer(val);
        }
        this.val = result;
        return this;
    };
    /**@ignore */
    DropdownQuestion.prototype.valFixer = function (val) {
        var result = { key: null, value: null };
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["is"])(Object, val)) {
            var key = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(this.map['key'], val) ? val[this.map['key']] : null;
            var value = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(this.map['value'], val) ? val[this.map['value']] : null;
            result = key;
        }
        else {
            result = val;
        }
        return result;
    };
    return DropdownQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/questions/question-textarea.ts":
/*!************************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/questions/question-textarea.ts ***!
  \************************************************************************/
/*! exports provided: TextAreaQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaQuestion", function() { return TextAreaQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/lib/dam/components/dyn-form/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a text area field question from a question base */
var TextAreaQuestion = /** @class */ (function (_super) {
    __extends(TextAreaQuestion, _super);
    /**@ignore */
    function TextAreaQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'text-area';
        _this.type = options['type'] || '';
        if (_this.val instanceof Object) {
            _this.value = '';
        }
        else {
            _this.value = _this.val;
        }
        return _this;
    }
    return TextAreaQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/lib/dam/components/dyn-form/questions/question-textbox.ts":
/*!***********************************************************************!*\
  !*** ./src/lib/dam/components/dyn-form/questions/question-textbox.ts ***!
  \***********************************************************************/
/*! exports provided: TextboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/lib/dam/components/dyn-form/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a text input field question from a question base */
var TextboxQuestion = /** @class */ (function (_super) {
    __extends(TextboxQuestion, _super);
    /**@ignore */
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'text';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/lib/dam/components/facets/facet/facet.component.css":
/*!*****************************************************************!*\
  !*** ./src/lib/dam/components/facets/facet/facet.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".facet-title {\n    border-top: 2px solid #c3cbd5 !important;\n    width: 100%;\n    border: none;\n    border-top-color: currentcolor;\n    border-top-style: none;\n    border-top-width: medium;\n    min-width: 100px;\n    text-align: left;\n    transition: .4s;\n    padding: 5px;\n    color: #666;\n    background: #EDEFF2 !important;\n    text-align: center;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.facet-title span.text {\n    margin: 0 auto;\n}\n\n.facet-title:hover {\n    cursor:pointer;\n}\n\n.facet-option {\n    padding: 1em 1em 0em 1em;\n  \n}\n\n.facet-option:last-child {\n    margin-bottom: 1em;\n}\n\n.facet-option label{\n    max-width: 1em;\n}\n\n.facet-option label span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n    width: 9em;\n}"

/***/ }),

/***/ "./src/lib/dam/components/facets/facet/facet.component.html":
/*!******************************************************************!*\
  !*** ./src/lib/dam/components/facets/facet/facet.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"facet-title\" (click)=\"togglePanel()\">\n  <span class=\"text\">{{ facet.label }}</span>\n  <fa-icon *ngIf=\"hidden; else minus\" style=\"float:right;\" [icon]=\"faPlus\"></fa-icon>\n  <ng-template #minus>\n      <fa-icon style=\"float:right;\" [icon]=\"faMinus\"></fa-icon>\n  </ng-template>\n</button>\n<div *ngIf=\"!hidden\">\n <!--<ng-container  *ngFor=\"let item of facet.values | keyvalue\">\n    <ng-container *ngIf=\"item.value > 0 || isActive(item)\">\n      <div class=\"facet-option\" [title]=\"item.key\">\n          <input type=\"checkbox\" (change)=\"toggleFacet($event, item)\" [checked]=\"isActive(item)\"/>\n          <label><span>{{ item.key }}</span> ({{item.value}})</label>\n      </div>\n    </ng-container>\n  </ng-container>--> \n</div>"

/***/ }),

/***/ "./src/lib/dam/components/facets/facet/facet.component.ts":
/*!****************************************************************!*\
  !*** ./src/lib/dam/components/facets/facet/facet.component.ts ***!
  \****************************************************************/
/*! exports provided: FacetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetComponent", function() { return FacetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This component represents a facet panel with its posible values
 */
var FacetComponent = /** @class */ (function () {
    /**@ignore */
    function FacetComponent() {
        /**
         * The facet object from the list
         */
        this.facet = { key: '', label: '', values: {} };
        /**
         * The currently selected facets
         */
        this.selected = [];
        /**
         * If the panel is currently hidden, True for hidden, False otherwise
         */
        this.hidden = true;
        /**
         * The selected facet option as an output string emitter
         */
        this.selectedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An array with the values
         */
        this.valuesArray = [];
        /**@ignore */
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        /**@ignore */
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMinus"];
    }
    /**@ignore */
    FacetComponent.prototype.ngOnInit = function () {
        var values = this.selected[this.facet.key];
        if (values.length > 0) {
            this.hidden = false;
        }
    };
    /**
     * Selects or release a desired facet option from the panel
     * @param event The checkbox event
     * @param option The option where the checkbox was pressed
     */
    FacetComponent.prototype.toggleFacet = function (event, option) {
        if (event.target.checked) {
            if (!this.valuesArray.includes(option.key)) {
                this.valuesArray.push(option.key);
            }
        }
        else {
            var index = this.valuesArray.indexOf(option.key);
            if (index !== -1) {
                this.valuesArray.splice(index, 1);
            }
        }
        this.stringifyQuery();
    };
    /**
     * Hide or reveal the facet panel
     */
    FacetComponent.prototype.togglePanel = function () {
        this.hidden = !this.hidden;
    };
    /**
     * Creates an string from all the selected facet values
     */
    FacetComponent.prototype.stringifyQuery = function () {
        this.selectedValue.emit(this.valuesArray.join(','));
    };
    /**
     * Checks what options are currently selected from this facet
     * @param facet The facet to be checked
     */
    FacetComponent.prototype.isActive = function (facet) {
        var values = this.selected[this.facet.key];
        var active = values.indexOf(facet.key) >= 0;
        return active;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacetComponent.prototype, "facet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacetComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacetComponent.prototype, "hidden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FacetComponent.prototype, "selectedValue", void 0);
    FacetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facet',
            template: __webpack_require__(/*! ./facet.component.html */ "./src/lib/dam/components/facets/facet/facet.component.html"),
            styles: [__webpack_require__(/*! ./facet.component.css */ "./src/lib/dam/components/facets/facet/facet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacetComponent);
    return FacetComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/facets/facets.component.css":
/*!************************************************************!*\
  !*** ./src/lib/dam/components/facets/facets.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".facets-wrapper.opened {\n    width: 17.5rem;\n}\n\n.facets-wrapper.closed {\n    width: 4.5rem;\n}\n\n.facets-panel {\n    width: 15rem;\n    margin-bottom: 20px;\n    background-color: #fff;\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.facets-list {\n    padding: 1em;\n    background: linear-gradient(0deg,#EDEFF2 0,#E0E4E6 40%);\n    position: fixed;\n    box-sizing: border-box;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: auto;\n    overflow: auto;\n}\n\n.facets-title {\n    display: flex;\n    width: 100%;\n    align-content: center;\n    flex-direction: row;\n    text-align: center;\n    padding: 1em 0;\n    border-bottom: 1px dotted #CCC;\n    margin-bottom: 1em;\n}\n\n.btn-facets {\n    border-radius: 5px;\n    font-size: 1em;\n    font-weight: bolder;\n    margin-right: 0;\n    margin-left: auto;\n}\n\n.facets-title h4 {\n    font-weight: normal;\n    text-transform: uppercase;\n    margin: 0.3em auto;\n    padding: 0;\n}"

/***/ }),

/***/ "./src/lib/dam/components/facets/facets.component.html":
/*!*************************************************************!*\
  !*** ./src/lib/dam/components/facets/facets.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"facetsConfig.active\">\n  <div class=\"facets-wrapper\" [className]=\"isOpen ? 'facets-wrapper opened' : 'facets-wrapper closed'\"></div>\n  <div class=\"facets-list\">\n    <div class=\"facets-title\">\n      <h4 *ngIf=\"isOpen\">Facets</h4>\n      <button (click)=\"togglePanel()\" class=\"dam-btn-base btn-facets\">\n          <fa-icon [icon]=\"faAngleLeft\" *ngIf=\"isOpen;else rightAngle\"></fa-icon>\n          <ng-template #rightAngle><fa-icon [icon]=\"faAngleRight\"></fa-icon></ng-template>\n      </button>\n    </div>\n    <div *ngIf=\"isOpen\">\n      <div *ngFor=\"let facet of facets; index as i\" class=\"facets-panel\">\n        <app-facet [facet]=\"facet\" [selected]=\"selectedFacets\" [hidden]=\"(i === 0) ? false : true\" (selectedValue)=\"updateFacetsQuery($event, facet.key)\"></app-facet>\n      </div>\n    </div>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/lib/dam/components/facets/facets.component.ts":
/*!***********************************************************!*\
  !*** ./src/lib/dam/components/facets/facets.component.ts ***!
  \***********************************************************/
/*! exports provided: FacetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetsComponent", function() { return FacetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main.service */ "./src/lib/dam/services/main.service.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * This component lists all the availables facets given by the API server
 */
var FacetsComponent = /** @class */ (function () {
    /**@ignore */
    function FacetsComponent(mainService) {
        this.mainService = mainService;
        /**
         * The available facets
         */
        this.facets = [];
        /**
         * An array list with all the currently selected facets
         */
        this.selectedFacets = {};
        /**
         * A query object with all the selected facets
         */
        this.facetsQuery = {};
        /**@ignore */
        this.faAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"];
        /**@ignore */
        this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleRight"];
        /**
         * True if facets is opened, False otherwise
         */
        this.isOpen = false;
        /**
         * The config dict from the general configs mapper
         */
        this.facetsConfig = null;
    }
    /**@ignore */
    FacetsComponent.prototype.ngOnInit = function () {
        this.facetsConfig = this.mainService.getComponentConfigs('facets');
        this.buildQuery();
    };
    /**@ignore */
    FacetsComponent.prototype.ngOnChanges = function (changes) {
        this.setSelectedFacets();
    };
    /**
     * Opens the facets panel
     */
    FacetsComponent.prototype.togglePanel = function () {
        this.isOpen = !this.isOpen;
    };
    /**
     * Maps the current selected facets object and sets the query
     */
    FacetsComponent.prototype.buildQuery = function () {
        var _this = this;
        this.facets.map(function (facet) {
            _this.facetsQuery[facet.key] = '';
        });
    };
    /**
     * Updates the facets query with an output event
     * @param evt The event with the new value
     * @param key The name of the facet
     */
    FacetsComponent.prototype.updateFacetsQuery = function (evt, key) {
        this.facetsQuery[key] = evt;
        this.mainService.setActiveFacets(this.facetsQuery);
    };
    /**
     * Sets the selected facets array
     */
    FacetsComponent.prototype.setSelectedFacets = function () {
        this.selectedFacets = {};
        var valuesArray = [];
        for (var index in this.facets) {
            var values = this.facets[index].values;
            var key = this.facets[index].key;
            valuesArray = [];
            for (var option in values) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_3__["hasIn"])(key, this.facetsQuery) && this.facetsQuery[key].indexOf(option) !== -1) {
                    // this.selectedFacets.push(option);
                    valuesArray.push(option);
                }
            }
            this.selectedFacets[key] = valuesArray;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacetsComponent.prototype, "facets", void 0);
    FacetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facets',
            template: __webpack_require__(/*! ./facets.component.html */ "./src/lib/dam/components/facets/facets.component.html"),
            styles: [__webpack_require__(/*! ./facets.component.css */ "./src/lib/dam/components/facets/facets.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], FacetsComponent);
    return FacetsComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/loading/loading.component.css":
/*!**************************************************************!*\
  !*** ./src/lib/dam/components/loading/loading.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@keyframes lds-blocks {\n    0% {\n        background: #009e92;\n    }\n    12.5% {\n        background: #009e92;\n    }\n    12.625% {\n        background: #e0e4e6;\n    }\n    100% {\n        background: #e0e4e6;\n    }\n}\n@-webkit-keyframes lds-blocks {\n    0% {\n        background: #009e92;\n    }\n    12.5% {\n        background: #009e92;\n    }\n    12.625% {\n        background: #e0e4e6;\n    }\n    100% {\n        background: #e0e4e6;\n    }\n}\n.load-wrapper {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 99999;\n}\n.lds-blocks {\n    position: relative;\n    opacity: 0.6;\n    left: 45vw;\n    top: 45vh;\n    \n}\n.lds-blocks div {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    background: #e0e4e6;\n    -webkit-animation: lds-blocks 1s linear infinite;\n    animation: lds-blocks 1s linear infinite;\n}\n.lds-blocks {\n    -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n}\n"

/***/ }),

/***/ "./src/lib/dam/components/loading/loading.component.html":
/*!***************************************************************!*\
  !*** ./src/lib/dam/components/loading/loading.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"load-wrapper\" *ngIf=\"show\">\n  <div class=\"lds-css ng-scope\">\n    <div class=\"lds-blocks\" style=\"100%;height:100%;\">\n      <div style=\"left:0px;top:0px;animation-delay:0s\"></div>\n      <div style=\"left:42px;top:0px;animation-delay:0.125s\"></div>\n      <div style=\"left:84px;top:0px;animation-delay:0.25s\"></div>\n      <div style=\"left:0px;top:42px;animation-delay:0.875s\"></div>\n      <div style=\"left:84px;top:42px;animation-delay:0.375s\"></div>\n      <div style=\"left:0px;top:84px;animation-delay:0.75s\"></div>\n      <div style=\"left:42px;top:84px;animation-delay:0.625s\"></div>\n      <div style=\"left:84px;top:84px;animation-delay:0.5s\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/lib/dam/components/loading/loading.component.ts":
/*!*************************************************************!*\
  !*** ./src/lib/dam/components/loading/loading.component.ts ***!
  \*************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Component that renders a loading screen when requested
 */
var LoadingComponent = /** @class */ (function () {
    /**@ignore */
    function LoadingComponent() {
        /** True if loading component should render, False otherwise */
        this.show = false;
    }
    /**@ignore */
    LoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "show", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/lib/dam/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/lib/dam/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/modals/assets-modal/assets-modal.component.css":
/*!*******************************************************************************!*\
  !*** ./src/lib/dam/components/modals/assets-modal/assets-modal.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dam-edit-item{\n    margin-top: 2em;\n    display: flex;\n    flex: 1 auto;\n    flex-direction: row;\n    flex-wrap: wrap !important;\n}\n.dam-edit-item-column{\n    flex: 1 auto;\n    width: 45%;\n    min-width: 45%;\n    margin-bottom: 15px;\n    padding: 0;\n}\n.big{\n    flex: 3 auto;\n    padding: 25px 28px;\n    background-color: #FFF;\n    border: 1px solid #C8CACC;\n    box-shadow: none;\n}\n.options{\n    display: flex;\n    align-items: flex-end;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n    margin-bottom: 15px;\n    text-align: right;\n}\nh2.legend{\n    margin: 0 0 15px;\n    padding: 0;\n    font-size: 18px;\n    font-weight: 700;\n    color: #00a397;\n}\n.dam-edit-item{\n    display: flex;\n    flex: 1 auto;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    margin-bottom: 15px;\n}\n.dam-form-item{\n    margin-top: 1em;\n}\n.options .span {\n    float: left;\n}\nbutton:disabled {\n    background: #dddddd !important;\n    cursor: not-allowed;\n}\n.assets-error {\n    color: #FFF;\n    text-align: center;\n    background-color: rgb(227, 93, 93, 0.8);\n    border-radius: 5px;\n    padding: 0.5em 0.5em;\n    margin: 0em 1em 1em 1em;\n}"

/***/ }),

/***/ "./src/lib/dam/components/modals/assets-modal/assets-modal.component.html":
/*!********************************************************************************!*\
  !*** ./src/lib/dam/components/modals/assets-modal/assets-modal.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-smart-modal \n    (onOpen)=\"resetForms = false;\"\n    (onClose)=\"assetForm.reset(); reset();\" \n    (onDataAdded)=\"dataHandler()\"\n    (onDismiss)=\"assetForm.reset(); reset();\"\n    #assets identifier=\"assets\"\n    class=\"assets-modal\"\n>\n    <form (ngSubmit)=\"submit()\" #assetForm=\"ngForm\" class=\"dam-form dam-edit-item\">\n        <div class=\"dam-edit-item-column\">\n            <div class=\"dam-edit-item-img\"> <img src=\"\"> </div>\n            <div class=\"dam-form-item\">\n                <label>New File</label>\n                <input ref=\"fileInput\" (change)=\"setFile($event.target.files)\" name=\"file\" accept=\"*/*\" type=\"file\" [value]=\"asset.title\"> </div>\n            <app-dynamic-form #dynForm (sendForm)=\"setDynData($event)\" *ngIf=\"questions.length > 0 && !resetForms\" [questions]=\"questions\" [reset]=\"resetForms\"></app-dynamic-form>\n        </div>\n        <div class=\"dam-edit-item-column big\">\n            <div class=\"assets-error\" *ngIf=\"error !== ''\">{{ error }}</div>\n            <div class=\"options\">\n                <button (click)=\"close()\" class=\"dam-btn-base red\"> <fa-icon [icon]=\"faTimes\"></fa-icon> Cancel </button>\n                <button [disabled]=\"!assetForm.form.valid || blocked\" type=\"submit\" class=\"dam-btn-base\"> <fa-icon [icon]=\"faSave\"></fa-icon> Save </button>\n            </div>\n            <h2 class=\"legend\">Information</h2>\n            <div class=\"dam-edit-item\">\n                <div class=\"dam-edit-item-column\">\n                    <label>File Format</label>\n                    <div class=\"dam-edit-line\"> {{asset.extension}}</div>\n                </div>\n                <div class=\"dam-edit-item-column\">\n                    <label>Resource Type</label>\n                    <div class=\"dam-edit-line\">{{asset.type}}</div>\n                </div>\n                <div *ngIf=\"asset.type === 'image'\" class=\"dam-edit-item-column\">\n                    <label>Width</label>\n                    <div class=\"dam-edit-line\"> </div>\n                </div>\n                <div *ngIf=\"asset.type === 'image'\" class=\"dam-edit-item-column\">\n                    <label>Height</label>\n                    <div class=\"dam-edit-line\"> </div>\n                </div>\n                <div class=\"dam-edit-item-column\">\n                    <label>File name</label>\n                    <div class=\"dam-edit-line\">{{fileName}}</div>\n                </div>\n            </div>\n            <div class=\"dam-form-item\">\n                <label>Name</label>\n                <input ref=\"nameField\" name=\"title\" required [(ngModel)]=\"asset.title\" type=\"text\"> </div>     \n            <div class=\"dam-form-item\">\n                <label>Description</label>\n                <input ref=\"descriptionField\" name=\"desc\" [(ngModel)]=\"asset.description\" type=\"text\"></div>\n            <div class=\"dam-form-item\">\n                <label>Author</label>\n                <input ref=\"authorField\" name=\"author\" [(ngModel)]=\"asset.author\" type=\"text\"> </div>\n            <div class=\"dam-form-item\">\n                <label>Tags</label>\n            </div>\n        </div>\n    </form>\n</ngx-smart-modal>"

/***/ }),

/***/ "./src/lib/dam/components/modals/assets-modal/assets-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/lib/dam/components/modals/assets-modal/assets-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssetsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsModalComponent", function() { return AssetsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _mappers_FormMapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mappers/FormMapper */ "./src/lib/dam/mappers/FormMapper.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/main.service */ "./src/lib/dam/services/main.service.ts");
/* harmony import */ var _models_Asset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/Asset */ "./src/lib/dam/models/Asset.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Modal component used as a single instance for all the application lifecycle that holds the data
 * of the currently selected resource or allows the creation of a new one.
 */
var AssetsModalComponent = /** @class */ (function () {
    /**
     *@ignore
     */
    function AssetsModalComponent(mainService, ngxSmartModalService) {
        this.mainService = mainService;
        this.ngxSmartModalService = ngxSmartModalService;
        /**
         * @ignore
         */
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        /**
         * @ignore
         */
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSave"];
        /**
         * The resource data used by the modal
         */
        this.asset = new _models_Asset__WEBPACK_IMPORTED_MODULE_6__["Asset"]();
        /**
         * The resource data id
         */
        this.id = 0;
        /**
         * True if modal is in edit mode, false otherwise
         */
        this.edit = false;
        /**
         * An array of questions retrieved by the form mapper for the dynamic form
         */
        this.questions = [];
        /**
         * The data in the dynamic form
         */
        this.dynData = {};
        /**
         * True if the form must be deleted, false otherwise
         */
        this.resetForms = false;
        /**
         * True if form actions are blocked, false otherwise
         */
        this.blocked = false;
        /**
         * Error message to be displayed when something goes wrong
         */
        this.error = '';
        /**
         * File name of the current resource
         */
        this.fileName = '';
    }
    /**
     *@ignore
     */
    AssetsModalComponent.prototype.ngOnInit = function () {
        this.formMapper = new _mappers_FormMapper__WEBPACK_IMPORTED_MODULE_4__["default"](this.mainService);
        this.getQuestions();
    };
    /**
     * Get the questions extracted by the form mapper and sets them as a component property
     */
    AssetsModalComponent.prototype.getQuestions = function () {
        this.questions = this.formMapper.getFields();
    };
    /**
     * Sets the dynamic data received from the dynamic form
     * @param event The dynamic data sent by the form component
     */
    AssetsModalComponent.prototype.setDynData = function (event) {
        this.dynData = event;
    };
    /**
     * Sets the file object in the asset property of the modal
     * @param files The list of files
     */
    AssetsModalComponent.prototype.setFile = function (files) {
        this.asset.resource = files.item(0);
    };
    /**
     * Gets the data set in the modal, if any it sets modal in edit mode and fills the resource data
     */
    AssetsModalComponent.prototype.dataHandler = function () {
        if (this.ngxSmartModalService.getModal('assets').hasData()) {
            this.edit = true;
            var data = this.ngxSmartModalService.getModal('assets').getData();
            this.asset = data.asset;
            this.id = data.id;
            this.fileName = this.asset.title + '.' + this.asset.extension;
            this.createQuestions();
        }
    };
    /**
     * Creates the questions filling them with the received edit data
     */
    AssetsModalComponent.prototype.createQuestions = function () {
        var fields = this.formMapper.handleForm(this.formMapper.getForms().fields, this.asset);
        this.formMapper.setFields(fields);
        this.questions = fields;
    };
    /**
     * Prepares the data for submitting it as a form
     */
    AssetsModalComponent.prototype.submit = function () {
        var formData = new FormData();
        if (this.edit) {
            formData.append('_method', 'PUT');
        }
        for (var key in this.dynData) {
            this.asset[key] = this.dynData[key];
        }
        for (var key in this.asset) {
            if ((key === 'resource') && Object(ramda__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.asset[key])) {
                continue;
            }
            else if (Object(ramda__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.asset[key])) {
                this.asset[key] = '';
            }
            formData.append(key, this.asset[key]);
        }
        this.blocked = true;
        this.sendFile(formData);
    };
    /**
     * Sends the file and the linked data as a form and receives the server response
     * @param {FormData} form The form data for submitting
     */
    AssetsModalComponent.prototype.sendFile = function (form) {
        var _this = this;
        if (!this.edit) {
            this.mainService.postFileForm(form).subscribe(function (suc) {
                _this.mainService.setCurrentPage(1);
                _this.close();
            }, function (err) {
                console.log('error', err);
                _this.handleResponseError(err.status);
                _this.blocked = false;
            });
        }
        else {
            this.mainService.putFileForm(form, this.id).subscribe(function (suc) {
                _this.mainService.setCurrentPage(1);
                _this.close();
            }, function (err) {
                console.log('error', err);
                _this.handleResponseError(err.status);
                _this.blocked = false;
            });
        }
    };
    /**
     * Handles the errors given by the server response and changes the error message accordingly
     * @param code The status code given by the server
     * @param details Optional parameter for additional response details (Currently unused)
     */
    AssetsModalComponent.prototype.handleResponseError = function (code, details) {
        if (details === void 0) { details = ''; }
        var text = '';
        switch (code) {
            case 500:
                text = 'There was an internal server error, please contact your administrator.';
                break;
            default:
                text = 'There was an unknown error, please try again.';
        }
        this.raiseError(text);
    };
    /**
     * Sets a text error and removes it after three seconds have passed
     * @param {string} text The error text to be displayed
     */
    AssetsModalComponent.prototype.raiseError = function (text) {
        var _this = this;
        this.error = text;
        setTimeout(function () {
            _this.error = '';
        }, 3000);
    };
    /**
     * Resets the modal and removes all previously set data
     */
    AssetsModalComponent.prototype.reset = function () {
        this.resetForms = true;
        this.asset = new _models_Asset__WEBPACK_IMPORTED_MODULE_6__["Asset"]();
        this.ngxSmartModalService.get('assets').removeData();
        this.id = 0;
        this.edit = false;
        this.blocked = false;
        this.fileName = '';
        this.createQuestions();
    };
    /**
     * Calls the modal service and closes this modal
     */
    AssetsModalComponent.prototype.close = function () {
        this.ngxSmartModalService.close('assets');
    };
    AssetsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assets-modal',
            template: __webpack_require__(/*! ./assets-modal.component.html */ "./src/lib/dam/components/modals/assets-modal/assets-modal.component.html"),
            styles: [__webpack_require__(/*! ./assets-modal.component.css */ "./src/lib/dam/components/modals/assets-modal/assets-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"]])
    ], AssetsModalComponent);
    return AssetsModalComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/search/search.component.css":
/*!************************************************************!*\
  !*** ./src/lib/dam/components/search/search.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/lib/dam/components/search/search.component.html":
/*!*************************************************************!*\
  !*** ./src/lib/dam/components/search/search.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/lib/dam/components/search/search.component.ts":
/*!***********************************************************!*\
  !*** ./src/lib/dam/components/search/search.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**@ignore */
var SearchComponent = /** @class */ (function () {
    /**@ignore */
    function SearchComponent() {
    }
    /**@ignore */
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/lib/dam/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/lib/dam/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/table/table-item/table-item.component.css":
/*!**************************************************************************!*\
  !*** ./src/lib/dam/components/table/table-item/table-item.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex-grow: 1;\n    align-content: space-between;\n    justify-content: space-between;\n    margin: 5px;\n    min-width: 150px;\n    max-width: 150px;\n    min-height: 250px;\n    max-height: 250px;\n    cursor: pointer;\n}\n\n.dam-item{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: auto auto 15px auto;\n    overflow: hidden;\n}\n\n.dam-item:hover{\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n\n.dam-item .prueba{\n    height: 118px;\n    align-items: center;\n}\n\n.dam-type{\n    padding: 0 0 10px;\n    padding-top: 0px;\n    margin-top: 10px;\n    text-transform: uppercase;\n    text-align: center;\n    \n}\n\n.dam-preview{\n    padding: 0;\n    font-size: 11px;\n    text-align: center;\n}\n\n.dam-item img{\n    width: auto;\n    max-width: 100%;\n    margin: auto auto 15px;\n    cursor: pointer;\n    -o-object-fit: contain;\n       object-fit: contain;\n    height: 100px;\n}\n\n.dam-options{\n    display: flex;\n    align-items: flex-end;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n    margin: 10px auto 10px auto;\n    padding: 0;\n}\n\n.dam-info{\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 0 12px 0 12px;\n}\n\n/* MOBILE */\n\n@media all and (max-width: 599px) { \n    :host{\n        margin: 10px;\n        \n    }\n}\n\n/*TABLET*/\n\n@media all and (min-width: 600px) and (max-width: 1024px){\n    :host{\n        margin: 5px;\n    }\n}\n\n"

/***/ }),

/***/ "./src/lib/dam/components/table/table-item/table-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/lib/dam/components/table/table-item/table-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dam-item\">\n  <div class=\"dam-type\"> {{header}}</div>\n  <div class=\"dam-preview\">\n      <div class=\"prueba\"> \n          <img class=\"dam-image\" [src]=\"image\"> \n        </div>\n      <div (title)=\"item.title\" class=\"dam-info\"> <strong>{{title}}</strong>\n          <div> {{subtitle}} </div>\n      </div>\n  </div>\n  <div class=\"dam-options\">\n      <a *ngIf=\"itemConfigs.actions.edit\" (click) = \"editFile()\" class=\"dam-btn-base group\" title=\"Edit\"><fa-icon [icon]=\"faEdit\"></fa-icon></a>\n      <a *ngIf=\"itemConfigs.actions.download\" (click)=\"downloadFile()\" download class=\"dam-btn-base group\" title=\"Download\"><fa-icon [icon]=\"faDownload\"></fa-icon></a>\n      <a *ngIf=\"itemConfigs.actions.delete\" (click)=\"deleteFile()\" class=\"dam-btn-base group\" title=\"Delete\"><fa-icon [icon]=\"faTrash\"></fa-icon></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/lib/dam/components/table/table-item/table-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/lib/dam/components/table/table-item/table-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: TableItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableItemComponent", function() { return TableItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/main.service */ "./src/lib/dam/services/main.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/Item */ "./src/lib/dam/models/Item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Component used as a item in the table list for displaying the data of the assigned record.
 */
var TableItemComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function TableItemComponent(mainService, ngxSmartModalService) {
        this.mainService = mainService;
        this.ngxSmartModalService = ngxSmartModalService;
        /**
         * @ignore
         */
        this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDownload"];
        /**
         * @ignore
         */
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"];
        /**
         * @ignore
         */
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        /**
         * The image src to be displayed by the item.
         */
        this.image = '';
        /**
         * Config object for this component extracted using the Profile mapper.
         */
        this.itemConfigs = null;
        /**
         * The string displayed as a header for the item.
         */
        this.header = '';
        /**
         * The string displayed as a title for the item.
         */
        this.title = '';
        /**
         * The string displayed as a subtitle for the item.
         */
        this.subtitle = '';
        /**
         * Mapper for IDs for multiple requests methods
         */
        this.requestsModel = null;
    }
    /**
     * @ignore
     */
    TableItemComponent.prototype.ngOnInit = function () {
        this.image = this.parseImage();
        this.itemConfigs = this.mainService.getComponentConfigs('tableItem');
        this.requestsModel = this.mainService.getModel('requests');
        this.initFields();
    };
    /**
     * Creates the strings used in the display replacing values using the config given by the Profile mapper.
     */
    TableItemComponent.prototype.initFields = function () {
        this.header = this.itemConfigs.fields.header.replace('$', this.item.type);
        this.title = this.itemConfigs.fields.title.replace('$', this.item.title);
        this.subtitle = this.itemConfigs.fields.subtitle.replace('$', this.item.size);
    };
    /**
     * Generates image src given the data in the item.
     * @returns {string} img
     */
    TableItemComponent.prototype.parseImage = function () {
        var img = '';
        switch (this.item.type) {
            case 'image':
                img = this.getResourceImage(this.item.image);
                break;
            case 'audio':
                img = 'https://via.placeholder.com/200/ef680e/ffffff?text=Audio';
                break;
            case 'video':
                img = 'https://via.placeholder.com/200/af8282/ffffff?text=Video';
                break;
            case 'pdf':
                img = this.getResourceImage(this.item.image);
                break;
            case 'other':
                img = 'https://via.placeholder.com/200/5ab1c9/ffffff?text=Other';
                break;
        }
        return img;
    };
    /**
     * Generates a valid src string using the auth token.
     * @param {string} image The src string
     */
    TableItemComponent.prototype.getResourceImage = function (image) {
        var token = this.mainService.getToken();
        return image + '&api_token=' + token;
    };
    /**
     * Fetchs a file and downloads it in the user device.
     */
    TableItemComponent.prototype.downloadFile = function () {
        var _this = this;
        this.mainService.getResource(this.item.hash).subscribe(function (res) {
            var ext = res['result'].data.extension;
            _this.mainService.downloadResource(_this.item[_this.requestsModel.get]).subscribe(function (response) {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(response, _this.item.title + '.' + ext);
            });
        });
    };
    /**
     * Opens delete modal to confirm permanent item deletion from the server.
     */
    TableItemComponent.prototype.deleteFile = function () {
        /*this.mainService.deleteResource(this.item.id).subscribe(
          res => {
            this.mainService.setCurrentPage(this.mainService.getCurrentPageValue());
          }
        );*/
        var data = {
            id: this.item[this.requestsModel.delete],
            title: this.title
        };
        this.ngxSmartModalService.setModalData(data, 'deleteModal');
        this.ngxSmartModalService.getModal('deleteModal').open();
    };
    /**
     * Fetch data from server using the item id, sets up the assets modal and opens it.
     */
    TableItemComponent.prototype.editFile = function () {
        var _this = this;
        var itemData;
        var asset;
        this.mainService.getResource(this.item[this.requestsModel.get]).subscribe(function (response) {
            itemData = response['result'].data;
            asset = itemData;
            var data = {
                id: _this.item[_this.requestsModel.put],
                asset: asset
            };
            _this.ngxSmartModalService.setModalData(data, 'assets');
            _this.ngxSmartModalService.getModal('assets').open();
            // this.mainService.setCurrentPage(this.mainService.getCurrentPageValue());
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Item__WEBPACK_IMPORTED_MODULE_5__["Item"])
    ], TableItemComponent.prototype, "item", void 0);
    TableItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-item',
            template: __webpack_require__(/*! ./table-item.component.html */ "./src/lib/dam/components/table/table-item/table-item.component.html"),
            styles: [__webpack_require__(/*! ./table-item.component.css */ "./src/lib/dam/components/table/table-item/table-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"]])
    ], TableItemComponent);
    return TableItemComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/table/table-search/table-search.component.css":
/*!******************************************************************************!*\
  !*** ./src/lib/dam/components/table/table-search/table-search.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dam-search-bar{\n    margin: 0 0 20px;\n    padding: 25px;\n    border: 0;\n    overflow: hidden;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    margin-top: 1rem;\n}\n\n.dam-search-bar > * {\n    margin: 10px 0;\n}\n\n.dam-search-bar .search-main{\n    flex:2;\n    min-width: 300px;\n    display: flex;\n    flex-direction: row;\n}\n\n.dam-search-bar .search-options{\n    min-width: 180px;\n    flex:1;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.dam-search-bar .search-options > * {\n    margin: auto 0;\n}\n\ninput[type=\"text\"]{\n    max-width: 400px;\n    flex: 2;\n    height: 28px;\n    border-radius: 3px 0 0 3px;\n}\n\n.dam-search-bar input[type=\"text\"]{\n    border-radius: 3px 0 0 3px;\n    border: 1px solid #DDD;\n    background-color: #f9fafb;\n}\n\n.btn-tool{\n    height: 32px;\n    padding: 0 9px;\n    font-size: 12px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    touch-action: manipulation;\n    background: linear-gradient(180deg,#00a397 0,#009E92 100%);\n    color: white;\n}\n\n.btn-tool:hover {\n    background: linear-gradient(180deg,#00a89b 0,#00a397 100%);\n}\n\n.pull-right{\n    float: right;\n}\n\n.center{\n    justify-content: center;\n}\n\n/* MOBILE */\n\n@media all and (max-width: 599px) { \n    .dam-search-bar{\n        padding: 25px 10px 25px 10px;\n    }\n}\n\n/*TABLET*/\n\n@media all and (min-width: 600px) and (max-width: 1024px){\n\n}"

/***/ }),

/***/ "./src/lib/dam/components/table/table-search/table-search.component.html":
/*!*******************************************************************************!*\
  !*** ./src/lib/dam/components/table/table-search/table-search.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-assets-modal></app-assets-modal>\n<div class=\"dam-search-bar shadow-panel\">\n    <div class=\"search-main\" [ngClass]=\"!buttonsConfig.newAsset.active ? 'center' : ''\">\n        <input [(ngModel)]=\"term\" (keyup.enter)=\"search()\" ref=\"searchInput\" type=\"text\">\n        <button *ngIf=\"buttonsConfig.search.active\" (click)=\"search()\" class=\"dam-btn-base group btn-tool\" title=\"Search\"><fa-icon [icon]=\"faSearch\"></fa-icon></button>\n        <!--<button class=\"dam-btn-base group btn-tool\"><fa-icon [icon]=\"faSync\"></fa-icon></button>-->\n        <button *ngIf=\"buttonsConfig.reset.active\" (click)=\"delete()\" class=\"dam-btn-base group btn-tool\" title=\"Reset search\"><fa-icon [icon]=\"faEraser\"></fa-icon></button>\n        <button *ngIf=\"buttonsConfig.clear.active\" class=\"dam-btn-base btn-filters btn-tool\" title=\"Clear filters\"><fa-icon [icon]=\"faTrash\"></fa-icon></button>\n    </div>\n    <div *ngIf=\"buttonsConfig.newAsset.active\" class=\"search-options\">\n        <button (click)=\"handleResourceModal()\" class=\"dam-btn-base btn-filters\">New Asset</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/lib/dam/components/table/table-search/table-search.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/lib/dam/components/table/table-search/table-search.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TableSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSearchComponent", function() { return TableSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/main.service */ "./src/lib/dam/services/main.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component that holds the search input for the application and some other buttons and
 * options.
 */
var TableSearchComponent = /** @class */ (function () {
    /**@ignore */
    function TableSearchComponent(mainService, ngxSmartModalService) {
        this.mainService = mainService;
        this.ngxSmartModalService = ngxSmartModalService;
        /**@ignore */
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        /**@ignore */
        this.faEraser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEraser"];
        /**@ignore */
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSync"];
        /**@ignore */
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        /**
         * The search term
         */
        this.term = '';
        /**
         * Configuration dict extracted from the app configs.
         */
        this.buttonsConfig = null;
    }
    /**@ignore */
    TableSearchComponent.prototype.ngOnInit = function () {
        this.buttonsConfig = this.mainService.getComponentConfigs('tableSearch').searchButtons;
    };
    /**
     * Sets the search term and forces a new list request to the server.
     */
    TableSearchComponent.prototype.search = function () {
        this.mainService.setSearchTerm(this.term);
        this.mainService.setCurrentPage(1);
    };
    /**
     * Open the resource modal.
     */
    TableSearchComponent.prototype.handleResourceModal = function () {
        this.ngxSmartModalService.getModal('assets').open();
    };
    /**
     * Resets the search term to an empty string and calls the search method.
     */
    TableSearchComponent.prototype.delete = function () {
        this.term = '';
        this.search();
    };
    TableSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-search',
            template: __webpack_require__(/*! ./table-search.component.html */ "./src/lib/dam/components/table/table-search/table-search.component.html"),
            styles: [__webpack_require__(/*! ./table-search.component.css */ "./src/lib/dam/components/table/table-search/table-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"]])
    ], TableSearchComponent);
    return TableSearchComponent;
}());



/***/ }),

/***/ "./src/lib/dam/components/table/table.component.css":
/*!**********************************************************!*\
  !*** ./src/lib/dam/components/table/table.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    margin: 0 1em;\n}\n\n.items{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    display: -ms-grid;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    grid-column-gap: 15px;\n    justify-items: center;\n    \n}\n\n.items:after {\n    flex: auto;\n}\n\n/*Paginator*/\n\n.flex-row-container{\n    padding: 0 1em 0 1em;\n}\n\n.pagination-nav{\n    display: block;\n}\n\n.pagination{\n    display: inline-block;\n    padding: 0;\n}\n\n.pagination li{\n    display: inline-block;\n    cursor: pointer;\n    padding:3px 0 3px 0;\n    background-color: white;\n    border-left: 1px solid #ddd;\n    margin-left: -1px;\n}\n\n.pagination li:hover{\n    background-color: #EDEFF2;\n    border-color: #EDEFF2;\n}\n\nul.pagination li:first-child{\n    border-left:0;\n    border-radius: 3px 0 0 3px;\n}\n\nul.pagination li:last-child{\n    border-radius: 0 3px 3px 0;\n}\n\n.pagination li a{\n    font-size: 11px;\n    font-weight: 700;\n    cursor: pointer;\n    padding:6px 12px;\n    \n}\n\n.pagination-found{\n    margin-top:1em;\n}\n\n.pagination-found .label{\n    padding: .5em .6em !important;\n    background-color: #009E92 !important;\n    font-size: 80% !important;\n    color:white;\n}\n\n.pagination-found .label .badge{\n    min-width: 10px;\n    padding: 4px 5px 4px 4px;\n    color: #009E92 !important;\n    background-color: #EDEFF2 !important;\n    border-radius: 20px;\n    font-size: 95%;\n}\n\n.pagination li.active{\n    background-color: #009E92;\n    color:white;\n}\n\n.justify-end{\n    justify-content: flex-end;\n}\n\n.dialog-delete {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\n.dialog-delete h2.legend {\n    color: #00a397;\n}\n\n.dialog-delete span {\n    font-weight: bold;\n}\n\n.dialog-delete .options {\n    border-top: 1px solid #C8CACC;\n    margin-top: 1em;\n    padding-top: 1em;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.limit-selector {\n    width: 4em;\n    margin: 0.6em 1em 0 auto;\n}\n\n/* MOBILE */\n\n@media all and (max-width: 599px) { \n    .pagination-nav{\n        display: block;\n        margin: 0 auto 0 auto;\n    }\n    .pagination-found{\n        margin: 0 auto 0 auto;\n    }\n    .flex-row-container{\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n/*TABLET*/\n\n@media all and (min-width: 600px) and (max-width: 1024px){\n    \n}\n\n/*PC*/\n\n@media all and (min-width: 1025px){\n    \n}\n\n"

/***/ }),

/***/ "./src/lib/dam/components/table/table.component.html":
/*!***********************************************************!*\
  !*** ./src/lib/dam/components/table/table.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-search></app-table-search>\n<!--PAGINATOR-->\n<div class=\"flex-row-container\">\n    <div class=\"pagination-found\"> \n        <span class=\"label label-default\">Found <span class=\"badge\">{{query.total}}</span> items</span>\n    </div>\n    <ng-select\n            class=\"limit-selector dam-select\"\n            (change)=\"changeLimit($event)\"\n            [(ngModel)]=\"limitSelect\"\n            [items]=\"tableConfig.paginator.limits\"\n            [clearable]=\"false\"\n    ></ng-select>\n    <nav *ngIf=\"tableConfig.paginator.top\" class=\"pagination-nav\">\n        <ul class=\"pagination shadow-panel\">\n            <li [ngClass]=\"{'active': page.active == true}\" *ngFor=\"let page of paginator\">\n                <a (click)=\"changePage(page.value)\">\n                    <ng-container *ngIf=\"page.icon !== null; else number\">\n                        <fa-icon [icon]=\"page.icon\"></fa-icon>\n                    </ng-container>\n                    <ng-template #number>\n                        <span>{{ page.value }}</span>\n                    </ng-template>\n                </a>\n            </li>\n        </ul>\n    </nav>\n</div>\n<!--END PAGINATOR-->\n<div class=\"items\">\n    <ng-container *ngFor=\"let item of items\">\n        <app-table-item [item]=\"item\" (click)=\"select(item)\"></app-table-item>\n    </ng-container>\n</div>\n<div *ngIf=\"tableConfig.paginator.bottom\" class=\"flex-row-container justify-end\">\n    <nav class=\"pagination-nav\">\n        <ul class=\"pagination shadow-panel\">\n            <li [ngClass]=\"{'active': page.active == true}\" *ngFor=\"let page of paginator\">\n                <a (click)=\"changePage(page.value)\">\n                    <ng-container *ngIf=\"page.icon !== null; else number\">\n                        <fa-icon [icon]=\"page.icon\"></fa-icon>\n                    </ng-container>\n                    <ng-template #number>\n                        <span>{{ page.value }}</span>\n                    </ng-template>\n                </a>\n            </li>\n        </ul>\n    </nav>\n</div>\n<a target=\"_blank\" href=\"https://www.ximdex.com/\">\n    <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAoCAYAAAAyhCJ1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZDgwYzg1Ni0zZGZhLTQ0MTYtYWM5ZS0yNjA2YzdmYjMzNTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzZGMjUwNzQ4QzBFMTFFOEE1OUZFQjFFQjJGQUM4Q0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzZGMjUwNzM4QzBFMTFFOEE1OUZFQjFFQjJGQUM4Q0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDYwNzY4Ny1kNjMwLTRjOTgtOWNlOS03YmI0YjdlMzQ5NGIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiODRiNzkzMy1kNDVkLTExN2ItOTI4Mi1kODFiYjJmMzRjNDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7nUwLzAAAE2ElEQVR42uxa3Y3bOBCWc8nLvURXQbQVhFtB7AZutR1IFSSqwHYFViqwU4GFa8BOBVEHq63AylseAjhk8BE3OyElyraygTEfQFheSuLPfDP8ZtaT4/EYCQQTIYJAiCAQIgiECAIhgkCIIBAiCIQIgt9FhH83a9nFfix0m+u21+1et/ZSL/4vyy/ynpcDjZ7oD4UWYWEGtWdxU3ya+2PcZ1oz4qabOWZkXtUfRAizHx9AjN8GbbeXmjDfL0IEkOALDGoxJ9cN2G6whUF8mBESjUGEOSFqFQleXDIipIwELgPscB33vOtuRCI0Yvdf8NfZTCGIA+8JuU+NuGhDhBtEnUI48BNHHdFfXYoIQ42RwxjLZ1h4g4hTP9PGK+gB9SewQOuDb/rjb02GF2MRwRh7otstEYstCLCBMRYOz/wc8G6TjpiU5gHHkkuJH3DPggmyI9qKPXPAexc4xg7kXtunIDZ3pI/2Jz3ZwQFaaodP8/1tAHHWbD527VxYZh19RsvFum11M1HgYL6DDF/RPzkrfdQvWDBxuNcvn5H00fZXRDQ+CU/kehmgnGMs1h41N+T8z7Bx9CigRNgRsTjzzOFUWKLzaLNCRtAHvnaF+XYdqRs4ncUDIeS9tkNF7LQj2dpS9wVlKEMiwj5QM4RohDpww5csQtj3z1lUOgUlDDoDcWvH+IWjn49vhTIlQYFIeYNxurAie1aROeUkymbsmKFrfk9IkBISNKEkOPdoUCYEkbNw01Eo+XACEayxauLpNg9PyMadmn0UeHZPDMBT3NLTn3rqJdZ7SxKtCvytq7ZADWznZJ756BmTpsVTbYcpIdVJDhKcPmp27fWANWNmSiZYwYNbGMsWkO5IgcdOsBlosB1ZqGIeeym0PWRte1Jni0dH/2NgxOVjvO7Zl6mNUNo2ijqIsdcoRAA+dSjhKRhsCzqxR80PLfBY7+DhsbiymoEC0b/i+xvmQJVjL5d4ZnqugwytLK4cIuYRg5vrLTzpH4ciVqTodHtCGM8c5LgmxB1ic+M5TktkJBmeN3a41dFgsIMM0Qg8bSr0gDkUcIl+V+5cM4Yqdi6GbNDOEX2u7b9dDdM7Lb7nHef9lDlIDGeMxiSCYpqh9GQLdUDGkQzIOLZk7IKlkOmVEWGGbGOCqGrrMYlnb9bseSviF2MSIXYcFRR3DhXsM3wSmF2saTqEyFN4Uq/nNmKIwAt2NEeKmTmKV4mnXvLeYZ/R0setrVqxEKUc4WoV+M45FpiiKpcxncBTxiSwiDM2aBTM2LwTCL8+EsXRr5XLFBExjZ5WJxNaPzBHB3RBecKen19HiP4vifLK2Dp6WmblIfxdDxm2zEMqpppzdn8SmOaNSYQNMygtE2c9QpiS6IE8uyV799kTCUsiDpdk/SmpL4xKhBCiTD3HgK+gVHnuzR1elHvOyrqjyNRX5TunP2eG6NNJdM33Halwy4pStHZTR6T6qgnRRk8rkmsStTsx5H8NaYAi3RBm96WDpUeH2POwQd1i0aNbVIcgjR2kS9D2HdnROf3WCWJC2oY93/Q8p3BP61lXgr7a9VM1GN/uSw2CXIYIGGCBsK4wkYaErYYRISFHAP+pWvFMIfzqcKnfLMqvmAVCBIEQQSBEEAgRBEIEgRBBIEQQCBEEQgTBcPwQYAAhZ8eTbd5z/wAAAABJRU5ErkJggg==\"/>\n</a>\n<ngx-smart-modal [closable]=\"false\" (onDismiss)=\"deleteModal.removeData()\" #deleteModal identifier=\"deleteModal\" class=\"modal-delete\">\n    <div class=\"dialog-delete\">\n        <h2 class=\"legend\">Confirm deletion</h2> \n        <span *ngIf=\"deleteModal.hasData()\">{{deleteModal.getData().title}}</span>\n        <p>Do you really want to delete this asset? This action cannot be undone.</p>\n        <div class=\"options\">\n            <button class=\"dam-btn-base\" (click)=\"deleteModal.removeData(); deleteModal.close()\">Cancel</button>\n            <button class=\"dam-btn-base red\" [disabled]=\"!deleteModal.hasData()\" (click)=\"deleteItem()\">Delete</button>\n        </div>\n    </div>\n</ngx-smart-modal>"

/***/ }),

/***/ "./src/lib/dam/components/table/table.component.ts":
/*!*********************************************************!*\
  !*** ./src/lib/dam/components/table/table.component.ts ***!
  \*********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main.service */ "./src/lib/dam/services/main.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component that holds the resources as table items and manages pagination,
 * actions and some additional options.
 */
var TableComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function TableComponent(mainService, ngxSmartModalService) {
        this.mainService = mainService;
        this.ngxSmartModalService = ngxSmartModalService;
        /**
         * The query as a double bound attribute
         */
        this.query = {};
        /**
         * The output emitter for the query attribute
         */
        this.queryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Config object for this component extracted using the Profile mapper
         */
        this.tableConfig = null;
        /**
         * Mapper for IDs for multiple requests methods
         */
        this.requestsModel = null;
    }
    /**
     * @ignore
     */
    TableComponent.prototype.ngOnInit = function () {
        this.currentPage = 1;
        this.tableConfig = this.mainService.getComponentConfigs('table');
        this.requestsModel = this.mainService.getModel('requests');
        this.limitSelect = { label: this.query.perPage, value: this.query.perPage };
        this.createPaginator();
    };
    /**
     * @ignore
     */
    TableComponent.prototype.ngOnChanges = function () {
        // this.totalPages = Math.ceil(this.items.length/this.limit);
        this.totalPages = this.query.lastPage;
        var newPage = this.mainService.getCurrentPageValue();
        if (newPage !== this.currentPage) {
            this.changePage(newPage);
        }
        this.createPaginator();
    };
    /**
     * Changes the active list page.
     *
     * @param {number} newPage The new page
     */
    TableComponent.prototype.changePage = function (newPage) {
        if (!isNaN(newPage)) {
            this.currentPage = newPage;
            this.query.page = newPage;
            this.queryChange.emit(this.query);
            this.mainService.setCurrentPage(newPage);
        }
    };
    /**
     * Changes the maximun items per page.
     *
     * @param {number} newLimit The desired maximum
     */
    TableComponent.prototype.changeLimit = function (newLimit) {
        this.limit = newLimit;
        this.query.perPage = newLimit;
        this.limitSelect = { label: newLimit, value: newLimit };
        this.queryChange.emit(this.query);
        this.mainService.setCurrentPage(1);
    };
    /**
     * Changes the current selected table item and sets its value in the main service.
     *
     * @param {Item} item The selected item
     */
    TableComponent.prototype.select = function (item) {
        this.selectedItem = item;
        this.mainService.setActiveItem(item);
    };
    /**
     * Deletes from the server the resource previously shown in the delete confirmation modal.
     */
    TableComponent.prototype.deleteItem = function () {
        var _this = this;
        if (this.ngxSmartModalService.getModal('deleteModal').hasData()) {
            var data = this.ngxSmartModalService.getModal('deleteModal').getData();
            this.mainService.deleteResource(data[this.requestsModel.delete]).subscribe(function (res) {
                _this.mainService.setCurrentPage(_this.mainService.getCurrentPageValue());
                _this.ngxSmartModalService.getModal('deleteModal').removeData();
                _this.ngxSmartModalService.getModal('deleteModal').close();
            });
        }
    };
    /**
     * Creates the paginator data based on info about current and total pages
     */
    TableComponent.prototype.createPaginator = function () {
        this.paginator = [];
        if (this.query.lastPage <= 3) {
            this.pagShorted = false;
        }
        else {
            this.pagShorted = true;
        }
        if (this.currentPage > 2 && this.pagShorted) {
            this.paginator.push({ value: 1, active: false, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStepBackward"] });
            this.paginator.push({ value: this.currentPage - 1, active: false, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretLeft"] });
        }
        for (var i = 1; i <= this.query.lastPage; i++) {
            if (this.pagShorted) {
                if ((i < this.currentPage + 3 && i > this.currentPage - 3)) {
                    this.paginator.push({ value: i, active: i === this.currentPage, icon: null });
                }
            }
            else {
                this.paginator.push({ value: i, active: i === this.currentPage, icon: null });
            }
        }
        if (this.currentPage < this.query.lastPage - 2 && this.pagShorted) {
            this.paginator.push({ value: this.currentPage + 1, active: false, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretRight"] });
            this.paginator.push({ value: this.query.lastPage, active: false, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStepForward"] });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "query", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "queryChange", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/lib/dam/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/lib/dam/components/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/lib/dam/dam.module.ts":
/*!***********************************!*\
  !*** ./src/lib/dam/dam.module.ts ***!
  \***********************************/
/*! exports provided: DamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamModule", function() { return DamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dam_dam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dam/dam.component */ "./src/lib/dam/components/dam/dam.component.ts");
/* harmony import */ var _components_dyn_form_dyn_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dyn-form/dyn-form.module */ "./src/lib/dam/components/dyn-form/dyn-form.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/main.service */ "./src/lib/dam/services/main.service.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/search.component */ "./src/lib/dam/components/search/search.component.ts");
/* harmony import */ var _components_modals_assets_modal_assets_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modals/assets-modal/assets-modal.component */ "./src/lib/dam/components/modals/assets-modal/assets-modal.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/table/table.component */ "./src/lib/dam/components/table/table.component.ts");
/* harmony import */ var _components_table_table_search_table_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/table/table-search/table-search.component */ "./src/lib/dam/components/table/table-search/table-search.component.ts");
/* harmony import */ var _components_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/table/table-item/table-item.component */ "./src/lib/dam/components/table/table-item/table-item.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _components_facets_facets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/facets/facets.component */ "./src/lib/dam/components/facets/facets.component.ts");
/* harmony import */ var _components_facets_facet_facet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/facets/facet/facet.component */ "./src/lib/dam/components/facets/facet/facet.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/lib/dam/components/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var DamModule = /** @class */ (function () {
    function DamModule() {
    }
    DamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalModule"].forRoot(),
                _components_dyn_form_dyn_form_module__WEBPACK_IMPORTED_MODULE_3__["DynFormModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"]
            ],
            providers: [
                _services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"]
            ],
            declarations: [
                _components_dam_dam_component__WEBPACK_IMPORTED_MODULE_2__["DamComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"],
                _components_table_table_search_table_search_component__WEBPACK_IMPORTED_MODULE_12__["TableSearchComponent"],
                _components_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_13__["TableItemComponent"],
                _components_modals_assets_modal_assets_modal_component__WEBPACK_IMPORTED_MODULE_10__["AssetsModalComponent"],
                _components_facets_facets_component__WEBPACK_IMPORTED_MODULE_15__["FacetsComponent"],
                _components_facets_facet_facet_component__WEBPACK_IMPORTED_MODULE_16__["FacetComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"],
            ],
            exports: [
                _components_dam_dam_component__WEBPACK_IMPORTED_MODULE_2__["DamComponent"]
            ]
        })
    ], DamModule);
    return DamModule;
}());



/***/ }),

/***/ "./src/lib/dam/index.ts":
/*!******************************!*\
  !*** ./src/lib/dam/index.ts ***!
  \******************************/
/*! exports provided: DamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dam_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dam.module */ "./src/lib/dam/dam.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DamModule", function() { return _dam_module__WEBPACK_IMPORTED_MODULE_0__["DamModule"]; });




/***/ }),

/***/ "./src/lib/dam/mappers/FormMapper.ts":
/*!*******************************************!*\
  !*** ./src/lib/dam/mappers/FormMapper.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ "./src/lib/dam/mappers/environment.ts");
/* harmony import */ var _components_dyn_form_questions_question_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dyn-form/questions/question-dropdown */ "./src/lib/dam/components/dyn-form/questions/question-dropdown.ts");
/* harmony import */ var _components_dyn_form_questions_question_textbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dyn-form/questions/question-textbox */ "./src/lib/dam/components/dyn-form/questions/question-textbox.ts");
/* harmony import */ var _components_dyn_form_questions_question_depdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dyn-form/questions/question-depdrop */ "./src/lib/dam/components/dyn-form/questions/question-depdrop.ts");
/* harmony import */ var _components_dyn_form_questions_question_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dyn-form/questions/question-textarea */ "./src/lib/dam/components/dyn-form/questions/question-textarea.ts");






/**
 * This class extracts and maps data about the additional form
 * for uploading or editing resources.
 */
var FormMapper = /** @class */ (function () {
    /**@ignore */
    function FormMapper(mainService) {
        /**
         * The extracted forms as a dict
         */
        this.forms = null;
        /**
         * The extracted Questions instances for every field of the form
         */
        this.fields = null;
        this.mainService = mainService;
        this.init();
    }
    /**@ignore */
    FormMapper.prototype.setForms = function (forms) {
        this.forms = forms;
        return this;
    };
    /**@ignore */
    FormMapper.prototype.getForms = function () {
        return this.forms;
    };
    /**@ignore */
    FormMapper.prototype.getFields = function () {
        return this.fields;
    };
    /**@ignore */
    FormMapper.prototype.setFields = function (fields) {
        this.fields = fields;
    };
    /**
     * Initializes and process the form to obtain que question fields
     */
    FormMapper.prototype.initForm = function () {
        var _this = this;
        var localForm = this.getForms();
        if (localForm.api === true) {
            this.mainService.getForm().subscribe(function (response) {
                var rawFields = response['result'].data.fields;
                _this.fields = _this.handleForm(rawFields);
            });
        }
        else {
            this.fields = this.handleForm(localForm.fields);
        }
    };
    /**@ignore */
    FormMapper.prototype.getValue = function (field, key, isArray) {
        if (isArray === void 0) { isArray = true; }
        var value = Object.assign({}, field);
        var keys = key.split('.');
        if (!isArray) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(key, value)) {
                value = value[key];
            }
        }
        else {
            for (var i = 0; i < keys.length; i++) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(Object, value) && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(keys[i], value)) {
                    value = value[keys[i]];
                }
                else {
                    break;
                }
            }
        }
        if (value === field) {
            value = '';
        }
        return value;
    };
    /**
     * Evaluates every field in the form and creates the questions
     * @param raw The raw data from the form
     * @param asset Some asset to use its data
     */
    FormMapper.prototype.handleForm = function (raw, asset) {
        var _this = this;
        if (asset === void 0) { asset = null; }
        var newFields = raw.map(function (field) {
            var object = null;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(asset)) {
                var key = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('realName', field.object) ? field.object.realName : field.object.key;
                field.object.val = _this.getValue(asset, key, _this.getProp(field.object, 'multi', false));
            }
            if (field.type === 'dropdown') {
                object = new _components_dyn_form_questions_question_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownQuestion"](field.object);
            }
            else if (field.type === 'text') {
                object = new _components_dyn_form_questions_question_textbox__WEBPACK_IMPORTED_MODULE_3__["TextboxQuestion"](field.object);
            }
            else if (field.type === 'depdrop') {
                object = new _components_dyn_form_questions_question_depdrop__WEBPACK_IMPORTED_MODULE_4__["DepDropQuestion"](field.object);
            }
            else if (field.type === 'text-area') {
                object = new _components_dyn_form_questions_question_textarea__WEBPACK_IMPORTED_MODULE_5__["TextAreaQuestion"](field.object);
            }
            return object;
        });
        return newFields.sort(function (a, b) { return a.order - b.order; });
    };
    /**
     * Gets a property from the selected object
     * @param obj The object to be inspected (The haystack)
     * @param prop The property to be found (The needle)
     * @param _default The default value if the needle is not found
     */
    FormMapper.prototype.getProp = function (obj, prop, _default) {
        if (_default === void 0) { _default = null; }
        var result = _default;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(prop, obj)) {
            result = obj[prop];
        }
        return result;
    };
    /**
     * Initializes the mapper extracting values from the environment and the active window,
     * prioritising the window object.
     */
    FormMapper.prototype.init = function () {
        var xdam = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('$xdam', window) ? window.$xdam : null;
        var result = Object.assign({}, _environment__WEBPACK_IMPORTED_MODULE_1__["environment"], xdam);
        this.setForms(result.forms)
            .initForm();
    };
    return FormMapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (FormMapper);


/***/ }),

/***/ "./src/lib/dam/mappers/ProfileMapper.ts":
/*!**********************************************!*\
  !*** ./src/lib/dam/mappers/ProfileMapper.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _profiles_standard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profiles/standard */ "./src/lib/dam/profiles/standard.ts");
/* harmony import */ var _profiles_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profiles/light */ "./src/lib/dam/profiles/light.ts");



/**
 * This class extracts and maps data about the components
 * configuration given the active profile.
 */
var ConfigMapper = /** @class */ (function () {
    /**@ignore */
    function ConfigMapper() {
        /**
         * The general configuration for the application
         */
        this.generalConfigs = null;
        /**
         * The configurations for the components
         */
        this.componentConfigs = null;
        /**
         * The currently selected profile
         */
        this.currentProfile = 'standard';
        /**
         * The available profiles
         */
        this.profiles = {
            'standard': _profiles_standard__WEBPACK_IMPORTED_MODULE_1__["standard"],
            'light': _profiles_light__WEBPACK_IMPORTED_MODULE_2__["light"]
        };
        this.init();
    }
    /**@ignore */
    ConfigMapper.prototype.setCurrentProfile = function (profile) {
        var current = 'standard';
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(profile, this.profiles)) {
            current = profile;
        }
        this.currentProfile = this.profiles[profile];
        return this;
    };
    /**@ignore */
    ConfigMapper.prototype.setConfigs = function (configs) {
        this.generalConfigs = configs.general;
        this.componentConfigs = configs.components;
        return this;
    };
    /**@ignore */
    ConfigMapper.prototype.getGeneralConfigs = function () {
        return this.generalConfigs;
    };
    /**
     * Gets the configs for a particular component
     * @param component The component requested
     * @returns {Object} The configs object
     */
    ConfigMapper.prototype.getComponentConfigs = function (component) {
        if (component === void 0) { component = null; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(component)) {
            return this.componentConfigs;
        }
        else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(component, this.componentConfigs)) {
            return this.componentConfigs[component];
        }
        else {
            return null;
        }
    };
    /**
     * Initializes the mapper extracting values from the environment and the active window,
     * prioritising the window object.
     */
    ConfigMapper.prototype.init = function () {
        var xdam = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('$xdam', window) ? window.$xdam : null;
        var profile = 'standard';
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('profile', xdam)) {
            profile = xdam.profile;
        }
        this.setCurrentProfile(profile);
        var result = Object.assign({}, this.currentProfile, xdam);
        this.setConfigs(result.configs);
    };
    return ConfigMapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (ConfigMapper);


/***/ }),

/***/ "./src/lib/dam/mappers/RouterMapper.ts":
/*!*********************************************!*\
  !*** ./src/lib/dam/mappers/RouterMapper.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ "./src/lib/dam/mappers/environment.ts");


/**
 * Mapper class for routes and models configurations in index or environment file
 */
var RouterMapper = /** @class */ (function () {
    /**
     * @ignore
     */
    function RouterMapper() {
        /**
         * The base URL for all requests
         */
        this.baseUrl = '';
        /**
         * The availables routes in API for the requests
         */
        this.routes = '';
        /**
         * The auth token for requests
         */
        this.token = '';
        /**
         * The backend to frontend model mappers
         */
        this.models = null;
        /**
         * The base parameters for all queries
         */
        this.baseParams = null;
        this.init();
    }
    /**@ignore */
    RouterMapper.prototype.setBaseUrl = function (url) {
        this.baseUrl = url;
        return this;
    };
    /**@ignore */
    RouterMapper.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    /**@ignore */
    RouterMapper.prototype.setRoutes = function (routes) {
        this.routes = routes;
        return this;
    };
    /**@ignore */
    RouterMapper.prototype.getRoutes = function () {
        return this.routes;
    };
    /**@ignore */
    RouterMapper.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    /**@ignore */
    RouterMapper.prototype.getToken = function () {
        return this.token;
    };
    /**@ignore */
    RouterMapper.prototype.setModels = function (models) {
        this.models = models;
        return this;
    };
    /**@ignore */
    RouterMapper.prototype.getModels = function () {
        return this.models;
    };
    /**@ignore */
    RouterMapper.prototype.setBaseParams = function (params) {
        this.baseParams = params;
        return this;
    };
    /**@ignore */
    RouterMapper.prototype.getBaseParams = function (params) {
        for (var key in this.baseParams) {
            params = params.append(key, String(this.baseParams[key]));
        }
        return params;
    };
    /**@ignore */
    RouterMapper.prototype.urlParams = function () {
        var url = new URL(window.location.href);
        return url.searchParams;
    };
    /**
     * Initializes the mapper extracting values from the environment and the active window,
     * prioritising the window object.
     */
    RouterMapper.prototype.init = function () {
        var xdam = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('$xdam', window) ? window.$xdam : null;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xdam)) {
            xdam.token = this.urlParams().get('token');
        }
        var result = Object.assign({}, _environment__WEBPACK_IMPORTED_MODULE_1__["environment"], xdam);
        this.setBaseUrl(result.base_url)
            .setToken(result.token)
            .setRoutes(result.endpoints)
            .setModels(result.models)
            .setBaseParams(result.base_params);
    };
    return RouterMapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (RouterMapper);


/***/ }),

/***/ "./src/lib/dam/mappers/environment.ts":
/*!********************************************!*\
  !*** ./src/lib/dam/mappers/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * The default configuration for the app, all the info here will be overwrited if
 * the window also includes it
 */
var environment = {
    token: 'ssdfksj856erfh3vs634pldaskg',
    base_url: 'http://universo.lh/api/v1/',
    endpoints: {
        resources: {
            get: 'resources',
            post: 'resources',
            delete: 'resources'
        }
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/lib/dam/models/Asset.ts":
/*!*************************************!*\
  !*** ./src/lib/dam/models/Asset.ts ***!
  \*************************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
/**
 * The Asset model used by the resources modal to show or store the resources parameters.
 */
var Asset = /** @class */ (function () {
    /**@ignore */
    function Asset(title, description, author, url, resource, extension, type) {
        this.title = title || '';
        this.description = description || '';
        this.author = author || '';
        this.externalUrl = url || '';
        this.resource = resource || null;
        this.extension = extension || '';
        this.type = type || '';
    }
    return Asset;
}());



/***/ }),

/***/ "./src/lib/dam/models/Item.ts":
/*!************************************!*\
  !*** ./src/lib/dam/models/Item.ts ***!
  \************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/**
 * The item model used by the table component to show info about every single resource.
 */
var Item = /** @class */ (function () {
    /**@ignore */
    function Item(id, tit, h, siz, tp, img) {
        this.id = id;
        this.title = tit || '';
        this.hash = h || '';
        this.size = siz || '';
        this.type = tp || '';
        this.image = img || '';
    }
    return Item;
}());



/***/ }),

/***/ "./src/lib/dam/profiles/light.ts":
/*!***************************************!*\
  !*** ./src/lib/dam/profiles/light.ts ***!
  \***************************************/
/*! exports provided: light */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/**
 * @ignore
 */
var light = {
    configs: {
        general: {
            language: 'en'
        },
        components: {
            main: {
                query: {
                    page: { name: 'page' },
                    limit: { name: 'limit', value: 20 },
                    search: { name: 'name', value: '$' }
                }
            },
            table: {
                paginator: {
                    top: true,
                    bottom: false,
                    limits: [10, 20, 50, 100]
                }
            },
            facets: {
                active: true
            },
            tableItem: {
                clickView: true,
                fields: {
                    header: '$',
                    Imgplace: {},
                    title: '$',
                    subtitle: ''
                },
                actions: {
                    view: true,
                    edit: true,
                    download: true,
                    delete: true,
                }
            },
            tableSearch: {
                searchButtons: {
                    search: {
                        active: true
                    },
                    reset: {
                        active: true
                    },
                    clear: {
                        active: false
                    },
                    newAsset: {
                        active: true
                    }
                }
            }
        }
    }
};


/***/ }),

/***/ "./src/lib/dam/profiles/standard.ts":
/*!******************************************!*\
  !*** ./src/lib/dam/profiles/standard.ts ***!
  \******************************************/
/*! exports provided: standard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standard", function() { return standard; });
/**
 * @ignore
 */
var standard = {
    configs: {
        general: {
            language: 'en'
        },
        components: {
            main: {
                query: {
                    page: { name: 'page' },
                    limit: { name: 'limit', value: 20 },
                    search: { name: 'name', value: '$' }
                }
            },
            table: {
                paginator: {
                    top: true,
                    bottom: true,
                    limits: [10, 20, 50, 100]
                }
            },
            facets: {
                active: true
            },
            tableItem: {
                fields: {
                    header: '$',
                    Imgplace: {},
                    title: '$',
                    subtitle: 'Size: $'
                },
                actions: {
                    edit: true,
                    download: true,
                    delete: true
                }
            },
            tableSearch: {
                searchButtons: {
                    search: {
                        active: true
                    },
                    reset: {
                        active: true
                    },
                    clear: {
                        active: true
                    },
                    newAsset: {
                        active: true
                    }
                }
            }
        }
    }
};


/***/ }),

/***/ "./src/lib/dam/services/main.service.ts":
/*!**********************************************!*\
  !*** ./src/lib/dam/services/main.service.ts ***!
  \**********************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _mappers_RouterMapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mappers/RouterMapper */ "./src/lib/dam/mappers/RouterMapper.ts");
/* harmony import */ var _mappers_ProfileMapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mappers/ProfileMapper */ "./src/lib/dam/mappers/ProfileMapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// const API = environment.API;
// const resourcesAPI = environment.resourcesAPI;
/**
 * Service who acts as a global state for the application.
 */
var MainService = /** @class */ (function () {
    /**
     * @ignore
     */
    function MainService(http) {
        this.http = http;
        /**
         * Dict containing options for using with the http client
         */
        this.httpOptions = { headers: {}, params: {} };
        /**
         * The token used for auth in queries
         */
        this.token = '';
        /**
         * The application endpoint for queries
         */
        this.endPoint = 'resources';
        this.currentPage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.activeItem = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeFacets = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.settings = new _mappers_RouterMapper__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.configs = new _mappers_ProfileMapper__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getToken()
        });
    }
    /**
     * Gets the token parsed by the mapper.
     */
    MainService.prototype.getToken = function () {
        return this.settings.getToken();
    };
    /**
     * Gets the queries routes parsed by the mapper.
     */
    MainService.prototype.getRoutes = function () {
        return this.settings.getRoutes();
    };
    /**
     * Create the complete API route used for queries.
     * @param {string} method The desired method from the settings
     * @param {string} name The name of the endpoint
     */
    MainService.prototype.getRoute = function (method, name) {
        var route = Object(ramda__WEBPACK_IMPORTED_MODULE_3__["hasIn"])(name, this.getRoutes()) ? this.getRoutes()[name] : null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_3__["isNil"])(route)) {
            route = Object(ramda__WEBPACK_IMPORTED_MODULE_3__["hasIn"])(method, route) ? "" + this.settings.getBaseUrl() + (route)[method] : null;
        }
        return route;
    };
    /**
     * Get the mappers between api model and front model.
     * @returns {Object} The models dict
     */
    MainService.prototype.getModels = function () {
        return this.settings.getModels();
    };
    /**
     * Get a specified model mapper.
     * @param name The model mapper name
     */
    MainService.prototype.getModel = function (name) {
        var models = this.getModels();
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_3__["hasIn"])(name, models)) {
            return models[name];
        }
    };
    /**
     * Gets general profile configs from the active profile.
     */
    MainService.prototype.getGeneralConfigs = function () {
        return this.configs.getGeneralConfigs();
    };
    /**
     * Gets the desired component profile config from the active profile.
     * @param component The desired component
     */
    MainService.prototype.getComponentConfigs = function (component) {
        if (component === void 0) { component = null; }
        return this.configs.getComponentConfigs(component);
    };
    /**
     * Calls getResources method with the desired request parameters.
     * @param params The parameters
     * @returns {Observable} The response of getResources
     */
    MainService.prototype.list = function (params) {
        if (params === void 0) { params = null; }
        return this.getResources(params);
    };
    /**
     * Builds a query and fetchs data from the API.
     * @param {string} end The API endpoint
     * @param {string} key The key of the parameter in the params dict
     * @param {string} param The parameter to assign in the params dict
     * @returns {Observable} The response as a observable
     */
    MainService.prototype.getOptions = function (end, key, param) {
        var url = this.settings.getBaseUrl() + end;
        var params = {};
        params[key] = param;
        var heads = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + this.getToken(),
            'Accept': 'application/json'
        });
        return this.http.get(url, { headers: heads, params: params });
    };
    /**
     * Fetchs all the resources from the API.
     * @param {Object} params The parameters dict for the query
     * @returns {Observable} The response as a observable
     */
    MainService.prototype.getResources = function (params) {
        if (params === void 0) { params = null; }
        var url = this.getRoute('list', this.endPoint);
        params = this.settings.getBaseParams(params);
        this.httpOptions.params = params;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_3__["hasIn"])('page', params)) {
            this.getCurrentPage().subscribe(function (value) { params['page'] = value; });
        }
        return this.http.get(url, this.httpOptions);
    };
    /**
     * Gets a single resource from the API.
     * @param id The identifier of the resource
     * @returns {Observable} The response as a observable
     */
    MainService.prototype.getResource = function (id) {
        var url = this.getRoute('get', this.endPoint);
        return this.http.get(url + '/' + id, this.httpOptions);
    };
    /**
     * @ignore
     */
    MainService.prototype.getForm = function () {
        var url = this.settings.getBaseUrl() + 'forms';
        return this.http.get(url, this.httpOptions);
    };
    /**
     * Receives a FormData object and posts the form to the server.
     * @param {FormData} form The form to be sent
     * @returns {Observable} The response as a observable
     */
    MainService.prototype.postFileForm = function (form) {
        var url = this.getRoute('post', this.endPoint);
        var heads = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + this.getToken(),
            'Accept': 'application/json'
        });
        return this.http.post(url, form, { headers: heads });
    };
    /**
     * Receives a FormData object and a resource ID and makes a put request.
     * @param {FormData} form The form to be sent
     * @param {number} id The resource ID
     * @returns {Observable} The response as a observable
     */
    MainService.prototype.putFileForm = function (form, id) {
        var url = this.getRoute('post', this.endPoint);
        var heads = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + this.getToken(),
            'Accept': 'application/json'
        });
        return this.http.post(url + '/' + id, form, { headers: heads });
    };
    /**
     * Downloads a resource as a blob given its ID.
     * @param id The resource ID
     * @returns {Observable} The response as a observable
     */
    MainService.prototype.downloadResource = function (id) {
        var url = this.getRoute('get', this.endPoint);
        var heads = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + this.getToken()
        });
        return this.http.get(url + '/' + id + '/file', { headers: heads, responseType: 'blob' });
    };
    /**
     * Deletes a resource from the server given its ID.
     * @param id The resource ID
     * @returns {Observable} The response as a observable
     */
    MainService.prototype.deleteResource = function (id) {
        var url = this.getRoute('delete', this.endPoint);
        return this.http.delete(url + '/' + id, { headers: this.httpOptions.headers });
    };
    /**
     * Modifies current page and notifies every subscribed component.
     * @param {number} newPage The new active page
     */
    MainService.prototype.setCurrentPage = function (newPage) {
        this.currentPage.next(newPage);
    };
    /**
     * Returns the current page as a subscribable observable.
     * @returns {Observable<number>} The current page as a observable
     */
    MainService.prototype.getCurrentPage = function () {
        return this.currentPage.asObservable();
    };
    /**
     * Returns the current page as a number value.
     * @returns {number} The current page
     */
    MainService.prototype.getCurrentPageValue = function () {
        return this.currentPage.getValue();
    };
    /**
     * Modifies current search term and notifies every subscribed component.
     * @param {string} newTerm The new search term
     */
    MainService.prototype.setSearchTerm = function (newTerm) {
        this.searchTerm.next(newTerm);
    };
    /**
     * Returns the current search term as a subscribable observable.
     * @returns {Observable<string>} The current search term as a observable
     */
    MainService.prototype.getSearchTerm = function () {
        return this.searchTerm.asObservable();
    };
    /**
     * Sets the current selected item and notifies every subscribed component.
     * @param {Item} item The new selected item
     */
    MainService.prototype.setActiveItem = function (item) {
        this.activeItem.next(item);
    };
    /**
     * Returns the current search term as a subscribable observable.
     * @returns {Observable<Item>} The current search term as a observable
     */
    MainService.prototype.getActiveItem = function () {
        return this.activeItem.asObservable();
    };
    /**
     * Sets the current selected facets and notifies every subscribed component.
     * @param {Object} newFacets The facets currently selected
     */
    MainService.prototype.setActiveFacets = function (newFacets) {
        this.activeFacets.next(newFacets);
    };
    /**
     * Returns the current active facets as a subscribable observable.
     * @returns {Observable<Object>} The current active facets as a observable
     */
    MainService.prototype.getActiveFacets = function () {
        return this.activeFacets.asObservable();
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/utils/converters.ts":
/*!*********************************!*\
  !*** ./src/utils/converters.ts ***!
  \*********************************/
/*! exports provided: Converters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Converters", function() { return Converters; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _utils_htmlparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/htmlparser */ "./src/utils/htmlparser.js");
/* harmony import */ var _utils_htmlparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_htmlparser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/api */ "./src/app/api.ts");
/* harmony import */ var _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/core/mappers/router */ "./src/app/core/mappers/router.ts");







var Converters = /** @class */ (function () {
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
        Object(_utils_htmlparser__WEBPACK_IMPORTED_MODULE_3__["HTMLParser"])(html, {
            start: function (tag, uuid, attrs, unary) {
                // node for this element
                var node = {
                    node: 'element',
                    tag: tag,
                    uuid: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(uuid) ? angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID() : uuid,
                    attr: null
                };
                if (attrs.length !== 0) {
                    node.attr = attrs
                        // filter xe_* attributes except if its are required
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
        return (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(attr, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].requiredXeditAttributes) ||
            (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(attr.match('xe_')) && Converters.filterAttribute(attr, attrs))) ?
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
        attrs = Object(util__WEBPACK_IMPORTED_MODULE_4__["isArray"])(attrs) ? attrs : Object.keys(attrs);
        var xeditAttribute = attrs.reduce(function (acc, value) {
            var val = (typeof value === 'string') ? value : value.name;
            return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(val, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].requiredXeditAttributes) ? val : acc;
        }, null);
        var settings = !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xeditAttribute) && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(xeditAttribute, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].ATTRIBUTES) &&
            Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('filter_attributes', _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].ATTRIBUTES[xeditAttribute]) ?
            _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].ATTRIBUTES[xeditAttribute]['filter_attributes'] : [];
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(attr, settings);
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
                attr += _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].ATTR_HOVER + "=\"false\"";
            }
        }
        if (json.node === 'element') {
            var tag = json.tag;
            var uuid = resetIds ? angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID() : json.uuid;
            uuid = showIds ? " " + _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].TAG_UUID + " = \"" + uuid + "\"" : '';
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
        var linkType = (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(tag, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].LINK_TYPES)) ? _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].LINK_TYPES[tag] : 'href';
        if (processXedit && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(key, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].requiredXeditAttributes)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])(key, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].TAG_LINK)) {
                extraData = value;
                if (!(/^(f|ht)tps?:\/\//i).test(extraData)) {
                    extraData = _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_6__["default"].configUrl(_app_api__WEBPACK_IMPORTED_MODULE_5__["Api"].getResourceUrl(), { id: value });
                }
                extraData = linkType + "='" + extraData + "'";
            }
        }
        return key + "=\"" + value + "\" " + extraData;
    };
    return Converters;
}());



/***/ }),

/***/ "./src/utils/htmlparser.js":
/*!*********************************!*\
  !*** ./src/utils/htmlparser.js ***!
  \*********************************/
/*! no static exports found */
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
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/atovar/develop/web/xedit/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** supports-color (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***********************!*\
  !*** chalk (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map