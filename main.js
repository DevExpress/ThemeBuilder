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

/***/ "./src/app/advanced/advanced.component.css":
/*!*************************************************!*\
  !*** ./src/app/advanced/advanced.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".advanced {\r\n    position: absolute;\r\n    top: 60px;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    display: flex;\r\n}\r\n\r\n.advanced .preview {\r\n    width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/advanced/advanced.component.html":
/*!**************************************************!*\
  !*** ./src/app/advanced/advanced.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"advanced\">\r\n    <app-left-menu></app-left-menu>\r\n    <div class=\"preview\">\r\n        <app-iframe></app-iframe>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/advanced/advanced.component.ts":
/*!************************************************!*\
  !*** ./src/app/advanced/advanced.component.ts ***!
  \************************************************/
/*! exports provided: AdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedComponent", function() { return AdvancedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdvancedComponent = /** @class */ (function () {
    function AdvancedComponent() {
    }
    AdvancedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advanced',
            template: __webpack_require__(/*! ./advanced.component.html */ "./src/app/advanced/advanced.component.html"),
            styles: [__webpack_require__(/*! ./advanced.component.css */ "./src/app/advanced/advanced.component.css")]
        })
    ], AdvancedComponent);
    return AdvancedComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: routeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimation", function() { return routeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 2, 2 => 3, * => 3', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.container', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(20%)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.title-link:not(.master)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'font-size': '47px', color: '#404040', opacity: 0, transform: 'translateY(100%)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.section.left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(70%)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave .title-link', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'font-size': '30px', color: '#a7a8a9', transform: 'translateY(0px)', opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'font-size': '30px', color: '#a7a8a9', transform: 'translateY(-100%)', opacity: 0 })),
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .container', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(20%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .title-link:not(.master)', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, 'font-size': '47px', color: '#404040', transform: 'translateY(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, 'font-size': '30px', color: '#a7a8a9', transform: 'translateY(0px)' })),
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .section.left', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(70%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0px)' }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('3 => 2, 2 => 1', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.title', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-7%)', 'font-size': '30px', color: '#a7a8a9' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.container', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-7%)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.title-link', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-100%)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.section.left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0px)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.section.right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave .section.left', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(70%)' }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave .section.right', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .title-link', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' })),
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .title', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(-7%)', 'font-size': '30px', color: '#a7a8a9' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', 'font-size': '47px', color: '#404040' })),
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .container', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(0.9) translateY(-15%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' }))
            ], { optional: true })
        ])
    ])
]);


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
/* harmony import */ var _layouts_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/app-layout/app-layout.component */ "./src/app/layouts/app-layout/app-layout.component.ts");
/* harmony import */ var _layouts_preview_layout_preview_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/preview-layout/preview-layout.component */ "./src/app/layouts/preview-layout/preview-layout.component.ts");
/* harmony import */ var _layouts_advanced_layout_advanced_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/advanced-layout/advanced-layout.component */ "./src/app/layouts/advanced-layout/advanced-layout.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _import_import_bootstrap_import_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import/import-bootstrap/import-bootstrap.component */ "./src/app/import/import-bootstrap/import-bootstrap.component.ts");
/* harmony import */ var _import_import_meta_import_meta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import/import-meta/import-meta.component */ "./src/app/import/import-meta/import-meta.component.ts");
/* harmony import */ var _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./advanced/advanced.component */ "./src/app/advanced/advanced.component.ts");
/* harmony import */ var _preview_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preview/index.component */ "./src/app/preview/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _layouts_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_2__["AppLayoutComponent"],
        children: [
            { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], data: { routeId: 1 } },
            { path: 'master', component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], data: { routeId: 2 } },
            { path: 'import', component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], data: { routeId: 2 } },
            { path: 'import/bootstrap', component: _import_import_bootstrap_import_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["ImportBootstrapComponent"], data: { routeId: 3 } },
            { path: 'import/meta', component: _import_import_meta_import_meta_component__WEBPACK_IMPORTED_MODULE_8__["ImportMetaComponent"], data: { routeId: 3 } },
            { path: 'master/:theme/:color-scheme', component: _master_master_component__WEBPACK_IMPORTED_MODULE_6__["MasterComponent"], data: { routeId: 3 } }
        ]
    },
    {
        path: '',
        component: _layouts_advanced_layout_advanced_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdvancedLayoutComponent"],
        children: [
            { path: 'advanced', redirectTo: '/advanced/generic/light/base.common', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme', redirectTo: 'advanced/:theme/:color-scheme/base.common', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme/:widget', component: _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_9__["AdvancedComponent"] },
        ]
    },
    {
        path: '',
        component: _layouts_preview_layout_preview_layout_component__WEBPACK_IMPORTED_MODULE_3__["PreviewLayoutComponent"],
        children: [
            { path: 'preview/:theme', component: _preview_index_component__WEBPACK_IMPORTED_MODULE_10__["PreviewIndexComponent"] },
            { path: 'wizard/:theme', component: _preview_index_component__WEBPACK_IMPORTED_MODULE_10__["PreviewIndexComponent"] }
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/app-layout/app-layout.component */ "./src/app/layouts/app-layout/app-layout.component.ts");
/* harmony import */ var _layouts_preview_layout_preview_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/preview-layout/preview-layout.component */ "./src/app/layouts/preview-layout/preview-layout.component.ts");
/* harmony import */ var _layouts_advanced_layout_advanced_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/advanced-layout/advanced-layout.component */ "./src/app/layouts/advanced-layout/advanced-layout.component.ts");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/header/header.component */ "./src/app/layouts/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _import_import_bootstrap_import_bootstrap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./import/import-bootstrap/import-bootstrap.component */ "./src/app/import/import-bootstrap/import-bootstrap.component.ts");
/* harmony import */ var _icons_icon_themes_icon_themes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/icon-themes/icon-themes.component */ "./src/app/icons/icon-themes/icon-themes.component.ts");
/* harmony import */ var _icons_icon_generic_icon_generic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/icon-generic/icon-generic.component */ "./src/app/icons/icon-generic/icon-generic.component.ts");
/* harmony import */ var _icons_icon_material_icon_material_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/icon-material/icon-material.component */ "./src/app/icons/icon-material/icon-material.component.ts");
/* harmony import */ var _icons_icon_metadata_icon_metadata_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/icon-metadata/icon-metadata.component */ "./src/app/icons/icon-metadata/icon-metadata.component.ts");
/* harmony import */ var _icons_icon_export_icon_export_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/icon-export/icon-export.component */ "./src/app/icons/icon-export/icon-export.component.ts");
/* harmony import */ var _icons_icon_bootstrap_icon_bootstrap_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icons/icon-bootstrap/icon-bootstrap.component */ "./src/app/icons/icon-bootstrap/icon-bootstrap.component.ts");
/* harmony import */ var _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./advanced/advanced.component */ "./src/app/advanced/advanced.component.ts");
/* harmony import */ var _left_menu_main_left_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./left-menu/main/left-menu.component */ "./src/app/left-menu/main/left-menu.component.ts");
/* harmony import */ var _left_menu_editor_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./left-menu/editor/editor.component */ "./src/app/left-menu/editor/editor.component.ts");
/* harmony import */ var _left_menu_base_parameters_base_parameters_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./left-menu/base-parameters/base-parameters.component */ "./src/app/left-menu/base-parameters/base-parameters.component.ts");
/* harmony import */ var _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./iframe/iframe.component */ "./src/app/iframe/iframe.component.ts");
/* harmony import */ var _preview_index_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./preview/index.component */ "./src/app/preview/index.component.ts");
/* harmony import */ var _left_menu_search_opener_search_opener_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./left-menu/search-opener/search-opener.component */ "./src/app/left-menu/search-opener/search-opener.component.ts");
/* harmony import */ var _left_menu_back_navigator_back_navigator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./left-menu/back-navigator/back-navigator.component */ "./src/app/left-menu/back-navigator/back-navigator.component.ts");
/* harmony import */ var _icons_icon_theme_circle_icon_theme_circle_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./icons/icon-theme-circle/icon-theme-circle.component */ "./src/app/icons/icon-theme-circle/icon-theme-circle.component.ts");
/* harmony import */ var _builder_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./builder.service */ "./src/app/builder.service.ts");
/* harmony import */ var _meta_repository_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./meta-repository.service */ "./src/app/meta-repository.service.ts");
/* harmony import */ var _names_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./names.service */ "./src/app/names.service.ts");
/* harmony import */ var _import_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./import.service */ "./src/app/import.service.ts");
/* harmony import */ var _preview_preview_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./preview/preview.module */ "./src/app/preview/preview.module.ts");
/* harmony import */ var _layouts_header_header_button_header_button_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./layouts/header/header-button/header-button.component */ "./src/app/layouts/header/header-button/header-button.component.ts");
/* harmony import */ var _import_import_meta_import_meta_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./import/import-meta/import-meta.component */ "./src/app/import/import-meta/import-meta.component.ts");
/* harmony import */ var _layouts_header_import_popup_import_popup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./layouts/header/import-popup/import-popup.component */ "./src/app/layouts/header/import-popup/import-popup.component.ts");
/* harmony import */ var _layouts_header_export_popup_export_popup_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./layouts/header/export-popup/export-popup.component */ "./src/app/layouts/header/export-popup/export-popup.component.ts");
/* harmony import */ var _layouts_header_popup_popup_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./layouts/header/popup/popup.component */ "./src/app/layouts/header/popup/popup.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_11__["IndexComponent"],
                _master_master_component__WEBPACK_IMPORTED_MODULE_12__["MasterComponent"],
                _import_import_bootstrap_import_bootstrap_component__WEBPACK_IMPORTED_MODULE_13__["ImportBootstrapComponent"],
                _icons_icon_themes_icon_themes_component__WEBPACK_IMPORTED_MODULE_14__["IconThemesComponent"],
                _icons_icon_generic_icon_generic_component__WEBPACK_IMPORTED_MODULE_15__["IconGenericComponent"],
                _icons_icon_material_icon_material_component__WEBPACK_IMPORTED_MODULE_16__["IconMaterialComponent"],
                _icons_icon_metadata_icon_metadata_component__WEBPACK_IMPORTED_MODULE_17__["IconMetadataComponent"],
                _icons_icon_export_icon_export_component__WEBPACK_IMPORTED_MODULE_18__["IconExportComponent"],
                _icons_icon_bootstrap_icon_bootstrap_component__WEBPACK_IMPORTED_MODULE_19__["IconBootstrapComponent"],
                _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_20__["AdvancedComponent"],
                _left_menu_main_left_menu_component__WEBPACK_IMPORTED_MODULE_21__["LeftMenuComponent"],
                _left_menu_editor_editor_component__WEBPACK_IMPORTED_MODULE_22__["EditorComponent"],
                _left_menu_base_parameters_base_parameters_component__WEBPACK_IMPORTED_MODULE_23__["BaseParametersComponent"],
                _layouts_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_6__["AppLayoutComponent"],
                _layouts_preview_layout_preview_layout_component__WEBPACK_IMPORTED_MODULE_7__["PreviewLayoutComponent"],
                _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_24__["IframeComponent"],
                _preview_index_component__WEBPACK_IMPORTED_MODULE_25__["PreviewIndexComponent"],
                _layouts_advanced_layout_advanced_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedLayoutComponent"],
                _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _left_menu_search_opener_search_opener_component__WEBPACK_IMPORTED_MODULE_26__["SearchOpenerComponent"],
                _left_menu_back_navigator_back_navigator_component__WEBPACK_IMPORTED_MODULE_27__["BackNavigatorComponent"],
                _icons_icon_theme_circle_icon_theme_circle_component__WEBPACK_IMPORTED_MODULE_28__["IconThemeCircleComponent"],
                _layouts_header_header_button_header_button_component__WEBPACK_IMPORTED_MODULE_34__["HeaderButtonComponent"],
                _import_import_meta_import_meta_component__WEBPACK_IMPORTED_MODULE_35__["ImportMetaComponent"],
                _layouts_header_import_popup_import_popup_component__WEBPACK_IMPORTED_MODULE_36__["ImportPopupComponent"],
                _layouts_header_export_popup_export_popup_component__WEBPACK_IMPORTED_MODULE_37__["ExportPopupComponent"],
                _layouts_header_popup_popup_component__WEBPACK_IMPORTED_MODULE_38__["PopupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTabPanelModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFileUploaderModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTextBoxModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTextAreaModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxSelectBoxModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxNumberBoxModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxColorBoxModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxButtonModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxScrollViewModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxPopupModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxSwitchModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxRadioGroupModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxValidatorModule"],
                _preview_preview_module__WEBPACK_IMPORTED_MODULE_33__["PreviewModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [
                _builder_service__WEBPACK_IMPORTED_MODULE_29__["BuilderService"],
                _meta_repository_service__WEBPACK_IMPORTED_MODULE_30__["MetadataRepositoryService"],
                _names_service__WEBPACK_IMPORTED_MODULE_31__["NamesService"],
                _import_service__WEBPACK_IMPORTED_MODULE_32__["ImportService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/builder.service.ts":
/*!************************************!*\
  !*** ./src/app/builder.service.ts ***!
  \************************************/
/*! exports provided: BuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderService", function() { return BuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var less_lib_less_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! less/lib/less-browser */ "./node_modules/less/lib/less-browser/index.js");
/* harmony import */ var less_lib_less_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(less_lib_less_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_themebuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-themebuilder */ "./node_modules/devextreme-themebuilder/modules/builder.js");
/* harmony import */ var devextreme_themebuilder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_themebuilder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sass_js_dist_sass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sass.js/dist/sass.js */ "./node_modules/sass.js/dist/sass.js");
/* harmony import */ var sass_js_dist_sass_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sass_js_dist_sass_js__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuilderService = /** @class */ (function () {
    function BuilderService(http) {
        var _this = this;
        this.http = http;
        this.scssCompiler = {
            render: function (scss) {
                sass_js_dist_sass_js__WEBPACK_IMPORTED_MODULE_4__["setWorkerUrl"]('sass/sass.worker.js');
                var sass = new sass_js_dist_sass_js__WEBPACK_IMPORTED_MODULE_4__();
                return new Promise(function (resolve, reject) {
                    sass.compile(scss, function (result) {
                        if (result.status === 0) {
                            resolve(result.text);
                        }
                        else {
                            reject(result);
                        }
                    });
                });
            }
        };
        this.loadLess = function (fileName) {
            return _this.http.get(fileName, { responseType: 'text' })
                .toPromise();
        };
    }
    BuilderService.prototype.build = function (theme, config) {
        var baseConfig = {
            lessCompiler: less_lib_less_browser__WEBPACK_IMPORTED_MODULE_2__(window, {}),
            sassCompiler: this.scssCompiler,
            reader: this.loadLess,
            baseTheme: theme.name + '.' + theme.colorScheme.replace('-', '.')
        };
        var extendedConfig = __assign({}, baseConfig, config);
        return devextreme_themebuilder__WEBPACK_IMPORTED_MODULE_3__["buildTheme"](extendedConfig);
    };
    BuilderService.prototype.buildTheme = function (theme, makeSwatch, outColorScheme, modifiedData) {
        return this.build(theme, {
            makeSwatch: makeSwatch,
            outputColorScheme: outColorScheme,
            items: modifiedData
        });
    };
    BuilderService.prototype.buildThemeBootstrap = function (theme, bootstrapVariables, bootstrapVersion) {
        return this.build(theme, {
            data: bootstrapVariables,
            inputFile: bootstrapVersion === 4 ? '.scss' : '.less'
        });
    };
    BuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BuilderService);
    return BuilderService;
}());



/***/ }),

/***/ "./src/app/icons/icon-bootstrap/icon-bootstrap.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/icons/icon-bootstrap/icon-bootstrap.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st0 {\r\n    fill:#f15b42;\r\n}\r\n"

/***/ }),

/***/ "./src/app/icons/icon-bootstrap/icon-bootstrap.component.html":
/*!********************************************************************!*\
  !*** ./src/app/icons/icon-bootstrap/icon-bootstrap.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 100 100\">\r\n    <path class=\"st0\" d=\"M59.4,45.3c1.5-1.3,2.2-3.1,2.2-5.5c0-2.7-0.7-4.6-2-5.6C58.3,33.1,56.5,32,54,32H39v15h15\r\n        C56.2,47,57.9,46.6,59.4,45.3z M55,54H39v17h16c2.8,0,5.1-1.3,6.6-2.8c1.5-1.5,2.3-3.5,2.3-6.2c0-2.6-0.8-4.6-2.3-6.1\r\n        C60.1,54.5,57.8,54,55,54z M80,5H20C11.8,5,5,11.8,5,20v60c0,8.3,6.8,15,15,15h60c8.2,0,15-6.8,15-15V20C95,11.8,88.2,5,80,5z\r\n            M71.9,69c-0.7,1.8-1.9,3.4-3.4,4.7c-1.6,1.3-3.5,2.3-6,3.1C60.1,77.6,57.3,78,54,78H30l0-53h25.3c4.7,0,8.4,1.1,11.2,3.3\r\n        c2.8,2.2,4.2,5.5,4.2,9.9c0,2.7-0.6,5-1.9,6.9c-1.3,1.9-3.1,3.4-5.5,4.4v0.1c3.2,0.7,5.6,2.2,7.3,4.6c1.6,2.4,2.5,5.4,2.5,9\r\n        C73,65.3,72.6,67.2,71.9,69z\"/>\r\n</svg>"

/***/ }),

/***/ "./src/app/icons/icon-bootstrap/icon-bootstrap.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/icons/icon-bootstrap/icon-bootstrap.component.ts ***!
  \******************************************************************/
/*! exports provided: IconBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBootstrapComponent", function() { return IconBootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconBootstrapComponent = /** @class */ (function () {
    function IconBootstrapComponent() {
    }
    IconBootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-bootstrap',
            template: __webpack_require__(/*! ./icon-bootstrap.component.html */ "./src/app/icons/icon-bootstrap/icon-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./icon-bootstrap.component.css */ "./src/app/icons/icon-bootstrap/icon-bootstrap.component.css")]
        })
    ], IconBootstrapComponent);
    return IconBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/icons/icon-export/icon-export.component.css":
/*!*************************************************************!*\
  !*** ./src/app/icons/icon-export/icon-export.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st0 { \r\n    fill:#f05b41; \r\n}\r\n\r\n.st1 {\r\n    fill:#c5c5c5;\r\n}"

/***/ }),

/***/ "./src/app/icons/icon-export/icon-export.component.html":
/*!**************************************************************!*\
  !*** ./src/app/icons/icon-export/icon-export.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 100 100\">            \r\n    <path class=\"st0\" d=\"M31.3,68.1c-0.4,0.3-1,0.4-1.4,0.2c-0.5-0.2-0.8-0.7-0.8-1.2v-9.3c-8.6,0-14.5,0.7-21.6,13.6\r\n    C7.3,71.7,6.8,72,6.3,72c-0.1,0-0.2,0-0.3,0c-0.6-0.2-1-0.7-1-1.3v-1.1C5,60.4,4.9,41.6,29.1,40.7v-9.4c0-0.5,0.3-1,0.8-1.2\r\n    c0.5-0.2,1-0.2,1.4,0.2l21.2,17.8c0.3,0.3,0.5,0.6,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L31.3,68.1z\"/>\r\n    <path class=\"st1\" d=\"M91,10H19c-2.2,0-4,1.8-4,4v26.8c1-0.8,2.6-1.8,4-2.1V14h72v72H19V64.4c-1.4,0.3-2,0.6-4,2.2V86\r\n    c0,2.2,1.8,4,4,4h72c2.2,0,4-1.8,4-4V14C95,11.8,93.2,10,91,10z\"/>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/icons/icon-export/icon-export.component.ts":
/*!************************************************************!*\
  !*** ./src/app/icons/icon-export/icon-export.component.ts ***!
  \************************************************************/
/*! exports provided: IconExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconExportComponent", function() { return IconExportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconExportComponent = /** @class */ (function () {
    function IconExportComponent() {
    }
    IconExportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-export',
            template: __webpack_require__(/*! ./icon-export.component.html */ "./src/app/icons/icon-export/icon-export.component.html"),
            styles: [__webpack_require__(/*! ./icon-export.component.css */ "./src/app/icons/icon-export/icon-export.component.css")]
        })
    ], IconExportComponent);
    return IconExportComponent;
}());



/***/ }),

/***/ "./src/app/icons/icon-generic/icon-generic.component.css":
/*!***************************************************************!*\
  !*** ./src/app/icons/icon-generic/icon-generic.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st0 { \r\n    fill:#9c9c9c;\r\n}\r\n\r\n.st1 {\r\n    fill:#f05b41;\r\n}"

/***/ }),

/***/ "./src/app/icons/icon-generic/icon-generic.component.html":
/*!****************************************************************!*\
  !*** ./src/app/icons/icon-generic/icon-generic.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 100 100\">\r\n    <g>\r\n        <g>\r\n            <path class=\"st0\" d=\"M51.9,63.9h-6.2l-1.8-5.6h-9l-1.8,5.6h-6.2l9.2-25.2H43L51.9,63.9z M42.6,53.9l-2.7-8.5\r\n                c-0.2-0.6-0.3-1.4-0.4-2.3h-0.1c-0.1,0.7-0.2,1.5-0.4,2.2l-2.7,8.5H42.6z\"/>\r\n            <path class=\"st0\" d=\"M60.2,61.8L60.2,61.8l-0.1,2.1h-5.6V37.2h5.6v11.4h0.1c1.4-2.1,3.3-3.1,5.9-3.1c2.3,0,4.1,0.8,5.4,2.4\r\n                s1.9,3.8,1.9,6.5c0,3-0.7,5.4-2.2,7.2s-3.4,2.7-5.9,2.7C63,64.3,61.3,63.5,60.2,61.8z M60,54.2V56c0,1.2,0.3,2.1,1,2.9\r\n                s1.5,1.1,2.6,1.1c1.3,0,2.2-0.5,2.9-1.5s1-2.4,1-4.2c0-1.5-0.3-2.7-1-3.5s-1.5-1.3-2.7-1.3c-1.1,0-2,0.4-2.8,1.2S60,52.9,60,54.2z\r\n                \"/>\r\n        </g>\r\n    </g>\r\n    <path class=\"st1\" d=\"M86,14v72H14V14H86 M92,6H8C6.9,6,6,6.9,6,8v84c0,1.1,0.9,2,2,2h84c1.1,0,2-0.9,2-2V8C94,6.9,93.1,6,92,6L92,6z\r\n        \"/>\r\n</svg>"

/***/ }),

/***/ "./src/app/icons/icon-generic/icon-generic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/icons/icon-generic/icon-generic.component.ts ***!
  \**************************************************************/
/*! exports provided: IconGenericComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconGenericComponent", function() { return IconGenericComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconGenericComponent = /** @class */ (function () {
    function IconGenericComponent() {
    }
    IconGenericComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-generic',
            template: __webpack_require__(/*! ./icon-generic.component.html */ "./src/app/icons/icon-generic/icon-generic.component.html"),
            styles: [__webpack_require__(/*! ./icon-generic.component.css */ "./src/app/icons/icon-generic/icon-generic.component.css")]
        })
    ], IconGenericComponent);
    return IconGenericComponent;
}());



/***/ }),

/***/ "./src/app/icons/icon-material/icon-material.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/icons/icon-material/icon-material.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st0 {\r\n    fill:#f15b42;\r\n}\r\n\r\n.st1 { \r\n    opacity:0.5;\r\n    fill:#fff;\r\n}\r\n\r\n.st2 { \r\n    fill:#fff;\r\n}"

/***/ }),

/***/ "./src/app/icons/icon-material/icon-material.component.html":
/*!******************************************************************!*\
  !*** ./src/app/icons/icon-material/icon-material.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon-material\" viewBox=\"0 0 100 100\">\r\n    <circle class=\"st0\" cx=\"50\" cy=\"50\" r=\"47\"/>\r\n    <rect x=\"17\" y=\"17\" class=\"st1\" width=\"66\" height=\"66\"/>\r\n    <polygon class=\"st2\" points=\"83,17 17,17 50,83 \"/>\r\n</svg>"

/***/ }),

/***/ "./src/app/icons/icon-material/icon-material.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/icons/icon-material/icon-material.component.ts ***!
  \****************************************************************/
/*! exports provided: IconMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconMaterialComponent", function() { return IconMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconMaterialComponent = /** @class */ (function () {
    function IconMaterialComponent() {
    }
    IconMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-material',
            template: __webpack_require__(/*! ./icon-material.component.html */ "./src/app/icons/icon-material/icon-material.component.html"),
            styles: [__webpack_require__(/*! ./icon-material.component.css */ "./src/app/icons/icon-material/icon-material.component.css")]
        })
    ], IconMaterialComponent);
    return IconMaterialComponent;
}());



/***/ }),

/***/ "./src/app/icons/icon-metadata/icon-metadata.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/icons/icon-metadata/icon-metadata.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st0 {\r\n    fill:#f05b41;\r\n}\r\n\r\n.st1 {\r\n    fill:#9c9c9c;\r\n}\r\n"

/***/ }),

/***/ "./src/app/icons/icon-metadata/icon-metadata.component.html":
/*!******************************************************************!*\
  !*** ./src/app/icons/icon-metadata/icon-metadata.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 100 100\">\r\n    <path class=\"st0\" d=\"M86,14v72H14V14H86 M92,6H8C6.9,6,6,6.9,6,8v84c0,1.1,0.9,2,2,2h84c1.1,0,2-0.9,2-2V8C94,6.9,93.1,6,92,6L92,6z\r\n        \"/>\r\n    <g>\r\n        <path class=\"st1\" d=\"M22.3,54v-5l16-8.4v6.1l-11.3,4.9v0.1l11.3,4.9v6.1L22.3,54z\"/>\r\n        <path class=\"st1\" d=\"M47,67.9h-6l11.4-34.7h6L47,67.9z\"/>\r\n        <path class=\"st1\" d=\"M61.8,62.1V56l11.3-4.8v-0.1l-11.3-4.9v-6.1l16,8.5v5L61.8,62.1z\"/>\r\n    </g>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/icons/icon-metadata/icon-metadata.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/icons/icon-metadata/icon-metadata.component.ts ***!
  \****************************************************************/
/*! exports provided: IconMetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconMetadataComponent", function() { return IconMetadataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconMetadataComponent = /** @class */ (function () {
    function IconMetadataComponent() {
    }
    IconMetadataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-metadata',
            template: __webpack_require__(/*! ./icon-metadata.component.html */ "./src/app/icons/icon-metadata/icon-metadata.component.html"),
            styles: [__webpack_require__(/*! ./icon-metadata.component.css */ "./src/app/icons/icon-metadata/icon-metadata.component.css")]
        })
    ], IconMetadataComponent);
    return IconMetadataComponent;
}());



/***/ }),

