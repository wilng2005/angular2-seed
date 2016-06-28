System.register(['@angular/core', "./shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.item);
                    this.removed.emit(null);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n        <div class='form'>\n            <div class=\"form-group\">\n                <label for=\"item-name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"item-name\" [(ngModel)]=\"item.name\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"item-amt\">Amount</label>\n                <input type=\"text\" id=\"item-amt\" class=\"form-control\" [(ngModel)]=\"item.amount\"/>\n            </div>\n            <button class=\"btn btn-danger\" (click)=\"onDelete()\">Delete Item</button>\n        </div>\n    ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFHSSxtQ0FBb0Isb0JBQXdDO29CQUF4Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQW9CO29CQUY1RCxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQztvQkFDM0IsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO2dCQUM0QixDQUFDO2dCQUMvRCw0Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkF6Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsMGtCQVlUO3dCQUNELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQzt3QkFDaEIsT0FBTyxFQUFDLENBQUMsU0FBUyxDQUFDO3FCQUN0QixDQUFDOzs2Q0FBQTtnQkFTRixnQ0FBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsaUVBUUMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LnNlcnZpY2VcIlxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtdFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGUgSXRlbTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGlucHV0czogWydpdGVtJ10sXG4gICAgb3V0cHV0czpbJ3JlbW92ZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50IHtcbiAgICBpdGVtID0ge25hbWU6JycsIGFtb3VudDowfTtcbiAgICByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTpTaG9wcGluZ0xpc3RTZXJ2aWNlKXt9XG4gICAgb25EZWxldGUoKXtcbiAgICAgICAgdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5kZWxldGVJdGVtKHRoaXMuaXRlbSk7XG4gICAgICAgIHRoaXMucmVtb3ZlZC5lbWl0KG51bGwpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
