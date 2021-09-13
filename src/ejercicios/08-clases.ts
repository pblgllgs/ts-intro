/*
    ===== Código de TypeScript =====
*/


class PersonaNormal{

    constructor(
        public nombre:string,
        public direccion:string){

    }
}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string
    ){
        super(nombreReal,'Un lugar en USA');
    }
}

const ironman = new Heroe('IronMan',20,'tony stark');

console.log(ironman);