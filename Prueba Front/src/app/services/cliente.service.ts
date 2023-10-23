import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http: HttpClient) { }

  getClienteByTipoAndCedula(tipo: string , cedula: string){
    const headersApi = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.get<Cliente>('http://localhost:8090/clientes/'+tipo+'/'+cedula ,{headers: headersApi});
  }

}
