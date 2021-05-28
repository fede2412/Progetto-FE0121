import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FattureService } from 'src/app/services/fatture.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Fattura } from 'src/app/models/fattura';

@Component({
  selector: 'app-modifica-fatture',
  templateUrl: './modifica-fatture.component.html',
  styleUrls: ['./modifica-fatture.component.css']
})
export class ModificaFattureComponent implements OnInit {
  myId: string;
  fattura: any;
  fattura_aggiornata: any;
  data:any;
  data_oggi= new Date();
  listaStatiFatture: any;
  //data: { anno: number, mese: number, giorno: number };
  constructor(private myActRoute: ActivatedRoute,
    public mieFatture: FattureService) {
    this.myActRoute.paramMap
      .subscribe(
        myParams => {
          this.myId = myParams.get('id');
          console.log(this.myId)
        }
      )
    this.mieFatture.getFatturadaId(this.myId)
      .subscribe(value => {this.fattura = value;
      console.log(this.fattura.data);
      console.log(this.data_oggi)
      /*console.log(this.data_oggi.getFullYear())
      console.log(this.data_oggi.getMonth())
      console.log(this.data_oggi.getDate())*/
      //this.fattura.data=this.data;
     //console.log(this.data);//undefined!!!!!
      })
      this.mieFatture.getStatoFattura()
      .subscribe(value => {
        this.listaStatiFatture = value
        console.log(this.listaStatiFatture.content)
      })
  }

  ngOnInit(): void {
    
  }
  modifica() {
    
    this.fattura_aggiornata = this.fattura
    let anno=this.fattura_aggiornata.data.year;
    this.fattura_aggiornata.anno=anno;
    let mese=this.fattura_aggiornata.data.month-1;
    let giorno=this.fattura_aggiornata.data.day;
    this.fattura_aggiornata.data=new Date(anno,mese,giorno);
    let d = this.fattura_aggiornata.data.toISOString().slice(0,23);
    let h = `${d}+00:00`;
    this.fattura_aggiornata.data=h;
    this.mieFatture.putFattura(this.myId, this.fattura_aggiornata)
      .subscribe(
        value => {
          console.log(value);
          
        }
      )
  }
  

}
