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
    var CalculatorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CalculatorService = (function () {
                function CalculatorService() {
                }
                CalculatorService.prototype.add = function (num1, num2) {
                    return num1 + num2;
                };
                CalculatorService.prototype.multiply = function (num1, num2) {
                    return num1 * num2;
                };
                CalculatorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CalculatorService);
                return CalculatorService;
            }());
            exports_1("CalculatorService", CalculatorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQVFBLENBQUM7Z0JBUEcsK0JBQUcsR0FBSCxVQUFJLElBQVcsRUFBRSxJQUFXO29CQUN4QixNQUFNLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSLFVBQVMsSUFBVyxFQUFFLElBQVc7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQVRMO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQVViLHdCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCxpREFRQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JTZXJ2aWNlIHtcbiAgICBhZGQobnVtMTpudW1iZXIsIG51bTI6bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIG51bTErbnVtMjtcbiAgICB9XG5cbiAgICBtdWx0aXBseShudW0xOm51bWJlciwgbnVtMjpudW1iZXIpe1xuICAgICAgICByZXR1cm4gbnVtMSpudW0yO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
