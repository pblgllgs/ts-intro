/*
    ===== Código de TypeScript =====
*/

interface Producto{
    desc:string;
    precio: number;
}

const telefono:Producto = {
    desc: "Samsung note 9",
    precio: 500
}

const tablet:Producto = {
    desc: "ipad",
    precio: 900 
}

function calcultaISV(productos: Producto[]): [number, number]{

    let total = 0;

    productos.forEach( ({precio})   => {

        total += precio;

    })

    return [total,total * 0.15];
}

const articulos = [telefono, tablet]

const [total,isv] = calcultaISV(articulos);



console.log('Total', total);
console.log('ISV', isv);