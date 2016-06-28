import {Component} from '@angular/core';
import {TemplateDriverFormComponent} from './template-driver-form.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
          <h1>Angular 2 Boilerplate</h1>
          <my-template-driven></my-template-driven>
        </div>  
    `,
    directives:[TemplateDriverFormComponent]
})
export class AppComponent {

}