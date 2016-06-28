System.register(['@angular/core', './shopping-list-new-item.component', './shopping-list-item.component', "./shopping-list.service", "../filter.pipe"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1, shopping_list_service_1, filter_pipe_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                }
                ShoppingListComponent.prototype.onSelect = function (item) {
                    console.log("onSelect");
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._shoppingListService.getItems();
                };
                ShoppingListComponent.prototype.onRemove = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">New Item</h3>\n          </div>\n          <div class=\"panel-body\">\n            <shopping-list-new-item></shopping-list-new-item>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">My List</h3>\n          </div>\n          <div class=\"panel-body\">\n             <div class=\"form form-group\">\n                <label>\n                    Filter   \n                </label>\n                <input class=\"form-control\" type=\"text\" #filter (keyup)=\"0\">\n             </div>\n             <div class=\"list\">\n                   <h4>Output List</h4>\n                   <ul class=\"list-group\">\n                      <li class=\"list-group-item\" *ngFor=\"let listItem of listItems | myFilter:filter.value\" (click)=\"onSelect(listItem)\">{{listItem.name}} ({{listItem.amount}})</li>\n                    </ul>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"selectedItem != null\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">New Item</h3>\n              </div>\n              <div class=\"panel-body\">\n                <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove()\"></shopping-list-item>\n                </div>\n            </div>\n        </div>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent],
                        providers: [shopping_list_service_1.ShoppingListService],
                        pipes: [filter_pipe_1.FilterPipe]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzREE7Z0JBSUksK0JBQW9CLG9CQUF3QztvQkFBeEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQjtnQkFBRSxDQUFDO2dCQUUvRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYTtvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEQsQ0FBQztnQkFDRCx3Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQS9ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsK2dEQXVDVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrREFBNEIsRUFBQyx3REFBeUIsQ0FBQzt3QkFDcEUsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7d0JBQ2hDLEtBQUssRUFBQyxDQUFDLHdCQUFVLENBQUM7cUJBQ3JCLENBQUM7O3lDQUFBO2dCQW1CRiw0QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQseURBaUJDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50fSBmcm9tICcuL3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsdGVyUGlwZX0gZnJvbSBcIi4uL2ZpbHRlci5waXBlXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhbmVsLXRpdGxlXCI+TmV3IEl0ZW08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1uZXctaXRlbT48L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJwYW5lbC10aXRsZVwiPk15IExpc3Q8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0gZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRmlsdGVyICAgXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiICNmaWx0ZXIgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgIDxoND5PdXRwdXQgTGlzdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiICpuZ0Zvcj1cImxldCBsaXN0SXRlbSBvZiBsaXN0SXRlbXMgfCBteUZpbHRlcjpmaWx0ZXIudmFsdWVcIiAoY2xpY2spPVwib25TZWxlY3QobGlzdEl0ZW0pXCI+e3tsaXN0SXRlbS5uYW1lfX0gKHt7bGlzdEl0ZW0uYW1vdW50fX0pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkSXRlbSAhPSBudWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhbmVsLXRpdGxlXCI+TmV3IEl0ZW08L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1pdGVtIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlKClcIj48L3Nob3BwaW5nLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50LFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Nob3BwaW5nTGlzdFNlcnZpY2VdLFxuICAgIHBpcGVzOltGaWx0ZXJQaXBlXVxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBsaXN0SXRlbXM6QXJyYXk8TGlzdEl0ZW0+O1xuICAgIHNlbGVjdGVkSXRlbTogTGlzdEl0ZW07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOlNob3BwaW5nTGlzdFNlcnZpY2Upe31cblxuICAgIG9uU2VsZWN0KGl0ZW06TGlzdEl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uU2VsZWN0XCIpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbT1pdGVtO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55e1xuICAgICAgICB0aGlzLmxpc3RJdGVtcz10aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuICAgIG9uUmVtb3ZlKCl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtPW51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