/***/ "./src/app/icons/icon-theme-circle/icon-theme-circle.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/icons/icon-theme-circle/icon-theme-circle.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-circle {\r\n    width: 45px;\r\n    height: 45px;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    border-style: solid;\r\n    border-width: 10px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-right: 15px;\r\n}\r\n\r\n.color-circle.small {\r\n    height: 20px;\r\n    width: 20px;\r\n    border-width: 4px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 3px;\r\n    margin-right: 0;\r\n}\r\n\r\n.color-circle.light {\r\n    border-color: #fff; \r\n    background-color: #337ab7;  \r\n}\r\n\r\n.color-circle.dark {\r\n    border-color: #363640;\r\n    background-color: #1ca8dd;\r\n}\r\n\r\n.color-circle.blue {\r\n    background-color: #03a9f4;\r\n}\r\n\r\n.color-circle.orange {\r\n    background-color: #ff5722;\r\n}\r\n\r\n.color-circle.lime {\r\n    background-color: #cddc39;\r\n}\r\n\r\n.color-circle.purple {\r\n    background-color: #9c27b0 ;\r\n}\r\n\r\n.color-circle.teal {\r\n    background-color: #009688;\r\n}\r\n\r\n.color-circle.soft {\r\n    background-color: #7ab8eb;\r\n    border-color: #fff;\r\n}\r\n\r\n.color-circle.carmine {\r\n    background-color: #f05b41;\r\n    border-color: #fff;\r\n}\r\n\r\n.color-circle.dark.moon {\r\n    background-color: #3debd3;\r\n    border-color: #465672;\r\n}\r\n\r\n.color-circle.dark.violet {\r\n    background-color: #9c63ff;\r\n    border-color: #17171f;\r\n}\r\n\r\n.color-circle.green {\r\n    background-color: #3cbab2;\r\n    border-color: #f5f5f5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/icons/icon-theme-circle/icon-theme-circle.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/icons/icon-theme-circle/icon-theme-circle.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"color-circle\" [ngClass]=\"[theme, smallClass]\"></span>\r\n"

/***/ }),

/***/ "./src/app/icons/icon-theme-circle/icon-theme-circle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/icons/icon-theme-circle/icon-theme-circle.component.ts ***!
  \************************************************************************/
/*! exports provided: IconThemeCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconThemeCircleComponent", function() { return IconThemeCircleComponent; });
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

var IconThemeCircleComponent = /** @class */ (function () {
    function IconThemeCircleComponent() {
    }
    IconThemeCircleComponent.prototype.ngOnInit = function () {
        this.smallClass = this.small ? 'small' : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IconThemeCircleComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], IconThemeCircleComponent.prototype, "small", void 0);
    IconThemeCircleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-theme-circle',
            template: __webpack_require__(/*! ./icon-theme-circle.component.html */ "./src/app/icons/icon-theme-circle/icon-theme-circle.component.html"),
            styles: [__webpack_require__(/*! ./icon-theme-circle.component.css */ "./src/app/icons/icon-theme-circle/icon-theme-circle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconThemeCircleComponent);
    return IconThemeCircleComponent;
}());



/***/ }),

/***/ "./src/app/icons/icon-themes/icon-themes.component.css":
/*!*************************************************************!*\
  !*** ./src/app/icons/icon-themes/icon-themes.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st0 {\r\n    fill:#c5c5c5;\r\n}\r\n\r\n.st1 {\r\n    fill:#f05b41;\r\n}\r\n"

/***/ }),

/***/ "./src/app/icons/icon-themes/icon-themes.component.html":
/*!**************************************************************!*\
  !*** ./src/app/icons/icon-themes/icon-themes.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 100 100\">\r\n    <path class=\"st0\" d=\"M65,20.5l-15.6-9c-0.6-0.4-1.3-0.5-2-0.5c-1.4,0-2.7,0.7-3.5,2l-8,13.8v6l10.6-18.3c0.2-0.3,0.5-0.5,0.9-0.5\r\n        c0.2,0,0.3,0,0.5,0.1l15.6,9c0.5,0.3,0.6,0.9,0.4,1.4L36,72.8v6l30.5-52.8C67.6,24,67,21.6,65,20.5z\"/>\r\n    <path class=\"st0\" d=\"M91,51l-9-15.6c-0.7-1.3-2.1-2-3.5-2c-0.7,0-1.4,0.2-2,0.5l-15,8.6l-3,5.2l19.5-11.2c0.2-0.1,0.3-0.1,0.5-0.1\r\n        c0.4,0,0.7,0.2,0.9,0.5l9,15.6c0.2,0.3,0.1,0.6,0.1,0.8s-0.2,0.4-0.5,0.6L38.6,82.5L36,87v0.4l53.6-30.9C91.5,55.4,92.1,53,91,51z\"\r\n        />\r\n    <path class=\"st0\" d=\"M92,69H75.7l-5.2,3H92c0.6,0,1,0.4,1,1v18c0,0.6-0.4,1-1,1H41l-5,3h56c2.2,0,4-1.8,4-4V73\r\n        C96,70.8,94.2,69,92,69z\"/>\r\n    <path class=\"st1\" d=\"M28,5H10C7.8,5,6,6.8,6,9v81c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V9C32,6.8,30.2,5,28,5z M19,87\r\n        c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S20.7,87,19,87z\"/>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/icons/icon-themes/icon-themes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/icons/icon-themes/icon-themes.component.ts ***!
  \************************************************************/
/*! exports provided: IconThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconThemesComponent", function() { return IconThemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconThemesComponent = /** @class */ (function () {
    function IconThemesComponent() {
    }
    IconThemesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-themes',
            template: __webpack_require__(/*! ./icon-themes.component.html */ "./src/app/icons/icon-themes/icon-themes.component.html"),
            styles: [__webpack_require__(/*! ./icon-themes.component.css */ "./src/app/icons/icon-themes/icon-themes.component.css")]
        })
    ], IconThemesComponent);
    return IconThemesComponent;
}());



/***/ }),

/***/ "./src/app/iframe/iframe.component.css":
/*!*********************************************!*\
  !*** ./src/app/iframe/iframe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 0;\r\n}\r\n\r\n:host {\r\n    display: block;\r\n    height: 99%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/iframe/iframe.component.html":
/*!**********************************************!*\
  !*** ./src/app/iframe/iframe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe #iframe [src]=\"iframeUrl\" (load)=\"onIframeLoad()\"></iframe>\r\n"

/***/ }),

/***/ "./src/app/iframe/iframe.component.ts":
/*!********************************************!*\
  !*** ./src/app/iframe/iframe.component.ts ***!
  \********************************************/
/*! exports provided: IframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeComponent", function() { return IframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meta_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meta-repository.service */ "./src/app/meta-repository.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IframeComponent = /** @class */ (function () {
    function IframeComponent(route, sanitizer, metadataService) {
        var _this = this;
        this.route = route;
        this.sanitizer = sanitizer;
        this.metadataService = metadataService;
        this.widgetName = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.route.params.subscribe(function (params) {
            _this.widgetName.next(params['widget']);
            if (_this.theme !== params['theme']) {
                _this.theme = params['theme'];
                _this.url = window.location.origin + '/' + (params['widget'] ? 'preview' : 'wizard') + '/' + _this.theme;
                _this.iframeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.url);
            }
        });
    }
    IframeComponent.prototype.onIframeLoad = function () {
        var _this = this;
        if (this.cssSubscription)
            this.cssSubscription.unsubscribe();
        this.cssSubscription = this.metadataService.css.subscribe(function (css) {
            var theme = _this.metadataService.theme;
            var themeSize = theme.name === 'generic' ? (theme.colorScheme.split('-')[1] || 'normal') : '';
            _this.iframe.nativeElement.contentWindow.postMessage({ css: css, themeSize: themeSize }, _this.url);
        });
        if (this.widgetSubscription)
            this.widgetSubscription.unsubscribe();
        this.widgetSubscription = this.widgetName.subscribe(function (widget) {
            _this.iframe.nativeElement.contentWindow.postMessage({ widget: widget }, _this.url);
        });
    };
    IframeComponent.prototype.ngOnDestroy = function () {
        if (this.cssSubscription)
            this.cssSubscription.unsubscribe();
        if (this.widgetSubscription)
            this.widgetSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], IframeComponent.prototype, "iframe", void 0);
    IframeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iframe',
            template: __webpack_require__(/*! ./iframe.component.html */ "./src/app/iframe/iframe.component.html"),
            styles: [__webpack_require__(/*! ./iframe.component.css */ "./src/app/iframe/iframe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _meta_repository_service__WEBPACK_IMPORTED_MODULE_3__["MetadataRepositoryService"]])
    ], IframeComponent);
    return IframeComponent;
}());



/***/ }),

/***/ "./src/app/import.service.ts":
/*!***********************************!*\
  !*** ./src/app/import.service.ts ***!
  \***********************************/
/*! exports provided: ImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportService", function() { return ImportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meta_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta-repository.service */ "./src/app/meta-repository.service.ts");
/* harmony import */ var devextreme_themebuilder_modules_config_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-themebuilder/modules/config-normalizer */ "./node_modules/devextreme-themebuilder/modules/config-normalizer.js");
/* harmony import */ var devextreme_themebuilder_modules_config_normalizer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_themebuilder_modules_config_normalizer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportService = /** @class */ (function () {
    function ImportService(metaRepository, route) {
        this.metaRepository = metaRepository;
        this.route = route;
        this.savedMetadata = {};
        this.normalizedMetadata = {};
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ImportService.prototype.importBootstrapVariables = function (variables, bootstrapVersion, redirectView) {
        var _this = this;
        this.clearSavedMetadata();
        return this.metaRepository.importBootstrap(variables, bootstrapVersion).then(function () {
            _this.route.navigate([redirectView, _this.metaRepository.theme.name, _this.metaRepository.theme.colorScheme]);
        });
    };
    ImportService.prototype.importMetadata = function (meta, redirectView) {
        var _this = this;
        this.clearSavedMetadata();
        try {
            this.savedMetadata = JSON.parse(meta);
        }
        catch (_a) {
            return new Promise(function (_, reject) { reject(); });
        }
        this.normalizedMetadata = __assign({}, this.savedMetadata);
        devextreme_themebuilder_modules_config_normalizer__WEBPACK_IMPORTED_MODULE_2__(this.normalizedMetadata);
        return this.metaRepository.import({
            name: this.normalizedMetadata.themeName,
            colorScheme: this.normalizedMetadata.colorScheme
        }, this.savedMetadata.items).then(function () {
            _this.route.navigate([redirectView, _this.normalizedMetadata.themeName, _this.normalizedMetadata.colorScheme]);
            _this.changed.emit();
        });
    };
    ImportService.prototype.exportMetadata = function (customSchemeName, useSwatch) {
        var exportedObject = __assign({}, this.savedMetadata, { items: this.metaRepository.getModifiedItems(), baseTheme: [this.metaRepository.theme.name, this.metaRepository.theme.colorScheme.replace('-', '.')].join('.'), outputColorScheme: customSchemeName, makeSwatch: useSwatch });
        return JSON.stringify(exportedObject, null, 4);
    };
    ImportService.prototype.exportCss = function (customSchemeName, useSwatch) {
        var schemeName = customSchemeName || this.getColorSchemeName();
        var swatch = useSwatch || this.normalizedMetadata.makeSwatch;
        return this.metaRepository.export(schemeName, swatch);
    };
    ImportService.prototype.getSavedMetadata = function () {
        return this.savedMetadata;
    };
    ImportService.prototype.getColorSchemeName = function () {
        return this.normalizedMetadata.outColorScheme || 'custom-scheme';
    };
    ImportService.prototype.getThemeName = function () {
        return this.metaRepository.theme.name;
    };
    ImportService.prototype.clearSavedMetadata = function () {
        this.savedMetadata = {};
        this.normalizedMetadata = {};
        this.changed.emit();
    };
    ImportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_meta_repository_service__WEBPACK_IMPORTED_MODULE_1__["MetadataRepositoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ImportService);
    return ImportService;
}());



/***/ }),

/***/ "./src/app/import/import-bootstrap/import-bootstrap.component.css":
/*!************************************************************************!*\
  !*** ./src/app/import/import-bootstrap/import-bootstrap.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs {\r\n    margin: 40px auto 0;\r\n    height: 50px;\r\n    border-color: #d4d8da;\r\n    border-bottom-color: transparent;\r\n}\r\n\r\n.file-uploader { \r\n    margin: 20px auto 0;\r\n}\r\n\r\n.text {\r\n    margin: 45px auto;\r\n}\r\n\r\n.apply {\r\n    width: 270px;\r\n}\r\n\r\n:host ::ng-deep .tabs.dx-tabpanel .dx-tab {\r\n    width: 280px;\r\n    height: 50px;\r\n}\r\n\r\n:host ::ng-deep .tabs.dx-tabpanel.dx-state-focused .dx-tab-selected:after {\r\n    border-color: #d4d8da;\r\n    border-width: 2px;\r\n    border-bottom: 0;\r\n}\r\n\r\n:host ::ng-deep .tabs .dx-tab-selected {\r\n    background-color: #f0f2f3;\r\n    color: #f05b41;\r\n}\r\n\r\n:host ::ng-deep .tabs.dx-tabpanel .dx-tab-selected:before {\r\n    border-bottom: 0;\r\n}\r\n\r\n:host ::ng-deep .tabs .dx-tab.dx-state-focused:after {\r\n    border-color: transparent;\r\n}\r\n\r\n:host ::ng-deep .tabs .dx-tab-selected:after {\r\n    border-color: #d4d8da;\r\n    border-width: 2px;\r\n    border-top-style: solid;\r\n    height: 51px;\r\n}\r\n\r\n:host ::ng-deep .tabs .dx-tab.dx-item:not(.dx-tab-selected) {\r\n    background-color: #d4d8da;\r\n}\r\n\r\n:host ::ng-deep .tabs.dx-tabpanel .dx-multiview-wrapper,\r\n:host ::ng-deep .tabs.dx-tabpanel.dx-state-focused .dx-multiview-wrapper {\r\n    border: none;\r\n}\r\n\r\n:host ::ng-deep .file-uploader .dx-fileuploader-input-wrapper .dx-button {\r\n    float: none;\r\n    width: 260px;\r\n    height: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/import/import-bootstrap/import-bootstrap.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/import/import-bootstrap/import-bootstrap.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"title-link\" [routerLink]=\"['/import']\">Import a Theme</div>\r\n    <div class=\"container\">\r\n        <div class=\"title\">\r\n            Bootstrap Variables\r\n        </div>\r\n        <div class=\"text\">\r\n            Upload a Bootstrap theme file to apply its colors to a base DevExtreme theme.  \r\n            Choose the \"variables.less\" file for Bootstrap 3 and the \"_variables.scss\" file for Bootstrap 4.\r\n        </div>\r\n        <dx-tab-panel class=\"tabs\" [width]=\"560\" [height]=\"200\" [dataSource]=\"tabPanelData\" [(selectedIndex)]=\"selectedIndex\" [loop]=\"false\">\r\n            <div *dxTemplate=\"let data of 'title'\">\r\n                <span>{{data.name}}</span>\r\n            </div>\r\n            <div *dxTemplate=\"let data of 'item'\">\r\n                <div class=\"tabpanel-item\">\r\n                    <dx-file-uploader\r\n                        width=\"260\"\r\n                        [multiple]=\"false\"\r\n                        accept=\"{{data.acceptFormat}}\"\r\n                        labelText=\"or Drop the file here\"\r\n                        uploadMode=\"useForm\"\r\n                        selectButtonText=\"{{data.uploadButtonText}}\"\r\n                        (onValueChanged)=\"uploaded($event)\"\r\n                        class=\"file-uploader\">\r\n                    </dx-file-uploader>\r\n                </div>\r\n            </div>\r\n        </dx-tab-panel>\r\n        <!-- <div class=\"button apply\">Apply</div> -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/import/import-bootstrap/import-bootstrap.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/import/import-bootstrap/import-bootstrap.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImportBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportBootstrapComponent", function() { return ImportBootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _import_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../import.service */ "./src/app/import.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImportBootstrapComponent = /** @class */ (function () {
    function ImportBootstrapComponent(importService) {
        this.importService = importService;
        this.tabPanelData = [{
                name: 'Bootstrap 4',
                version: 4,
                acceptFormat: '.scss',
                uploadButtonText: 'Upload SCSS Variables'
            }, {
                name: 'Bootstrap 3',
                version: 3,
                acceptFormat: '.less',
                uploadButtonText: 'Upload LESS Variables'
            }];
        this.selectedIndex = 0;
    }
    ImportBootstrapComponent.prototype.uploaded = function (e) {
        var _this = this;
        var file = e.value[0];
        if (file) {
            var fileReader_1;
            fileReader_1 = new FileReader();
            fileReader_1.onload = function () {
                _this.importService.importBootstrapVariables(fileReader_1.result, _this.tabPanelData[_this.selectedIndex].version, 'advanced');
            };
            fileReader_1.readAsText(file);
        }
    };
    ImportBootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./import-bootstrap.component.html */ "./src/app/import/import-bootstrap/import-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./import-bootstrap.component.css */ "./src/app/import/import-bootstrap/import-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [_import_service__WEBPACK_IMPORTED_MODULE_1__["ImportService"]])
    ], ImportBootstrapComponent);
    return ImportBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/import/import-meta/import-meta.component.css":
/*!**************************************************************!*\
  !*** ./src/app/import/import-meta/import-meta.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\r\n    margin: 45px auto;\r\n}\r\n\r\ndx-text-area {\r\n    display: block;\r\n    margin: 0 auto 30px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/import/import-meta/import-meta.component.html":
/*!***************************************************************!*\
  !*** ./src/app/import/import-meta/import-meta.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"title-link\" [routerLink]=\"['/import']\">Import a Theme</div>\r\n    <div class=\"container\">\r\n        <div class=\"title\">\r\n            DevExtreme Metadata\r\n        </div>\r\n        <div class=\"text\">\r\n            Copy and paste previously exported metadata below.\r\n        </div>\r\n        <dx-text-area [width]=\"560\" [height]=\"200\" #textArea></dx-text-area>\r\n        <div class=\"button apply\" (click)=\"applyClick(textArea)\">Import</div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/import/import-meta/import-meta.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/import/import-meta/import-meta.component.ts ***!
  \*************************************************************/
/*! exports provided: ImportMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportMetaComponent", function() { return ImportMetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _import_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../import.service */ "./src/app/import.service.ts");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/dialog */ "./node_modules/devextreme/ui/dialog.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportMetaComponent = /** @class */ (function () {
    function ImportMetaComponent(importService) {
        this.importService = importService;
    }
    ImportMetaComponent.prototype.applyClick = function (t) {
        this.importService.importMetadata(t.value, 'advanced').then(null, function () {
            Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__["alert"])('It is unable to import this metadata.', 'ThemeBuilder');
        });
    };
    ImportMetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-meta',
            template: __webpack_require__(/*! ./import-meta.component.html */ "./src/app/import/import-meta/import-meta.component.html"),
            styles: [__webpack_require__(/*! ./import-meta.component.css */ "./src/app/import/import-meta/import-meta.component.css")]
        }),
        __metadata("design:paramtypes", [_import_service__WEBPACK_IMPORTED_MODULE_1__["ImportService"]])
    ], ImportMetaComponent);
    return ImportMetaComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blocks {\r\n    width: 780px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.blocks .block {\r\n    background-color: #fff;\r\n    width: 380px;\r\n    height: 260px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n\r\n.blocks .block .block-image {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: inline-block;\r\n}\r\n\r\n.blocks .block:hover {\r\n    background-color: #f05b41;\r\n    color: #fff;\r\n}\r\n\r\n.blocks .block:focus {\r\n    background-color: #d0442c;\r\n}\r\n\r\n.blocks .block:first-child {\r\n    margin-right: 15px;\r\n}\r\n\r\n.blocks .block .block-title {\r\n    margin: 40px 0 30px;\r\n    font-size: 30px;\r\n}\r\n\r\n:host ::ng-deep .blocks .block:hover .block-image .st0,\r\n:host ::ng-deep .blocks .block:hover .block-image .st1  {\r\n    fill: #fff;\r\n}\r\n\r\n:host ::ng-deep .blocks .block:hover .block-image .icon-material .st1,\r\n:host ::ng-deep .blocks .block:hover .block-image .icon-material .st2  {\r\n    fill:#f05b41;\r\n}\r\n\r\n.text { \r\n    margin: 45px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"title-link\" *ngIf=\"url !== ''\" [routerLink]=\"['/']\">Theme Builder</div>\r\n    <ng-container [ngSwitch]=\"url\">\r\n        <ng-container *ngSwitchCase=\"''\" >\r\n            <div class=\"container\">\r\n                <div class=\"title index\">Theme Builder</div>\r\n                <div class=\"text\">\r\n                    The DevExpress Theme Builder allows you to modify themes shipped inside DevExtreme or create custom themes.\r\n                </div>\r\n                <div class=\"blocks\">\r\n                    <div class=\"block\" [routerLink]=\"['/master']\">\r\n                        <div class=\"block-title\">Choose a Base Theme</div>\r\n                        <div class=\"block-image\">\r\n                            <app-icon-themes></app-icon-themes>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"block\" [routerLink]=\"['/import']\">\r\n                        <div class=\"block-title\">Import a Theme</div>\r\n                        <div class=\"block-image\">\r\n                            <app-icon-metadata></app-icon-metadata>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container  *ngSwitchCase=\"'import'\">\r\n            <div class=\"container\">\r\n                <div class=\"title\">Import a Theme</div>\r\n                <div class=\"text\">\r\n                    You can customize your DevExtreme or Bootstrap theme as needed. To get started, import a .json file with DevExtreme metadata or Bootstrap variables file.\r\n                </div>\r\n                <div class=\"blocks\">\r\n                    <div class=\"block\" [routerLink]=\"['/import', 'meta']\">\r\n                        <div class=\"block-title\">DevExtreme Metadata</div>\r\n                        <div class=\"block-image\">\r\n                            <app-icon-export></app-icon-export>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"block\" [routerLink]=\"['/import', 'bootstrap']\">\r\n                        <div class=\"block-title\">Bootstrap Variables</div>\r\n                        <div class=\"block-image\">\r\n                            <app-icon-bootstrap></app-icon-bootstrap>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'master'\" >\r\n                <div class=\"container\">\r\n                <div class=\"title\">Choose a Base Theme</div>\r\n                <div class=\"text\">DevExtreme provides both a Generic and Material theme. Both are available in various color schemes.</div>\r\n                <div class=\"blocks\">\r\n                    <div class=\"block\" [routerLink]=\"['/master/generic/light']\">\r\n                        <div class=\"block-title\">Generic</div>\r\n                        <div class=\"block-image\">\r\n                            <app-icon-generic></app-icon-generic>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"block\" [routerLink]=\"['/master/material/blue-light']\">\r\n                        <div class=\"block-title\">Material</div>\r\n                        <div class=\"block-image\">\r\n                            <app-icon-material></app-icon-material> \r\n                        </div> \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(route) {
        var _this = this;
        this.route = route;
        this.route.url.subscribe(function (u) {
            _this.url = u[0] ? u[0].path : '';
        });
    }
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/layouts/advanced-layout/advanced-layout.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/layouts/advanced-layout/advanced-layout.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/advanced-layout/advanced-layout.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layouts/advanced-layout/advanced-layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [switchEnabled]=\"true\"></app-header>\r\n<main>\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/layouts/advanced-layout/advanced-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/advanced-layout/advanced-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdvancedLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedLayoutComponent", function() { return AdvancedLayoutComponent; });
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

