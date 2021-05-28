import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FattureService {
  lista_fatture: any;
  fattura: any;
  url = "https://epicode.online/epicodebeserviceunauth/api/fatture?";
  url2 = "https://epicode.online/epicodebeserviceunauth/api/fatture/cliente/";
  url3 = `https://epicode.online/epicodebeserviceunauth/api/fatture/`;
  url4=`https://epicode.online/epicodebeserviceunauth/api/fatture`;
  url5=`https://epicode.online/epicodebeserviceunauth/api/statifattura?page=0&size=20&sort=id,ASC`;
  constructor(public myHttp: HttpClient) { }
  getFatture(pagina: number, collectionSize: number) {
    return this.myHttp.get(`${this.url}page=${pagina}&size=${collectionSize}&sort=id,ASC`)
  }
  getFattureCliente(id: string, pagina: number, collectionSize: number) {
    return this.myHttp.get(`${this.url2}${id}?page=${pagina}&size=${collectionSize}&sort=id,ASC`)
  }
  getFatturadaId(id: string) {
    return this.myHttp.get(`${this.url3}${id}`)
  }
  getStatoFattura(){
    return this.myHttp.get(`${this.url5}`);
  }
  putFattura(id: string, fattura: any) {
    return this.myHttp.put(`${this.url3}${id}`, fattura);
  }
  postFattura(fattura) {
    return this.myHttp.post(`${this.url4}`,fattura)
  }
  deleteFattura(id:any){
    return this.myHttp.delete(`${this.url3}${id}`);
  }
}
