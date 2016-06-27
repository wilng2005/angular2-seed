import {Component} from '@angular/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {ListItem} from "../list-item";
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
                      <li class="list-group-item" *ngFor="#listItem of listItems" (click)="onSelect(listItem)">{{listItem.name}} ({{listItem.amount}})</li>
                    </ul>
            </div>
          </div>
        </div>
        <div *ngIf="selectedItem != null">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">New Item</h3>
              </div>
              <div class="panel-body">
                <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
                </div>
            </div>
        </div>
    `,
    directives: [ShoppingListNewItemComponent,ShoppingListItemComponent]
})

export class ShoppingListComponent {
    listItems = new Array<ListItem>();
    selectedItem: ListItem;

    onItemAdded(item:ListItem) {
        this.listItems.push({name: item.name, amount: item.amount});
    }

    onSelect(item:ListItem){
        console.log("onSelect");
        this.selectedItem=item;
    }
    onRemove(item:ListItem){
        this.listItems.splice(this.listItems.indexOf(item),1);
        this.selectedItem=null;
    }
}