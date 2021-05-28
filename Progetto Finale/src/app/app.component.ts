import { Component} from '@angular/core';
import { ClientiService } from './services/clienti.service';
import { FattureService } from './services/fatture.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EpicodeFinal';
  constructor(public myClienti:ClientiService,
    private myFatture:FattureService){}
  ngOnInit(): void {
  //this.myClienti.getClienti();
   //this.myFatture.getFatture();
 }
}
