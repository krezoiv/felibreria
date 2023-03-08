import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html',
  styleUrls: ['./depositos.component.css']
})

export class DepositosComponent {
  public ventasForm = this.formBuilder.group({
    fecha: ['2023-03-12'],
    ventas_libreria:['1000'],
    ventas_tienda:['1500'],
    ventas_impresiones: ['2300'],
    ventas_refa:['5000'],
  });

  constructor(
    private formBuilder : FormBuilder,
    private ventasService : VentasService
  ){}

  insertarVentas(){
    this.ventasService.insertarVentas(this.ventasForm.value).subscribe((res:any) => {
      console.log(res);
    })
  }
}
