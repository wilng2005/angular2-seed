import {Component,OnInit} from "@angular/core";
import {FormBuilder,Validators,ControlGroup} from "@angular/common";

@Component({
    selector:'my-data-driven',
    template: `
    <h2>Sign-up Form</h2>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="email">Email</label>
        <input [ngFormControl]="myForm.controls['email']" type="text" class="form-control" id="email" placeholder="Email"  >
        <span class="text-danger">Not valid</span>
      </div> 
      <div class="form-group">
        <label for="password">Password</label>
        <input [ngFormControl]="myForm.controls['password']" type="text" class="form-control" id="password" placeholder="Password"  >
        <span class="text-danger">Not valid</span>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input [ngFormControl]="myForm.controls['confirmPassword']" type="text" class="form-control" id="confirmPassword" placeholder="Confirm Password"  >
        <span class="text-danger">Not valid</span>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    <h2>You Submitted</h2>
    <div>Email:{{user.email}}</div>
    <div>Password:{{user.password}}</div>
    `
})

export class DataDrivenFormComponent implements OnInit{
    user={email:"",password:""}
    myForm: ControlGroup;
    constructor(private _formBuilder:FormBuilder){}

    onSubmit(form){
        console.log(this.myForm);
    }

    ngOnInit():any{
        this.myForm=this._formBuilder.group({
            'email':['',Validators.required],
            'password':['',Validators.required],
            'confirmPassword':['',Validators.required]
        });
    }
}