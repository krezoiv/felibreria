export class Negocios {
    constructor(
    
        public negocio : string,
        public id_negocio : number
        

    ) { }
}

export interface NegocioI {
    id_negocio : number,
    negocio : string
}