var AdvancedLayoutComponent = /** @class */ (function () {
    function AdvancedLayoutComponent() {
    }
    AdvancedLayoutComponent.prototype.ngOnInit = function () {
    };
    AdvancedLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advanced-layout',
            template: __webpack_require__(/*! ./advanced-layout.component.html */ "./src/app/layouts/advanced-layout/advanced-layout.component.html"),
            styles: [__webpack_require__(/*! ./advanced-layout.component.css */ "./src/app/layouts/advanced-layout/advanced-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvancedLayoutComponent);
    return AdvancedLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/app-layout/app-layout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/layouts/app-layout/app-layout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .content {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    color: #404040;\r\n}\r\n\r\n:host ::ng-deep .title {\r\n    font-weight: 100;\r\n    font-size: 47px;\r\n    margin: 0 auto;\r\n    border-top: 1px solid #dadada;\r\n    display: inline-block;\r\n}\r\n\r\n:host ::ng-deep .title.index {\r\n    border-top: none;\r\n}\r\n\r\n:host ::ng-deep .title-link {\r\n    cursor: pointer;\r\n    font-weight: 100;\r\n    margin: 0 auto;\r\n    color: #a7a8a9;\r\n    font-size: 30px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n:host ::ng-deep .title span {\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    display: block;\r\n    margin-top: -5px;\r\n}\r\n\r\n:host ::ng-deep .title-link:hover {\r\n    color: #f05b41;\r\n}\r\n\r\n:host ::ng-deep .text { \r\n    font-size: 16px;\r\n    color: #505050;\r\n    width: 520px;\r\n}\r\n\r\n:host ::ng-deep .button {\r\n    width: 240px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    margin: 0 auto;\r\n}\r\n\r\n:host ::ng-deep .button.apply {\r\n    background-color: #f05b41;\r\n    color: #fff;\r\n}\r\n\r\n:host ::ng-deep .button.apply:focus,\r\n:host ::ng-deep .button.apply:active {\r\n    background-color: #e2e4e5;\r\n    color: #f05b41;\r\n}\r\n\r\n:host ::ng-deep .button.apply:hover,\r\n:host ::ng-deep .button.advanced:hover {\r\n    background-color: #707070;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/layouts/app-layout/app-layout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/app-layout/app-layout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [switchEnabled]=\"false\"></app-header>\r\n<main [@routeAnimation]=\"getRouteAnimation()\" (@routeAnimation.done)=\"routeAnimationDone()\">\r\n    <router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/layouts/app-layout/app-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/app-layout/app-layout.component.ts ***!
  \************************************************************/
/*! exports provided: AppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return AppLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../animations */ "./src/app/animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent(router) {
        var _this = this;
        this.router = router;
        this.animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivationEnd"]) {
                var snapshot = event.snapshot;
                if (snapshot.data.routeId) {
                    _this.animationValue = snapshot.data.routeId;
                }
            }
        });
    }
    AppLayoutComponent.prototype.getRouteAnimation = function () {
        return this.animationValue;
    };
    AppLayoutComponent.prototype.routeAnimationDone = function () {
        this.animationDone.next(true);
    };
    AppLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-layout',
            template: __webpack_require__(/*! ./app-layout.component.html */ "./src/app/layouts/app-layout/app-layout.component.html"),
            styles: [__webpack_require__(/*! ./app-layout.component.css */ "./src/app/layouts/app-layout/app-layout.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["routeAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/header/export-popup/export-popup.component.css":
/*!************************************************************************!*\
  !*** ./src/app/layouts/header/export-popup/export-popup.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor-item {\r\n    height: 34px;\r\n    display: flex;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.editor-item.first {\r\n    margin-top: 20px;\r\n}\r\n\r\n.editor-item.hidden {\r\n    display: none;\r\n}\r\n\r\n.editor-item label {\r\n    width: 200px;\r\n}\r\n\r\n.editor-item > * {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 40px;\r\n}\r\n\r\n.buttons > .button.apply {\r\n    margin: 0;\r\n    width: 270px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layouts/header/export-popup/export-popup.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layouts/header/export-popup/export-popup.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-popup\r\n    title=\"Export a Theme\"\r\n    #popup\r\n>\r\n\r\n    <div class=\"editor-item first\">\r\n        <label>Custom color scheme name</label>\r\n        <dx-text-box [(value)]=\"schemeName\" [width]=\"360\" valueChangeEvent=\"keyup\">\r\n            <dx-validator>\r\n                <dxi-validation-rule type=\"pattern\" pattern=\"^[\\w-_\\.]*$\" message=\"Only alphabetic and numeric characters, underscores, dots, and hyphens are allowed.\"></dxi-validation-rule>\r\n            </dx-validator>\r\n        </dx-text-box>\r\n    </div>\r\n    <div class=\"editor-item\">\r\n        <label>Swatch mode</label>\r\n        <dx-switch [(value)]=\"makeSwatch\" text=\"Make swatch\"></dx-switch>\r\n    </div>\r\n    <div class=\"editor-item\" [ngClass]=\"{ hidden: !showOutputFile }\">\r\n        <label>Output file path</label>\r\n        <dx-text-box [value]=\"outputFile\" [readOnly]=\"true\" [width]=\"360\"></dx-text-box>\r\n    </div>\r\n\r\n    <div class=\"buttons\">\r\n        <div class=\"button apply\" text=\"Export CSS\" (click)=\"exportCss()\">Export CSS</div>\r\n        <div class=\"button apply\" text=\"Export Metadata\" (click)=\"exportMeta()\"> Export Metadata</div>\r\n    </div>\r\n</app-popup>\r\n"

/***/ }),

/***/ "./src/app/layouts/header/export-popup/export-popup.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layouts/header/export-popup/export-popup.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExportPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPopupComponent", function() { return ExportPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _import_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../import.service */ "./src/app/import.service.ts");
/* harmony import */ var devextreme_client_exporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/client_exporter */ "./node_modules/devextreme/client_exporter.js");
/* harmony import */ var devextreme_client_exporter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_client_exporter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/popup.component */ "./src/app/layouts/header/popup/popup.component.ts");
/* harmony import */ var devextreme_ui_validation_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/ui/validation_engine */ "./node_modules/devextreme/ui/validation_engine.js");
/* harmony import */ var devextreme_ui_validation_engine__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_validation_engine__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExportPopupComponent = /** @class */ (function () {
    function ExportPopupComponent(importService) {
        this.importService = importService;
        this.makeSwatch = false;
    }
    ExportPopupComponent.prototype.getFileNameWithoutExt = function () {
        return this.outputFile &&
            this.outputFile.replace(/^.*[\\\/]/, '').replace(/\.(css|json|less|scss)/, '') ||
            "dx." + this.importService.getThemeName() + "." + this.schemeName;
    };
    ExportPopupComponent.prototype.validate = function () {
        return devextreme_ui_validation_engine__WEBPACK_IMPORTED_MODULE_4___default.a.validateGroup();
    };
    ExportPopupComponent.prototype.setParameters = function () {
        var savedMeta = this.importService.getSavedMetadata();
        this.schemeName = this.importService.getColorSchemeName();
        this.outputFile = savedMeta.outputFile;
        this.makeSwatch = !!savedMeta.makeSwatch;
        this.showOutputFile = this.outputFile && this.outputFile.length > 0;
    };
    ExportPopupComponent.prototype.exportCss = function () {
        var _this = this;
        if (!this.validate().isValid)
            return;
        this.importService.exportCss(this.schemeName, this.makeSwatch).then(function (css) {
            devextreme_client_exporter__WEBPACK_IMPORTED_MODULE_2__["fileSaver"].saveAs(_this.getFileNameWithoutExt(), 'CSS', new Blob([css]));
            _this.popup.hide();
        });
    };
    ExportPopupComponent.prototype.exportMeta = function () {
        if (!this.validate().isValid)
            return;
        var metaString = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
        devextreme_client_exporter__WEBPACK_IMPORTED_MODULE_2__["fileSaver"]._saveBlobAs(this.getFileNameWithoutExt() + '.json', 'JSON', new Blob([metaString]));
        this.popup.hide();
    };
    ExportPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setParameters();
        this.importService.changed.subscribe(function () { return _this.setParameters(); });
    };
    ExportPopupComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popup'),
        __metadata("design:type", _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"])
    ], ExportPopupComponent.prototype, "popup", void 0);
    ExportPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-popup',
            template: __webpack_require__(/*! ./export-popup.component.html */ "./src/app/layouts/header/export-popup/export-popup.component.html"),
            styles: [__webpack_require__(/*! ./export-popup.component.css */ "./src/app/layouts/header/export-popup/export-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_import_service__WEBPACK_IMPORTED_MODULE_1__["ImportService"]])
    ], ExportPopupComponent);
    return ExportPopupComponent;
}());



/***/ }),

/***/ "./src/app/layouts/header/header-button/header-button.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/header/header-button/header-button.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.header-button {\r\n    height: 60px;\r\n    display: flex;\r\n    cursor: pointer;\r\n}\r\n\r\n.header-button > div {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.header-button .icon {\r\n    height: 22px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.header-button:hover .icon path {\r\n    fill: #f05b41;\r\n}\r\n\r\n.header-button:hover .text {\r\n    color: #f05b41;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layouts/header/header-button/header-button.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/header/header-button/header-button.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-button\">\r\n    <div class=\"icon\">\r\n        <svg *ngIf=\"icon === 'export'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\"><path d=\"M18,19H2V3H13V1H1A1,1,0,0,0,0,2V20a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V13H18Z\" fill=\"#505050\"/><path d=\"M21.84,6.63l-6.16-5.5a.38.38,0,0,0-.42,0,.44.44,0,0,0-.22.38V4.35C8,4.63,8,10.42,8,13.23v.33A.42.42,0,0,0,8.3,14h.1a.4.4,0,0,0,.35-.21c2.08-4,3.8-4.17,6.29-4.18v2.87a.44.44,0,0,0,.22.39.38.38,0,0,0,.42-.06l6.17-5.51A.43.43,0,0,0,22,7,.45.45,0,0,0,21.84,6.63Z\" fill=\"#505050\"/></svg>\r\n        <svg *ngIf=\"icon === 'import'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\"><path d=\"M21,1H12V3h8V19H4V15H2v5a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z\" fill=\"#505050\"/><path d=\"M7,9.59v2.87a.44.44,0,0,0,.22.39.38.38,0,0,0,.42-.06l6.17-5.51A.43.43,0,0,0,14,7a.45.45,0,0,0-.15-.33L7.68,1.13a.38.38,0,0,0-.42,0A.44.44,0,0,0,7,1.46V4.35C0,4.63,0,10.42,0,13.23v.33A.42.42,0,0,0,.3,14H.4a.4.4,0,0,0,.35-.21C2.83,9.79,4.55,9.6,7,9.59Z\" fill=\"#505050\"/></svg>\r\n    </div>\r\n    <div class=\"text\">{{text}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/header/header-button/header-button.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layouts/header/header-button/header-button.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButtonComponent", function() { return HeaderButtonComponent; });
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

var HeaderButtonComponent = /** @class */ (function () {
    function HeaderButtonComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderButtonComponent.prototype, "icon", void 0);
    HeaderButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-button',
            template: __webpack_require__(/*! ./header-button.component.html */ "./src/app/layouts/header/header-button/header-button.component.html"),
            styles: [__webpack_require__(/*! ./header-button.component.css */ "./src/app/layouts/header/header-button/header-button.component.css")]
        })
    ], HeaderButtonComponent);
    return HeaderButtonComponent;
}());



/***/ }),

/***/ "./src/app/layouts/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/header/header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    height: 60px;\r\n    display: flex;\r\n}\r\n\r\n.header.filled {\r\n    background-color: #fff;\r\n    box-shadow: 0px -8px 9px 4px #000000;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.header > div {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.logo {\r\n    color: #4e4e4e;\r\n    padding-left: 20px;\r\n    font-size: 18px;\r\n    width: 220px;\r\n    height: 40px;\r\n}\r\n\r\n.logo span {\r\n    font-family: 'OpenSansCondensedBold', 'HelveticaNeue-CondensedBold', Helvetica, 'Arial Narrow', Calibri, Arial, 'Lucida Grande', sans-serif;\r\n}\r\n\r\n.logo span:first-child {\r\n    color: #f05b41;\r\n    font-size: 19px;\r\n}\r\n\r\n.logo span:last-child {\r\n    color: #a2a2a2;\r\n    font-size: 13px;\r\n    margin-top: -5px;\r\n    display: block;\r\n}\r\n\r\n.header .separator {\r\n    width: 1px;\r\n    background-color: #e3e7ea;\r\n    height: 40px;\r\n    margin: 10px 20px;\r\n}\r\n\r\n.header .separator.first {\r\n    margin-left: 0;\r\n}\r\n\r\n.switcher-editor {\r\n    border: none;\r\n}\r\n\r\n.switcher-editor.dx-dropdowneditor-active {\r\n    background-color: #e6e6e6;\r\n}\r\n\r\n:host ::ng-deep .switcher-editor .dx-texteditor-input {\r\n    background: transparent;\r\n}\r\n\r\n.switcher-template {\r\n    display: flex;\r\n}\r\n\r\n.switcher-template .switcher-icon {\r\n    padding: 3px;\r\n    height: 30px;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.switcher-template .switcher-icon.editor {\r\n    margin-left: 11px;\r\n}\r\n\r\n.switcher-template .item-template-text {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    padding-left: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layouts/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngClass]=\"{ 'filled': switchEnabled }\">\r\n    <div class=\"logo\">\r\n        <span>DevExtreme</span> ThemeBuilder\r\n        <span>by DevExpress</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"switchEnabled; then switcherBlock;\"></div>\r\n\r\n    <ng-template #switcherBlock>\r\n        <div class=\"separator first\"></div>\r\n        <div class=\"switcher\">\r\n            <dx-select-box\r\n                class=\"switcher-editor\"\r\n                [dataSource]=\"switcherData\"\r\n                [grouped]=\"true\"\r\n                displayExpr=\"text\"\r\n                valueExpr=\"themeId\"\r\n                fieldTemplate=\"field\"\r\n                [(value)]=\"currentThemeId\"\r\n                (onValueChanged)=\"themeChanged($event)\"\r\n            >\r\n                <div *dxTemplate=\"let data of 'field'\">\r\n                    <div class=\"switcher-template\">\r\n                        <app-icon-theme-circle [theme]=\"data.text | lowercase\" [small]=\"true\" class=\"switcher-icon editor\"></app-icon-theme-circle>\r\n                        <dx-text-box\r\n                            [value]=\"data.name + ' ' + data.text | titlecase\"\r\n                            [readOnly]=\"true\"\r\n                        ></dx-text-box>\r\n                    </div>\r\n                </div>\r\n                <div *dxTemplate=\"let data of 'item'\">\r\n                    <div class=\"switcher-template\">\r\n                        <app-icon-theme-circle [theme]=\"data.text | lowercase\" [small]=\"true\" class=\"switcher-icon\"></app-icon-theme-circle>\r\n                        <div class=\"item-template-text\">{{data.text}}</div>\r\n                    </div>\r\n                </div>\r\n            </dx-select-box>\r\n        </div>\r\n        <div class=\"separator\"></div>\r\n        <app-header-button text=\"Import\" icon=\"import\" (click)=\"import.popup.show();\"></app-header-button>\r\n        <div class=\"separator\"></div>\r\n        <app-header-button text=\"Export\" icon=\"export\" (click)=\"export.popup.show();\"></app-header-button>\r\n        <div class=\"separator\"></div>\r\n\r\n        <app-import-popup #import></app-import-popup>\r\n        <app-export-popup #export></app-export-popup>\r\n    </ng-template>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layouts/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-themebuilder/modules/themes */ "./node_modules/devextreme-themebuilder/modules/themes.js");
/* harmony import */ var devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/ui/dialog */ "./node_modules/devextreme/ui/dialog.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meta_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../meta-repository.service */ "./src/app/meta-repository.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(metadataService, route) {
        this.metadataService = metadataService;
        this.route = route;
    }
    HeaderComponent.prototype.themeChanged = function (e) {
        var _this = this;
        if (e.component.canceled) {
            e.component.canceled = false;
            return;
        }
        var newTheme = devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_1__["filter"](function (i) { return i.themeId === e.value; });
        Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_3__["confirm"])('Are you sure you want to change the base theme? All changes will be lost.', 'Theme Builder').then(function (confirmed) {
            if (confirmed && newTheme.length) {
                var theme = newTheme[0].name;
                var colorScheme = newTheme[0].colorScheme;
                var url = _this.route.url;
                var widget = url.substring(url.lastIndexOf('/') + 1);
                _this.route.navigate(['advanced', theme, colorScheme, widget]);
            }
            else {
                _this.currentThemeId = e.previousValue;
                e.component.canceled = true;
            }
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.switchEnabled)
            return;
        this.switcherData = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default.a({
            store: devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_1__,
            key: 'themeId',
            group: 'group'
        });
        this.subscription = this.metadataService.css.subscribe(function () {
            var currentTheme = devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_1__["filter"](function (i) {
                return i.name === _this.metadataService.theme.name &&
                    i.colorScheme === _this.metadataService.theme.colorScheme;
            });
            if (currentTheme.length) {
                _this.currentThemeId = currentTheme[0].themeId;
            }
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "switchEnabled", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layouts/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layouts/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_meta_repository_service__WEBPACK_IMPORTED_MODULE_4__["MetadataRepositoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/header/import-popup/import-popup.component.css":
/*!************************************************************************!*\
  !*** ./src/app/layouts/header/import-popup/import-popup.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\r\n    padding: 20px 0 30px 0;\r\n}\r\n\r\n.text-area {\r\n    margin: 20px 0;\r\n}\r\n\r\n::ng-deep .tabs.dx-tabpanel .dx-tab {\r\n    width: 280px;\r\n    height: 50px;\r\n}\r\n\r\n::ng-deep .tabs.dx-tabpanel.dx-state-focused .dx-tab-selected:after {\r\n    border-color: #d4d8da;\r\n    border-width: 2px;\r\n    border-bottom: 0;\r\n}\r\n\r\n::ng-deep .tabs .dx-tab-selected {\r\n    background-color: #f0f2f3;\r\n    color: #f05b41;\r\n}\r\n\r\n::ng-deep .tabs.dx-tabpanel .dx-tab-selected:before {\r\n    border-bottom: 0;\r\n}\r\n\r\n::ng-deep .tabs .dx-tab.dx-state-focused:after {\r\n    border-color: transparent;\r\n}\r\n\r\n::ng-deep .tabs .dx-tab-selected:after {\r\n    border-color: #d4d8da;\r\n    border-width: 2px;\r\n    border-top-style: solid;\r\n    height: 51px;\r\n}\r\n\r\n::ng-deep .tabs .dx-tab.dx-item:not(.dx-tab-selected) {\r\n    background-color: #d4d8da;\r\n}\r\n\r\n::ng-deep .tabs.dx-tabpanel .dx-multiview-wrapper,\r\n::ng-deep .tabs.dx-tabpanel.dx-state-focused .dx-multiview-wrapper {\r\n    border: none;\r\n}\r\n\r\n.radio-group {\r\n    width: 240px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n::ng-deep .radio-group.dx-radiogroup-horizontal .dx-radiobutton:first-of-type {\r\n    margin-right: 30px;\r\n}\r\n\r\n::ng-deep .dx-radiobutton-checked .dx-radiobutton-icon-dot {\r\n    background-color: #f05b41;\r\n}\r\n\r\n::ng-deep .dx-radiobutton.dx-state-focused:not(.dx-state-active) .dx-radiobutton-icon:before {\r\n    border-color: #f05b41;\r\n}\r\n\r\n::ng-deep .dx-radiobutton.dx-state-hover:not(.dx-state-active) .dx-radiobutton-icon:before {\r\n    border-color: #f05b41b0;\r\n}\r\n\r\n.file-uploader {\r\n    margin: 0 auto;\r\n}\r\n\r\n::ng-deep .file-uploader .dx-fileuploader-input-container {\r\n    float: left;\r\n    text-align: center;\r\n}\r\n\r\n::ng-deep .file-uploader .dx-button {\r\n    width: 100%;\r\n    background-color: #f05b41;\r\n    color: #fff;\r\n    height: 45px;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n}\r\n\r\n::ng-deep .file-uploader .dx-button.dx-state-hover {\r\n    background-color: #707070;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layouts/header/import-popup/import-popup.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layouts/header/import-popup/import-popup.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-popup\r\n    title=\"Import a Theme\"\r\n    #popup\r\n>\r\n    <div class=\"text\">\r\n        Copy and paste previously exported metadata below or upload a Bootstrap theme file.\r\n    </div>\r\n    <dx-tab-panel class=\"tabs\" [height]=\"340\">\r\n        <dxi-item title=\"DevExtreme Metadata\">\r\n            <dx-text-area class=\"text-area\" [height]=\"200\" #textArea></dx-text-area>\r\n            <div class=\"button apply\" (click)=\"applyClick(textArea)\">Import</div>\r\n        </dxi-item>\r\n        <dxi-item title=\"Bootstrap Variables\">\r\n            <div class=\"text\">\r\n                Upload a Bootstrap theme file to apply its colors to a base DevExtreme theme.\r\n                Choose the \"variables.less\" file for Bootstrap 3 and the \"_variables.scss\" file for Bootstrap 4.\r\n            </div>\r\n\r\n            <dx-radio-group\r\n                [dataSource]=\"radioGroupData\"\r\n                displayExpr=\"text\"\r\n                valueExpr=\"value\"\r\n                layout=\"horizontal\"\r\n                [(value)]=\"selectedIndex\"\r\n                class=\"radio-group\"\r\n            ></dx-radio-group>\r\n\r\n            <dx-file-uploader\r\n                width=\"260\"\r\n                [multiple]=\"false\"\r\n                [showFileList]=\"false\"\r\n                accept=\"{{radioGroupData[selectedIndex].acceptFormat}}\"\r\n                labelText=\"or Drop the file here\"\r\n                uploadMode=\"useForm\"\r\n                selectButtonText=\"{{radioGroupData[selectedIndex].uploadButtonText}}\"\r\n                (onValueChanged)=\"uploaded($event)\"\r\n                class=\"file-uploader\">\r\n            </dx-file-uploader>\r\n\r\n        </dxi-item>\r\n    </dx-tab-panel>\r\n</app-popup>\r\n"

/***/ }),

/***/ "./src/app/layouts/header/import-popup/import-popup.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layouts/header/import-popup/import-popup.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImportPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPopupComponent", function() { return ImportPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _import_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../import.service */ "./src/app/import.service.ts");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/dialog */ "./node_modules/devextreme/ui/dialog.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/popup.component */ "./src/app/layouts/header/popup/popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportPopupComponent = /** @class */ (function () {
    function ImportPopupComponent(importService) {
        this.importService = importService;
        this.radioGroupData = [{
                text: 'Bootstrap 4',
                value: 0,
                version: 4,
                acceptFormat: '.scss',
                uploadButtonText: 'Upload SCSS Variables'
            }, {
                text: 'Bootstrap 3',
                value: 1,
                version: 3,
                acceptFormat: '.less',
                uploadButtonText: 'Upload LESS Variables'
            }];
        this.selectedIndex = 0;
    }
    ImportPopupComponent.prototype.applyClick = function (t) {
        var _this = this;
        this.importService.importMetadata(t.value, 'advanced').then(function () {
            _this.popup.hide();
            t.value = '';
        }, function () {
            Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__["alert"])('It is unable to import this metadata.', 'ThemeBuilder');
        });
    };
    ImportPopupComponent.prototype.uploaded = function (e) {
        var _this = this;
        var file = e.value[0];
        if (file) {
            var fileReader_1;
            fileReader_1 = new FileReader();
            fileReader_1.onload = function () {
                _this.importService.importBootstrapVariables(fileReader_1.result, _this.radioGroupData[_this.selectedIndex].version, 'advanced');
                _this.popup.hide();
                e.component.reset();
            };
            fileReader_1.readAsText(file);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popup'),
        __metadata("design:type", _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"])
    ], ImportPopupComponent.prototype, "popup", void 0);
    ImportPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-popup',
            template: __webpack_require__(/*! ./import-popup.component.html */ "./src/app/layouts/header/import-popup/import-popup.component.html"),
            styles: [__webpack_require__(/*! ./import-popup.component.css */ "./src/app/layouts/header/import-popup/import-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_import_service__WEBPACK_IMPORTED_MODULE_1__["ImportService"]])
    ], ImportPopupComponent);
    return ImportPopupComponent;
}());



/***/ }),

/***/ "./src/app/layouts/header/popup/popup.component.css":
/*!**********************************************************!*\
  !*** ./src/app/layouts/header/popup/popup.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-popup-wrapper.export-import-popup > .dx-overlay-content {\r\n    background: #f0f2f3;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content {\r\n    padding: 30px 40px;\r\n}\r\n\r\n.title {\r\n    font-size: 47px;\r\n    font-weight: 100;\r\n    color: #404040;\r\n    font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, Verdana, sans-serif;\r\n}\r\n\r\n.close-button {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n}\r\n\r\n.close-button .dx-icon {\r\n    height: 20px;\r\n    width: 20px;\r\n    font-size: 20px;\r\n    color: #d6d5d5;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-button:hover .dx-icon {\r\n    color: #f05b41;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .button {\r\n    width: 240px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    margin: 0 auto;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .button.apply {\r\n    background-color: #f05b41;\r\n    color: #fff;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .button.apply:focus,\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .button.apply:active {\r\n    background-color: #e2e4e5;\r\n    color: #f05b41;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .button.apply:hover {\r\n    background-color: #707070;\r\n    color: #fff;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .dx-textbox {\r\n    border-radius: 0;\r\n    border: 2px solid #d4d8da;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .dx-textbox.dx-state-readonly {\r\n    opacity: 0.5;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .dx-switch-container {\r\n    border-radius: 0;\r\n    border: 2px solid #d4d8da;\r\n    height: 26px;\r\n}\r\n\r\n::ng-deep .dx-popup-wrapper.export-import-popup .dx-popup-content .dx-switch-handle:before {\r\n    background-color: #f05b41;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layouts/header/popup/popup.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layouts/header/popup/popup.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-popup\r\n    [(visible)]=\"visible\"\r\n    shadingColor=\"rgba(0, 0, 0, 0.5)\"\r\n    class=\"export-import-popup\"\r\n    [showTitle]=\"false\"\r\n    [width]=\"642\"\r\n    height=\"auto\"\r\n>\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"close-button\" (click)=\"visible = false;\">\r\n        <div class=\"dx-icon dx-icon-close\"></div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/layouts/header/popup/popup.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/header/popup/popup.component.ts ***!
  \*********************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
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

var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
        this.visible = false;
    }
    PopupComponent.prototype.show = function () {
        this.visible = true;
    };
    PopupComponent.prototype.hide = function () {
        this.visible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PopupComponent.prototype, "title", void 0);
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/layouts/header/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/layouts/header/popup/popup.component.css")]
        })
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/layouts/preview-layout/preview-layout.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/layouts/preview-layout/preview-layout.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/preview-layout/preview-layout.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/preview-layout/preview-layout.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layouts/preview-layout/preview-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/preview-layout/preview-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: PreviewLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewLayoutComponent", function() { return PreviewLayoutComponent; });
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

var PreviewLayoutComponent = /** @class */ (function () {
    function PreviewLayoutComponent() {
    }
    PreviewLayoutComponent.prototype.ngOnInit = function () {
    };
    PreviewLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-layout',
            template: __webpack_require__(/*! ./preview-layout.component.html */ "./src/app/layouts/preview-layout/preview-layout.component.html"),
            styles: [__webpack_require__(/*! ./preview-layout.component.css */ "./src/app/layouts/preview-layout/preview-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewLayoutComponent);
    return PreviewLayoutComponent;
}());



/***/ }),

/***/ "./src/app/left-menu/back-navigator/back-navigator.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/left-menu/back-navigator/back-navigator.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host:hover {\r\n    color: #f05b41;\r\n}\r\n\r\n:host:hover .back {\r\n    fill: #f05b41;\r\n}\r\n\r\n.back {\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -9px;\r\n    left: 5px;\r\n    fill: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/left-menu/back-navigator/back-navigator.component.html":
/*!************************************************************************!*\
  !*** ./src/app/left-menu/back-navigator/back-navigator.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg class=\"back\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"><title>back</title><polygon points=\"11.99 12.66 10.66 13.99 6.01 9.34 6.01 8.66 10.66 4.01 11.99 5.34 8.33 9 11.99 12.66\" fill-rule=\"evenodd\"/></svg>\r\n{{text}}\r\n"

/***/ }),

/***/ "./src/app/left-menu/back-navigator/back-navigator.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/left-menu/back-navigator/back-navigator.component.ts ***!
  \**********************************************************************/
