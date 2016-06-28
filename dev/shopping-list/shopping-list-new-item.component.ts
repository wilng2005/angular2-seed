import {Component,EventEmitter,OnInit} from '@angular/core';
import {ListItem} from "../list-item";
import {ShoppingListService} from  "./shopping-list.service";
import {FormBuilder,ControlGroup,Control,Validators} from "@angular/common";

@Component({
    selector: 'shopping-list-new-item',
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div class='form'>
                <div class="form-group">
                    <label for="item-name">Name</label>
                    <input type="text" class="form-control" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']" />
                </div>
                <div class="form-group">
                    <label for="item-amt">Amount</label>
                    <input type="text" id="item-amt" class="form-control" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']"/>
                </div>
                <button class="btn btn-default" type="submit" [disabled]="!myForm.valid">Add Item</button>
            </div>
        </form>
        
    `,
    outputs:['itemAdded']
})

export class ShoppingListNewItemComponent implements OnInit {
    item={
        name:'',
        amount:0
    };
    myForm:ControlGroup;

    constructor(private _shoppingListService: ShoppingListService, private _formBuilder:FormBuilder){}

    onSubmit(){
        var newItem={
            name:this.item.name,
            amount:this.item.amount
        };
        this._shoppingListService.insertItem(newItem);
    }

    ngOnInit():any{
        this.myForm = this._formBuilder.group({
            'itemName':['',Validators.required],
            'itemAmount':['',Validators.compose([
               Validators.required,
                greaterZero
            ])]
        });
    }
}

function greaterZero(control:Control):{[s:string]:boolean}{
    if(control.value<=0){
        return {notEnough:true};
    }
}
