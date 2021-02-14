import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Tarea

const CounterApp = ({value}) => {

    /*useState devuelve un arreglo con dos valores: Valor, funcion 
    Se hace la desestructuración*/
    // const [nombre, setNombre] = useState('Giselle');
    // console.log(nombre, setNombre);

    const [counter, setCounter] = useState(0);


    /*Función disparada en el evento onClick */
    const handleAdd = () => {
        // console.log(e);
        /*La función es la forma en la que se le dice a React
        que el valor de counter cambió */
        setCounter(counter + 1);
        // setCounter((c) => c + 1 );
    }


    return(
        <>
            <h1>CounterApp</h1>
            {/* <h2>{value}</h2> */}
            <h2>{counter}</h2>
            {/* Manejo de eventos click, ejecuta una funcion JS */}
            {/* <button onClick={function() {console.log('+1');}}>+1</button> */}
            {/* <button onClick={() => {console.log('+1');}}>+1</button> */}
            {/* <button onClick={(e) => {console.log(e);}}>+1</button> */}
            <button onClick={handleAdd}>+1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;