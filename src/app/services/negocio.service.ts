import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NegocioI, Negocios } from '../models/negocio';
import { Observable } from 'rxjs';



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
