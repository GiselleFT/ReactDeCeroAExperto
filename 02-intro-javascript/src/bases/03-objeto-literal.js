
//Objeto, tiene propiedades clave-valor
//{}
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5566,
        lat: 14.3232,
        lng: 34.9233
    }
};

//console.table(persona);
console.log(persona);

//Solo se hace una copia de la referencia del espacio en memoria
//const persona2 = persona;

//Crear un clon del objeto con operador Spread {...objeto}
const persona2 = {...persona };
persona2.nombre = 'Peter';


console.log(persona2);



