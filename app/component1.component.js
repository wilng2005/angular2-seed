System.register(['@angular/core', "./services/logging.service", "./services/calculator.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n        <h2>Logging Service</h2>\n        <div class=\"form-inline\">\n            <input class=\"form-control\" type=\"text\" #message>\n            <button class=\"btn btn-default\" (click)=\"onLog(message.value)\">Send</button>\n        </div>\n        <h2>Calculator Service</h2>\n        <p class=\"lead\">Add or multiply these two numbers:</p>\n        <div class=\"form-inline\">\n            <input class=\"form-control\" type=\"text\" #num1>\n            <input class=\"form-control\" type=\"text\" #num2>\n            <button class=\"btn btn-default\" (click)=\"onMultiply(num1.value,num2.value)\">Multiply</button>\n            <button class=\"btn btn-default\" (click)=\"onAdd(num1.value,num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n        </div>\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUVJLDZCQUFvQixlQUE4QixFQUFVLGtCQUFxQztvQkFBN0Usb0JBQWUsR0FBZixlQUFlLENBQWU7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtnQkFFakcsQ0FBQztnQkFDRCxtQ0FBSyxHQUFMLFVBQU0sT0FBYztvQkFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLElBQVcsRUFBQyxJQUFXO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFFLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLElBQVcsRUFBQyxJQUFXO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFFLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBckNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSx5eUJBZ0JUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUMsc0NBQWlCLENBQUM7cUJBQ2hELENBQUM7O3VDQUFBO2dCQWtCRiwwQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQscURBZ0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2VcIlxuaW1wb3J0IHtDYWxjdWxhdG9yU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlXCJcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMj5Mb2dnaW5nIFNlcnZpY2U8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgI21lc3NhZ2U+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyPkNhbGN1bGF0b3IgU2VydmljZTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPkFkZCBvciBtdWx0aXBseSB0aGVzZSB0d28gbnVtYmVyczo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAjbnVtMT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgI251bTI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSxudW0yLnZhbHVlKVwiPk11bHRpcGx5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uQWRkKG51bTEudmFsdWUsbnVtMi52YWx1ZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtMb2dnaW5nU2VydmljZSxDYWxjdWxhdG9yU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQxQ29tcG9uZW50IHtcbiAgICByZXN1bHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTpMb2dnaW5nU2VydmljZSwgcHJpdmF0ZSBfY2FsY3VsYXRvclNlcnZpY2U6IENhbGN1bGF0b3JTZXJ2aWNlKXtcblxuICAgIH1cbiAgICBvbkxvZyhtZXNzYWdlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBvbk11bHRpcGx5KG51bTE6bnVtYmVyLG51bTI6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5yZXN1bHQ9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLm11bHRpcGx5KCtudW0xLCtudW0yKTtcbiAgICB9XG5cbiAgICBvbkFkZChudW0xOm51bWJlcixudW0yOm51bWJlcil7XG4gICAgICAgIHRoaXMucmVzdWx0PSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5hZGQoK251bTEsK251bTIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
