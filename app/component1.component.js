System.register(['@angular/core', "./services/logging.service", "./services/calculator.service", "./services/data.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1, data_service_1;
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
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
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
                Component1Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component1Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n        <h2>Logging Service</h2>\n        <div class=\"form-inline\">\n            <input class=\"form-control\" type=\"text\" #message>\n            <button class=\"btn btn-default\" (click)=\"onLog(message.value)\">Send</button>\n        </div>\n        <h2>Calculator Service</h2>\n        <p class=\"lead\">Add or multiply these two numbers:</p>\n        <div class=\"form-inline\">\n            <input class=\"form-control\" type=\"text\" #num1>\n            <input class=\"form-control\" type=\"text\" #num2>\n            <button class=\"btn btn-default\" (click)=\"onMultiply(num1.value,num2.value)\">Multiply</button>\n            <button class=\"btn btn-default\" (click)=\"onAdd(num1.value,num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n            <input type class=\"form-control\" #newData/>\n            <button class=\"btn btn-default\" (click)=\"onInsert(newData.value)\">Insert new Data</button>\n        </div>\n        <h2>Data Service</h2>\n        <p class=\"lead\">Add or multiply these two numbers:</p>\n        <div class=\"form-inline\">\n            <button class=\"btn btn-default\" (click)=\"onGetData()\">Get some data</button>\n            <br>\n            <p>Data: {{data}}</p>\n        </div>\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUdJLDZCQUFvQixlQUE4QixFQUFVLGtCQUFxQyxFQUFVLFlBQXlCO29CQUFoSCxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtvQkFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUVwSSxDQUFDO2dCQUNELG1DQUFLLEdBQUwsVUFBTSxPQUFjO29CQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBVyxFQUFDLElBQVc7b0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFFRCxtQ0FBSyxHQUFMLFVBQU0sSUFBVyxFQUFDLElBQVc7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFDRCx1Q0FBUyxHQUFUO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDbEQsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSLFVBQVMsS0FBWTtvQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBckRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSx5dkNBeUJUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUMsc0NBQWlCLENBQUM7cUJBQ2hELENBQUM7O3VDQUFBO2dCQXlCRiwwQkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQscURBdUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2VcIlxuaW1wb3J0IHtDYWxjdWxhdG9yU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlXCJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMj5Mb2dnaW5nIFNlcnZpY2U8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgI21lc3NhZ2U+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyPkNhbGN1bGF0b3IgU2VydmljZTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPkFkZCBvciBtdWx0aXBseSB0aGVzZSB0d28gbnVtYmVyczo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAjbnVtMT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgI251bTI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSxudW0yLnZhbHVlKVwiPk11bHRpcGx5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uQWRkKG51bTEudmFsdWUsbnVtMi52YWx1ZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgI25ld0RhdGEvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkluc2VydChuZXdEYXRhLnZhbHVlKVwiPkluc2VydCBuZXcgRGF0YTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyPkRhdGEgU2VydmljZTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPkFkZCBvciBtdWx0aXBseSB0aGVzZSB0d28gbnVtYmVyczo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkdldERhdGEoKVwiPkdldCBzb21lIGRhdGE8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPkRhdGE6IHt7ZGF0YX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0xvZ2dpbmdTZXJ2aWNlLENhbGN1bGF0b3JTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDFDb21wb25lbnQge1xuICAgIHJlc3VsdDogc3RyaW5nO1xuICAgIGRhdGE6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dpbmdTZXJ2aWNlOkxvZ2dpbmdTZXJ2aWNlLCBwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UsIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSl7XG5cbiAgICB9XG4gICAgb25Mb2cobWVzc2FnZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgb25NdWx0aXBseShudW0xOm51bWJlcixudW0yOm51bWJlcil7XG4gICAgICAgIHRoaXMucmVzdWx0PSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwrbnVtMik7XG4gICAgfVxuXG4gICAgb25BZGQobnVtMTpudW1iZXIsbnVtMjpudW1iZXIpe1xuICAgICAgICB0aGlzLnJlc3VsdD0gJycrdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UuYWRkKCtudW0xLCtudW0yKTtcbiAgICB9XG4gICAgb25HZXREYXRhKCl7XG4gICAgICAgIHRoaXMuZGF0YT10aGlzLl9kYXRhU2VydmljZS5nZXRSYW5kb21TdHJpbmcoKTtcbiAgICB9XG4gICAgb25JbnNlcnQodmFsdWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuaW5zZXJ0KHZhbHVlKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
