"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 4098:
/*!***************************************************!*\
  !*** ./src/app/_directives/has-role.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasRoleDirective: () => (/* binding */ HasRoleDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7783);



class HasRoleDirective {
  constructor(viewContainerRef, templateRef, accountService) {
    this.viewContainerRef = viewContainerRef;
    this.templateRef = templateRef;
    this.accountService = accountService;
    this.appHasRole = [];
    this.user = {};
    this.accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe({
      next: user => {
        if (user) this.user = user;
      }
    });
  }
  ngOnInit() {
    if (this.user?.roles.some(r => this.appHasRole.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  static #_ = this.ɵfac = function HasRoleDirective_Factory(t) {
    return new (t || HasRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: HasRoleDirective,
    selectors: [["", "appHasRole", ""]],
    inputs: {
      appHasRole: "appHasRole"
    }
  });
}

/***/ }),

/***/ 3123:
/*!*************************************************************!*\
  !*** ./src/app/_forms/date-picker/date-picker.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatePickerComponent: () => (/* binding */ DatePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1633);




function DatePickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.label, " is required");
  }
}
class DatePickerComponent {
  constructor(ngControl) {
    this.ngControl = ngControl;
    this.label = '';
    this.ngControl.valueAccessor = this;
    this.bsConfig = {
      containerClass: 'theme-red',
      dateInputFormat: 'DD MMMM YYYY'
    };
  }
  writeValue(obj) {}
  registerOnChange(fn) {}
  registerOnTouched(fn) {}
  get control() {
    return this.ngControl.control;
  }
  static #_ = this.ɵfac = function DatePickerComponent_Factory(t) {
    return new (t || DatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DatePickerComponent,
    selectors: [["app-date-picker"]],
    inputs: {
      label: "label",
      maxDate: "maxDate"
    },
    decls: 3,
    vars: 7,
    consts: [[1, "mb-3"], ["type", "text", "bsDatepicker", "", 1, "form-control", 3, "formControl", "placeholder", "bsConfig", "maxDate"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]],
    template: function DatePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatePickerComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.control.touched && ctx.control.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("bsConfig", ctx.bsConfig)("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors["required"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__.BsDatepickerInputDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7114:
/*!***********************************************************!*\
  !*** ./src/app/_forms/text-input/text-input.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextInputComponent: () => (/* binding */ TextInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function TextInputComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter a ", ctx_r0.label, " ");
  }
}
function TextInputComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.label, " must be at least ", ctx_r1.control.errors == null ? null : ctx_r1.control.errors["minlength"].requiredLength, " characters ");
  }
}
function TextInputComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.label, " must be at most ", ctx_r2.control.errors == null ? null : ctx_r2.control.errors["maxlength"].requiredLength, " characters ");
  }
}
function TextInputComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class TextInputComponent {
  constructor(ngControl) {
    this.ngControl = ngControl;
    this.label = '';
    this.type = 'text';
    this.ngControl.valueAccessor = this;
  }
  writeValue(obj) {}
  registerOnChange(fn) {}
  registerOnTouched(fn) {}
  get control() {
    return this.ngControl.control; // typecasting FormControl as this.ngControl.control
  }
  static #_ = this.ɵfac = function TextInputComponent_Factory(t) {
    return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TextInputComponent,
    selectors: [["app-text-input"]],
    inputs: {
      label: "label",
      type: "type"
    },
    decls: 6,
    vars: 9,
    consts: [[1, "mb-3"], [1, "form-control", 3, "type", "formControl", "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]],
    template: function TextInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextInputComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextInputComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextInputComponent_div_4_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TextInputComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.control.touched && ctx.control.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors["maxlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors["notMatching"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5037:
/*!****************************************!*\
  !*** ./src/app/_guards/admin.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminGuard: () => (/* binding */ adminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7783);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);




const adminGuard = (route, state) => {
  const accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService);
  const toastr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService);
  return accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(user => {
    if (!user) return false;
    if (user.roles.includes('Admin') || user.roles.includes('Moderator')) {
      return true;
    } else {
      toastr.error('You cannot enter this area');
      return false;
    }
  }));
};

/***/ }),

/***/ 1361:
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7783);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9736);





const authGuard = (route, state) => {
  const accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService);
  const toastr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  return accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
    if (user) return true;else {
      // toastr.error('You Shall Not....!')
      router.navigate(['/register']);
      return false;
    }
  }));
};

/***/ }),

/***/ 8817:
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preventUnsavedChangesGuard: () => (/* binding */ preventUnsavedChangesGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/confirm.service */ 7127);


const preventUnsavedChangesGuard = component => {
  const confirmService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_confirm_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmService);
  if (component.editForm?.dirty) {
    return confirmService.confirm();
  }
  return true;
};

/***/ }),

/***/ 4092:
/*!********************************************************!*\
  !*** ./src/app/_guards/register-routeprevent.guard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoutepreventGuard: () => (/* binding */ registerRoutepreventGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);




const registerRoutepreventGuard = (route, state) => {
  const accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  // Check if the route is 'register' and prevent access
  return accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(user => {
    if (!user) return true;else {
      // toastr.error('You Shall Not....!')
      router.navigate(['/members']);
      return false;
    }
  }));
  // if (state.url.includes('register')) {
  //   router.navigate(['/members']);
  //   return false;
  // }
  // Allow access to other routes
  return true;
};

/***/ }),

/***/ 8908:
/*!****************************************************!*\
  !*** ./src/app/_intercepters/error.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 7548);




class ErrorInterceptor {
  constructor(router, toastr) {
    this.router = router;
    this.toastr = toastr;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error.errors) {
              const modelStateErrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modelStateErrors.push(error.error.errors[key]);
                }
              }
              throw modelStateErrors.flat();
            } else {
              this.toastr.error(error.error, error.status.toString());
            }
            break;
            case401: this.toastr.error('Unauthorised', error.status.toString());
            break;
          case 404:
            this.router.navigateByUrl('/not-found');
            break;
          case 500:
            const navigationExtras = {
              state: {
                error: error.error
              }
            };
            this.router.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            this.toastr.error('Something unexpected went wrong');
            console.log(error);
            break;
        }
      }
      throw error;
    }));
  }
  static #_ = this.ɵfac = function ErrorInterceptor_Factory(t) {
    return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ErrorInterceptor,
    factory: ErrorInterceptor.ɵfac
  });
}

/***/ }),

/***/ 9675:
/*!**************************************************!*\
  !*** ./src/app/_intercepters/jwt.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7783);



class JwtInterceptor {
  constructor(accountService) {
    this.accountService = accountService;
  }
  intercept(request, next) {
    this.accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe({
      next: user => {
        if (user) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${user.token}`
            }
          });
        }
      }
    });
    return next.handle(request);
  }
  static #_ = this.ɵfac = function JwtInterceptor_Factory(t) {
    return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: JwtInterceptor,
    factory: JwtInterceptor.ɵfac
  });
}

/***/ }),

/***/ 9796:
/*!******************************************************!*\
  !*** ./src/app/_intercepters/loading.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/busy.service */ 8226);



class LoadingInterceptor {
  constructor(busyService) {
    this.busyService = busyService;
  }
  intercept(request, next) {
    this.busyService.busy();
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.delay)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
      this.busyService.idle();
    }));
  }
  static #_ = this.ɵfac = function LoadingInterceptor_Factory(t) {
    return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_busy_service__WEBPACK_IMPORTED_MODULE_0__.BusyService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LoadingInterceptor,
    factory: LoadingInterceptor.ɵfac
  });
}

/***/ }),

/***/ 9361:
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatedResult: () => (/* binding */ PaginatedResult)
/* harmony export */ });
class PaginatedResult {}

/***/ }),

/***/ 2831:
/*!***************************************!*\
  !*** ./src/app/_models/userParams.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserParams: () => (/* binding */ UserParams)
/* harmony export */ });
class UserParams {
  constructor(user) {
    this.minAge = 18;
    this.maxAge = 99;
    this.pageNumber = 1;
    this.pageSize = 12;
    this.orderBy = 'lastActive';
    this.gender = user.gender === 'female' ? 'male' : 'female';
  }
}

/***/ }),

/***/ 4849:
/*!*******************************************!*\
  !*** ./src/app/_modules/shared.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7019);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 9772);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ 8079);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1633);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4850);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 2072);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-timeago */ 3205);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);





















class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownModule.forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule.forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonsModule.forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsModule.forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }), ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule.forRoot({
      type: 'ball-atom'
    }), ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerModule.forRoot(), ngx_timeago__WEBPACK_IMPORTED_MODULE_11__.TimeagoModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonsModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_11__.TimeagoModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonsModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_11__.TimeagoModule],
    exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonsModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_11__.TimeagoModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule]
  });
})();

/***/ }),

/***/ 1559:
/*!********************************************************!*\
  !*** ./src/app/_resolvers/member-detailed.resolver.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memberDetailedResolver: () => (/* binding */ memberDetailedResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/members.service */ 9088);


const memberDetailedResolver = (route, state) => {
  const memberService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService);
  return memberService.getMember(route.paramMap.get('username'));
  // To get load by params.
};

/***/ }),

/***/ 7783:
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _presence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presence.service */ 3949);





class AccountService {
  constructor(http, presenceService) {
    this.http = http;
    this.presenceService = presenceService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSource.asObservable();
    this.refreshPhoto = false;
  }
  login(model) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      const user = response;
      if (user) {
        this.setCurrentUser(user);
        //To track login
        this.recordLoginAndLogout(user.username, true);
      }
    }));
  }
  register(model) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      const user = response;
      if (user) {
        this.setCurrentUser(user);
        //To track login
        this.recordLoginAndLogout(user.username, true);
      }
    }));
  }
  setCurrentUser(user) {
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
    this.presenceService.createHubConnection(user);
    //To track login
    // console.log(user.username)
  }

  logout() {
    localStorage.removeItem('user');
    //To track logout 
    this.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: user => {
        if (user) {
          this.recordLoginAndLogout(user.username, false);
          // console.log(user.username)
        }
      }
    });

    this.currentUserSource.next(null);
    this.presenceService.stopHubConnection();
  }
  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  //To track login   logout 
  recordLoginAndLogout(user, loggedIn) {
    const currentTimeInUTC = new Date();
    const utcOffset = 330; // GMT +5:30
    // Calculate the time in India by adding the UTC offset
    //(utcOffset * 60 * 1000) converting in milliseconds 
    const currentTimeInIndia = new Date(currentTimeInUTC.getTime() + utcOffset * 60 * 1000);
    const time = currentTimeInIndia.toISOString();
    const loginLogoutPair = {
      username: user,
      time,
      loggedIn
    };
    const localitem = localStorage.getItem('loginLogoutHistory');
    // console.log(localitem)
    if (localitem) {
      const loginLogoutHistory = JSON.parse(localitem);
      loginLogoutHistory.push(loginLogoutPair);
      localStorage.setItem('loginLogoutHistory', JSON.stringify(loginLogoutHistory));
    } else {
      const newHistory = [loginLogoutPair]; // new array of login/logout pair
      localStorage.setItem('loginLogoutHistory', JSON.stringify(newHistory));
    }
    // console.log(loginLogoutPair)
  }

  getLoginLogoutHistory() {
    const localItem = localStorage.getItem('loginLogoutHistory');
    if (localItem) {
      const parsedData = JSON.parse(localItem);
      if (Array.isArray(parsedData)) {
        return parsedData;
      }
    }
    return null;
  }
  static #_ = this.ɵfac = function AccountService_Factory(t) {
    return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_presence_service__WEBPACK_IMPORTED_MODULE_1__.PresenceService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AccountService,
    factory: AccountService.ɵfac,
    providedIn: 'root'
  });
}
function getLoginLogoutHistory() {
  throw new Error('Function not implemented.');
}

