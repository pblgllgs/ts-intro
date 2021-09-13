/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 12,
    segundo: 30,
    cancion: "Take on me",
    detalles: {
        autor: 'Test',
         anio: 1989
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor,anio} = detalles;

/*
console.log('El volumen es: '+ volumen);
console.log('El segundo es: '+ segundo);
console.log('La cancion es: '+ cancion);
console.log('los detalles son '+ autor +' y el año es '+ anio );
*/

const dbz:string [] =['goku','vegeta','trunks'];

const [p1, p2, p3]= dbz;

console.log(p1);
console.log(p2);
console.log(p3);