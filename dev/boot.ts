import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {LoggingService} from "./services/logging.service";
import {DataService} from "./services/data.service";

bootstrap(AppComponent,[DataService]);