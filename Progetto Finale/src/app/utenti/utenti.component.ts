import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  lista_utenti: any;
  isLogged=this.mieiUtenti.idLogged;
  pagina=0;//pagina=0
  totale_elementi:any;
  totale_elementi_pagina=10;
  constructor(public mieiUtenti: UsersService) { 
    
  }

  ngOnInit(): void {
    if(this.isLogged){
    this.mieiUtenti.getUsers()
      .subscribe(value => {this.lista_utenti = value;
      console.log(this.lista_utenti.content)
      })}
      else{console.log("Non sei loggato!!!!")}
  }

}
