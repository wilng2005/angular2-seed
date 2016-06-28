import {Component,OnInit} from '@angular/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {ListItem} from "../list-item";
import {ShoppingListService} from "./shopping-list.service";
import {FilterPipe} from "../filter.pipe"

@Component({
    selector: 'shopping-list',
    template: `

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">New Item</h3>
          </div>
          <div class="panel-body">
            <shopping-list-new-item></shopping-list-new-item>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">My List</h3>
          </div>
          <div class="panel-body">
             <div class="form form-group">
                <label>
                    Filter   
                </label>
                <input class="form-control" type="text" #filter (keyup)="0">
             </div>
             <div class="list">
                   <h4>Output List</h4>
                   <ul class="list-group">
                      <li class="list-group-item" *ngFor="let listItem of listItems | myFilter:filter.value" (click)="onSelect(listItem)">{{listItem.name}} ({{listItem.amount}})</li>
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
                <shopping-list-item [item]="selectedItem" (removed)="onRemove()"></shopping-list-item>
                </div>
            </div>
        </div>
    `,
    directives: [ShoppingListNewItemComponent,ShoppingListItemComponent],
    providers: [ShoppingListService],
    pipes:[FilterPipe]
})

export class ShoppingListComponent implements OnInit{
    listItems:Array<ListItem>;
    selectedItem: ListItem;

    constructor(private _shoppingListService:ShoppingListService){}

    onSelect(item:ListItem){
        console.log("onSelect");
        this.selectedItem=item;
    }

    ngOnInit():any{
        this.listItems=this._shoppingListService.getItems();
    }
    onRemove(){
        this.selectedItem=null;
    }
}