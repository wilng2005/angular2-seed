import {Injectable} from "@angular/core"

@Injectable()

export class LoggingService {
    log(message: string){
        console.log(message);
    }
}