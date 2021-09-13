/*
    ===== Código de TypeScript =====
*/


function sumar(a:number , b:number): number{
    return (a+b);
}

const sumarFlecha = (a:number,b:number):number => { return a+b;}

function multiplicar(numero: number, otroNumero?:number, base:number = 2) : number{
    return numero*base;
}

function multiplicarOk(numero: number, base:number, otroNumero?:number) : number{
    return numero*base;
}

const resultado = multiplicar(10,0,10);

const resutado1 = multiplicar(10,20);

const resutado2 = multiplicarOk(10,20);

console.log(resultado);
console.log(resutado1);
console.log(resutado2);


interface PersonajeLOR{
    nombre: string;
    pv:number;
    mostrarHp: () => void;
}

function curar(personaje:PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;
    
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Toki',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();