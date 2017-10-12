webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-editor></app-editor>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_editor_hoja_hoja_component__ = __webpack_require__("../../../../../src/app/components/editor/hoja/hoja.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_editor_header_header_component__ = __webpack_require__("../../../../../src/app/components/editor/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_editor_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/components/editor/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_editor_estructura_estructura_component__ = __webpack_require__("../../../../../src/app/components/editor/estructura/estructura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_editor_services__ = __webpack_require__("../../../../../src/app/components/editor/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_times_pipe__ = __webpack_require__("../../../../../src/app/pipes/times.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_safe_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//Service



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_editor_hoja_hoja_component__["a" /* HojaComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_editor_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_editor_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_editor_estructura_estructura_component__["a" /* EstructuraComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_times_pipe__["a" /* TimesPipe */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_safe_pipe__["a" /* SafePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__components_editor_services__["b" /* EditableBlocksService */],
            __WEBPACK_IMPORTED_MODULE_10__components_editor_services__["a" /* DocVarsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* NgSwitch */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"area-editor\">\n  <app-toolbar></app-toolbar>\n  <app-hoja id=\"hojaApp\"></app-hoja>\n  <app-estructura></app-estructura>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".area-editor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  max-height: calc(100vh - 67px);\n  overflow: hidden; }\n  .area-editor app-toolbar {\n    width: 250px;\n    overflow-y: auto;\n    background: #fff;\n    box-shadow: 2px 0px 5px 0 rgba(0, 0, 0, 0.26); }\n  .area-editor app-hoja {\n    width: calc(100vw - 500px);\n    overflow-y: auto;\n    background: #afafaf; }\n  .area-editor app-estructura {\n    width: 250px;\n    overflow-y: auto;\n    background: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function EditorComponent() {
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/estructura/estructura.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contenido-estructura\">\n  <div class=\"inner\">\n    <p class=\"titulo-estructura\">\n      Árbol del documento\n    </p>\n    <div class=\"bloque-por-hoja\" [id]=\"'sheet_'+s\" *ngFor=\"let sheet of editableBlocks; let s=index\">\n      <ul class=\"elementos\" dnd-sortable-container [sortableData]=\"sheet\">\n        <li *ngFor=\"let block of sheet; let i=index;\"\n            dnd-sortable [sortableIndex]=\"i\" (onDropSuccess)=\"reOrderSuccess($event)\">\n          <span>\n            <i class=\"glyphicon glyphicon-menu-hamburger\"></i>\n            {{i+1}}\n          </span>\n          <ng-container [ngSwitch]=\"block.type\">\n            <div class=\"content\" *ngSwitchCase=\"'signers'\">Área de Firmantes</div>\n            <div class=\"content\" *ngSwitchCase=\"'space'\">[ESPACIO]</div>\n            <div class=\"content\" *ngSwitchCase=\"'lorem'\">Lorem</div>\n            <div [innerHTML]=\"block.content\" class=\"content\" *ngSwitchDefault>...</div>\n          </ng-container>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/estructura/estructura.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenido-estructura {\n  height: 100%;\n  padding: 30px 20px;\n  color: #555; }\n\np.titulo-estructura {\n  font-weight: bold;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #fff; }\n\n.bloque-por-hoja {\n  margin-bottom: 20px; }\n  .bloque-por-hoja .hoja-separador {\n    margin-bottom: 15px;\n    font-weight: bold; }\n  .bloque-por-hoja ul.elementos {\n    list-style: none;\n    font-size: 12px; }\n    .bloque-por-hoja ul.elementos li {\n      margin-bottom: 10px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: baseline;\n          -ms-flex-align: baseline;\n              align-items: baseline;\n      cursor: pointer; }\n      .bloque-por-hoja ul.elementos li span {\n        margin-right: 8px;\n        display: block;\n        width: 25px;\n        position: relative; }\n        .bloque-por-hoja ul.elementos li span i {\n          display: inline-block;\n          margin-right: 3px;\n          vertical-align: baseline; }\n      .bloque-por-hoja ul.elementos li div.content {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        line-height: 14px;\n        max-height: 14px;\n        width: calc(100% - 40px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/estructura/estructura.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstructuraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__ = __webpack_require__("../../../../../src/app/components/editor/services/editable-blocks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstructuraComponent = (function () {
    function EstructuraComponent(editableBlocksService) {
        this.editableBlocksService = editableBlocksService;
        this.editableBlocks = [];
    }
    EstructuraComponent.prototype.ngOnInit = function () {
        this.editableBlocks = this.editableBlocksService.blocks;
        this.sheets = 2;
    };
    EstructuraComponent.prototype.reOrderSuccess = function ($event) {
        for (var i = 0, n = this.editableBlocks.length; i < n; i++) {
            if (this.editableBlocks[i].length < 1) {
                this.editableBlocksService.removeSheet(i);
            }
        }
    };
    return EstructuraComponent;
}());
EstructuraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-estructura',
        template: __webpack_require__("../../../../../src/app/components/editor/estructura/estructura.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/estructura/estructura.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__["a" /* EditableBlocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__["a" /* EditableBlocksService */]) === "function" && _a || Object])
], EstructuraComponent);

var _a;
//# sourceMappingURL=estructura.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contenido-header\">\n  <h1 class=\"titulo\">\n    <span class=\"glyphicon glyphicon-edit\"></span>\n    Editor de Contratos\n  </h1>\n  <div class=\"tools\">\n    <ul>\n      <li>\n        <button title=\"Vista Previa\" (click)=\"previewDocument()\">\n          <span class=\"glyphicon glyphicon-eye-open\"></span>\n        </button>\n      </li>\n      <li>\n        <button title=\"Descargar\" (click)=\"downloadDocument()\">\n          <span class=\"glyphicon glyphicon-download-alt\"></span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenido-header {\n  padding: 20px;\n  text-align: left;\n  background-color: #f3f3f4;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .contenido-header .tools ul {\n    list-style: none; }\n    .contenido-header .tools ul > li {\n      display: inline-block;\n      margin-left: 10px; }\n      .contenido-header .tools ul > li > button {\n        border: none;\n        background: none;\n        font-size: 18px;\n        color: #ed6811; }\n  .contenido-header h1.titulo {\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 25px;\n    margin: 0;\n    color: #ed6811;\n    line-height: 25px; }\n    .contenido-header h1.titulo span {\n      display: inline-block;\n      margin-right: 10px;\n      vertical-align: top; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__ = __webpack_require__("../../../../../src/app/components/editor/services/editable-blocks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(editableBlocksService) {
        this.editableBlocksService = editableBlocksService;
        this.editableBlocks = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.previewDocument = function () {
        alert('Previsualizar');
    };
    HeaderComponent.prototype.downloadDocument = function () {
        alert('Descargar');
        console.log('Get data');
        this.editableBlocks = this.editableBlocksService.blocks;
        console.log('Data:', this.editableBlocks);
        console.log('DataString:', JSON.stringify(this.editableBlocks));
        // console.log('Html direct output',$('#innerSheet_0').find('.block').html());
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/editor/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__["a" /* EditableBlocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__["a" /* EditableBlocksService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/hoja/hoja.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor-hoja\" (click)=\"saveOpenEditable($event)\" id=\"sheetsContainer\">\n  <div class=\"hoja\" [id]=\"'sheet_'+s\" *ngFor=\"let sheet of editableBlocks; let s=index\" [class.loaded]=\"pageLoaded\">\n    <div class=\"inner-hoja\" [id]=\"'innerSheet_'+s\">\n\n      <div class=\"block\" *ngFor=\"let editable of sheet; let ed=index\" [class.active]=\"i===activeBlock\">\n          <div class=\"editable-content {{editable.type}}\" (click)=\"edit(s,ed,$event)\" [id]=\"'sheet_'+s+'_edit_'+ed\"\n          [innerHTML]=\"editable.content | safeHtml\">\n        </div>\n        <button (click)=\"deleteBlock(s,ed)\" type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"page-break\" [style.top]=\"(pageHeight*page)+'px'\" *ngFor=\"let page of pageCounter | times\">\n        <span>Página {{page}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/hoja/hoja.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenedor-hoja {\n  margin: 20px auto 30px;\n  position: relative;\n  overflow: hidden;\n  padding-top: 10px; }\n\ndiv.hoja {\n  background: #fff;\n  width: 21cm;\n  height: 29.7cm;\n  display: block;\n  margin: 0 auto;\n  padding: 1.5cm;\n  margin-bottom: .5cm;\n  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);\n  overflow: visible;\n  box-sizing: border-box;\n  font-size: 12pt;\n  position: relative;\n  zoom: .8;\n  font-family: Arial,Lucida Grande,sans-serif; }\n  div.hoja.loaded {\n    min-height: 29.7cm;\n    height: auto; }\n  div.hoja .inner-hoja {\n    height: 100%; }\n    div.hoja .inner-hoja div.block {\n      margin-bottom: 10px;\n      position: relative; }\n      div.hoja .inner-hoja div.block > button {\n        position: absolute;\n        top: -10px;\n        right: 10px;\n        background: #fff;\n        display: block;\n        padding: 0 5px;\n        opacity: 1;\n        color: #949494;\n        display: none; }\n      div.hoja .inner-hoja div.block:hover {\n        border-color: #000; }\n        div.hoja .inner-hoja div.block:hover > button {\n          display: block; }\n      div.hoja .inner-hoja div.block.active:hover > button {\n        display: none; }\n      div.hoja .inner-hoja div.block .editable-content {\n        border: 1px dashed #aaa;\n        border-radius: 5px;\n        padding: 10px;\n        cursor: pointer; }\n        div.hoja .inner-hoja div.block .editable-content.signers {\n          text-align: center; }\n    div.hoja .inner-hoja .page-break {\n      width: 100%;\n      position: absolute;\n      height: 1px;\n      border: 1px dashed #929292;\n      left: 0px;\n      right: 0;\n      text-align: left;\n      color: #080808;\n      font-size: 11px;\n      margin-top: 1.5cm;\n      opacity: 0.5; }\n      div.hoja .inner-hoja .page-break span {\n        position: absolute;\n        top: 50%;\n        left: 0px;\n        display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/hoja/hoja.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HojaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/components/editor/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HojaComponent = (function () {
    function HojaComponent(editableBlocksService, sanitizer) {
        this.editableBlocksService = editableBlocksService;
        this.sanitizer = sanitizer;
        this.editorIsOpen = false;
        this.openEditorId = '';
        this.editableBlocks = [];
        this.activeBlock = -1;
        this.activeSheet = -1;
        this.pageCounter = 1;
        this.pageHeight = 1;
        this.pageLoaded = false;
        this.isImageSelecting = false;
    }
    HojaComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var deleteButton = function (context) {
        //   var ui = $.summernote.ui;
        //   // create button
        //   var button = ui.button({
        //     contents: '<i class="fa fa-child"/> Borrar',
        //     tooltip: 'Borrar bloque',
        //     click: () => {
        //       // invoke insertText method with 'hello' on editor module.
        //       context.destroy();
        //       context.invoke('editor.insertText', 'hello');
        //     }
        //   });
        //
        //   return button.render();   // return button as jquery object
        // }
        this.editorConfig = {
            minHeight: 100,
            tooltip: false,
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['image', ['picture']]
            ],
            callbacks: {
                onChange: function (contents, $editable) {
                    // console.log('onChange:', contents, $editable);
                },
                onFocus: function () {
                    _this.isImageSelecting = false;
                }
            }
        };
        this.editableBlocks = this.editableBlocksService.blocks;
    };
    HojaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editableBlocksService.sheetSize = {
            width: document.getElementById('innerSheet_0').offsetWidth,
            height: document.getElementById('innerSheet_0').offsetHeight
        };
        $(document).on('click', '.note-image', function () {
            _this.isImageSelecting = true;
        });
        setTimeout(function () {
            _this.pageHeight = _this.editableBlocksService.sheetSize.height;
            _this.pageLoaded = true;
        }, 100);
    };
    HojaComponent.prototype.ngAfterViewChecked = function () {
        // this.updatePagesContent();
        this.setPageBrakes();
    };
    HojaComponent.prototype.ngDoCheck = function () {
    };
    HojaComponent.prototype.edit = function (sheet, index, event) {
        if (this.editorIsOpen) {
            this.save();
        }
        this.editorConfig.focus = true;
        var selector = event.target.id;
        if (!$('#' + selector).hasClass('signers')) {
            $('#' + selector).summernote(this.editorConfig);
            this.openEditorId = selector;
            this.editorIsOpen = true;
            this.activeSheet = sheet;
            this.activeBlock = index;
        }
    };
    HojaComponent.prototype.saveOpenEditable = function (event) {
        if (!$(event.target).hasClass('editable-content') &&
            !$(event.target).hasClass('note-toolbar') &&
            !$(event.target).hasClass('note-editable') &&
            $(event.target).closest('.note-toolbar').length === 0 &&
            $(event.target).closest('.note-editable').length === 0 &&
            !this.isImageSelecting &&
            $(event.target).closest('.note-handle').length === 0 &&
            $(event.target).closest('.note-editing-area').length === 0) {
            if (this.editorIsOpen) {
                this.save();
            }
        }
    };
    HojaComponent.prototype.save = function () {
        var markup = $('#' + this.openEditorId).summernote('code');
        // console.log(markup);
        // let cleanMarkup = this.sanitizer.bypassSecurityTrustHtml(markup);
        // console.log(cleanMarkup);
        if (this.activeBlock !== -1 || this.activeSheet !== -1)
            this.editableBlocksService.saveEditableBlock(this.activeSheet, this.activeBlock, markup);
        $('#' + this.openEditorId).summernote('destroy');
        // console.log(this.openEditorId+' | ',$('#'+this.openEditorId).parent().height());
        this.activeBlock = -1;
        this.activeSheet = -1;
    };
    HojaComponent.prototype.deleteBlock = function (sheet, index) {
        this.editableBlocksService.removeEditableBlock(sheet, index);
    };
    HojaComponent.prototype.updatePagesContent = function () {
        // console.log(this.editableBlocksService.sheetSize.height);
        if (this.editableBlocksService.sheetSize.height > 0) {
            for (var i = 0, n = this.editableBlocks.length; i < n; i++) {
                // let pageHAdded = 0;
                this.editableBlocksService.sheetUsedHeight[i] = 0;
                for (var j = 0, m = this.editableBlocks[i].length; j < m; j++) {
                    this.editableBlocksService.sheetUsedHeight[i] += document.getElementById("sheet_" + i + "_edit_" + j).offsetHeight + 10; //margin bottom
                }
                // console.log(this.editableBlocksService.sheetUsedHeight);
                // console.log('Pagina '+ i + ' | Altura total:' + pageHAdded);
            }
        }
    };
    HojaComponent.prototype.setPageBrakes = function () {
        var _this = this;
        if (document.getElementById('innerSheet_0').offsetHeight > this.editableBlocksService.sheetSize.height * this.pageCounter) {
            setTimeout(function () {
                _this.pageCounter += 1;
            }, 100);
        }
    };
    return HojaComponent;
}());
HojaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-hoja',
        template: __webpack_require__("../../../../../src/app/components/editor/hoja/hoja.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/hoja/hoja.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* EditableBlocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* EditableBlocksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], HojaComponent);

var _a, _b;
//# sourceMappingURL=hoja.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/services/doc-vars.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocVarsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocVarsService = (function () {
    function DocVarsService() {
        this.signers = [
            {
                id: 0,
                name: 'La parte'
            },
            {
                id: 1,
                name: 'La contra-parte'
            },
            {
                id: 2,
                name: 'Testigo 1'
            },
            {
                id: 3,
                name: 'Testigo 2'
            }
        ];
        this.signersToDoc = [];
    }
    Object.defineProperty(DocVarsService.prototype, "signersList", {
        get: function () {
            return this.signers;
        },
        enumerable: true,
        configurable: true
    });
    DocVarsService.prototype.addRemoveSignersToDocList = function (idSigner) {
        var signer = this.signers[idSigner];
        var index = this.signersToDoc.indexOf(signer);
        if (index !== -1)
            this.signersToDoc.splice(index, 1);
        else
            this.signersToDoc.push(signer);
    };
    DocVarsService.prototype.addAllSignersToDocList = function () {
        this.signersToDoc.length = 0;
        this.signersToDoc = this.signers.slice();
    };
    DocVarsService.prototype.resetSignersToDoc = function () {
        this.signersToDoc = [];
    };
    return DocVarsService;
}());
DocVarsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DocVarsService);

//# sourceMappingURL=doc-vars.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/services/editable-blocks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableBlocksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_doc_vars_service__ = __webpack_require__("../../../../../src/app/components/editor/services/doc-vars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditableBlocksService = (function () {
    function EditableBlocksService(sanitizer, docVarsService) {
        this.sanitizer = sanitizer;
        this.docVarsService = docVarsService;
        this.editableBlocks = [
            [
                {
                    type: 'simpleBlock',
                    content: '<p>Comience a escribir aquí</p>'
                },
            ]
        ];
        this.loremText = {
            type: 'lorem',
            content: 'Lorem ipsum <span style="font-size: 24px;">dolor sit amet</span>, <b>consectetur adipisicing elit</b>, sed do eiusmod tempor <i>incididunt</i> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <em>laborum</em>.'
        };
        this.space = {
            type: 'space',
            content: '<p><br></p>'
        };
        this.sheetUsedHeight = [];
        this.sheetSize = {
            width: 0,
            height: 0
        };
        this.minHeightBlock = 50;
    }
    Object.defineProperty(EditableBlocksService.prototype, "blocks", {
        get: function () {
            return this.editableBlocks;
        },
        enumerable: true,
        configurable: true
    });
    EditableBlocksService.prototype.addEditableBlock = function (sheet, placeholder) {
        var placeholderElement = {
            type: 'simpleBlock',
            content: placeholder || '<p>Escriba aquí</p>'
        };
        switch (placeholder) {
            case 'lorem':
                placeholderElement = this.loremText;
                break;
            case 'space':
                placeholderElement = this.space;
                break;
            case 'signers':
                placeholderElement.type = 'signers';
                placeholderElement.content = '';
                for (var _i = 0, _a = this.docVarsService.signersToDoc; _i < _a.length; _i++) {
                    var signer = _a[_i];
                    placeholderElement.content += "<div class=\"signerSpace\" id=\"signer_" + signer.id + "\">\n                                          <div class=\"espacioFirma\"></div>\n                                          <div class=\"nombreFirmante\">" + signer.name + "</div>\n                                         </div>";
                }
                break;
        }
        // placeholderElement = this.sanitizer.bypassSecurityTrustHtml(placeholderElement).toString();
        this.editableBlocks[sheet].push(placeholderElement);
    };
    EditableBlocksService.prototype.addSheet = function (firstElement) {
        var lastSheetIndex = this.editableBlocks.length;
        this.editableBlocks[lastSheetIndex] = [];
        // if(!firstElement){
        //this.addEditableBlock(lastSheetIndex);
        // }
    };
    EditableBlocksService.prototype.saveEditableBlock = function (sheet, index, blockContent) {
        this.editableBlocks[sheet][index].content = blockContent;
    };
    EditableBlocksService.prototype.removeEditableBlock = function (sheet, index) {
        this.editableBlocks[sheet].splice(index, 1);
        if (this.editableBlocks[sheet].length < 1 && this.editableBlocks.length > 1)
            this.removeSheet(sheet);
    };
    EditableBlocksService.prototype.removeSheet = function (sheet) {
        this.editableBlocks.splice(sheet, 1);
    };
    return EditableBlocksService;
}());
EditableBlocksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_doc_vars_service__["a" /* DocVarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_doc_vars_service__["a" /* DocVarsService */]) === "function" && _b || Object])
], EditableBlocksService);

