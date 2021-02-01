//Import / export
//imp
import heroes, {owners} from '../data/heroes';

console.log(owners);
// console.log(heroes);

//Find solo devuelve 1 elemento del arreglo
const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

// console.log(getHeroeById(2));

/*Filter devuelve todos los elementos del 
arreglo que cumplen con la condición
*/
const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}

console.log(getHeroesByOwner('DC'));
