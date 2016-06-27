import {Component} from '@angular/core';
import {LoggingService} from "./services/logging.service"
import {CalculatorService} from "./services/calculator.service"
import {DataService} from "./services/data.service"

@Component({
    selector: 'component-2',
    template: `
        <h2>Logging Service</h2>
        <div class="form-inline">
            <input class="form-control" type="text" #message>
            <button class="btn btn-default" (click)="onLog(message.value)">Send</button>
        </div>
        <h2>Calculator Service</h2>
        <p class="lead">Add or multiply these two numbers:</p>
        <div class="form-inline">
            <input class="form-control" type="text" #num1>
            <input class="form-control" type="text" #num2>
            <button class="btn btn-default" (click)="onMultiply(num1.value,num2.value)">Multiply</button>
            <button class="btn btn-default" (click)="onAdd(num1.value,num2.value)">Add</button>
            <br>
            <p>Result: {{result}}</p>
            <input type class="form-control" #newData/>
            <button class="btn btn-default" (click)="onInsert(newData.value)">Insert new Data</button>
        </div>
        <h2>Data Service</h2>
        <p class="lead">Add or multiply these two numbers:</p>
        <div class="form-inline">
            <button class="btn btn-default" (click)="onGetData()">Get some data</button>
            <br>
            <p>Data: {{data}}</p>
        </div>
    `,
    providers: [LoggingService,CalculatorService,]
})

export class Component2Component {
    result: string;
    data:string;
    constructor(private _loggingService:LoggingService, private _calculatorService: CalculatorService, private _dataService: DataService){

    }
    onLog(message:string){
        this._loggingService.log(message);
    }

    onMultiply(num1:number,num2:number){
        this.result= ''+this._calculatorService.multiply(+num1,+num2);
    }

    onAdd(num1:number,num2:number){
        this.result= ''+this._calculatorService.add(+num1,+num2);
    }
    onGetData(){
        this.data=this._dataService.getRandomString();
    }
    onInsert(value:string){
        this._dataService.insert(value);
    }
}