import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {
  cliente: any;
  cliente2:Cliente;
  url = "https://epicode.online/epicodebeserviceunauth/api/clienti?";
  url2 = `https://epicode.online/epicodebeserviceunauth/api/clienti/`;
  url3="https://epicode.online/epicodebeserviceunauth/api/clienti";
  lista_clienti: any;

  constructor(private myHttp: HttpClient) { }
  getClienti(pagina: number, collectionSize: number) {
    return this.myHttp.get(`${this.url}page=${pagina}&size=${collectionSize}&sort=id,ASC`)
  }
  getClientedaId(id: string) {
    return this.myHttp.get(`${this.url2}${id}`)
  }
  putCliente(id: string, cliente: any) {
    return this.myHttp.put(`${this.url2}${id}`, cliente);
  }
  postCliente(cliente) {
    return this.myHttp.post(`${this.url3}`,cliente)
  }
  deleteCliente(id:any){
    return this.myHttp.delete(`${this.url2}${id}`);
  }
}