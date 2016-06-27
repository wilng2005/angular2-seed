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
    var Component2Component;
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
            Component2Component = (function () {
                function Component2Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                }
                Component2Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component2Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component2Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n        <h2>Logging Service</h2>\n        <div class=\"form-inline\">\n            <input class=\"form-control\" type=\"text\" #message>\n            <button class=\"btn btn-default\" (click)=\"onLog(message.value)\">Send</button>\n        </div>\n        <h2>Calculator Service</h2>\n        <p class=\"lead\">Add or multiply these two numbers:</p>\n        <div class=\"form-inline\">\n            <input class=\"form-control\" type=\"text\" #num1>\n            <input class=\"form-control\" type=\"text\" #num2>\n            <button class=\"btn btn-default\" (click)=\"onMultiply(num1.value,num2.value)\">Multiply</button>\n            <button class=\"btn btn-default\" (click)=\"onAdd(num1.value,num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n        </div>\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});
//# sourceMappingURL=component2.component.js.map