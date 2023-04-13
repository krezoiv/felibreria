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

  insertarDetVta(det:any){
    return this.http.post(`${this.url}/ventas/detalleVenta`, det)
  }

  getLastIdVentas(){
    return this.http.get(`${this.url}/ventas/lastId`)
  }

  listarDetalleVenta(ventas: any){
    return this.http.post(`${this.url}/ventas/listaDetVenta`, ventas)
  }
}
