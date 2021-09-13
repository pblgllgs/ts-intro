/*
    ===== Código de TypeScript =====
*/

import { Producto, calculaISV } from "./06-Desetructuracion-funcion";

const carritoCompras: Producto [] = [
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 200
    }
];

const[total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', total);

