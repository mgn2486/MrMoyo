(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/administration/administration/admin/admin.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/administration/administration/admin/admin.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/layout/main-layout/main-layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/layout/main-layout/main-layout.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n    <mat-sidenav mode=\"push\" [(opened)]=\"opened\">\n        <span>Menu</span>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n            <span class=\"MyMenuIcon\">\n                <mat-icon matPrefix (click)=\"opened=!opened\" >reorder</mat-icon>\n            </span>\n            <span style=\"margin-left: 20px;\">Mormoe Care Administrations</span> \n            <span class=\"fill-space\"></span>\n            <span class=\"MylogoutIcon\">\n                <button mat-icon-button><mat-icon matPrefix (click)=\"onLogout()\" >power_settings_new</mat-icon></button>\n            </span>\n            <div class=\"card m-5\" style=\"width:18rem\" *ngIf=\"userDetails\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\"><strong>Username : </strong>{{userDetails.userName}}</li>\n                    <li class=\"list-group-item\"><strong>FullName : </strong>{{userDetails.fullName}}</li>\n                    <li class=\"list-group-item\"><strong>Email : </strong>{{userDetails.email}}</li>\n                </ul>\n            </div>\n        </mat-toolbar>\n\n        <router-outlet></router-outlet>\n\n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n      <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n      <main>\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n      <app-footer></app-footer>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</app-layout>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/conferences/conferences.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/conferences/conferences.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Mormore-Care Conferences loading.......</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h4>CONTACT US</h4>\r\n    <p>Please use any of the following options</p>\r\n  <hr>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-8\">\r\n        <mat-card style=\"margin-bottom: 15px;\"  color=\"primary\">\r\n            <mat-card-header  color=\"primary\">\r\n               <mat-card-title> <h4 class=\"site-text\">Send Us a Message</h4></mat-card-title>\r\n               <hr>\r\n           </mat-card-header>\r\n           <!-- <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n           <mat-card-content>\r\n            <form [formGroup]=\"ContactForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(ContactForm)\" (blur)=\"logValidationErrors()\">\r\n              <div class=\"input-field-class\">\r\n      \r\n                <div class=\"row\">\r\n                  <mat-form-field  class=\"col-12\">\r\n                    <mat-label>Full Name</mat-label>\r\n                    <input matInput placeholder=\"Full Name\" #fullName ngModel formControlName=\"fullName\" (blur)=\"logValidationErrors()\">\r\n                    <mat-icon matPrefix>person_outline</mat-icon>\r\n                    <mat-error *ngIf=\"formErrors.fullName\"><b>{{formErrors.fullName}}</b></mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n      \r\n                <div class=\"row\">\r\n                  <mat-form-field  class=\"col\">\r\n                    <mat-label>Email Address</mat-label>    \r\n                    <input matInput placeholder=\"Email Address\" #emailAddress ngModel formControlName=\"emailAddress\" (blur)=\"logValidationErrors()\">\r\n                    <mat-icon matPrefix>mail</mat-icon>\r\n                    <mat-error *ngIf=\"formErrors.emailAddress\"><b>{{formErrors.emailAddress}}</b></mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n      \r\n                <div class=\"row\">\r\n                  <mat-form-field class=\"col\">\r\n                    <mat-label>Subject</mat-label>      \r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Subject\" #subject ngModel formControlName=\"subject\" (blur)=\"logValidationErrors()\">\r\n                    <mat-icon matPrefix>mail</mat-icon>\r\n                    <mat-error *ngIf=\"formErrors.subject\"><b>{{formErrors.subject}}</b></mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n      \r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col stretch-height\" >\r\n                        <mat-label>Message</mat-label>\r\n                        <textarea matInput rows=\"10\" (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Message\" formControlName=\"message\" (blur)=\"logValidationErrors()\"></textarea>\r\n                        <mat-error *ngIf=\"formErrors.message\"><b>{{formErrors.message}}</b></mat-error>\r\n                      </mat-form-field>\r\n                </div>\r\n      \r\n                <div class=\"row s12\">\r\n                  <button color=\"primary\" [disabled]=\"!ContactForm.valid\" mat-raised-button>Sign - UP</button>\r\n                </div>\r\n              </div>\r\n           </form>\r\n           </mat-card-content>\r\n          </mat-card> \r\n      </div>\r\n      <div class=\"col-12 col-md-4\">\r\n        <h4>Call Us</h4>\r\n      <hr>\r\n      <p>\r\n        <b>Landline : </b> +27 (0)15 590 1114 <br>\r\n        <b>Mobile : </b>+27 (0)78 109 5318  <br>\r\n        <b>Email  : </b> info@mormocare.org <br>       \r\n    \r\n        <br>\r\n        info@mormocare.org\r\n        <br>\r\n        geraldm@mormocare.org        \r\n        <br>       \r\n      </p>\r\n      <br>\r\n      <h4>Physical Address : </h4>\r\n      <hr>\r\n      <p>\r\n        Number 7 Reitbok Street<br> Tzaneen,<br> Limpopo,<br>0850       \r\n      </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.582805678776!2d30.171721314983014!3d-23.833429984548438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec402108db36aa5%3A0xd0a42c5ab0a4b133!2s7+Rietbok+St%2C+Tzaneen%2C+0850!5e0!3m2!1sen!2sza!4v1550538395016\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:1 px solid grey\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\r\n      <h4>Send Us a Message</h4>\r\n      <hr>      \r\n      <form [formGroup]=\"ContactForm\" novalidate>\r\n        \r\n          <div class=\"form-group\">\r\n              <label>Full Name:</label>\r\n              <input class=\"form-control\" formControlName=\"FullName\" type=\"text\">\r\n          </div>        \r\n          <div *ngIf=\"ContactForm.controls['FullName'].invalid && (ContactForm.controls['FullName'].dirty || ContactForm.controls['FullName'].touched)\" class=\"alert alert-danger\">\r\n             <div *ngIf=\"ContactForm.controls['FullName'].errors.required\">\r\n                Your full name is required.\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label>Your Email:</label>\r\n              <input class=\"form-control\" formControlName=\"EmailFrom\" type=\"text\">\r\n          </div>        \r\n          <div *ngIf=\"ContactForm.controls['EmailFrom'].invalid && (ContactForm.controls['EmailFrom'].dirty || ContactForm.controls['EmailFrom'].touched)\" class=\"alert alert-danger\">\r\n             <div *ngIf=\"ContactForm.controls['EmailFrom'].errors.required\">\r\n                Your email is required.\r\n             </div>\r\n          </div>\r\n  \r\n          <div class=\"form-group\">\r\n              <label>Subject To:</label>\r\n              <input class=\"form-control\" formControlName=\"Subject\" type=\"text\">\r\n          </div>\r\n          <div *ngIf=\"ContactForm.controls['Subject'].invalid && (ContactForm.controls['Subject'].dirty || ContactForm.controls['Subject'].touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"ContactForm.controls['Subject'].errors.required\">\r\n                Subject is required.\r\n              </div>\r\n          </div>\r\n    \r\n          <div class=\"form-group\">\r\n              <label>Message :</label>\r\n              <textarea class=\"form-control\" formControlName=\"Message\" type=\"textarea\" rows=\"10\"></textarea>\r\n          </div>\r\n          <div *ngIf=\"ContactForm.controls['Message'].invalid && (ContactForm.controls['Message'].dirty || ContactForm.controls['Message'].touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"ContactForm.controls['Message'].errors.required\">\r\n                Message is required.\r\n              </div>\r\n          </div>\r\n    \r\n          <button type=\"submit\"\r\n              [disabled]=\"ContactForm.pristine || ContactForm.invalid\" class=\"btn btn-success\" (click)= 'SendMail()'>\r\n              Send Mail\r\n          </button>\r\n          <div class=\"form-group message\">\r\n              <p style=\" text-align: center; font-weight: bold;\" [style.color]=\"hasErrors ? 'red': 'green'\">\r\n                {{ responseSent }}\r\n              </p>\r\n          </div>\r\n           <div *ngIf=\"isLoading\" class=\"relative\">\r\n              <app-spinner></app-spinner>\r\n          </div>          \r\n      </form>\r\n      <br />\r\n      \r\n       <p>Form value: {{ emailUsForm.value | json }}</p>\r\n      <p>Form status: {{ emailUsForm.status | json }}</p>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n      <h4>Call Us</h4>\r\n      <hr>\r\n      <p>\r\n        <b>Landline : </b> +27 (0) 31 261 1907 <br> <b>Or     : </b> +27 (0) 31 829 9130 <br>\r\n        <b>Mobile : </b>+27 (0) 78 253 9442  <br>\r\n        <b>Or     : </b>+27 (0) 65 822 3164  <br><br>\r\n        <b>Email  : </b>tau@tascconsulting.co.za / info@tascconsulting.co.za  <br>       \r\n      </p>\r\n      <br>\r\n      <h4>Physical Address : </h4>\r\n      <hr>\r\n      <p>\r\n        1 Helston Road,<br> Westridge,<br> Berea,<br>Durban, <br> 4091      \r\n      </p>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <h4>Find Us</h4>\r\n    <hr>\r\n    <br>\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n      <p>\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.154426062503!2d30.979720315110836!3d-29.859819981949762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa035588fdc3%3A0xbbf19900bf754834!2s1+Helston+Rd%2C+Westridge%2C+Berea%2C+4091!5e0!3m2!1sen!2sza!4v1544405290074\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:1 px solid grey\" allowfullscreen></iframe>\r\n    </p>\r\n    </div>\r\n    \r\n\r\n  </div> -->\r\n  \r\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/counter/counter.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counter/counter.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"footer\" >\r\n    <div class=\"container\" style=\"padding:10px;\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-xs-12\"><br>\r\n          <div class=\"row justify-content-center align-items-center\" >\r\n            <img src=\"assets/images/logo/newlogo.jpg\" class=\"img-responsive\" height=\"250px;\"/>\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <h4>OUR VISION</h4>\r\n          <hr>\r\n          <p>\r\n            Mormo-Care is a non-profit making organisation designed to empower people psychologically. \r\n            We are dedicated in the lives people through ministering and training them towards the radiating \r\n            and reflecting God's love through the thought principles. Transforming the mind.\r\n          </p>\r\n        </div>\r\n  \r\n        <div class=\"col-lg-3\">\r\n            <h4>OUR MISSION</h4>\r\n            <hr>\r\n            <p>\r\n              Mormo-Care we are committed to provide hands-on assistance in the brain power. We are here for you.\r\n              We are here for you.We are here for you. We are here for you. We are here for you. We are here for you. \r\n              We are here for you.\r\n            </p>          \r\n        </div>\r\n  \r\n        <div class=\"col-lg-3\">\r\n            <h4>CONTACT US</h4>\r\n            <hr>\r\n            <p>\r\n              <b>Landline :</b> +27 (0) 15 590 1114 <br>\r\n              <b>Mobile :</b> +27 (0) 78 109 5318 <br>\r\n              <b>Email :</b> info@mormocare.org   \r\n            </p>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <p><b>JOIN OUR LIVE SOCIAL LINKS</b></p>\r\n              </div>\r\n              <div class=\"col-lg-1\">\r\n                <a href=\"https://chat.whatsapp.com/HnIWzVRP1nRKHLU0oZMQeB\"><span style=\"font-size: 3em;\"><i class=\"fa fa-whatsapp\"></i></span></a>              \r\n              </div>\r\n            </div>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row justify-content-center align-items-center\">\r\n        <p> &copy; 2019 All rights reserved at <b>Mormo-Care </b></p>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Mormore-Care gallery loading.......</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlexAlign=\"stretch\">\r\n  <div fxFlexAlign=\"center\">\r\n    <p>Welcome to the Mormo-Care</p>\r\n  </div>\r\n\r\n  <app-mormobanner></app-mormobanner>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <div mat-card-avatar class=\"example-header-image\"></div>\r\n                <mat-card-title>Conferences</mat-card-title>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/images/home/home_1a.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                bred for hunting.\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-button>LIKE</button>\r\n                <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div class=\"col-sm\" class=\"col-md\">\r\n        <mat-card>\r\n            <mat-card-header >\r\n                <div mat-card-avatar class=\"example-header-image\"></div>\r\n                <mat-card-title>Great Minds</mat-card-title>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/images/home/home_2a.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                bred for hunting.\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-button>LIKE</button>\r\n                <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Unlocking the Mind</mat-card-title>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/images/home/home_3a.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                bred for hunting.\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-button>LIKE</button>\r\n                <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n </div>\r\n<br><br><div class=\"row\">\r\n\r\n<div class=\"col-md\">  \r\n<mat-tab-group mat-stretch-tabs (selectedTabChange)=\"executeSelectedChange($event)\">\r\n    <mat-tab bg-color=\"primary\" label=\"Life Coach\"> \r\n        <p>We can unlock the future with a single attitude</p> \r\n    </mat-tab>\r\n    <mat-tab label=\"On site Training\">\r\n        <p>Be careful of what you expose your mind to</p>\r\n    </mat-tab>\r\n    <mat-tab label=\"Mind Categories\">\r\n        <p>What the mind knows<br>\r\n        What you should know<br>\r\n        Notes</p>\r\n    </mat-tab>\r\n</mat-tab-group>  \r\n</div>\r\n</div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\" >\r\n    <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/library/library.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/library/library.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Mormore-Care library Books loading.......</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/membership/membership.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/membership/membership.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col m12 offset-s2\">\r\n        <div class=\"card primary\">\r\n  \r\n          <mat-tab-group mat-stretch-tabs  color=\"primary\">\r\n            <mat-tab label = \"Sign-In\">\r\n              <app-sign-in></app-sign-in> \r\n            </mat-tab>\r\n            <mat-tab label = \"Sign-Up\"> \r\n              <app-sign-up></app-sign-up> \r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/membership/sign-in/sign-in.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/membership/sign-in/sign-in.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n    <mat-card-header  color=\"primary\">\r\n       <div mat-card-avatar class=\"example-header-image\"></div>\r\n       <mat-card-title>Mormo-Care Memebership Login</mat-card-title>\r\n   </mat-card-header>\r\n   <mat-card-content>\r\n       <div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\r\n           <i class=\"material-icons\">error</i> Incorrect username or password\r\n       </div>\r\n       <form [formGroup]=\"MormocareLoginForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(MormocareLoginForm)\">\r\n\r\n        <div class=\"input-field-class\">            \r\n          <mat-form-field>\r\n            <mat-label>User name</mat-label>      \r\n            <input matInput placeholder=\"email address\" #username ngModel formControlName=\"username\" (blur)=\"logValidationErrors()\">\r\n            <mat-icon matPrefix>person_outline</mat-icon>\r\n            <mat-error *ngIf=\"formErrors.username\"><b>{{formErrors.username}}</b></mat-error>\r\n          </mat-form-field>\r\n          \r\n          <mat-form-field> \r\n            <mat-label>Account Password</mat-label>      \r\n            <input type=\"password\" matInput #password ngModel formControlName=\"password\" placeholder=\"Password\" (blur)=\"logValidationErrors()\">\r\n            <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n            <mat-error *ngIf=\"formErrors.password\"><b>{{formErrors.password}}</b></mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row s12\">\r\n          <button color=\"primary\" [disabled]=\"!MormocareLoginForm.valid\" mat-raised-button>Sign - In</button>\r\n        </div>\r\n      </form>\r\n   </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/membership/sign-up/sign-up.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/membership/sign-up/sign-up.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" color=\"primary\">\r\n    <mat-card-header  color=\"primary\">\r\n       <div mat-card-avatar class=\"example-header-image\"></div>\r\n       <mat-card-title>Mormo-Care Memebership Registration</mat-card-title>\r\n   </mat-card-header>\r\n   <!-- <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n   <mat-card-content>\r\n    <div *ngIf=\"isRegistrationError\" class=\"red-text center error-message\">\r\n        <i class=\"material-icons\">error</i> Incorrect username or password\r\n    </div>\r\n    <form [formGroup]=\"MormoCareUserRegForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(MormoCareUserRegForm)\">\r\n       <div class=\"input-field-class\">\r\n\r\n         <div class=\"row\">\r\n           <mat-form-field  class=\"col s4\">\r\n             <mat-label>First name</mat-label>\r\n             <input matInput placeholder=\"First Name\" #firstName ngModel formControlName=\"firstName\"  (blur)=\"logValidationErrors()\">\r\n             <mat-icon matPrefix>person_outline</mat-icon>\r\n             <mat-error *ngIf=\"formErrors.firstName\"><b>{{formErrors.firstName}}</b></mat-error>\r\n           </mat-form-field>\r\n           <mat-form-field class=\"col s4\">\r\n             <mat-label>Last name</mat-label>\r\n             <input matInput placeholder=\"Last Name\" #lastName ngModel formControlName=\"lastName\" (blur)=\"logValidationErrors()\">\r\n             <mat-icon matPrefix>person_outline</mat-icon>\r\n             <mat-error *ngIf=\"formErrors.lastName\"><b>{{formErrors.lastName}}</b></mat-error>\r\n           </mat-form-field>\r\n         </div>\r\n\r\n         <div class=\"row\">\r\n           <mat-form-field  class=\"col s4\">\r\n             <mat-label>Initials</mat-label>    \r\n             <input matInput placeholder=\"Initials\" #Initials ngModel formControlName=\"Initials\">\r\n             <mat-icon matPrefix>person_outline</mat-icon>\r\n           </mat-form-field>\r\n         </div>\r\n\r\n         <div class=\"row\">\r\n           <mat-form-field class=\"col s4\">\r\n             <mat-label>Email Address</mat-label>      \r\n             <input matInput placeholder=\"Email address\" #emailAddress ngModel formControlName=\"emailAddress\" (blur)=\"logValidationErrors()\">\r\n             <mat-icon matPrefix>mail</mat-icon>\r\n             <mat-error *ngIf=\"formErrors.emailAddress\"><b>{{formErrors.emailAddress}}</b></mat-error>\r\n           </mat-form-field>\r\n         </div>\r\n\r\n         <div class=\"row\">\r\n             <div formGroupName=\"passwordGroup\">\r\n               <mat-form-field  class=\"col s4\">\r\n                 <mat-label>Account Password</mat-label> \r\n                 <input type=\"password\" matInput placeholder=\"Password\" #password ngModel formControlName=\"password\" (blur)=\"logValidationErrors()\">\r\n                 <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n                 <mat-error *ngIf=\"formErrors.password\"><b>{{formErrors.password}}</b></mat-error>\r\n               </mat-form-field> \r\n               <mat-form-field class=\"col s4\">\r\n                 <mat-label>Confirm Password</mat-label> \r\n                 <input type=\"password\" matInput placeholder=\"Confirm-Password\" #confirmPassword ngModel formControlName=\"confirmPassword\" (blur)=\"logValidationErrors()\">\r\n                 <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n                 <mat-error *ngIf=\"formErrors.passwordGroup || formErrors.confirmPassword\">\r\n                   <b>{{formErrors.passwordGroup ? formErrors.passwordGroup : formErrors.confirmPassword}}</b>\r\n                 </mat-error>\r\n               </mat-form-field>\r\n             </div>\r\n         </div>\r\n\r\n         <div class=\"row s12\">\r\n           <button color=\"primary\" [disabled]=\"!MormoCareUserRegForm.valid\" mat-raised-button>Sign - UP</button>\r\n         </div>\r\n\r\n\r\n       </div>\r\n    </form>\r\n</mat-card-content>\r\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mormobanner/mormobanner.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mormobanner/mormobanner.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"d-block w-100\" src=\"assets/banner/banner_1.jpg\" alt=\"First slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"assets/banner/banner_2.jpg\" alt=\"Second slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"assets/banner/banner_3.jpg\" alt=\"Third slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"assets/banner/banner_4.jpg\" alt=\"Third slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"assets/banner/banner_5.jpg\" alt=\"Third slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"assets/banner/JM_banner_2.jpg\" alt=\"Third slide\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <div fxHide.gt-xs>\r\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div>\r\n        <a routerLink=\"/home\">Mormo-Care</a>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\r\n        <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\r\n            <li>\r\n                <a routerLink=\"/library\">Library</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/mormousers\">Members</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/conferences\">Conferences</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/gallery\">Gallery</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/team\">Team</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/contactus\">Contact Us</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n  </mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n    <a mat-list-item routerLink=\"/home\" (click)=\"onSidenavClose()\">\r\n      <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/library\" (click)=\"onSidenavClose()\">\r\n      <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">Library</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/mormousers\" (click)=\"onSidenavClose()\">\r\n      <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">Members</span>\r\n    </a>    \r\n    <a mat-list-item routerLink=\"/conferences\" (click)=\"onSidenavClose()\">\r\n      <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">Conferences</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/gallery\" (click)=\"onSidenavClose()\">\r\n      <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">Gallery</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/team\" (click)=\"onSidenavClose()\">\r\n      <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">Team</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/contactus\" (click)=\"onSidenavClose()\">\r\n      <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">Contact Us</span>\r\n    </a>\r\n    <mat-list-item [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>unfold_more</mat-icon>\r\n      <a matline>Example</a>\r\n    </mat-list-item>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"onSidenavClose()\">View profile</button>\r\n      <button mat-menu-item (click)=\"onSidenavClose()\">Add contact</button>\r\n    </mat-menu>\r\n  </mat-nav-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/team/team.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/team/team.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h4>Our Team</h4>\r\n  <hr>\r\n\r\n  <div class=\"row\">\r\n        <div class=\"col-sm\" *ngFor= 'let member of Members'>\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"example-header-image\"></div>\r\n                    <mat-card-title>{{member.CoPosition}}</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image src={{member.ImagePath}} alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                    <p><b>{{member.Title}}. {{member.Fname}} {{member.Lname}}</b><br>\r\n                        {{member.Profile  | slice:0: 100}}....<a href=\"\" (click)=\"MoreInfoOnMember()\">..Read More</a>\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <hr>\r\n                    <button mat-button>Contact</button>\r\n                    <button mat-button>SHARE</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

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

/***/ "./src/app/admin/administration/administration/admin-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/administration/administration/admin-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdministrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationRoutingModule", function() { return AdministrationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/main-layout/main-layout.component */ "./src/app/admin/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/authGuard/auth.guard */ "./src/app/auth/authGuard/auth.guard.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/administration/administration/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: 'admin', component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"], canActivate: [src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: 'home', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], canActivate: [src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], }
        ]
    }
];
let AdministrationRoutingModule = class AdministrationRoutingModule {
};
AdministrationRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    })
], AdministrationRoutingModule);