/***/ }),

/***/ 11:
/*!********************************************!*\
  !*** ./src/app/_services/admin.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminService: () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class AdminService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getUsersWithRoles() {
    return this.http.get(this.baseUrl + 'admin/users-with-roles');
  }
  updateUserRoles(username, roles) {
    return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
  }
  static #_ = this.ɵfac = function AdminService_Factory(t) {
    return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AdminService,
    factory: AdminService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8226:
/*!*******************************************!*\
  !*** ./src/app/_services/busy.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusyService: () => (/* binding */ BusyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 8375);


class BusyService {
  constructor(spinner) {
    this.spinner = spinner;
    this.busyReqCount = 0;
  }
  busy() {
    this.busyReqCount++;
    this.spinner.show(undefined, {
      type: 'ball-atom',
      fullScreen: true,
      bdColor: 'rgba(0, 0, 0, 0.2)',
      color: '#343aeb',
      size: 'medium'
    });
  }
  idle() {
    this.busyReqCount--;
    if (this.busyReqCount <= 0) {
      this.busyReqCount = 0;
      this.spinner.hide();
    }
  }
  static #_ = this.ɵfac = function BusyService_Factory(t) {
    return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BusyService,
    factory: BusyService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7127:
/*!**********************************************!*\
  !*** ./src/app/_services/confirm.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmService: () => (/* binding */ ConfirmService)
/* harmony export */ });
/* harmony import */ var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/confirm-dialog/confirm-dialog.component */ 6634);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);




class ConfirmService {
  constructor(modalService) {
    this.modalService = modalService;
  }
  confirm(title = 'Confirmation', message = 'Are you sure you want to do this?', btnOkText = 'Ok', btnCancelText = 'Cancel') {
    const config = {
      initialState: {
        title,
        message,
        btnOkText,
        btnCancelText
      }
    };
    this.bsModelRef = this.modalService.show(_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, config);
    return this.bsModelRef.onHidden.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
      return this.bsModelRef.content.result;
    }));
  }
  static #_ = this.ɵfac = function ConfirmService_Factory(t) {
    return new (t || ConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ConfirmService,
    factory: ConfirmService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 548:
/*!*******************************************************!*\
  !*** ./src/app/_services/customRouteReuseStrategy.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomRouteReuseStrategy: () => (/* binding */ CustomRouteReuseStrategy)
/* harmony export */ });
class CustomRouteReuseStrategy {
  shouldDetach(route) {
    return false;
  }
  store(route, handle) {}
  shouldAttach(route) {
    return false;
  }
  retrieve(route) {
    return null;
  }
  shouldReuseRoute(future, curr) {
    return false;
  }
}

/***/ }),

/***/ 9088:
/*!**********************************************!*\
  !*** ./src/app/_services/members.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MembersService: () => (/* binding */ MembersService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _models_userParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/userParams */ 2831);
/* harmony import */ var _paginationHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginationHelper */ 2855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ 7783);







class MembersService {
  constructor(http, accountService) {
    this.http = http;
    this.accountService = accountService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.members = [];
    this.memberCache = new Map();
    this.accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: user => {
        if (user) this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_1__.UserParams(user);
        this.user = user;
      }
    });
  }
  getUserParams() {
    return this.userParams;
  }
  setUserParams(userParams) {
    this.userParams = userParams;
  }
  resetUserParams() {
    if (this.user) {
      this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_1__.UserParams(this.user);
      return this.userParams;
    }
    return;
  }
  getMembers(userParams) {
    const response = this.memberCache.get(Object.values(userParams).join('-'));
    if (response) return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(response);
    let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(userParams.pageNumber, userParams.pageSize);
    params = params.append('minAge', userParams.minAge);
    params = params.append('maxAge', userParams.maxAge);
    params = params.append('gender', userParams.gender);
    params = params.append('orderBy', userParams.orderBy);
    return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'users', params, this.http).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.memberCache.set(Object.values(userParams).join('-'), response);
      return response;
    }));
  }
  getMember(username) {
    const member = [...this.memberCache.values()].reduce((arr, elem) => arr.concat(elem.result), []).find(member => member.userName === username);
    if (member) return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(member);
    return this.http.get(this.baseUrl + 'users/' + username);
  }
  updateMember(member) {
    return this.http.put(this.baseUrl + 'users', member).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
      const index = this.members.indexOf(member);
      this.members[index] = {
        ...this.members[index],
        ...member
      };
    }));
  }
  setMainPhoto(photoId) {
    return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
  }
  deletePhoto(photoId) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
  }
  addLike(username) {
    return this.http.post(this.baseUrl + 'likes/addlike/' + username, {});
  }
  removeLike(username) {
    return this.http.post(this.baseUrl + 'likes/removelike/' + username, {});
  }
  getLikes(predicate, pageNumber, pageSize) {
    let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(pageNumber, pageSize);
    params = params.append('predicate', predicate);
    return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'likes', params, this.http);
  }
  static #_ = this.ɵfac = function MembersService_Factory(t) {
    return new (t || MembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: MembersService,
    factory: MembersService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3833:
/*!***********************************************!*\
  !*** ./src/app/_services/messages.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesService: () => (/* binding */ MessagesService)
/* harmony export */ });
/* harmony import */ var D_Work_DatingAppCloned_DatingApp_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/signalr */ 9336);
/* harmony import */ var _paginationHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginationHelper */ 2855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _busy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./busy.service */ 8226);








class MessagesService {
  constructor(http, busyService) {
    this.http = http;
    this.busyService = busyService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hubUrl;
    this.messageThreadSouce = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.messageThread$ = this.messageThreadSouce.asObservable();
  }
  createHubConnection(user, otherUsername) {
    this.busyService.busy();
    this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_5__.HubConnectionBuilder().withUrl(this.hubUrl + 'message?user=' + otherUsername, {
      accessTokenFactory: () => user.token
    }).withAutomaticReconnect().build();
    this.hubConnection.start().catch(error => console.log(error)).finally(() => this.busyService.idle());
    this.hubConnection.on('ReceiveMessageThread', messages => {
      this.messageThreadSouce.next(messages);
    });
    this.hubConnection.on('NewMessage', message => {
      this.messageThread$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
        next: messages => {
          this.messageThreadSouce.next([...messages, message]);
        }
      });
    });
    this.hubConnection.on('UpdatedGroup', group => {
      if (group.connections.some(x => x.username === otherUsername)) {
        this.messageThread$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
          next: messages => {
            messages.forEach(message => {
              if (!message.dateRead) {
                message.dateRead = new Date(Date.now());
              }
            });
            this.messageThreadSouce.next([...messages]);
          }
        });
      }
    });
  }
  stopHubConnection() {
    if (this.hubConnection) {
      this.messageThreadSouce.next([]);
      this.hubConnection?.stop();
    }
  }
  getMessages(pageNumber, pageSize, container) {
    let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(pageNumber, pageSize);
    params = params.append('Container', container);
    return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'messages', params, this.http);
  }
  getMessageThread(username) {
    return this.http.get(this.baseUrl + 'messages/thread/' + username);
  }
  sendMessage(username, content) {
    var _this = this;
    return (0,D_Work_DatingAppCloned_DatingApp_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.hubConnection?.invoke('SendMessage', {
        recipientUsername: username,
        content
      }).catch(error => console.log(error));
    })();
  }
  deleteMessage(id) {
    return this.http.delete(this.baseUrl + 'messages/' + id);
  }
  static #_ = this.ɵfac = function MessagesService_Factory(t) {
    return new (t || MessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_busy_service__WEBPACK_IMPORTED_MODULE_3__.BusyService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: MessagesService,
    factory: MessagesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2855:
/*!***********************************************!*\
  !*** ./src/app/_services/paginationHelper.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPaginatedResult: () => (/* binding */ getPaginatedResult),
/* harmony export */   getPaginationHeaders: () => (/* binding */ getPaginationHeaders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/pagination */ 9361);



function getPaginatedResult(url, params, http) {
  const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_0__.PaginatedResult();
  return http.get(url, {
    observe: 'response',
    params
  }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
    if (response.body) {
      paginatedResult.result = response.body;
    }
    const pagination = response.headers.get('Pagination');
    if (pagination) {
      paginatedResult.pagination = JSON.parse(pagination);
    }
    return paginatedResult;
  }));
}
function getPaginationHeaders(pageNumber, pageSize) {
  let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
  params = params.append('pageNumber', pageNumber);
  params = params.append('pageSize', pageSize);
  return params;
}

/***/ }),

/***/ 3949:
/*!***********************************************!*\
  !*** ./src/app/_services/presence.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresenceService: () => (/* binding */ PresenceService)
/* harmony export */ });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ 9336);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);






class PresenceService {
  constructor(toastr, router) {
    this.toastr = toastr;
    this.router = router;
    this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hubUrl;
    this.onlineUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.onlineUsers$ = this.onlineUsersSource.asObservable();
  }
  createHubConnection(user) {
    this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__.HubConnectionBuilder().withUrl(this.hubUrl + 'presence', {
      accessTokenFactory: () => user.token
    }).withAutomaticReconnect().build();
    this.hubConnection.start().catch(error => console.log(error));
    this.hubConnection.on('UserIsOnline', username => {
      this.onlineUsers$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe({
        next: usernames => this.onlineUsersSource.next([...usernames, username])
      });
    });
    this.hubConnection.on('UserIsOffline', username => {
      this.onlineUsers$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe({
        next: usernames => this.onlineUsersSource.next([...usernames.filter(x => x !== username)])
      });
    });
    this.hubConnection.on('GetOnlineUsers', usernames => {
      this.onlineUsersSource.next(usernames);
    });
    this.hubConnection.on('NewMessageReceived', ({
      username,
      knownAs
    }) => {
      this.toastr.info(knownAs + ' has sent you a new message! Click me to see it!').onTap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => this.router.navigateByUrl('/members/' + username + '?tab=Messages'));
    });
  }
  stopHubConnection() {
    this.hubConnection?.stop().catch(error => console.log(error));
  }
  static #_ = this.ɵfac = function PresenceService_Factory(t) {
    return new (t || PresenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: PresenceService,
    factory: PresenceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8094:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 2,
    vars: 0,
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9633:
/*!************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminPanelComponent: () => (/* binding */ AdminPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 9772);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_directives/has-role.directive */ 4098);
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-management/user-management.component */ 2652);




function AdminPanelComponent_tab_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tab", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-user-management");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["Admin"];
};
class AdminPanelComponent {
  static #_ = this.ɵfac = function AdminPanelComponent_Factory(t) {
    return new (t || AdminPanelComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AdminPanelComponent,
    selectors: [["app-admin-panel"]],
    decls: 5,
    vars: 2,
    consts: [[1, "tab-panel"], [1, "member-tabset"], ["heading", "User management", 4, "appHasRole"], ["heading", "User management"], [1, "container"]],
    template: function AdminPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdminPanelComponent_tab_4_Template, 3, 0, "tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsetComponent, _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_0__.HasRoleDirective, _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_1__.UserManagementComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1873:
/*!**********************************************************************!*\
  !*** ./src/app/admin/photo-management/photo-management.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotoManagementComponent: () => (/* binding */ PhotoManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PhotoManagementComponent {
  static #_ = this.ɵfac = function PhotoManagementComponent_Factory(t) {
    return new (t || PhotoManagementComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PhotoManagementComponent,
    selectors: [["app-photo-management"]],
    decls: 2,
    vars: 0,
    template: function PhotoManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "photo-management works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2652:
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserManagementComponent: () => (/* binding */ UserManagementComponent)
/* harmony export */ });
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);
/* harmony import */ var src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modals/roles-modal/roles-modal.component */ 8030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/admin.service */ 11);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);






function UserManagementComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserManagementComponent_tr_10_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const user_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openRolesModal(user_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Edit Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r1.roles);
  }
}
class UserManagementComponent {
  constructor(adminService, modalService) {
    this.adminService = adminService;
    this.modalService = modalService;
    this.users = [];
    this.bsModalRef = new ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalRef();
    this.availableRoles = ['Admin', 'Moderator', 'Member'];
  }
  ngOnInit() {
    this.getUsersWithRoles();
  }
  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe({
      next: users => this.users = users
    });
  }
  openRolesModal(user) {
    const config = {
      class: 'modal-dialog-centered',
      initialState: {
        username: user.username,
        availableRoles: this.availableRoles,
        selectedRoles: [...user.roles]
      }
    };
    this.bsModalRef = this.modalService.show(src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__.RolesModalComponent, config);
    this.bsModalRef.onHide?.subscribe({
      next: () => {
        const selectedRoles = this.bsModalRef.content?.selectedRoles;
        if (!this.arrayEqual(selectedRoles, user.roles)) {
          this.adminService.updateUserRoles(user.username, selectedRoles).subscribe({
            next: roles => user.roles = roles
          });
        }
      }
    });
  }
  arrayEqual(arr1, arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
  }
  static #_ = this.ɵfac = function UserManagementComponent_Factory(t) {
    return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UserManagementComponent,
    selectors: [["app-user-management"]],
    decls: 11,
    vars: 1,
    consts: [[1, "row", "border-primary", "bg-transparent", "text-dark"], [1, "table", "border-primary", "bg-transparent", "text-dark"], [2, "width", "30%"], [2, "width", "40%"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"]],
    template: function UserManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Active Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, UserManagementComponent_tr_10_Template, 8, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    styles: ["table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDZDQUE2QztBQUNqRCIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRyIHRkLFxyXG50YWJsZSB0ciB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members/member-list/member-list.component */ 9211);
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ 2861);
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists/lists.component */ 4173);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.component */ 8853);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_guards/auth.guard */ 1361);
/* harmony import */ var _errors_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/test-error/test-error.component */ 5143);
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ 413);
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ 4641);
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ 6682);
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ 8817);
/* harmony import */ var _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_resolvers/member-detailed.resolver */ 1559);
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ 9633);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_guards/admin.guard */ 5037);
/* harmony import */ var _user_tracking_user_tracking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-tracking/user-tracking.component */ 3539);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4225);
/* harmony import */ var _guards_register_routeprevent_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_guards/register-routeprevent.guard */ 4092);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 1699);





















const routes = [{
  path: 'register',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  canActivate: [_guards_register_routeprevent_guard__WEBPACK_IMPORTED_MODULE_16__.registerRoutepreventGuard]
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_17__.AboutComponent
}, {
  path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.authGuard],
  children: [{
    path: '',
    component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__.MemberListComponent
  }, {
    path: 'members',
    component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__.MemberListComponent
  }, {
    path: 'members/:username',
    component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_2__.MemberDetailComponent,
    resolve: [_resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_11__.memberDetailedResolver]
  }, {
    path: 'member/edit',
    component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_9__.MemberEditComponent,
    canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__.preventUnsavedChangesGuard]
  }, {
    path: 'user-tracking',
    component: _user_tracking_user_tracking_component__WEBPACK_IMPORTED_MODULE_14__.UserTrackingComponent
  }, {
    path: 'lists',
    component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__.ListsComponent
  }, {
    path: 'messages',
    component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__.MessagesComponent
  }, {
    path: 'admin',
    component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_12__.AdminPanelComponent,
    canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__.adminGuard]
  }, {
    path: 'dashboard',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__.DashboardComponent,
    canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__.adminGuard]
  }]
}, {
  path: 'errors',
  component: _errors_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_6__.TestErrorComponent
}, {
  path: 'not-found',
  component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent
}, {
  path: 'server-error',
  component: _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_8__.ServerErrorComponent
}, {
  path: '**',
  component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent,
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services/account.service */ 7783);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ 5120);





class AppComponent {
  constructor(accountService) {
    this.accountService = accountService;
  }
  ngOnInit() {
    this.setCurrentUser();
  }
  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 7,
    vars: 0,
    consts: [[1, "full-screen-container"], [1, "container", "background-container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-spinner")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0)(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent],
    styles: [".background-container[_ngcontent-%COMP%] {\n    padding-top: 100px;\n    background-size:auto;\n    background-position: center;\n    scroll-behavior: auto;\n}\n.full-screen-container[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-image: url('background.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n    overflow-y: auto;\n    \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVix1Q0FBeUM7SUFDekMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjs7QUFFcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XHJcbn1cclxuLmZ1bGwtc2NyZWVuLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JhY2tncm91bmQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 2844);
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-list/member-list.component */ 9211);
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lists/lists.component */ 4173);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component */ 8853);
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_modules/shared.module */ 4849);
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ 413);
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ 4641);
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./members/member-card/member-card.component */ 6241);
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ 6682);
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ 9120);
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_forms/text-input/text-input.component */ 7114);
/* harmony import */ var _forms_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_forms/date-picker/date-picker.component */ 3123);
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ 9633);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_directives/has-role.directive */ 4098);
/* harmony import */ var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/user-management/user-management.component */ 2652);
/* harmony import */ var _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/photo-management/photo-management.component */ 1873);
/* harmony import */ var _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modals/roles-modal/roles-modal.component */ 8030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_customRouteReuseStrategy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_services/customRouteReuseStrategy */ 548);
/* harmony import */ var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/confirm-dialog/confirm-dialog.component */ 6634);
/* harmony import */ var _intercepters_error_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_intercepters/error.interceptor */ 8908);
/* harmony import */ var _intercepters_jwt_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_intercepters/jwt.interceptor */ 9675);
/* harmony import */ var _intercepters_loading_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_intercepters/loading.interceptor */ 9796);
/* harmony import */ var _user_tracking_user_tracking_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-tracking/user-tracking.component */ 3539);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4225);
/* harmony import */ var _charts_age_bar_chart_age_bar_chart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./charts/age-bar-chart/age-bar-chart.component */ 1250);
/* harmony import */ var _charts_sex_pie_chart_sex_pie_chart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./charts/sex-pie-chart/sex-pie-chart.component */ 4988);
/* harmony import */ var _charts_relation_status_pie_chart_relation_status_pie_chart_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./charts/relation-status-pie-chart/relation-status-pie-chart.component */ 1961);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 1699);







































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS,
      useClass: _intercepters_error_interceptor__WEBPACK_IMPORTED_MODULE_23__.ErrorInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS,
      useClass: _intercepters_jwt_interceptor__WEBPACK_IMPORTED_MODULE_24__.JwtInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS,
      useClass: _intercepters_loading_interceptor__WEBPACK_IMPORTED_MODULE_25__.LoadingInterceptor,
      multi: true
    }, {
      provide: _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouteReuseStrategy,
      useClass: _services_customRouteReuseStrategy__WEBPACK_IMPORTED_MODULE_21__.CustomRouteReuseStrategy
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule, _modules_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_5__.MemberListComponent, _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__.ListsComponent, _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__.MessagesComponent, _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent, _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__.ServerErrorComponent, _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_11__.MemberCardComponent, _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_12__.MemberEditComponent, _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_13__.PhotoEditorComponent, _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_14__.TextInputComponent, _forms_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__.DatePickerComponent, _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_16__.AdminPanelComponent, _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_17__.HasRoleDirective, _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_18__.UserManagementComponent, _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_19__.PhotoManagementComponent, _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_20__.RolesModalComponent, _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogComponent, _user_tracking_user_tracking_component__WEBPACK_IMPORTED_MODULE_26__.UserTrackingComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__.DashboardComponent, _charts_age_bar_chart_age_bar_chart_component__WEBPACK_IMPORTED_MODULE_28__.AgeBarChartComponent, _charts_sex_pie_chart_sex_pie_chart_component__WEBPACK_IMPORTED_MODULE_29__.SexPieChartComponent, _charts_relation_status_pie_chart_relation_status_pie_chart_component__WEBPACK_IMPORTED_MODULE_30__.RelationStatusPieChartComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_31__.LoginComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_32__.AboutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule, _modules_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule]
  });
})();

/***/ }),

/***/ 1250:
/*!*****************************************************************!*\
  !*** ./src/app/charts/age-bar-chart/age-bar-chart.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgeBarChartComponent: () => (/* binding */ AgeBarChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 3624);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);



