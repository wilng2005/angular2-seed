import {Component} from "@angular/core";

@Component({
    selector:'my-template-driven',
    template: `
    <h2>Sign-up Form</h2>
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <div class="form-group">
        <label for="mail">Mail</label>
        <input ngControl="email" type="text" class="form-control" id="mail" placeholder="Mail" required>
      </div> 
      <div class="form-group">
        <label for="password">Password</label>
        <input ngControl="password" type="text" class="form-control" id="password" placeholder="Password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input ngControl="confirm-password" type="text" class="form-control" id="confirm-password" placeholder="Confirm Password" required>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    `
})

export class TemplateDriverFormComponent{

    onSubmit(form){
        console.log(form.value);
    }
}