/***/ }),

/***/ "./src/app/admin/administration/administration/admin/admin.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/administration/administration/admin/admin.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uL2FkbWluaXN0cmF0aW9uL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/administration/administration/admin/admin.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/administration/administration/admin/admin.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/administration/administration/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/administration/administration/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/administration/administration/administration.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/administration/administration/administration.module.ts ***!
  \******************************************************************************/
/*! exports provided: AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/administration/administration/admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/administration/administration/admin-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AdministrationModule = class AdministrationModule {
};
AdministrationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdministrationRoutingModule"]
        ]
    })
], AdministrationModule);



/***/ }),

/***/ "./src/app/admin/layout/layout.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/layout/layout.module.ts ***!
  \***********************************************/
/*! exports provided: SecurePagesLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurePagesLayoutModule", function() { return SecurePagesLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/admin/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let SecurePagesLayoutModule = class SecurePagesLayoutModule {
};
SecurePagesLayoutModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([]),
        ],
        exports: [],
        declarations: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"]]
    })
], SecurePagesLayoutModule);



/***/ }),

/***/ "./src/app/admin/layout/main-layout/main-layout.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/layout/main-layout/main-layout.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container{\r\n    height: 100%\r\n}\r\n\r\nmat-sidenav, mat-sidenav-content{\r\n    padding: 16px;\r\n}\r\n\r\nmat-sidenav{\r\n    background-color: lightcoral;\r\n    width: 200px;\r\n}\r\n\r\n.MyMenuIcon{\r\n    border: 2px solid white;\r\n    padding: 2px;\r\n    align-self: auto;\r\n}\r\n\r\n.MylogoutIcon{\r\n    border: 2px solid white;\r\n    align-self: auto;\r\n    justify-content: flex-end;\r\n    float:right;\r\n}\r\n\r\n.fill-space {\r\n    flex: 1 1 auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbGF5b3V0L21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbGF5b3V0L21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxubWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5NeU1lbnVJY29ue1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG59XHJcblxyXG4uTXlsb2dvdXRJY29ue1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uZmlsbC1zcGFjZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/admin/layout/main-layout/main-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/layout/main-layout/main-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user-service/user.service */ "./src/app/shared/services/user-service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MainLayoutComponent = class MainLayoutComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUserProfileDetails();
    }
    getUserProfileDetails() {
        this.userService.getUserProfile().subscribe(res => {
            this.userDetails = res;
        }, err => {
            console.log(err);
        });
    }
    onLogout() {
        localStorage.removeItem('token');
        this.route.navigate(['./login']);
    }
};
MainLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
MainLayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-main-layout',
        template: __webpack_require__(/*! raw-loader!./main-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/layout/main-layout/main-layout.component.html"),
        styles: [__webpack_require__(/*! ./main-layout.component.css */ "./src/app/admin/layout/main-layout/main-layout.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], MainLayoutComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _conferences_conferences_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conferences/conferences.component */ "./src/app/conferences/conferences.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _membership_membership_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./membership/membership.component */ "./src/app/membership/membership.component.ts");
