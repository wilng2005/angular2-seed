System.register(['@angular/core'], function(exports_1, context_1) {
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
    var ShoppingListNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent() {
                    this.item = {
                        name: '',
                        amount: 0
                    };
                    this.itemAdded = new core_1.EventEmitter();
                }
                ShoppingListNewItemComponent.prototype.onClick = function () {
                    this.itemAdded.emit(this.item);
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n        <div class='form'>\n            <div class=\"form-group\">\n                <label for=\"item-name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"item-name\" [(ngModel)]=\"item.name\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"item-amt\">Amount</label>\n                <input type=\"text\" id=\"item-amt\" class=\"form-control\" [(ngModel)]=\"item.amount\"/>\n            </div>\n            <button class=\"btn btn-default\" (click)=\"onClick()\">Add Item</button>\n        </div>\n    ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDO3dCQUNELElBQUksRUFBQyxFQUFFO3dCQUNQLE1BQU0sRUFBQyxDQUFDO3FCQUNYLENBQUM7b0JBRUYsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO2dCQUs3QyxDQUFDO2dCQUhHLDhDQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQTVCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSx1a0JBWVQ7d0JBQ0QsT0FBTyxFQUFDLENBQUMsV0FBVyxDQUFDO3FCQUN4QixDQUFDOztnREFBQTtnQkFhRixtQ0FBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsdUVBV0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LW5ldy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1hbXRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib25DbGljaygpXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBvdXRwdXRzOlsnaXRlbUFkZGVkJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50IHtcbiAgICBpdGVtPXtcbiAgICAgICAgbmFtZTonJyxcbiAgICAgICAgYW1vdW50OjBcbiAgICB9O1xuXG4gICAgaXRlbUFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcblxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5pdGVtQWRkZWQuZW1pdCh0aGlzLml0ZW0pO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
