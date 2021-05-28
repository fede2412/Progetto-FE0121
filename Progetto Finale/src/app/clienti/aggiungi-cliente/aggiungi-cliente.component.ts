import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClientiService } from 'src/app/services/clienti.service';
import { LocalitaService } from 'src/app/services/localita.service';

@Component({
  selector: 'app-aggiungi-cliente',
  templateUrl: './aggiungi-cliente.component.html',
  styleUrls: ['./aggiungi-cliente.component.css']
})
export class AggiungiClienteComponent implements OnInit {
  cliente: Cliente={
    id:0,
   ragioneSociale:'',
    partitaIva:'',
    tipoCliente:'',
    email:'',
    pec:'',
    telefono:'',
    nomeContatto:'',
    cognomeContatto:'',
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
  lista_province:any;
  lista_comuni:any;
  constructor(public mieiClienti: ClientiService,
    public mieProvince:LocalitaService) {
    
   }

  ngOnInit(): void {
    this.mieProvince.getProvince()
    .subscribe(
     value => {this.lista_province=value;
      console.log(this.lista_province.content)
     }
    )
    this.mieProvince.getComuni()
    .subscribe(
     value => {this.lista_comuni=value;
      console.log(this.lista_comuni.content)
     }
    )
  }
  aggiungi(){
   //console.log(this.cliente)
   //console.log(this.cliente.indirizzoSedeOperativa.comune.id)
   //console.log(Number(this.cliente.indirizzoSedeOperativa.comune.id))
   
   this.cliente.indirizzoSedeOperativa.comune.id=Number(this.cliente.indirizzoSedeOperativa.comune.id);
   this.cliente.indirizzoSedeOperativa.comune.provincia.id=Number(this.cliente.indirizzoSedeOperativa.comune.provincia.id);
   this.cliente.indirizzoSedeLegale.comune.id=Number(this.cliente.indirizzoSedeOperativa.comune.id);
  // this.cliente.indirizzoSedeLegale.comune.provincia.id=Number(this.cliente.indirizzoSedeOperativa.comune.provincia.id);
   console.log(this.cliente)
   //this.cliente.indirizzoSedeOperativa.provincia.id=Number(this.cliente.indirizzoSedeOperativa.comune.id);
   this.mieiClienti.postCliente(this.cliente)
    .subscribe(
      value =>console.log(value)
    )
  }
}
/*
{
    "id": 129,
    "ragioneSociale": "Bruno",
    "partitaIva": "14812266616",
    "tipoCliente": "SRL",
    "email": "rosalino.caruso@gmail.com",
    "pec": "antonio.damico@gmail.com",
    "telefono": "+38 855 62 44 5685",
    "nomeContatto": "Sarita",
    "cognomeContatto": "Serr",
    "telefonoContatto": "380.260.3225",
    "emailContatto": "armando.martinelli@hotmail.com",
    "indirizzoSedeOperativa": {
        "id": 2,
        "via": "Contrada Gastone 4, Piano 4",
        "civico": "698",
        "cap": "38615",
        "localita": "Vania del friuli",
        "comune": {
            "id": 1,
            "nome": "LASTRA A SIGNA",
            "provincia": {
                "id": 1,
                "nome": "FIRENZE",
                "sigla": "FI"
            }
        }
    },
    "indirizzoSedeLegale": {
        "id": 1,
        "via": "Strada Ricci 55, Appartamento 58",
        "civico": "925",
        "cap": "65995",
        "localita": "Ivonne umbro",
        "comune": {
            "id": 1,
            "nome": "LASTRA A SIGNA",
            "provincia": {
                "id": 1,
                "nome": "FIRENZE",
                "sigla": "FI"
            }
        }
    },
    "dataInserimento": "2019-06-01T08:11:01.911+00:00",
    "dataUltimoContatto": "2021-03-24T21:32:06.375+00:00"
}

*/