/*! exports provided: BackNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackNavigatorComponent", function() { return BackNavigatorComponent; });
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

var BackNavigatorComponent = /** @class */ (function () {
    function BackNavigatorComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BackNavigatorComponent.prototype, "text", void 0);
    BackNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back-navigator',
            template: __webpack_require__(/*! ./back-navigator.component.html */ "./src/app/left-menu/back-navigator/back-navigator.component.html"),
            styles: [__webpack_require__(/*! ./back-navigator.component.css */ "./src/app/left-menu/back-navigator/back-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackNavigatorComponent);
    return BackNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/left-menu/base-parameters/base-parameters.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/left-menu/base-parameters/base-parameters.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editors {\r\n    background-color: #e2e5e7;\r\n    width: 100%;\r\n    padding: 30px 50px 30px 60px;\r\n    margin-bottom: 30px;\r\n    margin-top: 50px; \r\n    border-top-left-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.editors:after {\r\n    content: \"Base Theming\";\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    color: #9c9c9c;\r\n    position: absolute;\r\n    -webkit-transform: rotate(-90deg);\r\n            transform: rotate(-90deg);\r\n    top: 45%;\r\n    left: -30px;\r\n    font-size: 14px;\r\n}\r\n\r\n.work-item {\r\n    width: 140px;\r\n    height: 50px;\r\n    margin-bottom: 18px;\r\n}\r\n\r\n:host ::ng-deep .work-item .property-header {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    color: #9c9c9c;\r\n    padding: 0;\r\n}\r\n\r\n:host ::ng-deep .work-item .property-widget {\r\n    padding: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/left-menu/base-parameters/base-parameters.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/left-menu/base-parameters/base-parameters.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editors\">\r\n    <div class=\"work-item\" *ngIf=\"theme === 'generic'\">\r\n        <div class=\"property-header\">Base size</div>\r\n        <div class=\"property-widget\">\r\n            <dx-select-box\r\n                [items]=\"[{key: 'normal', text: 'Normal'}, {key: 'compact', text: 'Compact'}]\"\r\n                displayExpr=\"text\"\r\n                valueExpr=\"key\"\r\n                (onValueChanged)=\"themeSizeChanged($event)\"\r\n                [value]=\"themeSize || 'normal'\"\r\n            ></dx-select-box>\r\n        </div>\r\n    </div>\r\n    <div *ngFor=\"let item of editorsData\" class=\"work-item\">\r\n        <app-editor [item]=\"item\"></app-editor>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/left-menu/base-parameters/base-parameters.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/left-menu/base-parameters/base-parameters.component.ts ***!
  \************************************************************************/
/*! exports provided: BaseParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseParametersComponent", function() { return BaseParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meta_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../meta-repository.service */ "./src/app/meta-repository.service.ts");
/* harmony import */ var _names_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../names.service */ "./src/app/names.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseParametersComponent = /** @class */ (function () {
    function BaseParametersComponent(metadataRepository, names, router) {
        this.metadataRepository = metadataRepository;
        this.names = names;
        this.router = router;
    }
    BaseParametersComponent.prototype.updateData = function () {
        var _this = this;
        this.metadataRepository.getBaseParameters().then(function (parameters) {
            _this.editorsData = parameters.sort(function (item1, item2) { return _this.names.sortNames(item1.Name, item2.Name); });
        });
    };
    BaseParametersComponent.prototype.themeSizeChanged = function (e) {
        var currentColorScheme = this.metadataRepository.theme.colorScheme;
        var newColorScheme = e.value === 'compact' ?
            (currentColorScheme + '-' + e.value) :
            currentColorScheme.split('-')[0];
        this.router.navigate(['master', this.theme, newColorScheme]);
    };
    BaseParametersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateData();
        this.subscription = this.metadataRepository.css.subscribe(function () {
            _this.updateData();
        });
    };
    BaseParametersComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseParametersComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseParametersComponent.prototype, "themeSize", void 0);
    BaseParametersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-parameters',
            template: __webpack_require__(/*! ./base-parameters.component.html */ "./src/app/left-menu/base-parameters/base-parameters.component.html"),
            styles: [__webpack_require__(/*! ./base-parameters.component.css */ "./src/app/left-menu/base-parameters/base-parameters.component.css")]
        }),
        __metadata("design:paramtypes", [_meta_repository_service__WEBPACK_IMPORTED_MODULE_2__["MetadataRepositoryService"],
            _names_service__WEBPACK_IMPORTED_MODULE_3__["NamesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BaseParametersComponent);
    return BaseParametersComponent;
}());



/***/ }),

/***/ "./src/app/left-menu/editor/editor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/left-menu/editor/editor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".property-header {\r\n    padding: 20px 20px 3px 0;\r\n}\r\n\r\n.property-widget {\r\n    padding-right: 20px;\r\n}\r\n\r\n.property-delimiter {\r\n    margin-top: 20px;\r\n    height: 1px;\r\n    background-color: #e3e7ea;\r\n}\r\n"

/***/ }),

/***/ "./src/app/left-menu/editor/editor.component.html":
/*!********************************************************!*\
  !*** ./src/app/left-menu/editor/editor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"property-header\">{{ getRealName(item.Name) }}</div>\r\n<div class=\"property-widget\">\r\n    <dx-select-box *ngIf=\"item.Type === 'select'\" [value]=\"item.Value\" [items]=\"item.TypeValuesArray\" (onValueChanged)=\"valueChanged($event, item.Key)\"></dx-select-box>\r\n    <dx-text-box *ngIf=\"item.Type === 'text'\" [value]=\"item.Value\" (onValueChanged)=\"valueChanged($event, item.Key)\"></dx-text-box>\r\n    <dx-color-box *ngIf=\"item.Type === 'color'\" [value]=\"item.Value\" (onValueChanged)=\"valueChanged($event, item.Key)\"></dx-color-box>\r\n</div>\r\n<div *ngIf=\"item.IsLastSubGroupItem\" class=\"property-delimiter\"></div>\r\n"

/***/ }),

/***/ "./src/app/left-menu/editor/editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/left-menu/editor/editor.component.ts ***!
  \******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meta_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../meta-repository.service */ "./src/app/meta-repository.service.ts");
/* harmony import */ var _names_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../names.service */ "./src/app/names.service.ts");
/* harmony import */ var _types_meta_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/meta-item */ "./src/app/types/meta-item.ts");
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
    function EditorComponent(names, metaRepository) {
        var _this = this;
        this.names = names;
        this.metaRepository = metaRepository;
        this.getRealName = function (name) { return _this.names.getRealName(name); };
    }
    EditorComponent.prototype.valueChanged = function (e, key) {
        this.metaRepository.updateSingleVariable(e, key);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item'),
        __metadata("design:type", _types_meta_item__WEBPACK_IMPORTED_MODULE_3__["MetaItem"])
    ], EditorComponent.prototype, "item", void 0);
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/left-menu/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/left-menu/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_names_service__WEBPACK_IMPORTED_MODULE_2__["NamesService"], _meta_repository_service__WEBPACK_IMPORTED_MODULE_1__["MetadataRepositoryService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/left-menu/left-menu.aliases.ts":
/*!************************************************!*\
  !*** ./src/app/left-menu/left-menu.aliases.ts ***!
  \************************************************/
/*! exports provided: LeftMenuAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuAlias", function() { return LeftMenuAlias; });
var LeftMenuAlias = /** @class */ (function () {
    function LeftMenuAlias() {
    }
    LeftMenuAlias.getAlias = function (key) {
        return this.aliases[key];
    };
    LeftMenuAlias.aliases = {
        'base.common': { name: 'Basic Settings', order: 110 },
        'base.typography': { name: 'Typography Settings', order: 130 },
        'datagrid': { name: 'Data Grid', order: 200, equivalents: 'dxDataGrid, data grid, dx-data-grid' },
        'treelist': { name: 'Tree List', order: 300, equivalents: 'dxTreeList, dx-tree-list' },
        'pivotgrid': { name: 'Pivot Grid', order: 400, equivalents: 'dxPivotGrid, dx-pivot-grid' },
        'scheduler': { name: 'Scheduler', order: 500, equivalents: 'dxScheduler, dx-scheduler' },
        'buttons': { name: 'Button', order: 700, equivalents: 'dxButton, dx-button' },
        'buttons.default': { name: 'Default Type', order: 710, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'buttons.normal': { name: 'Normal Type', order: 720, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'buttons.success': { name: 'Success Type', order: 730, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'buttons.danger': { name: 'Danger Type', order: 740, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'buttons.flat': { name: 'Flat Button', order: 750, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'editors': { name: 'Editors', order: 800, equivalents: 'TextBox, dxTextBox, dx-text-box' },
        'editors.texteditors': { name: 'Text Editors', order: 805, widgetGroup: true, equivalents: 'TextBox, dxTextBox, dx-text-box, dxTextArea, dx-text-area' },
        'editors.autocomplete': { name: 'Autocomplete', order: 810, widgetGroup: true, equivalents: 'SuggestBox, AutoSuggestBox, dxAutocomplete, dx-autocomplete' },
        'editors.calendar': { name: 'Calendar', order: 815, widgetGroup: true, equivalents: 'dxCalendar, dx-calendar' },
        'editors.checkbox': { name: 'Check Box', order: 820, widgetGroup: true, equivalents: 'Switch, CheckBox, dxCheckBox, dx-check-box' },
        'editors.colorbox': { name: 'Color Box', order: 825, widgetGroup: true, equivalents: 'ColorBox, ColorPicker, dxColorBox, dx-color-box' },
        'editors.fileuploader': { name: 'File Uploader', order: 830, widgetGroup: true, equivalents: 'dxFileUploader, dx-file-uploader' },
        'editors.lookup': { name: 'Lookup', order: 835, widgetGroup: true, equivalents: 'dxLookup, dx-lookup' },
        'editors.numberbox': { name: 'Number Box', order: 840, widgetGroup: true, equivalents: 'NumberBox, TextBox, dxNumberBox, dx-number-box' },
        'editors.radiogroup': { name: 'Radio Group', order: 845, widgetGroup: true, equivalents: 'RadioGroup, RadioButton, dxRadioGroup, dx-radio-group' },
        'editors.selectbox': { name: 'Select Box', order: 850, widgetGroup: true, equivalents: 'SelectBox, ComboBox, Spinner, dxSelectBox, dx-select-box, dxDropDownBox, dx-drop-down-box' },
        'editors.switch': { name: 'Switch', order: 855, widgetGroup: true, equivalents: 'Switch, CheckBox, dxSwitch, dx-switch' },
        'editors.tagbox': { name: 'Tag Box', order: 860, widgetGroup: true, equivalents: 'TagBox, SelectBox, ComboBox, MultiSelect, TagSelector, TokenBox, dxTagBox, dx-tag-box' },
        'editors.validation': { name: 'Validation', order: 870, widgetGroup: true, equivalents: 'dxValidator, dx-validator' },
        'form': { name: 'Form', order: 900, equivalents: 'dxForm, dx-form' },
        'filterbuilder': { name: 'Filter Builder', order: 950, equivalents: 'dxFilterBuilder, QueryBuilder' },
        'gallery': { name: 'Gallery', order: 1000, equivalents: 'dxGallery, dx-gallery' },
        'overlays': { name: 'Overlays', order: 1100, equivalents: '' },
        'overlays.common': { name: 'Overlays', order: 1110, widgetGroup: true, equivalents: 'dxPopup, dx-popup, dxPopover, dx-popover, dxActionSheet, dx-action-sheet, dxTooltip, dx-tooltip, dxToast, dx-toast' },
        'overlays.actionsheet': { name: 'Action Sheet', order: 1120, widgetGroup: true, equivalents: 'dxActionSheet, dx-action-sheet' },
        'overlays.tooltip': { name: 'Tooltip', order: 1130, widgetGroup: true, equivalents: 'dxTooltip, dx-tooltip' },
        'overlays.toasts': { name: 'Toast', order: 1140, widgetGroup: true, equivalents: 'dxToast, dx-toast' },
        'list': { name: 'List', order: 1200, equivalents: 'ListView, TableView, ListBox, dxList, dx-list' },
        'layouts': { name: 'Layouts', order: 1300, equivalents: '' },
        'layouts.desktop': { name: 'Desktop', order: 1310, widgetGroup: true, equivalents: '' },
        'layouts.split': { name: 'Split', order: 1320, widgetGroup: true, equivalents: '' },
        'navigations': { name: 'Navigation', order: 1400, equivalents: '' },
        'navigations.accordion': { name: 'Accordion', order: 1410, equivalents: 'dxAccordion, dx-accordion' },
        'navigations.menu': { name: 'Menu', order: 1420, equivalents: 'dxMenu, dx-menu' },
        'navigations.navbar': { name: 'Navbar', order: 1430, equivalents: 'NavigationBar, dxNavBar, dx-nav-bar' },
        'navigations.tabs': { name: 'Tabs', order: 1440, equivalents: 'TabBar, Segmented Control, dxTabs, dx-tabs' },
        'navigations.toolbar': { name: 'Toolbar', order: 1450, equivalents: 'ActionBar, AppBar, dx-toolbar, dxToolbar' },
        'navigations.treeview': { name: 'Tree View', order: 1460, equivalents: 'TreeView, TreeList, dxTreeView, dx-tree-view' },
        'navigations.drawer': { name: 'Drawer', order: 1470, equivalents: 'dxDrawer, dx-drawer, Slideout, Panel, Slideview, Layout' },
        'progressbars': { name: 'Progress Bar', order: 1500, equivalents: 'ProgressBar, dxProgressBar, dx-progress-bar' },
        'sliders': { name: 'Sliders', order: 1600, equivalents: 'SeekBar, TrackBar, dxSlider, dx-slider' },
        'scrollview': { name: 'Scroll View', order: 1700, equivalents: 'dxScrollView, dx-scroll-view' }
    };
    return LeftMenuAlias;
}());



/***/ }),

/***/ "./src/app/left-menu/main/left-menu.component.css":
/*!********************************************************!*\
  !*** ./src/app/left-menu/main/left-menu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    height: 100%;\r\n    width: 240px;\r\n    border-right: 1px solid #e3e7ea;\r\n}\r\n\r\n.left-menu {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.left-menu .dark-menu {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 2;\r\n    left: 0;\r\n    width: 240px;\r\n    height: 100%;\r\n    background-color: #505050;\r\n    color: #fff;\r\n    transition: left ease 200ms;\r\n    overflow: hidden;\r\n}\r\n\r\n.left-menu .dark-menu.closed {\r\n    left: -240px;\r\n}\r\n\r\n.left-menu .dark-menu .scroll-container {\r\n    position: absolute;\r\n    top: 44px;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item {\r\n    font-size: 14px;\r\n    padding: 8px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item:first-child {\r\n    padding-top: 10px;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top {\r\n    font-family: 'OpenSansCondensedBold', 'HelveticaNeue-CondensedBold', Helvetica, 'Arial Narrow', Calibri, Arial, 'Lucida Grande', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    padding-bottom: 10px;\r\n    padding-left: 30px;\r\n    border-bottom: 1px solid #6d6e6f;\r\n    position: relative;\r\n}\r\n\r\n.left-menu .arrow {\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -9px;\r\n    left: 5px;\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-button {\r\n    width: 40px;\r\n    height: 45px;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    background-color: #505050;\r\n    border-left: 1px solid #6d6e6f;\r\n    border-bottom: 1px solid #6d6e6f;\r\n    left: 200px;\r\n    top: 0;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-container {\r\n    width: 240px;\r\n    height: 45px;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 0;\r\n    border-bottom: 1px solid #6d6e6f;\r\n    background-color: #505050;\r\n    transition: left 200ms;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-container.opened {\r\n    left: 0;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-container .search {\r\n    background-image: url(/images/search.svg);\r\n    cursor: default;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-container input {\r\n    height: 44px;\r\n    width: 170px;\r\n    border: none;\r\n    position: absolute;\r\n    left: 30px;\r\n    padding: 0;\r\n    background: transparent;\r\n    color: #fff;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-container input::-webkit-input-placeholder {\r\n    color: #b5b5b5;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-container input:-ms-input-placeholder {\r\n    color: #b5b5b5;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-container input::-ms-input-placeholder {\r\n    color: #b5b5b5;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.top .search-container input::placeholder {\r\n    color: #b5b5b5;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item.active-link {\r\n    background-color: #6f6f6f;\r\n}\r\n\r\n.left-menu .dark-menu .menu-item:not(.top):hover {\r\n    color: #f05b41;\r\n}\r\n\r\n.left-menu .working-area {\r\n    width: 240px;\r\n    background-color: #fafbfb;\r\n    height: 100%;\r\n}\r\n\r\n.left-menu .working-area .name {\r\n    padding: 10px 20px 10px 30px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    color: #505050;\r\n    border-bottom: 1px solid #e3e7ea;\r\n    font-family: 'OpenSansCondensedBold', 'HelveticaNeue-CondensedBold', Helvetica, 'Arial Narrow', Calibri, Arial, 'Lucida Grande', sans-serif;\r\n    position: relative;\r\n}\r\n\r\n.left-menu .working-area .name .arrow.menu {\r\n    background-image: url(/images/sandwich.svg);\r\n}\r\n\r\n.left-menu .working-area .scroll-container {\r\n    top: 44px;\r\n    bottom: 0;\r\n    width: 240px;\r\n    position: absolute;\r\n}\r\n\r\n.left-menu .working-area .work-item .group.closed .group-items {\r\n    display: none;\r\n}\r\n\r\n.left-menu .working-area .work-item .group .group-header {\r\n    color: #505050;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    padding: 20px 20px 0 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-menu .working-area .work-item .group .group-header .chevron {\r\n    float: right;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    transition: -webkit-transform 200ms;\r\n    transition: transform 200ms;\r\n    transition: transform 200ms, -webkit-transform 200ms;\r\n}\r\n\r\n.left-menu .working-area .work-item .group.closed .group-header .chevron {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n\r\n.left-menu .working-area .work-item {\r\n    padding-left: 20px;\r\n}\r\n\r\n.left-menu .working-area .work-item:last-child {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/left-menu/main/left-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/left-menu/main/left-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-menu\">\r\n    \r\n    <div class=\"working-area\">\r\n        <div class=\"name\" (click)=\"openMenu()\">\r\n            <span class=\"arrow menu\"></span>{{ workAreaName }}\r\n        </div>\r\n\r\n        <div class=\"scroll-container\">\r\n            <dx-scroll-view>\r\n                <div *ngFor=\"let workItem of workArea\" class=\"work-item\">\r\n                    <div *ngIf=\"workItem.GroupHeader\" class=\"group\" #group>\r\n                        <div class=\"group-header\" (click)=\"group.classList.toggle('closed')\">\r\n                            {{ getRealName(workItem.Name) }}\r\n                            <span class=\"chevron dx-icon-chevronup\"></span>\r\n                        </div>\r\n                        <div class=\"group-items\">\r\n                            <ng-container *ngFor=\"let item of workItem.Items\">\r\n                                <app-editor [item]=\"item\"></app-editor>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!workItem.GroupHeader\">\r\n                        <app-editor [item]=\"workItem\"></app-editor>\r\n                    </div>\r\n                </div>\r\n            </dx-scroll-view>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"dark-menu closed\" [ngClass]=\"{ 'closed' : menuClosed }\">\r\n            <div class=\"menu-item top\" (click)=\"menuClosed = true;\">\r\n                <div>\r\n                    <app-back-navigator text=\"Back\"></app-back-navigator>\r\n                </div>\r\n                <div class=\"search-container\" [ngClass]=\"{'opened': searchOpened}\" (click)=\"$event.stopPropagation()\">\r\n                    <span class=\"arrow search\"></span>\r\n                    <input #searchInput type=\"text\" placeholder=\"Search...\" [value]=\"searchKeyword\" (input)=\"searchKeyword = $event.target.value;menuSearch();\"/>\r\n                </div>\r\n                <div class=\"search-button\" (click)=\"toggleSearch($event)\">\r\n                    <app-search-opener [opened]=\"searchOpened\"></app-search-opener>\r\n                </div>\r\n            </div>\r\n            <div class=\"separator\"></div>\r\n            <div class=\"scroll-container\">\r\n                <dx-scroll-view>\r\n                    <div\r\n                        *ngFor=\"let menuItem of filteredMenuData\"\r\n                        class=\"menu-item\"\r\n                        [routerLink]=\"['/advanced', theme, colorScheme, menuItem.groupKey]\"\r\n                        routerLinkActive=\"active-link\"\r\n                        [routerLinkActiveOptions]=\"{exact: true}\"\r\n                        (click)=\"menuClosed = true;\"\r\n                    >\r\n                        {{ menuItem.groupName }}\r\n                    </div>\r\n                </dx-scroll-view>\r\n            </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/left-menu/main/left-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/left-menu/main/left-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: LeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function() { return LeftMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _left_menu_aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../left-menu.aliases */ "./src/app/left-menu/left-menu.aliases.ts");
/* harmony import */ var _meta_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../meta-repository.service */ "./src/app/meta-repository.service.ts");
/* harmony import */ var _names_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../names.service */ "./src/app/names.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeftMenuComponent = /** @class */ (function () {
    function LeftMenuComponent(route, metaRepository, names) {
        var _this = this;
        this.route = route;
        this.metaRepository = metaRepository;
        this.names = names;
        this.BASE_THEMING_NAME = 'Base Theming';
        this.menuClosed = true;
        this.searchOpened = false;
        this.searchKeyword = '';
        this.workAreaName = this.BASE_THEMING_NAME;
        this.getRealName = function (name) { return _this.names.getRealName(name); };
        this.route.params.subscribe(function (params) {
            _this.widget = params['widget'];
            _this.changeWidget(_this.widget);
        });
    }
    LeftMenuComponent.prototype.openMenu = function () {
        this.menuClosed = false;
    };
    LeftMenuComponent.prototype.toggleSearch = function (e) {
        var _this = this;
        this.searchOpened = !this.searchOpened;
        this.searchKeyword = '';
        setTimeout(function () { return _this.searchInput.nativeElement.focus(); }, 100);
        this.menuSearch();
        e.stopPropagation();
    };
    LeftMenuComponent.prototype.menuSearch = function () {
        var keyword = this.searchKeyword.toLowerCase();
        this.filteredMenuData = this.menuData.filter(function (value) {
            var groupName = value.groupName.toLowerCase();
            var searchString = groupName + ', ' + value.equivalents;
            return searchString.toLowerCase().indexOf(keyword) !== -1;
        });
    };
    LeftMenuComponent.prototype.changeWidget = function (widget) {
        var item = this.menuData && this.menuData.find(function (value) { return value.groupKey === widget; });
        if (item) {
            this.openWorkArea(item.items, item.groupName);
        }
    };
    LeftMenuComponent.prototype.openWorkArea = function (items, name) {
        var _this = this;
        var workItems = items || [];
        workItems.forEach(function (item) {
            if (item.TypeValues) {
                item.TypeValuesArray = item.TypeValues.split('|');
            }
        });
        this.workArea = workItems.sort(function (item1, item2) { return _this.names.sortNames(item1.Name, item2.Name); });
        this.workAreaName = name || this.BASE_THEMING_NAME;
        this.menuClosed = true;
    };
    LeftMenuComponent.prototype.loadThemeMetadata = function () {
        var _this = this;
        return this.metaRepository.getData().then(function (metadata) {
            _this.theme = _this.metaRepository.theme.name;
            _this.colorScheme = _this.metaRepository.theme.colorScheme;
            var widgetGroups = [];
            var itemArray = [];
            var processedGroups = {};
            metadata.forEach(function (metaItem) {
                var group = metaItem.Group;
                if (processedGroups[group])
                    return;
                processedGroups[group] = true;
                var aliasInfo = _left_menu_aliases__WEBPACK_IMPORTED_MODULE_2__["LeftMenuAlias"].getAlias(group);
                if (!aliasInfo)
                    return;
                var groupName = aliasInfo.name;
                var groupItems = metadata.filter(function (i) { return i.Group === group; });
                if (aliasInfo.widgetGroup) {
                    var groupKey = group.substring(0, group.indexOf('.'));
                    widgetGroups.push({
                        Key: null,
                        Value: null,
                        Group: groupKey,
                        GroupHeader: true,
                        Name: aliasInfo.order + '. ' + groupName,
                        Items: groupItems
                    });
                }
                else {
                    itemArray.push({
                        order: aliasInfo.order,
                        groupKey: group,
                        groupName: groupName,
                        items: groupItems,
                        equivalents: aliasInfo.equivalents
                    });
                }
            });
            widgetGroups.forEach(function (groupItem) {
                var mainGroupKey = groupItem.Group;
                if (processedGroups[mainGroupKey])
                    return;
                processedGroups[mainGroupKey] = true;
                var aliasInfo = _left_menu_aliases__WEBPACK_IMPORTED_MODULE_2__["LeftMenuAlias"].getAlias(mainGroupKey);
                itemArray.push({
                    order: aliasInfo.order,
                    groupKey: mainGroupKey,
                    groupName: aliasInfo.name,
                    items: widgetGroups.filter(function (i) { return i.Group === mainGroupKey; }),
                    equivalents: aliasInfo.equivalents
                });
            });
            _this.menuData = itemArray.sort(function (item1, item2) { return item1.order - item2.order; });
            _this.filteredMenuData = _this.menuData;
        });
    };
    LeftMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadThemeMetadata();
        this.subscription = this.metaRepository.css.subscribe(function () {
            _this.loadThemeMetadata().then(function () {
                _this.changeWidget(_this.widget);
            });
        });
    };
    LeftMenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LeftMenuComponent.prototype, "searchInput", void 0);
    LeftMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-menu',
            template: __webpack_require__(/*! ./left-menu.component.html */ "./src/app/left-menu/main/left-menu.component.html"),
            styles: [__webpack_require__(/*! ./left-menu.component.css */ "./src/app/left-menu/main/left-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _meta_repository_service__WEBPACK_IMPORTED_MODULE_3__["MetadataRepositoryService"], _names_service__WEBPACK_IMPORTED_MODULE_4__["NamesService"]])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/left-menu/search-opener/search-opener.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/left-menu/search-opener/search-opener.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.search:hover .icon {\r\n    fill: #f05b41;\r\n}\r\n\r\n.icon {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    fill: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/left-menu/search-opener/search-opener.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/left-menu/search-opener/search-opener.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\" [ngClass]=\"{'close': opened}\">\r\n    <svg *ngIf=\"!opened\" class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"><title>search</title><path d=\"M17.71,16.29l-1.42,1.42-4.12-4.12A7,7,0,1,1,15,8a6.94,6.94,0,0,1-1.41,4.17ZM8,3a5,5,0,1,0,5,5A5,5,0,0,0,8,3Z\" fill-rule=\"evenodd\"/></svg>\r\n    <svg *ngIf=\"opened\" class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"><title>close</title><polygon points=\"14.99 13.62 13.62 14.99 9 10.36 4.38 14.99 3.01 13.62 7.64 9 3.01 4.38 4.38 3.01 9 7.64 13.62 3.01 14.99 4.38 10.36 9 14.99 13.62\" fill-rule=\"evenodd\"/></svg>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/left-menu/search-opener/search-opener.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/left-menu/search-opener/search-opener.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchOpenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOpenerComponent", function() { return SearchOpenerComponent; });
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

var SearchOpenerComponent = /** @class */ (function () {
    function SearchOpenerComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SearchOpenerComponent.prototype, "opened", void 0);
    SearchOpenerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-opener',
            template: __webpack_require__(/*! ./search-opener.component.html */ "./src/app/left-menu/search-opener/search-opener.component.html"),
            styles: [__webpack_require__(/*! ./search-opener.component.css */ "./src/app/left-menu/search-opener/search-opener.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchOpenerComponent);
    return SearchOpenerComponent;
}());



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".master .section {\r\n    text-align: left;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    display: block;\r\n}\r\n\r\n.master .section.left {\r\n    position: relative;\r\n    width: 750px;\r\n    padding-top: 40px;\r\n}\r\n\r\n.master .section.right {\r\n    display: block;\r\n    position: absolute;\r\n    left: 750px;\r\n    right: 0;\r\n    top: 100px;\r\n    height: 800px;\r\n    min-width: 1160px;\r\n    background-color: #e2e5e7; \r\n    box-shadow: 0 12px 18px rgba(0, 0, 0, 0.3);\r\n    z-index: 1; \r\n}\r\n\r\n.master .section.right > * {\r\n    height: 100%;\r\n}\r\n\r\n.master .title {\r\n    width: 310px;\r\n    text-align: left; \r\n    margin-left: 100px;\r\n    display: block;  \r\n}\r\n\r\n.master .title span {\r\n    margin-left: 2px;\r\n}\r\n\r\n.master .title-link {\r\n    margin-left: 100px;\r\n    width: 310px;\r\n}\r\n\r\n.master .schemes-container {\r\n    width: 180px;\r\n    position: absolute;\r\n    left: 90px;\r\n    right: 300px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    margin-top: 50px;\r\n}\r\n\r\n.schemes .color-name {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.schemes li {\r\n    border-radius: 28px;\r\n    padding: 5px 5px;\r\n    text-align: left;\r\n    color: #505050;\r\n    cursor: pointer;\r\n}\r\n\r\n.schemes li:hover {\r\n    background-color: #d9dde0;\r\n}\r\n\r\n.schemes li.active {\r\n    background-color: #e2e5e7;\r\n}\r\n\r\n.base-theming {\r\n    width: 310px;\r\n    float: right;\r\n}\r\n\r\n.advanced {\r\n    background-color: #fff;\r\n    margin-top: 10px;\r\n}\r\n\r\n.button.advanced:focus,\r\n.button.advanced:active {\r\n    background-color: #d0442c;\r\n    color: #fff;\r\n}\r\n\r\n@media (min-width: 1950px) { \r\n    .master .section.right {\r\n        right: 40px;\r\n    }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/master/master.component.html":
/*!**********************************************!*\
  !*** ./src/app/master/master.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"master\"> \r\n    <div class=\"section left\">\r\n        <div class=\"title-link master\" [routerLink]=\"['/master']\">Select a Theme</div>\r\n        <div class=\"title\">\r\n            {{themeName | titlecase}} Theme\r\n            <span>Select a color scheme</span>\r\n        </div>\r\n        <div class=\"schemes-container\">\r\n            <ul class=\"schemes\">\r\n                <li *ngFor=\"let theme of themesList\" \r\n                    routerLinkActive=\"active\"\r\n                    [routerLink]=\"['/master', theme.name, theme.colorScheme]\">\r\n                    <app-icon-theme-circle [theme]=\"theme.text | lowercase\" [small]=\"false\"></app-icon-theme-circle>\r\n                    <span class=\"color-name\">{{theme.text}}</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"base-theming\">\r\n            <app-base-parameters [theme]=\"themeName\" [themeSize]=\"themeSize\"></app-base-parameters>\r\n            <div class=\"button apply\" (click)=\"export.popup.show();\">Export</div>\r\n            <div class=\"button advanced\" [routerLink]=\"['/advanced', themeName, colorScheme, 'base.common']\">Advanced Theming</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section right\">\r\n        <app-iframe *ngIf=\"showIframe\"></app-iframe>\r\n    </div>\r\n\r\n    <app-export-popup #export></app-export-popup>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_themebuilder_modules_themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-themebuilder/modules/themes.js */ "./node_modules/devextreme-themebuilder/modules/themes.js");
/* harmony import */ var devextreme_themebuilder_modules_themes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_themebuilder_modules_themes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/app-layout/app-layout.component */ "./src/app/layouts/app-layout/app-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MasterComponent = /** @class */ (function () {
    function MasterComponent(route, appLayoutComponent) {
        var _this = this;
        this.route = route;
        this.appLayoutComponent = appLayoutComponent;
        this.showIframe = false;
        this.isCompactThemes = false;
        this.route.params.subscribe(function (params) {
            _this.themeName = params['theme'] || '';
            _this.colorScheme = params['color-scheme'] || '';
            _this.themeSize = params['color-scheme'].split('-')[1];
            _this.changeContent();
        });
    }
    MasterComponent.prototype.changeContent = function () {
        var _this = this;
        this.themes = devextreme_themebuilder_modules_themes_js__WEBPACK_IMPORTED_MODULE_2__["filter"](function (t) { return t.name === _this.themeName; });
        if (this.themeName === 'material') {
            // getting sorted list by background color
            this.themesList = [].concat(this.themes.filter(function (t) { return t.text.includes('Light'); }), this.themes.filter(function (t) { return t.text.includes('Dark'); }));
        }
        else {
            this.themesList = this.themes.filter(function (t) { return _this.themeSize ?
                t.group.includes('Compact') :
                !t.group.includes('Compact'); });
            this.isCompactThemes = true;
        }
    };
    MasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.appLayoutComponent.animationDone.subscribe(function (value) {
            _this.showIframe = value;
        });
    };
    MasterComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _layouts_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_3__["AppLayoutComponent"]])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/meta-repository.service.ts":
