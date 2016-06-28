System.register(['@angular/core', "./shopping-list.service", "@angular/common"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1, common_1;
    var ShoppingListNewItemComponent;
    function greaterZero(control) {
        if (control.value <= 0) {
            return { notEnough: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService, _formBuilder) {
                    this._shoppingListService = _shoppingListService;
                    this._formBuilder = _formBuilder;
                    this.item = {
                        name: '',
                        amount: 0
                    };
                }
                ShoppingListNewItemComponent.prototype.onSubmit = function () {
                    var newItem = {
                        name: this.item.name,
                        amount: this.item.amount
                    };
                    this._shoppingListService.insertItem(newItem);
                };
                ShoppingListNewItemComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'itemName': ['', common_1.Validators.required],
                        'itemAmount': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                greaterZero
                            ])]
                    });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div class='form'>\n                <div class=\"form-group\">\n                    <label for=\"item-name\">Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"item-name\" [(ngModel)]=\"item.name\" [ngFormControl]=\"myForm.controls['itemName']\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"item-amt\">Amount</label>\n                    <input type=\"text\" id=\"item-amt\" class=\"form-control\" [(ngModel)]=\"item.amount\" [ngFormControl]=\"myForm.controls['itemAmount']\"/>\n                </div>\n                <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!myForm.valid\">Add Item</button>\n            </div>\n        </form>\n        \n    ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFzREEscUJBQXFCLE9BQWU7UUFDaEMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztZQWhDRDtnQkFPSSxzQ0FBb0Isb0JBQXlDLEVBQVUsWUFBd0I7b0JBQTNFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBTi9GLFNBQUksR0FBQzt3QkFDRCxJQUFJLEVBQUMsRUFBRTt3QkFDUCxNQUFNLEVBQUMsQ0FBQztxQkFDWCxDQUFDO2dCQUcrRixDQUFDO2dCQUVsRywrQ0FBUSxHQUFSO29CQUNJLElBQUksT0FBTyxHQUFDO3dCQUNSLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7d0JBQ25CLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07cUJBQzFCLENBQUM7b0JBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFFRCwrQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ2xDLFVBQVUsRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbkMsWUFBWSxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNqQyxtQkFBVSxDQUFDLFFBQVE7Z0NBQ2xCLFdBQVc7NkJBQ2QsQ0FBQyxDQUFDO3FCQUNOLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQTlDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSwyMEJBZVQ7d0JBQ0QsT0FBTyxFQUFDLENBQUMsV0FBVyxDQUFDO3FCQUN4QixDQUFDOztnREFBQTtnQkE0QkYsbUNBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELHVFQTBCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXIsT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAgXCIuL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlcixDb250cm9sR3JvdXAsQ29udHJvbCxWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1uZXctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snaXRlbU5hbWUnXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snaXRlbUFtb3VudCddXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgYCxcbiAgICBvdXRwdXRzOlsnaXRlbUFkZGVkJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtPXtcbiAgICAgICAgbmFtZTonJyxcbiAgICAgICAgYW1vdW50OjBcbiAgICB9O1xuICAgIG15Rm9ybTpDb250cm9sR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlLCBwcml2YXRlIF9mb3JtQnVpbGRlcjpGb3JtQnVpbGRlcil7fVxuXG4gICAgb25TdWJtaXQoKXtcbiAgICAgICAgdmFyIG5ld0l0ZW09e1xuICAgICAgICAgICAgbmFtZTp0aGlzLml0ZW0ubmFtZSxcbiAgICAgICAgICAgIGFtb3VudDp0aGlzLml0ZW0uYW1vdW50XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbShuZXdJdGVtKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueXtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnaXRlbU5hbWUnOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdpdGVtQW1vdW50JzpbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgZ3JlYXRlclplcm9cbiAgICAgICAgICAgIF0pXVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdyZWF0ZXJaZXJvKGNvbnRyb2w6Q29udHJvbCk6e1tzOnN0cmluZ106Ym9vbGVhbn17XG4gICAgaWYoY29udHJvbC52YWx1ZTw9MCl7XG4gICAgICAgIHJldHVybiB7bm90RW5vdWdoOnRydWV9O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
