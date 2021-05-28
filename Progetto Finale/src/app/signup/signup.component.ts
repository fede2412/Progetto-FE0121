import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { NuovoUtente } from '../models/nuovo_utente';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:string;
  password:string;
  email:string;
  role=["user"];
  utente:NuovoUtente;
  constructor(private myHttp: HttpClient,
    public mieiUtenti:UsersService) { }

  ngOnInit(): void {
  }
  signup(){
    this.utente={
      username:this.username,
      password:this.password,
      email:this.email,
      role:this.role
    }
    this.mieiUtenti.postSignup(this.utente)
    .subscribe(value => {console.log(value)},
    error=>console.log(error))
    console.log(this.utente)
  }
}