/* harmony import */ var _membership_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./membership/sign-up/sign-up.component */ "./src/app/membership/sign-up/sign-up.component.ts");
/* harmony import */ var _membership_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./membership/sign-in/sign-in.component */ "./src/app/membership/sign-in/sign-in.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/authGuard/auth.guard */ "./src/app/auth/authGuard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'library', component: _library_library_component__WEBPACK_IMPORTED_MODULE_4__["LibraryComponent"] },
    { path: 'mormousers', redirectTo: '/login', pathMatch: 'full' },
    { path: 'conferences', component: _conferences_conferences_component__WEBPACK_IMPORTED_MODULE_5__["ConferencesComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'contactus', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"] },
    { path: 'admin', redirectTo: 'admin/home', canActivate: [_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    {
        path: 'signup', component: _membership_membership_component__WEBPACK_IMPORTED_MODULE_7__["MembershipComponent"],
        children: [{ path: 'signup', component: _membership_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _membership_membership_component__WEBPACK_IMPORTED_MODULE_7__["MembershipComponent"],
        children: [{ path: 'login', component: _membership_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"] }]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 250px;\r\n}\r\n\r\nmain {\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _conferences_conferences_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./conferences/conferences.component */ "./src/app/conferences/conferences.component.ts");
/* harmony import */ var _mormobanner_mormobanner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mormobanner/mormobanner.component */ "./src/app/mormobanner/mormobanner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _membership_membership_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./membership/membership.component */ "./src/app/membership/membership.component.ts");
/* harmony import */ var _membership_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./membership/sign-in/sign-in.component */ "./src/app/membership/sign-in/sign-in.component.ts");
/* harmony import */ var _membership_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./membership/sign-up/sign-up.component */ "./src/app/membership/sign-up/sign-up.component.ts");
/* harmony import */ var _shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/user-service/user.service */ "./src/app/shared/services/user-service/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _admin_administration_administration_administration_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/administration/administration/administration.module */ "./src/app/admin/administration/administration/administration.module.ts");
/* harmony import */ var _auth_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/interceptor/auth.interceptor */ "./src/app/auth/interceptor/auth.interceptor.ts");
/* harmony import */ var _admin_layout_layout_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/layout/layout.module */ "./src/app/admin/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_6__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_7__["FetchDataComponent"],
            _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
            _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_14__["SidenavListComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"],
            _library_library_component__WEBPACK_IMPORTED_MODULE_16__["LibraryComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__["GalleryComponent"],
            _conferences_conferences_component__WEBPACK_IMPORTED_MODULE_18__["ConferencesComponent"],
            _mormobanner_mormobanner_component__WEBPACK_IMPORTED_MODULE_19__["MormobannerComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
            _membership_membership_component__WEBPACK_IMPORTED_MODULE_21__["MembershipComponent"],
            _membership_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__["SignInComponent"],
            _membership_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"],
            _team_team_component__WEBPACK_IMPORTED_MODULE_26__["TeamComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _admin_layout_layout_module__WEBPACK_IMPORTED_MODULE_29__["SecurePagesLayoutModule"], _admin_administration_administration_administration_module__WEBPACK_IMPORTED_MODULE_27__["AdministrationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"].forRoot({
                progressBar: true
            })
        ],
        providers: [_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _auth_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__["AuthInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/authGuard/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/authGuard/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AuthGuard = class AuthGuard {
    canActivate(next, state) {
        return true;
    }
};
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/interceptor/auth.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/interceptor/auth.interceptor.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthInterceptor = class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        if (localStorage.getItem('token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(succ => { }, err => {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('./login');
                }
            }));
        }
        else
            return next.handle(req.clone());
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/conferences/conferences.component.css":
/*!*******************************************************!*\
  !*** ./src/app/conferences/conferences.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZlcmVuY2VzL2NvbmZlcmVuY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/conferences/conferences.component.ts":
/*!******************************************************!*\
  !*** ./src/app/conferences/conferences.component.ts ***!
  \******************************************************/
/*! exports provided: ConferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferencesComponent", function() { return ConferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ConferencesComponent = class ConferencesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConferencesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-conferences',
        template: __webpack_require__(/*! raw-loader!./conferences.component.html */ "./node_modules/raw-loader/index.js!./src/app/conferences/conferences.component.html"),
        styles: [__webpack_require__(/*! ./conferences.component.css */ "./src/app/conferences/conferences.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConferencesComponent);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field-class {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-icon{\r\n  margin-left: 10px;\r\n}\r\n  \r\n  .icon-section{\r\n  margin-right: 10px;\r\n}\r\n  \r\n  ::ng-deep .mat-card-header{\r\n  background-color: #3863d8 !important;\r\n  color: white;\r\n  padding:5px !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card{\r\n  padding:0 !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card-content{\r\n  padding:5px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVGO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0VBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0VBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1maWVsZC1jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4ubG9naW4taWNvbntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmljb24tc2VjdGlvbntcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODYzZDggIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZHtcclxuICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/email-service/email.service */ "./src/app/shared/services/email-service/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ContactUsComponent = class ContactUsComponent {
    constructor(toastr, fb, emailService) {
        this.toastr = toastr;
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control
        this.formErrors = {
            'fullName': '',
            'emailAddress': '',
            'subject': '',
            'message': ''
        };
        // This object contains all the validation messages for this form
        this.validationMessages = {
            'fullName': {
                'required': 'Full name is required.',
                'minlength': 'Full name must be greater than 2 characters.',
                'maxlength': 'Full name must be less than 100 characters.'
            },
            'emailAddress': {
                'required': 'Email address is required.',
                'minlength': 'Email address address must be greater than 11 characters.',
                'maxlength': 'Email address address must be less than 150 characters.',
                'emailDomain': 'Email address domian should be devine-tech.com'
            },
            'subject': {
                'required': 'Subject is required.',
                'minlength': 'Subject must be greater than 5 characters.',
                'maxlength': 'Subject must be less than 150 characters.',
            },
            'message': {
                'required': 'Message is required.',
                'minlength': 'Message must be greater than 5 characters.',
                'maxlength': 'Message must be less than 150 characters.',
            }
        };
        this.hasError = (controlName, errorName) => {
            return this.ContactForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.ContactForm = this.fb.group({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]),
        });
        this.ContactForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.ContactForm);
        });
    }
    logValidationErrors(group = this.ContactForm) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid
                && (abstractControl.touched || abstractControl.dirty)) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.logValidationErrors(abstractControl);
            }
        });
    }
    OnSubmit(form) {
        // var formData = form.value;
        // const userData: User = this.getUserInformation(formData)
        // this.userService.registerUser(userData)
        //   .subscribe((data: any) => {
        //     if (data.succeeded == true) {
        //       this.resetForm(form);
        //       this.toastr.success('User registration successful', "Success!");
        //     }
        //     else
        //       this.toastr.error(data.errors[0].description);
        //   });
    }
    getUserInformation(formData) {
        return {
            UserName: formData.emailAddress,
            Password: formData.passwordGroup.password,
            Email: formData.emailAddress,
            FirstName: formData.firstName,
            LastName: formData.lastName
        };
    }
    resetForm(form) {
        if (form != null)
            form.reset();
        this.contactData = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"] }
];
ContactUsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
    }),
    __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])
], ContactUsComponent);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/index.js!./src/app/counter/counter.component.html")
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/fetch-data/fetch-data.component.html")
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let GalleryComponent = class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
};
GalleryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GalleryComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section div p{\r\n    color: #3f51b5;\r\n    font-size: 30px;\r\n    text-shadow: 2px 3px 5px grey;\r\n    margin: 30px 0;\r\n}\r\n\r\nsection div + p{\r\n    color: #3f51b5;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\nmat-tab-group {\r\n    text-align: center;\r\n}\r\n\r\nmat-tab-group p {\r\n    padding-top: 20px;\r\n}\r\n\r\n.input-field-class {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n.login-icon{\r\n  margin-left: 10px;\r\n}\r\n\r\n.icon-section{\r\n  margin-right: 10px;\r\n}\r\n\r\n::ng-deep .mat-card-header{\r\n  background-color: #1b2dc9 !important;\r\n  color: white;\r\n  padding:5px !important;\r\n}\r\n\r\n::ng-deep .mat-card{\r\n  padding:0 !important;\r\n}\r\n\r\n::ng-deep .mat-card-content{\r\n  padding:5px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIGRpdiBwe1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCA1cHggZ3JleTtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdiArIHB7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHAge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZC1jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4ubG9naW4taWNvbntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmljb24tc2VjdGlvbntcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjJkYzkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZHtcclxuICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HomeComponent = class HomeComponent {
    constructor() {
        this.executeSelectedChange = (event) => {
            console.log(event);
        };
    }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-wrapper{\r\n    height: 100%;\r\n}\r\n\r\n.flex-wrapper{\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/library/library.component.css":
/*!***********************************************!*\
  !*** ./src/app/library/library.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/*!**********************************************!*\
  !*** ./src/app/library/library.component.ts ***!
  \**********************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LibraryComponent = class LibraryComponent {
    constructor() { }
    ngOnInit() {
    }
};
LibraryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-library',
        template: __webpack_require__(/*! raw-loader!./library.component.html */ "./node_modules/raw-loader/index.js!./src/app/library/library.component.html"),
        styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LibraryComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const materialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
];
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [materialComponents],
        exports: [materialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/membership/membership.component.css":
/*!*****************************************************!*\
  !*** ./src/app/membership/membership.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXAvbWVtYmVyc2hpcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/membership/membership.component.ts":
/*!****************************************************!*\
  !*** ./src/app/membership/membership.component.ts ***!
  \****************************************************/
/*! exports provided: MembershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipComponent", function() { return MembershipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MembershipComponent = class MembershipComponent {
    constructor() { }
    ngOnInit() {
    }
};
MembershipComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-membership',
        template: __webpack_require__(/*! raw-loader!./membership.component.html */ "./node_modules/raw-loader/index.js!./src/app/membership/membership.component.html"),
        styles: [__webpack_require__(/*! ./membership.component.css */ "./src/app/membership/membership.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MembershipComponent);



/***/ }),

