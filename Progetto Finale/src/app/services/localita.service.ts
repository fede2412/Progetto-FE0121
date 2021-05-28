import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalitaService {
url="https://epicode.online/epicodebeserviceunauth/api/province?page=0&size=20&sort=id,ASC";
url2="https://epicode.online/epicodebeserviceunauth/api/comuni?page=0&size=20&sort=id,ASC";
  constructor(private myHttp:HttpClient) { }
  getProvince(){
    return this.myHttp.get(this.url)

  }
  getComuni(){
    return this.myHttp.get(this.url2)

  }
}