/*!********************************************!*\
  !*** ./src/app/meta-repository.service.ts ***!
  \********************************************/
/*! exports provided: MetadataRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataRepositoryService", function() { return MetadataRepositoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_themebuilder_modules_metadata_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-themebuilder/modules/metadata-loader */ "./node_modules/devextreme-themebuilder/modules/metadata-loader.js");
/* harmony import */ var devextreme_themebuilder_modules_metadata_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_themebuilder_modules_metadata_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_themebuilder_modules_metadata_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-themebuilder/modules/metadata-repository */ "./node_modules/devextreme-themebuilder/modules/metadata-repository.js");
/* harmony import */ var devextreme_themebuilder_modules_metadata_repository__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_themebuilder_modules_metadata_repository__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_themebuilder_modules_base_parameters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-themebuilder/modules/base-parameters */ "./node_modules/devextreme-themebuilder/modules/base-parameters.js");
/* harmony import */ var devextreme_themebuilder_modules_base_parameters__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_themebuilder_modules_base_parameters__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-themebuilder/modules/themes */ "./node_modules/devextreme-themebuilder/modules/themes.js");
/* harmony import */ var devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _builder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./builder.service */ "./src/app/builder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MetadataRepositoryService = /** @class */ (function () {
    function MetadataRepositoryService(router, builder) {
        var _this = this;
        this.router = router;
        this.builder = builder;
        this.modifiedMetaCollection = [];
        this.theme = { name: 'generic', colorScheme: 'light' };
        this.css = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.build();
        this.metadataRepository = new devextreme_themebuilder_modules_metadata_repository__WEBPACK_IMPORTED_MODULE_4__(new devextreme_themebuilder_modules_metadata_loader__WEBPACK_IMPORTED_MODULE_3__());
        var repositoryPromise = this.metadataRepository.init(devextreme_themebuilder_modules_themes__WEBPACK_IMPORTED_MODULE_6__);
        this.router.events.subscribe(function (event) {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
                return;
            var urlParts = event.url.split('/');
            if (urlParts[2] && urlParts[3]) {
                if (!_this.theme || _this.theme.name !== urlParts[2] || _this.theme.colorScheme !== urlParts[3]) {
                    _this.theme = { name: urlParts[2], colorScheme: urlParts[3] };
                    _this.clearModifiedDataCache();
                    _this.build();
                }
            }
        });
        this.metadataPromise = repositoryPromise;
    }
    MetadataRepositoryService.prototype.clearModifiedDataCache = function () {
        this.modifiedMetaCollection = [];
    };
    MetadataRepositoryService.prototype.getData = function () {
        var _this = this;
        return this.metadataPromise.then(function () {
            return _this.metadataRepository.getData(_this.theme);
        });
    };
    MetadataRepositoryService.prototype.getDataItemByKey = function (key) {
        var _this = this;
        return this.metadataPromise.then(function () {
            return _this.metadataRepository.getDataItemByKey(key, _this.theme);
        });
    };
    MetadataRepositoryService.prototype.updateSingleVariable = function (e, key) {
        var _this = this;
        this.getDataItemByKey(key).then(function (dataItem) {
            if (dataItem.Value === e.value) {
                return;
            }
            dataItem.Value = e.value;
            if (e.previousValue === undefined) {
                return;
            }
            _this.modifiedMetaCollection = _this.modifiedMetaCollection.filter(function (item) { return item.key !== dataItem.Key; });
            _this.modifiedMetaCollection.push({ key: dataItem.Key, value: dataItem.Value });
            _this.build();
        });
    };
    MetadataRepositoryService.prototype.build = function (bootstrapData, bootstrapVersion) {
        var _this = this;
        var isFirstBootstrapBuild = bootstrapVersion !== undefined;
        var currentTheme = this.theme;
        var buildResult = isFirstBootstrapBuild ?
            this.builder.buildThemeBootstrap(currentTheme, bootstrapData, bootstrapVersion) :
            this.builder.buildTheme(currentTheme, false, null, this.modifiedMetaCollection);
        return buildResult.then(function (result) {
            for (var dataKey in result.compiledMetadata) {
                if (result.compiledMetadata.hasOwnProperty(dataKey)) {
                    var item = _this.metadataRepository.getDataItemByKey(dataKey, currentTheme);
                    item.Value = result.compiledMetadata[dataKey];
                }
            }
            if (isFirstBootstrapBuild) {
                for (var dataKey in result.modifyVars) {
                    if (result.modifyVars.hasOwnProperty(dataKey)) {
                        _this.modifiedMetaCollection.push({ key: dataKey, value: result.modifyVars[dataKey] });
                    }
                }
            }
            _this.css.next(result.css);
            return result;
        });
    };
    MetadataRepositoryService.prototype.getBaseParameters = function () {
        var _this = this;
        return this.metadataPromise.then(function () {
            var result = [];
            var themeData = _this.metadataRepository.getData(_this.theme);
            themeData.forEach(function (item) {
                if (devextreme_themebuilder_modules_base_parameters__WEBPACK_IMPORTED_MODULE_5__["indexOf"](item.Key) !== -1) {
                    result.push(item);
                }
            });
            return result;
        });
    };
    MetadataRepositoryService.prototype.getModifiedItems = function () {
        return this.modifiedMetaCollection;
    };
    MetadataRepositoryService.prototype.export = function (outColorScheme, swatch) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.builder.buildTheme(_this.theme, swatch, outColorScheme, _this.modifiedMetaCollection).then(function (result) {
                resolve(result.css);
            }, function (error) {
                reject(error);
            });
        });
    };
    MetadataRepositoryService.prototype.import = function (theme, modifiedData) {
        this.clearModifiedDataCache();
        this.theme = theme;
        this.modifiedMetaCollection = modifiedData;
        return this.build();
    };
    MetadataRepositoryService.prototype.importBootstrap = function (bootstrapData, bootstrapVersion) {
        this.clearModifiedDataCache();
        this.modifiedMetaCollection = [];
        return this.build(bootstrapData, bootstrapVersion);
    };
    MetadataRepositoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _builder_service__WEBPACK_IMPORTED_MODULE_7__["BuilderService"]])
    ], MetadataRepositoryService);
    return MetadataRepositoryService;
}());



/***/ }),

/***/ "./src/app/names.service.ts":
/*!**********************************!*\
  !*** ./src/app/names.service.ts ***!
  \**********************************/
/*! exports provided: NamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamesService", function() { return NamesService; });
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

var NamesService = /** @class */ (function () {
    function NamesService() {
        var _this = this;
        this.ORDER_REGEX = /^(\d+).\s/;
        this.getRealName = function (orderedName) { return orderedName.replace(_this.ORDER_REGEX, ''); };
        this.sortNames = function (name1, name2) {
            var orders = [name1, name2].map(function (value) { return Number.parseInt(value.match(_this.ORDER_REGEX)[1]); });
            return orders[0] - orders[1];
        };
    }
    NamesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NamesService);
    return NamesService;
}());



/***/ }),

/***/ "./src/app/preview/accordion/accordion.component.css":
/*!***********************************************************!*\
  !*** ./src/app/preview/accordion/accordion.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/accordion/accordion.component.html":
/*!************************************************************!*\
  !*** ./src/app/preview/accordion/accordion.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-accordion #accordion height=\"100%\"></dx-accordion>\r\n"

/***/ }),

/***/ "./src/app/preview/accordion/accordion.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/preview/accordion/accordion.component.ts ***!
  \**********************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.widgetGroup = 'accordion';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'items': [
                {
                    'title': 'Jack London (1876-1916)',
                    'icon': 'card',
                    'html': "<p>The Call of the Wild (1903)</p><p>Before Adam (1907)</p>\n                <p>Burning Daylight (1910)</p><p>The Abysmal Brute (1911)</p>"
                },
                {
                    'title': 'Mark Twain (1835-1910)',
                    'icon': 'card',
                    'html': "<p>Screamers (1871)</p><p>Eye Openers (1871)</p>\n                <p>Colonel Sellers (1874)</p><p>Merry Tales (1892)</p>"
                }
            ]
        };
        this.expandedOptions = {
            'items': [
                {
                    'title': 'Jack London (1876-1916)',
                    'icon': 'card',
                    'html': "<p>The Call of the Wild (1903)</p><p>Before Adam (1907)</p>\n                <p>Burning Daylight (1910)</p><p>The Abysmal Brute (1911)</p>"
                },
                {
                    'title': 'Mark Twain (1835-1910)',
                    'icon': 'card',
                    'html': "<p>Screamers (1871)</p><p>Eye Openers (1871)</p>\n                <p>Colonel Sellers (1874)</p><p>Merry Tales (1892)</p>"
                }
            ]
        };
    }
    AccordionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.accordion.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
            _this.accordion.instance.updateDimensions();
        });
    };
    AccordionComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('accordion'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxAccordionComponent"])
    ], AccordionComponent.prototype, "accordion", void 0);
    AccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/preview/accordion/accordion.component.html"),
            styles: [__webpack_require__(/*! ./accordion.component.css */ "./src/app/preview/accordion/accordion.component.css")]
        })
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/preview/buttons/buttons.component.css":
/*!*******************************************************!*\
  !*** ./src/app/preview/buttons/buttons.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .dx-button {\r\n    margin-right: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/preview/buttons/buttons.component.html":
/*!********************************************************!*\
  !*** ./src/app/preview/buttons/buttons.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isExpanded.getValue(); then expandedBlock; else collapsedBlock\"></div>\r\n<ng-template #collapsedBlock>\r\n    <dx-button text=\"Normal\" type=\"normal\"></dx-button>\r\n    <dx-button text=\"Default\" type=\"default\"></dx-button>\r\n    <dx-button text=\"Success\" type=\"success\"></dx-button>\r\n    <dx-button text=\"Danger\" type=\"danger\"></dx-button>\r\n</ng-template>\r\n\r\n<ng-template #expandedBlock>\r\n    expanded block\r\n</ng-template>"

/***/ }),

/***/ "./src/app/preview/buttons/buttons.component.ts":
/*!******************************************************!*\
  !*** ./src/app/preview/buttons/buttons.component.ts ***!
  \******************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.widgetGroup = 'buttons';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/preview/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.css */ "./src/app/preview/buttons/buttons.component.css")]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/preview/datatgrid/datatgrid.component.css":
/*!***********************************************************!*\
  !*** ./src/app/preview/datatgrid/datatgrid.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/datatgrid/datatgrid.component.html":
/*!************************************************************!*\
  !*** ./src/app/preview/datatgrid/datatgrid.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-data-grid #dataGrid height=\"100%\" [dataSource]=\"dataSource\"></dx-data-grid>\r\n"

/***/ }),

/***/ "./src/app/preview/datatgrid/datatgrid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/preview/datatgrid/datatgrid.component.ts ***!
  \**********************************************************/
/*! exports provided: DatatgridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatgridComponent", function() { return DatatgridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatatgridComponent = /** @class */ (function () {
    function DatatgridComponent() {
        this.widgetGroup = 'datagrid';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataSource = [
            {
                'CustomerID': 'VINET',
                'OrderDate': '1996/07/04',
                'Freight': '32.3800',
                'ShipName': 'Vins et alcools Chevalier',
                'ShipCity': 'Reims',
                'ShipCountry': 'France'
            },
            {
                'CustomerID': 'TOMSP',
                'OrderDate': '1996/07/05',
                'Freight': '11.6100',
                'ShipName': 'Toms Spezialitaten',
                'ShipCity': 'Munster',
                'ShipCountry': 'Germany'
            },
            {
                'CustomerID': 'HANAR',
                'OrderDate': '1996/07/08',
                'Freight': '65.8300',
                'ShipName': 'Hanari Carnes',
                'ShipCity': 'Rio de Janeiro',
                'ShipCountry': 'Brazil'
            },
            {
                'CustomerID': 'VICTE',
                'OrderDate': '1996/07/08',
                'Freight': '41.3400',
                'ShipName': 'Victuailles en stock',
                'ShipCity': 'Lyon',
                'ShipCountry': 'France'
            },
            {
                'CustomerID': 'SUPRD',
                'OrderDate': '1996/07/09',
                'Freight': '51.3000',
                'ShipName': 'Supremes delices',
                'ShipCity': 'Charleroi',
                'ShipCountry': 'Belgium'
            },
            {
                'CustomerID': 'HANAR',
                'OrderDate': '1996/07/10',
                'Freight': '58.1700',
                'ShipName': 'Hanari Carnes',
                'ShipCity': 'Rio de Janeiro',
                'ShipCountry': 'Brazil'
            },
            {
                'CustomerID': 'CHOPS',
                'OrderDate': '1996/07/11',
                'Freight': '22.9800',
                'ShipName': 'Chop-suey Chinese',
                'ShipCity': 'Bern',
                'ShipCountry': 'Switzerland'
            },
            {
                'CustomerID': 'RICSU',
                'OrderDate': '1996/07/12',
                'Freight': '148.3300',
                'ShipName': 'Richter Supermarkt',
                'ShipCity': 'Geneve',
                'ShipCountry': 'Switzerland'
            },
            {
                'CustomerID': 'WELLI',
                'OrderDate': '1996/07/15',
                'Freight': '13.9700',
                'ShipName': 'Wellington Importadora',
                'ShipCity': 'Resende',
                'ShipCountry': 'Brazil'
            },
            {
                'CustomerID': 'HILAA',
                'OrderDate': '1996/07/16',
                'Freight': '81.9100',
                'ShipName': 'HILARION-Abastos',
                'ShipCity': 'San Cristobal',
                'ShipCountry': 'Venezuela'
            },
            {
                'CustomerID': 'ERNSH',
                'OrderDate': '1996/07/17',
                'Freight': '140.5100',
                'ShipName': 'Ernst Handel',
                'ShipCity': 'Graz',
                'ShipCountry': 'Austria'
            }
        ];
        this.collapsedOptions = {
            'columnChooser': { 'enabled': false },
            'rowAlternationEnabled': false,
            'showBorders': true,
            'paging': {
                'pageSize': 10
            },
            'filterRow': {
                'visible': false
            },
            'searchPanel': {
                'visible': false
            },
            'groupPanel': {
                'visible': false
            },
            'editing': {
                'allowUpdating': false,
                'allowDeleting': false,
                'mode': 'row'
            },
            'summary': {
                'totalItems': [
                    {
                        'column': undefined,
                        'summaryType': undefined,
                        'displayFormat': undefined
                    }
                ],
                'groupItems': [
                    {
                        'column': undefined,
                        'summaryType': undefined
                    }
                ]
            },
            'hoverStateEnabled': false,
            'allowColumnResizing': false,
            'allowColumnReordering': false,
            'pager': {
                'showPageSizeSelector': true
            },
            'selection': {
                'mode': 'multiple'
            },
            'keyExpr': 'CustomerID',
            'selectedRowKeys': ['TOMSP'],
            'columns': [
                {
                    'dataField': 'CustomerID',
                    'allowFiltering': false
                },
                {
                    'dataField': 'OrderDate',
                    'dataType': 'date',
                    'allowFiltering': false
                },
                'ShipName',
                {
                    'dataField': 'ShipCity',
                    'allowFiltering': false
                },
                {
                    'dataField': 'ShipCountry',
                    'allowFiltering': false
                },
                'Freight'
            ]
        };
        this.expandedOptions = {
            'columnChooser': { 'enabled': true },
            'rowAlternationEnabled': true,
            'filterRow': {
                'visible': true
            },
            'paging': {
                'pageSize': 10
            },
            'pager': {
                'showPageSizeSelector': true
            },
            'searchPanel': {
                'visible': true
            },
            'groupPanel': {
                'visible': true
            },
            'selection': {
                'mode': 'multiple'
            },
            'hoverStateEnabled': true,
            'allowColumnResizing': true,
            'allowColumnReordering': true,
            'editing': {
                'allowUpdating': true,
                'allowDeleting': true,
                'mode': 'batch'
            },
            'keyExpr': 'CustomerID',
            'selectedRowKeys': ['TOMSP'],
            'columns': [
                {
                    'dataField': 'CustomerID',
                    'allowFiltering': false
                },
                {
                    'dataField': 'OrderDate',
                    'dataType': 'date'
                },
                'ShipName',
                {
                    'dataField': 'ShipCity',
                    'groupIndex': 0,
                    'filterOperations': ['startswith', 'contains', '=']
                },
                {
                    'dataField': 'ShipCountry',
                    'filterOperations': false,
                    'selectedFilterOperation': 'startswith'
                },
                'Freight'
            ],
            'summary': {
                'totalItems': [
                    {
                        'column': 'Freight',
                        'summaryType': 'sum',
                        'displayFormat': 'Total: {0}'
                    }
                ],
                'groupItems': [
                    {
                        'column': 'CustomerID',
                        'summaryType': 'count'
                    }
                ]
            }
        };
    }
    DatatgridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.dataGrid.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
            _this.dataGrid.instance.updateDimensions();
        });
    };
    DatatgridComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataGrid'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"])
    ], DatatgridComponent.prototype, "dataGrid", void 0);
    DatatgridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datagrid',
            template: __webpack_require__(/*! ./datatgrid.component.html */ "./src/app/preview/datatgrid/datatgrid.component.html"),
            styles: [__webpack_require__(/*! ./datatgrid.component.css */ "./src/app/preview/datatgrid/datatgrid.component.css")]
        })
    ], DatatgridComponent);
    return DatatgridComponent;
}());



/***/ }),

/***/ "./src/app/preview/editors/editors.component.css":
/*!*******************************************************!*\
  !*** ./src/app/preview/editors/editors.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: inline-block;\r\n}\r\n\r\n:host ::ng-deep .dx-checkbox {\r\n    vertical-align: middle;\r\n    margin-right: 2%;\r\n}\r\n\r\n:host ::ng-deep .dx-texteditor {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 26%;\r\n    margin-right: 2%;\r\n}\r\n\r\n:host ::ng-deep .dx-radiogroup { \r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n"

/***/ }),

/***/ "./src/app/preview/editors/editors.component.html":
/*!********************************************************!*\
  !*** ./src/app/preview/editors/editors.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isExpanded.getValue(); then expandedBlock; else collapsedBlock\"></div>\r\n\r\n<ng-template #collapsedBlock>\r\n    <dx-text-box [value]=\"'Text Box'\"></dx-text-box>\r\n    <dx-tag-box [items]=\"['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\" [value]=\"['Monday']\"></dx-tag-box>\r\n    <dx-select-box [items]=\"['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\"></dx-select-box>\r\n    <dx-check-box [value]=\"true\"></dx-check-box>\r\n    <dx-radio-group [items]=\"['']\" [value]=\"''\"></dx-radio-group>\r\n</ng-template>\r\n\r\n<ng-template #expandedBlock>\r\n    expanded block\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/preview/editors/editors.component.ts":
/*!******************************************************!*\
  !*** ./src/app/preview/editors/editors.component.ts ***!
  \******************************************************/
/*! exports provided: EditorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsComponent", function() { return EditorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EditorsComponent = /** @class */ (function () {
    function EditorsComponent() {
        this.widgetGroup = 'editors';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    EditorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editors',
            template: __webpack_require__(/*! ./editors.component.html */ "./src/app/preview/editors/editors.component.html"),
            styles: [__webpack_require__(/*! ./editors.component.css */ "./src/app/preview/editors/editors.component.css")]
        })
    ], EditorsComponent);
    return EditorsComponent;
}());



/***/ }),

/***/ "./src/app/preview/filterbuilder/filterbuilder.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/preview/filterbuilder/filterbuilder.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/filterbuilder/filterbuilder.component.html":
/*!********************************************************************!*\
  !*** ./src/app/preview/filterbuilder/filterbuilder.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-filter-builder #filterBuilder height=\"100%\"></dx-filter-builder>"

/***/ }),

/***/ "./src/app/preview/filterbuilder/filterbuilder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/preview/filterbuilder/filterbuilder.component.ts ***!
  \******************************************************************/
/*! exports provided: FilterbuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterbuilderComponent", function() { return FilterbuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterbuilderComponent = /** @class */ (function () {
    function FilterbuilderComponent() {
        this.widgetGroup = 'filterbuilder';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'value': [
                ['Name', '=', 'Projector PlusHD'],
                'or',
                [
                    ['Category', '=', 'Monitors'],
                    ['Price', '<', '1300']
                ],
                'or',
                []
            ],
            'fields': [{
                    'dataField': 'ID',
                    'dataType': 'number'
                }, {
                    'dataField': 'Name'
                }, {
                    'dataField': 'Price',
                    'dataType': 'number'
                }, {
                    'dataField': 'Current_Inventory',
                    'dataType': 'number'
                }, {
                    'dataField': 'Category'
                }]
        };
        this.expandedOptions = {
            'value': [
                ['Name', '=', 'Projector PlusHD'],
                'or',
                [
                    ['Category', '=', 'Monitors'],
                    ['Price', '<', '1300']
                ],
                'or',
                [
                    ['Category', '=', 'Televisions'],
                    ['Price', '<', '4000']
                ]
            ],
            'fields': [{
                    'dataField': 'ID',
                    'dataType': 'number'
                }, {
                    'dataField': 'Name'
                }, {
                    'dataField': 'Price',
                    'dataType': 'number'
                }, {
                    'dataField': 'Current_Inventory',
                    'dataType': 'number'
                }, {
                    'dataField': 'Category'
                }]
        };
    }
    FilterbuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.filterBuilder.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
        });
    };
    FilterbuilderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filterBuilder'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFilterBuilderComponent"])
    ], FilterbuilderComponent.prototype, "filterBuilder", void 0);
    FilterbuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filterbuilder',
            template: __webpack_require__(/*! ./filterbuilder.component.html */ "./src/app/preview/filterbuilder/filterbuilder.component.html"),
            styles: [__webpack_require__(/*! ./filterbuilder.component.css */ "./src/app/preview/filterbuilder/filterbuilder.component.css")]
        })
    ], FilterbuilderComponent);
    return FilterbuilderComponent;
}());



/***/ }),

/***/ "./src/app/preview/form/form.component.css":
/*!*************************************************!*\
  !*** ./src/app/preview/form/form.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/form/form.component.html":
/*!**************************************************!*\
  !*** ./src/app/preview/form/form.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-form height=\"100%\" #form></dx-form>\r\n"

/***/ }),

