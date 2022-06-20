import { Component } from '@angular/core';
import { ConnectorService } from './connector.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'new-sormeh';
  constructor(svc : ConnectorService){
    svc.printToConsole("go to in shanse")
   
  }
  
}