/***/ "./src/app/membership/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/membership/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field-class {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-icon{\r\n  margin-left: 10px;\r\n}\r\n  \r\n  .icon-section{\r\n  margin-right: 10px;\r\n}\r\n  \r\n  ::ng-deep .mat-card-header{\r\n  background-color: #1b2dc9 !important;\r\n  color: white;\r\n  padding:5px !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card{\r\n  padding:0 !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card-content{\r\n  padding:5px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7RUFDRSxpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7RUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZmllbGQtY2xhc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLmxvZ2luLWljb257XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLXNlY3Rpb257XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyZGM5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmR7XHJcbiAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtY29udGVudHtcclxuICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/membership/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/membership/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user-service/user.service */ "./src/app/shared/services/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let SignInComponent = class SignInComponent {
    constructor(userService, toastr, fb, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.isLoginError = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control
        this.formErrors = {
            'username': '',
            'password': ''
        };
        // This object contains all the validation messages for this form
        this.validationMessages = {
            'username': {
                'required': 'User-name is required.',
                'minlength': 'Please enter a valid username.',
                'maxlength': 'This is not realistic '
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Please enter a valid password',
                'maxlength': 'This is not realistic '
            }
        };
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null) {
            this.router.navigateByUrl('/admin/home');
        }
        this.MormocareLoginForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)])
        });
        this.MormocareLoginForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.MormocareLoginForm);
        });
    }
    // Logs validation error messages
    logValidationErrors(group = this.MormocareLoginForm) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid
                && (abstractControl.touched || abstractControl.dirty)) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
        });
    }
    OnSubmit(form) {
        var formData = form.value;
        this.userService.userAuthentication(formData).subscribe((data) => {
            form.reset();
            localStorage.setItem('token', data.token);
            this.router.navigate(['/admin']);
        }, err => {
            this.isLoginError = true;
            if (err.status == 400) {
                this.toastr.error('Username or password is incorrect.', 'Authentication failed.');
            }
            else {
                console.log("DATA" + formData);
                form.reset();
            }
        });
    }
    //   OnSubmit(userName,password){
    //     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
    //      localStorage.setItem('userToken',data.access_token);
    //      this.router.navigate(['/home']);
    //    },
    //    (err : HttpErrorResponse)=>{
    //      this.isLoginError = true;
    //    });
    //  }
    getUserInformation(formData) {
        return {
            UserName: formData.emailAddress,
            Password: formData.passwordGroup.password,
            Email: formData.emailAddress,
            FirstName: formData.firstName,
            LastName: formData.lastName
        };
    }
    resetForm(form) {
        if (form != null) {
            form.reset();
        }
        // this.user = {
        //   UserName: '',
        //   Password: '',
        //   Email: '',
        //   FirstName: '',
        //   LastName: ''
        // }
    }
};
SignInComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignInComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/membership/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/membership/sign-in/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignInComponent);



