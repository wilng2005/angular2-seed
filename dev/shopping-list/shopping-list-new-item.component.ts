import {Component,EventEmitter} from '@angular/core';

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

    itemAdded = new EventEmitter<{name:string,amount:number}>();

    onClick(){
        this.itemAdded.emit(this.item);
    }
}