/***/ "./src/app/preview/form/form.component.ts":
/*!************************************************!*\
  !*** ./src/app/preview/form/form.component.ts ***!
  \************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.widgetGroup = 'form';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'labelLocation': 'top',
            'formData': {
                'ID': 1,
                'Full Name': 'John Heart'
            },
            'items': [
                {
                    'itemType': 'group',
                    'caption': 'Personal Data',
                    'items': ['ID', 'Full Name']
                }
            ]
        };
        this.expandedOptions = {
            'labelLocation': 'top',
            'formData': {
                'Address': '351 S Hill St.',
                'City': 'Los Angeles',
                'State': 'CA',
                'FirstName': 'John',
                'LastName': 'Heart'
            },
            'items': [
                {
                    'itemType': 'group',
                    'caption': 'Personal Data',
                    'items': ['FirstName', 'LastName']
                },
                {
                    'itemType': 'group',
                    'colCount': 2,
                    'caption': 'Home Address',
                    'items': ['Address', 'City', 'State']
                }
            ]
        };
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.form.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
            _this.form.instance.updateDimensions();
        });
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"])
    ], FormComponent.prototype, "form", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/preview/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/preview/form/form.component.css")]
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/preview/gallery/gallery.component.css":
/*!*******************************************************!*\
  !*** ./src/app/preview/gallery/gallery.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .dx-gallery-item-image {\r\n    height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/preview/gallery/gallery.component.html":
/*!********************************************************!*\
  !*** ./src/app/preview/gallery/gallery.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-gallery #gallery width=\"100%\" height=\"100%\" [items]=\"galleryItems\"></dx-gallery>\r\n"

/***/ }),

/***/ "./src/app/preview/gallery/gallery.component.ts":
/*!******************************************************!*\
  !*** ./src/app/preview/gallery/gallery.component.ts ***!
  \******************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.widgetGroup = 'gallery';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.galleryItems = [
            'images/person1.png',
            'images/person2.png',
            'images/person3.png',
            'images/person4.png'
        ];
        this.collapsedOptions = {
            'showNavButtons': false,
        };
        this.expandedOptions = {
            'showNavButtons': true,
        };
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.gallery.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
        });
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gallery'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxGalleryComponent"])
    ], GalleryComponent.prototype, "gallery", void 0);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/preview/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/preview/gallery/gallery.component.css")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/preview/index.component.css":
/*!*********************************************!*\
  !*** ./src/app/preview/index.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#preview-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/preview/index.component.html":
/*!**********************************************!*\
  !*** ./src/app/preview/index.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preview-container\" class=\"dx-theme-background-color\" *ngIf=\"isStylesReady\">\r\n    <app-preview *ngIf=\"viewName === 'preview'\"></app-preview>\r\n    <app-wizard *ngIf=\"viewName === 'wizard'\" [theme]=\"themeName\" [themeSize]=\"themeSize\"></app-wizard>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/preview/index.component.ts":
/*!********************************************!*\
  !*** ./src/app/preview/index.component.ts ***!
  \********************************************/
/*! exports provided: PreviewIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewIndexComponent", function() { return PreviewIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreviewIndexComponent = /** @class */ (function () {
    function PreviewIndexComponent(router) {
        this.router = router;
        this.isStylesReady = false;
        this.viewName = this.router.url.split('/')[1];
        this.themeName = this.router.url.split('/')[2];
    }
    PreviewIndexComponent.prototype.receiveMessage = function (e) {
        if (e.data.css) {
            this.addHeadStyles(e.data.css);
            this.themeSize = e.data.themeSize;
        }
    };
    PreviewIndexComponent.prototype.addHeadStyles = function (css) {
        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        var DYNAMIC_STYLES_ID = 'dynamic-styles';
        if (document.getElementById(DYNAMIC_STYLES_ID))
            document.getElementById(DYNAMIC_STYLES_ID).remove();
        style.type = 'text/css';
        style.id = DYNAMIC_STYLES_ID;
        css = css
            .replace(/url\(icons\/dxicons/gi, 'url(content/css/icons/dxicons')
            .replace(/url\(fonts\/Roboto/gi, 'url(content/css/fonts/Roboto');
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
        this.isStylesReady = true;
    };
    PreviewIndexComponent.prototype.ngOnInit = function () {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    };
    PreviewIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/preview/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/preview/index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PreviewIndexComponent);
    return PreviewIndexComponent;
}());



/***/ }),

/***/ "./src/app/preview/list/list.component.css":
/*!*************************************************!*\
  !*** ./src/app/preview/list/list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/list/list.component.html":
/*!**************************************************!*\
  !*** ./src/app/preview/list/list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-list #list height=\"100%\"></dx-list>\r\n"

/***/ }),

/***/ "./src/app/preview/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/preview/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.widgetGroup = 'list';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'grouped': true,
            'editEnabled': true,
            'editConfig': {
                'deleteEnabled': true,
                'selectionEnabled': true
            },
            'selectionMode': 'single',
            'items': [{
                    'key': 'Ship Country: Germany',
                    'items': [
                        {
                            'text': 'Toms Spezialitaten'
                        },
                        {
                            'text': 'Ottilies Kaseladen',
                            'badge': 5
                        }
                    ]
                },
                {
                    'key': 'Ship Country: France',
                    'items': [
                        {
                            'text': 'Vins et alcools Chevalier'
                        },
                        {
                            'text': 'Richter Supermarkt'
                        },
                        {
                            'text': 'Blondel pere et fils'
                        },
                        {
                            'text': 'Que Delicia',
                            'badge': 33
                        },
                        {
                            'text': 'Folk och fa HB',
                            'showChevron': true
                        }
                    ]
                },
                {
                    'key': 'Ship Country: Switzerland',
                    'items': [
                        {
                            'text': 'Hanari Carnes'
                        },
                        {
                            'text': 'Chop-suey Chinese'
                        }
                    ]
                }]
        };
        this.expandedOptions = {
            'grouped': true,
            'editEnabled': true,
            'editConfig': {
                'deleteEnabled': true,
                'selectionEnabled': true
            },
            'selectionMode': 'single',
            'items': [{
                    'key': 'Ship Country: Germany',
                    'items': [
                        {
                            'text': 'Toms Spezialitaten'
                        },
                        {
                            'text': 'Ottilies Kaseladen',
                            'badge': 5
                        }
                    ]
                },
                {
                    'key': 'Ship Country: France',
                    'items': [
                        {
                            'text': 'Vins et alcools Chevalier'
                        },
                        {
                            'text': 'Richter Supermarkt'
                        },
                        {
                            'text': 'Blondel pere et fils'
                        },
                        {
                            'text': 'Que Delicia',
                            'badge': 33
                        },
                        {
                            'text': 'Folk och fa HB'
                        }
                    ]
                },
                {
                    'key': 'Ship Country: Switzerland',
                    'items': [
                        {
                            'text': 'Hanari Carnes'
                        },
                        {
                            'text': 'Chop-suey Chinese'
                        }
                    ]
                }]
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isExpanded.subscribe(function (expanded) {
            _this.list.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
            _this.list.instance.updateDimensions();
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('list'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxListComponent"])
    ], ListComponent.prototype, "list", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/preview/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/preview/list/list.component.css")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/menu/menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/preview/menu/menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/menu/menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/preview/menu/menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-menu #menu></dx-menu>\r\n"

/***/ }),

/***/ "./src/app/preview/menu/menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/preview/menu/menu.component.ts ***!
  \************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.widgetGroup = 'menu';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'showFirstSubmenuMode': 'onHover',
            'animation': {
                'show': false,
                'hide': false
            },
            'items': [
                {
                    'text': '.NET',
                    'items': [
                        {
                            'text': 'Individual Platforms',
                            'items': [
                                { 'text': 'WinForms' },
                                { 'text': 'ASP.NET' },
                                { 'text': 'MVC' },
                                { 'text': 'WPF' },
                                { 'text': 'Silverlight' },
                                { 'text': 'Windows 8 XAML' }
                            ],
                            'selected': true,
                            'selectable': true
                        },
                        {
                            'text': 'Frameworks',
                            'items': [{ 'text': 'eXpressApp Framework' }]
                        },
                        {
                            'text': 'Code-Debug-Refactor',
                            'items': [{ 'text': 'CodeRush for Visual Studio' }]
                        },
                        {
                            'text': 'Mobile (HTML JS)',
                            'items': [{ 'text': 'DevExtreme' }]
                        },
                        {
                            'text': 'Cross-Platform',
                            'items': [
                                { 'text': 'Reporting' },
                                { 'text': 'Document Generation' }
                            ]
                        },
                        {
                            'text': 'Enterprise Tools',
                            'items': [{ 'text': 'Report Server' },
                                { 'text': 'Analytics Dashboard' }]
                        }
                    ]
                },
                {
                    'text': 'HTML JavaScript',
                    'items': [
                        {
                            'text': 'Mobile',
                            'items': [{ 'text': 'Phone JS' }]
                        },
                        {
                            'text': 'HTML 5 JS Widgets',
                            'items': [{ 'text': 'Chart JS' }]
                        }
                    ]
                },
                {
                    'text': 'Testing Tools',
                    'items': [
                        {
                            'text': 'Web Testing',
                            'items': [{ 'text': 'TestCafe' }]
                        }
                    ]
                },
                {
                    'text': 'Delphi & C++Builder',
                    'disabled': true
                }
            ]
        };
        this.expandedOptions = {
            'showFirstSubmenuMode': 'onHover',
            'animation': {
                'show': false,
                'hide': false
            },
            'items': [
                {
                    'text': '.NET',
                    'items': [
                        {
                            'text': 'Individual Platforms',
                            'items': [
                                { 'text': 'WinForms' },
                                { 'text': 'ASP.NET' },
                                { 'text': 'MVC' },
                                { 'text': 'WPF' },
                                { 'text': 'Silverlight' },
                                { 'text': 'Windows 8 XAML' }
                            ],
                            'selected': true,
                            'selectable': true
                        },
                        {
                            'text': 'Frameworks',
                            'items': [{ 'text': 'eXpressApp Framework' }]
                        },
                        {
                            'text': 'Code-Debug-Refactor',
                            'items': [{ 'text': 'CodeRush for Visual Studio' }]
                        },
                        {
                            'text': 'Mobile (HTML JS)',
                            'items': [{ 'text': 'DevExtreme' }]
                        },
                        {
                            'text': 'Cross-Platform',
                            'items': [
                                { 'text': 'Reporting' },
                                { 'text': 'Document Generation' }
                            ]
                        },
                        {
                            'text': 'Enterprise Tools',
                            'items': [{ 'text': 'Report Server' },
                                { 'text': 'Analytics Dashboard' }]
                        }
                    ]
                },
                {
                    'text': 'HTML JavaScript',
                    'items': [
                        {
                            'text': 'Mobile',
                            'items': [{ 'text': 'Phone JS' }]
                        },
                        {
                            'text': 'HTML 5 JS Widgets',
                            'items': [{ 'text': 'Chart JS' }]
                        }
                    ]
                },
                {
                    'text': 'iOS 7',
                    'items': [
                        {
                            'text': 'Native',
                            'items': [{ 'text': 'DataExplorer' }]
                        }
                    ]
                },
                {
                    'text': 'Testing Tools',
                    'items': [
                        {
                            'text': 'Web Testing',
                            'items': [{ 'text': 'TestCafe' }]
                        }
                    ]
                },
                {
                    'text': 'Delphi & C++Builder',
                    'disabled': true
                }
            ]
        };
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.menu.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menu'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxMenuComponent"])
    ], MenuComponent.prototype, "menu", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/preview/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/preview/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/preview/navbar/navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/preview/navbar/navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/navbar/navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/preview/navbar/navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-nav-bar #navBar></dx-nav-bar>\r\n"

/***/ }),

/***/ "./src/app/preview/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/preview/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.widgetGroup = 'navbar';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'dataSource': [
                { 'text': 'user', 'icon': 'user' },
                { 'text': 'find', 'icon': 'find' },
                { 'text': 'favorites', 'icon': 'favorites' },
                { 'text': 'about', 'icon': 'info' },
                { 'text': 'home', 'icon': 'home', 'badge': 77 },
                { 'text': 'URI', 'icon': 'tips', 'disabled': true }
            ]
        };
        this.expandedOptions = {
            'dataSource': [
                { 'text': 'user', 'icon': 'user' },
                { 'text': 'find', 'icon': 'find' },
                { 'text': 'favorites', 'icon': 'favorites' },
                { 'text': 'about', 'icon': 'info' },
                { 'text': 'home', 'icon': 'home', 'badge': 77 },
                { 'text': 'URI', 'icon': 'tips', 'disabled': true }
            ]
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.navBar.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navBar'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxNavBarComponent"])
    ], NavbarComponent.prototype, "navBar", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/preview/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/preview/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/preview/overlays/overlays.component.css":
/*!*********************************************************!*\
  !*** ./src/app/preview/overlays/overlays.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .dx-button {\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/preview/overlays/overlays.component.html":
/*!**********************************************************!*\
  !*** ./src/app/preview/overlays/overlays.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isExpanded.getValue(); then expandedBlock; else collapsedBlock\"></div>\r\n\r\n<ng-template #collapsedBlock>\r\n    <dx-button text=\"Load Panel\" type=\"normal\" (onClick)=\"loadPanel.visible = true\"></dx-button>\r\n    <dx-button text=\"Popup\" type=\"normal\" (onClick)=\"popup.visisble = true\"></dx-button>\r\n    <dx-button id=\"actionsheet-button\" text=\"ActionSheet\" type=\"normal\" (onClick)=\"actionSheet.visible = true\"></dx-button>\r\n    <dx-button id=\"tooltip-button\" text=\"Tooltip\" type=\"normal\" (onClick)=\"tooltip.visible = true\"></dx-button>\r\n    <dx-button text=\"Info toast\" type=\"normal\" (onClick)=\"infoToast.visible = true\"></dx-button>\r\n    <dx-button text=\"Warning toast\" type=\"normal\" (onClick)=\"warningToast.visible = true\"></dx-button>\r\n    <dx-button text=\"Error toast\" type=\"normal\" (onClick)=\"errorToast.visible = true\"></dx-button>\r\n    <dx-button text=\"Success toast\" type=\"normal\" (onClick)=\"successToast.visible = true\"></dx-button>\r\n\r\n    <dx-load-panel #loadPanel [closeOnOutsideClick]=\"true\" [visible]=\"false\"></dx-load-panel>\r\n    <dx-popup #popup title=\"Popup Title\" [visible]=\"false\"></dx-popup>\r\n    <dx-action-sheet #actionSheet target=\"#actionsheet-button\" [dataSource]=\"actionSheetData\" [visible]=\"false\"></dx-action-sheet>\r\n    <dx-tooltip #tooltip  target=\"#tooltip-button\" [visible]=\"false\">\r\n        <div *dxTemplate=\"let data of 'content'\">\r\n            <p>Tooltip content</p>\r\n        </div>\r\n    </dx-tooltip>\r\n    <dx-toast #infoToast message=\"Info toast\" type=\"info\" [displayTime]=\"300\" [visible]=\"false\"></dx-toast>\r\n    <dx-toast #warningToast message=\"Warning toast\" type=\"warning\" [displayTime]=\"300\" [visible]=\"false\"></dx-toast>\r\n    <dx-toast #errorToast message=\"Error toast\" type=\"error\" [displayTime]=\"300\" [visible]=\"false\"></dx-toast>\r\n    <dx-toast #successToast message=\"Success toast\" type=\"success\" [displayTime]=\"300\" [visible]=\"false\"></dx-toast>\r\n</ng-template>\r\n\r\n<ng-template #expandedBlock>\r\n    \r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/preview/overlays/overlays.component.ts":
/*!********************************************************!*\
  !*** ./src/app/preview/overlays/overlays.component.ts ***!
  \********************************************************/
/*! exports provided: OverlaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaysComponent", function() { return OverlaysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OverlaysComponent = /** @class */ (function () {
    function OverlaysComponent() {
        this.widgetGroup = 'overlays';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.actionSheetData = [
            { 'text': 'Command 1' },
            { 'text': 'Command 2' },
            { 'text': 'Command 3' },
            { 'text': 'Command 4' }
        ];
    }
    OverlaysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overlays',
            template: __webpack_require__(/*! ./overlays.component.html */ "./src/app/preview/overlays/overlays.component.html"),
            styles: [__webpack_require__(/*! ./overlays.component.css */ "./src/app/preview/overlays/overlays.component.css")]
        })
    ], OverlaysComponent);
    return OverlaysComponent;
}());



/***/ }),

/***/ "./src/app/preview/pivotgrid/pivotgrid.component.css":
/*!***********************************************************!*\
  !*** ./src/app/preview/pivotgrid/pivotgrid.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/pivotgrid/pivotgrid.component.html":
/*!************************************************************!*\
  !*** ./src/app/preview/pivotgrid/pivotgrid.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-pivot-grid #pivotGrid height=\"100%\"></dx-pivot-grid>\r\n"

/***/ }),

/***/ "./src/app/preview/pivotgrid/pivotgrid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/preview/pivotgrid/pivotgrid.component.ts ***!
  \**********************************************************/
/*! exports provided: PivotgridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotgridComponent", function() { return PivotgridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PivotgridComponent = /** @class */ (function () {
    function PivotgridComponent() {
        this.widgetGroup = 'pivotgrid';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataSourceStore = [
            {
                'OrderID': 10248,
                'CustomerID': 'VINET',
                'EmployeeID': 5,
                'OrderDate': '1996/07/04',
                'RequiredDate': '1996/08/01',
                'ShippedDate': '1996/07/16',
                'ShipVia': 3,
                'Freight': '32.3800',
                'ShipName': 'Vins et alcools Chevalier',
                'ShipAddress': '59 rue de lAbbaye',
                'ShipCity': 'Reims',
                'ShipRegion': null,
                'ShipPostalCode': '51100',
                'ShipCountry': 'France'
            },
            {
                'OrderID': 10249,
                'CustomerID': 'TOMSP',
                'EmployeeID': 6,
                'OrderDate': '1996/07/05',
                'RequiredDate': '1996/08/16',
                'ShippedDate': '1996/07/10',
                'ShipVia': 1,
                'Freight': '11.6100',
                'ShipName': 'Toms Spezialitaten',
                'ShipAddress': 'Luisenstr. 48',
                'ShipCity': 'Munster',
                'ShipRegion': null,
                'ShipPostalCode': '44087',
                'ShipCountry': 'Germany'
            },
            {
                'OrderID': 10250,
                'CustomerID': 'HANAR',
                'EmployeeID': 4,
                'OrderDate': '1996/07/08',
                'RequiredDate': '1996/08/05',
                'ShippedDate': '1996/07/12',
                'ShipVia': 2,
                'Freight': '65.8300',
                'ShipName': 'Hanari Carnes',
                'ShipAddress': 'Rua do Paco, 67',
                'ShipCity': 'Rio de Janeiro',
                'ShipRegion': 'RJ',
                'ShipPostalCode': '05454-876',
                'ShipCountry': 'Brazil'
            },
            {
                'OrderID': 10251,
                'CustomerID': 'VICTE',
                'EmployeeID': 3,
                'OrderDate': '1996/07/08',
                'RequiredDate': '1996/08/05',
                'ShippedDate': '1996/07/15',
                'ShipVia': 1,
                'Freight': '41.3400',
                'ShipName': 'Victuailles en stock',
                'ShipAddress': '2, rue du Commerce',
                'ShipCity': 'Lyon',
                'ShipRegion': null,
                'ShipPostalCode': '69004',
                'ShipCountry': 'France'
            },
            {
                'OrderID': 10252,
                'CustomerID': 'SUPRD',
                'EmployeeID': 4,
                'OrderDate': '1996/07/09',
                'RequiredDate': '1996 / 08 / 06',
                'ShippedDate': '1996 / 07 / 11',
                'ShipVia': 2,
                'Freight': '51.3000',
                'ShipName': 'Supremes delices',
                'ShipAddress': 'Boulevard Tirou, 255',
                'ShipCity': 'Charleroi',
                'ShipRegion': null,
                'ShipPostalCode': 'B-6000',
                'ShipCountry': 'Belgium'
            },
            {
                'OrderID': 10253,
                'CustomerID': 'HANAR',
                'EmployeeID': 3,
                'OrderDate': '1996 / 07 / 10',
                'RequiredDate': '1996 / 07 / 24',
                'ShippedDate': '1996 / 07 / 16',
                'ShipVia': 2,
                'Freight': '58.1700',
                'ShipName': 'Hanari Carnes',
                'ShipAddress': 'Rua do Paco, 67',
                'ShipCity': 'Rio de Janeiro',
                'ShipRegion': 'RJ',
                'ShipPostalCode': '05454-876',
                'ShipCountry': 'Brazil'
            },
            {
                'OrderID': 10254,
                'CustomerID': 'CHOPS',
                'EmployeeID': 5,
                'OrderDate': '1996 / 07 / 11',
                'RequiredDate': '1996 / 08 / 08',
                'ShippedDate': '1996 / 07 / 23',
                'ShipVia': 2,
                'Freight': '22.9800',
                'ShipName': 'Chop - suey Chinese',
                'ShipAddress': 'Hauptstr. 31',
                'ShipCity': 'Bern',
                'ShipRegion': null,
                'ShipPostalCode': '3012',
                'ShipCountry': 'Switzerland'
            },
            {
                'OrderID': 10255,
                'CustomerID': 'RICSU',
                'EmployeeID': 9,
                'OrderDate': '1996/07/12',
                'RequiredDate': '1996 / 08 / 09',
                'ShippedDate': '1996 / 07 / 15',
                'ShipVia': 3,
                'Freight': '148.3300',
                'ShipName': 'Richter Supermarkt',
                'ShipAddress': 'Starenweg 5',
                'ShipCity': 'Geneve',
                'ShipRegion': null,
                'ShipPostalCode': '1204',
                'ShipCountry': 'Switzerland'
            },
            {
                'OrderID': 10256,
                'CustomerID': 'WELLI',
                'EmployeeID': 3,
                'OrderDate': '1996 / 07 / 15',
                'RequiredDate': '1996 / 08 / 12',
                'ShippedDate': '1996 / 07 / 17',
                'ShipVia': 2,
                'Freight': '13.9700',
                'ShipName': 'Wellington Importadora',
                'ShipAddress': 'Rua do Mercado, 12',
                'ShipCity': 'Resende',
                'ShipRegion': 'SP',
                'ShipPostalCode': '08737-363',
                'ShipCountry': 'Brazil'
            },
            {
                'OrderID': 10257,
                'CustomerID': 'HILAA',
                'EmployeeID': 4,
                'OrderDate': '1996 / 07 / 16',
                'RequiredDate': '1996 / 08 / 13',
                'ShippedDate': '1996 / 07 / 22',
                'ShipVia': 3,
                'Freight': '81.9100',
                'ShipName': 'HILARION - Abastos',
                'ShipAddress': 'Carrera 22 con Ave.Carlos Soublette #8-35',
                'ShipCity': 'San Cristobal',
                'ShipRegion': 'Tachira',
                'ShipPostalCode': '5022',
                'ShipCountry': 'Venezuela'
            },
            {
                'OrderID': 10258,
                'CustomerID': 'ERNSH',
                'EmployeeID': 1,
                'OrderDate': '1996/07/17',
                'RequiredDate': '1996 / 08 / 14',
                'ShippedDate': '1996 / 07 / 23',
                'ShipVia': 1,
                'Freight': '140.5100',
                'ShipName': 'Ernst Handel',
                'ShipAddress': 'Kirchgasse 6',
                'ShipCity': 'Graz',
                'ShipRegion': null,
                'ShipPostalCode': '8010',
                'ShipCountry': 'Austria'
            },
            {
                'OrderID': 10259,
                'CustomerID': 'CENTC',
                'EmployeeID': 4,
                'OrderDate': '1996 / 07 / 18',
                'RequiredDate': '1996 / 08 / 15',
                'ShippedDate': '1996 / 07 / 25',
                'ShipVia': 3,
                'Freight': '3.2500',
                'ShipName': 'Centro comercial Moctezuma',
                'ShipAddress': 'Sierras de Granada 9993',
                'ShipCity': 'Mexico D.F.',
                'ShipRegion': null,
                'ShipPostalCode': '05022',
                'ShipCountry': 'Mexico'
            },
            {
                'OrderID': 10260,
                'CustomerID': 'OTTIK',
                'EmployeeID': 4,
                'OrderDate': '1996 / 07 / 19',
                'RequiredDate': '1996 / 08 / 16',
                'ShippedDate': '1996 / 07 / 29',
                'ShipVia': 1,
                'Freight': '55.0900',
                'ShipName': 'Ottilies Kaseladen',
                'ShipAddress': 'Mehrheimerstr. 369',
                'ShipCity': 'Koln',
                'ShipRegion': null,
                'ShipPostalCode': '50739',
                'ShipCountry': 'Germany'
            },
            {
                'OrderID': 10261,
                'CustomerID': 'QUEDE',
                'EmployeeID': 4,
                'OrderDate': '1996/07/19',
                'RequiredDate': '1996 / 08 / 16',
                'ShippedDate': '1996 / 07 / 30',
                'ShipVia': 2,
                'Freight': '3.0500',
                'ShipName': 'Que Delicia',
                'ShipAddress': 'Rua da Panificadora, 12',
                'ShipCity': 'Rio de Janeiro',
                'ShipRegion': 'RJ',
                'ShipPostalCode': '02389 - 673',
                'ShipCountry': 'Brazil'
            },
            {
                'OrderID': 10262,
                'CustomerID': 'RATTC',
                'EmployeeID': 8,
                'OrderDate': '1996 / 07 / 22',
                'RequiredDate': '1996 / 08 / 19',
                'ShippedDate': '1996 / 07 / 25',
                'ShipVia': 3,
                'Freight': '48.2900',
                'ShipName': 'Rattlesnake Canyon Grocery',
                'ShipAddress': '2817 Milton Dr.',
                'ShipCity': 'Albuquerque',
                'ShipRegion': 'NM',
                'ShipPostalCode': '87110',
                'ShipCountry': 'USA'
            }
        ];
        this.collapsedOptions = {
            'dataSource': {
                'store': this.dataSourceStore,
                'fields': [
                    {
                        'dataField': 'OrderDate',
                        'dataType': 'date',
                        'groupName': 'OrderDate',
                        'area': 'column'
                    },
                    {
                        'dataField': 'OrderDate',
                        'groupInterval': 'year',
                        'dataType': 'date',
                        'groupName': 'OrderDate',
                        'groupIndex': 0
                    },
                    {
                        'dataField': 'OrderDate',
                        'groupInterval': 'quarter',
                        'dataType': 'date',
                        'groupName': 'OrderDate',
                        'groupIndex': 0
                    },
                    {
                        'dataField': 'OrderDate',
                        'groupInterval': 'month',
                        'dataType': 'date',
                        'groupName': 'OrderDate',
                        'groupIndex': 0
                    },
                    {
                        'dataField': 'ShipCountry',
                        'dataType': 'string',
                        'area': 'row'
                    },
                    {
                        'dataField': 'ShipCity',
                        'dataType': 'string',
                        'area': 'row'
                    },
                    {
                        'dataField': 'ShipName',
                        'dataType': 'string',
                        'area': 'row'
                    },
                    {
                        'summaryType': 'count',
                        'caption': 'Count',
                        'area': 'data'
                    },
                    {
                        'dataField': 'Freight',
                        'dataType': 'number',
                        'summaryType': 'avg',
                        'caption': 'Avg Freight',
                        'format': {
                            'type': 'fixedPoint',
                            'precision': 2
                        },
                        'area': 'data'
                    }
                ],
            },
            'showBorders': true,
            'allowSorting': true,
            'allowSortingBySummary': true,
            'allowExpandAll': true,
            'allowFiltering': true
        };
        this.expandedOptions = {
            'dataSource': {
                'store': this.dataSourceStore,
                'fields': [
                    {
                        'dataField': 'OrderDate',
                        'dataType': 'date',
                        'groupName': 'OrderDate',
                        'area': 'column'
                    },
                    {
                        'dataField': 'OrderDate',
                        'groupInterval': 'year',
                        'dataType': 'date',
                        'expanded': true,
                        'groupName': 'OrderDate',
                        'groupIndex': 0
                    },
                    {
                        'dataField': 'OrderDate',
                        'groupInterval': 'quarter',
                        'dataType': 'date',
                        'groupName': 'OrderDate',
                        'groupIndex': 0
                    },
                    {
                        'dataField': 'OrderDate',
                        'groupInterval': 'month',
                        'dataType': 'date',
                        'groupName': 'OrderDate',
                        'groupIndex': 0
                    },
                    {
                        'dataField': 'ShipCountry',
                        'dataType': 'string',
                        'area': 'row'
                    },
                    {
                        'dataField': 'ShipCity',
                        'dataType': 'string',
                        'area': 'row'
                    },
                    {
                        'dataField': 'ShipName',
                        'dataType': 'string',
                        'area': 'row'
                    },
                    {
                        'summaryType': 'count',
                        'caption': 'Count',
                        'area': 'data'
                    },
                    {
                        'dataField': 'Freight',
                        'dataType': 'number',
                        'summaryType': 'avg',
                        'caption': 'Avg Freight',
                        'format': {
                            'type': 'fixedPoint',
                            'precision': 2
                        },
                        'area': 'data'
                    }
                ]
            },
            'allowSorting': true,
            'allowSortingBySummary': true,
            'allowExpandAll': true,
            'allowFiltering': true
        };
    }
    PivotgridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.pivotGrid.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
            _this.pivotGrid.instance.updateDimensions();
        });
    };
    PivotgridComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pivotGrid'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPivotGridComponent"])
    ], PivotgridComponent.prototype, "pivotGrid", void 0);
    PivotgridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pivotgrid',
            template: __webpack_require__(/*! ./pivotgrid.component.html */ "./src/app/preview/pivotgrid/pivotgrid.component.html"),
            styles: [__webpack_require__(/*! ./pivotgrid.component.css */ "./src/app/preview/pivotgrid/pivotgrid.component.css")]
        })
    ], PivotgridComponent);
    return PivotgridComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.module.ts":