/***/ }),

/***/ "./src/app/membership/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/membership/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field-class {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-icon{\r\n  margin-left: 10px;\r\n}\r\n  \r\n  .icon-section{\r\n  margin-right: 10px;\r\n}\r\n  \r\n  ::ng-deep .mat-card-header{\r\n  background-color: #1b2dc9 !important;\r\n  color: white;\r\n  padding:5px !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card{\r\n  padding:0 !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card-content{\r\n  padding:5px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7RUFDRSxpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7RUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZmllbGQtY2xhc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLmxvZ2luLWljb257XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLXNlY3Rpb257XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyZGM5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmR7XHJcbiAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtY29udGVudHtcclxuICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/membership/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/membership/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user-service/user.service */ "./src/app/shared/services/user-service/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SignUpComponent = class SignUpComponent {
    constructor(userService, fb, toastr) {
        this.userService = userService;
        this.fb = fb;
        this.toastr = toastr;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control
        this.formErrors = {
            'firstName': '',
            'lastName': '',
            'emailAddress': '',
            'password': '',
            'confirmPassword': '',
            'passwordGroup': '',
        };
        // This object contains all the validation messages for this form
        this.validationMessages = {
            'firstName': {
                'required': 'First name is required.',
                'minlength': 'First name must be greater than 2 characters.',
                'maxlength': 'First name must be less than 100 characters.'
            },
            'lastName': {
                'required': 'Last name is required.',
                'minlength': 'Last name must be greater than 2 characters.',
                'maxlength': 'Last name must be less than 100 characters.'
            },
            'emailAddress': {
                'required': 'Email is required.',
                'minlength': 'Email address must be greater than 11 characters.',
                'maxlength': 'Email address must be less than 150 characters.',
                'emailDomain': 'Email domian should be devine-tech.com'
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Password must be greater than 5 characters.',
                'maxlength': 'Password must be less than 150 characters.',
            },
            'confirmPassword': {
                'required': 'Confirm Password is required.',
                'minlength': 'Confirm Password must be greater than 5 characters.',
                'maxlength': 'Confirm Password must be less than 150 characters.',
            },
            'passwordGroup': {
                'passwordMisMatch': 'Password and confirm Password do not match'
            }
        };
        this.hasError = (controlName, errorName) => {
            return this.MormoCareUserRegForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.MormoCareUserRegForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]),
            Initials: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(150)]),
            passwordGroup: this.fb.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]),
            }, { validators: matchPassword }),
        });
        this.MormoCareUserRegForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.MormoCareUserRegForm);
        });
    }
    // Logs validation error messages
    logValidationErrors(group = this.MormoCareUserRegForm) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid
                && (abstractControl.touched || abstractControl.dirty)) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.logValidationErrors(abstractControl);
            }
        });
    }
    OnSubmit(form) {
        var formData = form.value;
        const userData = this.getUserInformation(formData);
        this.userService.registerUser(userData)
            .subscribe((data) => {
            if (data.succeeded == true) {
                this.resetForm(form);
                this.toastr.success('User registration successful', "Success!");
            }
            else {
                data.errors.forEach(element => {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
            ;
        });
    }
    getUserInformation(formData) {
        return {
            UserName: formData.emailAddress,
            Password: formData.passwordGroup.password,
            Email: formData.emailAddress,
            FirstName: formData.firstName,
            LastName: formData.lastName
        };
    }
    resetForm(form) {
        if (form != null)
            form.reset();
        this.user = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    }
};
SignUpComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
SignUpComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/membership/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/membership/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_shared_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], SignUpComponent);

