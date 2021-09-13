/*
    ===== Código de TypeScript =====
*/

let habilidades :string []= ['fuerza', 'velocidad'];

interface Personaje{
    nombre:string;
    hp:number;
    habilidades: string[];
    puebloNatal?: String;
}

const personaje: Personaje = {

    nombre: 'toki',
    hp: 100,
    habilidades: ['fuerza', 'velocidad']
    
};

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);