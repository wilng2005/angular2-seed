import {Component} from "@angular/core";

@Component({
    selector:'my-template-driven',
    template: `
    <h2>Sign-up Form</h2>
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input ngControl="email" type="text" class="form-control" id="email" placeholder="Email" required #email="ngForm">
        <span class="text-danger" *ngIf="!email.valid">Not valid</span>
      </div> 
      <div class="form-group">
        <label for="password">Password</label>
        <input ngControl="password" type="text" class="form-control" id="password" placeholder="Password" required #password="ngForm">
        <span class="text-danger" *ngIf="!password.valid">Not valid</span>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input ngControl="confirmPassword" type="text" class="form-control" id="confirmPassword" placeholder="Confirm Password" required #confirmPassword="ngForm">
        <span class="text-danger" *ngIf="!confirmPassword.valid">Not valid</span>
      </div>
      <button type="submit" class="btn btn-default" [disabled]="!f.valid || password.value!=confirmPassword.value">Submit</button>
    </form>
    <h2>You Submitted</h2>
    <div>Email:{{user.email}}</div>
    <div>Password:{{user.password}}</div>
    `
})

export class TemplateDrivenFormComponent{
    user={email:"",password:""}
    onSubmit(form){
        this.user.email=form.value['email'];
        this.user.password=form.controls['password'].value;

    }
}