class AgeBarChartComponent {
  constructor() {
    this.sendBarToDashboard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isLoaded = false;
  }
  ngOnInit() {
    this.chart(this.receivedData);
  }
  chart(Edata) {
    const data = Object.values(Edata);
    const ageRanges = [{
      min: 18,
      max: 20
    }, {
      min: 20,
      max: 25
    }, {
      min: 25,
      max: 30
    }, {
      min: 30,
      max: 35
    }, {
      min: 35,
      max: 40
    }, {
      min: 40,
      max: 45
    }, {
      min: 45,
      max: 50
    }, {
      min: 50,
      max: 55
    }, {
      min: 60,
      max: 65
    }, {
      min: 65,
      max: 70
    }, {
      min: 70,
      max: 75
    }, {
      min: 75,
      max: 80
    }, {
      min: 80,
      max: 85
    }];
    // Initialize an object to store counts for each age range
    const ageRangeCounts = {};
    data.forEach(profile => {
      const age = parseInt(profile.age);
      if (!isNaN(age)) {
        for (const range of ageRanges) {
          if (age >= range.min && age < range.max) {
            const key = `${range.min}-${range.max}`;
            ageRangeCounts[key] = (ageRangeCounts[key] || 0) + 1;
          }
        }
      }
    });
    // Convert the ageRangeCounts object into an array of objects
    const ageRangeData = Object.keys(ageRangeCounts).map(key => ({
      x: key,
      y: ageRangeCounts[key]
    }));
    console.log(ageRangeData);
    this.showChart(ageRangeData);
  }
  showChart(chartdata) {
    const that = this;
    const options = {
      chart: {
        type: 'bar',
        height: '600',
        events: {
          click(event, chartContext, config) {
            that.sendBarToDashboard.emit(config.config.series[config.seriesIndex].data[config.dataPointIndex]);
          }
        }
      },
      title: {
        text: 'Age Info'
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      series: [{
        data: chartdata
      }],
      yaxis: {
        title: {
          text: "No.of.Users",
          style: {
            color: '#F31C1C',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      },
      xaxis: {
        title: {
          text: "Age Classes",
          style: {
            color: '#F31C1C',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    };
    if (!this.isLoaded) {
      this.chartObj = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#barChart"), options);
      this.chartObj.render();
      this.isLoaded = true;
      console.log(chartdata);
    } else {
      this.chartObj.destroy();
      this.chartObj = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#barChart"), options);
      this.chartObj.render();
      console.log(chartdata);
      // console.log(this.isLoaded)
    }
  }
  static #_ = this.ɵfac = function AgeBarChartComponent_Factory(t) {
    return new (t || AgeBarChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AgeBarChartComponent,
    selectors: [["app-age-bar-chart"]],
    inputs: {
      receivedData: "receivedData"
    },
    outputs: {
      sendBarToDashboard: "sendBarToDashboard"
    },
    decls: 1,
    vars: 0,
    consts: [["id", "barChart"]],
    template: function AgeBarChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1961:
/*!*****************************************************************************************!*\
  !*** ./src/app/charts/relation-status-pie-chart/relation-status-pie-chart.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelationStatusPieChartComponent: () => (/* binding */ RelationStatusPieChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 3624);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);



class RelationStatusPieChartComponent {
  constructor() {
    this.sendStatusPieToDashboard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isLoaded = false;
  }
  ngOnInit() {
    this.chart(this.receivedData);
  }
  chart(Edata) {
    const data = Object.values(Edata);
    // Initialize variables to count the relationship status categories
    let seeingSomeoneCount = 0;
    let singleCount = 0;
    let marriedCount = 0;
    let availableCount = 0;
    data.forEach(profile => {
      const status = profile.status.toLowerCase(); // Ensure the status values are in lowercase for consistency
      if (status === 'seeing someone') {
        seeingSomeoneCount++;
      } else if (status === 'single') {
        singleCount++;
      } else if (status === 'married') {
        marriedCount++;
      } else if (status === 'available') {
        availableCount++;
      }
    });
    // Create an array of objects for the pie chart
    const relationshipStatusData = [seeingSomeoneCount, singleCount, marriedCount, availableCount];
    this.showChart(relationshipStatusData);
  }
  showChart(relationshipStatusData) {
    const that = this;
    const options = {
      series: relationshipStatusData,
      chart: {
        type: "pie",
        height: '300',
        events: {
          dataPointSelection: function (event, chartContext, config) {
            that.sendStatusPieToDashboard.emit(['seeing someone', 'single', 'married', 'available'][config.dataPointIndex]);
            // console.log(["Seeing Someone", "Single", "Married", "Available"][config.dataPointIndex]);
          }
        }
      },

      title: {
        text: 'Relation status'
      },
      labels: ["Seeing Someone", "Single", "Married", "Available"]
    };
    if (!this.isLoaded) {
      this.chartObj = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#relationChart"), options);
      this.chartObj.render();
      this.isLoaded = true;
      console.log(relationshipStatusData);
    } else {
      this.chartObj.destroy();
      this.chartObj = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#relationChart"), options);
      this.chartObj.render();
      console.log(relationshipStatusData);
      console.log(this.isLoaded);
    }
  }
  static #_ = this.ɵfac = function RelationStatusPieChartComponent_Factory(t) {
    return new (t || RelationStatusPieChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RelationStatusPieChartComponent,
    selectors: [["app-relation-status-pie-chart"]],
    inputs: {
      receivedData: "receivedData"
    },
    outputs: {
      sendStatusPieToDashboard: "sendStatusPieToDashboard"
    },
    decls: 1,
    vars: 0,
    consts: [["id", "relationChart"]],
    template: function RelationStatusPieChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4988:
/*!*****************************************************************!*\
  !*** ./src/app/charts/sex-pie-chart/sex-pie-chart.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SexPieChartComponent: () => (/* binding */ SexPieChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 3624);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);



class SexPieChartComponent {
  constructor() {
    this.sendSexPieToDashboard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isLoaded = false;
  }
  ngOnInit() {
    this.chart(this.receivedData);
  }
  chart(Rdata) {
    const data = Object.values(Rdata);
    // Initialize variables to count the gender categories
    let maleCount = 0;
    let femaleCount = 0;
    data.forEach(profile => {
      const gender = profile.sex.toLowerCase(); // Ensure the gender values are in lowercase for consistency
      if (gender === 'm' || gender === 'male') {
        maleCount++;
      } else if (gender === 'f' || gender === 'female') {
        femaleCount++;
      }
    });
    // Create an array with the count of males and females
    const genderData = [maleCount, femaleCount];
    this.showChart(genderData);
  }
  showChart(genderData) {
    const that = this;
    const options = {
      series: genderData,
      chart: {
        type: "pie",
        height: '300',
        events: {
          dataPointSelection: function (event, chartContext, config) {
            that.sendSexPieToDashboard.emit(["Male", "Female"][config.dataPointIndex]);
            // console.log(["Male", "Female"][config.dataPointIndex]);
          }
        }
      },

      title: {
        text: 'Sex Info'
      },
      labels: ["Male", "Female"]
    };
    if (!this.isLoaded) {
      this.chartObj = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sexChart"), options);
      this.chartObj.render();
      this.isLoaded = true;
      console.log(genderData);
    } else {
      this.chartObj.destroy();
      this.chartObj = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sexChart"), options);
      this.chartObj.render();
      console.log(genderData);
      console.log(this.isLoaded);
    }
  }
  static #_ = this.ɵfac = function SexPieChartComponent_Factory(t) {
    return new (t || SexPieChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SexPieChartComponent,
    selectors: [["app-sex-pie-chart"]],
    inputs: {
      receivedData: "receivedData"
    },
    outputs: {
      sendSexPieToDashboard: "sendSexPieToDashboard"
    },
    decls: 1,
    vars: 0,
    consts: [["id", "sexChart"]],
    template: function SexPieChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4225:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _charts_okcupid_profiles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/okcupid_profiles.json */ 4846);
/* harmony import */ var _charts_relation_status_pie_chart_relation_status_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charts/relation-status-pie-chart/relation-status-pie-chart.component */ 1961);
/* harmony import */ var _charts_sex_pie_chart_sex_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../charts/sex-pie-chart/sex-pie-chart.component */ 4988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _charts_age_bar_chart_age_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../charts/age-bar-chart/age-bar-chart.component */ 1250);







const _c0 = ["barchart1"];
// import { readData } from './dataRead'
// import jsonData from './okcupid_profiles.json';
class DashboardComponent {
  constructor() {
    // ...
  }
  updateFromSexPieChart(gender) {
    // Filter the data based on the gender
    let sex = 'm';
    if (gender === 'female') {
      sex = 'female';
    }
    const filteredData = Object.values(_charts_okcupid_profiles_json__WEBPACK_IMPORTED_MODULE_0__).filter(profile => {
      return profile.sex === sex;
    });
    console.log(filteredData);
    this.ChartData = filteredData;
    this.ageBarChart.chart(this.ChartData);
    this.statusPieChart.chart(this.ChartData);
  }
  updateFromStatusPieChart(status) {
    // Filter the data based on the status
    const filteredData = Object.values(_charts_okcupid_profiles_json__WEBPACK_IMPORTED_MODULE_0__).filter(profile => {
      return profile.status === status;
    });
    console.log(filteredData);
    this.ChartData = filteredData;
    this.ageBarChart.chart(this.ChartData);
    this.sexPieChart.chart(this.ChartData);
  }
  // jData: Data = jsonData;
  updateFromBarChart(data) {
    const ageRange = data.x; // e.g., '20-30'
    const ageRangeParts = ageRange.split('-');
    const minAge = parseInt(ageRangeParts[0]);
    const maxAge = parseInt(ageRangeParts[1]);
    // Filter the data based on the age range
    const filteredData = Object.values(_charts_okcupid_profiles_json__WEBPACK_IMPORTED_MODULE_0__).filter(profile => {
      const age = parseInt(profile.age);
      return !isNaN(age) && age >= minAge && age <= maxAge;
    });
    //filteredData contains profiles within the specified age range
    // console.log("Filtered Data:", filteredData);
    this.ChartData = filteredData;
    // this.sendtoPieCharts.emit(this.pieChartData);
    this.sexPieChart.chart(this.ChartData);
    this.statusPieChart.chart(this.ChartData);
  }
  ngOnInit() {
    this.ChartData = _charts_okcupid_profiles_json__WEBPACK_IMPORTED_MODULE_0__;
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    viewQuery: function DashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_charts_relation_status_pie_chart_relation_status_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__.RelationStatusPieChartComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_charts_sex_pie_chart_sex_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__.SexPieChartComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ageBarChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.statusPieChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sexPieChart = _t.first);
      }
    },
    decls: 10,
    vars: 3,
    consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [3, "receivedData", "sendBarToDashboard"], ["barchart1", ""], [1, "pie-chart-container"], [3, "receivedData", "sendSexPieToDashboard"], [3, "receivedData", "sendStatusPieToDashboard"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-age-bar-chart", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sendBarToDashboard", function DashboardComponent_Template_app_age_bar_chart_sendBarToDashboard_3_listener($event) {
          return ctx.updateFromBarChart($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "div", 5)(7, "app-sex-pie-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sendSexPieToDashboard", function DashboardComponent_Template_app_sex_pie_chart_sendSexPieToDashboard_7_listener($event) {
          return ctx.updateFromSexPieChart($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "app-relation-status-pie-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sendStatusPieToDashboard", function DashboardComponent_Template_app_relation_status_pie_chart_sendStatusPieToDashboard_9_listener($event) {
          return ctx.updateFromStatusPieChart($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("receivedData", ctx.ChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("receivedData", ctx.ChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("receivedData", ctx.ChartData);
      }
    },
    dependencies: [_charts_age_bar_chart_age_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__.AgeBarChartComponent, _charts_sex_pie_chart_sex_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__.SexPieChartComponent, _charts_relation_status_pie_chart_relation_status_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__.RelationStatusPieChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 413:
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class NotFoundComponent {
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container"], ["routerLink", "/", 1, "btn", "btn-info", "btn-lg"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Return to Home page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4641:
/*!***************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerErrorComponent: () => (/* binding */ ServerErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function ServerErrorComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Note : if you are seeing this then angular probably not to blame");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What to do next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol")(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Open chrome dev tools! Then check the failing request in the network");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Examine the request URL - what API endpoint are you requesting?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reproduce the problem in postman - if we get same error angular is 100% not the problem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Folloing is the stack trace - the first lines will tell you which line cause error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error: ", ctx_r0.error.message, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error.details, " ");
  }
}
class ServerErrorComponent {
  constructor(router) {
    this.router = router;
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];
    console.log(this.error);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ServerErrorComponent_Factory(t) {
    return new (t || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServerErrorComponent,
    selectors: [["app-server-error"]],
    decls: 3,
    vars: 1,
    consts: [[4, "ngIf"], [1, "text-danger"], [1, "font-weight-bold"], [2, "font-weight", "bold"], [1, "mt-5", 2, "background-color", "whitesmoke"]],
    template: function ServerErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Internal Server Error - refreshing the page will make the error disappear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServerErrorComponent_ng_container_2_Template, 18, 2, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5143:
/*!***********************************************************!*\
  !*** ./src/app/errors/test-error/test-error.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestErrorComponent: () => (/* binding */ TestErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


function TestErrorComponent_div_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2, " ");
  }
}
function TestErrorComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestErrorComponent_div_11_li_2_Template, 2, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
  }
}
class TestErrorComponent {
  constructor(http) {
    this.http = http;
    this.validationErrors = [];
    this.baseUrl = 'https://localhost:5001/api/';
  }
  ngOnInit() {}
  get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  get401Error() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error);
        this.validationErrors = error;
      }
    });
  }
  static #_ = this.ɵfac = function TestErrorComponent_Factory(t) {
    return new (t || TestErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TestErrorComponent,
    selectors: [["app-test-error"]],
    decls: 12,
    vars: 1,
    consts: [[1, "btn", "btn-outline-primary", "me-3", 3, "click"], ["class", "row mt-5", 4, "ngIf"], [1, "row", "mt-5"], [1, "text-danger"], [4, "ngFor", "ngForOf"]],
    template: function TestErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_1_listener() {
          return ctx.get404Error();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Test 404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_3_listener() {
          return ctx.get400Error();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test 400 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_5_listener() {
          return ctx.get500Error();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test 500 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_7_listener() {
          return ctx.get401Error();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Test 401 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_9_listener() {
          return ctx.get400ValidationError();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Test 400 validation Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestErrorComponent_div_11_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register/register.component */ 2844);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ 2014);






function HomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Find your match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Only on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Heart To Heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Come on in to view your matches... all you need to do is sign up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.loginToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.registerToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "app-register", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cancelRegister", function HomeComponent_div_2_Template_app_register_cancelRegister_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.cancelRegisterMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function HomeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 14)(3, "app-login", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cancelLogin", function HomeComponent_div_3_Template_app_login_cancelLogin_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.cancelLoginMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
class HomeComponent {
  constructor(http) {
    this.http = http;
    this.loginMode = false;
    this.registerMode = false;
  }
  ngOnInit() {
    // this.getUsers();
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
    this.loginMode = false;
  }
  loginToggle() {
    this.loginMode = !this.loginMode;
    this.registerMode = false;
  }
  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users').subscribe({
  //     next: res => this.users = res,
  //     error: error => console.log(error),
  //     complete: () => console.log("Request Completed ...!")
  //   })
  // }
  cancelRegisterMode(event) {
    this.registerMode = event;
  }
  cancelLoginMode(event) {
    this.loginMode = event;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 4,
    vars: 3,
    consts: [[1, "container", "mt-3"], ["style", "text-align: center;", 4, "ngIf"], ["class", "container", 4, "ngIf"], [2, "text-align", "center"], [1, "text-danger"], [1, "lead"], [1, "text-center"], [1, "btn", "btn-success", "btn-lg", "me-2", 3, "click"], [1, "btn", "btn-primary", "btn-lg", "me-2", 3, "click"], ["routerLink", "/about", 1, "btn", "btn-primary", "btn-info", "btn-lg"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-4"], [3, "cancelRegister"], [1, "col-md-6"], [3, "cancelLogin"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 16, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.registerMode && !ctx.loginMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginMode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4173:
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListsComponent: () => (/* binding */ ListsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/members.service */ 9088);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4850);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 2072);
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../members/member-card/member-card.component */ 6241);







function ListsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-member-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("member", member_r2);
  }
}
function ListsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "pagination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListsComponent_div_12_Template_pagination_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.pagination.currentPage = $event);
    })("pageChanged", function ListsComponent_div_12_Template_pagination_pageChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.pageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r1.pagination.totalItems)("itemsPerPage", ctx_r1.pagination.itemsPerPage)("ngModel", ctx_r1.pagination.currentPage)("maxSize", 10);
  }
}
class ListsComponent {
  constructor(memberService) {
    this.memberService = memberService;
    this.predicate = 'liked';
    this.pageNumber = 1;
    this.pageSize = 5;
  }
  ngOnInit() {
    this.loadLikes();
  }
  loadLikes() {
    this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe({
      next: response => {
        this.members = response.result;
        this.pagination = response.pagination;
      }
    });
  }
  pageChanged(event) {
    if (this.pageNumber !== event.page) {
      this.pageNumber = event.page;
      this.loadLikes();
    }
  }
  static #_ = this.ɵfac = function ListsComponent_Factory(t) {
    return new (t || ListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ListsComponent,
    selectors: [["app-lists"]],
    decls: 13,
    vars: 5,
    consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], [1, "d-flex"], ["name", "predicate", 1, "btn-group"], ["btnRadio", "liked", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["btnRadio", "likedBy", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "row", "mt-3"], ["class", "col-2", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "col-2"], [3, "member"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"]],
    template: function ListsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_6_listener($event) {
          return ctx.predicate = $event;
        })("click", function ListsComponent_Template_button_click_6_listener() {
          return ctx.loadLikes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Members I like");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_8_listener($event) {
          return ctx.predicate = $event;
        })("click", function ListsComponent_Template_button_click_8_listener() {
          return ctx.loadLikes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Members who like me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ListsComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ListsComponent_div_12_Template, 2, 5, "div", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.predicate === "liked" ? "Members I like" : "Members who like me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.predicate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.predicate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pagination);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__.ButtonRadioDirective, _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_1__.MemberCardComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7783);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);






class LoginComponent {
  constructor(accountServices, router, toastr) {
    this.accountServices = accountServices;
    this.router = router;
    this.toastr = toastr;
    this.cancelLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.model = {};
  }
  ngOnInit() {
    // this.getCurrentUser()
    this.accountServices.currentUser$ = this.accountServices.currentUser$;
  }
  login() {
    this.accountServices.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members')
      // error: error => this.toastr.error(error.error)
    });
  }

  cancel() {
    this.cancelLogin.emit(false);
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    outputs: {
      cancelLogin: "cancelLogin"
    },
    decls: 19,
    vars: 2,
    consts: [["autocomplete", "off", 3, "ngSubmit"], ["loginFrom", "ngForm"], [1, "text-center", "text-primary"], [1, "row", "mb-3"], [1, "col-md-6", "mb-3"], ["for", "username"], ["name", "username", "type", "text", "placeholder", "Username", 1, "form-control", "me-2", 3, "ngModel", "ngModelChange"], ["for", "password"], ["name", "password", "type", "password", "placeholder", "Password", 1, "form-control", "me-2", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-success", "me-2"], ["type", "submit", 1, "btn", "btn-default", 3, "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.model.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.model.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.password);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6241:
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberCardComponent: () => (/* binding */ MemberCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/members.service */ 9088);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/presence.service */ 3949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






const _c0 = function (a0) {
  return {
    "text-danger": a0
  };
};
const _c1 = function () {
  return {
    tab: "Messages"
  };
};
function MemberCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 4)(4, "li", 5)(5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 5)(8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberCardComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.ToggleLike(ctx_r1.member));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 5)(11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "h6", 13)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r0.member.knownAs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx_r0.member.userName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx_r0.member.liked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx_r0.member.userName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-online", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 11, ctx_r0.presenceService.onlineUsers$)) == null ? null : tmp_6_0.includes(ctx_r0.member.userName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.member.knownAs, ", ", ctx_r0.member.age, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.member.city);
  }
}
class MemberCardComponent {
  constructor(memberService, toastr, presenceService) {
    this.memberService = memberService;
    this.toastr = toastr;
    this.presenceService = presenceService;
  }
  ngOnInit() {
    // console.log(this.member)
  }
  ToggleLike(member) {
    if (member.liked) {
      this.removeLike(member);
    } else {
      this.addLike(member);
    }
  }
  addLike(member) {
    this.memberService.addLike(member.userName).subscribe({
      next: () => {
        // this.toastr.success('You have liked ' + member.knownAs)
        this.member.liked = true;
      }
    });
  }
  removeLike(member) {
    this.memberService.removeLike(member.userName).subscribe({
      next: () => {
        // this.toastr.success('you have removed like of ' + member.knownAs )
        this.member.liked = false;
      }
    });
  }
  static #_ = this.ɵfac = function MemberCardComponent_Factory(t) {
    return new (t || MemberCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_1__.PresenceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MemberCardComponent,
    selectors: [["app-member-card"]],
    inputs: {
      member: "member"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "card mb-4 bg-transparent text-primary", 4, "ngIf"], [1, "card", "mb-4", "bg-transparent", "text-primary"], [1, "card-img-wrapper"], [1, "card-img-top", 3, "src", "alt"], [1, "list-inline", "member-icons", "animate", "text-center"], [1, "list-inline-item"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-user"], [1, "btn", "btn-primary", 3, "ngClass", "click"], [1, "fa", "fa-heart"], [1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [1, "fa", "fa-envelope"], [1, "card-body", "p-1"], [1, "card-title", "text-center", "mb-1"], [1, "fa", "fa-user", "me-2"], [1, "card-text", "text-muted", "text-center"]],
    template: function MemberCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MemberCardComponent_div_0_Template, 21, 16, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.member);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: [".card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1.2, 1.2);\n    transition-duration: 500ms;\n    transition-timing-function: ease-out;\n    \n\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.0, 1.0);\n    transition-duration: 500ms;\n    transition-timing-function: ease-out;\n}\n\n.card-img-wrapper[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: relative;\n}\n\n.member-icons[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    right: 0;\n    margin-right: auto;\n    margin-left: auto;\n    opacity: 0;\n}\n\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .member-icons[_ngcontent-%COMP%] {\n    bottom: 0;\n    opacity: 1;\n}\n\n.animate[_ngcontent-%COMP%] {\n    transition: all 0.3s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_fa-blink {\n    0% {\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0.4;\n    }\n}\n\n.is-online[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fa-blink 1.5s linear infinite;\n    color: rgb(1, 189, 42);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgLyogb3BhY2l0eTogMC43OyAqL1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1lbWJlci1pY29ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWltZy13cmFwcGVyOmhvdmVyIC5tZW1iZXItaWNvbnMge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmFuaW1hdGUge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmEtYmxpbmsge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaXMtb25saW5lIHtcclxuICAgIGFuaW1hdGlvbjogZmEtYmxpbmsgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBjb2xvcjogcmdiKDEsIDE4OSwgNDIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2861:
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberDetailComponent: () => (/* binding */ MemberDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-gallery */ 7098);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 9772);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-timeago */ 3205);
/* harmony import */ var _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../member-messages/member-messages.component */ 5449);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/members.service */ 9088);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/presence.service */ 3949);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/messages.service */ 3833);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/account.service */ 7783);

















