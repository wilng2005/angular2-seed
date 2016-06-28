System.register(["@angular/core", "@angular/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var DataDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DataDrivenFormComponent = (function () {
                function DataDrivenFormComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.user = { email: "", password: "" };
                }
                DataDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user = this.myForm.value;
                };
                DataDrivenFormComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'email': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.required],
                        'confirmPassword': ['', common_1.Validators.required]
                    });
                };
                DataDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-data-driven',
                        template: "\n    <h2>Sign-up Form</h2>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" #email=\"ngForm\" >\n        <span class=\"text-danger\" *ngIf=\"!email.valid\">Not valid</span>\n      </div> \n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" class=\"form-control\" id=\"password\" placeholder=\"Password\" #password=\"ngForm\"   >\n        <span class=\"text-danger\" *ngIf=\"!password.valid\">Not valid</span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm Password\"  #confirmPassword=\"ngForm\"  >\n        <span class=\"text-danger\" *ngIf=\"!confirmPassword.valid\">Not valid</span>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n    <h2>You Submitted</h2>\n    <div>Email:{{user.email}}</div>\n    <div>Password:{{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataDrivenFormComponent);
                return DataDrivenFormComponent;
            }());
            exports_1("DataDrivenFormComponent", DataDrivenFormComponent);
        }
    }
});
//# sourceMappingURL=data-driven-form.component.js.map