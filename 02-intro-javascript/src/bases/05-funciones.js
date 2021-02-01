//Funciones
/*Al igualarlo a una constante es mejor
para evitar que se asigne a valores y se pierda la referencia
*/
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

//Funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

/*Cuando el cuerpo de la función solo
es un return*/
const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;


//Se pierde la referencia a la función
//saludar = 30;

console.log(saludar('Giselle'));
console.log(saludar2('Panky'));
console.log(saludar3('Eric'));
console.log(saludar4());

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Panky06'
//     }
// }

//Se pone entre paréntesis, para omitir "return"
const getUser = () => ({
            uid: 'ABC123',
            username: 'Panky06'
        })

//console.log(getUser());
const user = getUser();
console.log(user);

//Tarea
//1. Transformar a una función flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Giselle');
console.log(usuarioActivo);

