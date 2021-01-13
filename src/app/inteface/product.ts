//Interfaz se vincula a un modelo de datos para ver cuales son oblicatorios y cuales no
export interface Product {

    title:String;
    desc:String;
    price:number;
    picture:String;
    available?:Boolean;

}
