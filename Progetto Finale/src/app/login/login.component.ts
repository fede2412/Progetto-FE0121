import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Utente } from '../models/utente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged:any;
  username: string;
  password: string;
  utente: Utente;
  constructor(private myHttp: HttpClient,
    public mieiUtenti: UsersService
  ) { }

  ngOnInit(): void {
  }
  login() {
    this.utente = {
      username: this.username,
      password: this.password
    }
    this.mieiUtenti.postLogin(this.utente)
      .subscribe(value => {
        console.log(value);
        this.logged=value;
        console.log(this.logged.id)
        this.mieiUtenti.idLogged=this.logged.id;
      })
    console.log(this.utente)
  }

}
