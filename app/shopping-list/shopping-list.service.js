System.register(['@angular/core', "./mock-shopping-list"], function(exports_1, context_1) {
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
    var core_1, mock_shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_shopping_list_1_1) {
                mock_shopping_list_1 = mock_shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getItems = function () {
                    return mock_shopping_list_1.shopping_list;
                };
                ShoppingListService.prototype.insertItem = function (item) {
                    mock_shopping_list_1.shopping_list.push(item);
                };
                ShoppingListService.prototype.deleteItem = function (item) {
                    mock_shopping_list_1.shopping_list.splice(mock_shopping_list_1.shopping_list.indexOf(item), 1);
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBWUEsQ0FBQztnQkFYRyxzQ0FBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxrQ0FBYSxDQUFDO2dCQUN6QixDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBVyxJQUFhO29CQUNwQixrQ0FBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBYTtvQkFDcEIsa0NBQWEsQ0FBQyxNQUFNLENBQUMsa0NBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBYkw7b0JBQUMsaUJBQVUsRUFBRTs7dUNBQUE7Z0JBY2IsMEJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELHFEQVlDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHtzaG9wcGluZ19saXN0fSBmcm9tIFwiLi9tb2NrLXNob3BwaW5nLWxpc3RcIjtcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdFNlcnZpY2Uge1xuICAgIGdldEl0ZW1zKCl7XG4gICAgICAgIHJldHVybiBzaG9wcGluZ19saXN0O1xuICAgIH1cblxuICAgIGluc2VydEl0ZW0oaXRlbTpMaXN0SXRlbSl7XG4gICAgICAgIHNob3BwaW5nX2xpc3QucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKGl0ZW06TGlzdEl0ZW0pe1xuICAgICAgICBzaG9wcGluZ19saXN0LnNwbGljZShzaG9wcGluZ19saXN0LmluZGV4T2YoaXRlbSksMSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
