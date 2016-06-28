import {Component,EventEmitter} from '@angular/core';
import {ListItem} from "../list-item";
import {ShoppingListService} from "./shopping-list.service"
@Component({
    selector: 'shopping-list-item',
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
            <button class="btn btn-danger" (click)="onDelete()">Delete Item</button>
        </div>
    `,
    inputs: ['item'],
    outputs:['removed']
})
export class ShoppingListItemComponent {
    item = {name:'', amount:0};
    removed = new EventEmitter<any>();
    constructor(private _shoppingListService:ShoppingListService){}
    onDelete(){
        this._shoppingListService.deleteItem(this.item);
        this.removed.emit(null);
    }
}