var _a, _b;
//# sourceMappingURL=editable-blocks.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editable_blocks_service__ = __webpack_require__("../../../../../src/app/components/editor/services/editable-blocks.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__editable_blocks_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doc_vars_service__ = __webpack_require__("../../../../../src/app/components/editor/services/doc-vars.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__doc_vars_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contenido-tools\">\n  <div class=\"inner\">\n    <div class=\"bloque-tool\">\n      <p class=\"titulo-bloque\">\n        Elementos\n        <span class=\"hint-text\">Agregue elementos nuevos o predefinidos</span>\n      </p>\n      <ul class=\"herramientas\">\n        <li>\n          <button (click)=\"addBlock()\">\n            <span class=\"glyphicon glyphicon-object-align-left\"></span> Agregar texto\n          </button>\n        </li>\n        <li>\n          <button (click)=\"addBlock('space')\">\n            <span class=\"glyphicon glyphicon-pencil\"></span> Agregar espacio\n          </button>\n        </li>\n        <li>\n          <button data-toggle=\"collapse\" data-target=\"#firmantes\">\n            <span class=\"glyphicon glyphicon-leaf\"></span> Agregar firmantes\n          </button>\n          <div id=\"firmantes\" class=\"collapse inner-opt\">\n            <ul>\n              <li *ngFor=\"let signer of signers;let i=index;\">\n                <input type=\"checkbox\" [id]=\"'firmante'+i\" [value]=\"signer.id\"\n                       (change)=\"addRemoveSignerToDoc(i)\" [checked]=\"checkSigners[i]\">\n                <label [for]=\"'firmante'+i\">{{signer.name}}</label>\n              </li>\n            </ul>\n            <button (click)=\"addSelectedToDoc()\" [disabled]=\"selectedSigners.length < 1\">Agregrar seleccionados</button>\n            <button (click)=\"addAllToDoc()\">Agregra todos</button>\n          </div>\n        </li>\n        <li>\n          <button (click)=\"addBlock('declaration')\">\n            <span class=\"glyphicon glyphicon-list-alt\"></span> Agregar declaración\n          </button>\n        </li>\n        <li>\n          <button (click)=\"addBlock('lorem')\">\n            <span class=\"glyphicon glyphicon-file\"></span> Agregar Lorem\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenido-tools {\n  height: 100%;\n  padding: 30px 20px;\n  color: #555; }\n\n.bloque-tool {\n  font-size: 14px; }\n  .bloque-tool p.titulo-bloque {\n    font-weight: bold;\n    margin-bottom: 20px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #f3f3f4; }\n    .bloque-tool p.titulo-bloque span.hint-text {\n      display: block;\n      font-size: 10px; }\n  .bloque-tool ul.herramientas {\n    list-style: none; }\n    .bloque-tool ul.herramientas li {\n      margin-bottom: 10px; }\n      .bloque-tool ul.herramientas li span {\n        display: inline-block;\n        vertical-align: middle;\n        margin-right: 10px;\n        color: #ed6811; }\n      .bloque-tool ul.herramientas li button {\n        border: none;\n        background: none;\n        font-weight: bold;\n        width: 100%;\n        text-align: left;\n        padding: 6px 10px;\n        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); }\n        .bloque-tool ul.herramientas li button:disabled {\n          opacity: 0.3;\n          background: #bdbdbd;\n          color: #000; }\n    .bloque-tool ul.herramientas div.inner-opt {\n      padding: 10px 15px; }\n      .bloque-tool ul.herramientas div.inner-opt ul {\n        list-style: none;\n        font-size: 12px;\n        margin-bottom: 10px; }\n        .bloque-tool ul.herramientas div.inner-opt ul li {\n          margin-bottom: 5px; }\n          .bloque-tool ul.herramientas div.inner-opt ul li input[type=\"checkbox\"] {\n            -webkit-appearance: none;\n            display: inline-block;\n            width: 15px;\n            height: 15px;\n            border: 2px solid #ed6811;\n            vertical-align: middle;\n            margin: 0; }\n            .bloque-tool ul.herramientas div.inner-opt ul li input[type=\"checkbox\"]:focus {\n              outline: none; }\n            .bloque-tool ul.herramientas div.inner-opt ul li input[type=\"checkbox\"]:checked {\n              background: #ed6811; }\n          .bloque-tool ul.herramientas div.inner-opt ul li label {\n            margin-bottom: 0;\n            vertical-align: middle;\n            margin-left: 5px;\n            -webkit-touch-callout: none;\n            /* iOS Safari */\n            -webkit-user-select: none;\n            /* Safari */\n            /* Konqueror HTML */\n            -moz-user-select: none;\n            /* Firefox */\n            -ms-user-select: none;\n            /* Internet Explorer/Edge */\n            user-select: none;\n            /* Non-prefixed version, currently\r\n                 supported by Chrome and Opera */ }\n      .bloque-tool ul.herramientas div.inner-opt button {\n        font-size: 12px;\n        margin-bottom: 5px; }\n        .bloque-tool ul.herramientas div.inner-opt button:last-child {\n          margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/components/editor/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent(editableBlocksService, docVarsService) {
        this.editableBlocksService = editableBlocksService;
        this.docVarsService = docVarsService;
        this.checkSigners = [];
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.signers = this.docVarsService.signersList;
        this.selectedSigners = this.docVarsService.signersToDoc;
        for (var _i = 0, _a = this.signers; _i < _a.length; _i++) {
            var signer = _a[_i];
            this.checkSigners.push(false);
        }
    };
    ToolbarComponent.prototype.addBlock = function (type) {
        var contentType = type || '';
        var dataLastBlock = this.editableBlocksService.addEditableBlock(0, contentType);
    };
    ToolbarComponent.prototype.addSheet = function () {
        this.editableBlocksService.addSheet();
    };
    ToolbarComponent.prototype.addRemoveSignerToDoc = function (index) {
        var signer = this.signers[index];
        var signIndex = this.selectedSigners.indexOf(signer);
        this.checkSigners[index] = this.checkSigners[index] ? false : true;
        if (signIndex !== -1)
            this.selectedSigners.splice(signIndex, 1);
        else
            this.selectedSigners.push(signer);
    };
    ToolbarComponent.prototype.addSelectedToDoc = function () {
        this.editableBlocksService.addEditableBlock(0, 'signers');
    };
    ToolbarComponent.prototype.addAllToDoc = function () {
        this.selectedSigners.length = 0;
        for (var i = 0, n = this.checkSigners.length; i < n; i++) {
            this.selectedSigners.push(this.signers[i]);
            this.checkSigners[i] = true;
        }
        this.editableBlocksService.addEditableBlock(0, 'signers');
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/components/editor/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* EditableBlocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* EditableBlocksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* DocVarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* DocVarsService */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
        // return this.sanitizer.bypassSecurityTrustHtml(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'safeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/times.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var TimesPipe = (function () {
    function TimesPipe() {
    }
    TimesPipe.prototype.transform = function (value) {
        var iterable = {};
        iterable[Symbol.iterator] = function () {
            var n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = 0;
                        _a.label = 1;
                    case 1:
                        if (!(n < value)) return [3 /*break*/, 3];
                        return [4 /*yield*/, ++n];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return iterable;
    };
    return TimesPipe;
}());
TimesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'times'
    })
], TimesPipe);

//# sourceMappingURL=times.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map