const _c0 = ["memberTabs"];
function MemberDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MemberDetailComponent_div_7_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r7.member.lastActive), " ");
  }
}
function MemberDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Last active:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MemberDetailComponent_div_7_p_3_Template, 3, 3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.member.lastActive);
  }
}
const _c1 = function (a0) {
  return {
    "btn-danger": a0
  };
};
function MemberDetailComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MemberDetailComponent_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.ToggleLike(ctx_r9.member));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Liked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c1, ctx_r2.member.liked));
  }
}
function MemberDetailComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MemberDetailComponent_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.ToggleLike(ctx_r11.member));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c1, ctx_r3.member.liked));
  }
}
function MemberDetailComponent_gallery_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "gallery", 27);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r6.images);
  }
}
class MemberDetailComponent {
  constructor(memberService, toastr, presenceService, route, messageService, accountService) {
    this.memberService = memberService;
    this.toastr = toastr;
    this.presenceService = presenceService;
    this.route = route;
    this.messageService = messageService;
    this.accountService = accountService;
    this.member = {};
    this.images = [];
    this.messages = [];
    this.accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: user => {
        if (user) this.user = user;
      }
    });
  }
  ngOnInit() {
    this.route.data.subscribe({
      next: data => {
        this.member = data[0], console.log(data[0]);
      }
    });
    this.route.queryParams.subscribe({
      next: params => {
        params['tab'] && this.selectTab(params['tab']);
      }
    });
    this.getImages();
  }
  ngOnDestroy() {
    this.messageService.stopHubConnection();
  }
  loadMessages() {
    if (this.member) this.messageService.getMessageThread(this.member.userName).subscribe({
      next: messages => this.messages = messages
    });
  }
  selectTab(heading) {
    if (this.memberTabs) {
      this.memberTabs.tabs.find(x => x.heading === heading).active = true;
    }
  }
  onTabActivated(data) {
    this.activeTab = data;
    if (this.activeTab.heading === 'Messages' && this.user) {
      this.messageService.createHubConnection(this.user, this.member.userName);
    } else {
      this.messageService.stopHubConnection();
    }
  }
  getImages() {
    if (!this.member) return;
    for (const photo of this.member?.photos) {
      this.images.push(new ng_gallery__WEBPACK_IMPORTED_MODULE_7__.ImageItem({
        src: photo.url,
        thumb: photo.url
      }));
    }
  }
  ToggleLike(member) {
    if (member.liked) {
      this.removeLike(member);
    } else {
      this.addLike(member);
    }
  }
  addLike(member) {
    this.memberService.addLike(member.userName).subscribe({
      next: () => {
        // this.toastr.success('You have liked ' + member.knownAs)
        this.member.liked = true;
      }
    });
  }
  removeLike(member) {
    this.memberService.removeLike(member.userName).subscribe({
      next: () => {
        // this.toastr.success('you have removed like of ' + member.knownAs)
        this.member.liked = false;
      }
    });
  }
  static #_ = this.ɵfac = function MemberDetailComponent_Factory(t) {
    return new (t || MemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_2__.PresenceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MemberDetailComponent,
    selectors: [["app-member-detail"]],
    viewQuery: function MemberDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.memberTabs = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 53,
    vars: 23,
    consts: [[1, "row"], [1, "col-md-4"], [1, "card", "border-primary", "bg-transparent", "text-dark"], [1, "card-img-top", "img-thumbnail", "img-fluid", 3, "src", "alt"], [1, "card-body"], ["class", "mb-2", 4, "ngIf"], [4, "ngIf"], [1, "card-footer", "border-primary", "bg-transparent", "text-dark"], [1, "btn-group", "d-flex"], ["class", "btn btn-white border", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn btn-white border border-primary", 3, "ngClass", "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "col-md-8", 2, "background-color", "rgba(0, 0, 0, 0)"], [1, "member-tabset"], ["memberTabs", ""], [2, "background-color", "rgba(0, 0, 0, 0)", 3, "heading", "selectTab"], ["heading", "Interests", 3, "selectTab"], ["heading", "Photos", 3, "selectTab"], ["photoTab", "tab"], ["class", "gallery img-fluid", 3, "items", 4, "ngIf"], ["heading", "Messages", 3, "selectTab"], [3, "username"], [1, "mb-2"], [1, "fa", "fa-user-circle", "text-success"], [1, "btn", "btn-white", "border", 3, "ngClass", "click"], ["bt1", ""], [1, "btn", "btn-white", "border", "border-primary", 3, "ngClass", "click"], [1, "gallery", "img-fluid", 3, "items"]],
    template: function MemberDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MemberDetailComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MemberDetailComponent_div_7_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div")(10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div")(15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Age:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Member since:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 7)(26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, MemberDetailComponent_button_27_Template, 3, 3, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, MemberDetailComponent_button_28_Template, 2, 3, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MemberDetailComponent_Template_button_click_29_listener() {
          return ctx.selectTab("Messages");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 12)(32, "tabset", 13, 14)(34, "tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_34_listener($event) {
          return ctx.onTabActivated($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Looking for");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_43_listener($event) {
          return ctx.onTabActivated($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "tab", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_48_listener($event) {
          return ctx.onTabActivated($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, MemberDetailComponent_gallery_50_Template, 1, 1, "gallery", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_51_listener($event) {
          return ctx.onTabActivated($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "app-member-messages", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](49);
        let tmp_2_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", ctx.member.knownAs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 16, ctx.presenceService.onlineUsers$)) == null ? null : tmp_2_0.includes(ctx.member.userName));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 18, ctx.presenceService.onlineUsers$)) == null ? null : tmp_3_0.includes(ctx.member.userName)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.member.city, ", ", ctx.member.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](24, 20, ctx.member.created, "dd MMM yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.member.liked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.member.liked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx.member.knownAs, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.member.introduction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.member.lookingFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.member.interests);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("username", ctx.member.userName);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__.TabsModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__.TabsetComponent, ng_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryModule, ng_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryComponent, ngx_timeago__WEBPACK_IMPORTED_MODULE_12__.TimeagoModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_12__.TimeagoPipe, _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_0__.MemberMessagesComponent],
    styles: [".img-thumbnail[_ngcontent-%COMP%] {\n    margin: 25px;\n    width: 85%;\n    height: 85%;\n\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding: 0 25px;\n\n}\n\n.card-footer[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    background-color: #fff;\n    border-top: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcblxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuXHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6682:
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberEditComponent: () => (/* binding */ MemberEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/account.service */ 7783);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/members.service */ 9088);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 9772);
/* harmony import */ var _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo-editor/photo-editor.component */ 9120);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-timeago */ 3205);










const _c0 = ["editForm"];
function MemberEditComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Information: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "You have made changes. Any unsaved changes will be lost");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MemberEditComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Your profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MemberEditComponent_div_0_div_5_Template, 5, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "div")(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div")(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Last active:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div")(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Member since:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8)(33, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 3)(36, "tabset", 10)(37, "tab", 11)(38, "form", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MemberEditComponent_div_0_Template_form_ngSubmit_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.updateMember());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.member.introduction = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Looking for");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.member.lookingFor = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Interests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.member.interests = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Location Details: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 18)(52, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "City: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_input_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.member.city = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Country: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_input_ngModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.member.country = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "app-photo-editor", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r0.member.knownAs);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.member.city, ", ", ctx_r0.member.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.member.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 16, ctx_r0.member.lastActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](31, 18, ctx_r0.member.created, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r2.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx_r0.member.knownAs, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.introduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.lookingFor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.interests);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("member", ctx_r0.member);
  }
}
class MemberEditComponent {
  unloadNotification($event) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }
  /**
   *
   */
  constructor(accountService, memberServices, toastr) {
    this.accountService = accountService;
    this.memberServices = memberServices;
    this.toastr = toastr;
    this.user = null;
    accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: user => this.user = user
    });
  }
  ngOnInit() {
    this.loadMember();
  }
  loadMember() {
    if (!this.user) return;
    this.memberServices.getMember(this.user.username).subscribe({
      next: member => this.member = member
    });
  }
  updateMember() {
    this.memberServices.updateMember(this.editForm?.value).subscribe({
      next: _ => {
        this.toastr.success('Profile Updated Sucessfully');
        this.editForm?.reset(this.member);
      }
    });
  }
  static #_ = this.ɵfac = function MemberEditComponent_Factory(t) {
    return new (t || MemberEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MemberEditComponent,
    selectors: [["app-member-edit"]],
    viewQuery: function MemberEditComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
      }
    },
    hostBindings: function MemberEditComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("beforeunload", function MemberEditComponent_beforeunload_HostBindingHandler($event) {
          return ctx.unloadNotification($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    decls: 1,
    vars: 1,
    consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "col-md-4", "mb-4"], [1, "col-12", "col-md-8"], ["class", "alert alert-info pb-0", 4, "ngIf"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], [1, "card-footer"], ["type", "submit", "form", "editForm", 1, "btn", "btn-success", "col-12", 3, "disabled"], [1, "member-tabset"], [3, "heading"], ["id", "editForm", 3, "ngSubmit"], ["editForm", "ngForm"], [1, "mt-2"], ["name", "introduction", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "lookingFor", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "interests", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "flex-row", "align-items-center"], ["for", "city"], ["type", "text", "name", "city", 1, "form-control", "mx-2", 3, "ngModel", "ngModelChange"], ["for", "country"], ["type", "text", "name", "country", 1, "form-control", "mx-2", 3, "ngModel", "ngModelChange"], ["heading", "Edit Photos"], [3, "member"], [1, "alert", "alert-info", "pb-0"]],
    template: function MemberEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MemberEditComponent_div_0_Template, 60, 21, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.member);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabsetComponent, _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_2__.PhotoEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_9__.TimeagoPipe],
    styles: [".img-thumbnail[_ngcontent-%COMP%] {\n    margin: 25px;\n    width: 85%;\n    height: 85%;\n\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding: 0 25px;\n\n}\n\n.card-footer[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    background-color: #fff;\n    border-top: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXOztBQUVmOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdGh1bWJuYWlsIHtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuXHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG5cclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9211:
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberListComponent: () => (/* binding */ MemberListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/members.service */ 9088);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4850);
/* harmony import */ var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member-card/member-card.component */ 6241);