/*!*******************************************!*\
  !*** ./src/app/preview/preview.module.ts ***!
  \*******************************************/
/*! exports provided: PreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewModule", function() { return PreviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/preview/buttons/buttons.component.ts");
/* harmony import */ var _datatgrid_datatgrid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatgrid/datatgrid.component */ "./src/app/preview/datatgrid/datatgrid.component.ts");
/* harmony import */ var _editors_editors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editors/editors.component */ "./src/app/preview/editors/editors.component.ts");
/* harmony import */ var _filterbuilder_filterbuilder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filterbuilder/filterbuilder.component */ "./src/app/preview/filterbuilder/filterbuilder.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/preview/form/form.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/preview/gallery/gallery.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/preview/list/list.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/preview/accordion/accordion.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/preview/menu/menu.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/preview/navbar/navbar.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/preview/tabs/tabs.component.ts");
/* harmony import */ var _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./treeview/treeview.component */ "./src/app/preview/treeview/treeview.component.ts");
/* harmony import */ var _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overlays/overlays.component */ "./src/app/preview/overlays/overlays.component.ts");
/* harmony import */ var _pivotgrid_pivotgrid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pivotgrid/pivotgrid.component */ "./src/app/preview/pivotgrid/pivotgrid.component.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/preview/progressbar/progressbar.component.ts");
/* harmony import */ var _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scheduler/scheduler.component */ "./src/app/preview/scheduler/scheduler.component.ts");
/* harmony import */ var _scrollview_scrollview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scrollview/scrollview.component */ "./src/app/preview/scrollview/scrollview.component.ts");
/* harmony import */ var _treelist_treelist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./treelist/treelist.component */ "./src/app/preview/treelist/treelist.component.ts");
/* harmony import */ var _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sliders/sliders.component */ "./src/app/preview/sliders/sliders.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/preview/wizard/wizard.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var PreviewModule = /** @class */ (function () {
    function PreviewModule() {
    }
    PreviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DevExtremeModule"]
            ],
            declarations: [
                _datatgrid_datatgrid_component__WEBPACK_IMPORTED_MODULE_4__["DatatgridComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                _editors_editors_component__WEBPACK_IMPORTED_MODULE_5__["EditorsComponent"],
                _filterbuilder_filterbuilder_component__WEBPACK_IMPORTED_MODULE_6__["FilterbuilderComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_10__["AccordionComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"],
                _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_14__["TreeviewComponent"],
                _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_15__["OverlaysComponent"],
                _pivotgrid_pivotgrid_component__WEBPACK_IMPORTED_MODULE_16__["PivotgridComponent"],
                _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_17__["ProgressbarComponent"],
                _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_18__["SchedulerComponent"],
                _scrollview_scrollview_component__WEBPACK_IMPORTED_MODULE_19__["ScrollviewComponent"],
                _treelist_treelist_component__WEBPACK_IMPORTED_MODULE_20__["TreelistComponent"],
                _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_21__["SlidersComponent"],
                _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_22__["WizardComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_23__["PreviewComponent"]
            ],
            exports: [
                _datatgrid_datatgrid_component__WEBPACK_IMPORTED_MODULE_4__["DatatgridComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                _editors_editors_component__WEBPACK_IMPORTED_MODULE_5__["EditorsComponent"],
                _filterbuilder_filterbuilder_component__WEBPACK_IMPORTED_MODULE_6__["FilterbuilderComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_10__["AccordionComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"],
                _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_14__["TreeviewComponent"],
                _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_15__["OverlaysComponent"],
                _pivotgrid_pivotgrid_component__WEBPACK_IMPORTED_MODULE_16__["PivotgridComponent"],
                _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_17__["ProgressbarComponent"],
                _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_18__["SchedulerComponent"],
                _scrollview_scrollview_component__WEBPACK_IMPORTED_MODULE_19__["ScrollviewComponent"],
                _treelist_treelist_component__WEBPACK_IMPORTED_MODULE_20__["TreelistComponent"],
                _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_21__["SlidersComponent"],
                _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_22__["WizardComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_23__["PreviewComponent"]
            ]
        })
    ], PreviewModule);
    return PreviewModule;
}());



/***/ }),

/***/ "./src/app/preview/preview/preview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/preview/preview/preview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n}\r\n\r\n.flex-item {\r\n    flex:  1 1 800px;\r\n    max-width: 800px;\r\n    height: 320px;\r\n    padding: 10px 40px;\r\n    transition: all .3s ease-in;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.group .flex-item.expanded,\r\n.flex-item.expanded {\r\n    flex: 1 1 100%;\r\n    height: 640px;\r\n    border: 1px solid #999999;\r\n    max-width: 100%;\r\n    padding: 20px;\r\n}\r\n\r\n.flex-item.group {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.group .flex-item {\r\n    height: 140px;\r\n    padding: 10px 0;\r\n}\r\n\r\n.group.expanded {\r\n    height: 820px;\r\n    border: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.group.expanded  .flex-item {\r\n    max-width: 100%;\r\n    flex: 1 1 100%;\r\n    padding: 10px 40px;\r\n}\r\n\r\n.flex-label {\r\n    line-height: 20px;\r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    color: #999999;\r\n}\r\n\r\n.flex-value, .flex-value > * {\r\n    height: 210px;\r\n}\r\n\r\n.group .flex-value, .group .flex-value > * {\r\n    height: auto;\r\n}\r\n\r\n.expanded > .flex-value, .expanded > .flex-value > * {\r\n    height: 570px;\r\n}\r\n\r\n@media (max-width: 1400px) { \r\n    .flex-item {\r\n        flex: 1 1 100%; \r\n        max-width: 100%;\r\n        padding: 10px 20px; \r\n    }\r\n\r\n    .group .flex-item.expanded {\r\n        padding: 10px 0; \r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/preview/preview/preview.component.html":
/*!********************************************************!*\
  !*** ./src/app/preview/preview/preview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-scroll-view #scrollView>\r\n    <div class=\"flex-container\">\r\n        <div class=\"flex-item group\">\r\n            <div class=\"flex-item\">\r\n                <div class=\"flex-label\">EDITORS</div>\r\n                <div class=\"flex-value\">\r\n                    <app-editors #widget></app-editors>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex-item\">\r\n                <div class=\"flex-label\">BUTTONS</div>\r\n                <div class=\"flex-value\">\r\n                    <app-buttons #widget></app-buttons>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">DATAGRID</div>\r\n            <div class=\"flex-value\">\r\n                <app-datagrid #widget></app-datagrid>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">PIVOTGRID</div>\r\n            <div class=\"flex-value\">\r\n                <app-pivotgrid #widget></app-pivotgrid>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">TREELIST</div>\r\n            <div class=\"flex-value\">\r\n                <app-treelist #widget></app-treelist>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">SCHEDULER</div>\r\n            <div class=\"flex-value\">\r\n                <app-scheduler #widget></app-scheduler>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">LIST</div>\r\n            <div class=\"flex-value\">\r\n                <app-list #widget></app-list>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">FORM</div>\r\n            <div class=\"flex-value\">\r\n                <app-form #widget></app-form>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">FILTER BUILDER</div>\r\n            <div class=\"flex-value\">\r\n                <app-filterbuilder #widget></app-filterbuilder>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item group\">\r\n            <div class=\"flex-item\">\r\n                <div class=\"flex-label\">OVERLAYS</div>\r\n                <div class=\"flex-value\">\r\n                    <app-overlays #widget></app-overlays>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex-item\">\r\n                <div class=\"flex-label\">MENU</div>\r\n                <div class=\"flex-value\">\r\n                    <app-menu #widget></app-menu>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">TREEVIEW</div>\r\n            <div class=\"flex-value\">\r\n                <app-treeview #widget></app-treeview>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">ACCORDION</div>\r\n            <div class=\"flex-value\">\r\n                <app-accordion #widget></app-accordion>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n            <div class=\"flex-label\">GALLERY</div>\r\n            <div class=\"flex-value\">\r\n                <app-gallery #widget></app-gallery>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item group\">\r\n            <div class=\"flex-item\">\r\n                <div class=\"flex-label\">NAVBAR</div>\r\n                <div class=\"flex-value\">\r\n                    <app-navbar #widget></app-navbar>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex-item\">\r\n                <div class=\"flex-label\">TABS</div>\r\n                <div class=\"flex-value\">\r\n                    <app-tabs #widget></app-tabs>\r\n                </div>\r\n            </div>\r\n        </div> \r\n        <div class=\"flex-item group\">\r\n            <div class=\"flex-item\">\r\n                <div class=\"flex-label\">PROGRESS BAR</div>\r\n                <div class=\"flex-value\">\r\n                    <app-progressbars #widget></app-progressbars>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex-item\">\r\n                <div class=\"flex-label\">SLIDERS</div>\r\n                <div class=\"flex-value\">\r\n                    <app-sliders #widget></app-sliders>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-item\">\r\n                <div class=\"flex-label\">SCROLL VIEW</div>\r\n                <div class=\"flex-value\">\r\n                    <app-scrollview #widget></app-scrollview>\r\n                </div>\r\n        </div>\r\n    </div>    \r\n</dx-scroll-view>\r\n"

/***/ }),

/***/ "./src/app/preview/preview/preview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/preview/preview/preview.component.ts ***!
  \******************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
    }
    PreviewComponent.prototype.receiveMessage = function (e) {
        if (e.data.widget) {
            this.createPreviewContent(e.data.widget);
        }
    };
    PreviewComponent.prototype.createPreviewContent = function (widget) {
        var _this = this;
        var EXPAND_CLASS_NAME = 'expanded';
        var flexContainers = document.getElementsByClassName('flex-item');
        var scrollableContainer = this.scrollView.instance.element().querySelector('.dx-scrollable-container');
        for (var i = 0; i < flexContainers.length; i++) {
            flexContainers[i].classList.remove(EXPAND_CLASS_NAME);
        }
        this.widgetElements.forEach(function (widgetEl) {
            widgetEl.isExpanded.next(widgetEl.widgetGroup === widget);
        });
        setTimeout(function () {
            if (widget === 'base.common' || widget === 'base.typography') {
                scrollableContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            var widgetContainer = document.getElementsByTagName('app-' + widget.replace('navigations.', ''));
            var flexParentContainer = widgetContainer[0].parentElement.parentElement;
            var scrollTop = 30;
            if (flexParentContainer.parentElement.classList.contains('group')) {
                flexParentContainer.parentElement.classList.add(EXPAND_CLASS_NAME);
            }
            flexParentContainer.classList.add(EXPAND_CLASS_NAME);
            setTimeout(function () {
                scrollableContainer.scrollTo({
                    top: flexParentContainer.offsetTop - scrollTop,
                    behavior: 'smooth'
                });
                _this.widgetElements.forEach(function (widgetEl) {
                    widgetEl.isExpanded.next(widgetEl.widgetGroup === widget);
                });
            }, 600);
        }, 400);
    };
    PreviewComponent.prototype.ngOnInit = function () {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('widget'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PreviewComponent.prototype, "widgetElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollView'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxScrollViewComponent"])
    ], PreviewComponent.prototype, "scrollView", void 0);
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview/preview.component.css")]
        })
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/preview/progressbar/progressbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/preview/progressbar/progressbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/progressbar/progressbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/preview/progressbar/progressbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"40\"></dx-progress-bar>\r\n"

/***/ }),

/***/ "./src/app/preview/progressbar/progressbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/preview/progressbar/progressbar.component.ts ***!
  \**************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent() {
        this.widgetGroup = 'progressbars';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    ProgressbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progressbars',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/preview/progressbar/progressbar.component.html"),
            styles: [__webpack_require__(/*! ./progressbar.component.css */ "./src/app/preview/progressbar/progressbar.component.css")]
        })
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/preview/scheduler/scheduler.component.css":
/*!***********************************************************!*\
  !*** ./src/app/preview/scheduler/scheduler.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/scheduler/scheduler.component.html":
/*!************************************************************!*\
  !*** ./src/app/preview/scheduler/scheduler.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-scheduler #scheduler height=\"100%\"></dx-scheduler>\r\n"

/***/ }),

/***/ "./src/app/preview/scheduler/scheduler.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/preview/scheduler/scheduler.component.ts ***!
  \**********************************************************/
/*! exports provided: SchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerComponent", function() { return SchedulerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedulerComponent = /** @class */ (function () {
    function SchedulerComponent() {
        this.widgetGroup = 'scheduler';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'views': ['day'],
            'currentView': 'day',
            'currentDate': 1433106000000,
            'firstDayOfWeek': 1,
            'startDayHour': 2,
            'endDayHour': 11,
            'dataSource': [
                {
                    'startDate': 1433113200000,
                    'endDate': 1433115000000,
                    'text': 'The first appointment'
                },
                {
                    'startDate': 1433296800000,
                    'endDate': 1433298600000,
                    'text': 'The second appointment'
                }
            ]
        };
        this.expandedOptions = {
            'views': ['month', 'week', 'day'],
            'currentDate': 1433106000000,
            'currentView': 'week',
            'firstDayOfWeek': 1,
            'startDayHour': 2,
            'endDayHour': 11,
            'dataSource': [
                {
                    'startDate': 1433113200000,
                    'endDate': 1433115000000,
                    'text': 'The first appointment'
                },
                {
                    'startDate': 1433296800000,
                    'endDate': 1433298600000,
                    'text': 'The second appointment'
                }
            ]
        };
    }
    SchedulerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.scheduler.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
        });
    };
    SchedulerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scheduler'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxSchedulerComponent"])
    ], SchedulerComponent.prototype, "scheduler", void 0);
    SchedulerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scheduler',
            template: __webpack_require__(/*! ./scheduler.component.html */ "./src/app/preview/scheduler/scheduler.component.html"),
            styles: [__webpack_require__(/*! ./scheduler.component.css */ "./src/app/preview/scheduler/scheduler.component.css")]
        })
    ], SchedulerComponent);
    return SchedulerComponent;
}());



/***/ }),

/***/ "./src/app/preview/scrollview/scrollview.component.css":
/*!*************************************************************!*\
  !*** ./src/app/preview/scrollview/scrollview.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/scrollview/scrollview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/preview/scrollview/scrollview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-scroll-view #scrollView height=\"100%\" width=\"100%\">\r\n    <div id=\"content\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n    </div>\r\n</dx-scroll-view>\r\n"

/***/ }),

/***/ "./src/app/preview/scrollview/scrollview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/preview/scrollview/scrollview.component.ts ***!
  \************************************************************/
/*! exports provided: ScrollviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollviewComponent", function() { return ScrollviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrollviewComponent = /** @class */ (function () {
    function ScrollviewComponent() {
        this.widgetGroup = 'scrollview';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            bounceEnabled: 'true',
            direction: 'both'
        };
        this.expandedOptions = {};
    }
    ScrollviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.scrollView.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
        });
    };
    ScrollviewComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollView'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewComponent"])
    ], ScrollviewComponent.prototype, "scrollView", void 0);
    ScrollviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrollview',
            template: __webpack_require__(/*! ./scrollview.component.html */ "./src/app/preview/scrollview/scrollview.component.html"),
            styles: [__webpack_require__(/*! ./scrollview.component.css */ "./src/app/preview/scrollview/scrollview.component.css")]
        })
    ], ScrollviewComponent);
    return ScrollviewComponent;
}());



/***/ }),

/***/ "./src/app/preview/sliders/sliders.component.css":
/*!*******************************************************!*\
  !*** ./src/app/preview/sliders/sliders.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/sliders/sliders.component.html":
/*!********************************************************!*\
  !*** ./src/app/preview/sliders/sliders.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-slider [min]=\"0\" [max]=\"100\" [value]=\"35\"></dx-slider>\r\n"

/***/ }),

/***/ "./src/app/preview/sliders/sliders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/preview/sliders/sliders.component.ts ***!
  \******************************************************/
/*! exports provided: SlidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersComponent", function() { return SlidersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SlidersComponent = /** @class */ (function () {
    function SlidersComponent() {
        this.widgetGroup = 'sliders';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    SlidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sliders',
            template: __webpack_require__(/*! ./sliders.component.html */ "./src/app/preview/sliders/sliders.component.html"),
            styles: [__webpack_require__(/*! ./sliders.component.css */ "./src/app/preview/sliders/sliders.component.css")]
        })
    ], SlidersComponent);
    return SlidersComponent;
}());



/***/ }),

/***/ "./src/app/preview/tabs/tabs.component.css":
/*!*************************************************!*\
  !*** ./src/app/preview/tabs/tabs.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/tabs/tabs.component.html":
/*!**************************************************!*\
  !*** ./src/app/preview/tabs/tabs.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-tabs #tabs></dx-tabs>\r\n"

/***/ }),

/***/ "./src/app/preview/tabs/tabs.component.ts":
/*!************************************************!*\
  !*** ./src/app/preview/tabs/tabs.component.ts ***!
  \************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
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
        this.widgetGroup = 'tabs';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'dataSource': [
                { 'text': 'user', 'icon': 'user' },
                { 'text': 'comment', 'icon': 'comment' },
                { 'text': 'find', 'icon': 'find' },
                { 'text': 'disabled', 'disabled': true }
            ]
        };
        this.expandedOptions = {
            'dataSource': [
                { 'text': 'user', 'icon': 'user' },
                { 'text': 'comment', 'icon': 'comment' },
                { 'text': 'find', 'icon': 'find' },
                { 'text': 'disabled', 'disabled': true }
            ]
        };
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.tabs.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
        });
    };
    TabsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabs'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTabsComponent"])
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/preview/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/preview/tabs/tabs.component.css")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/preview/treelist/treelist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/preview/treelist/treelist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/treelist/treelist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/preview/treelist/treelist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-tree-list #treeList height=\"100%\" keyExpr=\"ID\" parentIdExpr=\"Head_ID\" [dataSource]=\"dataSource\"></dx-tree-list>\r\n"

/***/ }),

/***/ "./src/app/preview/treelist/treelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/preview/treelist/treelist.component.ts ***!
  \********************************************************/
