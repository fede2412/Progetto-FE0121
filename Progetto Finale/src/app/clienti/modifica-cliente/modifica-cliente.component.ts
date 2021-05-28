import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClientiService } from 'src/app/services/clienti.service';


@Component({
  selector: 'app-modifica-cliente',
  templateUrl: './modifica-cliente.component.html',
  styleUrls: ['./modifica-cliente.component.css']
})
export class ModificaClienteComponent implements OnInit {
  myId: string;
  url: string;
  cliente: any;
  cliente_aggiornato: any;
  constructor(private myActRoute: ActivatedRoute,
    public mieiClienti: ClientiService) {
    this.myActRoute.paramMap
      .subscribe(
        myParams => {
          this.myId = myParams.get('id');
        }
      )
    this.mieiClienti.getClientedaId(this.myId)
      .subscribe(value => this.cliente = value)

  }
  ngOnInit(): void {

  }
  modifica() {
    this.cliente_aggiornato = this.cliente
    console.log(this.cliente_aggiornato)
    this.mieiClienti.putCliente(this.myId, this.cliente_aggiornato)
      .subscribe(
        value => {
          console.log(value)
        }
      )
  }

}


/*

cliente_aggiornato: Cliente={
    id:'',
   ragioneSociale:'',
    partitaIva:'',
    tipoCliente:'',
    email:'',
    pec:'',
    telefono:'',
    nomeContatto:'',
    cognomeContatt:'',
    telefonoContatto:'',
    emailContatto:'',
    indirizzoSedeOperativa: {
        id:0,
        via :'',
        civico:'',
        cap:'',
        localita:'',
        comune: {
            id:0,
            nome:'',
           provincia: {
                id:0,
                nome:'',
                sigla:'',
            }
        }
    },
    indirizzoSedeLegale: {
        id:0,
        via:'',
        civico:'',
        cap:'',
        localita:'',
        comune: {
            id:0,
            nome:'',
            provincia: {
                id:0,
                nome:'',
                sigla:'',
            }
        }
    },
    dataInserimento:'',
    dataUltimoContatto:'',
  };

*/