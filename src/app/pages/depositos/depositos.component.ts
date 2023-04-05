import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NegocioI, Negocios } from 'src/app/models/negocio';
import { NegocioService } from 'src/app/services/negocio.service';
import { VentasService } from 'src/app/services/ventas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html',
  styleUrls: ['./depositos.component.css']
})

export class DepositosComponent {
   negocios: Negocios[] =[];
   id!: Number | any;
  public ventasForm = this.formBuilder.group({
    fecha: [''],
    id_negocio : [''],
    idventas:[''],
    monto:['']
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
    this.negocioService.listarNegocio().subscribe((res : any) => {
      
    this.negocios = res;
    
    })
  }

  open(){
  
  }

  apertura(){
    this.insertarVentas();
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
      this.lastId();
    })
  }

  lastId(){
    this.ventasService.getLastIdVentas().subscribe((res:any) => {
      console.log(res);
      this.id = res
      console.log(this.id)
      //this.ventasForm.controls['idventas'].setValue(res);
    })
  }

  prueba(){
   this.ventasService.insertarDetVta(this.ventasForm.value).subscribe((res:any) => {
    Swal.fire({
      position: 'top-end',
        icon: 'success',
        title: 'Guardado',
        showConfirmButton: false,
        timer: 1500
    })
   })
  }

  
}
