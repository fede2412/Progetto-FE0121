export interface Fattura {
    data:any,
    numero:number,
    anno:number,
    importo:number,
    stato:{
        id:number,
        nome:string;
    },
    cliente:{
        id:number
    }
}