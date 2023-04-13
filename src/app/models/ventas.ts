import { Negocios } from "./negocio";


export class ventas{

    constructor(
        public idventas : number,
        public fecha : string,
        public  monto : number
    ){}
}

export class detalleVentas {
    
    constructor(
        public iddetalle : number,
        public id_negocio : Negocios,
        public idventas : ventas,
        public monto : number
    ){}
}