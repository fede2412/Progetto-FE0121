import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FattureService } from 'src/app/services/fatture.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente-fatture',
  templateUrl: './cliente-fatture.component.html',
  styleUrls: ['./cliente-fatture.component.css']
})
export class ClienteFattureComponent implements OnInit {
  myId: string;
 lista_fatture:any;
  contenuto:any;
  pagina=0;
  totale_elementi:any;
  totale_elementi_pagina=10;
  constructor(private myActRoute: ActivatedRoute,
    public mieFatture: FattureService,
    public myHttp: HttpClient) {
      this.myActRoute.paramMap
      .subscribe(
        myParams => {
          this.myId = myParams.get('id');
          console.log(this.myId)
        }
      )
      this.getPageFromService(this.pagina);
     }
url:string;
  ngOnInit(): void {
  }
 
  getPageFromService(pagina) {
    this.mieFatture.getFattureCliente(this.myId,pagina-1, this.totale_elementi_pagina)
      .subscribe(response => {this.lista_fatture = response;
      this.contenuto=this.lista_fatture.content;
      this.totale_elementi=this.lista_fatture.totalElements;
    });
      
  }
}
