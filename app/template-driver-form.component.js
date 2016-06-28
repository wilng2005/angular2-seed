System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var TemplateDriverFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateDriverFormComponent = (function () {
                function TemplateDriverFormComponent() {
                    this.user = { email: "", password: "" };
                }
                TemplateDriverFormComponent.prototype.onSubmit = function (form) {
                    this.user.email = form.value['email'];
                    this.user.password = form.controls['password'].value;
                };
                TemplateDriverFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n    <h2>Sign-up Form</h2>\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input ngControl=\"email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required #email=\"ngForm\">\n        <span class=\"text-danger\" *ngIf=\"!email.valid\">Not valid</span>\n      </div> \n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input ngControl=\"password\" type=\"text\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required #password=\"ngForm\">\n        <span class=\"text-danger\" *ngIf=\"!password.valid\">Not valid</span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input ngControl=\"confirmPassword\" type=\"text\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm Password\" required #confirmPassword=\"ngForm\">\n        <span class=\"text-danger\" *ngIf=\"!confirmPassword.valid\">Not valid</span>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!f.valid || password.value!=confirmPassword.value\">Submit</button>\n    </form>\n    <h2>You Submitted</h2>\n    <div>Email:{{user.email}}</div>\n    <div>Password:{{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDriverFormComponent);
                return TemplateDriverFormComponent;
            }());
            exports_1("TemplateDriverFormComponent", TemplateDriverFormComponent);
        }
    }
});
//# sourceMappingURL=template-driver-form.component.js.map