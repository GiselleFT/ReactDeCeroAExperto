//Operador ternario

const activo = true;

// let mensaje = '';
// if(activo){
//     mensaje = 'Activo';
// }
// else{
//     mensaje = 'Inactivo';
// }

// const mensaje = (activo)?'Activo':'Inactivo';

/*Para procesar solo el resultado
cuando la condicion se cumple, en caso contrario
devuelve la const activo*/
const mensaje = activo && 'Activo';

console.log(mensaje);

