import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// const saludo = <h1>Hola mundo</h1>;

//Para renderizar:
/*Se muestra en el root del index.html*/
const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo="Hola, soy Giselle"/>, divRoot);
ReactDOM.render(<CounterApp value={6}/>, divRoot);



