import {Component,EventEmitter} from '@angular/core';
import {ListItem} from "../list-item";
import {ShoppingListService} from  "./shopping-list.service";

@Component({
    selector: 'shopping-list-new-item',
    template: `
        <div class='form'>
            <div class="form-group">
                <label for="item-name">Name</label>
                <input type="text" class="form-control" id="item-name" [(ngModel)]="item.name"/>
            </div>
            <div class="form-group">
                <label for="item-amt">Amount</label>
                <input type="text" id="item-amt" class="form-control" [(ngModel)]="item.amount"/>
            </div>
            <button class="btn btn-default" (click)="onClick()">Add Item</button>
        </div>
    `,
    outputs:['itemAdded']
})

export class ShoppingListNewItemComponent {
    item={
        name:'',
        amount:0
    };

    constructor(private _shoppingListService: ShoppingListService){}

    onClick(){
        var newItem={
            name:this.item.name,
            amount:this.item.amount
        };
        this._shoppingListService.insertItem(newItem);
    }
}

