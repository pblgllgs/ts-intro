/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1: Pasajero ={
    nombre: 'Pablo'
}

const pasajero2: Pasajero ={
    nombre: 'Carlos',
    hijos:['natalia','gabriel']
}

function imprimeHijos(pasajero:Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);