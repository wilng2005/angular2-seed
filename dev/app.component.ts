import {Component} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component'
@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h2>Shopping List</h2>
            <shopping-list></shopping-list>
        </div>
    `,
    directives: [ShoppingListComponent]
})
export class AppComponent {

}