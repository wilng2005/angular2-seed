import {Component} from '@angular/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';

@Component({
    selector: 'shopping-list',
    template: `

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">New Item</h3>
          </div>
          <div class="panel-body">
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">My List</h3>
          </div>
          <div class="panel-body">
             <div class="list">
                   <h4>Output List</h4>
                   <ul class="list-group">
                      <li class="list-group-item" *ngFor="#listItem of listItems">{{listItem.name}} ({{listItem.amount}})</li>
                    </ul>
            </div>
          </div>
        </div>
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