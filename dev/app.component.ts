import {Component} from '@angular/core';
import {DataDrivenFormComponent} from './data-driven-form.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
          <h1>Angular 2 Boilerplate</h1>
          <my-data-driven></my-data-driven>
        </div>  
    `,
    directives:[DataDrivenFormComponent]
})
export class AppComponent {

}