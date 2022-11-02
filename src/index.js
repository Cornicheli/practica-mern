import React from 'react';//linea y 2 importo modulos
import ReactDOM from 'react-dom/client';
import './index.css'; //los estiolos son los unicos que se importan directamente
import App from './App'; // aqui importo otro componente

//la estructura de lo que se importa es la siguiente
//1ero escribo la palabra import
//2do escribo el nombre lo que necesito
//escribo la palabra FROM desde lo que estoy importando
//// escribo la ruta de lo que necesito

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

);

//todo lo que necesites, lo importas y lo exportas desde un modulo de la carpeta node modules