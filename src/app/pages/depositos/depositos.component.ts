import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Negocios } from 'src/app/models/negocio';
import { NegocioService } from 'src/app/services/negocio.service';
import { VentasService } from 'src/app/services/ventas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html',
  styleUrls: ['./depositos.component.css']
})

export class DepositosComponent {
  public negocios: Negocios[]=[];
  public ventasForm = this.formBuilder.group({
    fecha: [''],
    ventas_libreria:[''],
    ventas_tienda:[''],
    ventas_impresiones: [''],
    ventas_refa:[''],
  });

  ngOnInit(): void {
    this.listaNegocios();
  }
  constructor(
    private formBuilder : FormBuilder,
    private ventasService : VentasService,
    private negocioService :NegocioService
  ){}

  listaNegocios(){
    this.negocioService.listarNegocio().subscribe((res: any) => {
      console.log(res)
      this.negocios = res;
    })
  }
  open(){
    this.listaNegocios();
  }

  insertarVentas(){
    this.ventasService.insertarVentas(this.ventasForm.value).subscribe((res:any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Guardado',
        showConfirmButton: false,
        timer: 1500
      })
      this.ventasForm.reset();
    })
  }
}