function MemberListComponent_div_0_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gender_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", gender_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", gender_r5.display, " ");
  }
}
function MemberListComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-member-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("member", member_r6);
  }
}
function MemberListComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_0_div_22_Template_pagination_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.pagination.currentPage = $event);
    })("pageChanged", function MemberListComponent_div_0_div_22_Template_pagination_pageChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.pageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r4.pagination.totalItems)("itemsPerPage", ctx_r4.pagination.itemsPerPage)("ngModel", ctx_r4.pagination.currentPage)("maxSize", 4);
  }
}
function MemberListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function MemberListComponent_div_0_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.loadMembers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4)(4, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Age from:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_0_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.userParams.minAge = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Age to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_0_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.userParams.maxAge = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Show:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_0_Template_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.userParams.gender = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MemberListComponent_div_0_option_15_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Apply Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberListComponent_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Reset Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MemberListComponent_div_0_div_21_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MemberListComponent_div_0_div_22_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.userParams.minAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.userParams.maxAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.userParams.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.genderList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.members);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.pagination);
  }
}
class MemberListComponent {
  constructor(memberService) {
    this.memberService = memberService;
    this.members = [];
    this.genderList = [{
      value: 'male',
      display: 'Males'
    }, {
      value: 'female',
      display: 'Females'
    }];
    this.userParams = this.memberService.getUserParams();
  }
  ngOnInit() {
    // this.member$ = this.memberService.getMembers();
    this.loadMembers();
  }
  loadMembers() {
    if (this.userParams) {
      this.memberService.setUserParams(this.userParams);
      this.memberService.getMembers(this.userParams).subscribe({
        next: response => {
          if (response.result && response.pagination) {
            this.members = response.result;
            this.pagination = response.pagination;
          }
        }
      });
    }
  }
  resetFilters() {
    this.userParams = this.memberService.resetUserParams();
    this.loadMembers();
  }
  pageChanged(event) {
    if (this.userParams && this.userParams?.pageNumber !== event.page) {
      this.memberService.setUserParams(this.userParams);
      this.userParams.pageNumber = event.page;
      this.loadMembers();
    }
  }
  static #_ = this.ɵfac = function MemberListComponent_Factory(t) {
    return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MemberListComponent,
    selectors: [["app-member-list"]],
    decls: 1,
    vars: 1,
    consts: [["class", "container mt-3", 4, "ngIf"], [1, "container", "mt-3"], ["autocomplete", "off", 1, "d-flex", "flex-wrap", "mb-3", 3, "ngSubmit"], ["form", "ngForm"], [1, "d-flex", "mx-2", "mb-2"], [1, "col-form-label", "me-2"], ["type", "number", "name", "minAge", 1, "form-control", "border", "border-primary", "bg-transparent", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "maxAge", 1, "form-control", "border", "border-primary", "bg-transparent", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["name", "gender", 1, "form-select", "border", "border-primary", "bg-transparent", 2, "width", "130px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", "mx-2"], ["type", "submit", 1, "btn", "btn-info", "mx-2", 3, "click"], [1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end", 4, "ngIf"], [3, "value"], [1, "col"], [3, "member"], [1, "d-flex", "justify-content-end"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"]],
    template: function MemberListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MemberListComponent_div_0_Template, 23, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userParams);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_1__.MemberCardComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5449:
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberMessagesComponent: () => (/* binding */ MemberMessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-timeago */ 3205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_services/messages.service */ 3833);








const _c0 = ["messageForm"];
function MemberMessagesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No messages yet... say hi by using the message box below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MemberMessagesComponent_ul_5_li_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(unread)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MemberMessagesComponent_ul_5_li_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(read ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, message_r6.dateRead), ")");
  }
}
function MemberMessagesComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "div")(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17)(5, "div", 18)(6, "small", 19)(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MemberMessagesComponent_ul_5_li_1_span_10_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MemberMessagesComponent_ul_5_li_1_span_11_Template, 3, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r6.senderPhotoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, message_r6.messageSent));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !message_r6.dateRead && message_r6.senderUsername !== ctx_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r6.dateRead && message_r6.senderUsername !== ctx_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r6.content);
  }
}
function MemberMessagesComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MemberMessagesComponent_ul_5_li_1_Template, 14, 7, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.messageService.messageThread$));
  }
}
function MemberMessagesComponent_i_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 25);
  }
}
class MemberMessagesComponent {
  constructor(messageService) {
    this.messageService = messageService;
    this.messageContent = '';
    this.loading = false;
  }
  ngOnInit() {}
  sendMessage() {
    if (!this.username) return;
    this.loading = true;
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm?.reset();
    }).finally(() => this.loading = false);
  }
  static #_ = this.ɵfac = function MemberMessagesComponent_Factory(t) {
    return new (t || MemberMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_0__.MessagesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MemberMessagesComponent,
    selectors: [["app-member-messages"]],
    viewQuery: function MemberMessagesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageForm = _t.first);
      }
    },
    inputs: {
      username: "username"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 10,
    consts: [[1, "card", "border-primary", "bg-transparent", "text-dark"], [1, "card-body", 2, "overflow", "scroll", "height", "500px", 3, "scrollTop"], ["scrollMe", ""], [4, "ngIf"], ["class", "chat", 4, "ngIf"], [1, "card-footer"], ["autocomplete", "off", 3, "ngSubmit"], ["messageForm", "ngForm"], [1, "input-group"], ["name", "messageContent", "required", "", "type", "text", "placeholder", "Send a private message", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], [1, "chat"], [4, "ngFor", "ngForOf"], [1, "chat-img", "float-end"], ["alt", "image of user", 1, "rounded-circle", 3, "src"], [1, "chat-body"], [1, "header"], [1, "text-muted"], [1, "fa", "fa-clock-o"], ["class", "text-danger", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "text-danger"], [1, "text-success"], [1, "fa", "fa-spinner", "fa-spin"]],
    template: function MemberMessagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MemberMessagesComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MemberMessagesComponent_ul_5_Template, 3, 3, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MemberMessagesComponent_Template_form_ngSubmit_8_listener() {
          return ctx.sendMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberMessagesComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.messageContent = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MemberMessagesComponent_i_15_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollTop", _r0.scrollHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx.messageService.messageThread$)) == null ? null : tmp_1_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx.messageService.messageThread$).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.messageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r3.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_3__.TimeagoModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_3__.TimeagoPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: [".card[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.chat[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px dotted #B3A9A9;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n    max-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNoYXQge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jaGF0IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI0IzQTlBOTtcclxufVxyXG5cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9120:
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotoEditorComponent: () => (/* binding */ PhotoEditorComponent)
/* harmony export */ });
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ 8079);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/account.service */ 7783);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/members.service */ 9088);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









function PhotoEditorComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 12)(3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_0_div_1_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const photo_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.setMainPhoto(photo_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Main ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_0_div_1_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const photo_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.deletePhoto(photo_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const photo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", photo_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", photo_r3.isMain)("ngClass", photo_r3.isMain ? "btn-success active" : "btn-outline-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", photo_r3.isMain);
  }
}
function PhotoEditorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PhotoEditorComponent_div_0_div_1_Template, 7, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.member.photos);
  }
}
function PhotoEditorComponent_div_13_tr_13_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, (item_r8 == null ? null : item_r8.file == null ? null : item_r8.file.size) / 1024 / 1024, ".2"), " MB");
  }
}
function PhotoEditorComponent_div_13_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PhotoEditorComponent_div_13_tr_13_td_4_Template, 3, 4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.file == null ? null : item_r8.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.uploader == null ? null : ctx_r7.uploader.options == null ? null : ctx_r7.uploader.options.isHTML5);
  }
}
const _c0 = function (a0) {
  return {
    "width": a0
  };
};
function PhotoEditorComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upload queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 17)(6, "thead")(7, "tr")(8, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PhotoEditorComponent_div_13_tr_13_Template, 5, 2, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Queue progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_13_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.uploader == null ? null : ctx_r11.uploader.uploadAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Upload all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_13_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.uploader == null ? null : ctx_r13.uploader.cancelAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Cancel all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_13_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.uploader == null ? null : ctx_r14.uploader.clearQueue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Remove all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Queue length: ", ctx_r1.uploader == null ? null : ctx_r1.uploader.queue == null ? null : ctx_r1.uploader.queue.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.uploader == null ? null : ctx_r1.uploader.queue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, (ctx_r1.uploader == null ? null : ctx_r1.uploader.progress) + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx_r1.uploader == null ? null : (tmp_3_0 = ctx_r1.uploader.getNotUploadedItems()) == null ? null : tmp_3_0.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx_r1.uploader == null ? null : ctx_r1.uploader.isUploading));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx_r1.uploader == null ? null : ctx_r1.uploader.queue == null ? null : ctx_r1.uploader.queue.length));
  }
}
const _c1 = function (a0) {
  return {
    "nv-file-over": a0
  };
};
class PhotoEditorComponent {
  constructor(accountService, memberService, router) {
    this.accountService = accountService;
    this.memberService = memberService;
    this.router = router;
    this.hasBaseDropZoneOver = false;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: user => {
        if (user) this.user = user;
      }
    });
  }
  ngOnInit() {
    this.initilizeUploader();
  }
  fileOverBase(e) {
    this.hasBaseDropZoneOver = e;
  }
  setMainPhoto(photo) {
    this.memberService.setMainPhoto(photo.id).subscribe({
      next: _ => {
        if (this.user && this.member) {
          this.user.photoUrl = photo.url;
          this.accountService.setCurrentUser(this.user);
          this.member.photoUrl = photo.url;
          this.member.photos.forEach(p => {
            if (p.isMain) p.isMain = false;
            if (p.id === photo.id) p.isMain = true;
          });
          this.router.navigateByUrl(`/member/edit`);
        }
      }
    });
  }
  deletePhoto(photoId) {
    this.memberService.deletePhoto(photoId).subscribe({
      next: _ => {
        if (this.member) {
          this.member.photos = this.member?.photos.filter(x => x.id !== photoId);
        }
      }
    });
  }
  initilizeUploader() {
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__.FileUploader({
      url: this.baseUrl + 'users/add-photo',
      authToken: 'Bearer ' + this.user?.token,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const photo = JSON.parse(response);
        this.member?.photos.push(photo);
      }
    };
  }
  static #_ = this.ɵfac = function PhotoEditorComponent_Factory(t) {
    return new (t || PhotoEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_2__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PhotoEditorComponent,
    selectors: [["app-photo-editor"]],
    inputs: {
      member: "member"
    },
    decls: 14,
    vars: 8,
    consts: [["class", "row", 4, "ngIf"], [1, "row", "mt-3"], [1, "col-md-3"], ["ng2FileDrop", "", 1, "card", "bg-faded", "p-3", "text-center", "mb-3", "my-drop-zone", 3, "ngClass", "uploader", "fileOver"], [1, "fa", "fa-upload", "fa-3x"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader"], ["type", "file", "ng2FileSelect", "", 3, "uploader"], ["class", "col-md-9", "style", "margin-bottom: 40px", 4, "ngIf"], [1, "row"], ["class", "col-2 mb-1", 4, "ngFor", "ngForOf"], [1, "col-2", "mb-1"], ["alt", "photo of user", 1, "img-thumbnail", "mb-1", 3, "src"], [1, "text-center"], [1, "btn", "btn-sm", 3, "disabled", "ngClass", "click"], [1, "btn", "btn-sm", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash"], [1, "col-md-9", 2, "margin-bottom", "40px"], [1, "table"], ["width", "50%"], [4, "ngFor", "ngForOf"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-success", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-upload"], ["type", "button", 1, "btn", "btn-warning", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "btn", "btn-danger", "btn-s", 3, "disabled", "click"], ["nowrap", "", 4, "ngIf"], ["nowrap", ""]],
    template: function PhotoEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PhotoEditorComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Add Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileOver", function PhotoEditorComponent_Template_div_fileOver_5_listener($event) {
          return ctx.fileOverBase($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Drop photos here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Multiple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 5)(10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Single ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PhotoEditorComponent_div_13_Template, 28, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.member);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, ctx.hasBaseDropZoneOver))("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__.FileDropDirective, ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__.FileSelectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
    styles: [".nv-file-over[_ngcontent-%COMP%] {\n    border: dotted 3px red;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n    color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIubnYtZmlsZS1vdmVyIHtcclxuICAgIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8853:
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesComponent: () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/messages.service */ 3833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4850);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 2072);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-timeago */ 3205);








function MessagesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MessagesComponent_div_12_tr_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r4.recipientPhotoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, message_r4.recipientUsername));
  }
}
function MessagesComponent_div_12_tr_12_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r4.senderPhotoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, message_r4.senderUsername));
  }
}
const _c0 = function () {
  return {
    tab: "Messages"
  };
};
function MessagesComponent_div_12_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 18)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MessagesComponent_div_12_tr_12_div_4_Template, 5, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MessagesComponent_div_12_tr_12_ng_template_5_Template, 4, 4, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_div_12_tr_12_Template_button_click_11_listener($event) {
      return $event.stopPropagation();
    })("click", function MessagesComponent_div_12_tr_12_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const message_r4 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.deleteMessage(message_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx_r3.container === "Outbox" ? "/members/" + message_r4.recipientUsername : "/members/" + message_r4.senderUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r3.loading)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.container === "Outbox")("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, message_r4.messageSent));
  }
}
function MessagesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "table", 13)(2, "thead")(3, "tr")(4, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "From / To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sent / Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MessagesComponent_div_12_tr_12_Template, 13, 10, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
  }
}
function MessagesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "pagination", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MessagesComponent_div_13_Template_pagination_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.pagination.currentPage = $event);
    })("pageChanged", function MessagesComponent_div_13_Template_pagination_pageChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.pageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r2.pagination.totalItems)("itemsPerPage", ctx_r2.pagination.itemsPerPage)("ngModel", ctx_r2.pagination.currentPage)("maxSize", 10);
  }
}
class MessagesComponent {
  constructor(messageService) {
    this.messageService = messageService;
    this.messages = [];
    this.container = "Unread";
    this.pageNumber = 1;
    this.pageSize = 5;
    this.loading = false;
  }
  ngOnInit() {
    this.loadMessages();
    console.log("msg Works");
  }
  loadMessages() {
    this.loading = true;
    this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe({
      next: response => {
        this.messages = response.result;
        this.pagination = response.pagination;
        this.loading = false;
        console.log(response.result);
      }
    });
  }
  deleteMessage(id) {
    this.messageService.deleteMessage(id).subscribe({
      next: _ => this.messages?.splice(this.messages.findIndex(m => m.id === id), 1)
    });
  }
  pageChanged(event) {
    if (this.pageNumber !== event.page) {
      this.pageNumber = event.page;
      this.loadMessages();
    }
  }
  static #_ = this.ɵfac = function MessagesComponent_Factory(t) {
    return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_0__.MessagesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MessagesComponent,
    selectors: [["app-messages"]],
    decls: 14,
    vars: 6,
    consts: [[1, "mb-4", "d-flex"], ["name", "container", 1, "btn-group"], ["btnRadio", "Unread", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope"], ["btnRadio", "Inbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope-open"], ["btnRadio", "Outbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-paper-plane"], ["class", "row", 4, "ngIf"], ["class", "row border-primary bg-transparent text-dark", 4, "ngIf"], ["class", "d-flex justify-content-end", 4, "ngIf"], [1, "row"], [1, "row", "border-primary", "bg-transparent", "text-dark"], [1, "table", "table-hover", "border-primary", "bg-transparent", "text-dark", 2, "cursor", "pointer"], [2, "width", "40%"], [2, "width", "20%"], [1, "align-middle"], [3, "hidden", "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [3, "hidden", "routerLink", "queryParams"], [4, "ngIf", "ngIfElse"], ["inbox", ""], [1, "btn", "btn-danger", 3, "click"], ["alt", "recipient photo", 1, "img-circle", "rounded-circle", "me-2", 3, "src"], ["alt", "sender photo", 1, "img-circle", "rounded-circle", "me-2", 3, "src"], [1, "d-flex", "justify-content-end"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"]],
    template: function MessagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_2_listener($event) {
          return ctx.container = $event;
        })("click", function MessagesComponent_Template_button_click_2_listener() {
          return ctx.loadMessages();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Unread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_5_listener($event) {
          return ctx.container = $event;
        })("click", function MessagesComponent_Template_button_click_5_listener() {
          return ctx.loadMessages();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_8_listener($event) {
          return ctx.container = $event;
        })("click", function MessagesComponent_Template_button_click_8_listener() {
          return ctx.loadMessages();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Outbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MessagesComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MessagesComponent_div_12_Template, 13, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MessagesComponent_div_13_Template, 2, 5, "div", 10);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.messages || ctx.messages.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.messages && ctx.messages.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.pagination && ctx.messages && ctx.messages.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__.ButtonRadioDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_7__.TimeagoPipe],
    styles: [".img-circle[_ngcontent-%COMP%] {\n    max-height: 50px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLDZDQUE2QztBQUNqRCIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY2lyY2xlIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbn1cclxudGFibGUgdHIgdGQsXHJcbnRhYmxlIHRyIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6634:
/*!*******************************************************************!*\
  !*** ./src/app/modals/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogComponent: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);


class ConfirmDialogComponent {
  constructor(bsModalRef) {
    this.bsModalRef = bsModalRef;
    this.title = '';
    this.message = '';
    this.btnOkText = '';
    this.btnCancelText = '';
    this.result = false;
  }
  confirm() {
    this.result = true;
    this.bsModalRef.hide();
  }
  decline() {
    this.bsModalRef.hide();
  }
  static #_ = this.ɵfac = function ConfirmDialogComponent_Factory(t) {
    return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmDialogComponent,
    selectors: [["app-confirm-dialog"]],
    decls: 11,
    vars: 4,
    consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
    template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_7_listener() {
          return ctx.confirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_9_listener() {
          return ctx.decline();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnCancelText);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8030:
/*!*************************************************************!*\
  !*** ./src/app/modals/roles-modal/roles-modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesModalComponent: () => (/* binding */ RolesModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function RolesModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolesModalComponent_div_9_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const role_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.updateChecked(role_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selectedRoles.includes(role_r2))("disabled", role_r2 === "Admin" && ctx_r1.username === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2);
  }
}
class RolesModalComponent {
  constructor(bsModalRef) {
    this.bsModalRef = bsModalRef;
    this.username = '';
    this.availableRoles = [];
    this.selectedRoles = [];
  }
  updateChecked(checkedValue) {
    const index = this.selectedRoles.indexOf(checkedValue);
    index !== -1 ? this.selectedRoles.splice(index, 1) : this.selectedRoles.push(checkedValue);
  }
  static #_ = this.ɵfac = function RolesModalComponent_Factory(t) {
    return new (t || RolesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RolesModalComponent,
    selectors: [["app-roles-modal"]],
    decls: 13,
    vars: 2,
    consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], ["id", "rolesForm"], ["rolesForm", "ngForm"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "form-check"], ["type", "checkbox", "value", "role", 1, "form-check-input", 3, "checked", "disabled", "change"]],
    template: function RolesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_3_listener() {
          return ctx.bsModalRef.hide();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RolesModalComponent_div_9_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_11_listener() {
          return ctx.bsModalRef.hide();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit roles for ", ctx.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableRoles);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5120:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavComponent: () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7783);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7019);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_directives/has-role.directive */ 4098);







function NavComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NavComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NavComponent_ng_container_10_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NavComponent_ng_container_10_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["Admin", "Moderator"];
};
function NavComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 9)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Matches");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 9)(5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Lists");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 9)(8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NavComponent_ng_container_10_li_10_Template, 3, 0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NavComponent_ng_container_10_li_11_Template, 3, 0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
  }
}
function NavComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_div_15_div_2_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", user_r6.knownAs, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("@", user_r6.username, "");
  }
}
function NavComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavComponent_div_15_div_2_Template, 10, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", user_r6.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class NavComponent {
  constructor(accountServices, router, toastr) {
    this.accountServices = accountServices;
    this.router = router;
    this.toastr = toastr;
    this.model = {};
  }
  ngOnInit() {
    // this.getCurrentUser()
    // this.currentUser$ = this.accountServices.currentUser$;
  }
  // getCurrentUser() {
  //   this.accountServices.currentUser$.subscribe({
  //     next: user => this.loggedIn = !!user,
  //     error: error => console.error()
  //   })
  // }
  // login() {
  //   this.accountServices.login(this.model).subscribe({
  //     next: () => this.router.navigateByUrl('/members'),
  //     // error: error => this.toastr.error(error.error)
  //     })
  // }
  logout() {
    this.accountServices.logout();
    this.router.navigateByUrl('/register');
  }
  static #_ = this.ɵfac = function NavComponent_Factory(t) {
    return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavComponent,
    selectors: [["app-nav"]],
    decls: 17,
    vars: 12,
    consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-primary", 2, "background", "linear-gradient(90deg, rgba(62,109,250,1) 0%, rgba(22,9,78,1) 100%)"], [1, "container"], ["class", "navbar-brand", "routerLink", "/register", "routerLinkActive", "active", 4, "ngIf"], ["class", "navbar-brand", "routerLink", "/members", "routerLinkActive", "active", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-md-0"], [4, "ngIf"], [1, "nav-item"], ["routerLink", "/errors", "routerLinkActive", "active", 1, "nav-link"], ["class", "dropdown", "dropdown", "", 4, "ngIf"], ["routerLink", "/register", "routerLinkActive", "active", 1, "navbar-brand"], ["src", "assets/logo.png", "alt", "Brand Logo", 1, "img-fluid"], ["routerLink", "/members", "routerLinkActive", "active", 1, "navbar-brand"], ["routerLink", "/members", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/lists", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/messages", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", 4, "appHasRole"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link"], ["dropdown", "", 1, "dropdown"], ["alt", "user photo", "dropdownToggle", "", 1, "img-fluid", "dropdown-toggle", "rounded-circle", 3, "src"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], [1, "dropdown-header"], ["routerLink", "/member/edit", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"]],
    template: function NavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavComponent_a_2_Template, 2, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NavComponent_a_4_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NavComponent_ng_container_10_Template, 12, 4, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 9)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NavComponent_div_15_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx.accountServices.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx.accountServices.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, ctx.accountServices.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 10, ctx.accountServices.currentUser$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__.BsDropdownDirective, _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_1__.HasRoleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: [".dropdown-toggle[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%]{\n    max-height: 35px;\n    \n\n    display: inline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG93bi1pdGVte1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2844:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7783);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_forms/text-input/text-input.component */ 7114);
/* harmony import */ var _forms_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_forms/date-picker/date-picker.component */ 3123);










function RegisterComponent_div_20_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", error_r2, " ");
  }
}
function RegisterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_div_20_li_2_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
  }
}
class RegisterComponent {
  constructor(accountService, toastr, fb, router) {
    this.accountService = accountService;
    this.toastr = toastr;
    this.fb = fb;
    this.router = router;
    this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
    this.maxDate = new Date();
  }
  ngOnInit() {
    this.initializeForm();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
  initializeForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(8)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.matchValues('password')]]
    });
    this.registerForm.controls['password'].valueChanges.subscribe({
      next: () => this.registerForm.controls['confirmPassword'].updateValueAndValidity()
    });
  }
  matchValues(matchTo) {
    return control => {
      return control?.value === control?.parent?.get(matchTo)?.value ? null : {
        isMatching: true
      };
    };
  }
  register() {
    const dob = this.GetDateOnly(this.registerForm.controls['dateOfBirth'].value);
    const values = {
      ...this.registerForm.value,
      dateOfBirth: this.GetDateOnly(dob)
    };
    this.accountService.register(values).subscribe({
      next: response => {
        this.router.navigateByUrl('/members');
      },
      error: error => {
        this.validationErrors = error;
      }
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
  GetDateOnly(dob) {
    if (!dob) return;
    let theDob = new Date(dob);
    return new Date(theDob.setMinutes(theDob.getMinutes() - theDob.getTimezoneOffset())).toISOString().slice(0, 10);
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-register"]],
    outputs: {
      cancelRegister: "cancelRegister"
    },
    decls: 26,
    vars: 20,
    consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "text-center", "text-primary"], [1, "mb-3"], [2, "margin-right", "10px"], [1, "form-check-label"], ["type", "radio", "value", "male", "formControlName", "gender", 1, "form-check-input"], ["type", "radio", "value", "female", "formControlName", "gender", 1, "form-check-input", "ms-3"], [3, "formControl", "label"], [3, "formControl", "label", "maxDate"], [3, "formControl", "label", "type"], ["class", "row", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-success", "me-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", "me-2", 3, "click"], [1, "row"], [1, "text-danger"], [4, "ngFor", "ngForOf"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() {
          return ctx.registerForm.valid && ctx.register();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "I am a: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-text-input", 7)(14, "app-text-input", 7)(15, "app-date-picker", 8)(16, "app-text-input", 7)(17, "app-text-input", 7)(18, "app-text-input", 9)(19, "app-text-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, RegisterComponent_div_20_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11)(22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_24_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["username"])("label", "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["knownAs"])("label", "Known as");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["dateOfBirth"])("label", "Date of birth")("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["city"])("label", "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["country"])("label", "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["password"])("label", "Password")("type", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["confirmPassword"])("label", "Confirm Password")("type", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_1__.TextInputComponent, _forms_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__.DatePickerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3539:
/*!**********************************************************!*\
  !*** ./src/app/user-tracking/user-tracking.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserTrackingComponent: () => (/* binding */ UserTrackingComponent)
/* harmony export */ });
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 3624);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/account.service */ 7783);



class UserTrackingComponent {
  constructor(accountService) {
    this.accountService = accountService;
    this.data = [];
  }
  ngOnInit() {
    const data = this.accountService.getLoginLogoutHistory();
    console.log(data);
    var chartdata = [];
    if (data) {
      var loginTime = 0;
      for (const activity of data) {
        //The spread (...) syntax allows an iterable, sprade
        console.log(activity.loggedIn);
        if (activity.loggedIn === true) {
          const logintimestamp = activity.time;
          const logindate = new Date(logintimestamp);
          const loginhours = logindate.getUTCHours();
          const loginminutes = logindate.getUTCMinutes() * (100 / 60) / 100; // 100/60 for getting minutes in 100s
          loginTime = loginhours + loginminutes;
        } else if (loginTime !== 0) {
          const logouttimestamp = activity.time;
          const logoutdate = new Date(logouttimestamp);
          const logouthours = logoutdate.getUTCHours();
          const logoutminutes = logoutdate.getUTCMinutes() * (100 / 60) / 100; // /100 for convert into hrs.min(in 100s)
          const logoutTime = logouthours + logoutminutes;
          console.log(activity.username);
          chartdata.push({
            x: activity.username,
            y: [loginTime, logoutTime] // You can customize the data values as needed
          });

          loginTime = 0;
        }
      }
      console.log(chartdata);
      this.showChart(chartdata);
    }
  }
  showChart(chartdata) {
    const options = {
      series: [{
        data: chartdata
      }],
      chart: {
        height: 630,
        type: 'rangeBar',
        zoom: {
          enabled: false
        }
      },
      colors: ['#11F322', '#F31C1C'],
      plotOptions: {
        bar: {
          horizontal: true,
          isDumbbell: true,
          dumbbellColors: [['#11F322', '#F31C1C']] // line end point and start point color
        }
      },

      title: {
        text: 'User Activity'
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Online', 'Offline']
      },
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#36cb4a'],
          inverseColors: false,
          stops: [0, 0]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        min: 0,
        max: 23,
        title: {
          text: "Users",
          style: {
            color: '#F31C1C',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      },
      xaxis: {
        min: 0,
        max: 23,
        title: {
          text: "Clock Time(Hrs)",
          style: {
            color: '#F31C1C',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    };
    const chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart"), options);
    chart.render();
  }
  static #_ = this.ɵfac = function UserTrackingComponent_Factory(t) {
    return new (t || UserTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UserTrackingComponent,
    selectors: [["app-user-tracking"]],
    decls: 1,
    vars: 0,
    consts: [["id", "chart"]],
    template: function UserTrackingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci10cmFja2luZy91c2VyLXRyYWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2NoYXJ0XHJcbntcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDk4LCAwKTtcclxufSAqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api/',
  hubUrl: 'https://localhost:5001/hubs/'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4846:
/*!**********************************************!*\
  !*** ./src/app/charts/okcupid_profiles.json ***!
  \**********************************************/
/***/ ((module) => {


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map