/*! exports provided: TreelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreelistComponent", function() { return TreelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreelistComponent = /** @class */ (function () {
    function TreelistComponent() {
        this.widgetGroup = 'treelist';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataSource = [
            {
                'ID': 1,
                'Head_ID': 0,
                'Full_Name': 'John Heart',
                'Prefix': 'Mr.',
                'Title': 'CEO',
                'City': 'Los Angeles',
                'Email': 'jheart@dx-email.com',
                'Skype': 'jheart_DX_skype',
                'Mobile_Phone': '(213) 555-9392',
                'Birth_Date': '1964-03-16',
                'Hire_Date': '1995-01-15'
            },
            {
                'ID': 2,
                'Head_ID': 1,
                'Full_Name': 'Samantha Bright',
                'Prefix': 'Dr.',
                'Title': 'COO',
                'City': 'Los Angeles',
                'Email': 'samanthab@dx-email.com',
                'Skype': 'samanthab_DX_skype',
                'Mobile_Phone': '(213) 555-2858',
                'Birth_Date': '1966-05-02',
                'Hire_Date': '2004-05-24'
            },
            {
                'ID': 3,
                'Head_ID': 1,
                'Full_Name': 'Arthur Miller',
                'Prefix': 'Mr.',
                'Title': 'CTO',
                'City': 'Los Angeles',
                'Email': 'arthurm@dx-email.com',
                'Skype': 'arthurm_DX_skype',
                'Mobile_Phone': '(310) 555-8583',
                'Birth_Date': '1972-07-11',
                'Hire_Date': '2007-12-18'
            },
            {
                'ID': 4,
                'Head_ID': 1,
                'Full_Name': 'Robert Reagan',
                'Prefix': 'Mr.',
                'Title': 'CMO',
                'City': 'Pasadena',
                'Email': 'robertr@dx-email.com',
                'Skype': 'robertr_DX_skype',
                'Mobile_Phone': '(818) 555-2387',
                'Birth_Date': '1974-09-07',
                'Hire_Date': '2002-11-08'
            },
            {
                'ID': 5,
                'Head_ID': 1,
                'Full_Name': 'Greta Sims',
                'Prefix': 'Ms.',
                'Title': 'HR Manager',
                'City': 'Alhambra',
                'Email': 'gretas@dx-email.com',
                'Skype': 'gretas_DX_skype',
                'Mobile_Phone': '(818) 555-6546',
                'Birth_Date': '1977-11-22',
                'Hire_Date': '1998-04-23'
            },
            {
                'ID': 6,
                'Head_ID': 3,
                'Full_Name': 'Brett Wade',
                'Prefix': 'Mr.',
                'Title': 'IT Manager',
                'City': 'San Marino',
                'Email': 'brettw@dx-email.com',
                'Skype': 'brettw_DX_skype',
                'Mobile_Phone': '(626) 555-0358',
                'Birth_Date': '1968-12-01',
                'Hire_Date': '2009-03-06'
            },
            {
                'ID': 7,
                'Head_ID': 5,
                'Full_Name': 'Sandra Johnson',
                'Prefix': 'Mrs.',
                'Title': 'Controller',
                'City': 'Long Beach',
                'Email': 'sandraj@dx-email.com',
                'Skype': 'sandraj_DX_skype',
                'Mobile_Phone': '(562) 555-2082',
                'Birth_Date': '1974-11-15',
                'Hire_Date': '2005-05-11'
            },
            {
                'ID': 8,
                'Head_ID': 4,
                'Full_Name': 'Ed Holmes',
                'Prefix': 'Dr.',
                'Title': 'Sales Manager',
                'City': 'Malibu',
                'Email': 'edwardh@dx-email.com',
                'Skype': 'edwardh_DX_skype',
                'Mobile_Phone': '(310) 555-1288',
                'Birth_Date': '1973-07-14',
                'Hire_Date': '2005-06-19'
            },
            {
                'ID': 9,
                'Head_ID': 3,
                'Full_Name': 'Barb Banks',
                'Prefix': 'Mrs.',
                'Title': 'Support Manager',
                'City': 'Pacific Palisades',
                'Email': 'barbarab@dx-email.com',
                'Skype': 'barbarab_DX_skype',
                'Mobile_Phone': '(310) 555-3355',
                'Birth_Date': '1979-04-14',
                'Hire_Date': '2002-08-07'
            },
            {
                'ID': 10,
                'Head_ID': 2,
                'Full_Name': 'Kevin Carter',
                'Prefix': 'Mr.',
                'Title': 'Shipping Manager',
                'City': 'Los Angeles',
                'Email': 'kevinc@dx-email.com',
                'Skype': 'kevinc_DX_skype',
                'Mobile_Phone': '(213) 555-2840',
                'Birth_Date': '1978-01-09',
                'Hire_Date': '2009-08-11'
            },
            {
                'ID': 11,
                'Head_ID': 5,
                'Full_Name': 'Cindy Stanwick',
                'Prefix': 'Ms.',
                'Title': 'HR Assistant',
                'City': 'Glendale',
                'Email': 'cindys@dx-email.com',
                'Skype': 'cindys_DX_skype',
                'Mobile_Phone': '(818) 555-6655',
                'Birth_Date': '1985-06-05',
                'Hire_Date': '2008-03-24'
            },
            {
                'ID': 12,
                'Head_ID': 8,
                'Full_Name': 'Sammy Hill',
                'Prefix': 'Mr.',
                'Title': 'Sales Assistant',
                'City': 'Pasadena',
                'Email': 'sammyh@dx-email.com',
                'Skype': 'sammyh_DX_skype',
                'Mobile_Phone': '(626) 555-7292',
                'Birth_Date': '1984-02-17',
                'Hire_Date': '2012-02-01'
            },
            {
                'ID': 13,
                'Head_ID': 10,
                'Full_Name': 'Davey Jones',
                'Prefix': 'Mr.',
                'Title': 'Shipping Assistant',
                'City': 'Pasadena',
                'Email': 'davidj@dx-email.com',
                'Skype': 'davidj_DX_skype',
                'Mobile_Phone': '(626) 555-0281',
                'Birth_Date': '1983-03-06',
                'Hire_Date': '2011-04-24'
            },
            {
                'ID': 14,
                'Head_ID': 10,
                'Full_Name': 'Victor Norris',
                'Prefix': 'Mr.',
                'Title': 'Shipping Assistant',
                'City': 'Los Angeles',
                'Email': 'victorn@dx-email.com',
                'Skype': 'victorn_DX_skype',
                'Mobile_Phone': '(213) 555-9278',
                'Birth_Date': '1986-07-23',
                'Hire_Date': '2012-07-23'
            },
            {
                'ID': 15,
                'Head_ID': 10,
                'Full_Name': 'Mary Stern',
                'Prefix': 'Ms.',
                'Title': 'Shipping Assistant',
                'City': 'Glendale',
                'Email': 'marys@dx-email.com',
                'Skype': 'marys_DX_skype',
                'Mobile_Phone': '(818) 555-7857',
                'Birth_Date': '1982-04-08',
                'Hire_Date': '2012-08-12'
            },
            {
                'ID': 16,
                'Head_ID': 10,
                'Full_Name': 'Robin Cosworth',
                'Prefix': 'Mrs.',
                'Title': 'Shipping Assistant',
                'City': 'Los Angeles',
                'Email': 'robinc@dx-email.com',
                'Skype': 'robinc_DX_skype',
                'Mobile_Phone': '(818) 555-0942',
                'Birth_Date': '1981-06-12',
                'Hire_Date': '2012-09-01'
            },
            {
                'ID': 17,
                'Head_ID': 9,
                'Full_Name': 'Kelly Rodriguez',
                'Prefix': 'Ms.',
                'Title': 'Support Assistant',
                'City': 'Glendale',
                'Email': 'kellyr@dx-email.com',
                'Skype': 'kellyr_DX_skype',
                'Mobile_Phone': '(818) 555-9248',
                'Birth_Date': '1988-05-11',
                'Hire_Date': '2012-10-13'
            },
            {
                'ID': 18,
                'Head_ID': 9,
                'Full_Name': 'James Anderson',
                'Prefix': 'Mr.',
                'Title': 'Support Assistant',
                'City': 'Los Angeles',
                'Email': 'jamesa@dx-email.com',
                'Skype': 'jamesa_DX_skype',
                'Mobile_Phone': '(323) 555-4702',
                'Birth_Date': '1987-01-29',
                'Hire_Date': '2012-10-18'
            },
            {
                'ID': 19,
                'Head_ID': 9,
                'Full_Name': 'Antony Remmen',
                'Prefix': 'Mr.',
                'Title': 'Support Assistant',
                'City': 'San Pedro',
                'Email': 'anthonyr@dx-email.com',
                'Skype': 'anthonyr_DX_skype',
                'Mobile_Phone': '(310) 555-6625',
                'Birth_Date': '1986-02-19',
                'Hire_Date': '2013-01-19'
            },
            {
                'ID': 20,
                'Head_ID': 8,
                'Full_Name': 'Olivia Peyton',
                'Prefix': 'Mrs.',
                'Title': 'Sales Assistant',
                'City': 'San Pedro',
                'Email': 'oliviap@dx-email.com',
                'Skype': 'oliviap_DX_skype',
                'Mobile_Phone': '(310) 555-2728',
                'Birth_Date': '1981-06-03',
                'Hire_Date': '2012-05-14'
            },
            {
                'ID': 21,
                'Head_ID': 6,
                'Full_Name': 'Taylor Riley',
                'Prefix': 'Mr.',
                'Title': 'Network Admin',
                'City': 'West Hollywood',
                'Email': 'taylorr@dx-email.com',
                'Skype': 'taylorr_DX_skype',
                'Mobile_Phone': '(310) 555-7276',
                'Birth_Date': '1982-08-14',
                'Hire_Date': '2012-04-14'
            },
            {
                'ID': 22,
                'Head_ID': 6,
                'Full_Name': 'Amelia Harper',
                'Prefix': 'Mrs.',
                'Title': 'Network Admin',
                'City': 'Los Angeles',
                'Email': 'ameliah@dx-email.com',
                'Skype': 'ameliah_DX_skype',
                'Mobile_Phone': '(213) 555-4276',
                'Birth_Date': '1983-11-19',
                'Hire_Date': '2011-02-10'
            },
            {
                'ID': 23,
                'Head_ID': 6,
                'Full_Name': 'Wally Hobbs',
                'Prefix': 'Mr.',
                'Title': 'Programmer',
                'City': 'Chatsworth',
                'Email': 'wallyh@dx-email.com',
                'Skype': 'wallyh_DX_skype',
                'Mobile_Phone': '(818) 555-8872',
                'Birth_Date': '1984-12-24',
                'Hire_Date': '2011-02-17'
            },
            {
                'ID': 24,
                'Head_ID': 6,
                'Full_Name': 'Brad Jameson',
                'Prefix': 'Mr.',
                'Title': 'Programmer',
                'City': 'San Fernando',
                'Email': 'bradleyj@dx-email.com',
                'Skype': 'bradleyj_DX_skype',
                'Mobile_Phone': '(818) 555-4646',
                'Birth_Date': '1988-10-12',
                'Hire_Date': '2011-03-02'
            },
            {
                'ID': 25,
                'Head_ID': 6,
                'Full_Name': 'Karen Goodson',
                'Prefix': 'Miss',
                'Title': 'Programmer',
                'City': 'South Pasadena',
                'Email': 'kareng@dx-email.com',
                'Skype': 'kareng_DX_skype',
                'Mobile_Phone': '(626) 555-0908',
                'Birth_Date': '1987-04-26',
                'Hire_Date': '2011-03-14'
            },
            {
                'ID': 26,
                'Head_ID': 5,
                'Full_Name': 'Marcus Orbison',
                'Prefix': 'Mr.',
                'Title': 'Travel Coordinator',
                'City': 'Los Angeles',
                'Email': 'marcuso@dx-email.com',
                'Skype': 'marcuso_DX_skype',
                'Mobile_Phone': '(213) 555-7098',
                'Birth_Date': '1982-03-02',
                'Hire_Date': '2005-05-19'
            },
            {
                'ID': 27,
                'Head_ID': 5,
                'Full_Name': 'Sandy Bright',
                'Prefix': 'Ms.',
                'Title': 'Benefits Coordinator',
                'City': 'Tujunga',
                'Email': 'sandrab@dx-email.com',
                'Skype': 'sandrab_DX_skype',
                'Mobile_Phone': '(818) 555-0524',
                'Birth_Date': '1983-09-11',
                'Hire_Date': '2005-06-04'
            },
            {
                'ID': 28,
                'Head_ID': 6,
                'Full_Name': 'Morgan Kennedy',
                'Prefix': 'Mrs.',
                'Title': 'Graphic Designer',
                'City': 'San Fernando Valley',
                'Email': 'morgank@dx-email.com',
                'Skype': 'morgank_DX_skype',
                'Mobile_Phone': '(818) 555-8238',
                'Birth_Date': '1984-07-17',
                'Hire_Date': '2012-01-11'
            },
            {
                'ID': 29,
                'Head_ID': 28,
                'Full_Name': 'Violet Bailey',
                'Prefix': 'Ms.',
                'Title': 'Jr Graphic Designer',
                'City': 'La Canada',
                'Email': 'violetb@dx-email.com',
                'Skype': 'violetb_DX_skype',
                'Mobile_Phone': '(818) 555-2478',
                'Birth_Date': '1985-06-10',
                'Hire_Date': '2012-01-19'
            },
            {
                'ID': 30,
                'Head_ID': 5,
                'Full_Name': 'Ken Samuelson',
                'Prefix': 'Dr.',
                'Title': 'Ombudsman',
                'City': 'Santa Fe Springs',
                'Email': 'kents@dx-email.com',
                'Skype': 'kents_DX_skype',
                'Mobile_Phone': '(562) 555-9282',
                'Birth_Date': '1972-09-11',
                'Hire_Date': '2009-04-22'
            }
        ];
        this.collapsedOptions = {
            'expandedRowKeys': [1],
            'selectedRowKeys': [2],
            'columnAutoWidth': true,
            'columnChooser': { 'enabled': false },
            'rowAlternationEnabled': false,
            'filterRow': {
                'visible': false
            },
            'searchPanel': {
                'visible': false
            },
            'selection': {
                'mode': 'multiple'
            },
            'showBorders': true,
            'hoverStateEnabled': false,
            'allowColumnResizing': false,
            'allowColumnReordering': false,
            'editing': {
                'allowUpdating': false,
                'allowDeleting': false,
                'mode': 'row'
            },
            'columns': [
                {
                    'dataField': 'Title',
                    'caption': 'Position'
                },
                'Full_Name',
                'City',
                {
                    'dataField': 'Hire_Date',
                    'dataType': 'date'
                }
            ]
        };
        this.expandedOptions = {
            'columnChooser': { 'enabled': true },
            'rowAlternationEnabled': true,
            'selectedRowKeys': [2],
            'expandedRowKeys': [1, 2, 5],
            'columnAutoWidth': true,
            'filterRow': {
                'visible': true
            },
            'searchPanel': {
                'visible': true
            },
            'selection': {
                'mode': 'multiple'
            },
            'showBorders': true,
            'hoverStateEnabled': true,
            'allowColumnResizing': true,
            'allowColumnReordering': true,
            'editing': {
                'allowUpdating': true,
                'allowDeleting': true,
                'mode': 'batch'
            },
            'columns': [
                {
                    'dataField': 'Title',
                    'caption': 'Position'
                },
                'Full_Name',
                'City',
                {
                    'dataField': 'Hire_Date',
                    'dataType': 'date'
                }
            ]
        };
    }
    TreelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.treeList.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
            _this.treeList.instance.updateDimensions();
        });
    };
    TreelistComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('treeList'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTreeListComponent"])
    ], TreelistComponent.prototype, "treeList", void 0);
    TreelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treelist',
            template: __webpack_require__(/*! ./treelist.component.html */ "./src/app/preview/treelist/treelist.component.html"),
            styles: [__webpack_require__(/*! ./treelist.component.css */ "./src/app/preview/treelist/treelist.component.css")]
        })
    ], TreelistComponent);
    return TreelistComponent;
}());



/***/ }),

/***/ "./src/app/preview/treeview/treeview.component.css":
/*!*********************************************************!*\
  !*** ./src/app/preview/treeview/treeview.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/treeview/treeview.component.html":
/*!**********************************************************!*\
  !*** ./src/app/preview/treeview/treeview.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-tree-view #treeView height=\"100%\"></dx-tree-view>\r\n"

/***/ }),

/***/ "./src/app/preview/treeview/treeview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/preview/treeview/treeview.component.ts ***!
  \********************************************************/
/*! exports provided: TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return TreeviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeviewComponent = /** @class */ (function () {
    function TreeviewComponent() {
        this.widgetGroup = 'treeview';
        this.isExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedOptions = {
            'items': [
                {
                    'id': 1,
                    'text': '.NET',
                    'expanded': true,
                    'items': [
                        {
                            'id': 11,
                            'text': 'Individual Platforms',
                            'selected': true,
                            'items': [
                                { 'id': 111, 'text': 'WinForms' },
                                { 'id': 112, 'text': 'ASP.NET' },
                                { 'id': 113, 'text': 'MVC' },
                                { 'id': 114, 'text': 'WPF' },
                                { 'id': 115, 'text': 'Silverlight' },
                                { 'id': 116, 'text': 'Windows 8 XAML' }
                            ]
                        },
                        {
                            'id': 12,
                            'text': 'Frameworks',
                            'items': [
                                { 'id': 121, 'text': 'eXpressApp Framework' }
                            ]
                        },
                        {
                            'id': 13,
                            'text': 'Code-Debug-Refactor',
                            'items': [
                                { 'id': 131, 'text': 'CodeRush for Visual Studio' }
                            ]
                        },
                        {
                            'id': 14,
                            'text': 'Mobile (HTML JS)',
                            'items': [
                                { 'id': 141, 'text': 'DevExtreme' }
                            ]
                        },
                        {
                            'id': 15,
                            'text': 'Cross-Platform',
                            'items': [
                                { 'id': 151, 'text': 'Reporting' },
                                { 'id': 152, 'text': 'Document Generation' }
                            ]
                        },
                        {
                            'id': 16,
                            'text': 'Enterprise Tools',
                            'items': [
                                { 'id': 161, 'text': 'Report Server' },
                                { 'id': 162, 'text': 'Analytics Dashboard' }
                            ]
                        }
                    ]
                }
            ]
        };
        this.expandedOptions = {
            'showCheckBoxes': true,
            'selectAllEnabled': true,
            'items': [
                {
                    'id': 1,
                    'text': '.NET',
                    'items': [
                        {
                            'id': 11,
                            'text': 'Individual Platforms',
                            'items': [
                                { 'id': 111, 'text': 'WinForms' },
                                { 'id': 112, 'text': 'ASP.NET' },
                                { 'id': 113, 'text': 'MVC' },
                                { 'id': 114, 'text': 'WPF' },
                                { 'id': 115, 'text': 'Silverlight' },
                                { 'id': 116, 'text': 'Windows 8 XAML' }
                            ],
                            'selected': true,
                            'expanded': true
                        },
                        {
                            'id': 12,
                            'text': 'Frameworks',
                            'items': [
                                { 'id': 121, 'text': 'eXpressApp Framework' }
                            ]
                        },
                        {
                            'id': 13,
                            'text': 'Code-Debug-Refactor',
                            'items': [
                                { 'id': 131, 'text': 'CodeRush for Visual Studio' }
                            ]
                        },
                        {
                            'id': 14,
                            'text': 'Mobile (HTML JS)',
                            'items': [
                                { 'id': 141, 'text': 'DevExtreme' }
                            ]
                        },
                        {
                            'id': 15,
                            'text': 'Cross-Platform',
                            'items': [
                                { 'id': 151, 'text': 'Reporting' },
                                { 'id': 152, 'text': 'Document Generation' }
                            ]
                        },
                        {
                            'id': 16,
                            'text': 'Enterprise Tools',
                            'items': [
                                { 'id': 161, 'text': 'Report Server' },
                                { 'id': 162, 'text': 'Analytics Dashboard' }
                            ]
                        }
                    ]
                },
                {
                    'id': 2,
                    'text': 'HTML JavaScript',
                    'items': [
                        {
                            'id': 21,
                            'text': 'Mobile',
                            'items': [
                                { 'id': 211, 'text': 'Phone JS' }
                            ]
                        },
                        {
                            'id': 22,
                            'text': 'HTML 5 JS Widgets',
                            'items': [
                                { 'id': 221, 'text': 'Chart JS' }
                            ]
                        }
                    ]
                },
                {
                    'id': 3,
                    'text': 'iOS 7',
                    'items': [
                        {
                            'id': 31,
                            'text': 'Native',
                            'items': [
                                { 'id': 311, 'text': 'DataExplorer' }
                            ]
                        }
                    ]
                },
                {
                    'id': 4,
                    'text': 'Testing Tools',
                    'items': [
                        {
                            'id': 41,
                            'text': 'Web Testing',
                            'items': [
                                { 'id': 441, 'text': 'TestCafe' }
                            ]
                        }
                    ]
                },
                {
                    'id': 5,
                    'text': 'Delphi & C++Builder'
                }
            ]
        };
    }
    TreeviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.isExpanded.subscribe(function (expanded) {
            _this.treeView.instance.option(expanded ? _this.expandedOptions : _this.collapsedOptions);
            _this.treeView.instance.updateDimensions();
        });
    };
    TreeviewComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('treeView'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewComponent"])
    ], TreeviewComponent.prototype, "treeView", void 0);
    TreeviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treeview',
            template: __webpack_require__(/*! ./treeview.component.html */ "./src/app/preview/treeview/treeview.component.html"),
            styles: [__webpack_require__(/*! ./treeview.component.css */ "./src/app/preview/treeview/treeview.component.css")]
        })
    ], TreeviewComponent);
    return TreeviewComponent;
}());



/***/ }),

/***/ "./src/app/preview/wizard/wizard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/preview/wizard/wizard.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    background-color: rgba(212, 212, 212, 0.25);\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n}\r\n\r\n.header {\r\n    width: 100%;\r\n    height: 80px;\r\n    padding: 0 20px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);\r\n}\r\n\r\n:host ::ng-deep .dx-toolbar .dx-toolbar-items-container {\r\n    height: 100%;\r\n}\r\n\r\n:host ::ng-deep .dx-toolbar .dx-toolbar-item {\r\n    padding: 0 10px 0 0;\r\n}\r\n\r\n:host ::ng-deep .dx-toolbar-item img {\r\n    border-radius: 50%;\r\n    border: 1px solid #9c9c9c;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 15px;\r\n}\r\n\r\n.flex-blocks {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 80px;\r\n    right: 0;\r\n    left: 0;\r\n}\r\n\r\n.flex-blocks.generic.normal {\r\n    bottom: 400px;\r\n}\r\n\r\n.flex-blocks.generic.compact {\r\n    bottom: 448px;\r\n}\r\n\r\n.flex-blocks.material {\r\n    bottom: 362px;\r\n}\r\n\r\n.flex-block {\r\n    flex: 1 1 520px;\r\n    max-width: 100%;\r\n    min-width: 520px;\r\n    height: 290px;\r\n    box-sizing: border-box;\r\n    padding: 25px;\r\n}\r\n\r\n.flex-blocks.generic.normal .flex-block {\r\n    height: 265px;\r\n}\r\n\r\n.flex-blocks.generic.compact .flex-block {\r\n    height: 205px;\r\n}\r\n\r\n.flex-block.left {\r\n    margin: 0 20px 0 40px;\r\n}\r\n\r\n.flex-block.right {\r\n    margin: 0 40px 0 20px;\r\n}\r\n\r\n:host ::ng-deep .flex-block .dx-button {\r\n    margin-left: 10px;\r\n    float: right;\r\n}\r\n\r\n.bottom-block {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    top: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/preview/wizard/wizard.component.html":
/*!******************************************************!*\
  !*** ./src/app/preview/wizard/wizard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-toolbar class=\"header\" [items]=\"toolbarItems\">\r\n</dx-toolbar>\r\n<div class=\"flex-blocks {{theme}} {{themeSize}}\">\r\n    <div class=\"left flex-block dx-card\">\r\n            <dx-form \r\n            #form\r\n            [formData]=\"employee\"\r\n            width=\"100%\" \r\n            [height]=\"this.theme === 'generic' ? (this.themeSize === 'compact' ? 125 : 175) : 200\" \r\n            colCount=\"2\"\r\n            labelLocation=\"top\">\r\n                <dxi-item dataField=\"FirstName\" ></dxi-item>\r\n                <dxi-item dataField=\"Position\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: positions, value: '' }\">\r\n                    <dxi-validation-rule type=\"required\" message=\"Position is required\"></dxi-validation-rule>\r\n                </dxi-item>\r\n                <dxi-item dataField=\"LastName\"></dxi-item>\r\n                <dxi-item dataField=\"HireDate\" editorType=\"dxDateBox\" [editorOptions]=\"{ value: null, width: '100%' }\">\r\n                    <dxi-validation-rule type=\"required\" message=\"Hire date is required\"></dxi-validation-rule>\r\n                </dxi-item>\r\n            </dx-form>\r\n            <dx-button text=\"Cancel\" width=\"90\"></dx-button>\r\n            <dx-button text=\"Done\" type=\"default\" width=\"90\"></dx-button>\r\n        </div>\r\n        <div class=\"right flex-block dx-card\">\r\n                <dx-list\r\n                height=\"100%\"\r\n                [dataSource]=\"employees\"\r\n                [grouped]=\"true\"\r\n                [collapsibleGroups]=\"true\">\r\n                <div *dxTemplate=\"let item of 'group'\">\r\n                    <div>Assigned: {{item.key}}</div>\r\n                </div>\r\n            </dx-list>\r\n        </div>\r\n</div>\r\n<div class=\"bottom-block\">\r\n        <dx-data-grid\r\n        [dataSource]=\"sales\"\r\n        [showBorders]=\"true\"\r\n        keyExpr=\"orderId\"\r\n        height=\"auto\"\r\n        width=\"100%\"\r\n        [selectedRowKeys]=\"[10250, 10251]\">\r\n        <dxo-selection\r\n            selectAllMode=\"allPages\"\r\n            showCheckBoxesMode=\"onClick\"\r\n            mode=\"multiple\"\r\n        ></dxo-selection>\r\n        <dxo-paging\r\n            [pageSize]=\"this.theme === 'generic' ? (this.themeSize === 'compact' ? 14 : 9) : 5\"\r\n        ></dxo-paging>\r\n        <dxi-column\r\n            dataField=\"orderId\"\r\n            caption=\"Order ID\"\r\n            [width]=\"90\"\r\n        ></dxi-column>\r\n        <dxi-column dataField=\"city\"></dxi-column>\r\n        <dxi-column\r\n            dataField=\"country\"\r\n            [width]=\"180\"\r\n        ></dxi-column>\r\n        <dxi-column\r\n            dataField=\"region\"\r\n        ></dxi-column>\r\n        <dxi-column\r\n            dataField=\"date\"\r\n            dataType=\"date\"\r\n        ></dxi-column>\r\n        <dxi-column\r\n            dataField=\"amount\"\r\n            format=\"currency\"\r\n            [width]=\"90\"\r\n        ></dxi-column>\r\n    </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/preview/wizard/wizard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/preview/wizard/wizard.component.ts ***!
  \****************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this.employee = {
            ID: 1,
            FirstName: 'John',
            LastName: 'Heart',
            Position: 'CEO',
            BirthDate: '1964/03/16',
            HireDate: '1995/01/15',
            Address: '351 S Hill St., Los Angeles, CA',
            Phone: '360-684-1334',
            Email: 'jheart@dx-email.com'
        };
        this.employees = [{
                key: 'Mr. John Heart',
                items: ['Choose between PPO and HMO Health Plan', 'Google AdWords Strategy']
            }, {
                key: 'Mrs. Olivia Peyton',
                items: ['Update Personnel Files', 'Review Health Insurance Options Under the Affordable Care Act', 'Non-Compete Agreements']
            }];
        this.positions = [
            'HR Manager',
            'IT Manager',
            'CEO',
            'Controller',
            'Sales Manager',
            'Support Manager',
            'Shipping Manager'
        ];
        this.sales = [{
                'orderId': 10248,
                'region': 'North America',
                'country': 'United States',
                'city': 'New York',
                'amount': 1740,
                'date': '2013/01/06'
            }, {
                'orderId': 10249,
                'region': 'North America',
                'country': 'United States',
                'city': 'Los Angeles',
                'amount': 850,
                'date': '2013/01/13'
            }, {
                'orderId': 10250,
                'region': 'North America',
                'country': 'United States',
                'city': 'Denver',
                'amount': 2235,
                'date': '2013/01/07'
            }, {
                'orderId': 10251,
                'region': 'North America',
                'country': 'Canada',
                'city': 'Vancouver',
                'amount': 1965,
                'date': '2013/01/03'
            }, {
                'orderId': 10252,
                'region': 'North America',
                'country': 'Canada',
                'city': 'Edmonton',
                'amount': 880,
                'date': '2013/01/10'
            }, {
                'orderId': 10253,
                'region': 'South America',
                'country': 'Brazil',
                'city': 'Rio de Janeiro',
                'amount': 5260,
                'date': '2013/01/17'
            }, {
                'orderId': 10254,
                'region': 'South America',
                'country': 'Argentina',
                'city': 'Buenos Aires',
                'amount': 2790,
                'date': '2013/01/21'
            }, {
                'orderId': 10255,
                'region': 'South America',
                'country': 'Paraguay',
                'city': 'Asuncion',
                'amount': 3140,
                'date': '2013/01/01'
            }, {
                'orderId': 10256,
                'region': 'Europe',
                'country': 'United Kingdom',
                'city': 'London',
                'amount': 6175,
                'date': '2013/01/24'
            }, {
                'orderId': 10257,
                'region': 'Europe',
                'country': 'Germany',
                'city': 'Berlin',
                'amount': 4575,
                'date': '2013/01/11'
            }, {
                'orderId': 10258,
                'region': 'Europe',
                'country': 'Spain',
                'city': 'Madrid',
                'amount': 3680,
                'date': '2013/01/12'
            }, {
                'orderId': 10259,
                'region': 'Europe',
                'country': 'Russian Federation',
                'city': 'Moscow',
                'amount': 2260,
                'date': '2013/01/01'
            }, {
                'orderId': 10260,
                'region': 'Asia',
                'country': 'China',
                'city': 'Beijing',
                'amount': 2910,
                'date': '2013/01/26'
            }, {
                'orderId': 10261,
                'region': 'Asia',
                'country': 'Japan',
                'city': 'Tokyo',
                'amount': 8400,
                'date': '2013/01/05'
            }, {
                'orderId': 10262,
                'region': 'Asia',
                'country': 'Korea (Republic of)',
                'city': 'Seoul',
                'amount': 1325,
                'date': '2013/01/14'
            }, {
                'orderId': 10263,
                'region': 'Australia',
                'country': 'Australia',
                'city': 'Sydney',
                'amount': 3920,
                'date': '2013/01/05'
            }, {
                'orderId': 10264,
                'region': 'Australia',
                'country': 'Australia',
                'city': 'Melbourne',
                'amount': 2220,
                'date': '2013/01/15'
            }, {
                'orderId': 10265,
                'region': 'Africa',
                'country': 'South Africa',
                'city': 'Pretoria',
                'amount': 940,
                'date': '2013/01/01'
            }, {
                'orderId': 10266,
                'region': 'Africa',
                'country': 'Egypt',
                'city': 'Cairo',
                'amount': 1630,
                'date': '2013/01/10'
            }, {
                'orderId': 10267,
                'region': 'North America',
                'country': 'Canada',
                'city': 'Edmonton',
                'amount': 2910,
                'date': '2013/01/23'
            }];
        this.toolbarItems = [{
                location: 'before',
                widget: 'dxButton',
                options: {
                    icon: 'menu',
                    type: 'default',
                    stylingMode: 'text'
                }
            }, {
                location: 'before',
                locateInMenu: 'never',
                template: function () {
                    return '<span style="font-size: 22px; font-weight: 500;">Theme Preview</span>';
                }
            }, {
                location: 'after',
                locateInMenu: 'never',
                template: function () {
                    return '<img src="images/person2.png" width="30" height="30"/><span>John Heart</span>';
                }
            }];
    }
    WizardComponent.prototype.ngAfterViewInit = function () {
        this.form.instance.validate();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"])
    ], WizardComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "themeSize", void 0);
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/preview/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/preview/wizard/wizard.component.css")]
        })
    ], WizardComponent);
    return WizardComponent;
}());



/***/ }),

/***/ "./src/app/types/meta-item.ts":
/*!************************************!*\
  !*** ./src/app/types/meta-item.ts ***!
  \************************************/
/*! exports provided: MetaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaItem", function() { return MetaItem; });
var MetaItem = /** @class */ (function () {
    function MetaItem() {
    }
    return MetaItem;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\devextreme-themebuilder-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map