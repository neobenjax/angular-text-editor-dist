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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_editor_hoja_hoja_component__ = __webpack_require__("../../../../../src/app/components/editor/hoja/hoja.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_editor_header_header_component__ = __webpack_require__("../../../../../src/app/components/editor/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_editor_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/components/editor/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_editor_estructura_estructura_component__ = __webpack_require__("../../../../../src/app/components/editor/estructura/estructura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_editor_services_editable_blocks_service__ = __webpack_require__("../../../../../src/app/components/editor/services/editable-blocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_times_pipe__ = __webpack_require__("../../../../../src/app/pipes/times.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_editor_hoja_hoja_component__["a" /* HojaComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_editor_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_editor_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_editor_estructura_estructura_component__["a" /* EstructuraComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_times_pipe__["a" /* TimesPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__components_editor_services_editable_blocks_service__["a" /* EditableBlocksService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
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

module.exports = "<div class=\"contenido-estructura\">\n  <div class=\"inner\">\n    <p class=\"titulo-estructura\">\n      Árbol del documento\n    </p>\n    <div class=\"bloque-por-hoja\" [id]=\"'sheet_'+s\" *ngFor=\"let sheet of editableBlocks; let s=index\">\n      <ul class=\"elementos\" dnd-sortable-container [sortableData]=\"sheet\">\n        <li *ngFor=\"let block of sheet; let i=index;\"\n            dnd-sortable [sortableIndex]=\"i\" (onDropSuccess)=\"reOrderSuccess($event)\">\n          <span>{{i+1}}</span>\n          <div [innerHTML]=\"block\" class=\"content\"></div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/estructura/estructura.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenido-estructura {\n  height: 100%;\n  padding: 30px 20px;\n  color: #555; }\n\np.titulo-estructura {\n  font-weight: bold;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #fff; }\n\n.bloque-por-hoja {\n  margin-bottom: 20px; }\n  .bloque-por-hoja .hoja-separador {\n    margin-bottom: 15px;\n    font-weight: bold; }\n  .bloque-por-hoja ul.elementos {\n    list-style: none;\n    font-size: 12px; }\n    .bloque-por-hoja ul.elementos li {\n      margin-bottom: 10px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: baseline;\n          -ms-flex-align: baseline;\n              align-items: baseline;\n      cursor: pointer; }\n      .bloque-por-hoja ul.elementos li span {\n        margin-right: 8px;\n        display: block;\n        width: 25px;\n        position: relative; }\n        .bloque-por-hoja ul.elementos li span:after {\n          content: ']';\n          position: absolute;\n          right: 0; }\n      .bloque-por-hoja ul.elementos li div.content {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        line-height: 14px;\n        max-height: 14px;\n        width: calc(100% - 40px); }\n", ""]);

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

module.exports = "<div class=\"contenido-header\">\n  <h1 class=\"titulo\">\n    <span class=\"glyphicon glyphicon-edit\"></span>\n    Editor de Contratos\n  </h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenido-header {\n  padding: 20px;\n  text-align: left;\n  background-color: #f3f3f4;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n  .contenido-header h1.titulo {\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 25px;\n    margin: 0;\n    color: #ed6811;\n    line-height: 25px; }\n    .contenido-header h1.titulo span {\n      display: inline-block;\n      margin-right: 10px;\n      vertical-align: top; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/editor/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/hoja/hoja.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor-hoja\" (click)=\"saveOpenEditable($event)\" id=\"sheetsContainer\">\n  <div class=\"hoja\" [id]=\"'sheet_'+s\" *ngFor=\"let sheet of editableBlocks; let s=index\" [class.loaded]=\"pageLoaded\">\n    <div class=\"inner-hoja\" [id]=\"'innerSheet_'+s\">\n\n      <div class=\"block\" *ngFor=\"let editable of sheet; let ed=index\" [class.active]=\"i===activeBlock\">\n          <div class=\"editable-content\" (click)=\"edit(s,ed,$event)\" [id]=\"'sheet_'+s+'_edit_'+ed\"\n          [innerHTML]=\"editable\">\n        </div>\n        <button (click)=\"deleteBlock(s,ed)\" type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"page-break\" [style.top]=\"(pageHeight*page)+'px'\" *ngFor=\"let page of pageCounter | times\">\n        <span>Página {{page}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/hoja/hoja.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenedor-hoja {\n  margin: 20px auto 30px;\n  position: relative;\n  overflow: hidden;\n  padding-top: 10px; }\n\ndiv.hoja {\n  background: #fff;\n  width: 21cm;\n  height: 29.7cm;\n  display: block;\n  margin: 0 auto;\n  padding: 1.5cm;\n  margin-bottom: .5cm;\n  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);\n  overflow: visible;\n  box-sizing: border-box;\n  font-size: 12pt;\n  position: relative;\n  zoom: .8;\n  font-family: Arial,Lucida Grande,sans-serif; }\n  div.hoja.loaded {\n    min-height: 29.7cm;\n    height: auto; }\n  div.hoja .inner-hoja {\n    height: 100%; }\n    div.hoja .inner-hoja div.block {\n      margin-bottom: 10px;\n      position: relative; }\n      div.hoja .inner-hoja div.block > button {\n        position: absolute;\n        top: -10px;\n        right: 10px;\n        background: #fff;\n        display: block;\n        padding: 0 5px;\n        opacity: 1;\n        color: #949494;\n        display: none; }\n      div.hoja .inner-hoja div.block:hover {\n        border-color: #000; }\n        div.hoja .inner-hoja div.block:hover > button {\n          display: block; }\n      div.hoja .inner-hoja div.block.active:hover > button {\n        display: none; }\n      div.hoja .inner-hoja div.block .editable-content {\n        border: 1px dashed #aaa;\n        border-radius: 5px;\n        padding: 10px;\n        cursor: pointer; }\n    div.hoja .inner-hoja .page-break {\n      width: 100%;\n      position: absolute;\n      height: 1px;\n      border: 1px dashed #929292;\n      left: 0px;\n      right: 0;\n      text-align: left;\n      color: #080808;\n      font-size: 11px;\n      margin-top: 1.5cm;\n      opacity: 0.5; }\n      div.hoja .inner-hoja .page-break span {\n        position: absolute;\n        top: 50%;\n        left: 0px;\n        display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/hoja/hoja.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HojaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__ = __webpack_require__("../../../../../src/app/components/editor/services/editable-blocks.service.ts");
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
    }
    HojaComponent.prototype.ngOnInit = function () {
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
                ['custom', ['deleteBtn']]
            ]
        };
        this.editableBlocks = this.editableBlocksService.blocks;
    };
    HojaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editableBlocksService.sheetSize = {
            width: document.getElementById('innerSheet_0').offsetWidth,
            height: document.getElementById('innerSheet_0').offsetHeight
        };
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
        $('#' + selector).summernote(this.editorConfig);
        this.openEditorId = selector;
        this.editorIsOpen = true;
        this.activeSheet = sheet;
        this.activeBlock = index;
    };
    HojaComponent.prototype.saveOpenEditable = function (event) {
        if (!$(event.target).hasClass('editable-content') &&
            !$(event.target).hasClass('note-toolbar') &&
            !$(event.target).hasClass('note-editable') &&
            $(event.target).closest('.note-toolbar').length === 0 &&
            $(event.target).closest('.note-editable').length === 0) {
            if (this.editorIsOpen) {
                this.save();
            }
        }
    };
    HojaComponent.prototype.save = function () {
        var markup = $('#' + this.openEditorId).summernote('code');
        var cleanMarkup = this.sanitizer.bypassSecurityTrustHtml(markup);
        if (this.activeBlock !== -1 || this.activeSheet !== -1)
            this.editableBlocksService.saveEditableBlock(this.activeSheet, this.activeBlock, cleanMarkup);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__["a" /* EditableBlocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__["a" /* EditableBlocksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], HojaComponent);

var _a, _b;
//# sourceMappingURL=hoja.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/services/editable-blocks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableBlocksService; });
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

var EditableBlocksService = (function () {
    function EditableBlocksService() {
        this.editableBlocks = [
            [
                '<p>Comience a escribir aquí</p>',
            ]
        ];
        this.loremText = 'Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit</b>, sed do eiusmod tempor <i>incididunt</i> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <em>laborum</em>.';
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
        var placeholderText = placeholder || '<p>Nuevo elemento</p>';
        if (placeholder === 'lorem')
            placeholderText = this.loremText;
        this.editableBlocks[sheet].push(placeholderText);
    };
    EditableBlocksService.prototype.addSheet = function (firstElement) {
        var lastSheetIndex = this.editableBlocks.length;
        this.editableBlocks[lastSheetIndex] = [];
        // if(!firstElement){
        //this.addEditableBlock(lastSheetIndex);
        // }
    };
    EditableBlocksService.prototype.saveEditableBlock = function (sheet, index, blockContent) {
        this.editableBlocks[sheet][index] = blockContent;
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
    __metadata("design:paramtypes", [])
], EditableBlocksService);

//# sourceMappingURL=editable-blocks.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contenido-tools\">\n  <div class=\"inner\">\n    <div class=\"bloque-tool\">\n      <p class=\"titulo-bloque\">\n        Elementos\n        <span class=\"hint-text\">Agregue elementos nuevos o predefinidos</span>\n      </p>\n      <ul class=\"herramientas\">\n        <li>\n          <button (click)=\"addBlock()\">\n            <span class=\"glyphicon glyphicon-pencil\"></span> Agregar texto\n          </button>\n        </li>\n        <li>\n          <button (click)=\"addBlock('signers')\">\n            <span class=\"glyphicon glyphicon-leaf\"></span> Agregar firmantes\n          </button>\n        </li>\n        <li>\n          <button (click)=\"addBlock('declaration')\">\n            <span class=\"glyphicon glyphicon-list-alt\"></span> Agregar declaración\n          </button>\n        </li>\n        <li>\n          <button (click)=\"addBlock('lorem')\">\n            <span class=\"glyphicon glyphicon-file\"></span> Agregar Lorem\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenido-tools {\n  height: 100%;\n  padding: 30px 20px;\n  color: #555; }\n\n.bloque-tool {\n  font-size: 14px; }\n  .bloque-tool p.titulo-bloque {\n    font-weight: bold;\n    margin-bottom: 20px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #f3f3f4; }\n    .bloque-tool p.titulo-bloque span.hint-text {\n      display: block;\n      font-size: 10px; }\n  .bloque-tool ul.herramientas {\n    list-style: none; }\n    .bloque-tool ul.herramientas li {\n      margin-bottom: 10px; }\n      .bloque-tool ul.herramientas li span {\n        display: inline-block;\n        vertical-align: middle;\n        margin-right: 10px;\n        color: #ed6811; }\n      .bloque-tool ul.herramientas li button {\n        border: none;\n        background: none;\n        font-weight: bold;\n        width: 100%;\n        text-align: left;\n        padding: 6px 10px;\n        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
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


var ToolbarComponent = (function () {
    function ToolbarComponent(editableBlocksService) {
        this.editableBlocksService = editableBlocksService;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.addBlock = function (type) {
        var contentType = type || '';
        // let toSheet = this.editableBlocksService.blocks.length - 1;//Last page
        // let sH = this.editableBlocksService.sheetSize.height;
        // let uSH = this.editableBlocksService.sheetUsedHeight[toSheet];
        // let minHB = this.editableBlocksService.minHeightBlock;
        // if(contentType === 'lorem')
        //   minHB = 135;
        //
        // if( sH < ( uSH + minHB) ){
        //   toSheet += 1; // Next existing page
        //   if(!this.editableBlocksService.blocks[toSheet])
        //     this.addSheet();
        // }
        var dataLastBlock = this.editableBlocksService.addEditableBlock(0, contentType);
        // setTimeout(()=>{
        //   let toTop = $(`#sheet_${dataLastBlock.sheet}_edit_${dataLastBlock.id}`).offset().top - 20;
        //   console.log(toTop);
        //   $('#hojaApp').animate({ scrollTop: toTop }, 400);
        // },100);
    };
    ToolbarComponent.prototype.addSheet = function () {
        this.editableBlocksService.addSheet();
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/components/editor/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__["a" /* EditableBlocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_editable_blocks_service__["a" /* EditableBlocksService */]) === "function" && _a || Object])
], ToolbarComponent);

var _a;
//# sourceMappingURL=toolbar.component.js.map

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