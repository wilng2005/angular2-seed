import {Component} from '@angular/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';

@Component({
    selector: 'shopping-list',
    template: `
        <section>
        New Item
        <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            <div class="list">
                   Output List
                   <ul>
                      <li *ngFor="#listItem of listItems">{{listItem.name}} ({{listItem.amount}})</li>
                    </ul>
            </div>
        </section>
        <section>
            Edit items
        </section>
    `,
    directives: [ShoppingListNewItemComponent]
})

export class ShoppingListComponent {
    listItems = new Array<{name:string, amount:number}>();

    onItemAdded(item:{name:string, amount:number}) {
        this.listItems.push({name: item.name, amount: item.amount});
    }
}