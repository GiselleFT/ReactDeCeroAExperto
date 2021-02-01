//Promesas
import {getHeroeById} from './bases/08-imp-exp'; 

//Son asíncronas
/*
resolve cuando la promesa es exitosa
reject cuando la promesa falle
*/
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => { 
//         //Tarea
//         // console.log('2 segundos despues');
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000)
// });

// //then la promesa se hizo correctamente (con resolve)
// //catch arrojó un error (reject u otro error)
// //finally lo último a ejecutar

// promesa.then( (heroe) => {
//     console.log('heroe ', heroe);
// })
// .catch(err => {console.log(err);})


const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => { 
            //Tarea
            // console.log('2 segundos despues');
            const heroe = getHeroeById(id);
            // console.log(heroe);
            if(heroe === undefined){
                reject('Heroe no encontrado');
            }
            else{
                resolve(heroe);
            }
            // reject('No se pudo encontrar el heroe');
        }, 2000)
    });

    // return promesa;
}

// getHeroeByIdAsync(1)
//     .then(heroe => console.log('Heroe', heroe))
//     .catch(err => {console.log(err);});

//Se imprime lo que devuelve resolve o reject
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);


