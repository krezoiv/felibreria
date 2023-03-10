import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  private url= 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  listarNegocio(){
    return this.http.get(`${this.url}/negocio`)
  }
}
