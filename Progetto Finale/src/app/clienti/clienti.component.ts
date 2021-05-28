import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
 lista_clienti:any;
 contenuto:any;
 pagina=0;
 vuoto:any
 //totale_elementi=110;
 totale_elementi:any;
 totale_elementi_pagina=10;
  constructor(public mieiClienti:ClientiService) {
    this.getPageFromService(this.pagina);
   }

  ngOnInit(): void {
  } 
  getPageFromService(pagina) {
    this.mieiClienti.getClienti(pagina-1, this.totale_elementi_pagina)
      .subscribe(response => {this.lista_clienti = response;
      this.contenuto=this.lista_clienti.content;
      this.totale_elementi=this.lista_clienti.totalElements;
    });
      
  }
  mostra(){
    alert("eccolo")
  }
}
