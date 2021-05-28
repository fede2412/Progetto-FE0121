import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  idLogged:number;
  url = "https://epicode.online/epicodebeserviceunauth/api/users";
  url2 ="https://epicode.online/epicodebeserviceunauth/api/auth/login";
  url3="https://epicode.online/epicodebeserviceunauth/api/auth/signup";
  constructor(private myHttp: HttpClient) { }
  getUsers() {
    return this.myHttp.get(this.url)
  }
  postLogin(utente){
    return this.myHttp.post(`${this.url2}`,utente)
  }
  postSignup(utente){
    return this.myHttp.post(`${this.url3}`,utente)
  }
}
