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
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/pets' },
    { path: 'pets', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'pets/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
    { path: 'pets/:id', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_5__["ReviewsComponent"] },
    { path: 'pets/edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container jumbotron\">\n  <div style=\"text-align:left\">\n    <h1>\n      Pet Shelter!\n    </h1>\n    <router-outlet></router-outlet>\n    \n  </div>\n</div>\n\n  "

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
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
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.newPet = { name: "", type: "", description: "" };
        this.editPet = { _id: "", name: "", type: "", description: "" };
        this.getPetsFromService();
        // this.getTaskFromService();
    };
    AppComponent.prototype.getPetsFromService = function () {
        var _this = this;
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            console.log("Got our pets!", data);
            _this.pets = data;
            console.log(_this.pets);
        });
    };
    AppComponent.prototype.getPetFromService = function (id) {
        var _this = this;
        var observable = this._httpService.getPet(id);
        observable.subscribe(function (data) {
            console.log("Got the pet!", data);
            _this.pet = data;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_7__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__["ReviewsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>These pets are looking for a home!</p>\n<a routerLink='/pets/new' routerLinkActive='active' class='btn btn-primary'>Add a pet to the shelter</a>\n<table class='table table-striped' style=\"margin-top: 15px;\">\n  <thead class='thead-dark' >\n    <tr>\n      <th scope='col'>Name</th>\n      <th scope='col'>Type</th>\n      <th scope='col'>Actions</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let pet of pets\">\n    <td>{{ pet.name }}</td>\n    <td>{{ pet.type }}</td>\n    <!-- <td *ngIf='restaurant.average'>{{ restaurant.average }} stars</td>\n    <td *ngIf='!restaurant.average'>No reviews!</td> -->\n    <td>\n      <a class='btn btn-primary btn-sm' [routerLink]=\"['/pets', pet._id]\">Details</a>\n      <button style='margin-left: 15px;' class='btn btn-success btn-sm' (click)=\"showEdit(pet._id)\">Edit</button>\n      \n      <!-- <button style='margin-left: 15px;' class='btn btn-warning btn-sm' (click)=\"deleteRestaurantFromService(restaurant._id)\">Delete</button> -->\n    </td>\n  </tbody>\n</table>\n<div>\n  <app-edit *ngIf=\"parentId\" [childId]=\"parentId\" (closeForm)=\"dataFromChild($event)\"></app-edit>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    // reviews: Array<object>;
    function DashboardComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log(this.parentId);
        this.getPetsFromService();
    };
    DashboardComponent.prototype.getPetsFromService = function () {
        var _this = this;
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            console.log("Got our pets!", data);
            _this.pets = data;
            console.log(_this.pets);
        });
    };
    // getPetsFromService() {
    //   let observable = this._httpService.getPets()
    //   observable.subscribe(data => {
    //     console.log("Got our pets!", data)
    //     for (var idx in data) {
    //       let currPet = data[idx];
    //       var sum = 0;
    //       for (var rev of currPet['reviews']) {
    //         sum += rev['stars'];
    //       }
    //       console.log(sum)
    //       if (sum === 0) {
    //         var avg = sum
    //         data[idx]['average'] = avg;
    //       } else {
    //         avg = sum / currPet['reviews'].length
    //         data[idx]['average'] = avg;
    //       }
    //     }
    //     this.pets = data;
    //     console.log(this.pets)
    //   });
    // }
    DashboardComponent.prototype.deletePetFromService = function (id) {
        var _this = this;
        console.log('Click will delete', id);
        var observable = this._httpService.deletePet(id);
        observable.subscribe(function (data) {
            _this.getPetsFromService();
        });
    };
    DashboardComponent.prototype.showEdit = function (idFromButton) {
        this.parentId = idFromButton;
        console.log(this.parentId);
    };
    DashboardComponent.prototype.dataFromChild = function (eventData) {
        this.parentId = eventData;
        this.getPetsFromService();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\" style=\"text-align:left\">\n  <h5>Edit this pet</h5>\n  <form *ngIf='editPet._id' (submit)=\"onSubmitEditPet()\">\n    <div class='form-group row'>\n      Pet name:: <input style='margin-left: 10px;' class='form-control mx-sm-3' type='text' name='editPet.name'\n        [(ngModel)]='editPet.name' />\n    </div>\n    <div class='form-group row'>\n      Pet type: <input style='margin-left: 10px;' class='form-control mx-sm-3' type='text' name='editPet.type'\n        [(ngModel)]='editPet.type' />\n    </div>\n    <div class='form-group row'>\n      Description: <input style='margin-left: 10px;' class='form-control mx-sm-3' type='text' name='editPet.description'\n        [(ngModel)]='editPet.description' />\n    </div>\n    <div class='container'>\n      <p>Skills (optional)</p>\n      <div class='form-group row'>\n        Skill 1: <input style='margin-left: 10px;' type='text' name='editPet.skill1' [(ngModel)]='editPet.skill1' />\n      </div>\n      <div class='form-group row'>\n        Skill 2: <input style='margin-left: 10px;' type='text' name='editPet.skill2' [(ngModel)]='editPet.skill2' />\n      </div>\n      <div class='form-group row'>\n        Skill 3: <input style='margin-left: 10px;' type='text' name='editPet.skill3' [(ngModel)]='editPet.skill3' />\n      </div>\n    </div>\n\n    <div class='form-group row'>\n      <input class='btn btn-primary' type='submit' value='Update' />\n      <a (click)=\"tellParentToCloseForm()\" routerLinkActive='active' class='btn btn-warning'>Cancel</a>\n    </div>\n    <div *ngIf=\"errors.errors.name\">\n      {{ errors.errors.name.message }}\n    </div>\n    <div *ngIf=\"errors.errors.type\">\n      {{ errors.errors.type.message }}\n    </div>\n    <div *ngIf=\"errors.errors.description\">\n      {{ errors.errors.description.message }}\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.closeForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditComponent.prototype.ngOnInit = function () {
        this.editPet = { _id: "", name: "", cuisine: "", description: "", skill1: "", skill2: "", skill3: "" };
        this.getPetFromServiceById();
        this.errors = {};
        this.errors['errors'] = {};
        console.log(this.childId);
    };
    EditComponent.prototype.getPetFromServiceById = function () {
        var _this = this;
        var observable = this._httpService.getPet(this.childId);
        observable.subscribe(function (data) {
            console.log("Got our pet!", data);
            _this.editPet = data;
            console.log(_this.editPet);
        });
    };
    // onEditRestaurant(id, name, cuisine) {
    //   this.editRestaurant._id = id;
    //   this.editRestaurant.name = name;
    //   this.editRestaurant.cuisine = cuisine;
    // }
    EditComponent.prototype.onSubmitEditPet = function () {
        var _this = this;
        console.log("this will edit a pet");
        var observable = this._httpService.editPet(this.editPet._id, this.editPet);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                console.log(data['errors']);
                _this.errors = data['errors'];
            }
            else {
                _this._router.navigate(['/pets']);
                _this.closeForm.emit(null);
            }
        });
    };
    EditComponent.prototype.tellParentToCloseForm = function () {
        this.closeForm.emit(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "closeForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditComponent.prototype, "childId", void 0);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPets = function () {
        // let tempObservable = this._http.get('/tasks');
        // tempObservable.subscribe(data=> console.log('Got our tasks!', data))
        return this._http.get('api/pets');
    };
    HttpService.prototype.getPet = function (id) {
        // let tempObservable = this._http.get('/tasks/5be61addf7319843838a0560')
        // tempObservable.subscribe(data=> console.log('Got one task!!!', data))
        return this._http.get('api/pets/' + id);
    };
    HttpService.prototype.addPet = function (newpet) {
        return this._http.post('api/pets', newpet);
    };
    HttpService.prototype.editPet = function (id, editpet) {
        return this._http.put('api/pets/' + id, editpet);
    };
    HttpService.prototype.deletePet = function (id) {
        return this._http.delete('api/pets/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h5>Know of a pet needing a home?</h5>\n</div>\n<form (submit)=\"onSubmitAddPet()\">\n\n    <div class='form-group row'>\n        Pet name: <input style='margin-left: 10px;' type='text' name='newPet.name' [(ngModel)]='newPet.name' />\n    </div>\n    <div class='form-group row'>\n        Pet type: <input style='margin-left: 10px;' type='text' name='newPet.type' [(ngModel)]='newPet.type' />\n    </div>\n    <div class='form-group row'>\n        Description: <input style='margin-left: 10px;' type='text' name='newPet.description' [(ngModel)]='newPet.description' />\n    </div>\n    \n    <div class='container'>\n        <p>Skills (optional)</p>\n        <div class='form-group row'>\n            Skill 1: <input style='margin-left: 10px;' type='text' name='newPet.skill1' [(ngModel)]='newPet.skill1' />\n        </div>\n        <div class='form-group row'>\n            Skill 2: <input style='margin-left: 10px;' type='text' name='newPet.skill2' [(ngModel)]='newPet.skill2' />\n        </div>\n        <div class='form-group row'>\n            Skill 3: <input style='margin-left: 10px;' type='text' name='newPet.skill3' [(ngModel)]='newPet.skill3' />\n        </div>\n    </div>\n    <div class='form-group row'>\n        <input class='btn btn-primary' type='submit' value='Add pet' />\n        <a routerLink='/pets' routerLinkActive='active' class='btn btn-secondary'>Cancel</a>\n    </div>\n    \n\n    <div *ngIf=\"errors.errors.name\">\n        {{ errors.errors.name.message }}\n    </div>\n    <div *ngIf=\"errors.errors.type\">\n        {{ errors.errors.type.message }}\n    </div>\n    <div *ngIf=\"errors.errors.description\">\n        {{ errors.errors.description.message }}\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newPet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "" };
        // this.errors = {
        //   errors: {
        //     name: {}
        //   }
        // }
        this.errors = {};
        this.errors['errors'] = {};
        // this.errors['errors']['name'] = {}
    };
    NewComponent.prototype.onSubmitAddPet = function () {
        var _this = this;
        var observable = this._httpService.addPet(this.newPet);
        observable.subscribe(function (data) {
            console.log('New pet added', data);
            if (data['errors']) {
                console.log(data['errors']);
                if (data['errors']['code'] == 11000) {
                    _this.errors = {
                        errors: {
                            name: {
                                message: "Pet already exists"
                            }
                        }
                    };
                }
                else {
                    _this.errors = data['errors'];
                }
            }
            else {
                _this._router.navigate(['/pets']);
            }
        });
        // this.newPet = { name: "", type: "", description: ""}
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/reviews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\n  <h5>Details about {{ pet.name }}</h5>\n  <a style='text-decoration: underline' routerLink='/' routerLinkActive='active' class=''>Home</a>\n  <ul style='list-style-type:none'>\n    <div>\n      <li>Pet type: {{ pet.name }}</li>\n    </div>\n    <div>\n      <li>Type: {{ pet.type }}</li>\n    </div>\n    <div>\n      <li>Description: {{ pet.description }}</li>\n    </div>\n    <div>\n      <li>Skill 1: {{ pet.skill1 }}</li>\n    </div>\n    <div>\n      <li>Skill 2: {{ pet.skill2 }}</li>\n    </div>\n    <div>\n      <li>Skill 3: {{ pet.skill3 }}</li>\n    </div>\n\n    <div>\n      <li *ngIf='!count'>Likes: 0</li>\n      <li *ngIf='count'>Likes: {{ count }}</li>\n    </div>\n  </ul>\n\n\n\n\n  <button type='button' class='btn btn-primary btn-sm' [disabled] = 'count' (click)='likeThisPet()'>Like this pet!</button>\n  <!-- <a [routerLink]=\"['/pets', pet._id]\" routerLinkActive='active' class='btn btn-primary btn-sm'>Like this pet</a> -->\n  <!-- <a routerLink='/pets' routerLinkActive='active' class='btn btn-warning btn-sm'>Adopt this pet!</a> -->\n  <button style='margin-left: 15px;' class='btn btn-warning btn-sm' (click)=\"deletePetFromService(pet._id)\">Adopt this pet!</button>\n</div>"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsComponent = /** @class */ (function () {
    // reviews: Array<object>;
    function ReviewsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.count = 0;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.pet = {};
        this.getPetFromServiceById();
    };
    ReviewsComponent.prototype.getPetFromServiceById = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            var observable = _this._httpService.getPet(params['id']);
            observable.subscribe(function (data) {
                console.log("Got our restaurant!", data);
                _this.pet = data;
                // this.pets = data['reviews'];
                // this.reviews.sort(this.compare);
                // console.log(this.reviews)
                // var sum = 0;
                // for (var rev of this.reviews) {
                //   sum += rev['stars'];
                // }
                // console.log(sum);
                // var avg = sum / this.reviews.length
                // console.log(avg)
            });
        });
    };
    ReviewsComponent.prototype.likeThisPet = function (count) {
        this.count++;
        var number = this.count;
        return number;
    };
    ReviewsComponent.prototype.deletePetFromService = function (id) {
        var _this = this;
        console.log('Click will delete', id);
        var observable = this._httpService.deletePet(id);
        observable.subscribe(function (data) {
            _this._router.navigate(['/pets']);
        });
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReviewsComponent);
    return ReviewsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/scotthill/Desktop/mean_belt_exam3/Pet_Shelter/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map