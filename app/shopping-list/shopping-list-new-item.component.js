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
                        template: "\n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\"/>\n        </div>\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\"/>\n        </div>\n        <button (click)=\"onClick()\">Add Item</button>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDO3dCQUNELElBQUksRUFBQyxFQUFFO3dCQUNQLE1BQU0sRUFBQyxDQUFDO3FCQUNYLENBQUM7b0JBRUYsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFLaEUsQ0FBQztnQkFIRyw4Q0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkExQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUscWFBVVQ7d0JBQ0QsT0FBTyxFQUFDLENBQUMsV0FBVyxDQUFDO3FCQUN4QixDQUFDOztnREFBQTtnQkFhRixtQ0FBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsdUVBV0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LW5ldy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtdFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW10XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiPkFkZCBJdGVtPC9idXR0b24+XG4gICAgYCxcbiAgICBvdXRwdXRzOlsnaXRlbUFkZGVkJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50IHtcbiAgICBpdGVtPXtcbiAgICAgICAgbmFtZTonJyxcbiAgICAgICAgYW1vdW50OjBcbiAgICB9O1xuXG4gICAgaXRlbUFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTpzdHJpbmcsYW1vdW50Om51bWJlcn0+KCk7XG5cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMuaXRlbUFkZGVkLmVtaXQodGhpcy5pdGVtKTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