function matchPassword(group) {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
    console.log(`Value of password is : ${passwordControl.value} and confirm Password : ${confirmPasswordControl.value}`);
    if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
        console.log("Matched");
        return null;
    }
    else {
        console.log("Mis-Matched");
        return { 'passwordMisMatch': true };
    }
}


/***/ }),

/***/ "./src/app/mormobanner/mormobanner.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mormobanner/mormobanner.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vcm1vYmFubmVyL21vcm1vYmFubmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mormobanner/mormobanner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mormobanner/mormobanner.component.ts ***!
  \******************************************************/
/*! exports provided: MormobannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MormobannerComponent", function() { return MormobannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MormobannerComponent = class MormobannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
MormobannerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mormobanner',
        template: __webpack_require__(/*! raw-loader!./mormobanner.component.html */ "./node_modules/raw-loader/index.js!./src/app/mormobanner/mormobanner.component.html"),
        styles: [__webpack_require__(/*! ./mormobanner.component.css */ "./src/app/mormobanner/mormobanner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MormobannerComponent);



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 0.8em;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.navigation-items{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nmat-toolbar{\r\n    border-radius: 3px;\r\n}\r\n\r\n@media(max-width: 959px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KXtcclxuICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HeaderComponent = class HeaderComponent {
    constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "sidenavToggle", void 0);
HeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.nav-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXYtY2FwdGlvbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SidenavListComponent = class SidenavListComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSidenavClose = () => {
            this.sidenavClose.emit();
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], SidenavListComponent.prototype, "sidenavClose", void 0);
SidenavListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidenav-list',
        template: __webpack_require__(/*! raw-loader!./sidenav-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/sidenav-list/sidenav-list.component.html"),
        styles: [__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/navigation/sidenav-list/sidenav-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidenavListComponent);



/***/ }),

/***/ "./src/app/shared/services/email-service/email.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/email-service/email.service.ts ***!
  \****************************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let EmailService = class EmailService {
    constructor() { }
};
EmailService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], EmailService);



