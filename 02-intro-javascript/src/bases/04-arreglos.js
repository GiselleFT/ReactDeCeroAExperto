//Arreglos: Coleccion de informacion dentro de una variable
//[]
//const arreglo = new Array(100);

const arreglo = [1,2,3,4];
//arreglo.push(1); //Insertar un valor al arreglo
//arreglo.push(2); //Insertar un valor al arreglo
//arreglo.push(3); //Insertar un valor al arreglo
//arreglo.push(4); //Insertar un valor al arreglo

//let arreglo2 = [arreglo,5];
let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

//La función se ejecutará por cada elemento del arreglo
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

