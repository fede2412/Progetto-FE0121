import { Component, OnInit } from '@angular/core';
import { FattureService } from '../services/fatture.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {
  lista_fatture:any;
  contenuto:any;
  pagina=0;//pagina=0
  totale_elementi:any;
  totale_elementi_pagina=10;
  constructor(private myHttp:HttpClient,
    private mieFatture:FattureService) {
      this.getPageFromService(this.pagina);
     }

  ngOnInit(): void {
    //console.log(this.lista_fatture)
  }
  getPageFromService(pagina) {
    this.mieFatture.getFatture(pagina-1, this.totale_elementi_pagina)//pagina-1
      .subscribe(response => {this.lista_fatture = response;
      this.contenuto=this.lista_fatture.content;
      this.totale_elementi=this.lista_fatture.totalElements;
    });
      
  }
}
