// import React, { Fragment } from 'react'
import React from 'react'

//Functional components

/*Todos los componentes reciiben props del componente padre*/ 
/*Desestructuración de props, saludo y puede llevar un valor por
defecto en caso de undefined, o que no sea definido por el componente padre*/ 
const PrimeraApp = ({saludo = 'Hola mundo'}) => {
    /*No se imprimen: Booleanos, Objetos mandan error
    */
    // const saludo = 'Hola mundo';//{nombre: 'Giselle'};//[1,2,3]; //true; //123.456; //123;

    // console.log(props);

    /*Para retornar varios elementos html
    tienen que estar envueltos en un <div></div> 
    o en un fragment, el cual ya no muestra un div en el DOM
    o se puede envolver en etiquetas vacías, como un fragment 
    sin necesidad de importarlo*/
    return (
        <>
            <h1>{saludo}</h1>
            {/* <h1>{props.saludo}</h1> */}
            {/* <h1>{saludo}</h1> */}
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>Mi primera aplicación</p>
        </>  
    );

}



export default PrimeraApp;

