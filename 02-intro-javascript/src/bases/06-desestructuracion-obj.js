//Desestructuración
//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    //rango: 'Soldado'
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

/*Extrae en las llaves el valor nombre 
del objeto persona
persona.nombre
*/
// const {nombre} = persona;
// console.log(nombre);

// const {nombre:nombre2} = persona;
// console.log(nombre2); 

/*Para extraer más propiedades
del objeto*/
// const {nombre, edad, clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = (usuario) => {
//     console.log(usuario);
// }

/*Si el valor de rango no viene definido
en el objeto persona, le coloca el valor de Capitan*/
const context = ({clave, nombre, edad, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.23,
            lng: 26.6
        }
    }

}

// const avenger = context(persona);
// console.log(avenger);
const {nombreClave, anios, latlng:{lat, lng} } = context(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
