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
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
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
                Component2Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component2Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n        <h2>Logging Service</h2>\n        <div class=\"form-inline\">\n            <input class=\"form-control\" type=\"text\" #message>\n            <button class=\"btn btn-default\" (click)=\"onLog(message.value)\">Send</button>\n        </div>\n        <h2>Calculator Service</h2>\n        <p class=\"lead\">Add or multiply these two numbers:</p>\n        <div class=\"form-inline\">\n            <input class=\"form-control\" type=\"text\" #num1>\n            <input class=\"form-control\" type=\"text\" #num2>\n            <button class=\"btn btn-default\" (click)=\"onMultiply(num1.value,num2.value)\">Multiply</button>\n            <button class=\"btn btn-default\" (click)=\"onAdd(num1.value,num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n            <input type class=\"form-control\" #newData/>\n            <button class=\"btn btn-default\" (click)=\"onInsert(newData.value)\">Insert new Data</button>\n        </div>\n        <h2>Data Service</h2>\n        <p class=\"lead\">Add or multiply these two numbers:</p>\n        <div class=\"form-inline\">\n            <button class=\"btn btn-default\" (click)=\"onGetData()\">Get some data</button>\n            <br>\n            <p>Data: {{data}}</p>\n        </div>\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService,]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUdJLDZCQUFvQixlQUE4QixFQUFVLGtCQUFxQyxFQUFVLFlBQXlCO29CQUFoSCxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtvQkFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUVwSSxDQUFDO2dCQUNELG1DQUFLLEdBQUwsVUFBTSxPQUFjO29CQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBVyxFQUFDLElBQVc7b0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFFRCxtQ0FBSyxHQUFMLFVBQU0sSUFBVyxFQUFDLElBQVc7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFDRCx1Q0FBUyxHQUFUO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDbEQsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSLFVBQVMsS0FBWTtvQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBckRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSx5dkNBeUJUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUMsc0NBQWlCLEVBQUU7cUJBQ2pELENBQUM7O3VDQUFBO2dCQXlCRiwwQkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQscURBdUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2VcIlxuaW1wb3J0IHtDYWxjdWxhdG9yU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlXCJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMj5Mb2dnaW5nIFNlcnZpY2U8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgI21lc3NhZ2U+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyPkNhbGN1bGF0b3IgU2VydmljZTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPkFkZCBvciBtdWx0aXBseSB0aGVzZSB0d28gbnVtYmVyczo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAjbnVtMT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgI251bTI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSxudW0yLnZhbHVlKVwiPk11bHRpcGx5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uQWRkKG51bTEudmFsdWUsbnVtMi52YWx1ZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgI25ld0RhdGEvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkluc2VydChuZXdEYXRhLnZhbHVlKVwiPkluc2VydCBuZXcgRGF0YTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyPkRhdGEgU2VydmljZTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPkFkZCBvciBtdWx0aXBseSB0aGVzZSB0d28gbnVtYmVyczo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkdldERhdGEoKVwiPkdldCBzb21lIGRhdGE8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPkRhdGE6IHt7ZGF0YX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0xvZ2dpbmdTZXJ2aWNlLENhbGN1bGF0b3JTZXJ2aWNlLF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQyQ29tcG9uZW50IHtcbiAgICByZXN1bHQ6IHN0cmluZztcbiAgICBkYXRhOnN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTpMb2dnaW5nU2VydmljZSwgcHJpdmF0ZSBfY2FsY3VsYXRvclNlcnZpY2U6IENhbGN1bGF0b3JTZXJ2aWNlLCBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2Upe1xuXG4gICAgfVxuICAgIG9uTG9nKG1lc3NhZ2U6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIG9uTXVsdGlwbHkobnVtMTpudW1iZXIsbnVtMjpudW1iZXIpe1xuICAgICAgICB0aGlzLnJlc3VsdD0gJycrdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UubXVsdGlwbHkoK251bTEsK251bTIpO1xuICAgIH1cblxuICAgIG9uQWRkKG51bTE6bnVtYmVyLG51bTI6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5yZXN1bHQ9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCgrbnVtMSwrbnVtMik7XG4gICAgfVxuICAgIG9uR2V0RGF0YSgpe1xuICAgICAgICB0aGlzLmRhdGE9dGhpcy5fZGF0YVNlcnZpY2UuZ2V0UmFuZG9tU3RyaW5nKCk7XG4gICAgfVxuICAgIG9uSW5zZXJ0KHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmluc2VydCh2YWx1ZSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