/***/ }),

/***/ "./src/app/shared/services/team-service/team.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/team-service/team.service.ts ***!
  \**************************************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TeamService = class TeamService {
    constructor() { }
    GetTeamMembers() {
        return [
            {
                'Title': 'Mr',
                'Fname': 'Gerald',
                'Lname': 'Moyo',
                'CoPosition': 'Director',
                'Qualification': 'Motivational Speaker',
                'ProfilPicture': 'assets/images/profile_pics/male_user.png',
                'Profile': 'Mr G Moyo is a qualified motivationa speaker, with vast experience in life coaching and self development ',
                'ImagePath': 'assets/images/users/user-male-icon.png'
            },
            {
                'Title': 'Miss',
                'Fname': 'Sharon',
                'Lname': 'Moyo',
                'CoPosition': 'Director',
                'Qualification': 'Motivational Speaker',
                'ProfilPicture': 'assets/images/profile_pics/female_user.png',
                'Profile': 'Miss G Moyo is a qualified motivationa speaker, with vast experience in life coaching and self development ',
                'ImagePath': 'assets/images/users/user-female-icon.png'
            },
            {
                'Title': 'Mrs',
                'Fname': 'Phumelele',
                'Lname': 'Moyo',
                'CoPosition': 'Senior Adminstrator',
                'Qualification': 'Motivational Speaker',
                'ProfilPicture': 'assets/images/profile_pics/female_user.png',
                'Profile': 'Mrs G Moyo is a qualified motivationa speaker, with vast experience in life coaching and self development ',
                'ImagePath': 'assets/images/users/user-female-icon.png'
            }
        ];
    }
};
TeamService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], TeamService);



