import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private url= 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  insertarVentas(ventas:any){
    return this.http.post(`${this.url}/ventas`, ventas)
  }
}
