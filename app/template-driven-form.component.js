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
    var TemplateDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateDrivenFormComponent = (function () {
                function TemplateDrivenFormComponent() {
                    this.user = { email: "", password: "" };
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user.email = form.value['email'];
                    this.user.password = form.controls['password'].value;
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n    <h2>Sign-up Form</h2>\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input ngControl=\"email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required #email=\"ngForm\">\n        <span class=\"text-danger\" *ngIf=\"!email.valid\">Not valid</span>\n      </div> \n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input ngControl=\"password\" type=\"text\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required #password=\"ngForm\">\n        <span class=\"text-danger\" *ngIf=\"!password.valid\">Not valid</span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input ngControl=\"confirmPassword\" type=\"text\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm Password\" required #confirmPassword=\"ngForm\">\n        <span class=\"text-danger\" *ngIf=\"!confirmPassword.valid\">Not valid</span>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!f.valid || password.value!=confirmPassword.value\">Submit</button>\n    </form>\n    <h2>You Submitted</h2>\n    <div>Email:{{user.email}}</div>\n    <div>Password:{{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThCQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUMsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQTtnQkFNL0IsQ0FBQztnQkFMRyw4Q0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFFdkQsQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsb0JBQW9CO3dCQUM3QixRQUFRLEVBQUUsNDBDQXVCVDtxQkFDSixDQUFDOzsrQ0FBQTtnQkFTRixrQ0FBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQscUVBT0MsQ0FBQSIsImZpbGUiOiJ0ZW1wbGF0ZS1kcml2ZW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J215LXRlbXBsYXRlLWRyaXZlbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aDI+U2lnbi11cCBGb3JtPC9oMj5cbiAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCAjZW1haWw9XCJuZ0Zvcm1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIWVtYWlsLnZhbGlkXCI+Tm90IHZhbGlkPC9zcGFuPlxuICAgICAgPC9kaXY+IFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwicGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZCAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIXBhc3N3b3JkLnZhbGlkXCI+Tm90IHZhbGlkPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjb25maXJtUGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb25maXJtUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZCAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cIiFjb25maXJtUGFzc3dvcmQudmFsaWRcIj5Ob3QgdmFsaWQ8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkIHx8IHBhc3N3b3JkLnZhbHVlIT1jb25maXJtUGFzc3dvcmQudmFsdWVcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPGgyPllvdSBTdWJtaXR0ZWQ8L2gyPlxuICAgIDxkaXY+RW1haWw6e3t1c2VyLmVtYWlsfX08L2Rpdj5cbiAgICA8ZGl2PlBhc3N3b3JkOnt7dXNlci5wYXNzd29yZH19PC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRHJpdmVuRm9ybUNvbXBvbmVudHtcbiAgICB1c2VyPXtlbWFpbDpcIlwiLHBhc3N3b3JkOlwiXCJ9XG4gICAgb25TdWJtaXQoZm9ybSl7XG4gICAgICAgIHRoaXMudXNlci5lbWFpbD1mb3JtLnZhbHVlWydlbWFpbCddO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQ9Zm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZTtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
