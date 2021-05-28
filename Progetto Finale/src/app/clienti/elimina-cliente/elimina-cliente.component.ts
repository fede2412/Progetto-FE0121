import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti.service';

@Component({
  selector: 'app-elimina-cliente',
  templateUrl: './elimina-cliente.component.html',
  styleUrls: ['./elimina-cliente.component.css']
})
export class EliminaClienteComponent implements OnInit {
  myId: any;
  constructor(private myActRoute: ActivatedRoute,
    public mieiClienti: ClientiService) {
    this.myActRoute.paramMap
      .subscribe(
        myParams => {
          this.myId = myParams.get('id');
          console.log(this.myId)
        }
      )
  }

  ngOnInit(): void {
  }
  elimina() {

    this.mieiClienti.deleteCliente(this.myId)
      .subscribe(value => console.log(value))
  }
}