/***/ }),

/***/ "./src/app/shared/services/user-service/user.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/user-service/user.service.ts ***!
  \**************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UserService = class UserService {
    constructor(http, fb) {
        this.http = http;
        this.fb = fb;
        this.rootUrl = 'http://localhost:52880/';
        this.formModel = this.fb.group({
            FirstName: [''],
            LastName: [''],
            Initials: [''],
            UserName: [''],
            Passwords: this.fb.group({
                Password: [''],
                ConfirmPassword: ['']
            })
        });
    }
    registerUser(user) {
        const body = {
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        };
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + 'api/ApplicationUser/Register', body, { headers: reqHeader });
    }
    userAuthentication(formData) {
        return this.http.post(this.rootUrl + 'api/applicationUser/Login', formData);
    }
    getUserProfile() {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'api/UserProfile', { headers: tokenHeader });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], UserService);



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-card-header{\r\n    background-color: #1b2dc9 !important;\r\n    color: white;\r\n    padding:5px !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-card{\r\n    padding:0 !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyZGM5ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJke1xyXG4gICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/team-service/team.service */ "./src/app/shared/services/team-service/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TeamComponent = class TeamComponent {
    constructor(teamService) {
        this.teamService = teamService;
        this.Members = [];
    }
    ngOnInit() {
        this.Members = this.teamService.GetTeamMembers();
    }
};
TeamComponent.ctorParameters = () => [
    { type: _shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"] }
];
TeamComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-team',
        template: __webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/index.js!./src/app/team/team.component.html"),
        styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [_shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
], TeamComponent);



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
const environment = {
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
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\PracticeDev\Vabereki\mormocare\MormoCareDotNetCore\MormoCareDotNetCore\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map