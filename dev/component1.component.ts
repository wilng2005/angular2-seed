import {Component} from '@angular/core';
import {LoggingService} from "./services/logging.service"
@Component({
    selector: 'component-1',
    template: `
        <div class="form-inline">
            <input class="form-control" type="text" #message>
            <button class="btn btn-default" (click)="onLog(message.value)">Send</button>
        </div>
    `,
    providers:[LoggingService]
})

export class Component1Component {
    constructor(private _loggingService:LoggingService){

    }
    onLog(message:string){
        this._loggingService.log(message);
    }
}