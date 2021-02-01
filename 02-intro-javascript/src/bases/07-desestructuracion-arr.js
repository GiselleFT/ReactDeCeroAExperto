//Desestructuración de arreglos
//Asignación desestructurante

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

/*Se extrae de acuerdo a la posición 
en el arreglo
*/

//3era posición en el arreglo
const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const state = (valor) => {
    return [valor, () => {console.log('Hola Mundo');}];
}

// const arr = state(6);
// arr[1]();
// console.log(arr);

const [nombre, setNombre] = state(6);
console.log(nombre);
setNombre();
