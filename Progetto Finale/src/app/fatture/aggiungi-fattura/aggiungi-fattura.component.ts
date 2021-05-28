import { Component, OnInit } from '@angular/core';
import { Fattura } from 'src/app/models/fattura';
import { FattureService } from 'src/app/services/fatture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aggiungi-fattura',
  templateUrl: './aggiungi-fattura.component.html',
  styleUrls: ['./aggiungi-fattura.component.css']
})
export class AggiungiFatturaComponent implements OnInit {
  myId: any;
  data = new Date();
  fattura: Fattura = {
    data: "",
    numero: 0,
    anno: this.data.getFullYear(),
    importo: 0,
    stato: {
      id: 0,
      nome: ""
    },
    cliente: {
      id: 0
    }
  }
  listaStatiFatture: any;
  constructor(public mieFatture: FattureService,
    private myActRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.myActRoute.paramMap
      .subscribe(
        myParams => {
          this.myId = myParams.get('id');
          console.log(this.myId)
        }
      )
    this.fattura.cliente.id = Number(this.myId);
    this.mieFatture.getStatoFattura()
      .subscribe(value => {
        this.listaStatiFatture = value
        console.log(this.listaStatiFatture.content)
      })
  }
  aggiungi(){
    this.fattura.anno=this.fattura.data.year;
    this.fattura.stato.id=Number(this.fattura.stato.id);
    this.fattura.data = this.cambiodata(this.fattura.data)
    this.mieFatture.postFattura(this.fattura)
     .subscribe(
       value =>console.log(value)
     )
   }
   cambiodata(data_fattura) {
    let nuova_data = data_fattura
    let anno = nuova_data.year;
    let mese = nuova_data.month - 1;
    let giorno = nuova_data.day + 1;
    nuova_data = new Date(anno, mese, giorno);
    let d = nuova_data.toISOString();
    let g = d.slice(0, 23)
    let h = `${g}+00:00`;
    nuova_data = h;
    return nuova_data;
  }
 

}
