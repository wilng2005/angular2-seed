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
                }
                TemplateDriverFormComponent.prototype.onSubmit = function (form) {
                    console.log(form.value);
                };
                TemplateDriverFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n    <h2>Sign-up Form</h2>\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"mail\">Mail</label>\n        <input ngControl=\"email\" type=\"text\" class=\"form-control\" id=\"mail\" placeholder=\"Mail\" required>\n      </div> \n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input ngControl=\"password\" type=\"text\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"confirm-password\">Confirm Password</label>\n        <input ngControl=\"confirm-password\" type=\"text\" class=\"form-control\" id=\"confirm-password\" placeholder=\"Confirm Password\" required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDriverFormComponent);
                return TemplateDriverFormComponent;
            }());
            exports_1("TemplateDriverFormComponent", TemplateDriverFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlci1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFBQTtnQkFLQSxDQUFDO2dCQUhHLDhDQUFRLEdBQVIsVUFBUyxJQUFJO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQTFCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxvQkFBb0I7d0JBQzdCLFFBQVEsRUFBRSx1MkJBaUJUO3FCQUNKLENBQUM7OytDQUFBO2dCQU9GLGtDQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCxxRUFLQyxDQUFBIiwiZmlsZSI6InRlbXBsYXRlLWRyaXZlci1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonbXktdGVtcGxhdGUtZHJpdmVuJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5TaWduLXVwIEZvcm08L2gyPlxuICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibWFpbFwiPk1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtYWlsXCIgcGxhY2Vob2xkZXI9XCJNYWlsXCIgcmVxdWlyZWQ+XG4gICAgICA8L2Rpdj4gXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29uZmlybS1wYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbmZpcm0tcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRHJpdmVyRm9ybUNvbXBvbmVudHtcblxuICAgIG9uU3VibWl0KGZvcm0pe1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
