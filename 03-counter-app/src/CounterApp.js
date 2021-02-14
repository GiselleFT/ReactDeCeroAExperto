import React from 'react';
import PropTypes from 'prop-types';

//Tarea

const CounterApp = ({value}) => {
    /*Función disparada en el evento onClick */
    const handleAdd = (e) => {
        console.log(e);
    }


    return(
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>

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